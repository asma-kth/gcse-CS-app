import { useEffect, useState } from 'react';
import Mascot, { type Mood } from './Mascot';
import { FACTS } from '../content/facts';

interface Props {
  message?: string;
  mood?: Mood;
  /** When true, Byte throws a random fun fact instead of a fixed message. */
  fact?: boolean;
  onFactShown?: (index: number) => void;
  compact?: boolean;
}

export default function ByteSays({ message, mood = 'happy', fact, onFactShown, compact }: Props) {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * FACTS.length));

  useEffect(() => {
    if (fact) onFactShown?.(index);
  }, [fact, index, onFactShown]);

  const text = fact ? FACTS[index] : message;

  return (
    <div className="mascot-bubble">
      <Mascot size={compact ? 44 : 58} mood={mood} className="bob" />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="who">{fact ? 'Byte throws a fun fact' : 'Byte says'}</div>
        <div className="txt">{text}</div>
        {fact && (
          <button
            className="btn ghost small"
            style={{ marginTop: 8 }}
            onClick={() => setIndex(Math.floor(Math.random() * FACTS.length))}
          >
            Another fact
          </button>
        )}
      </div>
    </div>
  );
}
