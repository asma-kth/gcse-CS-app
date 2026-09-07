import { Arrow, Box, C, Frame, Node, T } from './parts';

export function VonNeumann() {
  return (
    <Frame vb="0 0 360 260">
      <Box x={10} y={10} w={230} h={150} fill={C.aquaSoft} stroke={C.teal} r={14} />
      <T x={125} y={28} bold size={13} fill={C.tealDeep}>
        CPU (Central Processing Unit)
      </T>
      <Node x={22} y={38} w={98} h={44} title="Control Unit" sub="directs everything" />
      <Node x={130} y={38} w={98} h={44} title="ALU" sub="maths and logic" />
      <Box x={22} y={92} w={206} h={58} fill={C.white} stroke={C.purple} />
      <T x={125} y={108} bold size={12} fill={C.tealDeep}>
        Registers
      </T>
      <T x={60} y={126} size={10.5} fill={C.purpleDeep}>
        PC
      </T>
      <T x={100} y={126} size={10.5} fill={C.purpleDeep}>
        MAR
      </T>
      <T x={148} y={126} size={10.5} fill={C.purpleDeep}>
        MDR
      </T>
      <T x={196} y={126} size={10.5} fill={C.purpleDeep}>
        ACC
      </T>
      <T x={125} y={142} size={9.5} fill={C.purple}>
        tiny, very fast storage inside the CPU
      </T>

      <Node x={256} y={40} w={92} h={54} title="Memory" sub="RAM" fill={C.lilacSoft} stroke={C.purple} />
      <Node x={256} y={110} w={92} h={50} title="Input" sub="keyboard" fill={C.white} />
      <Node x={256} y={176} w={92} h={50} title="Output" sub="screen" fill={C.white} />

      <Arrow x1={240} y1={62} x2={254} y2={62} label="address" labelDy={-10} />
      <Arrow x1={254} y1={78} x2={240} y2={78} label="data" labelDy={16} />
      <Arrow x1={140} y1={162} x2={140} y2={198} />
      <Box x={60} y={198} w={160} h={44} fill={C.goldSoft} stroke={C.gold} />
      <T x={140} y={218} bold size={12} fill="#8a6110">
        Buses
      </T>
      <T x={140} y={233} size={10} fill="#8a6110">
        address bus, data bus, control bus
      </T>
      <Arrow x1={220} y1={220} x2={300} y2={220} dash color={C.purple} />
    </Frame>
  );
}

export function FetchExecuteLoop() {
  return (
    <Frame vb="0 0 360 210">
      <Node x={14} y={70} w={90} h={62} title="FETCH" sub="get instruction" fill={C.aquaSoft} stroke={C.teal} />
      <Node x={132} y={70} w={90} h={62} title="DECODE" sub="work out meaning" fill={C.lilacSoft} stroke={C.purple} />
      <Node x={250} y={70} w={96} h={62} title="EXECUTE" sub="carry it out" fill={C.goldSoft} stroke={C.gold} />
      <Arrow x1={106} y1={101} x2={130} y2={101} />
      <Arrow x1={224} y1={101} x2={248} y2={101} />
      <path
        d="M298 136 q0 46 -120 46 q-120 0 -120 -46"
        fill="none"
        stroke={C.teal}
        strokeWidth="2.2"
        markerEnd="url(#ah-08979d)"
      />
      <T x={180} y={198} size={11} fill={C.teal} bold>
        the cycle repeats billions of times per second
      </T>
      <T x={180} y={28} size={12.5} bold fill={C.tealDeep}>
        The Fetch Decode Execute Cycle
      </T>
      <T x={180} y={46} size={10.5} fill={C.purpleDeep}>
        one instruction all the way round, then the next one
      </T>
    </Frame>
  );
}

export function MemoryHierarchy() {
  return (
    <Frame vb="0 0 360 235">
      <polygon points="180,12 250,62 110,62" fill={C.teal} />
      <T x={180} y={48} size={11} fill="#fff" bold>
        Registers
      </T>
      <polygon points="108,66 252,66 282,116 78,116" fill={C.aqua} />
      <T x={180} y={96} size={11.5} fill={C.tealDeep} bold>
        Cache
      </T>
      <polygon points="76,120 284,120 314,170 46,170" fill={C.lilac} />
      <T x={180} y={150} size={11.5} fill={C.purpleDeep} bold>
        RAM (main memory)
      </T>
      <polygon points="44,174 316,174 340,222 20,222" fill={C.lilacSoft} />
      <T x={180} y={203} size={11.5} fill={C.purpleDeep} bold>
        Secondary storage (SSD or HDD)
      </T>
      <T x={340} y={40} size={10} anchor="end" fill={C.tealDeep} bold>
        fastest, smallest, dearest
      </T>
      <T x={340} y={232} size={10} anchor="end" fill={C.purpleDeep} bold>
        slowest, biggest, cheapest
      </T>
    </Frame>
  );
}

export function CpuPerformance() {
  return (
    <Frame vb="0 0 360 190">
      <T x={180} y={20} size={13} bold fill={C.tealDeep}>
        Three things that change CPU performance
      </T>
      <Node x={10} y={38} w={106} h={72} title="Clock speed" sub="cycles per second" fill={C.aquaSoft} stroke={C.teal} />
      <Node x={126} y={38} w={106} h={72} title="Cache size" sub="fast local copies" fill={C.lilacSoft} stroke={C.purple} />
      <Node x={242} y={38} w={108} h={72} title="Number of cores" sub="jobs at once" fill={C.goldSoft} stroke={C.gold} />
      <T x={63} y={128} size={10} fill={C.ink}>
        3 GHz means 3
      </T>
      <T x={63} y={141} size={10} fill={C.ink}>
        billion ticks a second
      </T>
      <T x={179} y={128} size={10} fill={C.ink}>
        bigger cache means
      </T>
      <T x={179} y={141} size={10} fill={C.ink}>
        fewer slow RAM trips
      </T>
      <T x={296} y={128} size={10} fill={C.ink}>
        4 cores can run 4
      </T>
      <T x={296} y={141} size={10} fill={C.ink}>
        instructions at once
      </T>
      <Box x={10} y={152} w={340} h={30} fill={C.white} stroke={C.purple} dash />
      <T x={180} y={172} size={11} fill={C.purpleDeep}>
        Careful: extra cores only help if the software is written to use them
      </T>
    </Frame>
  );
}

export function SoundSampling() {
  const pts: string[] = [];
  for (let x = 0; x <= 300; x += 3) {
    const y = 70 - 38 * Math.sin((x / 300) * Math.PI * 2.2);
    pts.push(`${x + 30},${y}`);
  }
  const samples = [0, 25, 50, 75, 100, 125, 150, 175, 200, 225, 250, 275, 300];
  return (
    <Frame vb="0 0 360 190">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        Sampling turns a smooth wave into numbers
      </T>
      <line x1={30} y1={70} x2={330} y2={70} stroke={C.line} strokeWidth={1.5} />
      <polyline points={pts.join(' ')} fill="none" stroke={C.lilac} strokeWidth={2.5} />
      {samples.map((s) => {
        const y = 70 - 38 * Math.sin((s / 300) * Math.PI * 2.2);
        return (
          <g key={s}>
            <line x1={s + 30} y1={70} x2={s + 30} y2={y} stroke={C.teal} strokeWidth={2} />
            <circle cx={s + 30} cy={y} r={3.4} fill={C.tealDeep} />
          </g>
        );
      })}
      <T x={180} y={132} size={11} fill={C.purpleDeep}>
        Each dot is one sample. Its height is stored as a binary number.
      </T>
      <T x={180} y={152} size={11} fill={C.tealDeep} bold>
        More dots per second = higher sample rate = better quality, bigger file
      </T>
      <T x={180} y={172} size={11} fill={C.tealDeep} bold>
        More bits per dot = higher bit depth = more accurate height
      </T>
    </Frame>
  );
}

export function ImageBits() {
  const grid = [
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
  ];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        A bitmap is a grid of pixels, each stored as a binary number
      </T>
      {grid.map((row, r) =>
        row.map((v, c) => (
          <rect
            key={`${r}-${c}`}
            x={30 + c * 20}
            y={30 + r * 20}
            width={19}
            height={19}
            rx={3}
            fill={v ? C.teal : C.white}
            stroke={C.line}
          />
        )),
      )}
      {grid.map((row, r) => (
        <text
          key={r}
          x={205}
          y={44 + r * 20}
          fontSize={11.5}
          fontFamily="monospace"
          fill={C.purpleDeep}
        >
          {row.join('')}
        </text>
      ))}
      <T x={295} y={44} size={10} fill={C.purple} anchor="start">
        1 = on
      </T>
      <T x={295} y={60} size={10} fill={C.purple} anchor="start">
        0 = off
      </T>
      <T x={180} y={174} size={11} fill={C.purpleDeep}>
        With 1 bit per pixel you get 2 colours. With 8 bits you get 256.
      </T>
      <T x={180} y={192} size={11} bold fill={C.tealDeep}>
        File size in bits = width x height x colour depth
      </T>
    </Frame>
  );
}

export function OsFunctions() {
  const items = [
    'Memory management',
    'File management',
    'Peripheral and driver management',
    'User management',
    'User interface',
  ];
  return (
    <Frame vb="0 0 360 210">
      <circle cx={180} cy={100} r={44} fill={C.teal} />
      <T x={180} y={96} size={12} fill="#fff" bold>
        Operating
      </T>
      <T x={180} y={112} size={12} fill="#fff" bold>
        System
      </T>
      {items.map((label, i) => {
        const angle = (i / items.length) * Math.PI * 2 - Math.PI / 2;
        const x = 180 + Math.cos(angle) * 128;
        const y = 100 + Math.sin(angle) * 74;
        return (
          <g key={label}>
            <line
              x1={180 + Math.cos(angle) * 46}
              y1={100 + Math.sin(angle) * 46}
              x2={x - Math.cos(angle) * 4}
              y2={y - Math.sin(angle) * 4}
              stroke={C.lilac}
              strokeWidth={2}
            />
            <rect x={x - 60} y={y - 15} width={120} height={30} rx={9} fill={C.lilacSoft} stroke={C.purple} />
            <T x={x} y={y + 4} size={10.5} fill={C.purpleDeep} bold>
              {label}
            </T>
          </g>
        );
      })}
    </Frame>
  );
}

export function CompressionTypes() {
  return (
    <Frame vb="0 0 360 190">
      <Box x={10} y={16} w={165} h={158} fill={C.aquaSoft} stroke={C.teal} />
      <T x={92} y={38} bold size={12.5} fill={C.tealDeep}>
        Lossless
      </T>
      <T x={92} y={58} size={10.5} fill={C.ink}>
        Nothing is thrown away
      </T>
      <T x={92} y={74} size={10.5} fill={C.ink}>
        Original comes back exactly
      </T>
      <T x={92} y={98} size={10.5} fill={C.purpleDeep} bold>
        PNG, ZIP, FLAC
      </T>
      <T x={92} y={124} size={10} fill={C.ink}>
        AAAABBB becomes 4A3B
      </T>
      <T x={92} y={148} size={10} fill={C.ink}>
        Use for text, code, logos
      </T>

      <Box x={185} y={16} w={165} h={158} fill={C.lilacSoft} stroke={C.purple} />
      <T x={267} y={38} bold size={12.5} fill={C.purpleDeep}>
        Lossy
      </T>
      <T x={267} y={58} size={10.5} fill={C.ink}>
        Detail is permanently removed
      </T>
      <T x={267} y={74} size={10.5} fill={C.ink}>
        Original can never return
      </T>
      <T x={267} y={98} size={10.5} fill={C.purpleDeep} bold>
        JPEG, MP3, MP4
      </T>
      <T x={267} y={124} size={10} fill={C.ink}>
        Much smaller files
      </T>
      <T x={267} y={148} size={10} fill={C.ink}>
        Use for photos, music, video
      </T>
    </Frame>
  );
}

export function StorageUnits() {
  const units = [
    ['bit', '1 binary digit, 0 or 1'],
    ['nibble', '4 bits'],
    ['byte', '8 bits'],
    ['kilobyte', '1000 bytes'],
    ['megabyte', '1000 kilobytes'],
    ['gigabyte', '1000 megabytes'],
    ['terabyte', '1000 gigabytes'],
    ['petabyte', '1000 terabytes'],
  ];
  return (
    <Frame vb="0 0 360 250">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Units of data, smallest to largest
      </T>
      {units.map((u, i) => (
        <g key={u[0]}>
          <rect
            x={20 + i * 2}
            y={28 + i * 27}
            width={320 - i * 4}
            height={23}
            rx={7}
            fill={i % 2 ? C.aquaSoft : C.lilacSoft}
            stroke={i % 2 ? C.teal : C.purple}
          />
          <T x={90} y={44 + i * 27} size={11} bold fill={C.tealDeep}>
            {u[0]}
          </T>
          <T x={240} y={44 + i * 27} size={10.5} fill={C.ink}>
            {u[1]}
          </T>
        </g>
      ))}
    </Frame>
  );
}
