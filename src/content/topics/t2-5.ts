import type { Topic } from '../../types';

export const t2_5: Topic = {
  id: 't2-5',
  code: '2.5',
  title: 'Programming Languages and IDEs',
  blurb: 'High level and low level languages, translators and the tools inside an IDE.',
  paper: 'Paper 2',
  icon: '🛠️',
  lessons: [
    {
      id: 't2-5-l1',
      title: 'High level and low level languages',
      minutes: 8,
      blocks: [
        { t: 'p', text: 'A computer can only actually run machine code, which is pure binary. Everything else has to be translated into it first.' },
        {
          t: 'table',
          head: ['', 'High level language', 'Low level language'],
          rows: [
            ['Examples', 'Python, Java, C sharp, JavaScript', 'Assembly language, machine code'],
            ['Looks like', 'English words and normal maths', 'Short mnemonics such as LDA, or pure binary'],
            ['Easy to write?', 'Yes, one line does a lot', 'No, one line does very little'],
            ['Portable?', 'Yes, runs on different machines once translated', 'No, written for one specific processor'],
            ['Memory control', 'Little direct control', 'Complete control over memory and hardware'],
            ['Needs translating?', 'Yes, by a compiler or interpreter', 'Assembly needs an assembler, machine code needs nothing'],
          ],
        },
        {
          t: 'example',
          title: 'The same job in both',
          body: [
            'High level Python: total = a + b',
            'Assembly: LDA a then ADD b then STA total',
            'One readable line becomes three machine level instructions. Now imagine writing a whole game that way.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: when low level is still used',
          body: [
            'A pacemaker, a car engine controller or a device driver may be written partly in assembly, because the programmer needs exact control over timing and memory and the code must be as small and fast as possible.',
            'For a school project, a website or a phone app, a high level language is obviously the right choice.',
          ],
        },
      ],
    },
    {
      id: 't2-5-l2',
      title: 'Translators and IDEs',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'A translator turns source code into something the processor can run. There are three types.' },
        { t: 'diagram', id: 'compiler-interpreter' },
        {
          t: 'key',
          terms: [
            { term: 'Compiler', def: 'Translates the whole program in one go and produces an executable file. It reports all the errors together at the end.' },
            { term: 'Interpreter', def: 'Translates and runs the program one line at a time. It stops at the first error it meets.' },
            { term: 'Assembler', def: 'Translates assembly language into machine code. One assembly instruction becomes one machine code instruction.' },
          ],
        },
        {
          t: 'table',
          head: ['', 'Compiler', 'Interpreter'],
          rows: [
            ['Translation', 'Whole program at once', 'One line at a time'],
            ['Output file', 'Produces an executable that can be shared', 'No file is produced'],
            ['Speed when running', 'Faster, already translated', 'Slower, translated every time it runs'],
            ['Error reporting', 'All errors listed at the end', 'Stops at the first error, easy to find'],
            ['Source code needed to run?', 'No', 'Yes, every time'],
            ['Best for', 'Finished software being distributed', 'Learning and testing while developing'],
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: why beginners meet interpreters',
          body: [
            'When you run Python in class and it stops with an error on line 7, that is the interpreter telling you exactly where you went wrong before it goes any further.',
            'A shop selling a finished game compiles it instead, so customers get a fast executable and never see the original source code.',
          ],
        },
        { t: 'h', text: 'Integrated development environments' },
        { t: 'p', text: 'An IDE is a program that gives you all the tools for writing software in one place.' },
        { t: 'diagram', id: 'ide-features' },
        {
          t: 'ul',
          items: [
            'Editor: write and change code, with colour coding, automatic indentation and line numbers.',
            'Error diagnostics: highlights mistakes and points at the line where the problem is.',
            'Run time environment: run the program without leaving the IDE, so testing is quick.',
            'Translator: the compiler or interpreter is built in so no separate step is needed.',
            'Debugger: run the program a line at a time and set breakpoints to watch variables change.',
          ],
        },
        {
          t: 'tip',
          body: [
            'Exam questions often ask you to describe two features of an IDE and explain how each helps a programmer. Always add the "how it helps" part, because that is where the second mark lives.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't2-5-q1',
      title: 'Quiz 1: Languages and translators',
      questions: [
        { q: 'Which is a high level language?', options: ['Assembly language', 'Machine code', 'Python', 'Binary'], answer: 2, why: 'Python uses English style keywords and is far removed from the hardware.' },
        { q: 'Why are high level languages easier to write than low level languages?', options: ['They run faster', 'They use English style commands and one line does a lot of work', 'They need no translator', 'They use less memory'], answer: 1, why: 'High level code is close to human language and each statement does much more.' },
        { q: 'What does an assembler do?', options: ['Translates a high level language into machine code', 'Translates assembly language into machine code', 'Runs a program line by line', 'Finds logic errors'], answer: 1, why: 'An assembler translates assembly mnemonics into the equivalent machine code.' },
        { q: 'Which translator produces an executable file?', options: ['Interpreter', 'Compiler', 'Assembler only', 'Debugger'], answer: 1, why: 'A compiler translates the whole program and saves an executable that can be run without the source.' },
        { q: 'Which translator stops at the first error it finds?', options: ['Compiler', 'Interpreter', 'Assembler', 'Linker'], answer: 1, why: 'An interpreter translates line by line so it halts as soon as it meets a problem.' },
        { q: 'Why does compiled code usually run faster than interpreted code?', options: ['It uses more memory', 'It has already been translated, so no translation happens while it runs', 'It has fewer instructions', 'It skips error checking'], answer: 1, why: 'Interpreted code is translated every time it runs, which adds work during execution.' },
        { q: 'One advantage of an interpreter for a beginner is:', options: ['It hides all errors', 'Errors are reported one at a time as they are met, making them easy to locate', 'It produces a smaller file', 'It runs without a computer'], answer: 1, why: 'Immediate, single error feedback makes debugging simpler when learning.' },
        { q: 'Which is true about machine code?', options: ['It needs a compiler', 'It is written in binary and can be executed directly by the CPU', 'It is easier to read than Python', 'It works on any processor'], answer: 1, why: 'Machine code is the binary instructions the processor executes directly.' },
        { q: 'Why might a programmer choose assembly language for an embedded system?', options: ['It is quicker to write', 'It gives precise control over hardware and memory and produces small, fast code', 'It works on any device', 'It has more built in functions'], answer: 1, why: 'Direct hardware control and efficiency matter more than convenience in embedded work.' },
        { q: 'A disadvantage of low level languages is:', options: ['They cannot control hardware', 'They are specific to one processor and are harder and slower to write', 'They run too fast', 'They need no translation'], answer: 1, why: 'Assembly is tied to one processor family and takes far longer to write.' },
      ],
    },
    {
      id: 't2-5-q2',
      title: 'Quiz 2: IDE features',
      questions: [
        { q: 'What does IDE stand for?', options: ['Internal Data Editor', 'Integrated Development Environment', 'Interpreted Debugging Engine', 'Internet Design Editor'], answer: 1, why: 'An integrated development environment brings all the programming tools together.' },
        { q: 'Which IDE feature highlights the line where a mistake has been made?', options: ['Editor', 'Error diagnostics', 'Run time environment', 'Translator'], answer: 1, why: 'Error diagnostics identify and locate errors for the programmer.' },
        { q: 'What does the run time environment allow?', options: ['Editing code with colour coding', 'Running the program from inside the IDE', 'Translating assembly to machine code', 'Backing up files'], answer: 1, why: 'It lets you execute and test the program without leaving the IDE.' },
        { q: 'What is a breakpoint?', options: ['A syntax error', 'A marker that pauses the program so variables can be inspected', 'The end of a loop', 'A comment'], answer: 1, why: 'Breakpoints pause execution at a chosen line so you can examine the current state.' },
        { q: 'How does automatic indentation help a programmer?', options: ['It makes the file smaller', 'It shows the structure of the code clearly and prevents indentation errors', 'It runs the program faster', 'It removes comments'], answer: 1, why: 'Consistent indentation reveals the block structure and, in Python, is part of the syntax.' },
        { q: 'How does colour coding of keywords help?', options: ['It compresses the code', 'It makes different parts of the code easy to tell apart and spelling mistakes obvious', 'It encrypts the code', 'It translates the code'], answer: 1, why: 'If a keyword does not change colour, you have probably misspelled it.' },
        { q: 'Which IDE feature turns your source code into something the computer can execute?', options: ['Editor', 'Translator', 'Error diagnostics', 'Auto complete'], answer: 1, why: 'The built in compiler or interpreter is the translator.' },
        { q: 'Which of these is NOT normally a feature of an IDE?', options: ['Code editor', 'Debugger', 'Spreadsheet calculator', 'Run time environment'], answer: 2, why: 'A spreadsheet tool has nothing to do with writing programs.' },
        { q: 'Why is a debugger useful for finding logic errors?', options: ['It rewrites the code', 'It lets you step through line by line and watch variables change', 'It removes syntax errors', 'It compresses the program'], answer: 1, why: 'Logic errors are found by observing what the values actually do, which stepping through reveals.' },
        { q: 'Auto complete suggests code as you type. How does this help?', options: ['It writes the whole program for you', 'It saves time and reduces spelling mistakes in names and functions', 'It hides errors', 'It speeds up the CPU'], answer: 1, why: 'Suggestions cut down typing and prevent misspelled identifiers.' },
      ],
    },
  ],
  exam: [
    {
      id: 't2-5-e1',
      stem: 'Explain two differences between a compiler and an interpreter.',
      marks: 4,
      markScheme: [
        { text: 'A compiler translates the entire program in one go.', accept: [['whole'], ['entire'], ['all at once'], ['one go']] },
        { text: 'An interpreter translates and runs one line at a time.', accept: [['line at a time'], ['line by line'], ['one line']] },
        { text: 'A compiler produces an executable file that can be run without the source code.', accept: [['executable'], ['file'], ['without the source'], ['exe']] },
        { text: 'An interpreter reports the first error and stops, while a compiler reports all errors at the end.', accept: [['first error'], ['stops'], ['all errors'], ['at the end'], ['list of errors']] },
      ],
      modelAnswer:
        'A compiler translates the whole program in one go before it is run and produces an executable file, which means the program can then be run any number of times without the source code or the compiler being present, and it runs quickly because no translation happens while it is running. An interpreter translates and executes the program one line at a time, every time it is run, so it is slower and the source code is always needed. A second difference is error reporting: an interpreter stops at the first error it meets and reports it, which makes mistakes easy to find while developing, whereas a compiler produces a list of all the errors at the end of translation.',
    },
    {
      id: 't2-5-e2',
      stem: 'Describe two features of an IDE and explain how each one helps a programmer.',
      marks: 4,
      markScheme: [
        { text: 'Editor with features such as colour coding, line numbers and auto indentation.', accept: [['editor'], ['colour'], ['line numbers'], ['indent'], ['auto complete']] },
        { text: 'Explains that the editor makes code easier to read and reduces typing errors.', accept: [['easier to read'], ['spot'], ['fewer mistakes'], ['saves time'], ['structure']] },
        { text: 'Error diagnostics or a debugger with breakpoints.', accept: [['error diagnostic'], ['debugger'], ['breakpoint'], ['error message']] },
        { text: 'Explains that this locates errors quickly and lets variables be inspected while running.', accept: [['locate'], ['find', 'error'], ['line number'], ['watch'], ['inspect'], ['step through']] },
      ],
      modelAnswer:
        'One feature is the editor, which colour codes keywords, adds line numbers and indents automatically. This helps the programmer because a keyword that does not change colour is instantly recognisable as a spelling mistake, and the indentation makes the block structure of loops and conditions obvious at a glance, which is essential in a language like Python where indentation is part of the syntax. A second feature is error diagnostics with a debugger. When something goes wrong the IDE names the line number and the type of problem, and breakpoints let the programmer pause the program partway through and inspect the current value of each variable, which is the fastest way to track down a logic error.',
    },
    {
      id: 't2-5-e3',
      stem: 'Explain why a program written in a high level language must be translated before it can be run.',
      marks: 3,
      markScheme: [
        { text: 'A processor can only execute machine code, which is binary.', accept: [['machine code'], ['binary'], ['only understand']] },
        { text: 'High level code uses English style keywords that the processor cannot understand directly.', accept: [['english'], ['keywords'], ['human'], ['cannot understand']] },
        { text: 'A compiler or interpreter converts it into machine code.', accept: [['compiler'], ['interpreter'], ['translator'], ['convert']] },
      ],
      modelAnswer:
        'A CPU can only execute machine code, which is a set of instructions written in binary that match its own instruction set. A high level language such as Python uses English style keywords and mathematical notation designed to be readable by people, and the processor has no way of understanding those directly. A translator, either a compiler or an interpreter, is therefore needed to convert the high level source code into the equivalent machine code before the processor can run it.',
    },
    {
      id: 't2-5-e4',
      context: 'A company writes control software for a washing machine. The processor has very limited memory.',
      stem: 'Discuss whether a high level or a low level language would be more suitable.',
      marks: 6,
      markScheme: [
        { text: 'Low level gives direct control over memory and hardware.', accept: [['direct control'], ['hardware'], ['memory', 'control'], ['registers']] },
        { text: 'Low level code can be very small and efficient, which suits limited memory.', accept: [['small'], ['efficient'], ['less memory'], ['fast']] },
        { text: 'Low level is much harder and slower to write and is easy to get wrong.', accept: [['harder'], ['difficult'], ['slower to write'], ['time consuming'], ['error']] },
        { text: 'Low level code only works on one type of processor, so it is not portable.', accept: [['portab'], ['one processor'], ['specific'], ['not transferable']] },
        { text: 'High level is faster to write and easier to maintain.', accept: [['faster to write'], ['easier'], ['maintain'], ['readable']] },
        { text: 'A clear judgement is reached, linked to the limited memory of the device.', accept: [['therefore'], ['overall'], ['conclusion'], ['best'], ['recommend'], ['suitable']] },
      ],
      modelAnswer:
        'A low level language such as assembly would give the programmers direct control over the memory and the hardware of the washing machine, and the resulting machine code would be extremely small and efficient, which matters a great deal when the processor has very limited memory. However, assembly is far slower and harder to write, it is much easier to introduce mistakes, and the code would only work on that one specific processor, so it would all have to be rewritten if the company changed supplier. A high level language would be quicker to write, easier for a new programmer to maintain, and portable across different processors, but the translated code is generally larger and less efficient. Overall, because memory is very limited and the software only ever has to run on this one type of processor, a low level language is the more suitable choice here, although many manufacturers now compromise by writing most of the program in C and only using assembly for the few sections where timing and size are critical.',
    },
    {
      id: 't2-5-e5',
      stem: 'State two advantages of using a high level language rather than machine code.',
      marks: 2,
      markScheme: [
        { text: 'It is much easier and faster for a human to write, read and understand.', accept: [['easier'], ['faster to write'], ['readable'], ['understand']] },
        { text: 'It is portable, so the same code can run on different types of computer once translated.', accept: [['portab'], ['different computers'], ['any machine'], ['transferable']] },
        { text: 'Fewer lines are needed and errors are easier to find and fix.', accept: [['fewer lines'], ['shorter'], ['easier to debug'], ['find errors'], ['maintain']] },
      ],
      modelAnswer:
        'Firstly, a high level language uses English style keywords so it is much quicker for a programmer to write and far easier for someone else to read, understand and correct later. Secondly, high level code is portable, which means the same source code can be translated and run on different types of computer, whereas machine code only works on the specific processor it was written for.',
    },
  ],
};
