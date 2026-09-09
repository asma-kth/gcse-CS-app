import { useState } from 'react';
import type { Progress, Topic } from '../types';
import { levelFromXp, RANKS, rankFor } from '../game/store';
import { topicProgress } from './DungeonMap';
import Mascot from '../components/Mascot';
import Icon from '../components/Icon';

interface Props {
  topics: Topic[];
  progress: Progress;
  onReset: () => void;
}

export default function ProgressScreen({ topics, progress, onReset }: Props) {
  const [confirm, setConfirm] = useState(false);
  const { level, into, need } = levelFromXp(progress.xp);

  const lessonsDone = Object.keys(progress.lessonsDone).length;
  const lessonsTotal = topics.reduce((s, t) => s + t.lessons.length, 0);
  const quizzesBeaten = Object.values(progress.quizBest).filter((v) => v >= 7).length;
  const quizzesTotal = topics.length * 2;
  const examMarks = Object.values(progress.examBest).reduce((s, v) => s + v, 0);
  const examTotal = topics.reduce((s, t) => s + t.exam.reduce((x, q) => x + q.marks, 0), 0);

  return (
    <div className="view-enter">
      <div className="card center" style={{ background: 'linear-gradient(140deg, #ffffff, #dff2f3)' }}>
        <Mascot size={86} mood="cheer" />
        <h1 style={{ fontSize: 22 }}>{`Level ${level}`}</h1>
        <div className="chip teal" style={{ display: 'inline-block' }}>
          {rankFor(level)}
        </div>
        <div className="bar" style={{ margin: '12px 0 6px' }}>
          <i style={{ width: `${(into / need) * 100}%` }} />
        </div>
        <div className="tiny muted">{`${into} of ${need} XP to level ${level + 1}`}</div>
      </div>

      <div className="card">
        <div className="card-title">Your run so far</div>
        <div className="kv">
          <span>Total XP</span>
          <b>{progress.xp}</b>
        </div>
        <div className="kv">
          <span>Data shards</span>
          <b>{progress.coins}</b>
        </div>
        <div className="kv">
          <span>Day streak</span>
          <b>{`${progress.streakDays} ${progress.streakDays === 1 ? 'day' : 'days'}`}</b>
        </div>
        <div className="kv">
          <span>Study rooms cleared</span>
          <b>{`${lessonsDone} of ${lessonsTotal}`}</b>
        </div>
        <div className="kv">
          <span>Guardians defeated</span>
          <b>{`${quizzesBeaten} of ${quizzesTotal}`}</b>
        </div>
        <div className="kv">
          <span>Exam marks banked</span>
          <b>{`${examMarks} of ${examTotal}`}</b>
        </div>
        <div className="kv">
          <span>Facts collected</span>
          <b>{progress.factsSeen.length}</b>
        </div>
      </div>

      <div className="card">
        <div className="card-title">Floor by floor</div>
        {topics.map((t) => {
          const p = topicProgress(t, progress);
          return (
            <div key={t.id} style={{ marginBottom: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13.5, fontWeight: 700 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                  <Icon name={t.icon} size={16} color="#8474a1" />
                  {t.title}
                </span>
                <span className="muted">{`${p.percent}%`}</span>
              </div>
              <div className="bar" style={{ marginTop: 5 }}>
                <i style={{ width: `${p.percent}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="card">
        <div className="card-title">Ranks you can earn</div>
        <div className="chip-row">
          {RANKS.map((r, n) => (
            <span key={r} className={`chip ${rankFor(level) === r ? 'teal' : ''}`}>
              {`${n * 2 + 1}. ${r}`}
            </span>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="card-title">Start again</div>
        <p className="tiny muted">
          This wipes every score, all XP and your streak. Your progress is stored only on this device, so nothing is
          sent anywhere.
        </p>
        {confirm ? (
          <div className="ctrl-row">
            <button
              className="btn small"
              style={{ background: '#c0392b' }}
              onClick={() => {
                onReset();
                setConfirm(false);
              }}
            >
              Yes, wipe everything
            </button>
            <button className="btn ghost small" onClick={() => setConfirm(false)}>
              Cancel
            </button>
          </div>
        ) : (
          <button className="btn outline small" onClick={() => setConfirm(true)}>
            Reset my progress
          </button>
        )}
      </div>
    </div>
  );
}
