import { useEffect, useMemo, useState } from 'react';
import type { ExamPaper, PaperItem } from '../types';
import Icon from './Icon';
import ByteSays from './ByteSays';

interface Props {
  paper: ExamPaper;
  onFinish: (marks: number, total: number) => void;
  onExit: () => void;
}

function normalise(text: string): string {
  return ` ${text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'>=<.+*/%_ -]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `;
}

function markWritten(answer: string, item: Extract<PaperItem, { kind: 'written' }>) {
  const norm = normalise(answer);
  const hits = item.markScheme.map((mp) => mp.accept.some((g) => g.every((kw) => norm.includes(kw.toLowerCase()))));
  return { hits, earned: Math.min(item.marks, hits.filter(Boolean).length) };
}

function fmtTime(s: number) {
  const m = Math.floor(s / 60);
  const r = s % 60;
  return `${m}:${r.toString().padStart(2, '0')}`;
}

export default function PaperRunner({ paper, onFinish, onExit }: Props) {
  const items = useMemo(
    () => paper.sections.flatMap((s) => s.items.map((item) => ({ item, section: s.name }))),
    [paper],
  );

  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [choices, setChoices] = useState<Record<string, number>>({});
  const [written, setWritten] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [left, setLeft] = useState(paper.minutes * 60);

  useEffect(() => {
    if (!started || submitted) return;
    const t = window.setInterval(() => {
      setLeft((v) => {
        if (v <= 1) {
          window.clearInterval(t);
          return 0;
        }
        return v - 1;
      });
    }, 1000);
    return () => window.clearInterval(t);
  }, [started, submitted]);

  const results = useMemo(() => {
    return items.map(({ item }) => {
      if (item.kind === 'mcq') {
        const picked = choices[item.id];
        return { earned: picked === item.answer ? 1 : 0, hits: [] as boolean[], picked };
      }
      const r = markWritten(written[item.id] ?? '', item);
      return { earned: r.earned, hits: r.hits, picked: undefined };
    });
  }, [items, choices, written]);

  const total = items.reduce((s, { item }) => s + item.marks, 0);
  const scored = results.reduce((s, r) => s + r.earned, 0);
  const answered = items.filter(({ item }) =>
    item.kind === 'mcq' ? choices[item.id] !== undefined : (written[item.id] ?? '').trim().length > 0,
  ).length;

  const submit = () => {
    setSubmitted(true);
    onFinish(scored, total);
  };

  useEffect(() => {
    if (started && !submitted && left === 0) submit();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [left, started, submitted]);

  /* ---------------------------------------------------------- start card */

  if (!started) {
    return (
      <div className="view-enter">
        <div className="paper-head">
          <div className="chip-row" style={{ marginBottom: 8 }}>
            <span className="chip teal">{paper.component}</span>
            <span className="chip gold">{`${total} marks`}</span>
            <span className="chip">{`${paper.minutes} minutes`}</span>
          </div>
          <h2>{paper.title}</h2>
          <p className="tiny" style={{ opacity: 0.9, marginBottom: 0 }}>
            {paper.blurb}
          </p>
        </div>

        <div className="card">
          <div className="card-title">
            <Icon name="paper" size={18} />
            Before you start
          </div>
          <ul className="bullets">
            <li>{`There are ${items.length} questions worth ${total} marks in total.`}</li>
            <li>The timer starts when you press begin and the paper submits itself when it runs out.</li>
            <li>Multiple choice questions are marked instantly. Written answers are marked against the mark scheme.</li>
            <li>You can move freely between questions using the number grid at the top.</li>
            <li>Write in full sentences and use the technical words. That is where the marks live.</li>
          </ul>
          <button className="btn wide" onClick={() => setStarted(true)}>
            Begin the paper
          </button>
          <button className="btn ghost wide" style={{ marginTop: 8 }} onClick={onExit}>
            Not yet, take me back
          </button>
        </div>
      </div>
    );
  }

  /* -------------------------------------------------------- results card */

  if (submitted) {
    const pct = Math.round((scored / total) * 100);
    const grade = pct >= 85 ? 'around grade 8 or 9' : pct >= 70 ? 'around grade 7' : pct >= 55 ? 'around grade 5 or 6' : pct >= 40 ? 'around grade 4' : 'below grade 4';

    const bySection = paper.sections.map((s) => {
      const idxs = s.items.map((it) => items.findIndex((x) => x.item.id === it.id));
      const got = idxs.reduce((sum, i) => sum + results[i].earned, 0);
      const max = s.items.reduce((sum, it) => sum + it.marks, 0);
      return { name: s.name, got, max };
    });

    return (
      <div className="view-enter">
        <div className="card center">
          <Icon name={pct >= 70 ? 'trophy' : pct >= 40 ? 'medal' : 'target'} size={44} color="#08979d" />
          <h2 style={{ marginTop: 8 }}>{`${scored} out of ${total}`}</h2>
          <div className="bar" style={{ margin: '10px 0 12px' }}>
            <i style={{ width: `${pct}%` }} />
          </div>
          <p className="muted">
            {`That is ${pct} percent, which on a typical paper sits ${grade}. Time left when you finished: ${fmtTime(left)}.`}
          </p>
          <button className="btn wide" onClick={onExit}>
            Back to the papers
          </button>
        </div>

        <div className="card">
          <div className="card-title">
            <Icon name="chart" size={18} />
            Section breakdown
          </div>
          {bySection.map((s) => (
            <div key={s.name} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700 }}>
                <span>{s.name}</span>
                <span className="muted">{`${s.got} / ${s.max}`}</span>
              </div>
              <div className="bar" style={{ marginTop: 5 }}>
                <i style={{ width: `${(s.got / s.max) * 100}%` }} />
              </div>
            </div>
          ))}
        </div>

        {items.map(({ item }, n) => (
          <div key={item.id} className="card">
            <div className="card-title">{`Question ${n + 1}  (${results[n].earned} of ${item.marks})`}</div>
            <p className="tiny muted">{item.stem}</p>

            {item.kind === 'mcq' ? (
              <>
                <div className={`chip ${results[n].earned ? 'good' : 'bad'}`} style={{ display: 'inline-block', marginBottom: 8 }}>
                  {results[n].picked === undefined
                    ? 'Not answered'
                    : `You chose: ${item.options[results[n].picked as number]}`}
                </div>
                <div className="tiny">
                  <b>{`Correct answer: ${item.options[item.answer]}`}</b>
                </div>
                <div className="tiny muted" style={{ marginTop: 4 }}>
                  {item.why}
                </div>
              </>
            ) : (
              <>
                {item.markScheme.map((mp, i) => (
                  <div key={i} className={`mark-pt ${results[n].hits[i] ? 'hit' : 'miss'}`}>
                    <span className="ic">
                      <Icon name={results[n].hits[i] ? 'check' : 'close'} size={14} />
                    </span>
                    <span>{mp.text}</span>
                  </div>
                ))}
                <div className="code-label" style={{ marginTop: 10 }}>
                  Model answer
                </div>
                <p className="tiny" style={{ whiteSpace: 'pre-wrap' }}>
                  {item.modelAnswer}
                </p>
              </>
            )}
          </div>
        ))}
      </div>
    );
  }

  /* ------------------------------------------------------- the paper itself */

  const current = items[index];
  const item = current.item;
  const low = left < 300;

  return (
    <div>
      <div className="card flat" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <span className={`timer-pill ${low ? 'low' : ''}`}>
            <Icon name="clock" size={15} color="#fff" />
            {fmtTime(left)}
          </span>
          <span className="tiny muted" style={{ marginLeft: 'auto' }}>
            {`${answered} of ${items.length} answered`}
          </span>
        </div>
        <div className="qnav">
          {items.map(({ item: it }, n) => {
            const done = it.kind === 'mcq' ? choices[it.id] !== undefined : (written[it.id] ?? '').trim().length > 0;
            return (
              <button
                key={it.id}
                className={n === index ? 'now' : done ? 'done' : ''}
                onClick={() => setIndex(n)}
                aria-label={`Go to question ${n + 1}`}
              >
                {n + 1}
              </button>
            );
          })}
        </div>
      </div>

      <div className="card view-enter" key={item.id}>
        <div className="chip-row" style={{ marginBottom: 10 }}>
          <span className="chip teal">{current.section}</span>
          <span className="chip gold">{`${item.marks} mark${item.marks > 1 ? 's' : ''}`}</span>
          <span className="chip">{`Question ${index + 1} of ${items.length}`}</span>
        </div>

        {item.context && (
          <div className="blk-example" style={{ marginBottom: 12 }}>
            <span className="blk-label">Scenario</span>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit', fontSize: 14 }}>{item.context}</pre>
          </div>
        )}

        <h3 style={{ marginBottom: 14 }}>{item.stem}</h3>

        {item.kind === 'mcq' ? (
          item.options.map((opt, n) => (
            <button
              key={n}
              className={`opt ${choices[item.id] === n ? 'picked' : ''}`}
              onClick={() => setChoices((c) => ({ ...c, [item.id]: n }))}
            >
              {opt}
            </button>
          ))
        ) : (
          <>
            <textarea
              className="answer"
              value={written[item.id] ?? ''}
              placeholder="Write your full answer here."
              onChange={(e) => setWritten((w) => ({ ...w, [item.id]: e.target.value }))}
            />
            <div className="tiny muted" style={{ marginTop: 6 }}>
              {`Aim for about ${item.marks} clear points, one for each mark.`}
            </div>
          </>
        )}
      </div>

      <div className="ctrl-row">
        <button className="btn ghost small" onClick={() => setIndex((i) => Math.max(0, i - 1))} disabled={index === 0}>
          <Icon name="arrow-left" size={15} />
          Previous
        </button>
        <button
          className="btn small"
          onClick={() => setIndex((i) => Math.min(items.length - 1, i + 1))}
          disabled={index === items.length - 1}
        >
          Next
          <Icon name="arrow-right" size={15} color="#fff" />
        </button>
      </div>

      <div className="card" style={{ marginTop: 14 }}>
        <ByteSays
          compact
          mood="think"
          message={
            answered < items.length
              ? `You have ${items.length - answered} question${items.length - answered === 1 ? '' : 's'} still blank. In a real exam an empty answer scores zero, so always write something.`
              : 'Every question has an answer. Read back through anything you rushed, then hand it in.'
          }
        />
        <button className="btn wide" onClick={submit}>
          Hand in the paper
        </button>
      </div>
    </div>
  );
}
