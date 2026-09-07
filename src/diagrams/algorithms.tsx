import { Arrow, Box, C, Frame, Node, T } from './parts';

export function FlowchartSymbols() {
  return (
    <Frame vb="0 0 360 240">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Flowchart symbols you need for the exam
      </T>
      <rect x={30} y={30} width={110} height={34} rx={17} fill={C.aquaSoft} stroke={C.teal} strokeWidth={2} />
      <T x={85} y={51} size={11} bold fill={C.tealDeep}>
        Start / Stop
      </T>
      <T x={250} y={51} size={10.5} fill={C.ink}>
        rounded box, terminal
      </T>

      <rect x={30} y={76} width={110} height={34} rx={4} fill={C.lilacSoft} stroke={C.purple} strokeWidth={2} />
      <T x={85} y={97} size={11} bold fill={C.purpleDeep}>
        Process
      </T>
      <T x={250} y={97} size={10.5} fill={C.ink}>
        do something, for example x = x + 1
      </T>

      <polygon points="30,139 50,122 120,122 140,139 120,156 50,156" fill={C.white} stroke={C.purple} strokeWidth={2} />
      <T x={85} y={143} size={11} bold fill={C.purpleDeep}>
        Input / Output
      </T>
      <T x={250} y={143} size={10.5} fill={C.ink}>
        parallelogram, read or print
      </T>

      <polygon points="85,168 140,192 85,216 30,192" fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <T x={85} y={196} size={11} bold fill="#8a6110">
        Decision
      </T>
      <T x={250} y={190} size={10.5} fill={C.ink}>
        diamond, a question with
      </T>
      <T x={250} y={204} size={10.5} fill={C.ink}>
        a yes branch and a no branch
      </T>
    </Frame>
  );
}

export function LinearVsBinary() {
  const list = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
  return (
    <Frame vb="0 0 360 220">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        Searching for 72
      </T>
      <T x={180} y={36} size={11} bold fill={C.purpleDeep}>
        Linear search checks every item from the left
      </T>
      {list.map((n, i) => (
        <g key={i}>
          <rect
            x={12 + i * 34}
            y={44}
            width={30}
            height={28}
            rx={6}
            fill={i <= 8 ? C.lilacSoft : C.white}
            stroke={i === 8 ? C.good : C.purple}
            strokeWidth={i === 8 ? 3 : 2}
          />
          <T x={27 + i * 34} y={63} size={11} fill={C.ink} bold>
            {n}
          </T>
        </g>
      ))}
      <T x={180} y={90} size={10.5} fill={C.ink}>
        9 checks needed. Works on unsorted lists.
      </T>

      <T x={180} y={120} size={11} bold fill={C.tealDeep}>
        Binary search jumps to the middle each time
      </T>
      {list.map((n, i) => (
        <g key={i}>
          <rect
            x={12 + i * 34}
            y={128}
            width={30}
            height={28}
            rx={6}
            fill={i === 4 || i === 7 || i === 8 ? C.aquaSoft : C.white}
            stroke={i === 8 ? C.good : C.teal}
            strokeWidth={i === 8 ? 3 : 2}
          />
          <T x={27 + i * 34} y={147} size={11} fill={C.ink} bold>
            {n}
          </T>
        </g>
      ))}
      <T x={95} y={172} size={9.5} fill={C.teal} bold>
        1st look
      </T>
      <T x={198} y={172} size={9.5} fill={C.teal} bold>
        2nd
      </T>
      <T x={300} y={172} size={9.5} fill={C.good} bold>
        3rd, found
      </T>
      <T x={180} y={196} size={10.5} fill={C.ink}>
        3 checks only, but the list must already be sorted.
      </T>
      <T x={180} y={214} size={10.5} fill={C.purpleDeep} bold>
        Half the list is thrown away after every single check.
      </T>
    </Frame>
  );
}

export function BubbleSortPass() {
  const rows = [
    ['5', '3', '8', '1', 'compare 5 and 3, swap'],
    ['3', '5', '8', '1', 'compare 5 and 8, keep'],
    ['3', '5', '8', '1', 'compare 8 and 1, swap'],
    ['3', '5', '1', '8', 'end of pass 1, 8 is now safe'],
  ];
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        Bubble sort, first pass through 5 3 8 1
      </T>
      {rows.map((r, i) => (
        <g key={i}>
          {r.slice(0, 4).map((v, j) => (
            <g key={j}>
              <rect
                x={16 + j * 34}
                y={30 + i * 40}
                width={30}
                height={28}
                rx={6}
                fill={i === 3 && j === 3 ? C.good : C.lilacSoft}
                stroke={C.purple}
                strokeWidth={2}
              />
              <T x={31 + j * 34} y={49 + i * 40} size={11.5} bold fill={i === 3 && j === 3 ? '#fff' : C.ink}>
                {v}
              </T>
            </g>
          ))}
          <T x={170} y={49 + i * 40} size={10.5} fill={C.purpleDeep} anchor="start">
            {r[4]}
          </T>
        </g>
      ))}
      <T x={180} y={192} size={10.5} fill={C.ink}>
        The list is sorted when a whole pass makes no swaps at all.
      </T>
    </Frame>
  );
}

export function MergeSortTree() {
  return (
    <Frame vb="0 0 360 220">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        Merge sort: split all the way down, then merge back up
      </T>
      {[
        { y: 30, groups: ['7 3 9 1'] },
        { y: 74, groups: ['7 3', '9 1'] },
        { y: 118, groups: ['7', '3', '9', '1'] },
        { y: 162, groups: ['3 7', '1 9'] },
        { y: 196, groups: ['1 3 7 9'] },
      ].map((row, ri) => (
        <g key={ri}>
          {row.groups.map((g, gi) => {
            const total = row.groups.length;
            const w = 300 / total - 10;
            const x = 30 + gi * (300 / total) + 5;
            return (
              <g key={gi}>
                <rect
                  x={x}
                  y={row.y}
                  width={w}
                  height={26}
                  rx={7}
                  fill={ri >= 3 ? C.aquaSoft : C.lilacSoft}
                  stroke={ri >= 3 ? C.teal : C.purple}
                  strokeWidth={2}
                />
                <T x={x + w / 2} y={row.y + 18} size={11.5} bold fill={C.ink}>
                  {g}
                </T>
              </g>
            );
          })}
        </g>
      ))}
      <T x={344} y={60} size={9.5} fill={C.purple} anchor="end">
        split
      </T>
      <T x={344} y={186} size={9.5} fill={C.teal} anchor="end">
        merge
      </T>
    </Frame>
  );
}

export function LogicGates() {
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        The three gates in the GCSE course
      </T>

      {/* AND */}
      <path d="M40 40 L70 40 A22 22 0 0 1 70 84 L40 84 Z" fill={C.aquaSoft} stroke={C.teal} strokeWidth={2} />
      <line x1={20} y1={52} x2={40} y2={52} stroke={C.teal} strokeWidth={2} />
      <line x1={20} y1={72} x2={40} y2={72} stroke={C.teal} strokeWidth={2} />
      <line x1={92} y1={62} x2={112} y2={62} stroke={C.teal} strokeWidth={2} />
      <T x={62} y={104} size={11.5} bold fill={C.tealDeep}>
        AND
      </T>
      <T x={62} y={120} size={10} fill={C.ink}>
        1 only if both
      </T>
      <T x={62} y={134} size={10} fill={C.ink}>
        inputs are 1
      </T>

      {/* OR */}
      <path d="M140 40 Q168 62 140 84 Q178 84 194 62 Q178 40 140 40 Z" fill={C.lilacSoft} stroke={C.purple} strokeWidth={2} />
      <line x1={120} y1={52} x2={148} y2={52} stroke={C.purple} strokeWidth={2} />
      <line x1={120} y1={72} x2={148} y2={72} stroke={C.purple} strokeWidth={2} />
      <line x1={194} y1={62} x2={214} y2={62} stroke={C.purple} strokeWidth={2} />
      <T x={166} y={104} size={11.5} bold fill={C.purpleDeep}>
        OR
      </T>
      <T x={166} y={120} size={10} fill={C.ink}>
        1 if at least one
      </T>
      <T x={166} y={134} size={10} fill={C.ink}>
        input is 1
      </T>

      {/* NOT */}
      <polygon points="250,40 250,84 288,62" fill={C.goldSoft} stroke={C.gold} strokeWidth={2} />
      <circle cx={293} cy={62} r={5} fill={C.white} stroke={C.gold} strokeWidth={2} />
      <line x1={230} y1={62} x2={250} y2={62} stroke={C.gold} strokeWidth={2} />
      <line x1={298} y1={62} x2={320} y2={62} stroke={C.gold} strokeWidth={2} />
      <T x={278} y={104} size={11.5} bold fill="#8a6110">
        NOT
      </T>
      <T x={278} y={120} size={10} fill={C.ink}>
        flips the input,
      </T>
      <T x={278} y={134} size={10} fill={C.ink}>
        one input only
      </T>

      <Box x={20} y={150} w={320} h={40} fill={C.white} stroke={C.purple} dash />
      <T x={180} y={168} size={11} fill={C.purpleDeep}>
        In OCR questions the symbols above may appear in a circuit diagram
      </T>
      <T x={180} y={183} size={11} fill={C.purpleDeep}>
        and you must fill in the truth table for every input combination.
      </T>
    </Frame>
  );
}

export function CompilerInterpreter() {
  return (
    <Frame vb="0 0 360 200">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        Two ways to translate high level code
      </T>
      <Node x={14} y={32} w={100} h={40} title="Compiler" sub="whole program" fill={C.aquaSoft} stroke={C.teal} />
      <Arrow x1={116} y1={52} x2={146} y2={52} />
      <Node x={148} y={32} w={94} h={40} title="Executable" sub="machine code" />
      <Arrow x1={244} y1={52} x2={274} y2={52} />
      <Node x={276} y={32} w={72} h={40} title="Runs fast" fill={C.goldSoft} stroke={C.gold} />
      <T x={180} y={88} size={10} fill={C.ink}>
        Errors are all reported at the end. The source code is not needed to run it.
      </T>

      <Node x={14} y={108} w={100} h={40} title="Interpreter" sub="line by line" fill={C.lilacSoft} stroke={C.purple} />
      <Arrow x1={116} y1={128} x2={146} y2={128} color={C.purple} />
      <Node x={148} y={108} w={94} h={40} title="Runs each line" sub="no file saved" />
      <Arrow x1={244} y1={128} x2={274} y2={128} color={C.purple} />
      <Node x={276} y={108} w={72} h={40} title="Easy to debug" fill={C.goldSoft} stroke={C.gold} />
      <T x={180} y={166} size={10} fill={C.ink}>
        Stops at the first error, so beginners find the mistake quickly.
      </T>
      <T x={180} y={186} size={10.5} fill={C.purpleDeep} bold>
        Both an assembler, a compiler and an interpreter are types of translator.
      </T>
    </Frame>
  );
}

export function DefensiveDesign() {
  const items: [string, string][] = [
    ['Input validation', 'reject data that is not sensible'],
    ['Authentication', 'prove who the user is'],
    ['Maintainability', 'comments, indentation, sensible names'],
    ['Anticipating misuse', 'what if they type letters in an age box'],
  ];
  return (
    <Frame vb="0 0 360 180">
      <T x={180} y={18} size={12.5} bold fill={C.tealDeep}>
        Defensive design in four parts
      </T>
      {items.map(([a, b], i) => (
        <g key={a}>
          <rect x={20} y={30 + i * 36} width={320} height={30} rx={9} fill={i % 2 ? C.lilacSoft : C.aquaSoft} stroke={i % 2 ? C.purple : C.teal} strokeWidth={2} />
          <T x={36} y={50 + i * 36} size={11.5} bold fill={C.tealDeep} anchor="start">
            {a}
          </T>
          <T x={324} y={50 + i * 36} size={10} fill={C.purpleDeep} anchor="end">
            {b}
          </T>
        </g>
      ))}
    </Frame>
  );
}

export function AbstractionDecomposition() {
  return (
    <Frame vb="0 0 360 200">
      <T x={90} y={18} size={12.5} bold fill={C.tealDeep}>
        Decomposition
      </T>
      <rect x={40} y={28} width={100} height={26} rx={8} fill={C.teal} />
      <T x={90} y={46} size={11} fill="#fff" bold>
        Big problem
      </T>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <line x1={90} y1={54} x2={40 + i * 50} y2={82} stroke={C.aqua} strokeWidth={2} />
          <rect x={18 + i * 50} y={82} width={44} height={24} rx={7} fill={C.aquaSoft} stroke={C.teal} strokeWidth={2} />
          <T x={40 + i * 50} y={98} size={9.5} fill={C.tealDeep} bold>
            {`part ${i + 1}`}
          </T>
        </g>
      ))}
      <T x={90} y={132} size={10} fill={C.ink}>
        Solve each small part
      </T>
      <T x={90} y={148} size={10} fill={C.ink}>
        on its own, then join
      </T>
      <T x={90} y={164} size={10} fill={C.ink}>
        the answers together.
      </T>

      <line x1={182} y1={14} x2={182} y2={186} stroke={C.line} strokeWidth={2} />

      <T x={272} y={18} size={12.5} bold fill={C.purpleDeep}>
        Abstraction
      </T>
      <rect x={212} y={30} width={120} height={70} rx={10} fill={C.lilacSoft} stroke={C.purple} strokeWidth={2} />
      <T x={272} y={52} size={10} fill={C.ink}>
        real bus route:
      </T>
      <T x={272} y={68} size={10} fill={C.ink}>
        every bend, every hill,
      </T>
      <T x={272} y={84} size={10} fill={C.ink}>
        every house
      </T>
      <Arrow x1={272} y1={104} x2={272} y2={122} color={C.purple} />
      <rect x={222} y={126} width={100} height={40} rx={10} fill={C.purple} />
      <T x={272} y={144} size={10.5} fill="#fff" bold>
        bus map: stops
      </T>
      <T x={272} y={158} size={10.5} fill="#fff" bold>
        in order only
      </T>
      <T x={272} y={182} size={9.5} fill={C.ink}>
        Detail that does not matter is removed.
      </T>
    </Frame>
  );
}

export function SqlTable() {
  return (
    <Frame vb="0 0 360 190">
      <T x={180} y={16} size={12.5} bold fill={C.tealDeep}>
        A database table called Students
      </T>
      {['StudentID', 'Name', 'Year', 'House'].map((h, i) => (
        <g key={h}>
          <rect x={14 + i * 84} y={26} width={82} height={26} rx={5} fill={C.tealDeep} />
          <T x={55 + i * 84} y={44} size={10.5} fill="#fff" bold>
            {h}
          </T>
        </g>
      ))}
      {[
        ['1041', 'Aisha', '10', 'Ash'],
        ['1042', 'Tom', '11', 'Oak'],
        ['1043', 'Priya', '10', 'Elm'],
      ].map((row, r) =>
        row.map((v, c) => (
          <g key={`${r}-${c}`}>
            <rect x={14 + c * 84} y={54 + r * 28} width={82} height={26} rx={5} fill={r % 2 ? C.white : C.aquaSoft} stroke={C.line} />
            <T x={55 + c * 84} y={71 + r * 28} size={10.5} fill={C.ink}>
              {v}
            </T>
          </g>
        )),
      )}
      <rect x={14} y={26} width={82} height={110} rx={5} fill="none" stroke={C.gold} strokeWidth={3} />
      <T x={55} y={152} size={10} fill="#8a6110" bold>
        primary key
      </T>
      <T x={230} y={152} size={10.5} fill={C.purpleDeep}>
        Each row is a record.
      </T>
      <T x={230} y={168} size={10.5} fill={C.purpleDeep}>
        Each column is a field.
      </T>
      <T x={180} y={186} size={10} fill={C.ink}>
        SELECT Name FROM Students WHERE Year = 10
      </T>
    </Frame>
  );
}
