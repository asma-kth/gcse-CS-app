import { useState } from 'react';
import { FACTS } from '../content/facts';
import Mascot from '../components/Mascot';
import type { Progress } from '../types';

interface Props {
  progress: Progress;
  onFact: (i: number) => void;
}

export default function FactsScreen({ progress, onFact }: Props) {
  const [i, setI] = useState(() => Math.floor(Math.random() * FACTS.length));
  const [flip, setFlip] = useState(0);

  const draw = () => {
    let next = Math.floor(Math.random() * FACTS.length);
    if (next === i) next = (next + 1) % FACTS.length;
    setI(next);
    setFlip((f) => f + 1);
    onFact(next);
  };

  const seen = progress.factsSeen.length;

  return (
    <div>
      <div className="card center" style={{ background: 'linear-gradient(140deg, #ffffff, #ede2f4)' }}>
        <Mascot size={110} mood="wink" className="bob" />
        <h1 style={{ fontSize: 21, marginTop: 8 }}>Byte throws a fact</h1>
        <p className="tiny muted">
          {`Byte has collected ${FACTS.length} facts from every corner of the dungeon. You have seen ${seen} of them.`}
        </p>
        <div className="bar" style={{ margin: '4px 0 12px' }}>
          <i style={{ width: `${(seen / FACTS.length) * 100}%` }} />
        </div>
      </div>

      <div className="card pop" key={flip} style={{ minHeight: 130, display: 'grid', placeItems: 'center' }}>
        <p style={{ fontSize: 16, textAlign: 'center', marginBottom: 0 }}>{FACTS[i]}</p>
      </div>

      <button className="btn wide" onClick={draw}>
        Throw another fact
      </button>

      <div className="card flat" style={{ marginTop: 16, background: '#fdf3dd' }}>
        <div className="card-title">Why bother with fun facts</div>
        <p className="tiny" style={{ marginBottom: 0 }}>
          Facts stick when they come with a story. If you can remember that a real moth caused the first computer bug,
          you will remember what a bug is. Examiners do not award marks for the story, but the story is what drags the
          definition out of your memory when you need it.
        </p>
      </div>
    </div>
  );
}
