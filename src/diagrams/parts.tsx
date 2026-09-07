import type { ReactNode } from 'react';

export const C = {
  lilac: '#ccabd8',
  lilacSoft: '#ede2f4',
  purple: '#8474a1',
  purpleDeep: '#5f5279',
  aqua: '#6ec6ca',
  aquaSoft: '#dff2f3',
  teal: '#08979d',
  tealDeep: '#055b5c',
  ink: '#21313a',
  line: '#e4e0ee',
  white: '#ffffff',
  gold: '#e0a02a',
  goldSoft: '#fdf3dd',
  good: '#1d8a5f',
  bad: '#c0392b',
};

interface BoxProps {
  x: number;
  y: number;
  w: number;
  h: number;
  fill?: string;
  stroke?: string;
  r?: number;
  dash?: boolean;
}

export function Box({ x, y, w, h, fill = C.white, stroke = C.purple, r = 10, dash }: BoxProps) {
  return (
    <rect
      x={x}
      y={y}
      width={w}
      height={h}
      rx={r}
      fill={fill}
      stroke={stroke}
      strokeWidth={2}
      strokeDasharray={dash ? '6 5' : undefined}
    />
  );
}

interface LabelProps {
  x: number;
  y: number;
  children: ReactNode;
  size?: number;
  fill?: string;
  bold?: boolean;
  anchor?: 'start' | 'middle' | 'end';
}

export function T({ x, y, children, size = 12, fill = C.ink, bold, anchor = 'middle' }: LabelProps) {
  return (
    <text
      x={x}
      y={y}
      fontSize={size}
      fill={fill}
      textAnchor={anchor}
      fontWeight={bold ? 700 : 500}
      fontFamily="Segoe UI, Roboto, sans-serif"
    >
      {children}
    </text>
  );
}

/** A labelled box with centred title and optional subtitle. */
export function Node({
  x,
  y,
  w,
  h,
  title,
  sub,
  fill = C.white,
  stroke = C.purple,
  titleFill = C.tealDeep,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  sub?: string;
  fill?: string;
  stroke?: string;
  titleFill?: string;
}) {
  return (
    <g>
      <Box x={x} y={y} w={w} h={h} fill={fill} stroke={stroke} />
      <T x={x + w / 2} y={y + (sub ? h / 2 - 2 : h / 2 + 4)} bold size={12.5} fill={titleFill}>
        {title}
      </T>
      {sub && (
        <T x={x + w / 2} y={y + h / 2 + 14} size={10.5} fill={C.purpleDeep}>
          {sub}
        </T>
      )}
    </g>
  );
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
  color = C.teal,
  label,
  dash,
  labelDx = 0,
  labelDy = -6,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color?: string;
  label?: string;
  dash?: boolean;
  labelDx?: number;
  labelDy?: number;
}) {
  const id = `ah-${color.replace('#', '')}`;
  return (
    <g>
      <defs>
        <marker id={id} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
          <path d="M0,0 L9,4.5 L0,9 z" fill={color} />
        </marker>
      </defs>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={color}
        strokeWidth={2.2}
        markerEnd={`url(#${id})`}
        strokeDasharray={dash ? '6 5' : undefined}
      />
      {label && (
        <T x={(x1 + x2) / 2 + labelDx} y={(y1 + y2) / 2 + labelDy} size={10.5} fill={color} bold>
          {label}
        </T>
      )}
    </g>
  );
}

export function Frame({ children, vb }: { children: ReactNode; vb: string }) {
  return (
    <svg viewBox={vb} xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="100%" height="100%" fill="none" />
      {children}
    </svg>
  );
}
