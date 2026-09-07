import type { Topic } from '../../types';
import { t1_1 } from './t1-1';
import { t1_2 } from './t1-2';
import { t1_3 } from './t1-3';
import { t1_4 } from './t1-4';
import { t1_5 } from './t1-5';
import { t1_6 } from './t1-6';
import { t2_1 } from './t2-1';
import { t2_2 } from './t2-2';
import { t2_3 } from './t2-3';
import { t2_4 } from './t2-4';
import { t2_5 } from './t2-5';
import { pythonUnit } from './python';
import { erlUnit } from './erl';

export const TOPICS: Topic[] = [
  t1_1,
  t1_2,
  t1_3,
  t1_4,
  t1_5,
  t1_6,
  t2_1,
  t2_2,
  t2_3,
  t2_4,
  t2_5,
  pythonUnit,
  erlUnit,
];

export const TOPIC_MAP: Record<string, Topic> = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
