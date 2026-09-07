import type { Topic } from '../../types';

export const t2_1: Topic = {
  id: 't2-1',
  code: '2.1',
  title: 'Algorithms',
  blurb: 'Computational thinking, flowcharts, pseudocode, trace tables, searching and sorting.',
  paper: 'Paper 2',
  icon: 'brain',
  lessons: [
    {
      id: 't2-1-l1',
      title: 'Computational thinking',
      minutes: 8,
      blocks: [
        { t: 'p', text: 'Computational thinking is the way you break a problem down so a computer can solve it. Three principles are named in the specification.' },
        { t: 'diagram', id: 'abstraction-decomposition' },
        {
          t: 'key',
          terms: [
            { term: 'Abstraction', def: 'Removing unnecessary detail so you can focus on what matters. A tube map shows connections, not real distances.' },
            { term: 'Decomposition', def: 'Breaking a large problem into smaller sub problems that can be solved one at a time.' },
            { term: 'Algorithmic thinking', def: 'Working out the exact sequence of steps needed, so the same steps always solve the same type of problem.' },
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: writing a quiz app',
          body: [
            'Decomposition: split it into loading the questions, showing one question, checking the answer, keeping the score, and showing the final result. Each of those is small enough to write on its own.',
            'Abstraction: when checking an answer, you do not care what colour the button was, or what font was used. You only need the answer given and the correct answer.',
            'Algorithmic thinking: the steps to mark an answer are the same every time, so you write them once as a subroutine and call it for every question.',
          ],
        },
        {
          t: 'tip',
          body: [
            'A common exam question shows a scenario and asks "identify two examples of abstraction in this design". Look for detail that has been deliberately ignored because it does not affect the result.',
          ],
        },
      ],
    },
    {
      id: 't2-1-l2',
      title: 'Flowcharts, pseudocode and trace tables',
      minutes: 11,
      blocks: [
        { t: 'p', text: 'There are three ways to describe an algorithm before you write real code. You need to be able to read all three and write in at least two.' },
        { t: 'diagram', id: 'flowchart-symbols' },
        {
          t: 'example',
          title: 'The same algorithm three ways',
          body: [
            'Problem: ask for a mark out of 100 and print pass if it is 40 or more.',
            'In words: get the mark, compare it with 40, print pass or fail.',
          ],
        },
        { t: 'code', lang: 'erl', caption: 'OCR Exam Reference Language', code: 'mark = input("Enter mark: ")\nif mark >= 40 then\n  print("Pass")\nelse\n  print("Fail")\nendif' },
        { t: 'code', lang: 'python', caption: 'Python', code: 'mark = int(input("Enter mark: "))\nif mark >= 40:\n    print("Pass")\nelse:\n    print("Fail")' },
        { t: 'h', text: 'Trace tables' },
        { t: 'p', text: 'A trace table is how you prove what a program does without running it. You draw a column for every variable and every output, then fill in one row each time a value changes.' },
        {
          t: 'example',
          title: 'Worked trace table',
          body: [
            'total = 0, then for i from 1 to 4: total = total + i',
            'Row 1: i = 1, total = 1',
            'Row 2: i = 2, total = 3',
            'Row 3: i = 3, total = 6',
            'Row 4: i = 4, total = 10',
            'The final output is 10. Notice that every row records the value AFTER the line has run.',
          ],
        },
        { t: 'demo', id: 'trace-table', caption: 'Fill in three trace tables and have them marked instantly.' },
        {
          t: 'warn',
          body: [
            'The most common trace table mistake is forgetting that a loop condition is checked before the loop body runs. If the condition is false at the start, the loop body never executes at all.',
          ],
        },
      ],
    },
    {
      id: 't2-1-l3',
      title: 'Searching algorithms',
      minutes: 9,
      blocks: [
        { t: 'diagram', id: 'linear-vs-binary' },
        { t: 'h', text: 'Linear search' },
        {
          t: 'ol',
          items: [
            'Start at the first item in the list.',
            'Compare it with the item you are looking for.',
            'If it matches, stop and report the position.',
            'If not, move to the next item.',
            'If you reach the end without a match, report that the item is not there.',
          ],
        },
        { t: 'p', text: 'Linear search works on any list, sorted or not. It is simple but slow, because in the worst case every single item has to be checked.' },
        { t: 'h', text: 'Binary search' },
        {
          t: 'ol',
          items: [
            'The list must already be sorted.',
            'Find the middle item.',
            'If it is the one you want, stop.',
            'If the middle item is too big, throw away the middle and everything to the right.',
            'If the middle item is too small, throw away the middle and everything to the left.',
            'Repeat with the half that is left until the item is found or nothing remains.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: finding a name in a register',
          body: [
            'Linear search is reading every name from the top until you find Zara. On a list of 30 that is fine. On a list of 30000 it is painful.',
            'Binary search is what you actually do with a dictionary. You open the middle, see you are in the M section, and instantly ignore half the book.',
            'Binary search on 1000 items needs at most 10 checks. Linear search needs up to 1000.',
          ],
        },
        { t: 'demo', id: 'algorithms', caption: 'Watch both searches run step by step, then compare the sorts.' },
        {
          t: 'table',
          head: ['', 'Linear search', 'Binary search'],
          rows: [
            ['List must be sorted?', 'No', 'Yes'],
            ['Speed on large lists', 'Slow', 'Very fast'],
            ['Complexity to write', 'Very simple', 'More complex'],
            ['Worst case on 1000 items', '1000 checks', '10 checks'],
          ],
        },
      ],
    },
    {
      id: 't2-1-l4',
      title: 'Sorting algorithms',
      minutes: 11,
      blocks: [
        { t: 'h', text: 'Bubble sort' },
        { t: 'p', text: 'Bubble sort compares each pair of neighbours and swaps them if they are in the wrong order. After each complete pass, the largest remaining value has moved to its final position at the end. The list is sorted when a whole pass happens with no swaps.' },
        { t: 'diagram', id: 'bubble-sort-pass' },
        { t: 'h', text: 'Insertion sort' },
        { t: 'p', text: 'Insertion sort builds a sorted section on the left. It takes the next item, moves back through the sorted section shifting larger items right, and drops the item into the gap. It is exactly what people do when sorting a hand of cards.' },
        { t: 'h', text: 'Merge sort' },
        { t: 'p', text: 'Merge sort splits the list in half again and again until every piece contains just one item, which is automatically sorted. Then it merges pairs back together, each time taking whichever front item is smaller, until one sorted list remains.' },
        { t: 'diagram', id: 'merge-sort-tree' },
        { t: 'demo', id: 'algorithms', caption: 'Step through all three sorts on the same list and count the moves.' },
        {
          t: 'table',
          head: ['', 'Bubble', 'Insertion', 'Merge'],
          rows: [
            ['How hard to write', 'Easiest', 'Fairly easy', 'Hardest'],
            ['Speed on large lists', 'Slowest', 'Slow', 'Much faster'],
            ['Extra memory needed', 'Almost none', 'Almost none', 'Needs space for the sub lists'],
            ['Good when', 'Lists are tiny or nearly sorted', 'Items arrive one at a time', 'Lists are large'],
          ],
        },
        {
          t: 'tip',
          body: [
            'Exam questions often give a list and ask you to show it after one pass of a named sort. Read carefully whether they want one pass or the finished list, and write out the list after each swap so the examiner can follow your working.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't2-1-q1',
      title: 'Quiz 1: Computational thinking and algorithms',
      questions: [
        { q: 'What is abstraction?', options: ['Breaking a problem into smaller parts', 'Removing unnecessary detail to focus on what matters', 'Writing code in a high level language', 'Testing a program with invalid data'], answer: 1, why: 'Abstraction hides detail that does not affect the solution, like a tube map ignoring real distances.' },
        { q: 'What is decomposition?', options: ['Deleting old code', 'Breaking a large problem into smaller sub problems', 'Converting binary to denary', 'Sorting data into order'], answer: 1, why: 'Decomposition splits a big problem into pieces small enough to solve individually.' },
        { q: 'Which flowchart symbol is a diamond?', options: ['Process', 'Decision', 'Input or output', 'Start or stop'], answer: 1, why: 'A diamond asks a question and has a yes branch and a no branch.' },
        { q: 'Which flowchart symbol is a parallelogram?', options: ['Decision', 'Input or output', 'Process', 'Terminal'], answer: 1, why: 'A parallelogram is used for input and output such as reading a value or printing a message.' },
        { q: 'What is the purpose of a trace table?', options: ['To design the user interface', 'To record how variables change so you can check an algorithm works', 'To compress a program', 'To translate code into machine code'], answer: 1, why: 'A trace table follows the values of variables line by line to find logic errors.' },
        { q: 'total = 0. For i = 1 to 3, total = total + i. What is total at the end?', options: ['3', '6', '9', '1'], answer: 1, why: '1 + 2 + 3 = 6.' },
        { q: 'x = 10. While x > 4: x = x - 3. How many times does the loop run?', options: ['1', '2', '3', '4'], answer: 1, why: 'x becomes 7 then 4. Once x is 4 the condition x > 4 is false, so the loop ran twice.' },
        { q: 'Which is an example of algorithmic thinking?', options: ['Ignoring the colour of a button', 'Splitting an app into separate screens', 'Writing the exact ordered steps needed to mark a quiz', 'Buying a faster computer'], answer: 2, why: 'Algorithmic thinking is defining the precise sequence of steps to solve the problem.' },
        { q: 'In pseudocode, what does the term iteration mean?', options: ['Making a decision', 'Repeating a section of code', 'Storing a value', 'Calling a subroutine'], answer: 1, why: 'Iteration means repetition, using loops such as for and while.' },
        { q: 'Which symbol shape is used for start and stop in a flowchart?', options: ['Diamond', 'Rectangle', 'Rounded rectangle', 'Parallelogram'], answer: 2, why: 'Terminals at the start and end of a flowchart are drawn as rounded boxes.' },
      ],
    },
    {
      id: 't2-1-q2',
      title: 'Quiz 2: Searching and sorting',
      questions: [
        { q: 'Which condition must be true before a binary search can be used?', options: ['The list must be numeric', 'The list must be sorted', 'The list must be short', 'The list must contain no duplicates'], answer: 1, why: 'Binary search relies on discarding half the list, which only works if it is in order.' },
        { q: 'What is the maximum number of checks a binary search needs on a sorted list of 16 items?', options: ['4', '8', '16', '2'], answer: 0, why: '16 halves to 8, then 4, then 2, then 1, so at most 4 checks are needed.' },
        { q: 'How does bubble sort know the list is sorted?', options: ['When the first item is smallest', 'When a full pass happens with no swaps', 'After exactly n passes', 'When the list is empty'], answer: 1, why: 'If nothing needed swapping during a whole pass, everything must already be in order.' },
        { q: 'Which sort splits the list into single items and then merges them back together?', options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'Linear sort'], answer: 2, why: 'Merge sort divides until pieces contain one item, then merges them in order.' },
        { q: 'Which sorting algorithm works the way most people sort a hand of playing cards?', options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'Binary sort'], answer: 1, why: 'You take each new card and slide it into the right place among the ones you hold.' },
        { q: 'Sort 5, 1, 4 using bubble sort. What is the list after one complete pass?', options: ['1, 4, 5', '1, 5, 4', '4, 1, 5', '5, 4, 1'], answer: 0, why: 'Compare 5 and 1 and swap, giving 1, 5, 4. Then compare 5 and 4 and swap, giving 1, 4, 5.' },
        { q: 'Which search can be used on an unsorted list?', options: ['Binary search', 'Linear search', 'Merge search', 'Neither'], answer: 1, why: 'Linear search simply checks each item in turn, so order does not matter.' },
        { q: 'Which is the main disadvantage of bubble sort?', options: ['It needs a lot of memory', 'It is very slow on large lists', 'It only works on numbers', 'It cannot be written in Python'], answer: 1, why: 'Bubble sort makes very many comparisons, so it scales badly.' },
        { q: 'Which sorting algorithm is generally fastest on a large list?', options: ['Bubble sort', 'Insertion sort', 'Merge sort', 'They are all equal'], answer: 2, why: 'Merge sort divides the work in half repeatedly, which is far more efficient on big lists.' },
        { q: 'What is the disadvantage of merge sort compared with bubble sort?', options: ['It is slower', 'It needs extra memory for the sub lists and is harder to program', 'It only works on sorted data', 'It cannot sort text'], answer: 1, why: 'Merge sort creates temporary lists, so it uses more memory, and the code is more complex.' },
      ],
    },
  ],
  exam: [
    {
      id: 't2-1-e1',
      context: 'A list contains: 12, 3, 19, 7, 15',
      stem: 'Show the contents of the list after each complete pass of a bubble sort until the list is sorted.',
      marks: 4,
      markScheme: [
        { text: 'After pass 1: 3, 12, 7, 15, 19', accept: [['3', '12', '7', '15', '19']] },
        { text: 'After pass 2: 3, 7, 12, 15, 19', accept: [['3', '7', '12', '15', '19']] },
        { text: 'The largest value moves to the end after each pass.', accept: [['largest'], ['biggest'], ['end'], ['bubbles']] },
        { text: 'Sorting is complete when a pass makes no swaps.', accept: [['no swaps'], ['no changes'], ['nothing swapped'], ['sorted']] },
      ],
      modelAnswer:
        'Pass 1: compare 12 and 3, swap to give 3, 12, 19, 7, 15. Compare 12 and 19, no swap. Compare 19 and 7, swap to give 3, 12, 7, 19, 15. Compare 19 and 15, swap to give 3, 12, 7, 15, 19. Pass 2: compare 3 and 12, no swap. Compare 12 and 7, swap to give 3, 7, 12, 15, 19. Compare 12 and 15, no swap. Pass 3 makes no swaps at all, so the list is sorted: 3, 7, 12, 15, 19.',
      examinerTip: 'Write the whole list after every swap. Examiners award marks for the working, not only the final answer.',
    },
    {
      id: 't2-1-e2',
      stem: 'Explain the difference between a linear search and a binary search, and state one advantage of each.',
      marks: 5,
      markScheme: [
        { text: 'Linear search checks each item in turn from the start.', accept: [['each item'], ['one at a time'], ['start'], ['every item'], ['in turn']] },
        { text: 'Binary search checks the middle item.', accept: [['middle'], ['midpoint'], ['centre']] },
        { text: 'Binary search discards half the remaining list each time.', accept: [['half'], ['discard'], ['throw away'], ['eliminat']] },
        { text: 'Advantage of linear: it works on unsorted lists and is simple to write.', accept: [['unsorted'], ['does not need to be sorted'], ['simple'], ['any order']] },
        { text: 'Advantage of binary: it is much faster on large lists.', accept: [['faster'], ['fewer checks'], ['quicker'], ['efficient']] },
      ],
      modelAnswer:
        'A linear search starts at the first item and compares each item in turn with the one being searched for, moving one place at a time until it finds a match or reaches the end of the list. A binary search instead looks at the middle item of a sorted list, and if that is not the target it discards the middle item and the whole half that cannot contain the target, repeating on the half that is left. The advantage of linear search is that it works on a list in any order and it is very simple to write. The advantage of binary search is that it is dramatically faster on large lists, because halving the list each time means a list of 1000 items needs at most about 10 checks instead of 1000.',
    },
    {
      id: 't2-1-e3',
      context: 'A program is being written to work out the average of a set of exam marks entered by a teacher.',
      stem: 'Describe how decomposition and abstraction would be used when designing this program.',
      marks: 4,
      markScheme: [
        { text: 'Decomposition: the problem is broken into smaller sub problems.', accept: [['break'], ['split'], ['smaller'], ['sub problem'], ['parts']] },
        { text: 'Example sub problems: input the marks, validate them, total them, divide by the count, display the result.', accept: [['input'], ['total'], ['divide'], ['display'], ['validate'], ['count']] },
        { text: 'Abstraction: unnecessary details are ignored.', accept: [['ignore'], ['remove'], ['unnecessary'], ['not needed'], ['irrelevant']] },
        { text: 'Example: student names, subject or the layout of the screen are not needed to calculate an average.', accept: [['name'], ['subject'], ['colour'], ['layout'], ['only the marks'], ['just the numbers']] },
      ],
      modelAnswer:
        'Decomposition would be used to break the problem into smaller sub problems that can be solved separately: getting the marks from the teacher, validating that each one is between 0 and 100, adding them into a running total, counting how many there are, dividing the total by the count, and displaying the result. Each of those is small enough to write and test on its own. Abstraction would be used to ignore details that do not affect the calculation. The average does not depend on the students names, the subject, the date of the exam or what colour the screen is, so those are left out of the model entirely and only the numeric marks are stored.',
    },
    {
      id: 't2-1-e4',
      context: 'x = 3\nwhile x < 20:\n    x = x * 2\n    print(x)',
      stem: 'Complete a trace table for this algorithm and state the final output.',
      marks: 4,
      markScheme: [
        { text: 'First iteration: x = 6, output 6.', accept: [['6']] },
        { text: 'Second iteration: x = 12, output 12.', accept: [['12']] },
        { text: 'Third iteration: x = 24, output 24.', accept: [['24']] },
        { text: 'The loop then stops because 24 is not less than 20, so the last output is 24.', accept: [['stops'], ['condition'], ['false'], ['not less than'], ['ends']] },
      ],
      modelAnswer:
        'Start with x = 3. The condition 3 < 20 is true, so x becomes 6 and 6 is printed. The condition 6 < 20 is true, so x becomes 12 and 12 is printed. The condition 12 < 20 is true, so x becomes 24 and 24 is printed. The condition is now checked again: 24 < 20 is false, so the loop ends. The outputs in order are 6, 12 and 24, so the final output is 24.',
    },
    {
      id: 't2-1-e5',
      stem: 'A programmer must choose between merge sort and bubble sort for sorting a list of 50000 customer records. Recommend one and justify your choice.',
      marks: 4,
      markScheme: [
        { text: 'Recommends merge sort.', accept: [['merge']] },
        { text: 'Merge sort is far more efficient on large data sets.', accept: [['efficient'], ['faster'], ['quicker'], ['fewer comparisons']] },
        { text: 'Bubble sort would need an enormous number of comparisons on 50000 items.', accept: [['comparison'], ['slow'], ['too long'], ['50000'], ['many passes']] },
        { text: 'Acknowledges a drawback of merge sort: it uses more memory and is harder to program.', accept: [['memory'], ['harder'], ['complex'], ['more difficult'], ['space']] },
      ],
      modelAnswer:
        'Merge sort should be used. With 50000 records, bubble sort would need to make an enormous number of comparisons, because in the worst case it compares almost every pair of items, so the program could take minutes or longer to finish. Merge sort repeatedly halves the list, so the number of operations grows far more slowly and it would complete in a fraction of the time. The trade off is that merge sort needs extra memory to hold the temporary sub lists while it merges them, and it is harder to program correctly than bubble sort, but for a data set this large the speed advantage clearly outweighs both drawbacks.',
    },
  ],
};
