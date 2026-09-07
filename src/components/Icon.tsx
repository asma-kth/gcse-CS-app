import type { CSSProperties } from 'react';

/**
 * Byte Quest icon set.
 *
 * Drawn by hand rather than pulled from a library so that every glyph shares
 * one construction: a 24 unit grid, a 1.7 unit stroke, rounded caps and joins,
 * and no fill. Icons inherit their colour from CSS through currentColor, so a
 * single glyph works on a white card, a teal header or a purple badge.
 *
 * Nothing here loads at runtime, which keeps the app fully offline.
 */

export type IconName =
  // navigation and controls
  | 'chevron-right'
  | 'chevron-left'
  | 'arrow-right'
  | 'arrow-left'
  | 'check'
  | 'close'
  | 'plus'
  | 'minus'
  | 'play'
  | 'pause'
  | 'restart'
  | 'question'
  | 'lock'
  | 'settings'
  // tabs
  | 'castle'
  | 'flask'
  | 'code'
  | 'cat'
  | 'chart'
  // topics
  | 'cpu'
  | 'storage'
  | 'network'
  | 'shield'
  | 'system'
  | 'scales'
  | 'brain'
  | 'keyboard'
  | 'testtube'
  | 'logic'
  | 'toolbox'
  | 'snake'
  | 'book'
  // rooms and rewards
  | 'book-open'
  | 'sword'
  | 'crown'
  | 'trophy'
  | 'target'
  | 'key'
  | 'star'
  | 'flame'
  | 'gem'
  | 'clock'
  | 'medal'
  // labs
  | 'binary'
  | 'waveform'
  | 'image'
  | 'layers'
  | 'sort'
  | 'type'
  | 'table'
  | 'terminal'
  | 'film'
  | 'paper'
  | 'sparkle';

interface Props {
  name: IconName;
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
  title?: string;
}

const P: Record<IconName, React.ReactNode> = {
  'chevron-right': <path d="M9 5l7 7-7 7" />,
  'chevron-left': <path d="M15 5l-7 7 7 7" />,
  'arrow-right': (
    <>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </>
  ),
  'arrow-left': (
    <>
      <path d="M20 12H5" />
      <path d="M11 6l-6 6 6 6" />
    </>
  ),
  check: <path d="M4 12.5l5.2 5.2L20 6.9" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  play: <path d="M7 4.6l12 7.4-12 7.4z" />,
  pause: <path d="M9 5v14M15 5v14" />,
  restart: (
    <>
      <path d="M20 12a8 8 0 1 1-2.6-5.9" />
      <path d="M20 3v5h-5" />
    </>
  ),
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.4 9.2a2.7 2.7 0 0 1 5.2.9c0 1.8-2.6 2.2-2.6 3.9" />
      <path d="M12 17.6h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="4.5" y="10.5" width="15" height="9.5" rx="2.5" />
      <path d="M8 10.5V7.8a4 4 0 0 1 8 0v2.7" />
      <path d="M12 14.4v2.2" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2.5v2.6M12 18.9v2.6M21.5 12h-2.6M5.1 12H2.5M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8M18.7 18.7l-1.8-1.8M7.1 7.1L5.3 5.3" />
    </>
  ),

  castle: (
    <>
      <path d="M3 20.5V9l2.5 1.6L8 9v11.5" />
      <path d="M21 20.5V9l-2.5 1.6L16 9v11.5" />
      <path d="M8 20.5V6.5l4-3 4 3v14" />
      <path d="M10.2 20.5v-4a1.8 1.8 0 0 1 3.6 0v4" />
      <path d="M2 20.5h20" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3v6.2L4.9 17a2.6 2.6 0 0 0 2.2 4h9.8a2.6 2.6 0 0 0 2.2-4l-4.6-7.8V3" />
      <path d="M8 3h8" />
      <path d="M6.9 14.5h10.2" />
    </>
  ),
  code: (
    <>
      <path d="M8.5 7.5L3.5 12l5 4.5" />
      <path d="M15.5 7.5L20.5 12l-5 4.5" />
      <path d="M13.6 4.6l-3.2 14.8" />
    </>
  ),
  cat: (
    <>
      <path d="M4.5 10.6L5.6 4l4.6 3.4h3.6L18.4 4l1.1 6.6" />
      <path d="M4.5 12.6a7.5 7.5 0 0 0 15 0" />
      <path d="M4.5 10.6v2M19.5 10.6v2" />
      <path d="M9.2 11.6h.01M14.8 11.6h.01" />
      <path d="M10.7 15.1a1.8 1.8 0 0 0 2.6 0" />
      <path d="M2.5 13.5h3M18.5 13.5h3" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 20.5h17" />
      <path d="M3.5 20.5V3.5" />
      <path d="M7 17l4-4.6 3.2 2.6L20 7.5" />
      <path d="M15.4 7.5H20v4.6" />
    </>
  ),

  cpu: (
    <>
      <rect x="7" y="7" width="10" height="10" rx="2" />
      <rect x="3.5" y="3.5" width="17" height="17" rx="3.5" />
      <path d="M9.5 1.8v1.7M14.5 1.8v1.7M9.5 20.5v1.7M14.5 20.5v1.7" />
      <path d="M1.8 9.5h1.7M1.8 14.5h1.7M20.5 9.5h1.7M20.5 14.5h1.7" />
    </>
  ),
  storage: (
    <>
      <rect x="3" y="4.5" width="18" height="6" rx="2" />
      <rect x="3" y="13.5" width="18" height="6" rx="2" />
      <path d="M6.6 7.5h.01M6.6 16.5h.01" />
      <path d="M10 7.5h7M10 16.5h7" />
    </>
  ),
  network: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.6 3.9 5.8 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.8-3.9-9S9.4 5.6 12 3z" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2.8l7.5 2.9v6c0 4.4-3.1 8.4-7.5 9.5-4.4-1.1-7.5-5.1-7.5-9.5v-6z" />
      <path d="M8.9 12.1l2.2 2.2 4-4.4" />
    </>
  ),
  system: (
    <>
      <rect x="2.8" y="4.5" width="18.4" height="12" rx="2.5" />
      <path d="M8 20.5h8" />
      <path d="M12 16.5v4" />
      <path d="M6.5 8.5h5M6.5 11.5h8" />
    </>
  ),
  scales: (
    <>
      <path d="M12 3.5v17" />
      <path d="M6 20.5h12" />
      <path d="M4.5 7h15" />
      <path d="M4.5 7L2 13.5h5z" />
      <path d="M19.5 7L17 13.5h5z" />
      <circle cx="12" cy="4.6" r="1.3" />
    </>
  ),
  brain: (
    <>
      <path d="M12 4.2a3.1 3.1 0 0 0-5.6 1.4A3 3 0 0 0 4 8.6a3 3 0 0 0 .9 2.2A3.2 3.2 0 0 0 4.4 15a3.1 3.1 0 0 0 2.7 1.4A3 3 0 0 0 12 19.8z" />
      <path d="M12 4.2a3.1 3.1 0 0 1 5.6 1.4A3 3 0 0 1 20 8.6a3 3 0 0 1-.9 2.2 3.2 3.2 0 0 1 .5 4.2 3.1 3.1 0 0 1-2.7 1.4A3 3 0 0 1 12 19.8z" />
      <path d="M12 4.2v15.6" />
    </>
  ),
  keyboard: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="2.5" />
      <path d="M6 9.5h.01M9.5 9.5h.01M13 9.5h.01M16.5 9.5h.01" />
      <path d="M6 12.7h.01M9.5 12.7h.01M13 12.7h.01M16.5 12.7h.01" />
      <path d="M8 15.6h8" />
    </>
  ),
  testtube: (
    <>
      <path d="M14.5 2.8l-8 8a4.6 4.6 0 0 0 6.5 6.5l8-8" />
      <path d="M12.5 4.8l6.7 6.7" />
      <path d="M8.4 11.4l3.2 3.2" />
      <path d="M4.5 19.5l-1.7 1.7" />
    </>
  ),
  logic: (
    <>
      <path d="M8 5.5h4.5a6.5 6.5 0 0 1 0 13H8z" />
      <path d="M8 5.5v13" />
      <path d="M3 9h5M3 15h5" />
      <path d="M19 12h2.5" />
    </>
  ),
  toolbox: (
    <>
      <rect x="2.8" y="8" width="18.4" height="11.5" rx="2.5" />
      <path d="M8.5 8V6.2a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2V8" />
      <path d="M2.8 13h18.4" />
      <path d="M10 11.4v3.2h4v-3.2" />
    </>
  ),
  snake: (
    <>
      <path d="M4 8.5A4.5 4.5 0 0 1 8.5 4h4a3.5 3.5 0 0 1 0 7h-4a3.5 3.5 0 0 0 0 7h4a4.5 4.5 0 0 0 4.5-4.5" />
      <path d="M8 7h.01" />
      <path d="M16 17h.01" />
    </>
  ),
  book: (
    <>
      <path d="M5 4.2h11.5A2.5 2.5 0 0 1 19 6.7v13.1H7.5A2.5 2.5 0 0 1 5 17.3z" />
      <path d="M5 17.3a2.5 2.5 0 0 1 2.5-2.5H19" />
      <path d="M8.5 8h7" />
    </>
  ),

  'book-open': (
    <>
      <path d="M12 6.5C10.4 5.1 8.3 4.4 5.5 4.4H3v13.2h2.5c2.8 0 4.9.7 6.5 2.1" />
      <path d="M12 6.5c1.6-1.4 3.7-2.1 6.5-2.1H21v13.2h-2.5c-2.8 0-4.9.7-6.5 2.1" />
      <path d="M12 6.5v13.2" />
    </>
  ),
  sword: (
    <>
      <path d="M20.5 3.5l-1.2 6.4-8.4 8.4-2.9-2.9L16.4 7z" />
      <path d="M6.6 14.2l3.2 3.2" />
      <path d="M4.2 16.6l3.2 3.2" />
      <path d="M3 20.9l1.6-1.6" />
    </>
  ),
  crown: (
    <>
      <path d="M3 7.5l3.4 3.1L12 4l5.6 6.6L21 7.5l-1.7 10.9H4.7z" />
      <path d="M4.7 18.4h14.6" />
      <circle cx="12" cy="12.9" r="1.1" />
    </>
  ),
  trophy: (
    <>
      <path d="M7.5 3.5h9v6a4.5 4.5 0 0 1-9 0z" />
      <path d="M7.5 5.5H4.8v1.6a3.4 3.4 0 0 0 3 3.3" />
      <path d="M16.5 5.5h2.7v1.6a3.4 3.4 0 0 1-3 3.3" />
      <path d="M12 14v3.5" />
      <path d="M8.5 20.5h7l-.8-3h-5.4z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.7" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4.5" />
      <path d="M11.2 11.2L20.5 20.5" />
      <path d="M17 17l-2 2" />
      <path d="M14.2 14.2l-2 2" />
    </>
  ),
  star: <path d="M12 3.2l2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.8l6.2-.9z" />,
  flame: (
    <>
      <path d="M12 21.2c3.6 0 6.3-2.6 6.3-6 0-4.6-4-6.4-4.8-11.4-2.6 1.6-4 4.1-4 6.3 0 1.3.4 2.1.4 2.9 0 1-.8 1.8-1.8 1.8s-1.6-.8-1.7-2c-1.1 1.1-1.7 2.6-1.7 4.2 0 2.5 2 4.2 4.5 4.2z" />
    </>
  ),
  gem: (
    <>
      <path d="M7.4 3.5h9.2l4.4 5.4L12 20.6 3 8.9z" />
      <path d="M3 8.9h18" />
      <path d="M9.6 8.9L12 20.6l2.4-11.7" />
      <path d="M7.4 3.5l2.2 5.4M16.6 3.5l-2.2 5.4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 6.8V12l3.5 2.4" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="14.8" r="6" />
      <path d="M12 12.2l.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3z" />
      <path d="M8.2 9.3L5.5 2.8h13l-2.7 6.5" />
    </>
  ),

  binary: (
    <>
      <rect x="3.2" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.8" y="13.5" width="7" height="7" rx="1.6" />
      <path d="M6.7 13.5v7" />
      <path d="M5.2 15.2l1.5-1.7" />
      <circle cx="17.3" cy="7" r="3.5" />
    </>
  ),
  waveform: (
    <>
      <path d="M3 12h2" />
      <path d="M7 7.5v9" />
      <path d="M10.5 4v16" />
      <path d="M14 8.5v7" />
      <path d="M17.5 6v12" />
      <path d="M21 10v4" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <circle cx="8.4" cy="9.6" r="1.7" />
      <path d="M3.6 17.4l4.8-4.4 3.5 3.1 3.3-3.1 5 4.6" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3.2L21 8l-9 4.8L3 8z" />
      <path d="M4.6 12.2L3 13l9 4.8L21 13l-1.6-.8" />
      <path d="M4.6 16.3L3 17.1l9 4.8 9-4.8-1.6-.8" />
    </>
  ),
  sort: (
    <>
      <path d="M4 6.5h16" />
      <path d="M4 12h11" />
      <path d="M4 17.5h6" />
      <path d="M18 12.6v6.4" />
      <path d="M15.7 16.8l2.3 2.4 2.3-2.4" />
    </>
  ),
  type: (
    <>
      <path d="M4 6.5V4.5h16v2" />
      <path d="M12 4.5v15" />
      <path d="M9 19.5h6" />
    </>
  ),
  table: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2.5" />
      <path d="M3 9.5h18" />
      <path d="M3 14.5h18" />
      <path d="M9.5 9.5v10" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.8" y="4.5" width="18.4" height="15" rx="2.5" />
      <path d="M7 9.5l3 2.8-3 2.8" />
      <path d="M12.5 15.5h4.5" />
    </>
  ),
  film: (
    <>
      <rect x="2.8" y="4.5" width="18.4" height="15" rx="2.5" />
      <path d="M2.8 8.2h3M2.8 12h3M2.8 15.8h3" />
      <path d="M18.2 8.2h3M18.2 12h3M18.2 15.8h3" />
      <path d="M10 8.6l5 3.4-5 3.4z" />
    </>
  ),
  paper: (
    <>
      <path d="M5.5 2.8h8.2l5 5v13.4a1 1 0 0 1-1 1H5.5a1 1 0 0 1-1-1V3.8a1 1 0 0 1 1-1z" />
      <path d="M13.5 2.8v5.2h5.2" />
      <path d="M8 13h8M8 16.5h5" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3l1.7 4.6L18 9.3l-4.3 1.7L12 15.6l-1.7-4.6L6 9.3l4.3-1.7z" />
      <path d="M18.5 15l.8 2.1 2.1.8-2.1.8-.8 2.1-.8-2.1-2.1-.8 2.1-.8z" />
    </>
  ),
};

export default function Icon({
  name,
  size = 22,
  color = 'currentColor',
  strokeWidth = 1.7,
  className,
  style,
  title,
}: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{ flex: 'none', ...style }}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      {P[name]}
    </svg>
  );
}
