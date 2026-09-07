import { useMemo, useState } from 'react';
import type { Quiz } from '../types';
import ByteSays from './ByteSays';

interface Props {
  quiz: Quiz;
  onFinish: (score: number, total: number) => void;
  onExit: () => void;
}

const WIN_LINES = [
  'Direct hit. The dungeon door creaks open.',
  'Clean strike. Byte purrs approvingly.',
  'Correct. Another crack in the wall.',
];

const LOSE_LINES = [
  'That one bounced off. Read the reason and try the next.',
  'Not this time. Byte flicks a tail and shows you why.',
  'Missed. Every miss you understand is a mark you gain later.',
];

export default function QuizRunner({ quiz, onFinish, onExit }: Props) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [done, setDone] = useState(false);

  const q = quiz.questions[i];
  const score = useMemo(
    () => answers.filter((a, n) => a === quiz.questions[n].answer).length,
    [answers, quiz.questions],
  );

  const submit = (choice: number) => {
    if (picked !== null) return;
    setPicked(choice);
    setAnswers((prev) => [...prev, choice]);
  };

  const next = () => {
    if (i + 1 >= quiz.questions.length) {
      setDone(true);
      const finalScore = [...answers].filter((a, n) => a === quiz.questions[n].answer).length;
      onFinish(finalScore, quiz.questions.length);
    } else {
      setI(i + 1);
      setPicked(null);
    }
  };

  if (done) {
    const pct = Math.round((score / quiz.questions.length) * 100);
    return (
      <div className="fadein">
        <div className="card center">
          <div style={{ fontSize: 46 }}>{pct >= 80 ? '🏆' : pct >= 50 ? '⚔️' : '🛡️'}</div>
          <h2>{`${score} out of ${quiz.questions.length}`}</h2>
          <div className="bar" style={{ margin: '10px 0 14px' }}>
            <i style={{ width: `${pct}%` }} />
          </div>
          <p className="muted">
            {pct === 100
              ? 'A perfect run. The guardian of this room bows and lets you pass.'
              : pct >= 80
                ? 'Strong work. You are ready for the exam questions in this room.'
                : pct >= 50
                  ? 'A solid attempt. Go back over the answers you missed, then run it again.'
                  : 'This room needs another visit. Read the lesson again, then come back and beat it.'}
          </p>
          <button className="btn wide" onClick={onExit}>
            Back to the room
          </button>
        </div>

        <div className="card">
          <div className="card-title">Review every question</div>
          {quiz.questions.map((question, n) => {
            const given = answers[n];
            const right = given === question.answer;
            return (
              <div key={n} style={{ padding: '10px 0', borderBottom: '1px dashed #e4e0ee' }}>
                <div style={{ fontWeight: 700, fontSize: 14 }}>
                  {`${n + 1}. ${question.q}`}
                </div>
                <div className="tiny" style={{ color: right ? '#1d8a5f' : '#c0392b', marginTop: 4 }}>
                  {right
                    ? `Correct: ${question.options[question.answer]}`
                    : `You chose: ${question.options[given] ?? 'nothing'}. Correct answer: ${question.options[question.answer]}`}
                </div>
                <div className="tiny muted" style={{ marginTop: 4 }}>
                  {question.why}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="card flat" style={{ marginBottom: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, fontWeight: 700 }}>
          <span className="muted">{`Question ${i + 1} of ${quiz.questions.length}`}</span>
          <span style={{ color: '#08979d' }}>{`Score ${score}`}</span>
        </div>
        <div className="bar" style={{ marginTop: 8 }}>
          <i style={{ width: `${((i + (picked !== null ? 1 : 0)) / quiz.questions.length) * 100}%` }} />
        </div>
      </div>

      <div className="card">
        <h3 style={{ marginBottom: 14 }}>{q.q}</h3>
        {q.options.map((opt, n) => {
          let cls = 'opt';
          if (picked !== null) {
            if (n === q.answer) cls += ' right';
            else if (n === picked) cls += ' wrong';
          }
          return (
            <button key={n} className={cls} onClick={() => submit(n)} disabled={picked !== null}>
              {opt}
              {picked !== null && n === q.answer && <span className="tag">correct</span>}
              {picked !== null && n === picked && n !== q.answer && <span className="tag">your answer</span>}
            </button>
          );
        })}
      </div>

      {picked !== null && (
        <div className="fadein">
          <ByteSays
            compact
            mood={picked === q.answer ? 'cheer' : 'think'}
            message={`${picked === q.answer ? WIN_LINES[i % WIN_LINES.length] : LOSE_LINES[i % LOSE_LINES.length]} ${q.why}`}
          />
          <button className="btn wide" onClick={next}>
            {i + 1 >= quiz.questions.length ? 'See my result' : 'Next question'}
          </button>
        </div>
      )}
    </div>
  );
}
