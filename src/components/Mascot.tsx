import type { CSSProperties } from 'react';

export type Mood = 'happy' | 'think' | 'cheer' | 'sad' | 'wink';

interface Props {
  size?: number;
  mood?: Mood;
  style?: CSSProperties;
  className?: string;
}

/** Byte, the robot cat guide of the Silicon Dungeon. Drawn as inline SVG so it
 *  stays sharp on every phone screen and needs no image files. */
export default function Mascot({ size = 72, mood = 'happy', style, className }: Props) {
  const eyeShape = mood === 'sad' ? 6 : mood === 'think' ? 9 : 11;
  const mouth =
    mood === 'sad'
      ? 'M44 74 q8 -7 16 0'
      : mood === 'cheer'
        ? 'M42 68 q10 14 20 0 q-10 6 -20 0'
        : 'M44 68 q8 8 16 0';

  return (
    <svg
      viewBox="0 0 104 126"
      width={size}
      height={(size * 126) / 104}
      style={style}
      className={className}
      role="img"
      aria-label="Byte the robot cat"
    >
      <defs>
        <linearGradient id="bqHead" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9fdfe2" />
          <stop offset="100%" stopColor="#6ec6ca" />
        </linearGradient>
        <linearGradient id="bqBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ccabd8" />
          <stop offset="100%" stopColor="#8474a1" />
        </linearGradient>
        <radialGradient id="bqEye" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#f2e6f8" />
          <stop offset="55%" stopColor="#b184d0" />
          <stop offset="100%" stopColor="#6f4f92" />
        </radialGradient>
      </defs>

      {/* tail */}
      <path
        d="M80 112 q20 -2 18 -22 q-2 -14 -14 -12"
        fill="none"
        stroke="#8474a1"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* body */}
      <rect x="24" y="78" width="56" height="42" rx="18" fill="url(#bqBody)" />
      <rect x="34" y="86" width="36" height="26" rx="13" fill="#dff2f3" />
      <circle cx="52" cy="99" r="4.5" fill="#08979d" />

      {/* front paws */}
      <ellipse cx="33" cy="119" rx="9" ry="5.5" fill="#ccabd8" />
      <ellipse cx="71" cy="119" rx="9" ry="5.5" fill="#ccabd8" />

      {/* side arms */}
      <circle cx="22" cy="96" r="7" fill="#8474a1" />
      <circle cx="82" cy="96" r="7" fill="#8474a1" />

      {/* neck cables */}
      <rect x="42" y="74" width="20" height="10" rx="4" fill="#5f5279" />
      <rect x="45" y="76" width="2.5" height="7" rx="1" fill="#9fdfe2" />
      <rect x="51" y="76" width="2.5" height="7" rx="1" fill="#ccabd8" />
      <rect x="57" y="76" width="2.5" height="7" rx="1" fill="#9fdfe2" />

      {/* ears */}
      <path d="M22 30 L26 8 L44 22 Z" fill="#ccabd8" />
      <path d="M82 30 L78 8 L60 22 Z" fill="#ccabd8" />
      <path d="M27 27 L29 15 L39 23 Z" fill="#f2e6f8" />
      <path d="M77 27 L75 15 L65 23 Z" fill="#f2e6f8" />

      {/* head */}
      <rect x="16" y="18" width="72" height="58" rx="26" fill="url(#bqHead)" />
      <rect x="24" y="22" width="56" height="16" rx="8" fill="#c9edee" opacity="0.7" />

      {/* headphones */}
      <rect x="6" y="38" width="14" height="22" rx="7" fill="#8474a1" />
      <rect x="84" y="38" width="14" height="22" rx="7" fill="#8474a1" />
      <rect x="9" y="43" width="8" height="12" rx="4" fill="#dff2f3" />
      <rect x="87" y="43" width="8" height="12" rx="4" fill="#dff2f3" />

      {/* eyes */}
      <ellipse cx="38" cy="52" rx="11" ry={eyeShape} fill="url(#bqEye)" />
      {mood === 'wink' ? (
        <path d="M56 52 q8 -6 14 0" fill="none" stroke="#5f5279" strokeWidth="3.5" strokeLinecap="round" />
      ) : (
        <ellipse cx="63" cy="52" rx="11" ry={eyeShape} fill="url(#bqEye)" />
      )}
      <circle cx="34" cy="48" r="3.2" fill="#fff" opacity="0.9" />
      {mood !== 'wink' && <circle cx="59" cy="48" r="3.2" fill="#fff" opacity="0.9" />}

      {/* nose and mouth */}
      <path d="M48 62 L56 62 L52 67 Z" fill="#8474a1" />
      <path d={mouth} fill="none" stroke="#5f5279" strokeWidth="2.6" strokeLinecap="round" />

      {/* whiskers */}
      <path d="M18 62 L30 64 M18 68 L30 67" stroke="#f2e6f8" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M86 62 L74 64 M86 68 L74 67" stroke="#f2e6f8" strokeWidth="2.2" strokeLinecap="round" />

      {/* antenna */}
      <line x1="52" y1="18" x2="52" y2="8" stroke="#5f5279" strokeWidth="3" strokeLinecap="round" />
      <circle cx="52" cy="6" r="4.5" fill={mood === 'cheer' ? '#e0a02a' : '#08979d'} />
    </svg>
  );
}
