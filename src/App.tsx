import { useCallback, useEffect, useRef, useState } from 'react';
import './theme.css';
import { TOPICS, TOPIC_MAP } from './content/topics';
import { PAPER_MAP } from './content/papers';
import { levelFromXp, rankFor, useProgress } from './game/store';
import DungeonMap from './screens/DungeonMap';
import TopicScreen from './screens/TopicScreen';
import LessonScreen from './screens/LessonScreen';
import LabsScreen from './screens/LabsScreen';
import FactsScreen from './screens/FactsScreen';
import ProgressScreen from './screens/ProgressScreen';
import PapersScreen from './screens/PapersScreen';
import QuizRunner from './components/QuizRunner';
import ExamRunner from './components/ExamRunner';
import PaperRunner from './components/PaperRunner';
import LoadScreen from './components/LoadScreen';
import Icon, { type IconName } from './components/Icon';
import { Confetti, LevelUp } from './components/Celebration';
import { useBanner } from './ads/useAds';
import { maybeShowInterstitial } from './ads/ads';

type Tab = 'dungeon' | 'papers' | 'labs' | 'code' | 'facts' | 'me';

type View =
  | { kind: 'tab' }
  | { kind: 'topic'; topicId: string }
  | { kind: 'lesson'; topicId: string; lessonId: string }
  | { kind: 'quiz'; topicId: string; quizId: string }
  | { kind: 'exam'; topicId: string }
  | { kind: 'paper'; paperId: string };

const TABS: { id: Tab; label: string; icon: IconName }[] = [
  { id: 'dungeon', label: 'Dungeon', icon: 'castle' },
  { id: 'papers', label: 'Papers', icon: 'paper' },
  { id: 'labs', label: 'Labs', icon: 'flask' },
  { id: 'code', label: 'Code', icon: 'code' },
  { id: 'facts', label: 'Byte', icon: 'cat' },
  { id: 'me', label: 'Progress', icon: 'chart' },
];

export default function App() {
  const { progress, completeLesson, recordQuiz, recordExam, seeFact, resetAll } = useProgress();
  const [booting, setBooting] = useState(true);
  const [tab, setTab] = useState<Tab>('dungeon');
  const [view, setView] = useState<View>({ kind: 'tab' });
  const [toast, setToast] = useState<string | null>(null);
  const [confetti, setConfetti] = useState(0);
  const [levelUp, setLevelUp] = useState<number | null>(null);
  const [direction, setDirection] = useState<'forward' | 'back'>('forward');

  const lastLevel = useRef(levelFromXp(progress.xp).level);

  // The banner only appears on browsing screens. See ads/useAds.ts for the rule.
  const { reservedSpace } = useBanner(view.kind);

  /* Celebrate the moment a new level is reached. */
  useEffect(() => {
    const now = levelFromXp(progress.xp).level;
    if (now > lastLevel.current) {
      setLevelUp(now);
      setConfetti((c) => c + 1);
    }
    lastLevel.current = now;
  }, [progress.xp]);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [view, tab]);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(id);
  }, [toast]);

  const goTab = (t: Tab) => {
    setDirection('back');
    setTab(t);
    setView({ kind: 'tab' });
  };

  const push = (v: View) => {
    setDirection('forward');
    setView(v);
  };

  const pop = (v: View) => {
    setDirection('back');
    setView(v);
  };

  /**
   * Leaving a finished activity is the only moment a full screen ad is
   * allowed. The student has their result, nothing is timed, and nothing is
   * half read. The ad service applies its own frequency cap on top.
   */
  const leaveActivity = (v: View) => {
    pop(v);
    void maybeShowInterstitial();
  };

  const onFact = useCallback((i: number) => seeFact(i), [seeFact]);

  let title = 'Byte Quest';
  let subtitle = 'GCSE Computer Science, OCR J277';
  let back: (() => void) | null = null;
  let body: React.ReactNode = null;

  if (view.kind === 'tab') {
    if (tab === 'dungeon') {
      body = (
        <DungeonMap topics={TOPICS} progress={progress} onFact={onFact} onOpen={(topicId) => push({ kind: 'topic', topicId })} />
      );
    } else if (tab === 'papers') {
      title = 'Mock exam papers';
      subtitle = 'Three timed papers for each component';
      body = <PapersScreen progress={progress} onFact={onFact} onOpen={(paperId) => push({ kind: 'paper', paperId })} />;
    } else if (tab === 'labs') {
      title = 'Interactive labs';
      subtitle = 'Animated explainers and hands on tools';
      body = <LabsScreen onFact={onFact} />;
    } else if (tab === 'code') {
      title = 'Code training halls';
      subtitle = 'Python and OCR Exam Reference Language';
      body = (
        <div className="view-enter">
          <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #ede2f4)' }}>
            <h1 style={{ fontSize: 21 }}>Code training halls</h1>
            <p className="tiny muted" style={{ marginBottom: 0 }}>
              Everything the specification expects you to be able to write, with worked examples, drills that mark
              themselves, and exam questions at the end.
            </p>
          </div>
          <div className="stagger">
            {TOPICS.filter((t) => t.paper === 'Skills').map((t) => (
              <button key={t.id} className="room press" onClick={() => push({ kind: 'topic', topicId: t.id })}>
                <span className="ic">
                  <Icon name={t.icon} size={20} />
                </span>
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span className="nm">{t.title}</span>
                  <div className="sb">{t.blurb}</div>
                </span>
                <Icon name="chevron-right" size={18} color="#7d919b" />
              </button>
            ))}
          </div>
          <div className="card flat" style={{ background: '#dff2f3' }}>
            <div className="card-title">
              <Icon name="question" size={18} />
              Which one should I write in the exam?
            </div>
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
      body = (
        <ProgressScreen
          topics={TOPICS}
          progress={progress}
          onReset={() => {
            resetAll();
            setToast('Progress reset. A fresh run begins.');
          }}
        />
      );
    }
  } else if (view.kind === 'paper') {
    const paper = PAPER_MAP[view.paperId];
    title = paper.title;
    subtitle = `${paper.component} mock`;
    back = () => pop({ kind: 'tab' });
    body = (
      <PaperRunner
        paper={paper}
        onFinish={(marks, total) => {
          recordExam(`paper:${paper.id}`, marks, total);
          if (marks / total >= 0.7) setConfetti((c) => c + 1);
          setToast(`Paper handed in: ${marks} of ${total} marks.`);
        }}
        onExit={() => leaveActivity({ kind: 'tab' })}
      />
    );
  } else {
    const topic = TOPIC_MAP[view.topicId];
    title = topic.title;
    subtitle = `Floor ${topic.code} • ${topic.paper}`;

    if (view.kind === 'topic') {
      back = () => pop({ kind: 'tab' });
      body = (
        <TopicScreen
          topic={topic}
          progress={progress}
          onLesson={(lessonId) => push({ kind: 'lesson', topicId: topic.id, lessonId })}
          onQuiz={(quizId) => push({ kind: 'quiz', topicId: topic.id, quizId })}
          onExam={() => push({ kind: 'exam', topicId: topic.id })}
        />
      );
    } else if (view.kind === 'lesson') {
      const lesson = topic.lessons.find((l) => l.id === view.lessonId)!;
      title = lesson.title;
      subtitle = topic.title;
      back = () => pop({ kind: 'topic', topicId: topic.id });
      body = (
        <LessonScreen
          lesson={lesson}
          done={!!progress.lessonsDone[lesson.id]}
          onFact={onFact}
          onComplete={() => {
            completeLesson(lesson.id);
            setToast('Room cleared. 30 XP and 10 data shards collected.');
          }}
          onBack={() => pop({ kind: 'topic', topicId: topic.id })}
        />
      );
    } else if (view.kind === 'quiz') {
      const quiz = topic.quizzes.find((q) => q.id === view.quizId)!;
      title = quiz.title;
      subtitle = topic.title;
      back = () => pop({ kind: 'topic', topicId: topic.id });
      body = (
        <QuizRunner
          quiz={quiz}
          onFinish={(score, total) => {
            recordQuiz(quiz.id, score, total);
            if (score === total) setConfetti((c) => c + 1);
            setToast(score === total ? 'Perfect run. Bonus XP awarded.' : `Guardian scored ${score} of ${total}.`);
          }}
          onExit={() => leaveActivity({ kind: 'topic', topicId: topic.id })}
        />
      );
    } else {
      title = 'Boss room';
      subtitle = topic.title;
      back = () => pop({ kind: 'topic', topicId: topic.id });
      body = (
        <ExamRunner
          questions={topic.exam}
          topicTitle={topic.title}
          onFinish={(marks, total) => {
            recordExam(topic.id, marks, total);
            if (marks / total >= 0.7) setConfetti((c) => c + 1);
            setToast(`Boss defeated with ${marks} of ${total} marks.`);
          }}
          onExit={() => leaveActivity({ kind: 'topic', topicId: topic.id })}
        />
      );
    }
  }

  const viewKey = `${tab}-${view.kind}-${'topicId' in view ? view.topicId : ''}-${'lessonId' in view ? view.lessonId : ''}-${'quizId' in view ? view.quizId : ''}-${'paperId' in view ? view.paperId : ''}`;

  return (
    <>
      {booting && <LoadScreen onDone={() => setBooting(false)} />}

      <div className="app" style={{ '--ad-space': `${reservedSpace}px` } as React.CSSProperties}>
        <header className="topbar">
          {back && (
            <button className="back-btn press" onClick={back} aria-label="Go back">
              <Icon name="chevron-left" size={19} color="#fff" />
            </button>
          )}
          <div style={{ minWidth: 0 }}>
            <h2 style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</h2>
            <div className="sub">{subtitle}</div>
          </div>
          <div className="stat-strip">
            <span className="stat-chip">
              <Icon name="star" size={13} color="#fff" style={{ verticalAlign: '-2px', marginRight: 3 }} />
              <span className="count-pop" key={progress.xp}>
                {progress.xp}
              </span>
            </span>
            <span className="stat-chip">
              <Icon name="flame" size={13} color="#fff" style={{ verticalAlign: '-2px', marginRight: 3 }} />
              {progress.streakDays}
            </span>
          </div>
        </header>

        <main className="app-body">
          <div key={viewKey} className={direction === 'forward' ? 'view-forward' : 'view-back'}>
            {body}
          </div>
        </main>

        {toast && <div className="toast">{toast}</div>}

        <nav className="tabbar">
          {TABS.map((t) => (
            <button key={t.id} className={tab === t.id && view.kind === 'tab' ? 'on' : ''} onClick={() => goTab(t.id)}>
              <Icon name={t.icon} size={19} />
              <span>{t.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <Confetti fire={confetti} />
      {levelUp !== null && (
        <LevelUp level={levelUp} rank={rankFor(levelUp)} onClose={() => setLevelUp(null)} />
      )}
    </>
  );
}
