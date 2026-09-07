import type { ExamPaper } from '../../types';

export const paper2_3: ExamPaper = {
  id: 'p2-3',
  component: 'Paper 2',
  number: 3,
  title: 'Paper 2 Mock C: Full Component Mix',
  minutes: 45,
  totalMarks: 47,
  blurb: 'Every Paper 2 topic mixed, including languages, IDEs and Exam Reference Language.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p2-3-1', marks: 1, stem: 'Which translator produces an executable file?', options: ['Interpreter', 'Compiler', 'Debugger', 'Editor'], answer: 1, why: 'A compiler translates the whole program and saves an executable that runs without the source.' },
        { kind: 'mcq', id: 'p2-3-2', marks: 1, stem: 'How many times does "for i = 0 to 5" run in OCR Exam Reference Language?', options: ['5', '6', '4', '0'], answer: 1, why: 'ERL includes the final value, so i takes 0, 1, 2, 3, 4 and 5.' },
        { kind: 'mcq', id: 'p2-3-3', marks: 1, stem: 'Which IDE feature lets you pause a program and inspect variables?', options: ['Editor', 'Breakpoint in the debugger', 'Translator', 'Auto complete'], answer: 1, why: 'Breakpoints pause execution so the current state can be examined.' },
        { kind: 'mcq', id: 'p2-3-4', marks: 1, stem: 'Which is a low level language?', options: ['Python', 'Java', 'Assembly language', 'JavaScript'], answer: 2, why: 'Assembly is close to the hardware and specific to one processor.' },
        { kind: 'mcq', id: 'p2-3-5', marks: 1, stem: 'What is the ERL equivalent of Python len(word)?', options: ['word.size', 'word.length', 'length(word)', 'word.count'], answer: 1, why: 'ERL uses the property word.length.' },
        { kind: 'mcq', id: 'p2-3-6', marks: 1, stem: 'A local variable can be used:', options: ['Anywhere in the program', 'Only inside the subprogram where it is declared', 'Only in the main program', 'Only inside loops'], answer: 1, why: 'A local variable exists only within its own subprogram and is removed when that ends.' },
        { kind: 'mcq', id: 'p2-3-7', marks: 1, stem: 'What does the ERL operator DIV do?', options: ['Gives the remainder', 'Whole number division', 'Raises to a power', 'Rounds up'], answer: 1, why: 'DIV is integer division, matching // in Python. MOD gives the remainder.' },
        { kind: 'mcq', id: 'p2-3-8', marks: 1, stem: 'Which is an advantage of a high level language over machine code?', options: ['It runs faster', 'It is portable across different machines', 'It needs no translation', 'It uses less memory'], answer: 1, why: 'High level code can be translated for different processors, unlike machine code.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p2-3-9',
          marks: 6,
          stem: 'Compare compilers and interpreters, and explain which is more useful to a student who is learning to program.',
          markScheme: [
            { text: 'A compiler translates the whole program in one go.', accept: [['whole'], ['entire'], ['one go'], ['all at once']] },
            { text: 'An interpreter translates and runs one line at a time.', accept: [['line at a time'], ['line by line'], ['one line']] },
            { text: 'A compiler produces an executable that runs without the source code.', accept: [['executable'], ['without the source'], ['file']] },
            { text: 'Compiled code runs faster because translation has already happened.', accept: [['faster'], ['already translated'], ['quicker']] },
            { text: 'An interpreter stops at the first error and reports it.', accept: [['first error'], ['stops'], ['reports']] },
            { text: 'Concludes that an interpreter suits a learner because errors are easier to find.', accept: [['learner'], ['student'], ['easier to find'], ['beginner'], ['debug']] },
          ],
          modelAnswer:
            'A compiler translates the whole program in one go before it runs and produces an executable file, so the program can then be run any number of times without the source code or the compiler present, and it runs quickly because no translation happens while it executes. An interpreter translates and executes one line at a time, every time the program runs, so it is slower and always needs the source. The other key difference is error handling: a compiler reports all the errors together at the end of translation, while an interpreter stops at the first error it meets and tells you exactly which line it was on. For a student learning to program the interpreter is far more useful, because that immediate, single error message makes mistakes much easier to locate and fix than a long list produced at the end.',
        },
        {
          kind: 'written',
          id: 'p2-3-10',
          marks: 5,
          context: 'total = 0\nfor i = 1 to 6\n  if i MOD 3 == 0 then\n    total = total + i\n  endif\nnext i\nprint(total)',
          stem: 'State the output of this Exam Reference Language program and explain how it works.',
          markScheme: [
            { text: 'The output is 9.', accept: [['9']] },
            { text: 'The loop runs six times with i taking the values 1 to 6.', accept: [['six'], ['6 times'], ['1 to 6'], ['includes 6']] },
            { text: 'MOD gives the remainder, so the condition is true when i divides exactly by 3.', accept: [['mod'], ['remainder'], ['divisible'], ['multiple of 3']] },
            { text: 'Only 3 and 6 satisfy the condition.', accept: [['3', '6']] },
            { text: 'total becomes 3 then 9, and 9 is printed after the loop.', accept: [['3 then 9'], ['9'], ['after the loop']] },
          ],
          modelAnswer:
            'The output is 9. The for loop runs six times because Exam Reference Language includes the final value, so i takes the values 1, 2, 3, 4, 5 and 6. Each time, i MOD 3 gives the remainder when i is divided by 3, and the if statement only adds i to total when that remainder is 0, which happens for multiples of 3. Only 3 and 6 qualify, so total becomes 0 + 3 = 3 and then 3 + 6 = 9. The print statement is outside the loop, so 9 is printed once at the end. The program adds up the multiples of 3 up to 6.',
        },
        {
          kind: 'written',
          id: 'p2-3-11',
          marks: 4,
          stem: 'Describe two features of an integrated development environment and explain how each helps a programmer.',
          markScheme: [
            { text: 'The editor colour codes keywords, numbers lines and indents automatically.', accept: [['editor'], ['colour'], ['line number'], ['indent'], ['auto complete']] },
            { text: 'This makes the code easier to read and reveals spelling mistakes immediately.', accept: [['easier to read'], ['spelling'], ['spot'], ['structure'], ['mistake']] },
            { text: 'Error diagnostics identify the line and type of error.', accept: [['error diagnostic'], ['error message'], ['line number'], ['identif']] },
            { text: 'A debugger with breakpoints lets variables be inspected while the program runs.', accept: [['debugger'], ['breakpoint'], ['inspect'], ['step through'], ['watch']] },
          ],
          modelAnswer:
            'The editor colour codes keywords, adds line numbers and indents automatically. That helps because a keyword which fails to change colour is instantly recognisable as a spelling mistake, and the indentation makes the structure of loops and conditions obvious at a glance, which matters especially in Python where indentation is part of the syntax. Error diagnostics and a debugger are the second feature. When something goes wrong the IDE names the line and the type of error, and breakpoints let the programmer pause the program partway through and inspect the value of every variable, which is by far the fastest way to track down a logic error that produces no error message at all.',
        },
        {
          kind: 'written',
          id: 'p2-3-12',
          marks: 6,
          context: 'A program needs a subprogram that takes a word and returns True if it is a palindrome, meaning it reads the same backwards, and False if it is not.',
          stem: 'Write this subprogram in a high level language or Exam Reference Language, and explain how it works.',
          markScheme: [
            { text: 'Defines a subprogram with one parameter.', accept: [['def '], ['function'], ['parameter']] },
            { text: 'Converts the word to a single case so capitals do not matter.', accept: [['lower'], ['upper'], ['case']] },
            { text: 'Compares characters from each end, or builds a reversed copy.', accept: [['reverse'], ['[::-1]'], ['each end'], ['backwards'], ['loop']] },
            { text: 'Returns True when the word matches its reverse.', accept: [['return true'], ['true']] },
            { text: 'Returns False otherwise.', accept: [['return false'], ['false']] },
            { text: 'Explains the logic clearly.', accept: [['because'], ['this means'], ['so that'], ['compare'], ['same']] },
          ],
          modelAnswer:
            'def is_palindrome(word):\n    word = word.lower()\n    reversed_word = ""\n    for i in range(len(word) - 1, -1, -1):\n        reversed_word = reversed_word + word[i]\n    if word == reversed_word:\n        return True\n    else:\n        return False\n\nThe word is first converted to lower case so that Racecar is still recognised as a palindrome. The loop then walks backwards through the original word, from the last index down to 0, building a reversed copy one character at a time. Finally the reversed copy is compared with the original, and the subprogram returns True if they match and False if they do not. In Python the reversal could be written more briefly as word[::-1], but the loop shows the logic clearly.',
        },
        {
          kind: 'written',
          id: 'p2-3-13',
          marks: 4,
          stem: 'Explain why a program written in a high level language must be translated, and name the three types of translator.',
          markScheme: [
            { text: 'A processor can only execute machine code, which is binary.', accept: [['machine code'], ['binary'], ['only understand']] },
            { text: 'High level code uses English style keywords the processor cannot understand directly.', accept: [['english'], ['keyword'], ['human'], ['cannot understand']] },
            { text: 'Names a compiler and an interpreter.', accept: [['compiler'], ['interpreter']] },
            { text: 'Names an assembler, which translates assembly language.', accept: [['assembler']] },
          ],
          modelAnswer:
            'A CPU can only execute machine code, which is binary instructions matching its own instruction set. A high level language such as Python uses English style keywords and ordinary mathematical notation designed to be read by people, and the processor has no way of understanding those directly, so a translator must convert the source code into machine code first. The three types of translator are the compiler, which translates the whole program in one go and produces an executable, the interpreter, which translates and runs one line at a time, and the assembler, which translates assembly language into machine code with one assembly instruction becoming one machine code instruction.',
        },
        {
          kind: 'written',
          id: 'p2-3-14',
          marks: 5,
          stem: 'Explain the difference between a local variable and a global variable, and give one reason why using global variables everywhere is poor practice.',
          markScheme: [
            { text: 'A local variable can only be used inside the subprogram where it is declared.', accept: [['inside'], ['within'], ['only', 'subprogram'], ['scope']] },
            { text: 'A global variable can be read or changed anywhere in the program.', accept: [['anywhere'], ['whole program'], ['everywhere'], ['any part']] },
            { text: 'Local variables are removed from memory when the subprogram ends.', accept: [['memory'], ['removed'], ['deleted'], ['freed'], ['destroyed']] },
            { text: 'Global variables can be changed accidentally by another part of the program.', accept: [['accidental'], ['by mistake'], ['another part'], ['interfere'], ['overwrite']] },
            { text: 'That creates bugs which are very hard to track down.', accept: [['bug'], ['hard to find'], ['difficult'], ['track down'], ['debug']] },
          ],
          modelAnswer:
            'A local variable is created inside a subprogram, can only be used within that subprogram, and is removed from memory as soon as the subprogram finishes. A global variable is declared outside any subprogram and can be read or changed by any part of the program for the whole time it runs. Using globals everywhere is poor practice because any part of the program can change them, so two subprograms that both happen to use a variable called count will silently interfere with each other. The resulting bugs are very hard to track down, because the line that produces the wrong answer may be nowhere near the line that actually caused it. Local variables also free their memory when they finish, which globals do not.',
        },
        {
          kind: 'written',
          id: 'p2-3-15',
          marks: 5,
          context: 'A student writes:\n\nage = input("Age: ")\nif age > 17\n    print("Adult")',
          stem: 'Identify the errors in this code, state their type, and write the corrected version.',
          markScheme: [
            { text: 'The missing colon after the if condition is a syntax error.', accept: [['colon'], [':'], ['syntax']] },
            { text: 'input returns a string, so it must be cast to an integer.', accept: [['string'], ['int('], ['cast'], ['convert']] },
            { text: 'Comparing a string with a number causes an error when the program runs.', accept: [['error'], ['cannot compare'], ['type'], ['crash']] },
            { text: 'Correct code includes int(input(...)).', accept: [['int(input']] },
            { text: 'Correct code includes the colon and the indented print.', accept: [['17:'], ['> 17:'], ['indent']] },
          ],
          modelAnswer:
            'There are two errors. The first is a syntax error: the if statement is missing the colon at the end of the line, so the program will not run at all. The second is a type problem: input returns a string, so age holds the text "18" rather than the number 18, and comparing a string with the integer 17 raises an error when the program runs.\n\nThe corrected version is:\n\nage = int(input("Age: "))\nif age > 17:\n    print("Adult")',
        },
        {
          kind: 'written',
          id: 'p2-3-16',
          marks: 4,
          stem: 'Give two differences between how a for loop is written in OCR Exam Reference Language and how it is written in Python.',
          markScheme: [
            { text: 'ERL includes the final value in the range.', accept: [['includes'], ['inclusive'], ['final value'], ['last number']] },
            { text: 'Python range stops before the second number.', accept: [['stops before'], ['excludes'], ['not included'], ['up to but not']] },
            { text: 'ERL closes the loop with the keyword next.', accept: [['next']] },
            { text: 'Python uses a colon and indentation with no closing keyword.', accept: [['colon'], [':'], ['indent'], ['no keyword']] },
          ],
          modelAnswer:
            'The first difference is the range. In Exam Reference Language, for i = 1 to 5 includes 5 itself, so the body runs five times. In Python, range(1, 5) stops before 5, so it only runs four times, and you would need range(1, 6) to match. The second difference is how the block is marked. Exam Reference Language closes the loop with the keyword next followed by the counter variable, while Python puts a colon at the end of the for line and relies entirely on indentation to show which lines are inside the loop.',
        },
      ],
    },
  ],
};
