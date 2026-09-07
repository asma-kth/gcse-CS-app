import { useMemo, useState } from 'react';

export interface DrillItem {
  code: string;
  question: string;
  answer: string[];
  hint: string;
  explain: string;
  lang?: 'python' | 'erl';
}

const PYTHON_DRILLS: DrillItem[] = [
  {
    code: 'x = 5\ny = 2\nprint(x * y)',
    question: 'What is printed?',
    answer: ['10'],
    hint: 'The asterisk means multiply.',
    explain: '5 multiplied by 2 gives 10.',
  },
  {
    code: 'print(17 // 5)',
    question: 'What is printed?',
    answer: ['3'],
    hint: 'Double slash is integer division.',
    explain: 'Integer division throws away the remainder, so 17 // 5 gives 3.',
  },
  {
    code: 'print(17 % 5)',
    question: 'What is printed?',
    answer: ['2'],
    hint: 'The percent sign gives the remainder.',
    explain: '5 goes into 17 three times with 2 left over, so the remainder is 2.',
  },
  {
    code: 'word = "COMPUTER"\nprint(word[0:4])',
    question: 'What is printed?',
    answer: ['comp'],
    hint: 'Counting starts at zero and the end index is not included.',
    explain: 'Characters at index 0, 1, 2 and 3 are C, O, M and P, so COMP is printed.',
  },
  {
    code: 'name = "byte"\nprint(name.upper())',
    question: 'What is printed?',
    answer: ['byte'],
    hint: 'upper() converts every letter to capitals.',
    explain: 'The upper method returns BYTE in capital letters.',
  },
  {
    code: 'total = 0\nfor i in range(1, 5):\n    total = total + i\nprint(total)',
    question: 'What is printed?',
    answer: ['10'],
    hint: 'range(1, 5) gives 1, 2, 3, 4.',
    explain: '1 + 2 + 3 + 4 = 10. Remember that range stops before the second number.',
  },
  {
    code: 'x = 10\nwhile x > 5:\n    x = x - 2\nprint(x)',
    question: 'What is printed?',
    answer: ['4'],
    hint: 'Keep subtracting 2 and stop as soon as x is no longer greater than 5.',
    explain: 'x becomes 8, then 6, then 4. At 4 the condition 4 > 5 is false, so 4 is printed.',
  },
  {
    code: 'scores = [3, 8, 1, 9]\nprint(scores[2])',
    question: 'What is printed?',
    answer: ['1'],
    hint: 'The first index is 0.',
    explain: 'Index 0 is 3, index 1 is 8 and index 2 is 1.',
  },
  {
    code: 'scores = [3, 8, 1, 9]\nprint(len(scores))',
    question: 'What is printed?',
    answer: ['4'],
    hint: 'len counts the items, not the indexes.',
    explain: 'There are four items in the list, so len returns 4.',
  },
  {
    code: 'def double(n):\n    return n * 2\n\nprint(double(7))',
    question: 'What is printed?',
    answer: ['14'],
    hint: 'The function returns its parameter multiplied by two.',
    explain: 'double(7) returns 7 * 2, which is 14.',
  },
  {
    code: 'age = 15\nif age >= 18:\n    print("Adult")\nelif age >= 13:\n    print("Teen")\nelse:\n    print("Child")',
    question: 'What is printed?',
    answer: ['teen'],
    hint: 'Check each condition in order and stop at the first true one.',
    explain: '15 is not 18 or more, but it is 13 or more, so the elif branch runs and Teen is printed.',
  },
  {
    code: 'print(str(3) + str(4))',
    question: 'What is printed?',
    answer: ['34'],
    hint: 'These are strings, not numbers.',
    explain: 'str() turns each number into text, and adding two strings joins them, giving 34.',
  },
  {
    code: 'nums = [4, 7, 2]\ntotal = 0\nfor n in nums:\n    total += n\nprint(total)',
    question: 'What is printed?',
    answer: ['13'],
    hint: 'The += operator adds to the existing value.',
    explain: '4 + 7 + 2 = 13.',
  },
  {
    code: 'print(2 ** 5)',
    question: 'What is printed?',
    answer: ['32'],
    hint: 'Double asterisk means to the power of.',
    explain: '2 to the power of 5 is 2 x 2 x 2 x 2 x 2 = 32.',
  },
  {
    code: 'word = "algorithm"\nprint(len(word))',
    question: 'What is printed?',
    answer: ['9'],
    hint: 'Count every letter.',
    explain: 'a l g o r i t h m is nine characters.',
  },
];

const ERL_DRILLS: DrillItem[] = [
  {
    lang: 'erl',
    code: 'x = 4\nfor i = 1 to 3\n  x = x + i\nnext i\nprint(x)',
    question: 'What is printed?',
    answer: ['10'],
    hint: 'In ERL, "for i = 1 to 3" includes 3 itself.',
    explain: 'x starts at 4, then adds 1, 2 and 3, giving 10. Unlike Python range, ERL includes the final value.',
  },
  {
    lang: 'erl',
    code: 'name = "Byte"\nprint(name.length)',
    question: 'What is printed?',
    answer: ['4'],
    hint: 'ERL uses .length rather than a len function.',
    explain: 'Byte has four characters, so 4 is printed.',
  },
  {
    lang: 'erl',
    code: 'word = "dungeon"\nprint(word.subString(0, 3))',
    question: 'What is printed?',
    answer: ['dun'],
    hint: 'subString(start, number of characters).',
    explain: 'Starting at index 0 and taking 3 characters gives dun.',
  },
  {
    lang: 'erl',
    code: 'x = 9\nif x MOD 2 == 0 then\n  print("even")\nelse\n  print("odd")\nendif',
    question: 'What is printed?',
    answer: ['odd'],
    hint: 'MOD gives the remainder.',
    explain: '9 MOD 2 is 1, which is not 0, so the else branch runs and odd is printed.',
  },
  {
    lang: 'erl',
    code: 'total = 0\ni = 1\nwhile i <= 4\n  total = total + i\n  i = i + 1\nendwhile\nprint(total)',
    question: 'What is printed?',
    answer: ['10'],
    hint: 'The loop runs while i is 4 or less.',
    explain: 'i takes the values 1, 2, 3 and 4, so total becomes 1 + 2 + 3 + 4 = 10.',
  },
  {
    lang: 'erl',
    code: 'function triple(n)\n  return n * 3\nendfunction\n\nprint(triple(5))',
    question: 'What is printed?',
    answer: ['15'],
    hint: 'A function returns a value back to where it was called.',
    explain: 'triple(5) returns 5 * 3, which is 15.',
  },
  {
    lang: 'erl',
    code: 'array marks[3]\nmarks[0] = 6\nmarks[1] = 9\nmarks[2] = 4\nprint(marks[1])',
    question: 'What is printed?',
    answer: ['9'],
    hint: 'Array indexes start at zero.',
    explain: 'marks[1] is the second element, which holds 9.',
  },
  {
    lang: 'erl',
    code: 'x = 15\nprint(x DIV 4)',
    question: 'What is printed?',
    answer: ['3'],
    hint: 'DIV is whole number division.',
    explain: '4 goes into 15 three whole times, so DIV gives 3.',
  },
];

function normalise(s: string): string {
  return s.trim().toLowerCase().replace(/^["']|["']$/g, '').replace(/\s+/g, ' ');
}

function Drill({ items, title }: { items: DrillItem[]; title: string }) {
  const [i, setI] = useState(0);
  const [entry, setEntry] = useState('');
  const [state, setState] = useState<'idle' | 'right' | 'wrong'>('idle');
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const item = items[i];
  const accepted = useMemo(() => item.answer.map(normalise), [item]);

  const check = () => {
    const ok = accepted.includes(normalise(entry));
    setState(ok ? 'right' : 'wrong');
    if (ok) setScore((s) => s + 1);
  };

  const next = () => {
    setI((v) => (v + 1) % items.length);
    setEntry('');
    setState('idle');
    setShowHint(false);
  };

  return (
    <div>
      <div className="chip-row" style={{ marginBottom: 10 }}>
        <span className="chip teal">{title}</span>
        <span className="chip">{`Question ${i + 1} of ${items.length}`}</span>
        <span className="chip gold">{`Correct: ${score}`}</span>
      </div>

      <div className="code-label">{item.lang === 'erl' ? 'OCR Exam Reference Language' : 'Python'}</div>
      <pre className="code">{item.code}</pre>

      <div style={{ marginTop: 12, fontWeight: 700 }}>{item.question}</div>
      <input
        type="text"
        value={entry}
        onChange={(e) => {
          setEntry(e.target.value);
          setState('idle');
        }}
        placeholder="Type the exact output"
        style={{
          width: '100%',
          marginTop: 8,
          borderColor: state === 'right' ? '#1d8a5f' : state === 'wrong' ? '#c0392b' : undefined,
          background: state === 'right' ? '#e2f5ec' : state === 'wrong' ? '#fdeae7' : undefined,
        }}
      />

      <div className="ctrl-row">
        <button className="btn small" onClick={check} disabled={!entry.trim()}>
          Check
        </button>
        <button className="btn ghost small" onClick={() => setShowHint(true)}>
          Hint
        </button>
        <button className="btn outline small" onClick={next}>
          Next question
        </button>
      </div>

      {showHint && state !== 'right' && (
        <div className="step-note fadein">
          <b>Hint: </b>
          {item.hint}
        </div>
      )}

      {state === 'right' && (
        <div className="step-note fadein" style={{ borderColor: '#1d8a5f' }}>
          <b>Correct. </b>
          {item.explain}
        </div>
      )}

      {state === 'wrong' && (
        <div className="step-note fadein" style={{ borderColor: '#c0392b' }}>
          <b>Not quite. </b>
          Read the code one line at a time and write down the value of each variable as it changes.
        </div>
      )}
    </div>
  );
}

export function PythonDrill() {
  return <Drill items={PYTHON_DRILLS} title="Python output drill" />;
}

export function ErlDrill() {
  return <Drill items={ERL_DRILLS} title="ERL output drill" />;
}
