import { useState } from 'react';

interface TraceTask {
  title: string;
  code: string;
  columns: string[];
  rows: string[][];
  explain: string;
}

const TASKS: TraceTask[] = [
  {
    title: 'A simple counting loop',
    code: `total = 0
for i in range(1, 5):
    total = total + i
    print(total)`,
    columns: ['i', 'total', 'output'],
    rows: [
      ['1', '1', '1'],
      ['2', '3', '3'],
      ['3', '6', '6'],
      ['4', '10', '10'],
    ],
    explain:
      'range(1, 5) counts 1, 2, 3, 4 and stops before 5. Each time round, i is added to total, then total is printed.',
  },
  {
    title: 'A while loop with a condition',
    code: `x = 20
count = 0
while x > 3:
    x = x // 2
    count = count + 1
print(count)`,
    columns: ['x', 'count'],
    rows: [
      ['10', '1'],
      ['5', '2'],
      ['2', '3'],
    ],
    explain:
      'Integer division // throws the decimal part away. 20 becomes 10, then 5, then 2. Once x is 2 the condition x > 3 is false, so the loop stops and 3 is printed.',
  },
  {
    title: 'Selection inside a loop',
    code: `scores = [4, 9, 2, 7]
best = 0
for s in scores:
    if s > best:
        best = s
print(best)`,
    columns: ['s', 'best'],
    rows: [
      ['4', '4'],
      ['9', '9'],
      ['2', '9'],
      ['7', '9'],
    ],
    explain:
      'best only changes when a bigger score turns up. 2 and 7 are both smaller than 9, so best stays at 9. This is the standard way to find a maximum.',
  },
];

export default function TraceTable() {
  const [taskIndex, setTaskIndex] = useState(0);
  const task = TASKS[taskIndex];
  const [entries, setEntries] = useState<string[][]>(() => task.rows.map((r) => r.map(() => '')));
  const [checked, setChecked] = useState(false);

  const switchTask = (i: number) => {
    setTaskIndex(i);
    setEntries(TASKS[i].rows.map((r) => r.map(() => '')));
    setChecked(false);
  };

  const correctCount = entries.flat().filter((v, i) => v.trim() === task.rows.flat()[i]).length;
  const total = task.rows.flat().length;

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        {TASKS.map((t, i) => (
          <button key={t.title} className={`chip ${taskIndex === i ? 'teal' : ''}`} onClick={() => switchTask(i)}>
            {`Program ${i + 1}`}
          </button>
        ))}
      </div>

      <div className="code-label">{task.title}</div>
      <pre className="code">{task.code}</pre>

      <div className="tiny muted" style={{ margin: '10px 0 6px' }}>
        Fill in one row for every time round the loop, then check your answers.
      </div>

      <div className="tbl-wrap">
        <table className="tbl">
          <thead>
            <tr>
              <th>Pass</th>
              {task.columns.map((c) => (
                <th key={c}>{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {task.rows.map((row, r) => (
              <tr key={r}>
                <td style={{ fontWeight: 800 }}>{r + 1}</td>
                {row.map((expected, c) => {
                  const val = entries[r]?.[c] ?? '';
                  const right = val.trim() === expected;
                  return (
                    <td key={c} style={{ padding: 4 }}>
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => {
                          const next = entries.map((rr) => [...rr]);
                          next[r][c] = e.target.value;
                          setEntries(next);
                          setChecked(false);
                        }}
                        style={{
                          width: '100%',
                          minWidth: 54,
                          padding: '7px 8px',
                          fontSize: 14,
                          borderColor: checked ? (right ? '#1d8a5f' : '#c0392b') : undefined,
                          background: checked ? (right ? '#e2f5ec' : '#fdeae7') : undefined,
                        }}
                      />
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="ctrl-row">
        <button className="btn small" onClick={() => setChecked(true)}>
          Check my trace table
        </button>
        <button
          className="btn ghost small"
          onClick={() => {
            setEntries(task.rows.map((r) => [...r]));
            setChecked(true);
          }}
        >
          Show the answers
        </button>
        <button className="btn outline small" onClick={() => switchTask(taskIndex)}>
          Clear
        </button>
      </div>

      {checked && (
        <div className="step-note fadein">
          <b>{`You matched ${correctCount} out of ${total} cells.`}</b>
          <div style={{ marginTop: 6 }}>{task.explain}</div>
        </div>
      )}
    </div>
  );
}
