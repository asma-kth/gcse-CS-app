import { Arrow, Box, C, Frame, Node, T } from './parts';

export function RamRom() {
  return (
    <Frame vb="0 0 360 180">
      <Box x={12} y={26} w={162} h={140} fill={C.aquaSoft} stroke={C.teal} />
      <T x={93} y={48} size={13} bold fill={C.tealDeep}>
        RAM
      </T>
      <T x={93} y={68} size={10.5} fill={C.ink}>
        Volatile: empties on power off
      </T>
      <T x={93} y={86} size={10.5} fill={C.ink}>
        Read and write
      </T>
      <T x={93} y={104} size={10.5} fill={C.ink}>
        Holds programs and data
      </T>
      <T x={93} y={122} size={10.5} fill={C.ink}>
        currently in use
      </T>
      <T x={93} y={148} size={10} bold fill={C.teal}>
        Bigger RAM = fewer slowdowns
      </T>

      <Box x={186} y={26} w={162} h={140} fill={C.lilacSoft} stroke={C.purple} />
      <T x={267} y={48} size={13} bold fill={C.purpleDeep}>
        ROM
      </T>
      <T x={267} y={68} size={10.5} fill={C.ink}>
        Non volatile: keeps contents
      </T>
      <T x={267} y={86} size={10.5} fill={C.ink}>
        Read only in normal use
      </T>
      <T x={267} y={104} size={10.5} fill={C.ink}>
        Holds the boot up
      </T>
      <T x={267} y={122} size={10.5} fill={C.ink}>
        instructions (BIOS)
      </T>
      <T x={267} y={148} size={10} bold fill={C.purple}>
        Tiny compared to RAM
      </T>
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Primary memory comes in two kinds
      </T>
    </Frame>
  );
}

export function VirtualMemory() {
  return (
    <Frame vb="0 0 360 180">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Virtual memory: borrowing space from the hard drive
      </T>
      <Node x={20} y={36} w={110} h={54} title="RAM is full" sub="no room left" fill={C.aquaSoft} stroke={C.teal} />
      <Arrow x1={132} y1={62} x2={166} y2={62} label="move out" labelDy={-8} />
      <Node x={168} y={36} w={110} h={54} title="Least used data" sub="copied to storage" fill={C.lilacSoft} stroke={C.purple} />
      <Arrow x1={280} y1={62} x2={310} y2={62} />
      <rect x={312} y={36} width={36} height={54} rx={8} fill={C.purple} />
      <T x={330} y={68} size={10} fill="#fff" bold>
        SSD
      </T>
      <Box x={20} y={104} w={328} h={62} fill={C.goldSoft} stroke={C.gold} />
      <T x={184} y={126} size={11} fill="#8a6110">
        The program keeps running instead of crashing,
      </T>
      <T x={184} y={144} size={11} fill="#8a6110">
        but storage is far slower than RAM so the computer feels sluggish.
      </T>
      <T x={184} y={160} size={10} fill="#8a6110">
        Constant swapping in and out is called disk thrashing.
      </T>
    </Frame>
  );
}

export function SecondaryStorage() {
  const rows: [string, string, string][] = [
    ['Magnetic (HDD)', 'spinning platters, moving head', 'cheap per GB, large, fragile'],
    ['Solid state (SSD)', 'flash memory, no moving parts', 'fast, silent, dearer per GB'],
    ['Optical (CD, DVD)', 'laser reads pits in the surface', 'cheap, tiny capacity, scratches'],
  ];
  return (
    <Frame vb="0 0 360 175">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Three types of secondary storage
      </T>
      {rows.map((r, i) => (
        <g key={r[0]}>
          <rect x={14} y={28 + i * 46} width={332} height={40} rx={10} fill={i % 2 ? C.lilacSoft : C.aquaSoft} stroke={i % 2 ? C.purple : C.teal} strokeWidth={2} />
          <T x={30} y={46 + i * 46} size={11.5} bold fill={C.tealDeep} anchor="start">
            {r[0]}
          </T>
          <T x={30} y={60 + i * 46} size={10} fill={C.ink} anchor="start">
            {r[1]}
          </T>
          <T x={330} y={53 + i * 46} size={10} fill={C.purpleDeep} anchor="end">
            {r[2]}
          </T>
        </g>
      ))}
      <T x={180} y={172} size={10} fill={C.ink}>
        Judge storage on capacity, speed, portability, durability, reliability and cost.
      </T>
    </Frame>
  );
}

export function NetworkHardware() {
  const items: [string, string][] = [
    ['NIC', 'lets a device join a network, holds the MAC address'],
    ['Switch', 'sends a frame only to the device it is meant for'],
    ['Router', 'joins networks together and forwards packets by IP'],
    ['WAP', 'the wireless access point that gives you Wi Fi'],
    ['Transmission media', 'copper cable, fibre optic or radio waves'],
  ];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Hardware you need for a network
      </T>
      {items.map(([a, b], i) => (
        <g key={a}>
          <rect x={14} y={28 + i * 33} width={332} height={28} rx={9} fill={i % 2 ? C.lilacSoft : C.aquaSoft} stroke={i % 2 ? C.purple : C.teal} strokeWidth={2} />
          <T x={32} y={47 + i * 33} size={11.5} bold fill={C.tealDeep} anchor="start">
            {a}
          </T>
          <T x={330} y={47 + i * 33} size={9.6} fill={C.purpleDeep} anchor="end">
            {b}
          </T>
        </g>
      ))}
      <T x={180} y={196} size={10} fill={C.ink}>
        A home router is usually a router, switch and WAP in one box.
      </T>
    </Frame>
  );
}

export function ImpactsWheel() {
  const items: [string, string][] = [
    ['Ethical', 'is it fair and right for people'],
    ['Legal', 'does it follow the law'],
    ['Cultural', 'how does it change how groups live'],
    ['Environmental', 'energy, materials and e waste'],
    ['Privacy', 'who sees your personal data'],
  ];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Five lenses for impact questions
      </T>
      {items.map(([a, b], i) => (
        <g key={a}>
          <rect x={14} y={28 + i * 33} width={332} height={28} rx={9} fill={i % 2 ? C.aquaSoft : C.lilacSoft} stroke={i % 2 ? C.teal : C.purple} strokeWidth={2} />
          <T x={32} y={47 + i * 33} size={11.5} bold fill={C.tealDeep} anchor="start">
            {a}
          </T>
          <T x={330} y={47 + i * 33} size={10} fill={C.purpleDeep} anchor="end">
            {b}
          </T>
        </g>
      ))}
      <T x={180} y={196} size={10} fill={C.ink}>
        In the exam, give a benefit, a drawback and then a judgement.
      </T>
    </Frame>
  );
}

export function TestingTypes() {
  return (
    <Frame vb="0 0 360 190">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Test data for an age box that accepts 11 to 16
      </T>
      <Node x={14} y={30} w={104} h={62} title="Normal" sub="13" fill={C.aquaSoft} stroke={C.teal} />
      <Node x={128} y={30} w={104} h={62} title="Boundary" sub="11 and 16" fill={C.goldSoft} stroke={C.gold} />
      <Node x={242} y={30} w={104} h={62} title="Invalid" sub="7, 22, cat" fill={C.lilacSoft} stroke={C.purple} />
      <T x={66} y={110} size={10} fill={C.ink}>
        should be accepted
      </T>
      <T x={180} y={110} size={10} fill={C.ink}>
        right at the edge
      </T>
      <T x={294} y={110} size={10} fill={C.ink}>
        should be rejected
      </T>
      <Box x={14} y={124} w={332} h={54} fill={C.white} stroke={C.purple} dash />
      <T x={180} y={144} size={11} fill={C.purpleDeep}>
        Iterative testing happens while you build, module by module.
      </T>
      <T x={180} y={164} size={11} fill={C.purpleDeep}>
        Final testing happens at the end on the whole finished program.
      </T>
    </Frame>
  );
}

export function IdeFeatures() {
  const items: [string, string][] = [
    ['Editor', 'write code with colour coding and auto indent'],
    ['Error diagnostics', 'points at the line with the mistake'],
    ['Run time environment', 'runs the program without leaving the IDE'],
    ['Translator', 'turns your code into something the CPU understands'],
  ];
  return (
    <Frame vb="0 0 360 170">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        What an IDE gives you
      </T>
      {items.map(([a, b], i) => (
        <g key={a}>
          <rect x={14} y={28 + i * 34} width={332} height={29} rx={9} fill={i % 2 ? C.lilacSoft : C.aquaSoft} stroke={i % 2 ? C.purple : C.teal} strokeWidth={2} />
          <T x={32} y={47 + i * 34} size={11.5} bold fill={C.tealDeep} anchor="start">
            {a}
          </T>
          <T x={330} y={47 + i * 34} size={9.6} fill={C.purpleDeep} anchor="end">
            {b}
          </T>
        </g>
      ))}
      <T x={180} y={166} size={10} fill={C.ink}>
        A debugger with breakpoints is a common extra feature.
      </T>
    </Frame>
  );
}

export function DataTypes() {
  const rows: [string, string, string][] = [
    ['Integer', 'whole number', '17'],
    ['Real / float', 'number with a decimal part', '3.75'],
    ['Boolean', 'True or False only', 'True'],
    ['Character', 'a single symbol', 'A'],
    ['String', 'text of any length', 'Hello'],
  ];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        The five data types in the specification
      </T>
      {rows.map((r, i) => (
        <g key={r[0]}>
          <rect x={14} y={28 + i * 33} width={332} height={28} rx={9} fill={i % 2 ? C.lilacSoft : C.aquaSoft} stroke={i % 2 ? C.purple : C.teal} strokeWidth={2} />
          <T x={30} y={47 + i * 33} size={11.5} bold fill={C.tealDeep} anchor="start">
            {r[0]}
          </T>
          <T x={200} y={47 + i * 33} size={10.5} fill={C.ink}>
            {r[1]}
          </T>
          <T x={330} y={47 + i * 33} size={11} fill={C.purpleDeep} anchor="end">
            {r[2]}
          </T>
        </g>
      ))}
      <T x={180} y={196} size={10} fill={C.ink}>
        Choosing the smallest sensible type saves memory.
      </T>
    </Frame>
  );
}

export function ArrayDiagram() {
  const arr = ['red', 'blue', 'green', 'pink'];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        A one dimensional array called colours
      </T>
      {arr.map((v, i) => (
        <g key={i}>
          <rect x={20 + i * 82} y={30} width={78} height={36} rx={8} fill={C.aquaSoft} stroke={C.teal} strokeWidth={2} />
          <T x={59 + i * 82} y={53} size={12} bold fill={C.tealDeep}>
            {v}
          </T>
          <T x={59 + i * 82} y={82} size={11} fill={C.purple} bold>
            {`index ${i}`}
          </T>
        </g>
      ))}
      <T x={180} y={104} size={10.5} fill={C.ink}>
        colours[2] gives green, because counting starts at zero.
      </T>

      <T x={180} y={128} size={12} bold fill={C.purpleDeep}>
        A two dimensional array called seats
      </T>
      {[0, 1, 2].map((r) =>
        [0, 1, 2, 3].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={70 + c * 56} y={136 + r * 20} width={52} height={17} rx={4} fill={C.lilacSoft} stroke={C.purple} />
            <text x={96 + c * 56} y={149 + r * 20} fontSize={9.5} textAnchor="middle" fill={C.purpleDeep} fontFamily="monospace">
              {`[${r}][${c}]`}
            </text>
          </g>
        )),
      )}
      <T x={180} y={196} size={10} fill={C.ink}>
        seats[1][2] means row 1, column 2.
      </T>
    </Frame>
  );
}

export function EmbeddedSystems() {
  return (
    <Frame vb="0 0 360 165">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        General purpose computer or embedded system
      </T>
      <Box x={14} y={28} w={162} h={120} fill={C.aquaSoft} stroke={C.teal} />
      <T x={95} y={50} size={12} bold fill={C.tealDeep}>
        General purpose
      </T>
      <T x={95} y={70} size={10.5} fill={C.ink}>
        Runs any software
      </T>
      <T x={95} y={88} size={10.5} fill={C.ink}>
        You can install new apps
      </T>
      <T x={95} y={106} size={10.5} fill={C.ink}>
        Laptop, phone, tablet
      </T>
      <T x={95} y={130} size={10} bold fill={C.teal}>
        Flexible but uses more power
      </T>

      <Box x={186} y={28} w={162} h={120} fill={C.lilacSoft} stroke={C.purple} />
      <T x={267} y={50} size={12} bold fill={C.purpleDeep}>
        Embedded
      </T>
      <T x={267} y={70} size={10.5} fill={C.ink}>
        Built for one job only
      </T>
      <T x={267} y={88} size={10.5} fill={C.ink}>
        Software is fixed at the factory
      </T>
      <T x={267} y={106} size={10.5} fill={C.ink}>
        Washing machine, traffic light
      </T>
      <T x={267} y={130} size={10} bold fill={C.purple}>
        Cheap, reliable, low power
      </T>
    </Frame>
  );
}
