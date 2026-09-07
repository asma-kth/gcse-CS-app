import { useState } from 'react';

const PLACE = [128, 64, 32, 16, 8, 4, 2, 1];
const HEXD = '0123456789ABCDEF';

function toBits(n: number): number[] {
  return PLACE.map((p) => (n & p ? 1 : 0));
}

function fromBits(bits: number[]): number {
  return bits.reduce((sum, b, i) => sum + (b ? PLACE[i] : 0), 0);
}

function toHex(n: number): string {
  return HEXD[Math.floor(n / 16)] + HEXD[n % 16];
}

type Mode = 'convert' | 'add' | 'shift' | 'hex';

export default function BinaryLab() {
  const [mode, setMode] = useState<Mode>('convert');
  const [bits, setBits] = useState<number[]>(toBits(37));
  const [addA, setAddA] = useState(90);
  const [addB, setAddB] = useState(60);
  const [shiftN, setShiftN] = useState(22);
  const [shiftBy, setShiftBy] = useState(1);
  const [shiftDir, setShiftDir] = useState<'left' | 'right'>('left');

  const value = fromBits(bits);

  const sum = addA + addB;
  const overflow = sum > 255;
  const shifted =
    shiftDir === 'left' ? (shiftN << shiftBy) & 0xff : shiftN >> shiftBy;
  const shiftLost = shiftDir === 'left' ? (shiftN << shiftBy) > 255 : (shiftN & ((1 << shiftBy) - 1)) !== 0;

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        {(
          [
            ['convert', 'Denary and binary'],
            ['hex', 'Hexadecimal'],
            ['add', 'Binary addition'],
            ['shift', 'Binary shifts'],
          ] as [Mode, string][]
        ).map(([m, label]) => (
          <button key={m} className={`chip ${mode === m ? 'teal' : ''}`} onClick={() => setMode(m)}>
            {label}
          </button>
        ))}
      </div>

      {mode === 'convert' && (
        <div className="stage">
          <div className="bit-grid" style={{ marginBottom: 6 }}>
            {PLACE.map((p) => (
              <div key={p} className="bit-head">
                {p}
              </div>
            ))}
          </div>
          <div className="bit-grid">
            {bits.map((b, i) => (
              <button
                key={i}
                className={`bit-btn ${b ? 'on' : ''}`}
                onClick={() => setBits(bits.map((v, j) => (i === j ? (v ? 0 : 1) : v)))}
                aria-label={`bit worth ${PLACE[i]}`}
              >
                {b}
              </button>
            ))}
          </div>
          <div className="step-note">
            <div>
              Tap a bit to switch it on or off. A bit that is on adds its column heading to the total.
            </div>
            <div style={{ marginTop: 8, fontSize: 15 }}>
              <b>
                {bits.filter((b) => b).length === 0
                  ? '0'
                  : PLACE.filter((_, i) => bits[i]).join(' + ')}
                {' = '}
                {value}
              </b>
            </div>
            <div className="kv" style={{ marginTop: 8 }}>
              <span>Binary</span>
              <b style={{ fontFamily: 'monospace' }}>{bits.join('')}</b>
            </div>
            <div className="kv">
              <span>Denary</span>
              <b>{value}</b>
            </div>
            <div className="kv">
              <span>Hexadecimal</span>
              <b>{toHex(value)}</b>
            </div>
          </div>
          <div className="ctrl-row">
            <button className="btn ghost small" onClick={() => setBits(toBits(Math.floor(Math.random() * 256)))}>
              Random number
            </button>
            <button className="btn outline small" onClick={() => setBits(toBits(0))}>
              Clear
            </button>
          </div>
        </div>
      )}

      {mode === 'hex' && (
        <div className="stage">
          <div className="center" style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 13, color: '#5f5279', fontWeight: 700 }}>
              Split the 8 bits into two groups of 4. Each group becomes one hex digit.
            </div>
          </div>
          <div className="grid2">
            <div>
              <div className="bit-head" style={{ marginBottom: 4 }}>
                left nibble (8 4 2 1)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                {bits.slice(0, 4).map((b, i) => (
                  <button
                    key={i}
                    className={`bit-btn ${b ? 'on' : ''}`}
                    onClick={() => setBits(bits.map((v, j) => (i === j ? (v ? 0 : 1) : v)))}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <div className="center" style={{ marginTop: 6, fontWeight: 800, color: '#055b5c' }}>
                {`${fromBits([...bits.slice(0, 4), 0, 0, 0, 0]) / 16} = ${HEXD[Math.floor(value / 16)]}`}
              </div>
            </div>
            <div>
              <div className="bit-head" style={{ marginBottom: 4 }}>
                right nibble (8 4 2 1)
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
                {bits.slice(4).map((b, i) => (
                  <button
                    key={i}
                    className={`bit-btn ${b ? 'on' : ''}`}
                    onClick={() => setBits(bits.map((v, j) => (i + 4 === j ? (v ? 0 : 1) : v)))}
                  >
                    {b}
                  </button>
                ))}
              </div>
              <div className="center" style={{ marginTop: 6, fontWeight: 800, color: '#055b5c' }}>
                {`${value % 16} = ${HEXD[value % 16]}`}
              </div>
            </div>
          </div>
          <div className="step-note">
            <div style={{ fontSize: 17, textAlign: 'center' }}>
              <b>{`${bits.join('')} = ${value} = 0x${toHex(value)}`}</b>
            </div>
            <div style={{ marginTop: 8 }}>
              Hexadecimal is used because it is much shorter than binary and much easier for a human to copy without
              mistakes. Colour codes, MAC addresses and memory addresses all use it.
            </div>
          </div>
        </div>
      )}

      {mode === 'add' && (
        <div className="stage">
          <label className="tiny muted">First number: {addA}</label>
          <input type="range" min={0} max={255} value={addA} onChange={(e) => setAddA(Number(e.target.value))} />
          <label className="tiny muted">Second number: {addB}</label>
          <input type="range" min={0} max={255} value={addB} onChange={(e) => setAddB(Number(e.target.value))} />

          <pre className="code" style={{ marginTop: 10, textAlign: 'right' }}>
{`  ${toBits(addA).join('')}   ${String(addA).padStart(3)}
+ ${toBits(addB).join('')}   ${String(addB).padStart(3)}
  --------
  ${toBits(sum & 0xff).join('')}   ${String(sum & 0xff).padStart(3)}`}
          </pre>

          <div className="step-note">
            <div>The four rules of binary addition are the whole topic:</div>
            <ul className="bullets" style={{ marginTop: 6, marginBottom: 6 }}>
              <li>0 + 0 = 0</li>
              <li>0 + 1 = 1</li>
              <li>1 + 1 = 0, carry 1</li>
              <li>1 + 1 + 1 = 1, carry 1</li>
            </ul>
            {overflow ? (
              <div className="chip bad" style={{ display: 'inline-block' }}>
                {`Overflow. ${addA} + ${addB} = ${sum}, which needs 9 bits, so the answer will not fit in one byte.`}
              </div>
            ) : (
              <div className="chip good" style={{ display: 'inline-block' }}>
                {`No overflow. The answer ${sum} fits inside 8 bits.`}
              </div>
            )}
          </div>
        </div>
      )}

      {mode === 'shift' && (
        <div className="stage">
          <label className="tiny muted">Start number: {shiftN}</label>
          <input type="range" min={0} max={255} value={shiftN} onChange={(e) => setShiftN(Number(e.target.value))} />
          <div className="ctrl-row">
            <button className={`chip ${shiftDir === 'left' ? 'teal' : ''}`} onClick={() => setShiftDir('left')}>
              Shift left
            </button>
            <button className={`chip ${shiftDir === 'right' ? 'teal' : ''}`} onClick={() => setShiftDir('right')}>
              Shift right
            </button>
            {[1, 2, 3].map((n) => (
              <button key={n} className={`chip ${shiftBy === n ? 'gold' : ''}`} onClick={() => setShiftBy(n)}>
                {`by ${n}`}
              </button>
            ))}
          </div>

          <pre className="code" style={{ marginTop: 10 }}>
{`before  ${toBits(shiftN).join('')}   = ${shiftN}
after   ${toBits(shifted).join('')}   = ${shifted}`}
          </pre>

          <div className="step-note">
            <div>
              {shiftDir === 'left'
                ? `A left shift of ${shiftBy} multiplies by ${2 ** shiftBy}. Every bit moves ${shiftBy} place left and ${shiftBy} zero${shiftBy > 1 ? 's are' : ' is'} added on the right.`
                : `A right shift of ${shiftBy} divides by ${2 ** shiftBy} and throws away any remainder. Every bit moves ${shiftBy} place right.`}
            </div>
            {shiftLost && (
              <div className="chip bad" style={{ display: 'inline-block', marginTop: 8 }}>
                {shiftDir === 'left'
                  ? 'Bits fell off the left hand end, so the answer is wrong for 8 bits. That is overflow.'
                  : 'Bits fell off the right hand end, so some precision has been lost for ever.'}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
