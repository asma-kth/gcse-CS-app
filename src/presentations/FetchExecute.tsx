import { useState } from 'react';

interface Step {
  stage: 'Fetch' | 'Decode' | 'Execute';
  title: string;
  detail: string;
  pc: number;
  mar: number | null;
  mdr: string | null;
  acc: number | null;
  cir: string | null;
  highlight: 'pc' | 'mar' | 'mdr' | 'cir' | 'acc' | 'alu' | 'ram';
}

const PROGRAM: Record<number, { code: string; plain: string }> = {
  100: { code: 'LOAD 200', plain: 'copy the number at address 200 into the accumulator' },
  101: { code: 'ADD 201', plain: 'add the number at address 201 to the accumulator' },
  102: { code: 'STORE 202', plain: 'copy the accumulator into address 202' },
};

const MEMORY: Record<number, string> = { 200: '7', 201: '5', 202: 'empty' };

const PLAIN: Record<string, string> = Object.fromEntries(
  Object.values(PROGRAM).map((p) => [p.code, p.plain]),
);

const STEPS: Step[] = [
  {
    stage: 'Fetch',
    title: '1. The address in the PC is copied to the MAR',
    detail:
      'The program counter is holding 100, which is the address of the next instruction. That address is copied into the memory address register so main memory knows which box to open.',
    pc: 100,
    mar: 100,
    mdr: null,
    acc: null,
    cir: null,
    highlight: 'mar',
  },
  {
    stage: 'Fetch',
    title: '2. The instruction travels back into the MDR',
    detail:
      'The address bus carries 100 to RAM. RAM sends the contents of address 100 back along the data bus into the memory data register.',
    pc: 100,
    mar: 100,
    mdr: 'LOAD 200',
    acc: null,
    cir: null,
    highlight: 'ram',
  },
  {
    stage: 'Fetch',
    title: '3. The program counter is increased by one',
    detail:
      'The PC now points at 101 so that the CPU is already ready for the next instruction. This happens during the fetch, not at the end of the cycle.',
    pc: 101,
    mar: 100,
    mdr: 'LOAD 200',
    acc: null,
    cir: null,
    highlight: 'pc',
  },
  {
    stage: 'Decode',
    title: '4. The instruction moves to the CIR and is decoded',
    detail:
      'The control unit splits LOAD 200 into an opcode (LOAD, what to do) and an operand (200, what to do it to). Now the CPU knows which circuits to switch on.',
    pc: 101,
    mar: 100,
    mdr: 'LOAD 200',
    acc: null,
    cir: 'LOAD 200',
    highlight: 'cir',
  },
  {
    stage: 'Execute',
    title: '5. The instruction is carried out',
    detail:
      'LOAD 200 means fetch the value stored at address 200, which is 7, and put it in the accumulator. The accumulator is the register that holds working answers.',
    pc: 101,
    mar: 200,
    mdr: '7',
    acc: 7,
    cir: 'LOAD 200',
    highlight: 'acc',
  },
  {
    stage: 'Fetch',
    title: '6. Round again for the next instruction',
    detail:
      'The cycle restarts. The PC holds 101, so ADD 201 is fetched, decoded and executed next. This never stops while the computer is switched on.',
    pc: 101,
    mar: 101,
    mdr: 'ADD 201',
    acc: 7,
    cir: 'LOAD 200',
    highlight: 'mar',
  },
  {
    stage: 'Execute',
    title: '7. ADD 201 runs inside the ALU',
    detail:
      'The ALU does the arithmetic. It adds 5 (the value at address 201) to the 7 already in the accumulator, giving 12. The result stays in the accumulator.',
    pc: 102,
    mar: 201,
    mdr: '5',
    acc: 12,
    cir: 'ADD 201',
    highlight: 'alu',
  },
  {
    stage: 'Execute',
    title: '8. STORE 202 writes the answer back to memory',
    detail:
      'The accumulator holds 12. STORE 202 copies that value out of the CPU and into address 202 in RAM, so the program has produced its result.',
    pc: 103,
    mar: 202,
    mdr: '12',
    acc: 12,
    cir: 'STORE 202',
    highlight: 'ram',
  },
];

const HL = '#08979d';
const OFF = '#e4e0ee';

export default function FetchExecute() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  const glow = (name: Step['highlight']) => (s.highlight === name ? HL : OFF);
  const glowW = (name: Step['highlight']) => (s.highlight === name ? 3 : 2);

  return (
    <div>
      <div className="stage">
        <svg viewBox="0 0 360 250">
          <rect x="8" y="26" width="222" height="176" rx="16" fill="#dff2f3" stroke="#08979d" strokeWidth="2" />
          <text x="119" y="44" fontSize="12.5" fontWeight="700" fill="#055b5c" textAnchor="middle">
            CPU
          </text>

          <rect x="20" y="54" width="96" height="38" rx="9" fill="#fff" stroke={glow('pc')} strokeWidth={glowW('pc')} />
          <text x="68" y="70" fontSize="10.5" fill="#5f5279" textAnchor="middle" fontWeight="700">
            Program counter
          </text>
          <text x="68" y="86" fontSize="13" fill="#055b5c" textAnchor="middle" fontWeight="700" fontFamily="monospace">
            {s.pc}
          </text>

          <rect x="124" y="54" width="96" height="38" rx="9" fill="#fff" stroke={glow('mar')} strokeWidth={glowW('mar')} />
          <text x="172" y="70" fontSize="10.5" fill="#5f5279" textAnchor="middle" fontWeight="700">
            MAR
          </text>
          <text x="172" y="86" fontSize="13" fill="#055b5c" textAnchor="middle" fontWeight="700" fontFamily="monospace">
            {s.mar ?? '-'}
          </text>

          <rect x="20" y="100" width="96" height="38" rx="9" fill="#fff" stroke={glow('mdr')} strokeWidth={glowW('mdr')} />
          <text x="68" y="116" fontSize="10.5" fill="#5f5279" textAnchor="middle" fontWeight="700">
            MDR
          </text>
          <text x="68" y="132" fontSize="12" fill="#055b5c" textAnchor="middle" fontWeight="700" fontFamily="monospace">
            {s.mdr ?? '-'}
          </text>

          <rect x="124" y="100" width="96" height="38" rx="9" fill="#fff" stroke={glow('cir')} strokeWidth={glowW('cir')} />
          <text x="172" y="116" fontSize="10.5" fill="#5f5279" textAnchor="middle" fontWeight="700">
            CIR
          </text>
          <text x="172" y="132" fontSize="11.5" fill="#055b5c" textAnchor="middle" fontWeight="700" fontFamily="monospace">
            {s.cir ?? '-'}
          </text>

          <rect x="20" y="146" width="96" height="46" rx="9" fill="#fff" stroke={glow('acc')} strokeWidth={glowW('acc')} />
          <text x="68" y="164" fontSize="10.5" fill="#5f5279" textAnchor="middle" fontWeight="700">
            Accumulator
          </text>
          <text x="68" y="183" fontSize="15" fill="#055b5c" textAnchor="middle" fontWeight="700" fontFamily="monospace">
            {s.acc ?? '-'}
          </text>

          <rect x="124" y="146" width="96" height="46" rx="9" fill="#ede2f4" stroke={glow('alu')} strokeWidth={glowW('alu')} />
          <text x="172" y="168" fontSize="11" fill="#5f5279" textAnchor="middle" fontWeight="700">
            ALU
          </text>
          <text x="172" y="183" fontSize="9" fill="#8474a1" textAnchor="middle">
            add, subtract, compare
          </text>

          <rect x="242" y="26" width="110" height="176" rx="16" fill="#ede2f4" stroke={glow('ram')} strokeWidth={glowW('ram')} />
          <text x="297" y="44" fontSize="12.5" fontWeight="700" fill="#5f5279" textAnchor="middle">
            RAM
          </text>
          {[100, 101, 102].map((addr, n) => (
            <g key={addr}>
              <rect
                x="250"
                y={52 + n * 26}
                width="94"
                height="22"
                rx="6"
                fill={s.mar === addr ? '#6ec6ca' : '#fff'}
                stroke="#8474a1"
              />
              <text x="262" y={67 + n * 26} fontSize="9" fill="#5f5279" fontFamily="monospace">
                {addr}
              </text>
              <text x="338" y={67 + n * 26} fontSize="9" fill="#21313a" textAnchor="end" fontFamily="monospace">
                {PROGRAM[addr].code}
              </text>
            </g>
          ))}
          {[200, 201, 202].map((addr, n) => (
            <g key={addr}>
              <rect
                x="250"
                y={136 + n * 24}
                width="94"
                height="20"
                rx="6"
                fill={s.mar === addr ? '#6ec6ca' : '#fff'}
                stroke="#8474a1"
              />
              <text x="262" y={150 + n * 24} fontSize="9" fill="#5f5279" fontFamily="monospace">
                {addr}
              </text>
              <text x="338" y={150 + n * 24} fontSize="9" fill="#21313a" textAnchor="end" fontFamily="monospace">
                {addr === 202 && s.acc === 12 && i >= 7 ? '12' : MEMORY[addr]}
              </text>
            </g>
          ))}

          <text x="119" y="220" fontSize="10.5" fill="#5f5279" textAnchor="middle">
            address bus carries addresses one way
          </text>
          <text x="119" y="236" fontSize="10.5" fill="#5f5279" textAnchor="middle">
            data bus carries data both ways
          </text>
        </svg>
      </div>

      <div className="chip-row" style={{ marginBottom: 8 }}>
        <span className={`chip ${s.stage === 'Fetch' ? 'teal' : ''}`}>Fetch</span>
        <span className={`chip ${s.stage === 'Decode' ? 'teal' : ''}`}>Decode</span>
        <span className={`chip ${s.stage === 'Execute' ? 'teal' : ''}`}>Execute</span>
        <span className="chip gold">{`step ${i + 1} of ${STEPS.length}`}</span>
      </div>

      <div className="step-note">
        <b>{s.title}</b>
        <div style={{ marginTop: 6 }}>{s.detail}</div>
        {s.cir && PLAIN[s.cir] && (
          <div style={{ marginTop: 6, fontSize: 13 }} className="muted">
            {`Plain English: ${PLAIN[s.cir]}`}
          </div>
        )}
      </div>

      <div className="ctrl-row">
        <button className="btn ghost small" onClick={() => setI((v) => Math.max(0, v - 1))} disabled={i === 0}>
          Back
        </button>
        <button
          className="btn small"
          onClick={() => setI((v) => Math.min(STEPS.length - 1, v + 1))}
          disabled={i === STEPS.length - 1}
        >
          Next step
        </button>
        <button className="btn outline small" onClick={() => setI(0)}>
          Restart
        </button>
      </div>
    </div>
  );
}
