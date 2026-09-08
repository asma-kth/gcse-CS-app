/**
 * Content audit. Checks the specification content itself rather than the UI:
 * duplicate ids, quiz answers that point outside their options, mark schemes
 * with fewer mark points than marks, missing diagrams or labs, mismatched
 * table rows, and any em dash that has crept in.
 *
 * Run with `npm run audit`. It exits non zero if anything is wrong, so it
 * works in CI.
 */
import { TOPICS } from '../src/content/topics';
import { PAPERS, paperMarks } from '../src/content/papers';
import { DEMOS, DEMO_MAP } from '../src/presentations';
import { DIAGRAMS } from '../src/diagrams';

const problems: string[] = [];
const seen = new Set<string>();
const id = (v: string, what: string) => {
  if (seen.has(v)) problems.push(`Duplicate id ${v} (${what})`);
  seen.add(v);
};

let lessons = 0, quizQs = 0, examQs = 0, examMarks = 0, blocks = 0;

for (const t of TOPICS) {
  id(t.id, 'topic');
  if (t.quizzes.length !== 2) problems.push(`${t.id} has ${t.quizzes.length} quizzes, expected 2`);
  if (t.exam.length !== 5) problems.push(`${t.id} has ${t.exam.length} exam questions, expected 5`);

  for (const l of t.lessons) {
    id(l.id, 'lesson');
    lessons++;
    blocks += l.blocks.length;
    for (const b of l.blocks) {
      if (b.t === 'diagram' && !DIAGRAMS[b.id]) problems.push(`${l.id} references missing diagram "${b.id}"`);
      if (b.t === 'demo' && !DEMO_MAP[b.id]) problems.push(`${l.id} references missing demo "${b.id}"`);
      if (b.t === 'table') {
        for (const r of b.rows) {
          if (r.length !== b.head.length) problems.push(`${l.id} table row has ${r.length} cells, head has ${b.head.length}`);
        }
      }
    }
  }

  for (const q of t.quizzes) {
    id(q.id, 'quiz');
    if (q.questions.length !== 10) problems.push(`${q.id} has ${q.questions.length} questions, expected 10`);
    for (const [i, qq] of q.questions.entries()) {
      quizQs++;
      if (qq.answer < 0 || qq.answer >= qq.options.length) problems.push(`${q.id} q${i + 1} answer index ${qq.answer} out of range`);
      if (new Set(qq.options).size !== qq.options.length) problems.push(`${q.id} q${i + 1} has duplicate options`);
      if (!qq.why.trim()) problems.push(`${q.id} q${i + 1} has no explanation`);
    }
  }

  for (const e of t.exam) {
    id(e.id, 'exam question');
    examQs++;
    examMarks += e.marks;
    if (!e.markScheme.length) problems.push(`${e.id} has no mark points`);
    if (e.markScheme.length < e.marks) problems.push(`${e.id} worth ${e.marks} marks but only ${e.markScheme.length} mark points`);
    if (!e.modelAnswer.trim()) problems.push(`${e.id} has no model answer`);
    for (const mp of e.markScheme) {
      if (!mp.accept.length) problems.push(`${e.id} mark point "${mp.text.slice(0, 30)}" has no accept groups`);
      for (const g of mp.accept) {
        if (!g.length) problems.push(`${e.id} has an empty accept group`);
        for (const kw of g) if (kw !== kw.toLowerCase()) problems.push(`${e.id} accept keyword "${kw}" is not lower case`);
      }
    }
  }
}

let paperMarksTotal = 0, paperItems = 0;
for (const p of PAPERS) {
  id(p.id, 'paper');
  const real = paperMarks(p);
  paperMarksTotal += real;
  if (real !== p.totalMarks) problems.push(`${p.id} declares ${p.totalMarks} marks but items add to ${real}`);
  for (const s of p.sections) {
    for (const item of s.items) {
      id(item.id, 'paper item');
      paperItems++;
      if (item.kind === 'mcq') {
        // The marks field on a multiple choice item is typed as the literal 1,
        // so the type system already guarantees it. Only the answer index can drift.
        if (item.answer < 0 || item.answer >= item.options.length) problems.push(`${item.id} answer index out of range`);
        if (new Set(item.options).size !== item.options.length) problems.push(`${item.id} has duplicate options`);
        if (!item.why.trim()) problems.push(`${item.id} has no explanation`);
      } else {
        if (item.markScheme.length < item.marks) problems.push(`${item.id} worth ${item.marks} but has ${item.markScheme.length} mark points`);
        if (!item.modelAnswer.trim()) problems.push(`${item.id} has no model answer`);
      }
    }
  }
}

// em dash sweep over every string in the content
const emdash = /[—–]/;
const walk = (v: unknown, path: string) => {
  if (typeof v === 'string') { if (emdash.test(v)) problems.push(`Em dash in ${path}: ${v.slice(0, 50)}`); }
  else if (Array.isArray(v)) v.forEach((x, i) => walk(x, `${path}[${i}]`));
  else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, `${path}.${k}`);
};
walk(TOPICS, 'TOPICS');
walk(PAPERS, 'PAPERS');

const summary = {
  topics: TOPICS.length,
  lessons,
  contentBlocks: blocks,
  quizQuestions: quizQs,
  topicExamQuestions: examQs,
  topicExamMarks: examMarks,
  papers: PAPERS.length,
  paperItems,
  paperMarks: paperMarksTotal,
  labs: DEMOS.length,
  diagrams: Object.keys(DIAGRAMS).length,
  problems,
};

console.log(JSON.stringify(summary, null, 1));

if (problems.length) {
  console.error(`\nContent audit failed with ${problems.length} problem${problems.length === 1 ? '' : 's'}.`);
  process.exit(1);
}
console.log('\nContent audit passed.');
