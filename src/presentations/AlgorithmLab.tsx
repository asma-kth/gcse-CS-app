import { useEffect, useMemo, useState } from 'react';

type Algo = 'bubble' | 'merge' | 'insertion' | 'linear' | 'binary';

interface Frame {
  list: number[];
  a: number;
  b: number;
  note: string;
  done?: number[];
  found?: number;
}

function bubbleFrames(input: number[]): Frame[] {
  const list = [...input];
  const frames: Frame[] = [{ list: [...list], a: -1, b: -1, note: 'Starting list. Bubble sort compares neighbours and swaps them if they are the wrong way round.' }];
  const sorted: number[] = [];
  let swapped = true;
  let pass = 0;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < list.length - 1 - pass; i++) {
      frames.push({
        list: [...list],
        a: i,
        b: i + 1,
        done: [...sorted],
        note: `Compare ${list[i]} and ${list[i + 1]}.`,
      });
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        swapped = true;
        frames.push({
          list: [...list],
          a: i,
          b: i + 1,
          done: [...sorted],
          note: `${list[i + 1]} is bigger than ${list[i]}, so they swap.`,
        });
      } else {
        frames.push({
          list: [...list],
          a: i,
          b: i + 1,
          done: [...sorted],
          note: `They are already in order, so nothing moves.`,
        });
      }
    }
    sorted.push(list.length - 1 - pass);
    frames.push({
      list: [...list],
      a: -1,
      b: -1,
      done: [...sorted],
      note: `End of pass ${pass + 1}. The largest remaining value has bubbled to the right and is now locked in place.`,
    });
    pass++;
    if (pass >= list.length - 1) break;
  }
  frames.push({ list: [...list], a: -1, b: -1, done: list.map((_, i) => i), note: 'A whole pass happened with no swaps, so the list is sorted.' });
  return frames;
}

function insertionFrames(input: number[]): Frame[] {
  const list = [...input];
  const frames: Frame[] = [{ list: [...list], a: -1, b: -1, note: 'Insertion sort treats the left of the list as a sorted hand of cards.' }];
  for (let i = 1; i < list.length; i++) {
    const key = list[i];
    let j = i - 1;
    frames.push({ list: [...list], a: i, b: -1, done: Array.from({ length: i }, (_, k) => k), note: `Pick up ${key} and find where it belongs in the sorted part on the left.` });
    while (j >= 0 && list[j] > key) {
      list[j + 1] = list[j];
      frames.push({ list: [...list], a: j, b: j + 1, done: Array.from({ length: i }, (_, k) => k), note: `${list[j]} is bigger than ${key}, so shift it one place right.` });
      j--;
    }
    list[j + 1] = key;
    frames.push({ list: [...list], a: j + 1, b: -1, done: Array.from({ length: i + 1 }, (_, k) => k), note: `Drop ${key} into position. The left hand side is sorted again.` });
  }
  frames.push({ list: [...list], a: -1, b: -1, done: list.map((_, i) => i), note: 'Every card has been picked up and inserted, so the list is sorted.' });
  return frames;
}

function mergeFrames(input: number[]): Frame[] {
  const frames: Frame[] = [{ list: [...input], a: -1, b: -1, note: 'Merge sort keeps splitting the list in half until every piece holds one item.' }];
  const splits: number[][][] = [];
  let level: number[][] = [[...input]];
  while (level.some((g) => g.length > 1)) {
    const next: number[][] = [];
    for (const g of level) {
      if (g.length > 1) {
        const mid = Math.floor(g.length / 2);
        next.push(g.slice(0, mid), g.slice(mid));
      } else next.push(g);
    }
    splits.push(next);
    level = next;
  }
  for (const s of splits) {
    frames.push({ list: s.flat(), a: -1, b: -1, note: `Split into ${s.length} group${s.length > 1 ? 's' : ''}: ${s.map((g) => g.join(' ')).join(' | ')}` });
  }
  let merged = level;
  while (merged.length > 1) {
    const next: number[][] = [];
    for (let i = 0; i < merged.length; i += 2) {
      if (i + 1 >= merged.length) {
        next.push(merged[i]);
        continue;
      }
      const left = merged[i];
      const right = merged[i + 1];
      const out: number[] = [];
      let li = 0;
      let ri = 0;
      while (li < left.length && ri < right.length) out.push(left[li] <= right[ri] ? left[li++] : right[ri++]);
      while (li < left.length) out.push(left[li++]);
      while (ri < right.length) out.push(right[ri++]);
      next.push(out);
    }
    frames.push({ list: next.flat(), a: -1, b: -1, note: `Merge pairs by always taking the smaller front item: ${next.map((g) => g.join(' ')).join(' | ')}` });
    merged = next;
  }
  frames.push({ list: merged[0], a: -1, b: -1, done: merged[0].map((_, i) => i), note: 'One group is left and it is fully sorted.' });
  return frames;
}

function linearFrames(list: number[], target: number): Frame[] {
  const frames: Frame[] = [{ list, a: -1, b: -1, note: `Linear search for ${target}. Start at the very first item.` }];
  for (let i = 0; i < list.length; i++) {
    if (list[i] === target) {
      frames.push({ list, a: i, b: -1, found: i, note: `Item ${i} is ${list[i]}. That matches, so the search stops after ${i + 1} check${i ? 's' : ''}.` });
      return frames;
    }
    frames.push({ list, a: i, b: -1, note: `Item ${i} is ${list[i]}, which is not ${target}. Move one to the right.` });
  }
  frames.push({ list, a: -1, b: -1, note: `The end of the list was reached without finding ${target}, so it is not there.` });
  return frames;
}

function binaryFrames(list: number[], target: number): Frame[] {
  const frames: Frame[] = [{ list, a: -1, b: -1, note: `Binary search for ${target}. The list must already be sorted.` }];
  let low = 0;
  let high = list.length - 1;
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const range = Array.from({ length: high - low + 1 }, (_, k) => low + k);
    if (list[mid] === target) {
      frames.push({ list, a: mid, b: -1, done: range, found: mid, note: `The middle item is ${list[mid]}, which is what we wanted. Found it.` });
      return frames;
    }
    if (list[mid] < target) {
      frames.push({ list, a: mid, b: -1, done: range, note: `The middle item is ${list[mid]}, which is smaller than ${target}. Throw away the middle and everything to the left.` });
      low = mid + 1;
    } else {
      frames.push({ list, a: mid, b: -1, done: range, note: `The middle item is ${list[mid]}, which is bigger than ${target}. Throw away the middle and everything to the right.` });
      high = mid - 1;
    }
  }
  frames.push({ list, a: -1, b: -1, note: `There is nothing left to check, so ${target} is not in the list.` });
  return frames;
}

const START = [7, 2, 9, 4, 1, 6];
const SORTED = [3, 8, 12, 19, 27, 34, 41, 55];

export default function AlgorithmLab() {
  const [algo, setAlgo] = useState<Algo>('bubble');
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [target, setTarget] = useState(41);

  const frames = useMemo(() => {
    if (algo === 'bubble') return bubbleFrames(START);
    if (algo === 'insertion') return insertionFrames(START);
    if (algo === 'merge') return mergeFrames(START);
    if (algo === 'linear') return linearFrames(SORTED, target);
    return binaryFrames(SORTED, target);
  }, [algo, target]);

  useEffect(() => {
    setStep(0);
    setPlaying(false);
  }, [algo, target]);

  useEffect(() => {
    if (!playing) return;
    if (step >= frames.length - 1) {
      setPlaying(false);
      return;
    }
    const id = setTimeout(() => setStep((s) => s + 1), 850);
    return () => clearTimeout(id);
  }, [playing, step, frames.length]);

  const f = frames[Math.min(step, frames.length - 1)];
  const isSearch = algo === 'linear' || algo === 'binary';

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        {(
          [
            ['bubble', 'Bubble sort'],
            ['insertion', 'Insertion sort'],
            ['merge', 'Merge sort'],
            ['linear', 'Linear search'],
            ['binary', 'Binary search'],
          ] as [Algo, string][]
        ).map(([a, label]) => (
          <button key={a} className={`chip ${algo === a ? 'teal' : ''}`} onClick={() => setAlgo(a)}>
            {label}
          </button>
        ))}
      </div>

      {isSearch && (
        <div className="ctrl-row" style={{ marginBottom: 8 }}>
          <span className="tiny muted">Search for:</span>
          {SORTED.map((n) => (
            <button key={n} className={`chip ${target === n ? 'gold' : ''}`} onClick={() => setTarget(n)}>
              {n}
            </button>
          ))}
        </div>
      )}

      <div className="stage">
        <div style={{ display: 'flex', gap: 6, justifyContent: 'center', flexWrap: 'wrap' }}>
          {f.list.map((n, i) => {
            const active = i === f.a || i === f.b;
            const locked = f.done?.includes(i);
            const found = f.found === i;
            return (
              <div
                key={i}
                style={{
                  minWidth: 40,
                  padding: '12px 6px',
                  borderRadius: 12,
                  fontWeight: 800,
                  textAlign: 'center',
                  border: `2px solid ${found ? '#1d8a5f' : active ? '#e0a02a' : locked ? '#08979d' : '#e4e0ee'}`,
                  background: found ? '#e2f5ec' : active ? '#fdf3dd' : locked ? '#dff2f3' : '#fff',
                  color: '#21313a',
                  transition: 'all 0.25s ease',
                }}
              >
                {n}
                <div style={{ fontSize: 9, color: '#7d919b', fontWeight: 600 }}>{i}</div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="step-note">
        <b>{`Step ${step + 1} of ${frames.length}`}</b>
        <div style={{ marginTop: 4 }}>{f.note}</div>
      </div>

      <div className="ctrl-row">
        <button className="btn ghost small" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>
          Back
        </button>
        <button className="btn small" onClick={() => setStep((s) => Math.min(frames.length - 1, s + 1))} disabled={step >= frames.length - 1}>
          Next
        </button>
        <button className="btn outline small" onClick={() => setPlaying((p) => !p)}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className="btn outline small" onClick={() => { setStep(0); setPlaying(false); }}>
          Restart
        </button>
      </div>
    </div>
  );
}
