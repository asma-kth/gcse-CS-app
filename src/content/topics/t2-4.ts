import type { Topic } from '../../types';

export const t2_4: Topic = {
  id: 't2-4',
  code: '2.4',
  title: 'Boolean Logic',
  blurb: 'AND, OR and NOT, logic diagrams, truth tables and combined circuits.',
  paper: 'Paper 2',
  icon: '💡',
  lessons: [
    {
      id: 't2-4-l1',
      title: 'The three logic gates',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Inside a processor, everything is decided by tiny switches called logic gates. Each gate takes one or two inputs, each either 0 or 1, and produces a single output.' },
        { t: 'diagram', id: 'logic-gates' },
        { t: 'h', text: 'AND' },
        { t: 'p', text: 'The output is 1 only when both inputs are 1. Think of it as needing everything to be true.' },
        {
          t: 'table',
          head: ['A', 'B', 'A AND B'],
          rows: [['0', '0', '0'], ['0', '1', '0'], ['1', '0', '0'], ['1', '1', '1']],
        },
        { t: 'h', text: 'OR' },
        { t: 'p', text: 'The output is 1 when at least one input is 1. Only when both are 0 is the output 0.' },
        {
          t: 'table',
          head: ['A', 'B', 'A OR B'],
          rows: [['0', '0', '0'], ['0', '1', '1'], ['1', '0', '1'], ['1', '1', '1']],
        },
        { t: 'h', text: 'NOT' },
        { t: 'p', text: 'NOT has only one input and flips it. 0 becomes 1 and 1 becomes 0.' },
        {
          t: 'table',
          head: ['A', 'NOT A'],
          rows: [['0', '1'], ['1', '0']],
        },
        {
          t: 'real',
          title: 'Real life scenario: a car',
          body: [
            'The engine starts only when the key is turned AND the car is in park. Both conditions must be true, so that is an AND gate.',
            'The alarm sounds when the door sensor OR the window sensor is triggered. Either one is enough, so that is an OR gate.',
            'The interior light comes on when the door is NOT closed. One input, flipped, so that is a NOT gate.',
          ],
        },
        { t: 'demo', id: 'logic', caption: 'Flip the switches and watch the output and truth table respond.' },
      ],
    },
    {
      id: 't2-4-l2',
      title: 'Combined circuits and truth tables',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'Real circuits combine gates. To work them out, take one step at a time and add a column to your truth table for each intermediate result.' },
        {
          t: 'example',
          title: 'Worked example: Q = (A AND B) OR NOT C',
          body: [
            'Step 1: add a column for A AND B.',
            'Step 2: add a column for NOT C.',
            'Step 3: OR those two columns together to get Q.',
            'Never try to do it all in your head. The extra columns are where the marks are.',
          ],
        },
        {
          t: 'table',
          head: ['A', 'B', 'C', 'A AND B', 'NOT C', 'Q'],
          rows: [
            ['0', '0', '0', '0', '1', '1'],
            ['0', '0', '1', '0', '0', '0'],
            ['0', '1', '0', '0', '1', '1'],
            ['0', '1', '1', '0', '0', '0'],
            ['1', '0', '0', '0', '1', '1'],
            ['1', '0', '1', '0', '0', '0'],
            ['1', '1', '0', '1', '1', '1'],
            ['1', '1', '1', '1', '0', '1'],
          ],
        },
        { t: 'h', text: 'Filling in the input columns correctly' },
        {
          t: 'ul',
          items: [
            'One input needs 2 rows, two inputs need 4 rows, three inputs need 8 rows.',
            'For three inputs, column A goes 0 0 0 0 1 1 1 1, column B goes 0 0 1 1 0 0 1 1, column C goes 0 1 0 1 0 1 0 1.',
            'That pattern is simply counting up in binary, and it guarantees you never miss a combination.',
          ],
        },
        { t: 'demo', id: 'logic', caption: 'Try the combined circuits and check your own truth table against the simulator.' },
        {
          t: 'tip',
          body: [
            'When a question gives you a logic diagram, label the output of every gate on the diagram itself before you start the table. It turns a confusing picture into a simple list of steps.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: a fire alarm',
          body: [
            'The siren should sound when smoke is detected OR heat is detected, but only when the system is switched on.',
            'That is Q = (smoke OR heat) AND switched_on.',
            'If the engineer wires it as smoke OR (heat AND switched_on) the alarm would go off from smoke even when the system was disabled, which is a real world logic error.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't2-4-q1',
      title: 'Quiz 1: Single gates',
      questions: [
        { q: 'What is the output of 1 AND 0?', options: ['0', '1', '2', 'Undefined'], answer: 0, why: 'AND only gives 1 when both inputs are 1.' },
        { q: 'What is the output of 0 OR 1?', options: ['0', '1', '2', 'Undefined'], answer: 1, why: 'OR gives 1 when at least one input is 1.' },
        { q: 'What is the output of NOT 1?', options: ['0', '1', '2', 'Nothing'], answer: 0, why: 'NOT flips the input, so 1 becomes 0.' },
        { q: 'How many inputs does a NOT gate have?', options: ['One', 'Two', 'Three', 'Four'], answer: 0, why: 'NOT is the only gate in this course with a single input.' },
        { q: 'When is the output of an AND gate 1?', options: ['When at least one input is 1', 'Only when both inputs are 1', 'Only when both inputs are 0', 'Always'], answer: 1, why: 'Every input must be 1 for AND to output 1.' },
        { q: 'When is the output of an OR gate 0?', options: ['When both inputs are 0', 'When both inputs are 1', 'When one input is 1', 'Never'], answer: 0, why: 'OR only outputs 0 when nothing is on.' },
        { q: 'How many rows does a truth table with two inputs need?', options: ['2', '4', '6', '8'], answer: 1, why: 'Two inputs give 2 x 2 = 4 combinations.' },
        { q: 'How many rows does a truth table with three inputs need?', options: ['3', '6', '8', '9'], answer: 2, why: 'Three inputs give 2 x 2 x 2 = 8 combinations.' },
        { q: 'A light comes on only when it is dark AND motion is detected. Which gate is this?', options: ['OR', 'AND', 'NOT', 'None'], answer: 1, why: 'Both conditions must be true, which is exactly what AND does.' },
        { q: 'A buzzer sounds if the front door OR the back door is opened. Which gate is this?', options: ['AND', 'OR', 'NOT', 'None'], answer: 1, why: 'Either condition alone is enough, which is OR.' },
      ],
    },
    {
      id: 't2-4-q2',
      title: 'Quiz 2: Combined circuits',
      questions: [
        { q: 'If A = 1, B = 0, what is (A AND B)?', options: ['0', '1', '2', 'Undefined'], answer: 0, why: 'AND needs both inputs to be 1.' },
        { q: 'If A = 1, B = 0, what is (A OR B) AND A?', options: ['0', '1', '2', 'Undefined'], answer: 1, why: 'A OR B is 1, and 1 AND 1 is 1.' },
        { q: 'If A = 0, what is NOT (NOT A)?', options: ['0', '1', 'Undefined', 'It depends'], answer: 0, why: 'NOT 0 is 1, and NOT 1 is 0, so you get back to the original value.' },
        { q: 'If A = 1, B = 1, C = 0, what is (A AND B) OR C?', options: ['0', '1', '2', 'Undefined'], answer: 1, why: 'A AND B is 1, and 1 OR 0 is 1.' },
        { q: 'If A = 0, B = 1, what is NOT (A OR B)?', options: ['0', '1', '2', 'Undefined'], answer: 0, why: 'A OR B is 1, and NOT 1 is 0.' },
        { q: 'If A = 1, B = 0, C = 1, what is A AND (B OR C)?', options: ['0', '1', '2', 'Undefined'], answer: 1, why: 'B OR C is 1, and 1 AND 1 is 1.' },
        { q: 'Which expression is 1 only when both inputs are 0?', options: ['A AND B', 'A OR B', 'NOT (A OR B)', 'NOT (A AND B)'], answer: 2, why: 'A OR B is only 0 when both are 0, so NOT of it is 1 only in that case.' },
        { q: 'A heater turns on when it is cold AND the window is NOT open. Which expression is correct?', options: ['cold OR NOT window_open', 'cold AND NOT window_open', 'NOT cold AND window_open', 'cold AND window_open'], answer: 1, why: 'Both conditions are needed and the window condition is inverted.' },
        { q: 'In a truth table for three inputs, what should the C column look like?', options: ['0 0 0 0 1 1 1 1', '0 0 1 1 0 0 1 1', '0 1 0 1 0 1 0 1', '1 1 1 1 0 0 0 0'], answer: 2, why: 'The rightmost column alternates every row, just like counting in binary.' },
        { q: 'Why should you add columns for intermediate results in a truth table?', options: ['It looks neater', 'It breaks the problem into steps and earns marks for working', 'It is required by law', 'It makes the answer shorter'], answer: 1, why: 'Working out one gate at a time is more reliable and shows the examiner your method.' },
      ],
    },
  ],
  exam: [
    {
      id: 't2-4-e1',
      stem: 'Complete a truth table for the expression Q = A AND NOT B.',
      marks: 4,
      markScheme: [
        { text: 'When A = 0 and B = 0, Q = 0.', accept: [['0', '0', '0']] },
        { text: 'When A = 0 and B = 1, Q = 0.', accept: [['0', '1', '0']] },
        { text: 'When A = 1 and B = 0, Q = 1.', accept: [['1', '0', '1']] },
        { text: 'When A = 1 and B = 1, Q = 0.', accept: [['1', '1', '0']] },
      ],
      modelAnswer:
        'A = 0, B = 0: NOT B is 1, and 0 AND 1 gives Q = 0.\nA = 0, B = 1: NOT B is 0, and 0 AND 0 gives Q = 0.\nA = 1, B = 0: NOT B is 1, and 1 AND 1 gives Q = 1.\nA = 1, B = 1: NOT B is 0, and 1 AND 0 gives Q = 0.\nSo Q is 1 only on the third row, when A is 1 and B is 0.',
    },
    {
      id: 't2-4-e2',
      context: 'A security light should switch on when it is dark and either the gate sensor or the drive sensor is triggered.',
      stem: 'Write a Boolean expression for this system using the variables dark, gate and drive.',
      marks: 3,
      markScheme: [
        { text: 'Uses OR between gate and drive.', accept: [['gate or drive'], ['drive or gate'], ['or']] },
        { text: 'Uses AND with dark.', accept: [['and dark'], ['dark and'], ['and']] },
        { text: 'Brackets are used correctly so the OR is evaluated first.', accept: [['('], ['bracket']] },
      ],
      modelAnswer:
        'Q = dark AND (gate OR drive)\n\nThe brackets matter. Without them, dark AND gate OR drive could be read as (dark AND gate) OR drive, which would switch the light on in broad daylight whenever the drive sensor was triggered.',
    },
    {
      id: 't2-4-e3',
      stem: 'Explain the difference between an AND gate and an OR gate, using truth tables in your answer.',
      marks: 4,
      markScheme: [
        { text: 'AND outputs 1 only when both inputs are 1.', accept: [['both'], ['all inputs'], ['and', '1 1']] },
        { text: 'OR outputs 1 when at least one input is 1.', accept: [['at least one'], ['either'], ['one or more'], ['any']] },
        { text: 'Correct AND truth table values 0, 0, 0, 1.', accept: [['0 0 0 1'], ['0,0,0,1'], ['0001']] },
        { text: 'Correct OR truth table values 0, 1, 1, 1.', accept: [['0 1 1 1'], ['0,1,1,1'], ['0111']] },
      ],
      modelAnswer:
        'An AND gate outputs 1 only when every input is 1, so for inputs 00, 01, 10 and 11 the outputs are 0, 0, 0 and 1. An OR gate outputs 1 when at least one input is 1, so for the same inputs the outputs are 0, 1, 1 and 1. The only row where they agree completely is when both inputs are 1, where both give 1, and when both are 0, where both give 0.',
    },
    {
      id: 't2-4-e4',
      stem: 'A logic circuit has three inputs, A, B and C. Q = (A OR B) AND NOT C. State the value of Q when A = 1, B = 0 and C = 1, showing your working.',
      marks: 3,
      markScheme: [
        { text: 'A OR B evaluates to 1.', accept: [['a or b', '1'], ['or', '1'], ['1']] },
        { text: 'NOT C evaluates to 0.', accept: [['not c', '0'], ['not', '0']] },
        { text: 'Final answer Q = 0.', accept: [['q = 0'], ['q is 0'], ['answer', '0'], ['0']] },
      ],
      modelAnswer:
        'First work out the bracket: A OR B is 1 OR 0, which gives 1. Next work out NOT C: C is 1, so NOT C is 0. Finally combine them: 1 AND 0 gives 0. Therefore Q = 0.',
    },
    {
      id: 't2-4-e5',
      stem: 'Explain why a truth table with three inputs must have eight rows.',
      marks: 2,
      markScheme: [
        { text: 'Each input can take two possible values, 0 or 1.', accept: [['two values'], ['0 or 1'], ['two states'], ['2 possible']] },
        { text: 'With three inputs there are 2 x 2 x 2 = 8 possible combinations.', accept: [['2 x 2 x 2'], ['2^3'], ['2 cubed'], ['8 combinations'], ['eight combinations']] },
      ],
      modelAnswer:
        'Each input can only be 0 or 1, so it has two possible values. With three independent inputs the total number of different combinations is 2 x 2 x 2, which is 8. A complete truth table must include every possible combination, so it needs exactly eight rows.',
    },
  ],
};
