import { useState } from 'react';

interface LayerInfo {
  name: string;
  number: number;
  colour: string;
  border: string;
  job: string;
  protocols: string[];
  sending: string;
  receiving: string;
  reallife: string;
}

const LAYERS: LayerInfo[] = [
  {
    name: 'Application',
    number: 4,
    colour: '#ede2f4',
    border: '#8474a1',
    job: 'The layer the user and the software actually talk to. It decides the rules for the type of job being done.',
    protocols: ['HTTP', 'HTTPS', 'FTP', 'SMTP', 'IMAP', 'POP'],
    sending: 'Your browser writes a request such as GET /news using the HTTP rules.',
    receiving: 'The browser reads the HTML that came back and draws the page on screen.',
    reallife: 'Think of writing a letter. You choose the language and the wording so the reader understands you.',
  },
  {
    name: 'Transport',
    number: 3,
    colour: '#dff2f3',
    border: '#08979d',
    job: 'Splits the data into packets, numbers them, and makes sure they all arrive and go back together in the right order.',
    protocols: ['TCP', 'UDP'],
    sending: 'The message is cut into numbered packets. TCP records which packet is which.',
    receiving: 'Packets are put back in order. Anything missing is requested again.',
    reallife: 'Think of posting a long story in several envelopes and numbering them 1 of 5, 2 of 5 and so on.',
  },
  {
    name: 'Internet',
    number: 2,
    colour: '#fdf3dd',
    border: '#e0a02a',
    job: 'Adds the sender and receiver IP addresses and chooses a route across the network.',
    protocols: ['IP'],
    sending: 'Each packet gets a source IP and a destination IP written on the front.',
    receiving: 'The device checks the destination IP is really its own, then strips that information off.',
    reallife: 'Think of writing the postal address on each envelope so the sorting office knows where to send it.',
  },
  {
    name: 'Link',
    number: 1,
    colour: '#ffffff',
    border: '#8474a1',
    job: 'The actual hardware. Cables, Wi Fi, network cards and MAC addresses that move bits between two devices.',
    protocols: ['Ethernet', 'Wi Fi', 'MAC addressing'],
    sending: 'The packet is turned into electrical signals, light pulses or radio waves.',
    receiving: 'The network card turns the signal back into bits and passes them upwards.',
    reallife: 'Think of the van that physically drives the envelopes down the road.',
  },
];

export default function NetworkLayers() {
  const [open, setOpen] = useState(0);
  const [dir, setDir] = useState<'sending' | 'receiving'>('sending');
  const order = dir === 'sending' ? LAYERS : [...LAYERS].reverse();

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        <button className={`chip ${dir === 'sending' ? 'teal' : ''}`} onClick={() => setDir('sending')}>
          Sending a message
        </button>
        <button className={`chip ${dir === 'receiving' ? 'teal' : ''}`} onClick={() => setDir('receiving')}>
          Receiving a message
        </button>
      </div>

      <div className="tiny muted" style={{ marginBottom: 8 }}>
        {dir === 'sending'
          ? 'Data starts at the top and travels down. Each layer wraps extra information around it, which is called encapsulation.'
          : 'Data arrives at the bottom and travels up. Each layer unwraps the information that its partner layer added.'}
      </div>

      {order.map((l) => {
        const idx = LAYERS.indexOf(l);
        const isOpen = open === idx;
        return (
          <div key={l.name} style={{ marginBottom: 8 }}>
            <button
              onClick={() => setOpen(isOpen ? -1 : idx)}
              style={{
                width: '100%',
                textAlign: 'left',
                background: l.colour,
                border: `2px solid ${l.border}`,
                borderRadius: 14,
                padding: '12px 14px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 9,
                    background: l.border,
                    color: '#fff',
                    display: 'grid',
                    placeItems: 'center',
                    fontWeight: 800,
                    fontSize: 14,
                    flex: 'none',
                  }}
                >
                  {l.number}
                </span>
                <span style={{ fontWeight: 800, color: '#055b5c' }}>{`${l.name} layer`}</span>
                <span style={{ marginLeft: 'auto', color: '#7d919b' }}>{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <div className="fadein" style={{ marginTop: 10, fontSize: 14 }}>
                  <p style={{ marginBottom: 8 }}>{l.job}</p>
                  <div className="chip-row" style={{ marginBottom: 8 }}>
                    {l.protocols.map((p) => (
                      <span key={p} className="chip">
                        {p}
                      </span>
                    ))}
                  </div>
                  <p style={{ marginBottom: 8 }}>
                    <b>{dir === 'sending' ? 'On the way out: ' : 'On the way in: '}</b>
                    {dir === 'sending' ? l.sending : l.receiving}
                  </p>
                  <p style={{ marginBottom: 0, color: '#5f5279' }}>
                    <b>Real life picture: </b>
                    {l.reallife}
                  </p>
                </div>
              )}
            </button>
          </div>
        );
      })}

      <div className="step-note">
        <b>Why layers at all</b>
        <ul className="bullets" style={{ marginTop: 6, marginBottom: 0 }}>
          <li>Each layer only has to do one job, so the whole system is easier to design and to fix.</li>
          <li>One layer can be changed without breaking the others. Swapping Wi Fi for a cable does not change HTTP at all.</li>
          <li>Different manufacturers can build different layers and the parts still work together.</li>
          <li>It makes faults easier to find, because you can test one layer at a time.</li>
        </ul>
      </div>
    </div>
  );
}
