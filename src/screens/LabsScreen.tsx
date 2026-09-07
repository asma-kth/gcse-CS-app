import { useState } from 'react';
import { DEMOS } from '../presentations';
import ByteSays from '../components/ByteSays';
import Icon from '../components/Icon';

export default function LabsScreen({ onFact }: { onFact: (i: number) => void }) {
  const [open, setOpen] = useState<string | null>(null);
  const meta = DEMOS.find((d) => d.id === open);

  if (meta) {
    const Cmp = meta.component;
    return (
      <div className="fadein">
        <button className="btn ghost small" style={{ marginBottom: 12 }} onClick={() => setOpen(null)}>
          <Icon name="arrow-left" size={15} />
          Back to the labs
        </button>
        <div className="card flat">
          <h1 style={{ fontSize: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <Icon name={meta.icon} size={24} color="#08979d" />
            {meta.name}
          </h1>
          <div className="tiny muted">{meta.blurb}</div>
        </div>
        <Cmp />
      </div>
    );
  }

  return (
    <div className="view-enter">
      <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #dff2f3)' }}>
        <h1 style={{ fontSize: 21 }}>Interactive labs</h1>
        <p className="tiny muted" style={{ marginBottom: 0 }}>
          {`${DEMOS.length} hands on presentations. Change the settings, step through the animations and watch the theory become something you can actually see.`}
        </p>
      </div>

      <ByteSays fact onFactShown={onFact} />

      <div className="stagger">
      {DEMOS.map((d) => (
        <button key={d.id} className="room" onClick={() => setOpen(d.id)}>
          <span className="ic">
            <Icon name={d.icon} size={20} />
          </span>
          <span style={{ flex: 1, minWidth: 0 }}>
            <span className="nm">{d.name}</span>
            <div className="sb">{d.blurb}</div>
          </span>
          <Icon name="chevron-right" size={18} color="#7d919b" />
        </button>
      ))}
      </div>
    </div>
  );
}
