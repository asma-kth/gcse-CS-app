import { useState } from 'react';

type Circuit = 'and' | 'or' | 'not' | 'and-not' | 'or-and';

const CIRCUITS: Record<Circuit, { label: string; expr: string; inputs: number; fn: (a: number, b: number, c: number) => number; story: string }> = {
  and: {
    label: 'A AND B',
    expr: 'Q = A AND B',
    inputs: 2,
    fn: (a, b) => (a && b ? 1 : 0),
    story: 'A microwave only runs when the door is closed AND the start button is pressed.',
  },
  or: {
    label: 'A OR B',
    expr: 'Q = A OR B',
    inputs: 2,
    fn: (a, b) => (a || b ? 1 : 0),
    story: 'A car alarm sounds if the door sensor is triggered OR the window sensor is triggered.',
  },
  not: {
    label: 'NOT A',
    expr: 'Q = NOT A',
    inputs: 1,
    fn: (a) => (a ? 0 : 1),
    story: 'A fridge light comes on when the door is NOT closed.',
  },
  'and-not': {
    label: 'A AND NOT B',
    expr: 'Q = A AND (NOT B)',
    inputs: 2,
    fn: (a, b) => (a && !b ? 1 : 0),
    story: 'A heater turns on when the thermostat calls for heat AND the window is NOT open.',
  },
  'or-and': {
    label: '(A OR B) AND C',
    expr: 'Q = (A OR B) AND C',
    inputs: 3,
    fn: (a, b, c) => ((a || b) && c ? 1 : 0),
    story: 'A fire alarm sounds when smoke OR heat is detected AND the system is switched on.',
  },
};

export default function LogicLab() {
  const [circuit, setCircuit] = useState<Circuit>('and');
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  const cfg = CIRCUITS[circuit];
  const q = cfg.fn(a, b, c);

  const rows: number[][] = [];
  const n = cfg.inputs;
  for (let i = 0; i < 2 ** n; i++) {
    const vals = [];
    for (let bit = n - 1; bit >= 0; bit--) vals.push((i >> bit) & 1);
    rows.push(vals);
  }

  const wire = (on: number) => (on ? '#08979d' : '#c8c4d6');

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        {(Object.keys(CIRCUITS) as Circuit[]).map((k) => (
          <button key={k} className={`chip ${circuit === k ? 'teal' : ''}`} onClick={() => setCircuit(k)}>
            {CIRCUITS[k].label}
          </button>
        ))}
      </div>

      <div className="stage">
        <svg viewBox="0 0 340 130">
          <line x1="14" y1="40" x2="90" y2="40" stroke={wire(a)} strokeWidth="3" />
          <text x="14" y="32" fontSize="12" fontWeight="700" fill="#5f5279">
            A
          </text>
          {cfg.inputs > 1 && (
            <>
              <line x1="14" y1="76" x2="90" y2="76" stroke={wire(b)} strokeWidth="3" />
              <text x="14" y="68" fontSize="12" fontWeight="700" fill="#5f5279">
                B
              </text>
            </>
          )}
          {cfg.inputs > 2 && (
            <>
              <line x1="14" y1="110" x2="200" y2="110" stroke={wire(c)} strokeWidth="3" />
              <text x="14" y="102" fontSize="12" fontWeight="700" fill="#5f5279">
                C
              </text>
            </>
          )}

          <rect x="90" y="24" width="90" height="70" rx="14" fill="#dff2f3" stroke="#08979d" strokeWidth="2" />
          <text x="135" y="64" fontSize="13" fontWeight="800" fill="#055b5c" textAnchor="middle">
            {cfg.expr.replace('Q = ', '')}
          </text>

          <line x1="180" y1="59" x2="260" y2="59" stroke={wire(q)} strokeWidth="3" />
          <circle cx="278" cy="59" r="16" fill={q ? '#1d8a5f' : '#ede2f4'} stroke="#5f5279" strokeWidth="2" />
          <text x="278" y="64" fontSize="14" fontWeight="800" fill={q ? '#fff' : '#5f5279'} textAnchor="middle">
            {q}
          </text>
          <text x="278" y="34" fontSize="12" fontWeight="700" fill="#5f5279" textAnchor="middle">
            Q
          </text>
        </svg>

        <div className="ctrl-row" style={{ justifyContent: 'center' }}>
          <button className={`chip ${a ? 'good' : ''}`} onClick={() => setA(a ? 0 : 1)}>
            {`A = ${a}`}
          </button>
          {cfg.inputs > 1 && (
            <button className={`chip ${b ? 'good' : ''}`} onClick={() => setB(b ? 0 : 1)}>
              {`B = ${b}`}
            </button>
          )}
          {cfg.inputs > 2 && (
            <button className={`chip ${c ? 'good' : ''}`} onClick={() => setC(c ? 0 : 1)}>
              {`C = ${c}`}
            </button>
          )}
        </div>
      </div>

      <div className="card flat">
        <div className="card-title">Truth table</div>
        <div className="tbl-wrap">
          <table className="tbl">
            <thead>
              <tr>
                <th>A</th>
                {cfg.inputs > 1 && <th>B</th>}
                {cfg.inputs > 2 && <th>C</th>}
                <th>Q</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const current = r[0] === a && (cfg.inputs < 2 || r[1] === b) && (cfg.inputs < 3 || r[2] === c);
                return (
                  <tr key={i} style={current ? { background: '#fdf3dd' } : undefined}>
                    {r.map((v, j) => (
                      <td key={j} style={{ fontWeight: 700 }}>
                        {v}
                      </td>
                    ))}
                    <td style={{ fontWeight: 800, color: cfg.fn(r[0], r[1] ?? 0, r[2] ?? 0) ? '#1d8a5f' : '#c0392b' }}>
                      {cfg.fn(r[0], r[1] ?? 0, r[2] ?? 0)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="tiny muted" style={{ marginTop: 8 }}>
          The highlighted row is the one your switches are currently showing.
        </div>
      </div>

      <div className="step-note">
        <b>Real life version</b>
        <div style={{ marginTop: 4 }}>{cfg.story}</div>
        <div style={{ marginTop: 8 }} className="tiny muted">
          Exam habit: count the input combinations first. One input gives 2 rows, two inputs give 4 rows, three inputs
          give 8 rows. Fill the input columns in a neat binary counting pattern so you never miss a row.
        </div>
      </div>
    </div>
  );
}
