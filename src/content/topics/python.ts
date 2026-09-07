import type { Topic } from '../../types';

export const pythonUnit: Topic = {
  id: 'python',
  code: 'PY',
  title: 'Python Practice Unit',
  blurb: 'Every programming technique in the OCR specification, written in Python, with worked examples and drills.',
  paper: 'Skills',
  icon: 'snake',
  lessons: [
    {
      id: 'py-l1',
      title: 'First steps: output, input and variables',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'Python is the language most schools use for the OCR programming project and for the exam. Everything in this unit maps directly onto something in the specification.' },
        { t: 'h', text: 'Printing to the screen' },
        { t: 'code', lang: 'python', code: 'print("Hello world")\nprint("Byte the cat says hi")\n\n# You can print several things separated by commas\nname = "Aisha"\nprint("Hello", name, "welcome back")' },
        {
          t: 'tip',
          body: [
            'A line starting with a hash symbol is a comment. Python ignores it completely, but a human reading your code will thank you.',
          ],
        },
        { t: 'h', text: 'Variables' },
        { t: 'code', lang: 'python', code: 'score = 0            # an integer\nprice = 4.99         # a real number, called a float\nname = "Byte"        # a string\ngame_over = False    # a Boolean\n\nscore = score + 10   # variables can change\nprint(score)         # 10' },
        {
          t: 'warn',
          body: [
            'Variable names cannot start with a number, cannot contain spaces, and are case sensitive. Score and score are two different variables.',
          ],
        },
        { t: 'h', text: 'Input and casting' },
        { t: 'p', text: 'Everything typed by the user arrives as a string, even if it looks like a number. If you want to do maths with it you must cast it first.' },
        { t: 'code', lang: 'python', caption: 'The pattern you will use constantly', code: 'name = input("What is your name? ")\nage = int(input("How old are you? "))\nheight = float(input("How tall are you in metres? "))\n\nprint("Next year", name, "will be", age + 1)' },
        {
          t: 'example',
          title: 'Spot the bug',
          body: [
            'num1 = input("First number: ")',
            'num2 = input("Second number: ")',
            'print(num1 + num2)',
            'If the user types 5 and 3 this prints 53, not 8, because both values are strings and adding strings joins them together.',
            'The fix is int(input(...)) on both lines.',
          ],
        },
        { t: 'demo', id: 'python-drill', caption: 'Try the output drill and see how many you get right.' },
      ],
    },
    {
      id: 'py-l2',
      title: 'Selection: if, elif and else',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Selection lets the program choose what to do. In Python the colon and the indentation are both part of the syntax, not decoration.' },
        { t: 'code', lang: 'python', caption: 'The basic shape', code: 'age = int(input("Age: "))\n\nif age >= 18:\n    print("You may vote")\nelse:\n    print("Too young to vote")' },
        {
          t: 'table',
          head: ['Operator', 'Meaning', 'Example that is True'],
          rows: [
            ['==', 'is equal to', '5 == 5'],
            ['!=', 'is not equal to', '5 != 3'],
            ['<', 'less than', '3 < 5'],
            ['>', 'greater than', '9 > 2'],
            ['<=', 'less than or equal to', '5 <= 5'],
            ['>=', 'greater than or equal to', '7 >= 4'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Several branches with elif', code: 'mark = int(input("Enter mark out of 100: "))\n\nif mark >= 90:\n    grade = "9"\nelif mark >= 80:\n    grade = "8"\nelif mark >= 70:\n    grade = "7"\nelif mark >= 60:\n    grade = "6"\nelif mark >= 50:\n    grade = "5"\nelif mark >= 40:\n    grade = "4"\nelse:\n    grade = "below 4"\n\nprint("Your grade is", grade)' },
        {
          t: 'warn',
          body: [
            'The order of elif branches matters enormously. If you tested mark >= 40 first, a mark of 95 would match it and print grade 4. Always go from the highest condition downwards.',
          ],
        },
        { t: 'h', text: 'Combining conditions' },
        { t: 'code', lang: 'python', code: 'temperature = 22\nraining = False\n\nif temperature > 20 and not raining:\n    print("Good day for the park")\n\nif temperature < 5 or raining:\n    print("Take a coat")' },
        {
          t: 'real',
          title: 'Real life scenario: a cinema ticket price',
          body: [
            'Under 5 is free. 5 to 15 is a child ticket. 16 to 64 is an adult ticket. 65 and over is a concession.',
            'Write the conditions in order from youngest to oldest, or oldest to youngest, and every age lands in exactly one branch.',
            'Test it with 4, 5, 15, 16, 64 and 65. Those are your boundary values.',
          ],
        },
      ],
    },
    {
      id: 'py-l3',
      title: 'Iteration: for and while loops',
      minutes: 10,
      blocks: [
        { t: 'h', text: 'The for loop, for a known number of repeats' },
        { t: 'code', lang: 'python', code: 'for i in range(5):\n    print(i)\n# prints 0 1 2 3 4\n\nfor i in range(1, 6):\n    print(i)\n# prints 1 2 3 4 5\n\nfor i in range(0, 21, 5):\n    print(i)\n# prints 0 5 10 15 20, because the third number is the step' },
        {
          t: 'warn',
          body: [
            'range always stops BEFORE the second number. range(1, 10) gives 1 to 9. This single fact causes more off by one errors than anything else in Python.',
          ],
        },
        { t: 'code', lang: 'python', caption: 'Looping through a list or a string', code: 'colours = ["red", "green", "blue"]\nfor c in colours:\n    print(c)\n\nfor letter in "Byte":\n    print(letter)' },
        { t: 'h', text: 'The while loop, for an unknown number of repeats' },
        { t: 'code', lang: 'python', caption: 'Validation, the classic use of while', code: 'number = -1\n\nwhile number < 1 or number > 10:\n    number = int(input("Enter a number from 1 to 10: "))\n    if number < 1 or number > 10:\n        print("That is not in range. Try again.")\n\nprint("Thank you, you chose", number)' },
        { t: 'code', lang: 'python', caption: 'A guessing game', code: 'import random\n\nsecret = random.randint(1, 100)\nguess = 0\ntries = 0\n\nwhile guess != secret:\n    guess = int(input("Guess the number: "))\n    tries = tries + 1\n    if guess < secret:\n        print("Too low")\n    elif guess > secret:\n        print("Too high")\n\nprint("Correct. It took you", tries, "guesses.")' },
        {
          t: 'warn',
          body: [
            'If nothing inside a while loop can ever make the condition false, the program hangs for ever. Always check that something inside the loop changes the value being tested.',
          ],
        },
        { t: 'h', text: 'Nested loops' },
        { t: 'code', lang: 'python', caption: 'A times table grid', code: 'for row in range(1, 4):\n    for col in range(1, 4):\n        print(row * col, end=" ")\n    print()\n\n# Output:\n# 1 2 3\n# 2 4 6\n# 3 6 9' },
        { t: 'demo', id: 'trace-table', caption: 'Practise tracing loops by hand, exactly as the exam asks.' },
      ],
    },
    {
      id: 'py-l4',
      title: 'Strings and lists',
      minutes: 11,
      blocks: [
        { t: 'h', text: 'String operations' },
        { t: 'code', lang: 'python', code: 'word = "Dungeon"\n\nprint(len(word))          # 7\nprint(word[0])            # D\nprint(word[-1])           # n, the last character\nprint(word[0:3])          # Dun\nprint(word.upper())       # DUNGEON\nprint(word.lower())       # dungeon\nprint(word + " master")   # Dungeon master\nprint("gen" in word)      # True' },
        {
          t: 'example',
          title: 'Worked example: build a school username',
          body: [
            'Rule: first initial, then surname, then year of entry.',
            'first = "Aisha", last = "Kaur", year = "24"',
            'username = first[0].lower() + last.lower() + year',
            'That gives akaur24.',
          ],
        },
        { t: 'code', lang: 'python', caption: 'Counting characters, a very common exam task', code: 'sentence = input("Type a sentence: ").lower()\nvowels = 0\nspaces = 0\n\nfor ch in sentence:\n    if ch in "aeiou":\n        vowels = vowels + 1\n    elif ch == " ":\n        spaces = spaces + 1\n\nprint("Vowels:", vowels)\nprint("Words:", spaces + 1)' },
        { t: 'h', text: 'Lists, which are arrays for the exam' },
        { t: 'diagram', id: 'array-diagram' },
        { t: 'code', lang: 'python', code: 'scores = [12, 45, 7, 30, 22]\n\nprint(scores[0])          # 12\nprint(scores[-1])         # 22\nprint(len(scores))        # 5\n\nscores.append(50)         # add to the end\nscores[1] = 99            # change an item\nprint(scores)             # [12, 99, 7, 30, 22, 50]' },
        { t: 'code', lang: 'python', caption: 'The three classic list algorithms', code: '# Total and average\ntotal = 0\nfor s in scores:\n    total = total + s\naverage = total / len(scores)\n\n# Highest value\nhighest = scores[0]\nfor s in scores:\n    if s > highest:\n        highest = s\n\n# Searching (a linear search)\ntarget = 30\nfound = False\nfor i in range(len(scores)):\n    if scores[i] == target:\n        print("Found at index", i)\n        found = True\nif not found:\n    print("Not in the list")' },
        { t: 'h', text: 'Two dimensional lists' },
        { t: 'code', lang: 'python', code: 'grid = [[1, 2, 3],\n        [4, 5, 6],\n        [7, 8, 9]]\n\nprint(grid[1][2])     # 6, row 1 column 2\n\nfor row in grid:\n    for value in row:\n        print(value, end=" ")\n    print()' },
      ],
    },
    {
      id: 'py-l5',
      title: 'Subprograms and file handling',
      minutes: 10,
      blocks: [
        { t: 'h', text: 'Functions and procedures' },
        { t: 'code', lang: 'python', code: '# A function returns a value\ndef area(width, height):\n    return width * height\n\n# A procedure does a job but returns nothing\ndef show_menu():\n    print("1. New game")\n    print("2. Load game")\n    print("3. Quit")\n\n# A function with validation inside it\ndef get_number(prompt, low, high):\n    value = low - 1\n    while value < low or value > high:\n        value = int(input(prompt))\n        if value < low or value > high:\n            print("Please enter between", low, "and", high)\n    return value\n\nshow_menu()\nchoice = get_number("Choose an option: ", 1, 3)\nprint("You chose", choice)' },
        {
          t: 'tip',
          body: [
            'Notice how get_number can be reused for any range. Writing one flexible subprogram instead of copying the same validation five times is exactly what examiners mean by good program design.',
          ],
        },
        { t: 'h', text: 'Local and global variables' },
        { t: 'code', lang: 'python', code: 'total = 0            # global\n\ndef add_points(points):\n    bonus = 5        # local, only exists inside this function\n    return points + bonus\n\nprint(add_points(10))   # 15\n# print(bonus)          # this would cause an error, bonus does not exist here' },
        { t: 'h', text: 'File handling' },
        { t: 'code', lang: 'python', caption: 'Writing, appending and reading', code: '# Write, which WIPES the file first\nfile = open("scores.txt", "w")\nfile.write("Aisha,45\\n")\nfile.write("Tom,38\\n")\nfile.close()\n\n# Append, which keeps what is already there\nfile = open("scores.txt", "a")\nfile.write("Priya,52\\n")\nfile.close()\n\n# Read the whole file line by line\nfile = open("scores.txt", "r")\nfor line in file:\n    print(line.strip())\nfile.close()' },
        { t: 'code', lang: 'python', caption: 'Splitting a line into fields', code: 'file = open("scores.txt", "r")\nbest_name = ""\nbest_score = 0\n\nfor line in file:\n    parts = line.strip().split(",")\n    name = parts[0]\n    score = int(parts[1])\n    if score > best_score:\n        best_score = score\n        best_name = name\n\nfile.close()\nprint("Top scorer:", best_name, "with", best_score)' },
        {
          t: 'warn',
          body: [
            'Always close a file when you have finished with it, otherwise data you wrote may never reach the disk.',
            'Remember that strip() removes the invisible newline character from the end of each line, and split(",") turns one line into a list of fields.',
          ],
        },
      ],
    },
    {
      id: 'py-l6',
      title: 'Putting it together: a complete program',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'This program uses almost every technique in the specification: constants, validation, a while loop, a list, subprograms, string handling and file output. Read it slowly and identify each part.' },
        { t: 'code', lang: 'python', caption: 'A quiz score recorder', code: 'MAX_MARK = 20          # a constant\n\ndef get_valid_mark(name):\n    """Ask for a mark and only accept 0 to MAX_MARK."""\n    mark = -1\n    while mark < 0 or mark > MAX_MARK:\n        entry = input("Mark for " + name + ": ")\n        if entry.isdigit():\n            mark = int(entry)\n            if mark > MAX_MARK:\n                print("Too high. The maximum is", MAX_MARK)\n        else:\n            print("Please type a whole number.")\n    return mark\n\ndef average(numbers):\n    return sum(numbers) / len(numbers)\n\ndef save_results(names, marks):\n    file = open("results.txt", "w")\n    for i in range(len(names)):\n        file.write(names[i] + "," + str(marks[i]) + "\\n")\n    file.close()\n\n# Main program\nnames = []\nmarks = []\n\nhow_many = int(input("How many students? "))\n\nfor i in range(how_many):\n    student = input("Student name: ")\n    names.append(student)\n    marks.append(get_valid_mark(student))\n\nprint()\nprint("Results")\nfor i in range(len(names)):\n    percent = marks[i] / MAX_MARK * 100\n    print(names[i], marks[i], "out of", MAX_MARK, "=", round(percent), "percent")\n\nprint("Class average:", round(average(marks), 1))\nsave_results(names, marks)\nprint("Results saved to results.txt")' },
        {
          t: 'key',
          terms: [
            { term: 'Constant', def: 'MAX_MARK is written in capitals by convention and defined once at the top.' },
            { term: 'Validation', def: 'get_valid_mark uses a while loop with a type check and a range check.' },
            { term: 'Function', def: 'average returns a value, so it is a function.' },
            { term: 'Procedure', def: 'save_results does a job and returns nothing, so it is a procedure.' },
            { term: 'Parallel lists', def: 'names[2] and marks[2] belong to the same student, which keeps the data linked.' },
            { term: 'Casting', def: 'int() and str() convert between numbers and text when needed.' },
          ],
        },
        {
          t: 'tip',
          body: [
            'For the OCR programming project, get into the habit of writing a comment above each subprogram saying what it does, what it takes in and what it gives back. It makes marking, and your own debugging, far easier.',
          ],
        },
        { t: 'demo', id: 'python-drill', caption: 'Test yourself on fifteen Python output questions.' },
      ],
    },
  ],
  quizzes: [
    {
      id: 'py-q1',
      title: 'Quiz 1: Python basics',
      questions: [
        { q: 'What does input() always return?', options: ['An integer', 'A string', 'A float', 'A Boolean'], answer: 1, why: 'Input always gives text, so you must cast it before doing arithmetic.' },
        { q: 'What is printed by print(7 // 2)?', options: ['3.5', '3', '4', '1'], answer: 1, why: 'Double slash is integer division, which discards the decimal part.' },
        { q: 'What is printed by print(7 % 2)?', options: ['3', '1', '3.5', '0'], answer: 1, why: 'The percent sign gives the remainder, and 7 divided by 2 leaves 1.' },
        { q: 'Which line correctly reads a whole number from the user?', options: ['x = input("Number: ")', 'x = int(input("Number: "))', 'x = str(input("Number: "))', 'int x = input()'], answer: 1, why: 'The input is read as text then cast to an integer with int().' },
        { q: 'What does range(2, 8) produce?', options: ['2 3 4 5 6 7 8', '2 3 4 5 6 7', '0 1 2 3 4 5 6 7', '2 8'], answer: 1, why: 'range stops before the second number.' },
        { q: 'Why does Python indentation matter?', options: ['It only looks tidy', 'It defines which lines belong inside a block such as a loop or if statement', 'It speeds up the program', 'It is ignored by Python'], answer: 1, why: 'In Python, indentation is part of the syntax and changes what the program does.' },
        { q: 'What symbol starts a comment in Python?', options: ['//', '#', '--', '/*'], answer: 1, why: 'A hash symbol makes Python ignore the rest of the line.' },
        { q: 'What is printed by print("5" + "3")?', options: ['8', '53', 'An error', '15'], answer: 1, why: 'Both values are strings, and adding strings joins them together.' },
        { q: 'Which is a valid variable name?', options: ['2score', 'total score', 'total_score', 'total-score'], answer: 2, why: 'Names cannot start with a digit or contain spaces or hyphens, but underscores are fine.' },
        { q: 'What does print(2 ** 4) output?', options: ['8', '16', '6', '24'], answer: 1, why: 'The double asterisk means to the power of, so 2 to the power 4 is 16.' },
      ],
    },
    {
      id: 'py-q2',
      title: 'Quiz 2: Structures, lists and files',
      questions: [
        { q: 'A list is called scores and has 4 items. Which index is the last one?', options: ['4', '3', '5', '0'], answer: 1, why: 'Indexes go from 0 to 3 when there are four items.' },
        { q: 'What does scores.append(9) do?', options: ['Replaces the first item with 9', 'Adds 9 to the end of the list', 'Removes 9 from the list', 'Sorts the list'], answer: 1, why: 'append adds a new item at the end.' },
        { q: 'What is printed by len("byte quest")?', options: ['9', '10', '11', '2'], answer: 1, why: 'There are ten characters including the space.' },
        { q: 'What does word[1:4] give if word = "PYTHON"?', options: ['PYT', 'YTH', 'YTHO', 'THO'], answer: 1, why: 'It takes indexes 1, 2 and 3, which are Y, T and H.' },
        { q: 'What does open("data.txt", "w") do if the file already has content?', options: ['Adds to the end', 'Deletes the existing content', 'Raises an error', 'Makes it read only'], answer: 1, why: 'Write mode wipes the file. Append mode keeps what is there.' },
        { q: 'Which mode adds new data to the end of a file?', options: ['"r"', '"w"', '"a"', '"x"'], answer: 2, why: 'Append mode keeps existing content and writes at the end.' },
        { q: 'What is the difference between a function and a procedure?', options: ['A function returns a value', 'A procedure runs faster', 'A function cannot take parameters', 'There is no difference'], answer: 0, why: 'The return value is the difference the exam looks for.' },
        { q: 'What does line.strip() do when reading a file?', options: ['Splits the line into fields', 'Removes whitespace and the newline character from each end', 'Converts to upper case', 'Deletes the line'], answer: 1, why: 'strip removes leading and trailing whitespace including the newline.' },
        { q: 'What does "12,45".split(",") produce?', options: ['1245', '["12", "45"]', '[12, 45]', 'An error'], answer: 1, why: 'split returns a list of strings, so the numbers still need casting.' },
        { q: 'grid = [[1,2],[3,4]]. What does grid[1][0] give?', options: ['1', '2', '3', '4'], answer: 2, why: 'Row 1 is [3, 4] and column 0 of that row is 3.' },
      ],
    },
  ],
  exam: [
    {
      id: 'py-e1',
      stem: 'Write a Python program that asks the user for 5 numbers, stores them in a list, and prints the total and the average.',
      marks: 6,
      markScheme: [
        { text: 'Creates an empty list.', accept: [['[]'], ['list()'], ['= [ ]']] },
        { text: 'Uses a loop that runs 5 times.', accept: [['range(5)'], ['range(0, 5)'], ['range(1, 6)'], ['for']] },
        { text: 'Uses input with a cast to a number.', accept: [['int(input'], ['float(input'], ['input'], ['cast']] },
        { text: 'Adds each number to the list.', accept: [['append']] },
        { text: 'Calculates the total correctly.', accept: [['sum('], ['total = total +'], ['total +='], ['total']] },
        { text: 'Calculates and prints the average by dividing by 5 or by the length of the list.', accept: [['/ 5'], ['/len'], ['/ len'], ['average'], ['mean']] },
      ],
      modelAnswer:
        'numbers = []\n\nfor i in range(5):\n    value = int(input("Enter a number: "))\n    numbers.append(value)\n\ntotal = 0\nfor n in numbers:\n    total = total + n\n\naverage = total / len(numbers)\n\nprint("Total:", total)\nprint("Average:", average)',
      examinerTip: 'Dividing by len(numbers) rather than by 5 means the program still works if the count changes later.',
    },
    {
      id: 'py-e2',
      stem: 'Write a Python subprogram called is_even that takes a number as a parameter and returns True if it is even and False if it is odd.',
      marks: 4,
      markScheme: [
        { text: 'Defines a subprogram with a parameter.', accept: [['def is_even'], ['def', 'n'], ['def', 'number']] },
        { text: 'Uses the modulus operator to find the remainder.', accept: [['%'], ['mod']] },
        { text: 'Compares the remainder with 0.', accept: [['== 0'], ['==0'], ['equals 0']] },
        { text: 'Returns True or False correctly.', accept: [['return true'], ['return false'], ['return']] },
      ],
      modelAnswer:
        'def is_even(number):\n    if number % 2 == 0:\n        return True\n    else:\n        return False\n\n# This shorter version is also correct:\n# def is_even(number):\n#     return number % 2 == 0',
    },
    {
      id: 'py-e3',
      context: 'A program should only accept a password that is at least 8 characters long.',
      stem: 'Write a Python program that keeps asking for a password until a valid one is entered.',
      marks: 5,
      markScheme: [
        { text: 'Uses a while loop for the repetition.', accept: [['while']] },
        { text: 'Uses len() to check the number of characters.', accept: [['len(']] },
        { text: 'The condition correctly tests for fewer than 8 characters.', accept: [['< 8'], ['<8'], ['>= 8'], ['>=8']] },
        { text: 'Asks for input inside the loop.', accept: [['input']] },
        { text: 'Displays a suitable error message and confirms acceptance afterwards.', accept: [['print'], ['too short'], ['try again'], ['accepted']] },
      ],
      modelAnswer:
        'password = ""\n\nwhile len(password) < 8:\n    password = input("Enter a password of at least 8 characters: ")\n    if len(password) < 8:\n        print("That is too short. Please try again.")\n\nprint("Password accepted.")',
    },
    {
      id: 'py-e4',
      stem: 'Explain what is wrong with this code and write the corrected version:\n\nage = input("Age: ")\nif age > 17\n    print("Adult")',
      marks: 4,
      markScheme: [
        { text: 'input returns a string, so it must be cast to an integer.', accept: [['string'], ['int('], ['cast'], ['convert']] },
        { text: 'The if statement is missing a colon.', accept: [['colon'], [':']] },
        { text: 'Comparing a string with a number causes an error.', accept: [['error'], ['cannot compare'], ['type']] },
        { text: 'Correct code is given with the cast, the colon and the indentation.', accept: [['int(input'], ['age > 17:'], ['if int']] },
      ],
      modelAnswer:
        'There are two errors. First, input returns a string, so comparing age with the number 17 raises a type error. Second, the if statement is missing the colon at the end of the line, which is a syntax error.\n\nThe corrected version is:\n\nage = int(input("Age: "))\nif age > 17:\n    print("Adult")',
    },
    {
      id: 'py-e5',
      stem: 'Write a Python program that reads a file called names.txt, which has one name on each line, and prints how many names it contains.',
      marks: 5,
      markScheme: [
        { text: 'Opens the file in read mode.', accept: [['open('], ['"r"'], ["'r'"]] },
        { text: 'Sets a counter to zero before the loop.', accept: [['= 0'], ['count'], ['counter']] },
        { text: 'Loops through each line of the file.', accept: [['for line'], ['for'], ['readlines']] },
        { text: 'Increases the counter for each line.', accept: [['+ 1'], ['+= 1'], ['count + 1']] },
        { text: 'Closes the file and prints the total.', accept: [['close'], ['print']] },
      ],
      modelAnswer:
        'count = 0\n\nfile = open("names.txt", "r")\nfor line in file:\n    if line.strip() != "":\n        count = count + 1\nfile.close()\n\nprint("There are", count, "names in the file.")',
      examinerTip: 'Checking that the line is not blank stops an empty final line being counted as a name.',
    },
  ],
};
