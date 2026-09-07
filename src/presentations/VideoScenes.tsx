import { useEffect, useRef, useState, type ReactNode } from 'react';
import Icon from '../components/Icon';

/**
 * Animated explainer scenes. These behave like short videos, with a play bar,
 * a scrubber, chapters and narration captions, but they are drawn live as SVG
 * rather than played from a video file. That keeps the app small, keeps it
 * working with no connection, and means the diagrams stay sharp on any screen.
 */

interface Chapter {
  at: number;
  title: string;
  caption: string;
}

interface Scene {
  id: string;
  name: string;
  blurb: string;
  duration: number;
  chapters: Chapter[];
  draw: (t: number) => ReactNode;
}

const ease = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x * x * (3 - 2 * x));
/** Progress of a segment that runs from `a` to `b` seconds. */
const seg = (t: number, a: number, b: number) => ease((t - a) / (b - a));

const INK = '#eafafa';
const AQUA = '#6ec6ca';
const LILAC = '#ccabd8';
const GOLD = '#e0a02a';
const WHITE = '#ffffff';

interface LabelProps {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  fill?: string;
  anchor?: 'start' | 'middle' | 'end';
  bold?: boolean;
}

function Label({ x, y, children, size = 11, fill = INK, anchor = 'middle', bold = true }: LabelProps) {
  return (
    <text x={x} y={y} fontSize={size} fill={fill} textAnchor={anchor} fontWeight={bold ? 700 : 500} fontFamily="Segoe UI, Roboto, sans-serif">
      {children}
    </text>
  );
}

/* ---------------------------------------------------------------- scene 1 */

const packetScene: Scene = {
  id: 'packet',
  name: 'How a web page reaches your phone',
  blurb: 'Follow one request from a tap on the screen to the page appearing.',
  duration: 16,
  chapters: [
    { at: 0, title: 'The request', caption: 'You tap a link. Your phone needs the address of the web server before it can ask for anything.' },
    { at: 3.2, title: 'DNS lookup', caption: 'The phone asks a DNS server to turn bbc.co.uk into an IP address. DNS is the phone book of the internet.' },
    { at: 6.4, title: 'Split into packets', caption: 'The reply is far too big to send in one go, so TCP cuts it into numbered packets.' },
    { at: 9.6, title: 'Different routes', caption: 'Routers forward each packet using its IP address. Packets can take different paths and arrive out of order.' },
    { at: 12.8, title: 'Reassembly', caption: 'TCP puts the packets back into order, asks again for anything missing, and the browser draws the page.' },
  ],
  draw: (t) => {
    const ask = seg(t, 3.4, 4.6);
    const reply = seg(t, 4.8, 6.1);
    const split = seg(t, 6.6, 8.4);
    const travel = seg(t, 9.8, 12.4);
    const rebuild = seg(t, 13, 15.4);
    const packets = [0, 1, 2, 3];

    return (
      <>
        <rect x="14" y="60" width="52" height="86" rx="10" fill="#0a3f41" stroke={AQUA} strokeWidth="2" />
        <rect x="20" y="68" width="40" height="62" rx="5" fill={rebuild > 0.5 ? '#0f7d83' : '#062e30'} />
        {rebuild > 0.4 && (
          <g opacity={seg(t, 14.2, 15.6)}>
            <rect x="24" y="74" width="32" height="6" rx="3" fill={AQUA} />
            <rect x="24" y="84" width="26" height="4" rx="2" fill="#8fd3d6" />
            <rect x="24" y="92" width="30" height="4" rx="2" fill="#8fd3d6" />
            <rect x="24" y="100" width="22" height="4" rx="2" fill="#8fd3d6" />
          </g>
        )}
        <Label x={40} y={158}>Your phone</Label>

        <rect x="118" y="18" width="74" height="40" rx="9" fill="#0a3f41" stroke={LILAC} strokeWidth="2" opacity={t > 2.8 ? 1 : 0.25} />
        <Label x={155} y={36} size={10.5} fill={LILAC}>DNS server</Label>
        <Label x={155} y={49} size={9.5} fill="#cfeeef" bold={false}>name to IP</Label>

        {ask > 0 && (
          <g>
            <circle cx={40 + (115 - 40) * ask} cy={68 - 28 * ask} r="5" fill={LILAC} />
            <Label x={78} y={44} size={9} fill={LILAC}>bbc.co.uk</Label>
          </g>
        )}
        {reply > 0 && (
          <g>
            <circle cx={155 - (155 - 44) * reply} cy={58 + 22 * reply} r="5" fill={GOLD} />
            <Label x={104} y={74} size={9} fill={GOLD}>212.58.244.22</Label>
          </g>
        )}

        <rect x="264" y="60" width="52" height="86" rx="10" fill="#0a3f41" stroke={AQUA} strokeWidth="2" />
        <path d="M274 74h32M274 84h32M274 94h32M274 104h32" stroke={AQUA} strokeWidth="2" strokeLinecap="round" />
        <Label x={290} y={158}>Web server</Label>

        {[0, 1].map((i) => (
          <g key={i} opacity={t > 9 ? 1 : 0.3}>
            <circle cx={155} cy={92 + i * 44} r="14" fill="#062e30" stroke={AQUA} strokeWidth="2" />
            <Label x={155} y={96 + i * 44} size={8.5} fill={AQUA}>router</Label>
          </g>
        ))}

        {split > 0 &&
          packets.map((p) => {
            const own = Math.min(1, Math.max(0, travel * 1.35 - p * 0.12));
            const lane = p % 2;
            const startX = 262;
            const endX = 70;
            const x = startX - (startX - endX) * own;
            const midY = lane === 0 ? 92 : 136;
            const y = 103 - Math.sin(own * Math.PI) * (103 - midY);
            const arrived = own >= 1;
            return (
              <g key={p} opacity={split}>
                <rect
                  x={arrived ? 22 + p * 10 : x - 11}
                  y={arrived ? 128 : y - 8}
                  width={arrived ? 8 : 22}
                  height={16}
                  rx="3"
                  fill={arrived ? AQUA : GOLD}
                />
                {!arrived && (
                  <text x={x} y={y + 4} fontSize="9" textAnchor="middle" fill="#3a2c00" fontWeight="700">
                    {p + 1}
                  </text>
                )}
              </g>
            );
          })}

        {t > 12.6 && (
          <Label x={170} y={172} size={10.5} fill={GOLD}>
            {'TCP reorders 3, 1, 4, 2 back into 1, 2, 3, 4'}
          </Label>
        )}
      </>
    );
  },
};

/* ---------------------------------------------------------------- scene 2 */

const cpuScene: Scene = {
  id: 'cpu',
  name: 'Inside the processor',
  blurb: 'One instruction travelling all the way round the fetch decode execute cycle.',
  duration: 15,
  chapters: [
    { at: 0, title: 'The program counter', caption: 'The program counter holds 100, the address of the next instruction. Nothing has moved yet.' },
    { at: 3, title: 'Fetch', caption: 'That address is copied to the MAR and sent down the address bus. Memory sends the instruction back into the MDR.' },
    { at: 6.5, title: 'Increment', caption: 'The program counter goes up to 101 during the fetch, so the CPU is already pointing at the next instruction.' },
    { at: 9, title: 'Decode', caption: 'The control unit splits LOAD 200 into an opcode, which says what to do, and an operand, which says what to do it to.' },
    { at: 12, title: 'Execute', caption: 'The value 7 is fetched from address 200 and placed in the accumulator. Then the whole cycle starts again.' },
  ],
  draw: (t) => {
    const toMar = seg(t, 3.2, 4.4);
    const back = seg(t, 4.8, 6.2);
    const inc = t > 7;
    const decode = seg(t, 9.2, 10.6);
    const exec = seg(t, 12.2, 13.8);

    const box = (x: number, y: number, w: number, h: number, label: string, value: string, hot: boolean) => (
      <g>
        <rect x={x} y={y} width={w} height={h} rx="8" fill={hot ? '#0f7d83' : '#062e30'} stroke={hot ? GOLD : AQUA} strokeWidth={hot ? 2.5 : 1.6} />
        <Label x={x + w / 2} y={y + 15} size={9.5} fill="#bfe9ea">{label}</Label>
        <text x={x + w / 2} y={y + h - 8} fontSize="13" textAnchor="middle" fill={WHITE} fontWeight="700" fontFamily="monospace">
          {value}
        </text>
      </g>
    );

    return (
      <>
        <rect x="10" y="14" width="196" height="152" rx="14" fill="rgba(255,255,255,0.05)" stroke={AQUA} strokeWidth="1.6" />
        <Label x={108} y={30} size={11}>CPU</Label>

        {box(20, 38, 84, 40, 'Program counter', inc ? '101' : '100', inc && t < 9)}
        {box(112, 38, 84, 40, 'MAR', toMar > 0.5 ? '100' : '-', toMar > 0.5 && t < 6.5)}
        {box(20, 86, 84, 40, 'MDR', back > 0.6 ? 'LOAD 200' : '-', back > 0.6 && t < 9)}
        {box(112, 86, 84, 40, 'CIR', decode > 0.6 ? 'LOAD 200' : '-', decode > 0.6 && t < 12)}
        {box(20, 128, 176, 32, 'Accumulator', exec > 0.6 ? '7' : '-', exec > 0.6)}

        <rect x="238" y="24" width="86" height="132" rx="12" fill="rgba(204,171,216,0.14)" stroke={LILAC} strokeWidth="1.6" />
        <Label x={281} y={40} size={11} fill={LILAC}>RAM</Label>
        {[
          ['100', 'LOAD 200'],
          ['101', 'ADD 201'],
          ['200', '7'],
        ].map(([addr, val], i) => {
          const active = (toMar > 0.7 && t < 7 && addr === '100') || (exec > 0.3 && addr === '200');
          return (
            <g key={addr}>
              <rect x={244} y={50 + i * 32} width={76} height={24} rx="5" fill={active ? '#0f7d83' : 'rgba(255,255,255,0.08)'} stroke={active ? GOLD : 'rgba(255,255,255,0.25)'} />
              <text x={250} y={66 + i * 32} fontSize="8.5" fill="#cfeeef" fontFamily="monospace">{addr}</text>
              <text x={316} y={66 + i * 32} fontSize="8.5" fill={WHITE} textAnchor="end" fontFamily="monospace">{val}</text>
            </g>
          );
        })}

        {toMar > 0 && toMar < 1 && <circle cx={62 + (238 - 62) * toMar} cy={58} r="5" fill={GOLD} />}
        {back > 0 && back < 1 && <circle cx={238 - (238 - 62) * back} cy={106} r="5" fill={AQUA} />}
        {exec > 0 && exec < 1 && <circle cx={281 - (281 - 108) * exec} cy={140} r="5" fill={GOLD} />}

        {decode > 0.5 && (
          <g opacity={decode}>
            <Label x={154} y={182} size={10} fill={GOLD}>opcode LOAD  |  operand 200</Label>
          </g>
        )}
      </>
    );
  },
};

/* ---------------------------------------------------------------- scene 3 */

const soundScene: Scene = {
  id: 'sound',
  name: 'Sound becomes numbers',
  blurb: 'Watch a smooth wave get chopped into samples and stored as binary.',
  duration: 14,
  chapters: [
    { at: 0, title: 'A real sound', caption: 'Sound in the real world is a smooth, continuous wave. A computer cannot store smooth.' },
    { at: 3, title: 'Sampling', caption: 'The height of the wave is measured many times a second. Each measurement is called a sample.' },
    { at: 6.5, title: 'Sample rate', caption: 'More samples per second means the stored shape follows the real wave more closely. A CD uses 44100 per second.' },
    { at: 9.5, title: 'Bit depth', caption: 'Each height is rounded to the nearest level the bit depth allows, then stored as a binary number.' },
    { at: 12, title: 'The trade off', caption: 'Better quality always means a bigger file. That trade off is what exam questions are really asking about.' },
  ],
  draw: (t) => {
    const points: string[] = [];
    for (let x = 0; x <= 300; x += 3) {
      const y = 92 - 44 * Math.sin((x / 300) * Math.PI * 2.2);
      points.push(`${x + 22},${y}`);
    }
    const density = t < 6.5 ? 8 : t < 9.5 ? 16 : 26;
    const shown = Math.floor(seg(t, 3.2, 6) * density) || (t > 6 ? density : 0);
    const quantise = t > 9.5;
    const levels = 6;

    const samples = Array.from({ length: density + 1 }, (_, i) => {
      const x = (i / density) * 300;
      const raw = 92 - 44 * Math.sin((x / 300) * Math.PI * 2.2);
      const norm = (92 + 44 - raw) / 88;
      const q = Math.round(norm * (levels - 1)) / (levels - 1);
      return { x: x + 22, y: quantise ? 92 + 44 - q * 88 : raw, i };
    });

    return (
      <>
        <line x1="22" y1="92" x2="322" y2="92" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
        {quantise &&
          Array.from({ length: levels }).map((_, i) => (
            <line key={i} x1="22" y1={48 + (i * 88) / (levels - 1)} x2="322" y2={48 + (i * 88) / (levels - 1)} stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
          ))}
        <polyline points={points.join(' ')} fill="none" stroke={LILAC} strokeWidth="2.5" opacity={t > 9.5 ? 0.55 : 1} />

        {samples.slice(0, Math.max(shown, t > 6 ? density + 1 : 0)).map((s) => (
          <g key={s.i}>
            <line x1={s.x} y1="92" x2={s.x} y2={s.y} stroke={AQUA} strokeWidth="1.8" />
            <circle cx={s.x} cy={s.y} r="3.4" fill={GOLD} />
          </g>
        ))}

        <Label x={172} y={26} size={11}>
          {t < 3 ? 'the real sound wave' : t < 6.5 ? 'taking samples' : t < 9.5 ? 'a higher sample rate' : t < 12 ? 'rounding to the nearest level' : 'quality against file size'}
        </Label>

        {t > 9.8 && (
          <g opacity={seg(t, 9.8, 11)}>
            <rect x="22" y="150" width="300" height="30" rx="8" fill="rgba(255,255,255,0.09)" />
            <text x="172" y="170" fontSize="12" textAnchor="middle" fill={WHITE} fontFamily="monospace">
              {'0101  0110  0100  0011  0100  0110'}
            </text>
          </g>
        )}
        {t > 12 && (
          <Label x={172} y={196} size={10.5} fill={GOLD}>
            {'file size in bits = sample rate x bit depth x seconds'}
          </Label>
        )}
      </>
    );
  },
};

/* ---------------------------------------------------------------- scene 4 */

const imageScene: Scene = {
  id: 'image',
  name: 'A picture becomes bits',
  blurb: 'A scanner sweep turns a drawing into rows of binary, one pixel at a time.',
  duration: 13,
  chapters: [
    { at: 0, title: 'A grid of pixels', caption: 'Every bitmap image is a grid. The smallest square of colour is one pixel.' },
    { at: 3, title: 'Scanning', caption: 'The computer reads the grid row by row, storing a number for the colour of each pixel.' },
    { at: 6.5, title: 'Colour depth', caption: 'With one bit per pixel you get two colours. Eight bits per pixel gives 256.' },
    { at: 9.5, title: 'File size', caption: 'File size in bits is width times height times colour depth. Double both sides and the file becomes four times bigger.' },
  ],
  draw: (t) => {
    const grid = [
      '0011100',
      '0111110',
      '1110111',
      '1111111',
      '0111110',
      '0011100',
    ];
    const cell = 22;
    const totalCells = grid.length * grid[0].length;
    const scanned = Math.floor(seg(t, 3.1, 8.4) * totalCells);
    const deep = t > 6.5;

    return (
      <>
        {grid.map((row, r) =>
          row.split('').map((v, c) => {
            const index = r * row.length + c;
            const on = v === '1';
            const done = index < scanned;
            const fill = on ? (deep && done ? '#7fd6da' : AQUA) : done ? 'rgba(255,255,255,0.10)' : 'rgba(255,255,255,0.05)';
            return (
              <rect
                key={`${r}-${c}`}
                x={18 + c * cell}
                y={26 + r * cell}
                width={cell - 3}
                height={cell - 3}
                rx="3"
                fill={fill}
                stroke={index === scanned ? GOLD : 'rgba(255,255,255,0.2)'}
                strokeWidth={index === scanned ? 2.4 : 1}
              />
            );
          }),
        )}

        {grid.map((row, r) => (
          <text
            key={r}
            x={196}
            y={42 + r * cell}
            fontSize="12.5"
            fill={r * row.length < scanned ? WHITE : 'rgba(255,255,255,0.25)'}
            fontFamily="monospace"
          >
            {row}
          </text>
        ))}

        <Label x={110} y={18} size={10.5}>{`${grid[0].length} x ${grid.length} pixels`}</Label>
        <Label x={255} y={18} size={10.5} fill={GOLD}>stored binary</Label>

        {t > 9.5 && (
          <g opacity={seg(t, 9.5, 10.6)}>
            <rect x="18" y="168" width="300" height="30" rx="8" fill="rgba(224,160,42,0.18)" />
            <text x="168" y="188" fontSize="11.5" textAnchor="middle" fill={WHITE} fontWeight="700">
              {`${grid[0].length} x ${grid.length} x 1 bit = ${totalCells} bits`}
            </text>
          </g>
        )}
      </>
    );
  },
};

/* ---------------------------------------------------------------- scene 5 */

const sortScene: Scene = {
  id: 'sort',
  name: 'Bubble sort in motion',
  blurb: 'Watch neighbours compare and swap until the whole shelf is in order.',
  duration: 15,
  chapters: [
    { at: 0, title: 'The unsorted list', caption: 'Five numbers in the wrong order. Bubble sort only ever compares two neighbours at a time.' },
    { at: 2.5, title: 'Compare and swap', caption: 'If the left value is bigger than the right one, the two swap places.' },
    { at: 7, title: 'End of a pass', caption: 'After one full pass the largest value has bubbled all the way to the right and is locked in place.' },
    { at: 11, title: 'Sorted', caption: 'The algorithm stops when a whole pass makes no swaps at all, which proves everything is in order.' },
  ],
  draw: (t) => {
    const frames: number[][] = [
      [5, 3, 8, 1, 6],
      [3, 5, 8, 1, 6],
      [3, 5, 8, 1, 6],
      [3, 5, 1, 8, 6],
      [3, 5, 1, 6, 8],
      [3, 1, 5, 6, 8],
      [1, 3, 5, 6, 8],
    ];
    const compareIdx = [0, 1, 2, 2, 3, 1, -1];
    const step = Math.min(frames.length - 1, Math.floor(seg(t, 0.6, 13.5) * frames.length));
    const list = frames[step];
    const active = compareIdx[step];
    const locked = step >= 4 ? (step >= 6 ? 5 : step >= 5 ? 2 : 1) : 0;

    return (
      <>
        {list.map((n, i) => {
          const isActive = i === active || i === active + 1;
          const isLocked = i >= list.length - locked;
          const h = 24 + n * 12;
          return (
            <g key={i}>
              <rect
                x={30 + i * 58}
                y={150 - h}
                width={46}
                height={h}
                rx="8"
                fill={isLocked ? '#0f7d83' : isActive ? GOLD : 'rgba(255,255,255,0.16)'}
                stroke={isActive ? WHITE : 'rgba(255,255,255,0.3)'}
                strokeWidth="1.6"
              />
              <text x={53 + i * 58} y={168} fontSize="15" textAnchor="middle" fill={WHITE} fontWeight="700">
                {n}
              </text>
            </g>
          );
        })}
        {active >= 0 && (
          <g>
            <path
              d={`M${53 + active * 58} 26 q29 -14 58 0`}
              fill="none"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <Label x={82 + active * 58} y={18} size={10} fill={GOLD}>compare</Label>
          </g>
        )}
        <Label x={172} y={192} size={10.5}>
          {step >= 6 ? 'no swaps in the last pass, so the list is sorted' : `pass ${step < 5 ? 1 : 2}, comparing neighbours`}
        </Label>
      </>
    );
  },
};

/* ---------------------------------------------------------------- scene 6 */

const layerScene: Scene = {
  id: 'layers',
  name: 'Wrapping a message in layers',
  blurb: 'See encapsulation happen as data moves down the four TCP IP layers.',
  duration: 14,
  chapters: [
    { at: 0, title: 'Your message', caption: 'You send a message. At this point it is just the data, with nothing wrapped around it.' },
    { at: 3, title: 'Application layer', caption: 'The application layer chooses the rules for the job, such as HTTP for a web page or SMTP for email.' },
    { at: 6, title: 'Transport layer', caption: 'The transport layer cuts the data into packets and numbers each one so it can be rebuilt in order.' },
    { at: 9, title: 'Internet layer', caption: 'The internet layer adds the source and destination IP addresses so routers know where to send it.' },
    { at: 11.5, title: 'Link layer', caption: 'The link layer turns the packet into signals on a cable or radio waves. At the other end every wrapper comes off again.' },
  ],
  draw: (t) => {
    const layers = [
      { at: 3, name: 'HTTP header', colour: LILAC, dash: false },
      { at: 6, name: 'TCP header', colour: AQUA, dash: false },
      { at: 9, name: 'IP header', colour: GOLD, dash: false },
      { at: 11.5, name: 'link frame', colour: '#8fd3d6', dash: true },
    ];
    const cx = 234;
    const cy = 100;

    return (
      <>
        {['Application', 'Transport', 'Internet', 'Link'].map((n, i) => {
          const lit = t >= layers[i].at;
          return (
            <g key={n}>
              <rect
                x="12"
                y={26 + i * 38}
                width="96"
                height="28"
                rx="8"
                fill={lit ? 'rgba(255,255,255,0.18)' : 'rgba(255,255,255,0.06)'}
                stroke={lit ? layers[i].colour : 'transparent'}
                strokeWidth="1.6"
              />
              <text x="60" y={45 + i * 38} fontSize="10.5" textAnchor="middle" fill={WHITE} fontWeight="700" opacity={lit ? 1 : 0.45}>
                {n}
              </text>
            </g>
          );
        })}

        {layers.map((l, i) => {
          const p = seg(t, l.at, l.at + 1.3);
          if (p <= 0) return null;
          const pad = 13 * (i + 1);
          const w = (76 + pad * 2) * p;
          const h = (44 + pad * 1.15) * p;
          const x = cx - w / 2;
          const y = cy - h / 2;
          return (
            <g key={l.name} opacity={p}>
              <rect x={x} y={y} width={w} height={h} rx="10" fill="none" stroke={l.colour} strokeWidth="2.2" strokeDasharray={l.dash ? '6 4' : undefined} />
            </g>
          );
        })}

        {layers.map((l, i) => (
          <g key={`key-${l.name}`} opacity={t >= l.at ? 1 : 0.25}>
            <rect x={126 + i * 52} y={172} width={9} height={9} rx="2" fill={l.colour} />
            <text x={139 + i * 52} y={180} fontSize="9" fill={INK} fontWeight="700">
              {l.name.replace(' header', '').replace('link ', '')}
            </text>
          </g>
        ))}

        <rect x={cx - 32} y={cy - 15} width="64" height="30" rx="7" fill="rgba(255,255,255,0.92)" />
        <text x={cx} y={cy + 4} fontSize="11" textAnchor="middle" fill="#055b5c" fontWeight="800">
          data
        </text>

        <Label x={234} y={198} size={10} fill={GOLD}>each layer wraps the one inside it</Label>
      </>
    );
  },
};

export const SCENES: Scene[] = [packetScene, cpuScene, soundScene, imageScene, sortScene, layerScene];

/* ------------------------------------------------------------- the player */

function fmt(s: number) {
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, '0')}`;
}

function Player({ scene }: { scene: Scene }) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);
  const raf = useRef<number>(0);
  const last = useRef<number>(0);

  useEffect(() => {
    setTime(0);
    setPlaying(true);
  }, [scene.id]);

  useEffect(() => {
    if (!playing) return;
    last.current = performance.now();
    const loop = (now: number) => {
      const dt = (now - last.current) / 1000;
      last.current = now;
      setTime((v) => {
        const next = v + dt;
        if (next >= scene.duration) {
          setPlaying(false);
          return scene.duration;
        }
        return next;
      });
      raf.current = requestAnimationFrame(loop);
    };
    raf.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf.current);
  }, [playing, scene.duration]);

  const chapter = [...scene.chapters].reverse().find((c) => time >= c.at) ?? scene.chapters[0];
  const pct = (time / scene.duration) * 100;

  return (
    <div>
      <div className="scene-stage">
        <svg viewBox="0 0 344 206">{scene.draw(time)}</svg>

        <div className="scene-caption">
          <b>{chapter.title}. </b>
          {chapter.caption}
        </div>

        <div className="scene-bar">
          <button
            className="tbtn"
            onClick={() => {
              if (time >= scene.duration) setTime(0);
              setPlaying((p) => !p);
            }}
            aria-label={playing ? 'Pause' : 'Play'}
          >
            <Icon name={playing ? 'pause' : 'play'} size={16} color="#fff" />
          </button>
          <button className="tbtn" onClick={() => { setTime(0); setPlaying(true); }} aria-label="Restart">
            <Icon name="restart" size={16} color="#fff" />
          </button>
          <div
            className="track"
            role="slider"
            aria-label="Scrub the scene"
            aria-valuenow={Math.round(pct)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setTime(((e.clientX - r.left) / r.width) * scene.duration);
            }}
          >
            <i style={{ width: `${pct}%` }} />
          </div>
          <span className="time">{`${fmt(time)} / ${fmt(scene.duration)}`}</span>
        </div>
      </div>

      <div className="scene-chapters">
        {scene.chapters.map((c) => (
          <button
            key={c.at}
            className={chapter.at === c.at ? 'on' : ''}
            onClick={() => {
              setTime(c.at + 0.05);
              setPlaying(true);
            }}
          >
            {c.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function VideoScenes() {
  const [id, setId] = useState(SCENES[0].id);
  const scene = SCENES.find((s) => s.id === id)!;

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        {SCENES.map((s) => (
          <button key={s.id} className={`chip ${id === s.id ? 'teal' : ''}`} onClick={() => setId(s.id)}>
            {s.name}
          </button>
        ))}
      </div>
      <div className="tiny muted" style={{ marginBottom: 10 }}>
        {scene.blurb}
      </div>
      <Player scene={scene} />
      <div className="step-note">
        These scenes are drawn live rather than played from a video file, so they stay sharp on any screen, work with no
        internet connection, and add almost nothing to the size of the app. Drag the bar to scrub, or jump straight to a
        chapter.
      </div>
    </div>
  );
}
