import type { Progress, Topic } from '../types';
import { levelFromXp, rankFor } from '../game/store';
import ByteSays from '../components/ByteSays';
import Mascot from '../components/Mascot';
import Icon from '../components/Icon';

interface Props {
  topics: Topic[];
  progress: Progress;
  onOpen: (topicId: string) => void;
  onFact: (i: number) => void;
}

export function topicProgress(topic: Topic, progress: Progress) {
  const lessonTotal = topic.lessons.length;
  const lessonsDone = topic.lessons.filter((l) => progress.lessonsDone[l.id]).length;
  const quizDone = topic.quizzes.filter((q) => (progress.quizBest[q.id] ?? 0) >= 7).length;
  const examDone = (progress.examBest[topic.id] ?? 0) > 0 ? 1 : 0;
  const total = lessonTotal + 2 + 1;
  const done = lessonsDone + quizDone + examDone;
  return { done, total, percent: Math.round((done / total) * 100) };
}

export default function DungeonMap({ topics, progress, onOpen, onFact }: Props) {
  const { level, into, need } = levelFromXp(progress.xp);
  const paperOne = topics.filter((t) => t.paper === 'Paper 1');
  const paperTwo = topics.filter((t) => t.paper === 'Paper 2');
  const skills = topics.filter((t) => t.paper === 'Skills');

  const overall = topics.reduce(
    (acc, t) => {
      const p = topicProgress(t, progress);
      return { done: acc.done + p.done, total: acc.total + p.total };
    },
    { done: 0, total: 0 },
  );

  const section = (title: string, subtitle: string, list: Topic[]) => (
    <div key={title}>
      <div style={{ margin: '18px 2px 8px' }}>
        <h2 style={{ marginBottom: 2 }}>{title}</h2>
        <div className="tiny muted">{subtitle}</div>
      </div>
      <div className="stagger">
      {list.map((t) => {
        const p = topicProgress(t, progress);
        const complete = p.done === p.total;
        return (
          <button key={t.id} className={`floor press ${complete ? 'done' : ''}`} onClick={() => onOpen(t.id)}>
            <span className="badge">
              <Icon name={t.icon} size={24} color="#fff" />
            </span>
            <span className="meta">
              <span className="n">{`Floor ${t.code}`}</span>
              <div className="t">{t.title}</div>
              <div className="d">{t.blurb}</div>
              <div className="bar" style={{ marginTop: 8 }}>
                <i style={{ width: `${p.percent}%` }} />
              </div>
              <div className="tiny muted" style={{ marginTop: 4 }}>
                {`${p.done} of ${p.total} rooms cleared`}
              </div>
            </span>
            <Icon name={complete ? 'check' : 'chevron-right'} size={18} color={complete ? '#08979d' : '#7d919b'} />
          </button>
        );
      })}
      </div>
    </div>
  );

  return (
    <div className="view-enter">
      <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #dff2f3)' }}>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
          <Mascot size={72} mood="cheer" className="bob" />
          <div style={{ flex: 1, minWidth: 0 }}>
            <h1 style={{ fontSize: 22, marginBottom: 2 }}>The Silicon Dungeon</h1>
            <div className="tiny muted">{`Level ${level} ${rankFor(level)}`}</div>
            <div className="bar" style={{ marginTop: 8 }}>
              <i style={{ width: `${(into / need) * 100}%` }} />
            </div>
            <div className="tiny muted" style={{ marginTop: 4 }}>
              {`${into} of ${need} XP to the next level`}
            </div>
          </div>
        </div>
        <div className="grid3" style={{ marginTop: 14 }}>
          <div className="center">
            <div style={{ fontWeight: 800, color: '#055b5c', fontSize: 18 }}>{progress.xp}</div>
            <div className="tiny muted">XP</div>
          </div>
          <div className="center">
            <div style={{ fontWeight: 800, color: '#055b5c', fontSize: 18 }}>{progress.coins}</div>
            <div className="tiny muted">Data shards</div>
          </div>
          <div className="center">
            <div style={{ fontWeight: 800, color: '#055b5c', fontSize: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
              {progress.streakDays}
              <Icon name="flame" size={16} color="#e0a02a" />
            </div>
            <div className="tiny muted">Day streak</div>
          </div>
        </div>
        <div className="bar" style={{ marginTop: 14 }}>
          <i style={{ width: `${Math.round((overall.done / overall.total) * 100)}%` }} />
        </div>
        <div className="tiny muted center" style={{ marginTop: 6 }}>
          {`Whole dungeon: ${overall.done} of ${overall.total} rooms cleared`}
        </div>
      </div>

      <ByteSays fact onFactShown={onFact} />

      {section('Paper 1', 'Computer systems, worth half of your GCSE', paperOne)}
      {section('Paper 2', 'Computational thinking, algorithms and programming', paperTwo)}
      {section('Training halls', 'Practical coding skills that support both papers', skills)}
    </div>
  );
}
