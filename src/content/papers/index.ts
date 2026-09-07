import type { ExamPaper } from '../../types';
import { paper1_1 } from './p1-1';
import { paper1_2 } from './p1-2';
import { paper1_3 } from './p1-3';
import { paper2_1 } from './p2-1';
import { paper2_2 } from './p2-2';
import { paper2_3 } from './p2-3';

export const PAPERS: ExamPaper[] = [paper1_1, paper1_2, paper1_3, paper2_1, paper2_2, paper2_3];

export const PAPER_MAP: Record<string, ExamPaper> = Object.fromEntries(PAPERS.map((p) => [p.id, p]));

/** Marks actually available, counted from the questions rather than trusted from the header. */
export function paperMarks(paper: ExamPaper): number {
  return paper.sections.reduce(
    (sum, section) => sum + section.items.reduce((s, item) => s + item.marks, 0),
    0,
  );
}
