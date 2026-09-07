import type { Topic } from '../../types';

export const erlUnit: Topic = {
  id: 'erl',
  code: 'ERL',
  title: 'OCR Exam Reference Language',
  blurb: 'The pseudocode style used in OCR exam papers, side by side with Python, with drills.',
  paper: 'Skills',
  icon: '📘',
  lessons: [
    {
      id: 'erl-l1',
      title: 'What ERL is and why it exists',
      minutes: 6,
      blocks: [
        { t: 'p', text: 'OCR Exam Reference Language, usually shortened to ERL, is the pseudocode style that appears in OCR exam papers. It is not a real language you can run on a computer.' },
        { t: 'p', text: 'It exists so that exam questions do not favour students who happened to learn one particular language. Everyone reads the same code, whether their school teaches Python, Java or C sharp.' },
        {
          t: 'tip',
          body: [
            'In the exam you may answer programming questions in ERL or in a high level language you know. Marks are given for correct logic, not for perfect syntax, so choose whichever you can write most accurately under pressure.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: reading an exam paper',
          body: [
            'A question shows a program written in ERL and asks what value is printed. You do not have to write ERL to answer it, but you must be able to read it fluently.',
            'That is why this unit exists. Learn to read it first, then learn to write it.',
          ],
        },
      ],
    },
    {
      id: 'erl-l2',
      title: 'The full translation table',
      minutes: 12,
      blocks: [
        { t: 'h', text: 'Variables, input and output' },
        {
          t: 'table',
          head: ['Job', 'ERL', 'Python'],
          rows: [
            ['Assign a value', 'x = 5', 'x = 5'],
            ['Global variable', 'global x = 5', 'x = 5 outside a function'],
            ['Constant', 'const PI = 3.14', 'PI = 3.14'],
            ['Output', 'print("Hi")', 'print("Hi")'],
            ['Input', 'name = input("Name: ")', 'name = input("Name: ")'],
            ['Cast to integer', 'int("5")', 'int("5")'],
            ['Cast to string', 'str(5)', 'str(5)'],
            ['Cast to real', 'float("2.5")', 'float("2.5")'],
          ],
        },
        { t: 'h', text: 'Selection' },
        { t: 'code', lang: 'erl', caption: 'ERL', code: 'if score > 50 then\n  print("Pass")\nelseif score > 30 then\n  print("Near miss")\nelse\n  print("Fail")\nendif' },
        { t: 'code', lang: 'python', caption: 'The same thing in Python', code: 'if score > 50:\n    print("Pass")\nelif score > 30:\n    print("Near miss")\nelse:\n    print("Fail")' },
        { t: 'p', text: 'ERL also has a switch statement, which Python does not use in the same way.' },
        { t: 'code', lang: 'erl', code: 'switch day:\n  case "Sat":\n    print("Weekend")\n  case "Sun":\n    print("Weekend")\n  default:\n    print("Weekday")\nendswitch' },
        { t: 'h', text: 'Iteration' },
        {
          t: 'table',
          head: ['Loop type', 'ERL', 'Python'],
          rows: [
            ['Count controlled', 'for i = 0 to 7 ... next i', 'for i in range(0, 8):'],
            ['With a step', 'for i = 2 to 10 step 2 ... next i', 'for i in range(2, 11, 2):'],
            ['Condition at the start', 'while x < 5 ... endwhile', 'while x < 5:'],
            ['Condition at the end', 'do ... until x == 5', 'no direct match, use while True with a break'],
          ],
        },
        {
          t: 'warn',
          body: [
            'This is the single most important difference to remember. In ERL, for i = 0 to 7 INCLUDES 7, so it runs eight times. In Python, range(0, 7) STOPS BEFORE 7, so it runs seven times.',
            'Getting this wrong turns a correct answer into an off by one error.',
          ],
        },
        { t: 'h', text: 'String handling' },
        {
          t: 'table',
          head: ['Job', 'ERL', 'Python'],
          rows: [
            ['Length', 'name.length', 'len(name)'],
            ['Upper case', 'name.upper', 'name.upper()'],
            ['Lower case', 'name.lower', 'name.lower()'],
            ['Part of a string', 'name.substring(2, 3)', 'name[2:5]'],
            ['From the left', 'name.left(3)', 'name[0:3]'],
            ['From the right', 'name.right(3)', 'name[-3:]'],
            ['Join strings', 'a + b', 'a + b'],
            ['ASCII code', 'ASC("A")', 'ord("A")'],
            ['Character from code', 'CHR(65)', 'chr(65)'],
          ],
        },
        {
          t: 'warn',
          body: [
            'ERL substring takes a start position and a NUMBER OF CHARACTERS. Python slicing takes a start and an END position. name.substring(2, 3) means three characters starting at index 2, which is name[2:5] in Python.',
          ],
        },
        { t: 'h', text: 'Arrays' },
        { t: 'code', lang: 'erl', code: 'array names[5]\nnames[0] = "Aisha"\nnames[1] = "Tom"\nprint(names[0])\n\narray grid[3,3]\ngrid[1,2] = 7\nprint(grid[1,2])' },
        { t: 'code', lang: 'python', code: 'names = ["", "", "", "", ""]\nnames[0] = "Aisha"\nnames[1] = "Tom"\nprint(names[0])\n\ngrid = [[0,0,0],[0,0,0],[0,0,0]]\ngrid[1][2] = 7\nprint(grid[1][2])' },
        { t: 'h', text: 'Subprograms' },
        { t: 'code', lang: 'erl', code: 'function triple(number)\n  return number * 3\nendfunction\n\nprocedure greet(name)\n  print("Hello " + name)\nendprocedure\n\nx = triple(4)\ngreet("Byte")' },
        { t: 'h', text: 'File handling' },
        { t: 'code', lang: 'erl', code: 'myFile = open("data.txt")\nwhile NOT myFile.endOfFile()\n  print(myFile.readLine())\nendwhile\nmyFile.close()\n\nmyFile = open("data.txt")\nmyFile.writeLine("New record")\nmyFile.close()' },
        { t: 'h', text: 'Operators' },
        {
          t: 'table',
          head: ['Meaning', 'ERL', 'Python'],
          rows: [
            ['Integer division', 'DIV', '//'],
            ['Remainder', 'MOD', '%'],
            ['Power', '^', '**'],
            ['Equal to', '==', '=='],
            ['Not equal to', '!=', '!='],
            ['And', 'AND', 'and'],
            ['Or', 'OR', 'or'],
            ['Not', 'NOT', 'not'],
          ],
        },
      ],
    },
    {
      id: 'erl-l3',
      title: 'Reading ERL under exam conditions',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Exam questions give you ERL and ask what it does, what it outputs, or ask you to fix it. Here is a method that works every time.' },
        {
          t: 'ol',
          items: [
            'Find every variable and write it as a column heading, exactly like a trace table.',
            'Work through the code one line at a time, in order.',
            'After each line that changes a value, write the new value in the table.',
            'When you meet a loop, check the condition BEFORE running the body, and remember that ERL for loops include the final value.',
            'Write down every output as it happens, in a separate column.',
          ],
        },
        { t: 'code', lang: 'erl', caption: 'Worked example', code: 'total = 0\nfor i = 1 to 4\n  if i MOD 2 == 0 then\n    total = total + i\n  endif\nnext i\nprint(total)' },
        {
          t: 'example',
          title: 'The trace',
          body: [
            'i = 1: 1 MOD 2 is 1, not equal to 0, so total stays 0.',
            'i = 2: 2 MOD 2 is 0, so total becomes 0 + 2 = 2.',
            'i = 3: 3 MOD 2 is 1, so total stays 2.',
            'i = 4: 4 MOD 2 is 0, so total becomes 2 + 4 = 6.',
            'The loop ends because 4 was the last value. The output is 6.',
            'This program adds up the even numbers from 1 to 4.',
          ],
        },
        { t: 'demo', id: 'erl-drill', caption: 'Practise reading ERL and predicting the output.' },
        {
          t: 'code',
          lang: 'erl',
          caption: 'A longer example: linear search in ERL',
          code: 'array names[5]\nnames[0] = "Aisha"\nnames[1] = "Tom"\nnames[2] = "Priya"\nnames[3] = "Leo"\nnames[4] = "Zara"\n\nsearchFor = input("Who are you looking for? ")\nfound = false\nposition = -1\n\nfor i = 0 to 4\n  if names[i] == searchFor then\n    found = true\n    position = i\n  endif\nnext i\n\nif found == true then\n  print(searchFor + " is at index " + str(position))\nelse\n  print("Not found")\nendif',
        },
        {
          t: 'tip',
          body: [
            'When a question asks you to write a program, you may use ERL or a real language. Whichever you choose, indent clearly, use meaningful variable names, and close every if with endif and every loop with next or endwhile. Examiners follow your logic, and clear layout makes that easy.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 'erl-q1',
      title: 'Quiz 1: ERL syntax',
      questions: [
        { q: 'How many times does "for i = 0 to 5" run in ERL?', options: ['5', '6', '4', '0'], answer: 1, why: 'ERL includes the final value, so i takes the values 0, 1, 2, 3, 4 and 5, which is six times.' },
        { q: 'What is the ERL equivalent of Python len(name)?', options: ['name.size', 'name.length', 'length(name)', 'name.count'], answer: 1, why: 'ERL uses the property name.length.' },
        { q: 'Which keyword ends an if statement in ERL?', options: ['end', 'endif', 'fi', 'stop'], answer: 1, why: 'ERL closes selection with endif.' },
        { q: 'What does MOD do in ERL?', options: ['Whole number division', 'Gives the remainder', 'Raises to a power', 'Rounds a number'], answer: 1, why: 'MOD gives the remainder, and DIV gives the whole number part.' },
        { q: 'Which is the correct ERL for a function?', options: ['def triple(n)', 'function triple(n) ... endfunction', 'sub triple(n)', 'method triple(n)'], answer: 1, why: 'ERL uses function and endfunction, or procedure and endprocedure.' },
        { q: 'What does name.substring(1, 3) return if name = "Dungeon"?', options: ['Dun', 'ung', 'ung e', 'unge'], answer: 1, why: 'It takes three characters starting at index 1, giving u, n and g.' },
        { q: 'Which ERL loop always runs its body at least once?', options: ['while', 'for', 'do until', 'if'], answer: 2, why: 'A do until loop tests its condition at the end, so the body has already run once.' },
        { q: 'What is the ERL operator for integer division?', options: ['//', 'DIV', 'MOD', '/'], answer: 1, why: 'DIV in ERL matches // in Python.' },
        { q: 'How do you declare an array of 10 items in ERL?', options: ['array items = 10', 'array items[10]', 'items = array(10)', 'new array items 10'], answer: 1, why: 'The syntax is array followed by the name and the size in square brackets.' },
        { q: 'Which ERL keyword ends a while loop?', options: ['endwhile', 'loop', 'next', 'until'], answer: 0, why: 'A while loop is closed with endwhile, while a for loop is closed with next.' },
      ],
    },
    {
      id: 'erl-q2',
      title: 'Quiz 2: Reading ERL',
      questions: [
        { q: 'x = 3. for i = 1 to 3: x = x + 2. next i. What is x?', options: ['5', '7', '9', '11'], answer: 2, why: 'The loop runs three times adding 2 each time, so x becomes 3 + 6 = 9.' },
        { q: 'total = 0. for i = 1 to 5: total = total + i. next i. What is total?', options: ['10', '15', '20', '5'], answer: 1, why: '1 + 2 + 3 + 4 + 5 = 15, because ERL includes the final value.' },
        { q: 'x = 20. while x > 6: x = x DIV 2. endwhile. What is x?', options: ['10', '5', '2', '1'], answer: 1, why: 'x becomes 10 then 5. At 5 the condition 5 > 6 is false, so the loop ends.' },
        { q: 'print(9 MOD 4) outputs:', options: ['2', '1', '2.25', '36'], answer: 1, why: '4 goes into 9 twice with 1 left over.' },
        { q: 'print(9 DIV 4) outputs:', options: ['2', '1', '2.25', '36'], answer: 0, why: 'DIV gives the whole number part, which is 2.' },
        { q: 'word = "hello". print(word.upper) outputs:', options: ['hello', 'HELLO', 'Hello', 'An error'], answer: 1, why: 'The upper property converts every letter to capitals.' },
        { q: 'array a[3]. a[0]=5, a[1]=8, a[2]=2. print(a[1]) outputs:', options: ['5', '8', '2', '3'], answer: 1, why: 'Index 1 is the second element, which holds 8.' },
        { q: 'if 7 MOD 2 == 0 then print("A") else print("B") endif. What is printed?', options: ['A', 'B', 'Nothing', 'An error'], answer: 1, why: '7 MOD 2 is 1, so the condition is false and the else branch runs.' },
        { q: 'x = 2. do: x = x * 2. until x > 10. What is x?', options: ['8', '16', '10', '4'], answer: 1, why: 'x becomes 4, 8, then 16. Once x is 16 the until condition is true, so the loop stops.' },
        { q: 'Why does OCR use its own reference language in exams?', options: ['It runs faster than Python', 'So no student is advantaged by the particular language their school teaches', 'Because Python is not allowed in schools', 'It uses less memory'], answer: 1, why: 'ERL keeps the exam fair for students who learned different programming languages.' },
      ],
    },
  ],
  exam: [
    {
      id: 'erl-e1',
      context: 'total = 0\nfor i = 1 to 5\n  total = total + (i * 2)\nnext i\nprint(total)',
      stem: 'State the value that is printed and explain how the program works.',
      marks: 4,
      markScheme: [
        { text: 'The output is 30.', accept: [['30']] },
        { text: 'The loop runs five times, with i taking the values 1 to 5.', accept: [['five times'], ['5 times'], ['1 to 5'], ['includes 5']] },
        { text: 'Each time, i is doubled and added to the running total.', accept: [['doubled'], ['times 2'], ['multiplied by 2'], ['i * 2'], ['added']] },
        { text: 'The values added are 2, 4, 6, 8 and 10.', accept: [['2', '4', '6', '8', '10']] },
      ],
      modelAnswer:
        'The output is 30. The for loop runs five times because ERL includes the final value, so i takes the values 1, 2, 3, 4 and 5. Each time round, i is multiplied by 2 and added to the running total, so the values added are 2, 4, 6, 8 and 10. Adding those together gives 2 + 4 + 6 + 8 + 10 = 30, which is printed once after the loop has finished. The program calculates the sum of the first five even numbers.',
    },
    {
      id: 'erl-e2',
      stem: 'Write a program in OCR Exam Reference Language that asks the user for a number and prints whether it is positive, negative or zero.',
      marks: 5,
      markScheme: [
        { text: 'Uses input to get a value and casts it to an integer.', accept: [['input'], ['int(']] },
        { text: 'Uses if with a condition greater than zero.', accept: [['> 0'], ['>0']] },
        { text: 'Uses elseif with a condition less than zero.', accept: [['elseif'], ['< 0'], ['<0']] },
        { text: 'Uses else for the remaining case.', accept: [['else']] },
        { text: 'Closes the selection with endif and prints a message in each branch.', accept: [['endif'], ['print']] },
      ],
      modelAnswer:
        'number = int(input("Enter a number: "))\n\nif number > 0 then\n  print("Positive")\nelseif number < 0 then\n  print("Negative")\nelse\n  print("Zero")\nendif',
    },
    {
      id: 'erl-e3',
      stem: 'Explain two differences between an ERL for loop and a Python for loop.',
      marks: 4,
      markScheme: [
        { text: 'ERL includes the final value in the range.', accept: [['includes'], ['inclusive'], ['final value'], ['last number']] },
        { text: 'Python range stops before the second number.', accept: [['stops before'], ['excludes'], ['not included'], ['up to but not']] },
        { text: 'ERL uses the keyword next to close the loop.', accept: [['next']] },
        { text: 'Python uses indentation and a colon rather than a closing keyword.', accept: [['indent'], ['colon'], [':'], ['no keyword']] },
      ],
      modelAnswer:
        'The first difference is the range. In ERL, for i = 1 to 5 includes 5 itself, so the loop body runs five times. In Python, range(1, 5) stops before 5, so it only runs four times, and you would need range(1, 6) to match the ERL version. The second difference is how the block is marked. ERL closes the loop with the keyword next followed by the counter variable, whereas Python uses a colon at the end of the for line and then relies on indentation to show which lines belong inside the loop.',
    },
    {
      id: 'erl-e4',
      context: 'A program should ask the user for their name and print it in capital letters, followed by how many letters it contains.',
      stem: 'Write this program in OCR Exam Reference Language.',
      marks: 4,
      markScheme: [
        { text: 'Uses input to get the name.', accept: [['input']] },
        { text: 'Uses .upper to convert to capitals.', accept: [['upper']] },
        { text: 'Uses .length to find the number of characters.', accept: [['length']] },
        { text: 'Prints both results, casting the length to a string if joining with +.', accept: [['print'], ['str(']] },
      ],
      modelAnswer:
        'name = input("What is your name? ")\nprint(name.upper)\nprint("Your name has " + str(name.length) + " letters")',
    },
    {
      id: 'erl-e5',
      context: 'array scores[4]\nscores[0] = 12\nscores[1] = 7\nscores[2] = 19\nscores[3] = 3\n\nhighest = scores[0]\nfor i = 1 to 3\n  if scores[i] > highest then\n    highest = scores[i]\n  endif\nnext i\nprint(highest)',
      stem: 'State the output and explain why the loop starts at 1 rather than 0.',
      marks: 4,
      markScheme: [
        { text: 'The output is 19.', accept: [['19']] },
        { text: 'highest is set to the first element before the loop starts.', accept: [['first element'], ['scores[0]'], ['before'], ['starting value']] },
        { text: 'Index 0 has already been used, so checking it again would be pointless.', accept: [['already'], ['no need'], ['pointless'], ['compared'], ['itself']] },
        { text: 'The loop compares each remaining element and stores any larger value.', accept: [['compare'], ['larger'], ['bigger'], ['replaces'], ['update']] },
      ],
      modelAnswer:
        'The output is 19. Before the loop, highest is set to scores[0], which is 12, so the comparison always has a value to start from. The loop then begins at index 1 rather than 0 because element 0 has already been used as the starting value, so comparing it with itself would achieve nothing. Inside the loop each remaining element is compared with highest, and whenever a larger value is found it replaces the old one, so highest becomes 19 when index 2 is checked and stays at 19 because 3 is smaller.',
    },
  ],
};
