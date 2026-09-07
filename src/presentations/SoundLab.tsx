import { useMemo, useState } from 'react';

function formatSize(bits: number): string {
  const bytes = bits / 8;
  if (bytes < 1000) return `${bytes.toFixed(0)} bytes`;
  if (bytes < 1_000_000) return `${(bytes / 1000).toFixed(1)} kB`;
  return `${(bytes / 1_000_000).toFixed(2)} MB`;
}

export default function SoundLab() {
  const [rate, setRate] = useState(16);
  const [depth, setDepth] = useState(4);
  const [seconds, setSeconds] = useState(30);

  const wave = useMemo(() => {
    const pts: string[] = [];
    for (let x = 0; x <= 320; x += 2) {
      const y = 80 - 46 * Math.sin((x / 320) * Math.PI * 2.4);
      pts.push(`${x + 20},${y}`);
    }
    return pts.join(' ');
  }, []);

  const levels = 2 ** depth;
  const samples = useMemo(() => {
    const out: { x: number; real: number; stored: number }[] = [];
    for (let i = 0; i <= rate; i++) {
      const x = (i / rate) * 320;
      const real = 80 - 46 * Math.sin((x / 320) * Math.PI * 2.4);
      const norm = (80 - real + 46) / 92;
      const quantised = Math.round(norm * (levels - 1)) / (levels - 1);
      const stored = 80 + 46 - quantised * 92;
      out.push({ x: x + 20, real, stored });
    }
    return out;
  }, [rate, levels]);

  const realRate = rate * 100;
  const fileBits = realRate * depth * seconds;

  return (
    <div>
      <div className="stage">
        <svg viewBox="0 0 360 170">
          <line x1="20" y1="80" x2="340" y2="80" stroke="#e4e0ee" strokeWidth="1.5" />
          {Array.from({ length: levels > 16 ? 0 : levels }).map((_, i) => (
            <line
              key={i}
              x1="20"
              y1={34 + (i * 92) / (levels - 1 || 1)}
              x2="340"
              y2={34 + (i * 92) / (levels - 1 || 1)}
              stroke="#ede2f4"
              strokeWidth="1"
            />
          ))}
          <polyline points={wave} fill="none" stroke="#ccabd8" strokeWidth="2.5" />
          <polyline
            points={samples.map((s) => `${s.x},${s.stored}`).join(' ')}
            fill="none"
            stroke="#08979d"
            strokeWidth="2"
            strokeDasharray="4 3"
          />
          {samples.map((s, i) => (
            <g key={i}>
              <line x1={s.x} y1="80" x2={s.x} y2={s.stored} stroke="#6ec6ca" strokeWidth="1.6" />
              <circle cx={s.x} cy={s.stored} r="3" fill="#055b5c" />
            </g>
          ))}
          <text x="180" y="160" fontSize="10.5" fill="#5f5279" textAnchor="middle">
            purple line is the real sound, teal dots are what the computer actually stores
          </text>
        </svg>
      </div>

      <div className="card flat">
        <label className="tiny muted">{`Sample rate: ${realRate} Hz (${rate} dots drawn above)`}</label>
        <input type="range" min={4} max={48} value={rate} onChange={(e) => setRate(Number(e.target.value))} />

        <label className="tiny muted">{`Bit depth: ${depth} bits per sample, giving ${levels} possible volume levels`}</label>
        <input type="range" min={1} max={8} value={depth} onChange={(e) => setDepth(Number(e.target.value))} />

        <label className="tiny muted">{`Length of recording: ${seconds} seconds`}</label>
        <input type="range" min={1} max={180} value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />

        <div className="kv" style={{ marginTop: 10 }}>
          <span>File size formula</span>
          <b className="tiny">sample rate x bit depth x seconds</b>
        </div>
        <div className="kv">
          <span>Working</span>
          <b className="tiny">{`${realRate} x ${depth} x ${seconds}`}</b>
        </div>
        <div className="kv">
          <span>File size</span>
          <b>{`${fileBits.toLocaleString()} bits = ${formatSize(fileBits)}`}</b>
        </div>
      </div>

      <div className="step-note">
        <b>What to notice</b>
        <ul className="bullets" style={{ marginTop: 6, marginBottom: 0 }}>
          <li>Drag the sample rate down low. The teal line stops looking like the purple wave, so the sound becomes muffled and wrong.</li>
          <li>Drag the bit depth down to 1 or 2. Now each dot has to jump to one of very few heights, so the sound becomes rough and grainy.</li>
          <li>Every time you improve quality, the file size goes up. That trade off is the whole exam question.</li>
          <li>A music CD uses 44100 Hz and 16 bits. A phone call uses about 8000 Hz because speech does not need the high notes.</li>
        </ul>
      </div>
    </div>
  );
}
