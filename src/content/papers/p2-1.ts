import type { ExamPaper } from '../../types';

export const paper2_1: ExamPaper = {
  id: 'p2-1',
  component: 'Paper 2',
  number: 1,
  title: 'Paper 2 Mock A: Algorithms and Logic',
  minutes: 45,
  totalMarks: 47,
  blurb: 'Computational thinking, searching, sorting, trace tables and Boolean logic.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p2-1-1', marks: 1, stem: 'Which condition must be true before a binary search can be used?', options: ['The list must be numeric', 'The list must be sorted', 'The list must be short', 'The list must have no duplicates'], answer: 1, why: 'Binary search discards half the list each time, which only works if the data is in order.' },
        { kind: 'mcq', id: 'p2-1-2', marks: 1, stem: 'What does abstraction mean?', options: ['Breaking a problem into parts', 'Removing detail that does not matter', 'Testing with invalid data', 'Translating code into binary'], answer: 1, why: 'Abstraction hides irrelevant detail so you can focus on what actually affects the solution.' },
        { kind: 'mcq', id: 'p2-1-3', marks: 1, stem: 'Which flowchart symbol is a diamond?', options: ['Process', 'Decision', 'Input or output', 'Terminal'], answer: 1, why: 'A diamond asks a question and has a yes branch and a no branch.' },
        { kind: 'mcq', id: 'p2-1-4', marks: 1, stem: 'What is the output of 1 AND 0?', options: ['0', '1', '2', 'Undefined'], answer: 0, why: 'AND only outputs 1 when both inputs are 1.' },
        { kind: 'mcq', id: 'p2-1-5', marks: 1, stem: 'How many rows does a truth table with three inputs need?', options: ['3', '6', '8', '9'], answer: 2, why: 'Each input has two possible values, so 2 x 2 x 2 = 8 combinations.' },
        { kind: 'mcq', id: 'p2-1-6', marks: 1, stem: 'How does bubble sort know that the list is sorted?', options: ['When the first item is smallest', 'When a complete pass makes no swaps', 'After exactly n passes', 'When the list is empty'], answer: 1, why: 'If nothing needed swapping in a whole pass, everything is already in order.' },
        { kind: 'mcq', id: 'p2-1-7', marks: 1, stem: 'Which sort splits the list into single items and then merges them back?', options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'Linear sort'], answer: 2, why: 'Merge sort divides until each piece holds one item, then merges pieces in order.' },
        { kind: 'mcq', id: 'p2-1-8', marks: 1, stem: 'total = 0. For i = 1 to 4, total = total + i. What is total?', options: ['4', '6', '10', '24'], answer: 2, why: '1 + 2 + 3 + 4 = 10.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p2-1-9',
          marks: 5,
          context: 'The list contains: 18, 4, 25, 9, 11',
          stem: 'Show the contents of the list after each complete pass of a bubble sort until it is sorted.',
          markScheme: [
            { text: 'After pass 1: 4, 18, 9, 11, 25', accept: [['4', '18', '9', '11', '25']] },
            { text: 'After pass 2: 4, 9, 11, 18, 25', accept: [['4', '9', '11', '18', '25']] },
            { text: 'Shows individual comparisons or swaps as working.', accept: [['compare'], ['swap'], ['working']] },
            { text: 'The largest value moves to the end after each pass.', accept: [['largest'], ['biggest'], ['end'], ['bubble']] },
            { text: 'States that the list is sorted when a pass makes no swaps.', accept: [['no swaps'], ['no changes'], ['sorted']] },
          ],
          modelAnswer:
            'Pass 1: compare 18 and 4, swap to give 4, 18, 25, 9, 11. Compare 18 and 25, no swap. Compare 25 and 9, swap to give 4, 18, 9, 25, 11. Compare 25 and 11, swap to give 4, 18, 9, 11, 25. Pass 2: compare 4 and 18, no swap. Compare 18 and 9, swap to give 4, 9, 18, 11, 25. Compare 18 and 11, swap to give 4, 9, 11, 18, 25. Pass 3 makes no swaps at all, so the list is sorted: 4, 9, 11, 18, 25.',
        },
        {
          kind: 'written',
          id: 'p2-1-10',
          marks: 6,
          stem: 'Compare a linear search with a binary search, explaining when each should be used.',
          markScheme: [
            { text: 'Linear search checks each item in turn from the start.', accept: [['each item'], ['one at a time'], ['start'], ['in turn']] },
            { text: 'Binary search checks the middle item of a sorted list.', accept: [['middle'], ['midpoint'], ['centre']] },
            { text: 'Binary search discards half the remaining items each time.', accept: [['half'], ['discard'], ['throw away'], ['eliminate']] },
            { text: 'Linear works on unsorted data and is simple to write.', accept: [['unsorted'], ['any order'], ['simple'], ['does not need to be sorted']] },
            { text: 'Binary is far faster on large lists.', accept: [['faster'], ['quicker'], ['fewer checks'], ['efficient']] },
            { text: 'Use linear on small or unsorted lists, binary on large sorted lists.', accept: [['small'], ['large'], ['sorted', 'binary'], ['use']] },
          ],
          modelAnswer:
            'A linear search begins at the first item and compares each one in turn until it finds a match or reaches the end. A binary search looks at the middle item of a sorted list and, if that is not the target, discards the middle item and the whole half that cannot contain it, repeating on what is left. Linear search is much slower on large data, needing up to 1000 checks on a list of 1000 items where binary needs at most about 10, but it has two real advantages: it works on data in any order, and it is very simple to write and to get right. Binary search should therefore be used on large lists that are already sorted, while linear search is the better choice for small lists or any list that is unsorted, since sorting it first could cost more time than the search saves.',
        },
        {
          kind: 'written',
          id: 'p2-1-11',
          marks: 4,
          context: 'x = 2\ncount = 0\nwhile x < 40:\n    x = x * 3\n    count = count + 1\nprint(x, count)',
          stem: 'Complete a trace table for this algorithm and state the final output.',
          markScheme: [
            { text: 'First iteration: x = 6, count = 1.', accept: [['6', '1']] },
            { text: 'Second iteration: x = 18, count = 2.', accept: [['18', '2']] },
            { text: 'Third iteration: x = 54, count = 3.', accept: [['54', '3']] },
            { text: 'Final output is 54 and 3, because 54 is not less than 40 so the loop stops.', accept: [['54', '3'], ['stops'], ['condition', 'false']] },
          ],
          modelAnswer:
            'x starts at 2 and count at 0. The condition 2 < 40 is true, so x becomes 6 and count becomes 1. The condition 6 < 40 is true, so x becomes 18 and count becomes 2. The condition 18 < 40 is true, so x becomes 54 and count becomes 3. Now 54 < 40 is false, so the loop ends. The output is 54 and 3.',
        },
        {
          kind: 'written',
          id: 'p2-1-12',
          marks: 5,
          context: 'A greenhouse fan should switch on when the temperature sensor is high AND the door sensor shows the door is NOT open.',
          stem: 'Write a Boolean expression for this system and draw the truth table for it.',
          markScheme: [
            { text: 'Uses AND between the two conditions.', accept: [['and']] },
            { text: 'Applies NOT to the door input.', accept: [['not']] },
            { text: 'Correct expression, for example Q = temp AND NOT door.', accept: [['not door'], ['and not'], ['temp and not']] },
            { text: 'Truth table has four rows for two inputs.', accept: [['4 rows'], ['four rows'], ['0 0'], ['1 1']] },
            { text: 'Q is 1 only when temp is 1 and door is 0.', accept: [['1', '0', '1'], ['only', 'temp'], ['1 0 1']] },
          ],
          modelAnswer:
            'Q = temp AND (NOT door)\n\ntemp | door | NOT door | Q\n 0   |  0   |    1     | 0\n 0   |  1   |    0     | 0\n 1   |  0   |    1     | 1\n 1   |  1   |    0     | 0\n\nThe fan only runs on the third row, where the temperature is high and the door is closed. Adding the NOT door column first makes the final column straightforward.',
        },
        {
          kind: 'written',
          id: 'p2-1-13',
          marks: 4,
          context: 'A program is being written to run a school sports day, recording each pupil name, event and result, and printing the winners.',
          stem: 'Describe how decomposition would be used when designing this program.',
          markScheme: [
            { text: 'Decomposition means breaking the problem into smaller sub problems.', accept: [['break'], ['smaller'], ['split'], ['sub problem'], ['parts']] },
            { text: 'Each sub problem can be solved and tested on its own.', accept: [['on its own'], ['separately'], ['individually'], ['tested']] },
            { text: 'Sensible sub problems are named, for example input, validate, store, sort, output.', accept: [['input'], ['store'], ['sort'], ['output'], ['validate'], ['record']] },
            { text: 'The solved parts are then combined into the finished program.', accept: [['combine'], ['join'], ['together'], ['put back'], ['whole']] },
          ],
          modelAnswer:
            'Decomposition means breaking the large problem into smaller sub problems that can each be solved on their own. Here the program would be split into: getting the pupil name and event from the user, validating that the event is one of the allowed list and the result is a sensible number, storing each record in an array or file, sorting the results for an event into order, finding the best result, and finally printing the winners. Each of those pieces is small enough to write and test as its own subprogram, and once they all work correctly they are combined into the finished program.',
        },
        {
          kind: 'written',
          id: 'p2-1-14',
          marks: 5,
          stem: 'Explain how merge sort works and give one advantage and one disadvantage compared with bubble sort.',
          markScheme: [
            { text: 'The list is repeatedly split in half.', accept: [['split'], ['divide'], ['half']] },
            { text: 'Splitting continues until every piece contains one item.', accept: [['one item'], ['single'], ['individual']] },
            { text: 'Pairs are merged back together by taking the smaller front item each time.', accept: [['merge'], ['smaller'], ['compare', 'front'], ['back together']] },
            { text: 'Advantage: much faster on large lists.', accept: [['faster'], ['efficient'], ['quicker'], ['large']] },
            { text: 'Disadvantage: needs more memory and is harder to program.', accept: [['memory'], ['harder'], ['complex'], ['space'], ['difficult']] },
          ],
          modelAnswer:
            'Merge sort splits the list in half, then splits each half again, and keeps going until every piece contains just one item, which is automatically in order. It then merges pieces back together in pairs, each time comparing the item at the front of each piece and taking whichever is smaller, until a single sorted list remains. The advantage over bubble sort is speed: because the work halves at each level, merge sort handles large lists far more efficiently, where bubble sort has to make an enormous number of comparisons. The disadvantage is that merge sort needs extra memory to hold the temporary sub lists while it merges them, and the algorithm is considerably harder to program correctly than bubble sort.',
        },
        {
          kind: 'written',
          id: 'p2-1-15',
          marks: 6,
          stem: 'A logic circuit is described by Q = (A OR B) AND NOT C. Complete the full truth table and state how many rows are needed and why.',
          markScheme: [
            { text: 'States eight rows are needed.', accept: [['8'], ['eight']] },
            { text: 'Explains that three inputs give 2 x 2 x 2 combinations.', accept: [['2 x 2 x 2'], ['2^3'], ['three inputs'], ['two values']] },
            { text: 'Includes an intermediate column for A OR B.', accept: [['a or b'], ['or column'], ['intermediate']] },
            { text: 'Includes an intermediate column for NOT C.', accept: [['not c']] },
            { text: 'Q is 1 when at least one of A or B is 1 and C is 0.', accept: [['c is 0'], ['not c', '1'], ['at least one']] },
            { text: 'Q is 1 on exactly three rows.', accept: [['three rows'], ['3 rows'], ['three times']] },
          ],
          modelAnswer:
            'Eight rows are needed, because each of the three inputs can be 0 or 1, giving 2 x 2 x 2 = 8 possible combinations, and a complete truth table must include every one.\n\nA B C | A OR B | NOT C | Q\n0 0 0 |   0    |   1   | 0\n0 0 1 |   0    |   0   | 0\n0 1 0 |   1    |   1   | 1\n0 1 1 |   1    |   0   | 0\n1 0 0 |   1    |   1   | 1\n1 0 1 |   1    |   0   | 0\n1 1 0 |   1    |   1   | 1\n1 1 1 |   1    |   0   | 0\n\nQ is 1 on exactly three rows, whenever at least one of A or B is 1 and C is 0.',
        },
        {
          kind: 'written',
          id: 'p2-1-16',
          marks: 4,
          stem: 'Explain what a trace table is and why it is useful when finding errors in an algorithm.',
          markScheme: [
            { text: 'A trace table records the value of each variable as the algorithm runs.', accept: [['value'], ['variable'], ['record'], ['each line']] },
            { text: 'It has a column for every variable and every output.', accept: [['column'], ['output'], ['heading']] },
            { text: 'It lets you follow the algorithm by hand without running it.', accept: [['by hand'], ['without running'], ['manually'], ['on paper']] },
            { text: 'It reveals logic errors such as loops that run the wrong number of times.', accept: [['logic error'], ['loop'], ['wrong'], ['off by one'], ['find']] },
          ],
          modelAnswer:
            'A trace table is a table with a column for every variable in an algorithm and a column for anything that is output. You work through the algorithm one line at a time, writing down the new value of any variable that changes and any value that is printed. It is useful because it lets you follow exactly what an algorithm does by hand, without needing a computer, so you can see where the values stop matching what you expected. That makes it particularly good at finding logic errors, such as a loop running one time too many or a condition using greater than where it should use greater than or equal to, which are the errors a computer will not warn you about.',
        },
      ],
    },
  ],
};
