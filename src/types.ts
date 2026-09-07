import type { IconName } from './components/Icon';

/** Content model for Byte Quest. */

export type Block =
  | { t: 'p'; text: string }
  | { t: 'h'; text: string }
  | { t: 'ul'; items: string[] }
  | { t: 'ol'; items: string[] }
  | { t: 'example'; title?: string; body: string[] }
  | { t: 'real'; title?: string; body: string[] }
  | { t: 'tip'; body: string[] }
  | { t: 'warn'; body: string[] }
  | { t: 'key'; terms: { term: string; def: string }[] }
  | { t: 'table'; head: string[]; rows: string[][] }
  | { t: 'code'; lang: 'python' | 'erl' | 'sql' | 'text'; caption?: string; code: string }
  | { t: 'diagram'; id: string; caption?: string }
  | { t: 'demo'; id: string; caption?: string };

export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  blocks: Block[];
}

export interface QuizQuestion {
  q: string;
  options: string[];
  answer: number;
  why: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

/** One mark point in an exam mark scheme. A point is awarded when any
 *  of its keyword groups is matched in the student answer. A keyword group
 *  is an array of strings that must all appear (an AND), while the list of
 *  groups is an OR. */
export interface MarkPoint {
  text: string;
  accept: string[][];
}

export interface ExamQuestion {
  id: string;
  stem: string;
  marks: number;
  /** Optional short context shown above the stem, such as a scenario. */
  context?: string;
  markScheme: MarkPoint[];
  modelAnswer: string;
  examinerTip?: string;
}

export interface Topic {
  id: string;
  code: string;
  title: string;
  blurb: string;
  paper: 'Paper 1' | 'Paper 2' | 'Skills';
  icon: IconName;
  lessons: Lesson[];
  quizzes: [Quiz, Quiz];
  exam: ExamQuestion[];
}

export interface Progress {
  xp: number;
  coins: number;
  streakDays: number;
  lastPlayed: string;
  lessonsDone: Record<string, true>;
  quizBest: Record<string, number>;
  examBest: Record<string, number>;
  factsSeen: number[];
}

/** A full mock exam paper made of MCQ and written questions. */
export type PaperItem =
  | { kind: 'mcq'; id: string; stem: string; context?: string; options: string[]; answer: number; why: string; marks: 1 }
  | { kind: 'written'; id: string; stem: string; context?: string; marks: number; markScheme: MarkPoint[]; modelAnswer: string };

export interface ExamPaper {
  id: string;
  component: 'Paper 1' | 'Paper 2';
  number: 1 | 2 | 3;
  title: string;
  minutes: number;
  totalMarks: number;
  blurb: string;
  sections: { name: string; items: PaperItem[] }[];
}
