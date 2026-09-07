import type { Progress, Topic } from '../types';
import ByteSays from '../components/ByteSays';
import Icon from '../components/Icon';

interface Props {
  topic: Topic;
  progress: Progress;
  onLesson: (lessonId: string) => void;
  onQuiz: (quizId: string) => void;
  onExam: () => void;
}

export default function TopicScreen({ topic, progress, onLesson, onQuiz, onExam }: Props) {
  const lessonsLeft = topic.lessons.filter((l) => !progress.lessonsDone[l.id]).length;
  const examBest = progress.examBest[topic.id];
  const examTotal = topic.exam.reduce((s, q) => s + q.marks, 0);

  return (
    <div className="view-enter">
      <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #ede2f4)' }}>
        <div className="chip-row" style={{ marginBottom: 8 }}>
          <span className="chip teal">{topic.paper}</span>
          <span className="chip">{`Specification ${topic.code}`}</span>
        </div>
        <h1 style={{ fontSize: 21, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name={topic.icon} size={26} color="#08979d" />
          {topic.title}
        </h1>
        <p className="tiny muted" style={{ marginBottom: 0 }}>
          {topic.blurb}
        </p>
      </div>

      <ByteSays
        compact
        mood="think"
        message={
          lessonsLeft > 0
            ? `There are ${lessonsLeft} study rooms left on this floor. Clear them before you take on the guardians, or the questions will bite.`
            : 'Every study room on this floor is cleared. Time to face the two guardians and then the boss.'
        }
      />

      <h3 style={{ margin: '16px 2px 10px' }}>Study rooms</h3>
      <div className="stagger">
      {topic.lessons.map((l, n) => {
        const done = !!progress.lessonsDone[l.id];
        return (
          <button key={l.id} className={`room ${done ? 'done' : ''}`} onClick={() => onLesson(l.id)}>
            <span className={`ic ${done ? 'good' : ''}`}>
              <Icon name={done ? 'check' : 'book-open'} size={20} />
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span className="nm">{`${n + 1}. ${l.title}`}</span>
              <div className="sb">{`About ${l.minutes} minutes${done ? ' • cleared' : ''}`}</div>
            </span>
            <Icon name="chevron-right" size={18} color="#7d919b" />
          </button>
        );
      })}

      </div>

      <h3 style={{ margin: '20px 2px 10px' }}>Guardian rooms</h3>
      {topic.quizzes.map((q) => {
        const best = progress.quizBest[q.id];
        const beaten = (best ?? 0) >= 7;
        return (
          <button key={q.id} className={`room ${beaten ? 'done' : ''}`} onClick={() => onQuiz(q.id)}>
            <span className={`ic ${beaten ? 'good' : ''}`}>
              <Icon name={beaten ? 'shield' : 'sword'} size={20} />
            </span>
            <span style={{ flex: 1, minWidth: 0 }}>
              <span className="nm">{q.title}</span>
              <div className="sb">
                {best === undefined
                  ? '10 questions • not attempted'
                  : `10 questions • best score ${best} out of 10${beaten ? ' • guardian defeated' : ''}`}
              </div>
            </span>
            <Icon name="chevron-right" size={18} color="#7d919b" />
          </button>
        );
      })}

      <h3 style={{ margin: '20px 2px 10px' }}>Boss room</h3>
      <button className="room boss" onClick={onExam}>
        <span className="ic">
          <Icon name="crown" size={20} />
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span className="nm">Past paper style questions</span>
          <div className="sb">
            {examBest === undefined
              ? `5 questions • ${examTotal} marks • auto marked`
              : `5 questions • best ${examBest} of ${examTotal} marks`}
          </div>
        </span>
        <Icon name="chevron-right" size={18} color="#7d919b" />
      </button>

      <div className="card flat" style={{ marginTop: 16, background: '#fdf3dd' }}>
        <div className="card-title">How this floor is scored</div>
        <ul className="bullets" style={{ marginBottom: 0 }}>
          <li>Clearing a study room gives 30 XP and 10 data shards.</li>
          <li>Beating a guardian gives up to 160 XP, with a bonus for a perfect ten.</li>
          <li>The boss gives XP in proportion to the marks you actually earn.</li>
          <li>A guardian counts as defeated at 7 out of 10 or better.</li>
        </ul>
      </div>
    </div>
  );
}
