import type { Topic } from '../../types';

export const t2_3: Topic = {
  id: 't2-3',
  code: '2.3',
  title: 'Producing Robust Programs',
  blurb: 'Defensive design, input validation, maintainability, error types and testing.',
  paper: 'Paper 2',
  icon: 'testtube',
  lessons: [
    {
      id: 't2-3-l1',
      title: 'Defensive design',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'A robust program keeps working sensibly even when the user does something unexpected. Defensive design means planning for that from the start instead of hoping for the best.' },
        { t: 'diagram', id: 'defensive-design' },
        { t: 'h', text: 'Anticipating misuse' },
        { t: 'p', text: 'Ask yourself what a user might do wrong, whether by accident or on purpose, and then make sure the program handles it.' },
        {
          t: 'real',
          title: 'Real life scenario: a school lunch ordering app',
          body: [
            'What if a student types "seven" instead of 7? The program must not crash.',
            'What if they order minus three sandwiches? The total would become negative.',
            'What if they leave the name box empty and press submit?',
            'What if they paste 2000 characters into the comments box?',
            'Each of these needs a rule that catches it and a clear message telling the user what to do.',
          ],
        },
        { t: 'h', text: 'Input validation' },
        { t: 'p', text: 'Validation checks that data is sensible before the program uses it. Learn these named checks.' },
        {
          t: 'table',
          head: ['Check', 'What it does', 'Example'],
          rows: [
            ['Range check', 'Value must be between two limits', 'An age must be between 11 and 19'],
            ['Type check', 'Value must be the right data type', 'A quantity must be a whole number'],
            ['Presence check', 'Value must not be left empty', 'A name box cannot be blank'],
            ['Length check', 'Value must have the right number of characters', 'A password must be at least 8 characters'],
            ['Format check', 'Value must follow a pattern', 'An email must contain an at symbol'],
            ['Look up check', 'Value must be in an accepted list', 'A house must be Ash, Oak or Elm'],
          ],
        },
        { t: 'code', lang: 'python', caption: 'Validation with a loop, the pattern examiners want', code: 'age = -1\n\nwhile age < 11 or age > 19:\n    entry = input("Enter your age (11 to 19): ")\n    if entry.isdigit():\n        age = int(entry)\n        if age < 11 or age > 19:\n            print("That is outside the allowed range.")\n    else:\n        print("Please enter a whole number.")\n\nprint("Thank you, age recorded as", age)' },
        { t: 'h', text: 'Authentication' },
        { t: 'p', text: 'Authentication proves that the user is who they claim to be, usually with a username and password. Good practice includes minimum password length, a mixture of character types, limiting the number of attempts, and two factor authentication.' },
        { t: 'h', text: 'Maintainability' },
        {
          t: 'ul',
          items: [
            'Use meaningful variable names. total_score tells you far more than t.',
            'Indent code consistently so the structure is obvious.',
            'Add comments to explain WHY something is done, not what the line obviously says.',
            'Break the program into subprograms so each part has one clear job.',
            'Use constants for fixed values instead of scattering numbers through the code.',
          ],
        },
        {
          t: 'example',
          title: 'Same code, very different quality',
          body: [
            'Poor: a=int(input());b=a*0.2;print(b)',
            'Good: VAT_RATE = 0.2 then price = float(input("Enter price: ")) then vat = price * VAT_RATE then print("VAT is", vat)',
            'The second version tells the reader exactly what is happening, and changing the VAT rate takes one edit.',
          ],
        },
      ],
    },
    {
      id: 't2-3-l2',
      title: 'Errors and testing',
      minutes: 9,
      blocks: [
        { t: 'h', text: 'Types of error' },
        {
          t: 'table',
          head: ['Error type', 'What it means', 'Example'],
          rows: [
            ['Syntax error', 'The code breaks the rules of the language, so it will not run at all', 'Missing colon, unmatched bracket, prnt instead of print'],
            ['Logic error', 'The program runs but produces the wrong result', 'Using + instead of *, or a loop that runs one time too many'],
          ],
        },
        {
          t: 'warn',
          body: [
            'A logic error is more dangerous than a syntax error. A syntax error stops the program immediately so you know at once. A logic error lets the program run happily while quietly giving wrong answers.',
          ],
        },
        { t: 'h', text: 'Iterative and final testing' },
        {
          t: 'ul',
          items: [
            'Iterative testing happens while the program is being written. You test each module as you finish it, fix problems, then carry on. Problems are found early when they are cheap to fix.',
            'Final testing happens once the whole program is complete. It checks that all the parts work together and that the program meets the original requirements.',
          ],
        },
        { t: 'h', text: 'Choosing test data' },
        { t: 'diagram', id: 'testing-types' },
        {
          t: 'key',
          terms: [
            { term: 'Normal data', def: 'Sensible values that should be accepted, for example an age of 14 when 11 to 19 is allowed.' },
            { term: 'Boundary data', def: 'Values right at the edge of what is allowed, for example 11 and 19. These are where off by one errors hide.' },
            { term: 'Invalid or erroneous data', def: 'Values that should be rejected, for example 10, 20 or the word cat.' },
          ],
        },
        {
          t: 'example',
          title: 'A full test plan for a password box needing 8 to 12 characters',
          body: [
            'Normal: "dragon2024" (10 characters) should be accepted.',
            'Boundary: "abcdefgh" (8 characters) should be accepted.',
            'Boundary: "abcdefghijkl" (12 characters) should be accepted.',
            'Boundary: "abcdefg" (7 characters) should be rejected.',
            'Invalid: "" (empty) should be rejected.',
            'A test plan should list the test data, the reason for it, the expected result and the actual result.',
          ],
        },
        {
          t: 'tip',
          body: [
            'Exam questions often say "give one example of each type of test data for this program". Give the actual value and say whether it should be accepted or rejected. Just writing "boundary data" scores nothing.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't2-3-q1',
      title: 'Quiz 1: Defensive design',
      questions: [
        { q: 'What is input validation?', options: ['Checking the program has no syntax errors', 'Checking that data entered is sensible before it is used', 'Making the program run faster', 'Encrypting user input'], answer: 1, why: 'Validation checks data against rules before the program relies on it.' },
        { q: 'A form only accepts ages from 11 to 19. Which check is this?', options: ['Presence check', 'Range check', 'Format check', 'Length check'], answer: 1, why: 'A range check confirms a value falls between two limits.' },
        { q: 'Which check makes sure a required box is not left empty?', options: ['Presence check', 'Type check', 'Range check', 'Look up check'], answer: 0, why: 'A presence check confirms that something has actually been entered.' },
        { q: 'Which check would confirm an email address contains an at symbol?', options: ['Range check', 'Format check', 'Length check', 'Type check'], answer: 1, why: 'A format check confirms the data follows the expected pattern.' },
        { q: 'What is authentication?', options: ['Checking data is sensible', 'Confirming the user is who they claim to be', 'Testing a program', 'Sorting a list'], answer: 1, why: 'Authentication proves identity, usually with a username and password.' },
        { q: 'Which of these improves maintainability?', options: ['Using single letter variable names', 'Removing all comments', 'Using meaningful variable names and indentation', 'Putting the whole program on one line'], answer: 2, why: 'Clear names, indentation and comments make code easier for others to understand and change.' },
        { q: 'Why should comments explain why rather than what?', options: ['Comments slow the program down', 'The code already shows what happens, but not the reason behind it', 'Comments must be short', 'Because the compiler reads them'], answer: 1, why: 'A useful comment adds information the code cannot show by itself.' },
        { q: 'Anticipating misuse means:', options: ['Assuming users will always do the right thing', 'Planning for the mistakes and misuse a user might attempt', 'Blocking all input', 'Testing only once at the end'], answer: 1, why: 'You design defences for what a user might do wrong, deliberately or by accident.' },
        { q: 'Which is an example of a look up check?', options: ['A password must be 8 characters', 'A house name must be Ash, Oak or Elm', 'An age must be a number', 'A field must not be blank'], answer: 1, why: 'A look up check confirms the value appears in a list of accepted values.' },
        { q: 'Why use constants for fixed values such as VAT?', options: ['They make the program run faster', 'The value is defined in one place and cannot be changed by mistake', 'They use less memory', 'They avoid the need for comments'], answer: 1, why: 'One definition means one edit when the value changes, and the name explains its purpose.' },
      ],
    },
    {
      id: 't2-3-q2',
      title: 'Quiz 2: Errors and testing',
      questions: [
        { q: 'What is a syntax error?', options: ['The program runs but gives the wrong answer', 'The code breaks the rules of the language so it will not run', 'The computer runs out of memory', 'The user enters bad data'], answer: 1, why: 'Syntax errors break the grammar of the language and are caught before the program runs.' },
        { q: 'What is a logic error?', options: ['A missing bracket', 'The program runs but produces an incorrect result', 'A misspelled keyword', 'A missing colon'], answer: 1, why: 'A logic error means the instructions are valid but they do the wrong thing.' },
        { q: 'Which error type is harder to spot?', options: ['Syntax error', 'Logic error', 'They are equally easy', 'Neither can be spotted'], answer: 1, why: 'A logic error lets the program run, so it can go unnoticed while producing wrong answers.' },
        { q: 'A field accepts values from 1 to 10. Which is boundary data?', options: ['5', '1', '15', 'cat'], answer: 1, why: 'Boundary data sits right at the edge of the allowed range, so 1 and 10 are boundaries.' },
        { q: 'A field accepts values from 1 to 10. Which is invalid data?', options: ['1', '10', '11', '7'], answer: 2, why: 'Invalid data should be rejected, and 11 is outside the accepted range.' },
        { q: 'What is iterative testing?', options: ['Testing at the very end only', 'Testing each part as it is written and fixing problems as you go', 'Testing by the customer', 'Testing without any test data'], answer: 1, why: 'Iterative testing runs throughout development so errors are found early.' },
        { q: 'What is final testing?', options: ['Testing during development', 'Testing the whole finished program against the original requirements', 'Testing only invalid data', 'Testing the hardware'], answer: 1, why: 'Final testing checks the complete program works as a whole and meets the requirements.' },
        { q: 'What should a test plan include?', options: ['Only the test data', 'Test data, the reason for it, the expected result and the actual result', 'Only the expected result', 'Just a list of errors'], answer: 1, why: 'A good test plan lets someone else repeat the test and compare outcomes.' },
        { q: 'print("Hello" is an example of:', options: ['A logic error', 'A syntax error', 'A runtime success', 'Valid code'], answer: 1, why: 'The closing bracket is missing, which breaks the rules of the language.' },
        { q: 'A program that calculates an average by dividing by the wrong number contains:', options: ['A syntax error', 'A logic error', 'No error', 'A validation error'], answer: 1, why: 'The code runs perfectly well, it just produces the wrong answer.' },
      ],
    },
  ],
  exam: [
    {
      id: 't2-3-e1',
      context: 'A program asks a user to enter the number of tickets they want, which must be between 1 and 6.',
      stem: 'Give one example each of normal, boundary and invalid test data for this input, and state the expected result for each.',
      marks: 6,
      markScheme: [
        { text: 'Normal data such as 3 or 4.', accept: [['3'], ['4'], ['2'], ['5']] },
        { text: 'Normal data should be accepted.', accept: [['accept'], ['allowed'], ['works'], ['valid']] },
        { text: 'Boundary data such as 1 or 6.', accept: [['1'], ['6']] },
        { text: 'Boundary data should be accepted because it is inside the limit.', accept: [['accept'], ['edge'], ['limit'], ['allowed']] },
        { text: 'Invalid data such as 0, 7 or the word two.', accept: [['0'], ['7'], ['-1'], ['two'], ['letters'], ['text'], ['abc']] },
        { text: 'Invalid data should be rejected with an error message.', accept: [['reject'], ['error message'], ['not accepted'], ['refuse'], ['ask again']] },
      ],
      modelAnswer:
        'Normal data: 3. This is a sensible everyday value inside the allowed range, so it should be accepted and the booking should continue. Boundary data: 1 and 6. These sit exactly on the edge of what is allowed, so both should be accepted. Testing these catches off by one errors where a programmer has written greater than instead of greater than or equal to. Invalid data: 0, 7 and the word two. Each of these should be rejected and the program should display a clear error message and ask the user to enter the number again, rather than crashing.',
    },
    {
      id: 't2-3-e2',
      stem: 'Explain the difference between a syntax error and a logic error, giving an example of each.',
      marks: 4,
      markScheme: [
        { text: 'A syntax error breaks the rules of the programming language.', accept: [['rules'], ['grammar'], ['syntax'], ['not valid']] },
        { text: 'The program will not run at all until it is fixed.', accept: [['will not run'], ['does not run'], ['cannot run'], ['stops']] },
        { text: 'A logic error means the program runs but gives the wrong output.', accept: [['runs'], ['wrong'], ['incorrect result'], ['unexpected']] },
        { text: 'Valid examples are given, such as a missing bracket and using plus instead of times.', accept: [['bracket'], ['colon'], ['spelling'], ['missing'], ['plus instead'], ['+ instead'], ['wrong operator'], ['off by one']] },
      ],
      modelAnswer:
        'A syntax error is a mistake that breaks the rules of the programming language, such as leaving out a closing bracket or writing prnt instead of print. The translator cannot understand the code, so the program will not run at all until the mistake is corrected. A logic error is a mistake in the reasoning of the program. The code is valid so it runs perfectly, but the result is wrong. An example is writing total = price + quantity when it should be total = price * quantity. Logic errors are harder to find precisely because nothing appears to go wrong.',
    },
    {
      id: 't2-3-e3',
      stem: 'Describe three ways a programmer can make a program easier to maintain.',
      marks: 6,
      markScheme: [
        { text: 'Use meaningful variable and subprogram names.', accept: [['meaningful'], ['sensible names'], ['descriptive'], ['variable names']] },
        { text: 'Use comments to explain the purpose of sections of code.', accept: [['comment']] },
        { text: 'Indent code consistently so the structure is clear.', accept: [['indent'], ['layout'], ['white space'], ['whitespace']] },
        { text: 'Break the program into subprograms with one clear job each.', accept: [['subprogram'], ['function'], ['procedure'], ['modul']] },
        { text: 'Use constants rather than repeating fixed values throughout the code.', accept: [['constant']] },
        { text: 'Each method is explained, not just listed.', accept: [['because'], ['so that'], ['this means'], ['makes it'], ['allows'], ['helps']] },
      ],
      modelAnswer:
        'Firstly the programmer should use meaningful variable names, so total_score immediately tells another programmer what is stored, whereas t tells them nothing and forces them to read the whole program to work it out. Secondly they should add comments explaining the purpose of each section, particularly why an unusual approach has been taken, so somebody returning to the code months later understands the reasoning without having to work it out again. Thirdly they should break the program into subprograms, each doing one clear job with a descriptive name, because that makes the main program short and readable and means a change to one feature only affects one small block of code. Using constants for fixed values and indenting consistently also help a great deal.',
    },
    {
      id: 't2-3-e4',
      context: 'A website registration form asks for a username and a password.',
      stem: 'Describe two validation checks that should be applied and explain what each one prevents.',
      marks: 4,
      markScheme: [
        { text: 'A presence check makes sure the field is not left blank.', accept: [['presence'], ['blank'], ['empty'], ['not left']] },
        { text: 'A length check makes sure the password is long enough.', accept: [['length'], ['characters'], ['at least'], ['minimum']] },
        { text: 'A format check makes sure the data follows the required pattern.', accept: [['format'], ['pattern'], ['contains'], ['symbol'], ['uppercase']] },
        { text: 'Each check is linked to what it prevents, such as an incomplete record or an easily guessed password.', accept: [['prevent'], ['stops'], ['guess'], ['brute force'], ['incomplete'], ['weak']] },
      ],
      modelAnswer:
        'A presence check should be applied to the username field to make sure it has not been left blank. This prevents an incomplete account being created that the user could never log in to and that would be difficult to identify in the database. A length check should be applied to the password so it must be at least eight characters long. This prevents users choosing very short passwords that could be found almost instantly by a brute force attack. A format check requiring at least one number and one capital letter would strengthen this further.',
    },
    {
      id: 't2-3-e5',
      stem: 'Explain the difference between iterative testing and final testing, and why both are needed.',
      marks: 4,
      markScheme: [
        { text: 'Iterative testing happens during development, as each part is written.', accept: [['during'], ['as it is written'], ['while'], ['each module'], ['throughout']] },
        { text: 'Problems are found early when they are quicker and cheaper to fix.', accept: [['early'], ['cheaper'], ['quicker to fix'], ['before']] },
        { text: 'Final testing happens when the program is complete.', accept: [['complete'], ['finished'], ['at the end'], ['whole program']] },
        { text: 'Final testing checks the whole program works together and meets the original requirements.', accept: [['requirement'], ['works together'], ['as a whole'], ['whole system'], ['specification']] },
      ],
      modelAnswer:
        'Iterative testing takes place throughout development. Each module is tested as soon as it is written, any errors are corrected, and then the programmer moves on. This means problems are caught early, while they are still small and cheap to fix, and before other code is built on top of them. Final testing takes place once the whole program is finished. It checks that all the separate modules work correctly together and that the completed program meets the original requirements set out at the start. Both are needed because iterative testing on its own cannot show that the parts work together, while final testing on its own would mean errors are only discovered at the very end when they are far more expensive to correct.',
    },
  ],
};
