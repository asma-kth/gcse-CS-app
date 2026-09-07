import type { ExamPaper } from '../../types';

export const paper2_2: ExamPaper = {
  id: 'p2-2',
  component: 'Paper 2',
  number: 2,
  title: 'Paper 2 Mock B: Programming and Robustness',
  minutes: 45,
  totalMarks: 48,
  blurb: 'Programming fundamentals, strings, arrays, files, SQL, defensive design and testing.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p2-2-1', marks: 1, stem: 'What does input() always return in Python?', options: ['An integer', 'A string', 'A float', 'A Boolean'], answer: 1, why: 'Input returns text, so it must be cast before arithmetic.' },
        { kind: 'mcq', id: 'p2-2-2', marks: 1, stem: 'What is the value of 23 MOD 4?', options: ['5', '3', '5.75', '92'], answer: 1, why: 'MOD gives the remainder, and 4 goes into 23 five times with 3 left over.' },
        { kind: 'mcq', id: 'p2-2-3', marks: 1, stem: 'An array has 8 elements. What is the index of the last one?', options: ['8', '7', '9', '0'], answer: 1, why: 'Indexes run from 0 to 7 when there are 8 elements.' },
        { kind: 'mcq', id: 'p2-2-4', marks: 1, stem: 'Which SQL keyword limits which records are returned?', options: ['SELECT', 'FROM', 'WHERE', 'INSERT'], answer: 2, why: 'WHERE sets the condition a record must satisfy.' },
        { kind: 'mcq', id: 'p2-2-5', marks: 1, stem: 'Which is a boundary value for a field accepting 1 to 20?', options: ['10', '20', '25', 'cat'], answer: 1, why: 'Boundary data sits right at the edge of the allowed range.' },
        { kind: 'mcq', id: 'p2-2-6', marks: 1, stem: 'A program runs but gives the wrong answer. This is a:', options: ['Syntax error', 'Logic error', 'Translation error', 'Validation error'], answer: 1, why: 'A logic error means the code is valid but the reasoning is wrong.' },
        { kind: 'mcq', id: 'p2-2-7', marks: 1, stem: 'What is the difference between a function and a procedure?', options: ['A function returns a value', 'A procedure is faster', 'A function cannot take parameters', 'There is no difference'], answer: 0, why: 'The return value is what separates a function from a procedure.' },
        { kind: 'mcq', id: 'p2-2-8', marks: 1, stem: 'Opening a file in "w" mode does what to existing content?', options: ['Keeps it and adds to the end', 'Deletes it', 'Makes it read only', 'Compresses it'], answer: 1, why: 'Write mode overwrites the file. Append mode keeps what is there.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p2-2-9',
          marks: 6,
          context: 'A canteen program should ask the user how many meals to buy. The number must be between 1 and 5.',
          stem: 'Write a program, in a high level language or OCR Exam Reference Language, that keeps asking until a valid number is entered and then prints the total cost at 2.50 per meal.',
          markScheme: [
            { text: 'Uses a loop that repeats until the value is valid.', accept: [['while'], ['repeat'], ['until'], ['loop']] },
            { text: 'Reads input and casts it to a number.', accept: [['input'], ['int('], ['cast']] },
            { text: 'The condition correctly tests the range 1 to 5.', accept: [['< 1'], ['> 5'], ['1', '5'], ['>= 1'], ['<= 5']] },
            { text: 'Displays a suitable error message for invalid input.', accept: [['error'], ['try again'], ['invalid'], ['print']] },
            { text: 'Uses a constant or literal 2.50 for the price.', accept: [['2.5'], ['2.50'], ['price'], ['cost']] },
            { text: 'Multiplies and prints the total.', accept: [['*'], ['times'], ['total'], ['print']] },
          ],
          modelAnswer:
            'PRICE = 2.50\nmeals = 0\n\nwhile meals < 1 or meals > 5:\n    meals = int(input("How many meals (1 to 5)? "))\n    if meals < 1 or meals > 5:\n        print("Please enter a number between 1 and 5.")\n\ntotal = meals * PRICE\nprint("Total cost is", total)\n\nThe while loop repeats until a value inside the range is entered, which is the standard validation pattern. Using a constant for the price means it only has to be changed in one place.',
        },
        {
          kind: 'written',
          id: 'p2-2-10',
          marks: 5,
          context: 'A database table called Books has the fields BookID, Title, Author, Year and Copies.',
          stem: 'Write SQL statements to (a) show the title and author of every book published after 2015, and (b) change the number of copies of BookID 42 to 6.',
          markScheme: [
            { text: 'SELECT Title, Author', accept: [['select', 'title', 'author']] },
            { text: 'FROM Books', accept: [['from', 'books']] },
            { text: 'WHERE Year > 2015', accept: [['where', 'year', '2015'], ['year > 2015'], ['year>2015']] },
            { text: 'UPDATE Books SET Copies = 6', accept: [['update', 'copies'], ['set copies']] },
            { text: 'WHERE BookID = 42', accept: [['where', 'bookid', '42'], ['bookid = 42'], ['bookid=42']] },
          ],
          modelAnswer:
            '(a) SELECT Title, Author FROM Books WHERE Year > 2015\n\n(b) UPDATE Books SET Copies = 6 WHERE BookID = 42\n\nThe WHERE clause in part b is essential. Without it, every book in the table would have its number of copies changed to 6.',
        },
        {
          kind: 'written',
          id: 'p2-2-11',
          marks: 6,
          context: 'An online form asks for a username, a password and an age.',
          stem: 'Describe three different validation checks that should be applied and explain what each one prevents.',
          markScheme: [
            { text: 'A presence check makes sure a field is not left blank.', accept: [['presence'], ['blank'], ['empty']] },
            { text: 'A length check on the password sets a minimum number of characters.', accept: [['length'], ['characters'], ['at least'], ['minimum']] },
            { text: 'A range check on the age accepts only sensible values.', accept: [['range'], ['between'], ['age', 'sensible']] },
            { text: 'A type check makes sure the age is a whole number.', accept: [['type'], ['whole number'], ['integer'], ['numeric']] },
            { text: 'Explains that validation prevents incomplete or nonsense records being stored.', accept: [['incomplete'], ['nonsense'], ['invalid'], ['corrupt'], ['bad data']] },
            { text: 'Explains that a short password is easily broken by a brute force attack.', accept: [['brute force'], ['guess'], ['weak'], ['crack']] },
          ],
          modelAnswer:
            'A presence check should be applied to the username so it cannot be left blank, which prevents an account being created that nobody could ever log in to and that would be hard to identify in the database. A length check should require the password to be at least eight characters, because a very short password can be found almost instantly by a brute force attack that tries every combination. A range check should be applied to the age, accepting only values between about 13 and 120, which stops nonsense entries such as 500 being stored and helps enforce any minimum age rule. A type check on the same field would confirm the entry is a whole number rather than text, so the program does not crash when it tries to do arithmetic with it.',
        },
        {
          kind: 'written',
          id: 'p2-2-12',
          marks: 5,
          context: 'scores = [14, 8, 21, 3, 17]',
          stem: 'Write a program that finds and prints both the highest score and the average score.',
          markScheme: [
            { text: 'Sets a starting value for the highest, usually the first element.', accept: [['scores[0]'], ['highest ='], ['max ='], ['first']] },
            { text: 'Loops through every element of the array.', accept: [['for'], ['while'], ['loop'], ['each']] },
            { text: 'Compares each element with the current highest and updates it.', accept: [['if'], ['>'], ['greater'], ['update']] },
            { text: 'Adds each element to a running total.', accept: [['total'], ['sum'], ['+']] },
            { text: 'Divides the total by the number of elements and prints both results.', accept: [['/'], ['len'], ['divide'], ['average'], ['print']] },
          ],
          modelAnswer:
            'scores = [14, 8, 21, 3, 17]\n\nhighest = scores[0]\ntotal = 0\n\nfor s in scores:\n    if s > highest:\n        highest = s\n    total = total + s\n\naverage = total / len(scores)\n\nprint("Highest:", highest)\nprint("Average:", average)\n\nUsing the first element as the starting value for highest means the comparison always has something to compare against, and dividing by len(scores) rather than by 5 means the program still works if the list changes size.',
        },
        {
          kind: 'written',
          id: 'p2-2-13',
          marks: 4,
          stem: 'Explain the difference between iterative testing and final testing, and why a program needs both.',
          markScheme: [
            { text: 'Iterative testing happens during development, as each part is written.', accept: [['during'], ['as it is written'], ['while'], ['each module'], ['throughout']] },
            { text: 'It finds errors early, when they are cheaper to fix.', accept: [['early'], ['cheaper'], ['quicker to fix']] },
            { text: 'Final testing happens once the program is complete.', accept: [['complete'], ['finished'], ['at the end'], ['whole']] },
            { text: 'Final testing checks the parts work together and meet the original requirements.', accept: [['together'], ['requirement'], ['as a whole'], ['specification']] },
          ],
          modelAnswer:
            'Iterative testing takes place throughout development. Each module is tested as soon as it is written, errors are corrected, and only then does the programmer move on, so problems are found while they are still small and before other code has been built on top of them. Final testing takes place once the whole program is finished, and it checks that all the separate modules work correctly together and that the completed program actually meets the requirements set out at the start. Both are needed because iterative testing alone cannot show that the parts work together, while final testing alone would mean every error was discovered at the very end, when it is far more expensive and disruptive to fix.',
        },
        {
          kind: 'written',
          id: 'p2-2-14',
          marks: 5,
          context: 'A program reads a file called members.txt where each line holds a name and an age separated by a comma.',
          stem: 'Write a program that reads the file and prints the name of every member aged 18 or over.',
          markScheme: [
            { text: 'Opens the file in read mode.', accept: [['open'], ['"r"'], ["'r'"]] },
            { text: 'Loops through each line of the file.', accept: [['for line'], ['while'], ['readline'], ['each line']] },
            { text: 'Splits each line at the comma into fields.', accept: [['split'], [','], ['fields']] },
            { text: 'Casts the age to an integer and compares it with 18.', accept: [['int('], ['>= 18'], ['18']] },
            { text: 'Prints the qualifying names and closes the file.', accept: [['print'], ['close']] },
          ],
          modelAnswer:
            'file = open("members.txt", "r")\n\nfor line in file:\n    parts = line.strip().split(",")\n    name = parts[0]\n    age = int(parts[1])\n    if age >= 18:\n        print(name)\n\nfile.close()\n\nstrip removes the invisible newline character from the end of each line, split turns the line into a list of fields, and int casts the age from text into a number so it can be compared with 18.',
        },
        {
          kind: 'written',
          id: 'p2-2-15',
          marks: 4,
          stem: 'Explain two ways a programmer can make a program easier for someone else to maintain.',
          markScheme: [
            { text: 'Use meaningful variable and subprogram names.', accept: [['meaningful'], ['sensible name'], ['descriptive'], ['name']] },
            { text: 'Add comments explaining the purpose of sections of code.', accept: [['comment']] },
            { text: 'Indent consistently so the structure is clear.', accept: [['indent'], ['layout'], ['white space']] },
            { text: 'Break the program into subprograms or use constants for fixed values.', accept: [['subprogram'], ['function'], ['procedure'], ['constant'], ['modul']] },
          ],
          modelAnswer:
            'Firstly, use meaningful names. A variable called total_score tells another programmer immediately what it holds, whereas t forces them to read the whole program to work it out, and the same applies to subprogram names such as calculate_average. Secondly, break the program into subprograms, each doing one clearly named job, and add comments explaining why anything unusual has been done. That keeps the main program short and readable, and it means a change to one feature only affects one small block of code rather than requiring a hunt through hundreds of lines. Consistent indentation and using constants instead of repeating fixed values also help a great deal.',
        },
        {
          kind: 'written',
          id: 'p2-2-16',
          marks: 5,
          context: 'name = "Byte Quest"',
          stem: 'State the output of each line and explain what each string operation does: print(len(name)), print(name[0:4]), print(name.upper()).',
          markScheme: [
            { text: 'len(name) gives 10.', accept: [['10']] },
            { text: 'len counts the number of characters, including the space.', accept: [['counts'], ['number of characters'], ['including the space'], ['length']] },
            { text: 'name[0:4] gives Byte.', accept: [['byte']] },
            { text: 'Slicing takes characters from the start index up to but not including the end index.', accept: [['not including'], ['up to'], ['excludes'], ['index 0'], ['start']] },
            { text: 'name.upper() gives BYTE QUEST, converting every letter to capitals.', accept: [['byte quest'], ['capitals'], ['upper case'], ['uppercase']] },
          ],
          modelAnswer:
            'print(len(name)) outputs 10, because len counts every character in the string including the space between the two words.\n\nprint(name[0:4]) outputs Byte, because slicing takes the characters from index 0 up to but not including index 4, which is indexes 0, 1, 2 and 3.\n\nprint(name.upper()) outputs BYTE QUEST, because the upper method returns a copy of the string with every letter converted to a capital. Note that it returns a new string and does not change the original variable.',
        },
      ],
    },
  ],
};
