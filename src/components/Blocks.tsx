import type { Block } from '../types';
import { DIAGRAMS } from '../diagrams';
import { DEMO_MAP } from '../presentations';

function Diagram({ id, caption }: { id: string; caption?: string }) {
  const Cmp = DIAGRAMS[id];
  if (!Cmp) return null;
  return (
    <div className="blk">
      <div className="stage">
        <Cmp />
      </div>
      {caption && <div className="tiny muted center">{caption}</div>}
    </div>
  );
}

function Demo({ id, caption }: { id: string; caption?: string }) {
  const meta = DEMO_MAP[id];
  if (!meta) return null;
  const Cmp = meta.component;
  return (
    <div className="blk card" style={{ background: '#fbfaff' }}>
      <div className="card-title">
        <span>{meta.icon}</span>
        <span>{`Interactive: ${meta.name}`}</span>
      </div>
      {caption && (
        <div className="tiny muted" style={{ marginBottom: 10 }}>
          {caption}
        </div>
      )}
      <Cmp />
    </div>
  );
}

export default function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h':
            return (
              <h3 key={i} className="blk" style={{ marginTop: 20 }}>
                {b.text}
              </h3>
            );
          case 'p':
            return (
              <p key={i} className="blk">
                {b.text}
              </p>
            );
          case 'ul':
            return (
              <ul key={i} className="bullets blk">
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            );
          case 'ol':
            return (
              <ol key={i} className="bullets blk">
                {b.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ol>
            );
          case 'example':
            return (
              <div key={i} className="blk blk-example">
                <span className="blk-label">{b.title ?? 'Worked example'}</span>
                {b.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            );
          case 'real':
            return (
              <div key={i} className="blk blk-real">
                <span className="blk-label">{b.title ?? 'Real life scenario'}</span>
                {b.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            );
          case 'tip':
            return (
              <div key={i} className="blk blk-tip">
                <span className="blk-label">Exam tip</span>
                {b.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            );
          case 'warn':
            return (
              <div key={i} className="blk blk-warn">
                <span className="blk-label">Watch out</span>
                {b.body.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            );
          case 'key':
            return (
              <div key={i} className="blk blk-key">
                <span className="blk-label" style={{ color: '#5f5279' }}>
                  Key terms
                </span>
                {b.terms.map((t, j) => (
                  <div key={j} className="term-row">
                    <b>{t.term}</b>
                    <div className="tiny">{t.def}</div>
                  </div>
                ))}
              </div>
            );
          case 'table':
            return (
              <div key={i} className="blk tbl-wrap">
                <table className="tbl">
                  <thead>
                    <tr>
                      {b.head.map((h, j) => (
                        <th key={j}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((row, r) => (
                      <tr key={r}>
                        {row.map((cell, c) => (
                          <td key={c}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          case 'code':
            return (
              <div key={i} className="blk">
                <div className="code-label">
                  {b.caption ??
                    (b.lang === 'python'
                      ? 'Python'
                      : b.lang === 'erl'
                        ? 'OCR Exam Reference Language'
                        : b.lang === 'sql'
                          ? 'SQL'
                          : 'Example')}
                </div>
                <pre className="code">{b.code}</pre>
              </div>
            );
          case 'diagram':
            return <Diagram key={i} id={b.id} caption={b.caption} />;
          case 'demo':
            return <Demo key={i} id={b.id} caption={b.caption} />;
          default:
            return null;
        }
      })}
    </>
  );
}
