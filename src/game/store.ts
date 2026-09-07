import { useCallback, useEffect, useState } from 'react';
import type { Progress } from '../types';

const KEY = 'byte-quest-save-v1';

const empty: Progress = {
  xp: 0,
  coins: 0,
  streakDays: 0,
  lastPlayed: '',
  lessonsDone: {},
  quizBest: {},
  examBest: {},
  factsSeen: [],
};

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const ms = new Date(b + 'T00:00:00').getTime() - new Date(a + 'T00:00:00').getTime();
  return Math.round(ms / 86400000);
}

export function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...empty, lastPlayed: today(), streakDays: 1 };
    const saved = { ...empty, ...(JSON.parse(raw) as Partial<Progress>) };
    const now = today();
    if (saved.lastPlayed !== now) {
      const gap = saved.lastPlayed ? daysBetween(saved.lastPlayed, now) : 99;
      saved.streakDays = gap === 1 ? saved.streakDays + 1 : 1;
      saved.lastPlayed = now;
    }
    return saved;
  } catch {
    return { ...empty, lastPlayed: today(), streakDays: 1 };
  }
}

export function saveProgress(p: Progress): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(p));
  } catch {
    /* storage can be blocked, the app still works for this session */
  }
}

/** Level curve. Every level costs a little more than the last one. */
export function levelFromXp(xp: number): { level: number; into: number; need: number } {
  let level = 1;
  let need = 100;
  let rest = xp;
  while (rest >= need) {
    rest -= need;
    level += 1;
    need = Math.round(need * 1.18);
  }
  return { level, into: rest, need };
}

export const RANKS = [
  'Rusty Whisker',
  'Circuit Scout',
  'Byte Cadet',
  'Loop Ranger',
  'Logic Knight',
  'Cache Captain',
  'Packet Paladin',
  'Compiler Champion',
  'Binary Baron',
  'Grand Architect',
];

export function rankFor(level: number): string {
  return RANKS[Math.min(RANKS.length - 1, Math.floor((level - 1) / 2))];
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => loadProgress());

  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const award = useCallback((xp: number, coins = 0) => {
    setProgress((p) => ({ ...p, xp: p.xp + xp, coins: p.coins + coins }));
  }, []);

  const completeLesson = useCallback((id: string) => {
    setProgress((p) => {
      if (p.lessonsDone[id]) return p;
      return {
        ...p,
        lessonsDone: { ...p.lessonsDone, [id]: true },
        xp: p.xp + 30,
        coins: p.coins + 10,
      };
    });
  }, []);

  const recordQuiz = useCallback((id: string, score: number, total: number) => {
    setProgress((p) => {
      const prev = p.quizBest[id] ?? -1;
      const gainedXp = Math.round((score / total) * 120) + (score === total ? 40 : 0);
      return {
        ...p,
        quizBest: { ...p.quizBest, [id]: Math.max(prev, score) },
        xp: p.xp + gainedXp,
        coins: p.coins + score * 3,
      };
    });
  }, []);

  const recordExam = useCallback((id: string, marks: number, total: number) => {
    setProgress((p) => {
      const prev = p.examBest[id] ?? -1;
      return {
        ...p,
        examBest: { ...p.examBest, [id]: Math.max(prev, marks) },
        xp: p.xp + Math.round((marks / Math.max(1, total)) * 200),
        coins: p.coins + marks * 4,
      };
    });
  }, []);

  const seeFact = useCallback((index: number) => {
    setProgress((p) => (p.factsSeen.includes(index) ? p : { ...p, factsSeen: [...p.factsSeen, index] }));
  }, []);

  const resetAll = useCallback(() => {
    const fresh = { ...empty, lastPlayed: today(), streakDays: 1 };
    setProgress(fresh);
    saveProgress(fresh);
  }, []);

  return { progress, award, completeLesson, recordQuiz, recordExam, seeFact, resetAll };
}
