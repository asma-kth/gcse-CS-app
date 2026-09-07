import { useCallback, useEffect, useState } from 'react';
import './theme.css';
import { TOPICS, TOPIC_MAP } from './content/topics';
import { useProgress } from './game/store';
import DungeonMap from './screens/DungeonMap';
import TopicScreen from './screens/TopicScreen';
import LessonScreen from './screens/LessonScreen';
import LabsScreen from './screens/LabsScreen';
import FactsScreen from './screens/FactsScreen';
import ProgressScreen from './screens/ProgressScreen';
import QuizRunner from './components/QuizRunner';
import ExamRunner from './components/ExamRunner';

type Tab = 'dungeon' | 'labs' | 'code' | 'facts' | 'me';

type View =
  | { kind: 'tab' }
  | { kind: 'topic'; topicId: string }
  | { kind: 'lesson'; topicId: string; lessonId: string }
  | { kind: 'quiz'; topicId: string; quizId: string }
  | { kind: 'exam'; topicId: string };

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: 'dungeon', label: 'Dungeon', icon: '🏰' },
  { id: 'labs', label: 'Labs', icon: '🔬' },
  { id: 'code', label: 'Code', icon: '🐍' },
  { id: 'facts', label: 'Byte', icon: '🐱' },
  { id: 'me', label: 'Progress', icon: '📈' },
];

export default function App() {
  const { progress, completeLesson, recordQuiz, recordExam, seeFact, resetAll } = useProgress();
  const [tab, setTab] = useState<Tab>('dungeon');
  const [view, setView] = useState<View>({ kind: 'tab' });
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view, tab]);

  useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const goTab = (t: Tab) => {
    setTab(t);
    setView({ kind: 'tab' });
  };

  const onFact = useCallback((i: number) => seeFact(i), [seeFact]);

  let title = 'Byte Quest';
  let subtitle = 'GCSE Computer Science, OCR J277';
  let back: (() => void) | null = null;
  let body: React.ReactNode = null;

  if (view.kind === 'tab') {
    if (tab === 'dungeon') {
      body = (
        <DungeonMap
          topics={TOPICS}
          progress={progress}
          onFact={onFact}
          onOpen={(topicId) => setView({ kind: 'topic', topicId })}
        />
      );
    } else if (tab === 'labs') {
      title = 'Interactive labs';
      subtitle = 'Presentations you can play with';
      body = <LabsScreen onFact={onFact} />;
    } else if (tab === 'code') {
      title = 'Code training halls';
      subtitle = 'Python and OCR Exam Reference Language';
      body = (
        <div>
          <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #ede2f4)' }}>
            <h1 style={{ fontSize: 21 }}>Code training halls</h1>
            <p className="tiny muted" style={{ marginBottom: 0 }}>
              Everything the specification expects you to be able to write, with worked examples, drills that mark
              themselves, and exam questions at the end.
            </p>
          </div>
          {TOPICS.filter((t) => t.paper === 'Skills').map((t) => (
            <button key={t.id} className="room" onClick={() => setView({ kind: 'topic', topicId: t.id })}>
              <span className="ic">{t.icon}</span>
              <span style={{ flex: 1, minWidth: 0 }}>
                <span className="nm">{t.title}</span>
                <div className="sb">{t.blurb}</div>
              </span>
              <span className="chev">›</span>
            </button>
          ))}
          <div className="card flat" style={{ background: '#dff2f3' }}>
            <div className="card-title">Which one should I write in the exam?</div>
            <p className="tiny" style={{ marginBottom: 0 }}>
              You may answer programming questions in OCR Exam Reference Language or in any high level language you
              know. Marks are given for correct logic and structure, so write in whichever you can produce most
              accurately. You do, however, need to be able to READ Exam Reference Language, because the question paper
              uses it.
            </p>
          </div>
        </div>
      );
    } else if (tab === 'facts') {
      title = 'Byte the robot cat';
      subtitle = 'Fun facts from every floor';
      body = <FactsScreen progress={progress} onFact={onFact} />;
    } else {
      title = 'Your progress';
      subtitle = 'Everything you have cleared so far';
      body = <ProgressScreen topics={TOPICS} progress={progress} onReset={() => { resetAll(); setToast('Progress reset. A fresh run begins.'); }} />;
    }
  } else {
    const topic = TOPIC_MAP[view.topicId];
    title = topic.title;
    subtitle = `Floor ${topic.code} • ${topic.paper}`;

    if (view.kind === 'topic') {
      back = () => setView({ kind: 'tab' });
      body = (
        <TopicScreen
          topic={topic}
          progress={progress}
          onLesson={(lessonId) => setView({ kind: 'lesson', topicId: topic.id, lessonId })}
          onQuiz={(quizId) => setView({ kind: 'quiz', topicId: topic.id, quizId })}
          onExam={() => setView({ kind: 'exam', topicId: topic.id })}
        />
      );
    } else if (view.kind === 'lesson') {
      const lesson = topic.lessons.find((l) => l.id === view.lessonId)!;
      title = lesson.title;
      subtitle = topic.title;
      back = () => setView({ kind: 'topic', topicId: topic.id });
      body = (
        <LessonScreen
          lesson={lesson}
          done={!!progress.lessonsDone[lesson.id]}
          onFact={onFact}
          onComplete={() => {
            completeLesson(lesson.id);
            setToast('Room cleared. 30 XP and 10 data shards collected.');
          }}
          onBack={() => setView({ kind: 'topic', topicId: topic.id })}
        />
      );
    } else if (view.kind === 'quiz') {
      const quiz = topic.quizzes.find((q) => q.id === view.quizId)!;
      title = quiz.title;
      subtitle = topic.title;
      back = () => setView({ kind: 'topic', topicId: topic.id });
      body = (
        <QuizRunner
          quiz={quiz}
          onFinish={(score, total) => {
            recordQuiz(quiz.id, score, total);
            setToast(score === total ? 'Perfect run. Bonus XP awarded.' : `Guardian scored ${score} of ${total}.`);
          }}
          onExit={() => setView({ kind: 'topic', topicId: topic.id })}
        />
      );
    } else {
      title = 'Boss room';
      subtitle = topic.title;
      back = () => setView({ kind: 'topic', topicId: topic.id });
      body = (
        <ExamRunner
          questions={topic.exam}
          topicTitle={topic.title}
          onFinish={(marks, total) => {
            recordExam(topic.id, marks, total);
            setToast(`Boss defeated with ${marks} of ${total} marks.`);
          }}
          onExit={() => setView({ kind: 'topic', topicId: topic.id })}
        />
      );
    }
  }

  return (
    <div className="app">
      <header className="topbar">
        {back && (
          <button className="back-btn" onClick={back} aria-label="Go back">
            ‹
          </button>
        )}
        <div style={{ minWidth: 0 }}>
          <h2 style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h2>
          <div className="sub">{subtitle}</div>
        </div>
        <div className="stat-strip">
          <span className="stat-chip">{`⭐ ${progress.xp}`}</span>
          <span className="stat-chip">{`🔥 ${progress.streakDays}`}</span>
        </div>
      </header>

      <main className="app-body">{body}</main>

      {toast && <div className="toast">{toast}</div>}

      <nav className="tabbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={tab === t.id && view.kind === 'tab' ? 'on' : ''}
            onClick={() => goTab(t.id)}
          >
            <span className="ic">{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
