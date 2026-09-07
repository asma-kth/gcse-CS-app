import { useMemo, useState } from 'react';
import type { ExamQuestion } from '../types';
import ByteSays from './ByteSays';

interface Props {
  questions: ExamQuestion[];
  topicTitle: string;
  onFinish: (marks: number, total: number) => void;
  onExit: () => void;
}

/** Lower cases the answer and flattens punctuation so keyword matching is fair. */
function normalise(text: string): string {
  return ` ${text
    .toLowerCase()
    .replace(/[‘’]/g, "'")
    .replace(/[^a-z0-9'>=<.+*/%_ -]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()} `;
}

function pointAwarded(answer: string, accept: string[][]): boolean {
  return accept.some((group) => group.every((kw) => answer.includes(kw.toLowerCase())));
}

export default function ExamRunner({ questions, topicTitle, onFinish, onExit }: Props) {
  const [i, setI] = useState(0);
  const [entries, setEntries] = useState<string[]>(() => questions.map(() => ''));
  const [marked, setMarked] = useState<boolean[]>(() => questions.map(() => false));
  const [done, setDone] = useState(false);

  const q = questions[i];

  const results = useMemo(
    () =>
      questions.map((question, n) => {
        const answer = normalise(entries[n] ?? '');
        const hits = question.markScheme.map((mp) => pointAwarded(answer, mp.accept));
        const earned = Math.min(question.marks, hits.filter(Boolean).length);
        return { hits, earned };
      }),
    [entries, questions],
  );

  const totalMarks = questions.reduce((s, x) => s + x.marks, 0);
  const earnedSoFar = results.reduce((s, r, n) => s + (marked[n] ? r.earned : 0), 0);

  const markThis = () => {
    setMarked((m) => m.map((v, n) => (n === i ? true : v)));
  };

  const next = () => {
    if (i + 1 >= questions.length) {
      const total = results.reduce((s, r) => s + r.earned, 0);
      setDone(true);
      onFinish(total, totalMarks);
    } else {
      setI(i + 1);
    }
  };

  if (done) {
    const total = results.reduce((s, r) => s + r.earned, 0);
    const pct = Math.round((total / totalMarks) * 100);
    const grade = pct >= 85 ? '8 or 9' : pct >= 70 ? '7' : pct >= 55 ? '5 or 6' : pct >= 40 ? '4' : 'below 4';
    return (
      <div className="fadein">
        <div className="card center">
          <div style={{ fontSize: 46 }}>{pct >= 70 ? '👑' : pct >= 40 ? '⚔️' : '🗝️'}</div>
          <h2>{`${total} out of ${totalMarks} marks`}</h2>
          <div className="bar" style={{ margin: '10px 0 12px' }}>
            <i style={{ width: `${pct}%` }} />
          </div>
          <p className="muted">
            {`That is ${pct} percent, which on a typical paper sits around grade ${grade}. Read the mark schemes below and note the exact words you missed.`}
          </p>
          <button className="btn wide" onClick={onExit}>
            Leave the boss room
          </button>
        </div>

        {questions.map((question, n) => (
          <div key={question.id} className="card">
            <div className="card-title">{`Question ${n + 1} (${question.marks} marks) - you scored ${results[n].earned}`}</div>
            <p className="tiny muted">{question.stem}</p>
            <div className="code-label" style={{ marginTop: 10 }}>
              Your answer
            </div>
            <pre className="code" style={{ whiteSpace: 'pre-wrap' }}>
              {entries[n] || '(left blank)'}
            </pre>
            <div className="code-label" style={{ marginTop: 10 }}>
              Model answer
            </div>
            <p className="tiny">{question.modelAnswer}</p>
          </div>
        ))}
      </div>
    );
  }

  const isMarked = marked[i];
  const res = results[i];

  return (
    <div>
      <div className="card flat" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700 }}>
          <span className="muted">{`Exam question ${i + 1} of ${questions.length}`}</span>
          <span style={{ color: '#08979d' }}>{`${earnedSoFar} / ${totalMarks} marks`}</span>
        </div>
        <div className="bar" style={{ marginTop: 8 }}>
          <i style={{ width: `${(i / questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card">
        <div className="chip-row" style={{ marginBottom: 10 }}>
          <span className="chip teal">{topicTitle}</span>
          <span className="chip gold">{`${q.marks} marks`}</span>
        </div>
        {q.context && (
          <div className="blk-example" style={{ marginBottom: 12 }}>
            <span className="blk-label">Scenario</span>
            <pre style={{ whiteSpace: 'pre-wrap', margin: 0, fontFamily: 'inherit', fontSize: 14 }}>{q.context}</pre>
          </div>
        )}
        <h3 style={{ marginBottom: 12 }}>{q.stem}</h3>
        <textarea
          className="answer"
          value={entries[i]}
          placeholder="Write your full answer here. Use the technical words, because the marks are given for them."
          onChange={(e) => {
            const v = e.target.value;
            setEntries((prev) => prev.map((x, n) => (n === i ? v : x)));
            setMarked((m) => m.map((x, n) => (n === i ? false : x)));
          }}
        />
        <div className="tiny muted" style={{ marginTop: 6 }}>
          {`Aim for about ${q.marks} clear points, one for each mark.`}
        </div>

        {!isMarked && (
          <button className="btn wide" style={{ marginTop: 12 }} onClick={markThis} disabled={!entries[i].trim()}>
            Mark my answer
          </button>
        )}
      </div>

      {isMarked && (
        <div className="fadein">
          <div className="card">
            <div className="card-title">{`Auto marked: ${res.earned} out of ${q.marks}`}</div>
            {q.markScheme.map((mp, n) => (
              <div key={n} className={`mark-pt ${res.hits[n] ? 'hit' : 'miss'}`}>
                <span className="ic">{res.hits[n] ? '✓' : '✗'}</span>
                <span>{mp.text}</span>
              </div>
            ))}
            <div className="tiny muted" style={{ marginTop: 10 }}>
              The marker looks for the key ideas in your wording. If you know you made a point in different words, count
              it yourself and note the exact phrase the mark scheme uses, because the real examiner rewards precise
              technical language.
            </div>
          </div>

          <div className="card">
            <div className="card-title">Model answer</div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{q.modelAnswer}</p>
            {q.examinerTip && (
              <div className="blk-tip">
                <span className="blk-label">Examiner tip</span>
                <p style={{ marginBottom: 0 }}>{q.examinerTip}</p>
              </div>
            )}
          </div>

          <ByteSays
            compact
            mood={res.earned >= q.marks - 1 ? 'cheer' : 'think'}
            message={
              res.earned >= q.marks - 1
                ? 'Excellent. That is very close to a full mark answer.'
                : 'Compare your answer with the model one and underline every technical word you left out. That habit is worth whole grades.'
            }
          />

          <button className="btn wide" onClick={next}>
            {i + 1 >= questions.length ? 'Finish the boss fight' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
