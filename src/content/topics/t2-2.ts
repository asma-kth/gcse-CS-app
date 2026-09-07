import type { Topic } from '../../types';

export const t2_2: Topic = {
  id: 't2-2',
  code: '2.2',
  title: 'Programming Fundamentals',
  blurb: 'Variables, data types, the three constructs, strings, arrays, files, SQL and subprograms.',
  paper: 'Paper 2',
  icon: '⌨️',
  lessons: [
    {
      id: 't2-2-l1',
      title: 'Variables, constants and data types',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'A variable is a named box in memory that stores a value which can change while the program runs. A constant is the same idea except its value is fixed when the program is written and never changes.' },
        {
          t: 'real',
          title: 'Real life scenario: a school trip form',
          body: [
            'The price per student is 12.50 and never changes during the program, so it is a constant.',
            'The number of students signed up changes every time somebody joins, so it is a variable.',
            'Using a constant means the price is written once. If it later changes to 13.00 you edit one line instead of hunting through the whole program.',
          ],
        },
        { t: 'diagram', id: 'data-types' },
        {
          t: 'table',
          head: ['Data type', 'Holds', 'Example', 'Python name'],
          rows: [
            ['Integer', 'Whole numbers', '42', 'int'],
            ['Real or float', 'Numbers with a decimal part', '3.75', 'float'],
            ['Boolean', 'True or False only', 'True', 'bool'],
            ['Character', 'One single symbol', 'A', 'str of length 1'],
            ['String', 'Text of any length', 'Hello there', 'str'],
          ],
        },
        { t: 'h', text: 'Casting' },
        { t: 'p', text: 'Casting converts a value from one data type to another. It matters because input always arrives as a string, even when the user types a number.' },
        { t: 'code', lang: 'python', caption: 'Why casting matters', code: 'age = input("How old are you? ")\nprint(age + 1)\n# ERROR: you cannot add a number to a string\n\nage = int(input("How old are you? "))\nprint(age + 1)\n# Works. int() casts the string "15" into the number 15' },
        {
          t: 'table',
          head: ['Cast', 'Turns it into', 'Example'],
          rows: [
            ['int(x)', 'An integer', 'int("15") gives 15'],
            ['float(x)', 'A real number', 'float("2.5") gives 2.5'],
            ['str(x)', 'A string', 'str(15) gives "15"'],
            ['bool(x)', 'True or False', 'bool(0) gives False'],
          ],
        },
        { t: 'h', text: 'Operators' },
        {
          t: 'table',
          head: ['Type', 'Operator', 'Meaning'],
          rows: [
            ['Arithmetic', '+  -  *  /', 'add, subtract, multiply, divide'],
            ['Arithmetic', '**', 'exponent, for example 2 ** 3 is 8'],
            ['Arithmetic', '// (Python) or DIV', 'integer division, 17 // 5 is 3'],
            ['Arithmetic', '% (Python) or MOD', 'remainder, 17 % 5 is 2'],
            ['Comparison', '==  !=  <  >  <=  >=', 'equal to, not equal to, less than, greater than'],
            ['Boolean', 'AND  OR  NOT', 'combine conditions'],
          ],
        },
        {
          t: 'warn',
          body: [
            'A single = assigns a value. A double == compares two values. Mixing them up is the single most common beginner error.',
          ],
        },
        {
          t: 'example',
          title: 'MOD and DIV in real use',
          body: [
            'You have 137 sweets to share between 8 people.',
            '137 // 8 = 17, so each person gets 17 sweets.',
            '137 % 8 = 1, so 1 sweet is left over.',
            'MOD is also how you check if a number is even: if n % 2 == 0 then n is even.',
          ],
        },
      ],
    },
    {
      id: 't2-2-l2',
      title: 'Sequence, selection and iteration',
      minutes: 12,
      blocks: [
        { t: 'p', text: 'Every program ever written is made from just three building blocks. Learn these names because exam questions use them directly.' },
        { t: 'h', text: 'Sequence' },
        { t: 'p', text: 'Instructions run one after another, from top to bottom, in the order written.' },
        { t: 'code', lang: 'python', code: 'name = input("Your name: ")\ngreeting = "Hello " + name\nprint(greeting)' },
        { t: 'h', text: 'Selection' },
        { t: 'p', text: 'The program chooses between different paths depending on a condition. Use if, elif and else.' },
        { t: 'code', lang: 'python', caption: 'A grade calculator', code: 'mark = int(input("Enter mark: "))\n\nif mark >= 70:\n    print("Grade 7 or above")\nelif mark >= 50:\n    print("Grade 5 or 6")\nelif mark >= 40:\n    print("Grade 4")\nelse:\n    print("Below grade 4")' },
        {
          t: 'tip',
          body: [
            'The order of elif matters. If you put the smallest condition first, everything would match it and the later branches would never run.',
          ],
        },
        { t: 'h', text: 'Iteration' },
        { t: 'p', text: 'Iteration means repetition. There are two kinds and the exam expects you to know when to use each.' },
        {
          t: 'table',
          head: ['', 'Count controlled (for)', 'Condition controlled (while)'],
          rows: [
            ['Repeats', 'A known number of times', 'Until a condition becomes false'],
            ['Use when', 'You know how many repeats are needed', 'You do not know in advance'],
            ['Example', 'Print the 7 times table', 'Keep asking for a password until it is right'],
            ['Danger', 'Off by one errors', 'Infinite loop if the condition never changes'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'A for loop', code: 'for i in range(1, 13):\n    print(i, "x 7 =", i * 7)\n\n# range(1, 13) counts 1 to 12 and stops before 13' },
        { t: 'code', lang: 'python', caption: 'A while loop', code: 'password = ""\nattempts = 0\n\nwhile password != "dragon" and attempts < 3:\n    password = input("Password: ")\n    attempts = attempts + 1\n\nif password == "dragon":\n    print("Welcome")\nelse:\n    print("Locked out")' },
        {
          t: 'warn',
          body: [
            'An infinite loop happens when the condition can never become false, for example forgetting to increase a counter inside a while loop. The program appears to freeze.',
          ],
        },
        { t: 'demo', id: 'trace-table', caption: 'Trace three loops by hand and check your answers.' },
      ],
    },
    {
      id: 't2-2-l3',
      title: 'Strings and string manipulation',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'A string is text. Because computers count from zero, the first character of a string is at position 0.' },
        { t: 'code', lang: 'text', caption: 'Positions in the string "COMPUTER"', code: 'C  O  M  P  U  T  E  R\n0  1  2  3  4  5  6  7' },
        {
          t: 'table',
          head: ['Job', 'Python', 'OCR ERL'],
          rows: [
            ['Length of a string', 'len(word)', 'word.length'],
            ['One character', 'word[0]', 'word.subString(0, 1)'],
            ['Part of a string', 'word[0:3]', 'word.subString(0, 3)'],
            ['Convert to upper case', 'word.upper()', 'word.upper'],
            ['Convert to lower case', 'word.lower()', 'word.lower'],
            ['Join two strings', 'a + b', 'a + b'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Worked example: making a username', code: 'first = "Aisha"\nlast = "Kaur"\n\ninitial = first[0]              # "A"\nsurname = last.lower()          # "kaur"\nusername = initial.lower() + surname\n\nprint(username)                 # akaur\nprint(len(username))            # 5' },
        {
          t: 'real',
          title: 'Real life scenario: checking a postcode',
          body: [
            'A form needs to check that a postcode starts with the letters LS.',
            'You would take the first two characters with postcode[0:2], convert them to upper case so ls also works, and compare the result with "LS".',
            'That is three string operations working together, which is exactly what exam questions ask for.',
          ],
        },
        { t: 'code', lang: 'python', caption: 'Counting vowels, a classic exam task', code: 'word = input("Enter a word: ").lower()\ncount = 0\n\nfor letter in word:\n    if letter == "a" or letter == "e" or letter == "i" or letter == "o" or letter == "u":\n        count = count + 1\n\nprint("Vowels:", count)' },
      ],
    },
    {
      id: 't2-2-l4',
      title: 'Arrays and file handling',
      minutes: 10,
      blocks: [
        { t: 'h', text: 'Arrays' },
        { t: 'p', text: 'An array stores many values of the same type under one name. Each value has an index, and indexes start at zero. In Python we use a list, which works the same way for the exam.' },
        { t: 'diagram', id: 'array-diagram' },
        { t: 'code', lang: 'python', caption: 'Working with a one dimensional array', code: 'scores = [12, 45, 7, 30, 22]\n\nprint(scores[0])        # 12, the first item\nprint(scores[4])        # 22, the last item\nprint(len(scores))      # 5\n\nscores[2] = 99          # change the third item\n\ntotal = 0\nfor s in scores:\n    total = total + s\nprint("Total:", total)' },
        { t: 'code', lang: 'python', caption: 'A two dimensional array', code: 'seats = [["A1", "A2", "A3"],\n         ["B1", "B2", "B3"]]\n\nprint(seats[0][2])      # A3, row 0 column 2\nprint(seats[1][0])      # B1, row 1 column 0' },
        {
          t: 'tip',
          body: [
            'The most common array error is going past the end. An array of 5 items has indexes 0 to 4, so scores[5] causes an error. This is called an out of bounds error.',
          ],
        },
        { t: 'h', text: 'File handling' },
        { t: 'p', text: 'Programs need to save data so it survives after the program closes. The three operations you need are open, read or write, and close.' },
        {
          t: 'table',
          head: ['Mode', 'What it does'],
          rows: [
            ['"r"', 'Read from an existing file'],
            ['"w"', 'Write to a file. WARNING: this deletes everything already in it'],
            ['"a"', 'Append, which adds to the end and keeps what is there'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Writing then reading a file', code: '# Writing\nfile = open("scores.txt", "w")\nfile.write("Aisha,45\\n")\nfile.write("Tom,38\\n")\nfile.close()\n\n# Reading the whole file line by line\nfile = open("scores.txt", "r")\nfor line in file:\n    print(line.strip())\nfile.close()' },
        {
          t: 'warn',
          body: [
            'Always close a file. If you do not, the data you wrote may never actually be saved to the disk.',
            'Opening an existing file with "w" wipes it instantly. Use "a" when you want to add to it.',
          ],
        },
      ],
    },
    {
      id: 't2-2-l5',
      title: 'SQL and databases',
      minutes: 8,
      blocks: [
        { t: 'p', text: 'A database stores data in tables. Each row is a record about one thing, and each column is a field holding one piece of information.' },
        { t: 'diagram', id: 'sql-table' },
        {
          t: 'key',
          terms: [
            { term: 'Record', def: 'One row of the table, holding all the data about a single item or person.' },
            { term: 'Field', def: 'One column, holding one type of information for every record.' },
            { term: 'Primary key', def: 'A field that is unique for every record, used to identify it. Two students can share a name but never a student ID.' },
          ],
        },
        { t: 'h', text: 'SQL' },
        { t: 'p', text: 'SQL, or Structured Query Language, is how you ask a database for information. The specification requires SELECT, FROM, WHERE, and you should also know INSERT, UPDATE and DELETE.' },
        { t: 'code', lang: 'sql', caption: 'The basic pattern', code: 'SELECT  which fields you want\nFROM    which table\nWHERE   which records to include' },
        { t: 'code', lang: 'sql', caption: 'Worked examples on a table called Students', code: '-- every field for every student\nSELECT * FROM Students\n\n-- just names, only Year 10\nSELECT Name FROM Students WHERE Year = 10\n\n-- two fields with two conditions\nSELECT Name, House FROM Students WHERE Year = 11 AND House = "Oak"\n\n-- using a comparison\nSELECT Name FROM Students WHERE Mark >= 40\n\n-- adding a record\nINSERT INTO Students VALUES (1044, "Leo", 10, "Ash")\n\n-- changing a record\nUPDATE Students SET House = "Elm" WHERE StudentID = 1042\n\n-- removing a record\nDELETE FROM Students WHERE StudentID = 1043' },
        {
          t: 'tip',
          body: [
            'The asterisk means all fields. Text values go inside quotation marks but numbers do not. Exam answers lose marks for missing the WHERE clause when the question clearly asks for a subset.',
          ],
        },
      ],
    },
    {
      id: 't2-2-l6',
      title: 'Subprograms',
      minutes: 8,
      blocks: [
        { t: 'p', text: 'A subprogram is a named block of code that does one job. You write it once and then call it whenever you need it.' },
        {
          t: 'key',
          terms: [
            { term: 'Function', def: 'A subprogram that returns a value back to the code that called it.' },
            { term: 'Procedure', def: 'A subprogram that carries out a job but does not return a value.' },
            { term: 'Parameter', def: 'A value passed into a subprogram so it can work on different data each time.' },
            { term: 'Return value', def: 'The answer a function sends back.' },
          ],
        },
        { t: 'code', lang: 'python', caption: 'A function and a procedure', code: '# A function: it returns a value\ndef area_of_rectangle(width, height):\n    return width * height\n\n# A procedure: it does a job but returns nothing\ndef print_banner(title):\n    print("=" * 20)\n    print(title)\n    print("=" * 20)\n\n# Calling them\na = area_of_rectangle(5, 3)   # a is now 15\nprint_banner("RESULTS")' },
        { t: 'h', text: 'Why subprograms are worth using' },
        {
          t: 'ul',
          items: [
            'The same code is written once instead of many times, so the program is shorter.',
            'If a bug is found you fix it in one place rather than everywhere it was copied.',
            'The main program becomes easy to read because each call has a meaningful name.',
            'Different people can work on different subprograms at the same time.',
            'A subprogram can be tested on its own before being joined to the rest of the program.',
          ],
        },
        { t: 'h', text: 'Local and global variables' },
        { t: 'p', text: 'A local variable exists only inside the subprogram where it was created and disappears when the subprogram finishes. A global variable exists everywhere in the program.' },
        {
          t: 'table',
          head: ['', 'Local', 'Global'],
          rows: [
            ['Where it works', 'Only in its own subprogram', 'Anywhere in the program'],
            ['Memory', 'Freed when the subprogram ends', 'Used for the whole run'],
            ['Safety', 'Cannot be changed by mistake elsewhere', 'Any part of the code can change it'],
            ['Best practice', 'Use these wherever possible', 'Use sparingly'],
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: why local is safer',
          body: [
            'Imagine two students both using a variable called count in different parts of a large program.',
            'If count is global, one student loop quietly changes the other student total and the bug is horrible to find.',
            'If count is local to each subprogram, the two never touch. That is why local variables are preferred.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't2-2-q1',
      title: 'Quiz 1: Variables, types and constructs',
      questions: [
        { q: 'What is a variable?', options: ['A value that never changes', 'A named store in memory whose value can change', 'A type of loop', 'A subprogram'], answer: 1, why: 'A variable holds a value that may change while the program runs.' },
        { q: 'Which data type should be used to store a price such as 4.99?', options: ['Integer', 'Real or float', 'Boolean', 'Character'], answer: 1, why: 'A real number can hold a decimal part, which an integer cannot.' },
        { q: 'What does int("7") do?', options: ['Prints 7', 'Casts the string "7" into the number 7', 'Rounds 7 down', 'Causes an error'], answer: 1, why: 'int() casts a value into an integer, which is needed because input returns a string.' },
        { q: 'What is the value of 17 MOD 5?', options: ['3', '2', '3.4', '85'], answer: 1, why: 'MOD gives the remainder. 5 goes into 17 three times with 2 left over.' },
        { q: 'What is the value of 17 DIV 5?', options: ['3', '2', '3.4', '12'], answer: 0, why: 'DIV is integer division, which gives the whole number part only.' },
        { q: 'Which of these is selection?', options: ['for i in range(5)', 'if score > 10:', 'x = 5', 'print(x)'], answer: 1, why: 'Selection chooses between paths using if, elif and else.' },
        { q: 'Which loop should be used when you do not know how many repeats are needed?', options: ['for', 'while', 'if', 'else'], answer: 1, why: 'A while loop keeps going until a condition becomes false, so the count need not be known.' },
        { q: 'What does range(1, 6) produce in Python?', options: ['1 2 3 4 5 6', '1 2 3 4 5', '0 1 2 3 4 5', '2 3 4 5'], answer: 1, why: 'range starts at the first number and stops before the second.' },
        { q: 'Why use a constant instead of a variable for VAT at 20 percent?', options: ['It runs faster', 'The value should not change during the program and it is defined in one place', 'It uses less memory', 'Constants can hold more data'], answer: 1, why: 'A constant makes the intent clear and means a change is only made in one place.' },
        { q: 'What causes an infinite loop?', options: ['Using a for loop', 'A while condition that never becomes false', 'Casting a variable', 'Using too many variables'], answer: 1, why: 'If nothing inside the loop changes the condition, it can never end.' },
      ],
    },
    {
      id: 't2-2-q2',
      title: 'Quiz 2: Strings, arrays, files, SQL and subprograms',
      questions: [
        { q: 'What is the index of the first character in a string?', options: ['1', '0', '-1', 'It depends on the language'], answer: 1, why: 'Indexing starts at zero, so the first character is at position 0.' },
        { q: 'If word = "COMPUTER", what does word[0:3] give?', options: ['COM', 'COMP', 'OMP', 'C'], answer: 0, why: 'It takes characters from index 0 up to but not including index 3, giving COM.' },
        { q: 'What does len("Byte") return?', options: ['3', '4', '5', 'Byte'], answer: 1, why: 'len counts the characters, and Byte has four.' },
        { q: 'An array has 6 elements. What is the index of the last one?', options: ['6', '5', '7', '0'], answer: 1, why: 'Indexes run from 0 to 5 when there are 6 elements.' },
        { q: 'What does opening a file in "w" mode do to existing contents?', options: ['Keeps them and adds to the end', 'Deletes them', 'Makes them read only', 'Compresses them'], answer: 1, why: 'Write mode overwrites the file, so use append mode to keep the existing data.' },
        { q: 'Which SQL keyword filters which records are returned?', options: ['SELECT', 'FROM', 'WHERE', 'INSERT'], answer: 2, why: 'WHERE sets the condition a record must meet to be included.' },
        { q: 'What does SELECT * FROM Books WHERE Year > 2020 return?', options: ['All fields for books published after 2020', 'Only the year field', 'All books', 'Nothing'], answer: 0, why: 'The asterisk means all fields and the WHERE clause limits it to books after 2020.' },
        { q: 'What is a primary key?', options: ['The first field in a table', 'A field with a unique value for every record', 'The password for the database', 'A field that can be left empty'], answer: 1, why: 'The primary key uniquely identifies each record.' },
        { q: 'What is the difference between a function and a procedure?', options: ['A function returns a value, a procedure does not', 'A procedure is faster', 'A function cannot take parameters', 'There is no difference'], answer: 0, why: 'The return value is what separates the two.' },
        { q: 'Why are local variables preferred over global variables?', options: ['They are faster to type', 'They cannot be accidentally changed by other parts of the program', 'They can hold more data', 'They never need to be declared'], answer: 1, why: 'Limiting scope prevents distant parts of a program interfering with each other.' },
      ],
    },
  ],
  exam: [
    {
      id: 't2-2-e1',
      context: 'A program asks the user for their age and then prints how old they will be in 10 years. A student writes:\n\nage = input("Age: ")\nprint(age + 10)',
      stem: 'Explain why this program does not work and state how to fix it.',
      marks: 3,
      markScheme: [
        { text: 'input returns a string, not a number.', accept: [['string'], ['text'], ['str']] },
        { text: 'You cannot add an integer to a string, so an error occurs.', accept: [['error'], ['cannot add'], ['different types'], ['type error']] },
        { text: 'Fix: cast the input using int().', accept: [['int('], ['cast'], ['convert'], ['int(input']] },
      ],
      modelAnswer:
        'The input function always returns a string, so the variable age holds the text "15" rather than the number 15. Python cannot add the integer 10 to a string, so the program crashes with a type error. The fix is to cast the input to an integer as it is read, using age = int(input("Age: ")), so that the addition works on two numbers.',
    },
    {
      id: 't2-2-e2',
      stem: 'Describe two benefits of using subprograms when writing a large program.',
      marks: 4,
      markScheme: [
        { text: 'Code that is used many times is written only once.', accept: [['once'], ['reuse'], ['reused'], ['not repeat'], ['avoid duplication']] },
        { text: 'A bug only needs fixing in one place.', accept: [['one place'], ['fix once'], ['easier to fix'], ['maintain']] },
        { text: 'The program is easier to read because each subprogram has a meaningful name.', accept: [['easier to read'], ['readable'], ['name'], ['understand']] },
        { text: 'Subprograms can be tested individually, or written by different people at the same time.', accept: [['test'], ['individually'], ['separately'], ['different people'], ['team'], ['at the same time']] },
      ],
      modelAnswer:
        'Firstly, a subprogram means code that is needed in several places only has to be written once and then called by name, which makes the program much shorter and means that if a bug is found it only has to be fixed in one place rather than in every copy. Secondly, breaking the program into named subprograms makes it far easier to read and maintain, because the main program becomes a short list of meaningful calls, and each subprogram can be tested on its own before it is joined to the rest of the code. It also allows several programmers to work on different subprograms at the same time.',
    },
    {
      id: 't2-2-e3',
      context: 'A database table called Members has the fields MemberID, Name, Age and Town.',
      stem: 'Write an SQL statement to display the name and town of every member aged 18 or over.',
      marks: 3,
      markScheme: [
        { text: 'SELECT Name, Town', accept: [['select', 'name', 'town']] },
        { text: 'FROM Members', accept: [['from', 'members']] },
        { text: 'WHERE Age >= 18', accept: [['where', 'age', '18'], ['age >= 18'], ['age>=18']] },
      ],
      modelAnswer: 'SELECT Name, Town FROM Members WHERE Age >= 18',
      examinerTip: 'Use >= for "or over". Writing > 18 would wrongly leave out members who are exactly 18.',
    },
    {
      id: 't2-2-e4',
      stem: 'Explain the difference between a local variable and a global variable, and give one reason why local variables are usually preferred.',
      marks: 4,
      markScheme: [
        { text: 'A local variable can only be used inside the subprogram where it is declared.', accept: [['inside'], ['only', 'subprogram'], ['within'], ['scope']] },
        { text: 'A global variable can be used anywhere in the program.', accept: [['anywhere'], ['whole program'], ['everywhere'], ['all parts']] },
        { text: 'Local variables are removed from memory when the subprogram ends.', accept: [['memory'], ['deleted'], ['removed'], ['freed'], ['destroyed']] },
        { text: 'Local variables cannot be changed accidentally by other parts of the program, which avoids hard to find bugs.', accept: [['accidental'], ['bug'], ['interfere'], ['cannot be changed'], ['safer'], ['clash']] },
      ],
      modelAnswer:
        'A local variable is created inside a subprogram and can only be used within that subprogram, and it is removed from memory as soon as the subprogram finishes. A global variable is declared outside any subprogram and can be read or changed by any part of the program for the whole time it is running. Local variables are usually preferred because they cannot be changed accidentally by another part of the program, so two subprograms can both use a variable called count without interfering with each other. That prevents bugs that are very difficult to track down, and it also saves memory because the variable only exists while it is needed.',
    },
    {
      id: 't2-2-e5',
      context: 'A program stores the scores of 5 players in an array called scores.',
      stem: 'Write a program, in a high level language or OCR Exam Reference Language, that finds and prints the highest score.',
      marks: 5,
      markScheme: [
        { text: 'A variable is set up to hold the highest value so far.', accept: [['highest'], ['max'], ['best'], ['biggest']] },
        { text: 'A loop goes through every element of the array.', accept: [['for'], ['while'], ['loop'], ['each']] },
        { text: 'Each element is compared with the current highest.', accept: [['if'], ['>'], ['compare'], ['greater']] },
        { text: 'The highest variable is updated when a larger value is found.', accept: [['=', 'scores'], ['update'], ['set'], ['becomes']] },
        { text: 'The result is printed after the loop, not inside it.', accept: [['print'], ['output'], ['display']] },
      ],
      modelAnswer:
        'highest = scores[0]\nfor i in range(1, 5):\n    if scores[i] > highest:\n        highest = scores[i]\nprint("The highest score is", highest)\n\nThe first element is used as the starting value for highest so the comparison always has something to compare against. The loop then checks each remaining element, and whenever it finds a larger value it stores that instead. The answer is printed once, after the loop has finished.',
    },
  ],
};
