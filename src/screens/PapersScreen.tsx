import type { Progress } from '../types';
import { PAPERS } from '../content/papers';
import Icon from '../components/Icon';
import ByteSays from '../components/ByteSays';

interface Props {
  progress: Progress;
  onOpen: (paperId: string) => void;
  onFact: (i: number) => void;
}

export default function PapersScreen({ progress, onOpen, onFact }: Props) {
  const group = (component: 'Paper 1' | 'Paper 2') => PAPERS.filter((p) => p.component === component);

  const bestFor = (id: string) => progress.examBest[`paper:${id}`];

  const section = (component: 'Paper 1' | 'Paper 2', subtitle: string) => (
    <div>
      <div style={{ margin: '18px 2px 8px' }}>
        <h2 style={{ marginBottom: 2 }}>{component}</h2>
        <div className="tiny muted">{subtitle}</div>
      </div>
      <div className="stagger">
        {group(component).map((p) => {
          const best = bestFor(p.id);
          const pct = best === undefined ? 0 : Math.round((best / p.totalMarks) * 100);
          return (
            <button key={p.id} className="floor press" onClick={() => onOpen(p.id)}>
              <span className="badge">
                <Icon name="paper" size={24} color="#fff" />
              </span>
              <span className="meta">
                <span className="n">{`Mock ${['A', 'B', 'C'][p.number - 1]}`}</span>
                <div className="t">{p.title}</div>
                <div className="d">{p.blurb}</div>
                <div className="chip-row" style={{ marginTop: 8 }}>
                  <span className="chip teal">{`${p.totalMarks} marks`}</span>
                  <span className="chip">{`${p.minutes} min`}</span>
                  {best !== undefined && <span className="chip gold">{`Best ${best} (${pct}%)`}</span>}
                </div>
                {best !== undefined && (
                  <div className="bar" style={{ marginTop: 8 }}>
                    <i style={{ width: `${pct}%` }} />
                  </div>
                )}
              </span>
              <Icon name="chevron-right" size={18} color="#7d919b" />
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="view-enter">
      <div className="card" style={{ background: 'linear-gradient(140deg, #ffffff, #dff2f3)' }}>
        <h1 style={{ fontSize: 21 }}>Mock exam papers</h1>
        <p className="tiny muted" style={{ marginBottom: 0 }}>
          Six full papers, three for each component, each timed and marked automatically. Sit them under real
          conditions: no notes, no pausing, and write your answers as if an examiner will read them.
        </p>
      </div>

      <ByteSays fact onFactShown={onFact} />

      {section('Paper 1', 'Computer systems. Architecture, memory, networks, security, software and impacts.')}
      {section('Paper 2', 'Computational thinking, algorithms, programming, logic and languages.')}

      <div className="card flat" style={{ marginTop: 16, background: '#fdf3dd' }}>
        <div className="card-title">
          <Icon name="clock" size={18} color="#8a6110" />
          How to use these properly
        </div>
        <ul className="bullets" style={{ marginBottom: 0 }}>
          <li>Sit the paper in one go, with the timer running and your notes closed.</li>
          <li>When the timer ends the paper hands itself in, exactly like the real thing.</li>
          <li>Read every mark scheme afterwards and underline the technical words you missed.</li>
          <li>Sit the same paper again a fortnight later. The gap is what moves knowledge into long term memory.</li>
        </ul>
      </div>
    </div>
  );
}
