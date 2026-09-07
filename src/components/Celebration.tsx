import { useEffect, useState } from 'react';
import Icon from './Icon';

const COLOURS = ['#ccabd8', '#8474a1', '#6ec6ca', '#08979d', '#e0a02a'];

/** A short burst of confetti. Nothing is rendered once the burst is finished. */
export function Confetti({ fire }: { fire: number }) {
  const [pieces, setPieces] = useState<{ id: number; left: number; delay: number; colour: string }[]>([]);

  useEffect(() => {
    if (!fire) return;
    const batch = Array.from({ length: 26 }, (_, i) => ({
      id: fire * 100 + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.5,
      colour: COLOURS[i % COLOURS.length],
    }));
    setPieces(batch);
    const t = window.setTimeout(() => setPieces([]), 2600);
    return () => window.clearTimeout(t);
  }, [fire]);

  if (!pieces.length) return null;

  return (
    <div className="confetti-layer" aria-hidden="true">
      {pieces.map((p) => (
        <i
          key={p.id}
          style={{ left: `${p.left}%`, background: p.colour, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  );
}

/** The banner shown the moment the player gains a level. */
export function LevelUp({ level, rank, onClose }: { level: number; rank: string; onClose: () => void }) {
  useEffect(() => {
    const t = window.setTimeout(onClose, 3200);
    return () => window.clearTimeout(t);
  }, [onClose]);

  return (
    <div className="levelup" role="alert">
      <Icon name="crown" size={38} color="#e0a02a" />
      <h2 style={{ marginTop: 6 }}>{`Level ${level}`}</h2>
      <div className="chip gold" style={{ display: 'inline-block' }}>
        {rank}
      </div>
      <p className="tiny muted" style={{ marginTop: 10, marginBottom: 0 }}>
        A new rank. Byte flicks a tail in approval.
      </p>
    </div>
  );
}
