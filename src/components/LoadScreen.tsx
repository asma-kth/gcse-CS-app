import { useEffect, useRef, useState } from 'react';
import Mascot from './Mascot';

interface Props {
  onDone: () => void;
}

const STEPS = [
  'Powering up the processor',
  'Loading the fetch decode execute cycle',
  'Mapping thirteen dungeon floors',
  'Sharpening sixty five exam questions',
  'Waking Byte the robot cat',
];

/**
 * The custom load screen. It doubles as a tiny lesson: the boot messages
 * name real stages of a computer starting up, and the progress bar fills as
 * each one completes.
 */
export default function LoadScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);
  const [ready, setReady] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const tick = window.setInterval(() => {
      setProgress((p) => {
        const next = p + 2 + Math.random() * 4;
        if (next >= 100) {
          window.clearInterval(tick);
          return 100;
        }
        return next;
      });
    }, 45);
    timers.current.push(tick);

    STEPS.forEach((_, i) => {
      const t = window.setTimeout(() => setStep(i), i * 380);
      timers.current.push(t);
    });

    const done = window.setTimeout(() => setReady(true), STEPS.length * 380 + 250);
    timers.current.push(done);

    return () => timers.current.forEach((t) => window.clearTimeout(t));
  }, []);

  const enter = () => {
    setLeaving(true);
    window.setTimeout(onDone, 520);
  };

  useEffect(() => {
    if (!ready) return;
    // Give the player a beat to see the finished bar, then go in automatically.
    const t = window.setTimeout(enter, 1400);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready]);

  return (
    <div className={`loadscreen ${leaving ? 'gone' : ''}`} role="status" aria-live="polite">
      <span className="torch l" />
      <span className="torch r" />

      <svg viewBox="0 0 220 90" width="220" height="90" aria-hidden="true" style={{ opacity: 0.5 }}>
        <path
          d="M10 80 L10 34 L28 22 L46 34 L46 80 M60 80 L60 26 L82 10 L104 26 L104 80 M118 80 L118 34 L136 22 L154 34 L154 80 M168 80 L168 40 L186 28 L204 40 L204 80"
          fill="none"
          stroke="#9fdfe2"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="600"
          strokeDashoffset="600"
          style={{ animation: 'dash 1.6s ease-out forwards' }}
        />
      </svg>

      <Mascot size={116} mood={ready ? 'cheer' : 'think'} className="floaty" style={{ marginTop: -30 }} />

      <div className="brand">Byte Quest</div>
      <div className="tag">GCSE Computer Science for the OCR J277 specification</div>

      <div className="loadbar">
        <i style={{ width: `${Math.min(100, progress)}%` }} />
      </div>
      <div className="status">{ready ? 'Dungeon ready' : `${STEPS[step]} ...`}</div>

      {ready && (
        <button className="btn enter-btn" onClick={enter}>
          Enter the dungeon
        </button>
      )}
    </div>
  );
}
