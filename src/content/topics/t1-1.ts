import type { Topic } from '../../types';

export const t1_1: Topic = {
  id: 't1-1',
  code: '1.1',
  title: 'Systems Architecture',
  blurb: 'The CPU, the fetch decode execute cycle, registers, performance and embedded systems.',
  paper: 'Paper 1',
  icon: '⚙️',
  lessons: [
    {
      id: 't1-1-l1',
      title: 'What the CPU actually does',
      minutes: 8,
      blocks: [
        { t: 'p', text: 'The CPU, or central processing unit, is the part of a computer that carries out instructions. Every single thing your device does, from playing a video to spell checking a word, ends up as instructions that the CPU processes one after another.' },
        { t: 'p', text: 'The purpose of the CPU is simple to state and worth learning word for word: the CPU fetches, decodes and executes instructions.' },
        {
          t: 'real',
          title: 'Real life scenario: the kitchen',
          body: [
            'Imagine a busy kitchen. A recipe card sits on a shelf (that is memory). The head chef reads one line of the recipe at a time (fetch), works out what it means (decode) and then chops, stirs or heats (execute).',
            'The chef never does the whole recipe in one go. One instruction, then the next, then the next. A CPU works exactly the same way, just billions of times faster.',
          ],
        },
        { t: 'h', text: 'The von Neumann architecture' },
        { t: 'p', text: 'Almost every computer you will meet uses the von Neumann architecture. The key idea is that both the program instructions and the data they work on are stored together in the same memory.' },
        { t: 'diagram', id: 'von-neumann', caption: 'The CPU, memory and the buses that join them together.' },
        {
          t: 'key',
          terms: [
            { term: 'Control unit (CU)', def: 'Directs the whole CPU. It decodes instructions and sends control signals telling other parts what to do and when.' },
            { term: 'Arithmetic logic unit (ALU)', def: 'Does the actual maths (add, subtract) and the logic (is A greater than B, AND, OR, NOT).' },
            { term: 'Cache', def: 'Very small, very fast memory inside the CPU that holds data and instructions likely to be needed again soon.' },
            { term: 'Registers', def: 'Tiny storage boxes inside the CPU that hold one value each. They are the fastest storage in the whole computer.' },
          ],
        },
        { t: 'h', text: 'The buses' },
        { t: 'p', text: 'A bus is simply a set of wires that carries information between parts of the computer. You need three of them.' },
        {
          t: 'table',
          head: ['Bus', 'What it carries', 'Direction'],
          rows: [
            ['Address bus', 'The address of the memory location the CPU wants', 'One way, CPU to memory'],
            ['Data bus', 'The actual instruction or data being moved', 'Both ways'],
            ['Control bus', 'Signals such as read, write and clock timing', 'Both ways'],
          ],
        },
        {
          t: 'tip',
          body: [
            'A very common exam mistake is saying the address bus carries data. It does not. It only carries addresses, and it only travels one way, out of the CPU.',
          ],
        },
      ],
    },
    {
      id: 't1-1-l2',
      title: 'Registers and the fetch decode execute cycle',
      minutes: 12,
      blocks: [
        { t: 'p', text: 'The CPU has a handful of special registers. Each one has a job, and the exam expects you to know all four by name.' },
        {
          t: 'key',
          terms: [
            { term: 'Program counter (PC)', def: 'Holds the memory address of the NEXT instruction to be fetched. It goes up by one during every fetch.' },
            { term: 'Memory address register (MAR)', def: 'Holds the address that the CPU is currently reading from or writing to.' },
            { term: 'Memory data register (MDR)', def: 'Holds the actual data or instruction that has just come from memory, or is about to be sent to memory.' },
            { term: 'Accumulator (ACC)', def: 'Holds the result of calculations done by the ALU.' },
          ],
        },
        {
          t: 'example',
          title: 'A memory trick that works',
          body: [
            'MAR holds the Address. MDR holds the Data. The letters tell you which is which.',
            'PC = Points to Coming instruction. ACC = Answers Currently Calculated.',
          ],
        },
        { t: 'diagram', id: 'fetch-execute-loop', caption: 'The three stages that repeat for ever.' },
        { t: 'h', text: 'The cycle in full detail' },
        {
          t: 'ol',
          items: [
            'FETCH: the address in the PC is copied into the MAR.',
            'FETCH: the address bus carries that address to main memory.',
            'FETCH: memory sends the instruction back along the data bus into the MDR.',
            'FETCH: the PC is increased by one, ready for next time.',
            'DECODE: the instruction is moved to the control unit, which splits it into an opcode (what to do) and an operand (what to do it to).',
            'EXECUTE: the instruction is carried out. This might mean the ALU adds two numbers, or data is loaded, or the PC is changed to jump somewhere else.',
          ],
        },
        { t: 'demo', id: 'fetch-execute', caption: 'Step through a real three instruction program and watch every register change.' },
        {
          t: 'real',
          title: 'Real life scenario: a school register',
          body: [
            'Think of a teacher with a class list. The PC is the finger pointing at the next name. The MAR is saying "row 12 please". The MDR is the name that comes back. The teacher reads it out (execute) and then moves the finger down one row.',
            'If a student is absent, the teacher might jump to a different page of instructions. That is exactly what a branch instruction does when it changes the PC.',
          ],
        },
        {
          t: 'warn',
          body: [
            'The PC is increased during the fetch stage, not after the execute stage. Examiners look for this detail.',
          ],
        },
      ],
    },
    {
      id: 't1-1-l3',
      title: 'What makes a CPU fast',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Three characteristics decide how much work a CPU can get through. You need to be able to explain the effect of each one, not just name it.' },
        { t: 'diagram', id: 'cpu-performance' },
        { t: 'h', text: 'Clock speed' },
        { t: 'p', text: 'The clock speed is how many cycles the CPU completes each second, measured in hertz. A 3 GHz processor completes three thousand million cycles per second. Roughly one instruction is handled per cycle, so a higher clock speed means more instructions processed per second.' },
        {
          t: 'example',
          title: 'Worked comparison',
          body: [
            'Processor A runs at 2.4 GHz. Processor B runs at 3.6 GHz. Everything else is the same.',
            'B completes 1.5 times as many cycles per second, so B will finish the same job in roughly two thirds of the time.',
          ],
        },
        { t: 'h', text: 'Cache size' },
        { t: 'p', text: 'Cache is the small, very fast memory built into the CPU. When the CPU needs data it checks the cache first. If the data is there, that is a cache hit and it is fetched almost instantly. If it is not there, the CPU has to wait for the much slower RAM, which is a cache miss.' },
        { t: 'p', text: 'A bigger cache means more data can be kept close by, so there are fewer slow trips to RAM and the CPU spends less time waiting.' },
        {
          t: 'real',
          title: 'Real life scenario: doing homework',
          body: [
            'Cache is like keeping your pen, calculator and textbook on the desk in front of you. RAM is like having them in your school bag on the floor. Secondary storage is like leaving them in your locker on the other side of the school.',
            'A bigger desk (more cache) means fewer trips to the bag or the locker, so you finish faster.',
          ],
        },
        { t: 'h', text: 'Number of cores' },
        { t: 'p', text: 'A core is a complete processing unit. A dual core CPU has two, a quad core has four. Each core can fetch, decode and execute its own instruction at the same time as the others, so in theory a quad core could do four times the work.' },
        {
          t: 'warn',
          body: [
            'In practice, extra cores only help if the software has been written to split its work into parts that can run at the same time. Some tasks cannot be split, so a program may run no faster on eight cores than on two.',
          ],
        },
        { t: 'diagram', id: 'memory-hierarchy', caption: 'Speed, size and cost all change as you move down the pyramid.' },
      ],
    },
    {
      id: 't1-1-l4',
      title: 'Embedded systems',
      minutes: 6,
      blocks: [
        { t: 'p', text: 'An embedded system is a computer built into a larger device to do one specific job. The software is usually fixed when the device is made and the user never changes it.' },
        { t: 'diagram', id: 'embedded-systems' },
        {
          t: 'real',
          title: 'Real life scenario: your morning',
          body: [
            'Before you leave the house you have already used several embedded systems. The alarm clock, the microwave, the washing machine, the central heating thermostat, the traffic lights on the way to school and the ticket machine at the bus stop all contain one.',
            'None of them can install apps. None of them needs to. That is the whole point.',
          ],
        },
        {
          t: 'table',
          head: ['Feature', 'Embedded system', 'General purpose computer'],
          rows: [
            ['Purpose', 'One dedicated task', 'Any task the user chooses'],
            ['Software', 'Fixed at manufacture', 'User installs and removes programs'],
            ['Cost', 'Low', 'Higher'],
            ['Power use', 'Very low', 'Much higher'],
            ['Examples', 'Dishwasher, pacemaker, smart meter', 'Laptop, desktop, tablet'],
          ],
        },
        {
          t: 'tip',
          body: [
            'A good exam answer explains WHY an embedded system suits a device: it only needs to do one job, so it can be small, cheap, low power and very reliable.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-1-q1',
      title: 'Quiz 1: CPU basics and registers',
      questions: [
        { q: 'What is the purpose of the CPU?', options: ['To store files permanently', 'To fetch, decode and execute instructions', 'To connect the computer to the internet', 'To display images on the screen'], answer: 1, why: 'The CPU processes instructions. It fetches them from memory, decodes what they mean, then executes them.' },
        { q: 'Which register holds the address of the next instruction to be fetched?', options: ['MAR', 'MDR', 'Program counter', 'Accumulator'], answer: 2, why: 'The program counter points at the next instruction. The MAR holds the address currently being used.' },
        { q: 'What does the ALU do?', options: ['Decodes instructions', 'Performs calculations and logical comparisons', 'Stores the operating system', 'Controls the monitor'], answer: 1, why: 'The arithmetic logic unit does arithmetic such as adding, and logic such as comparing two values.' },
        { q: 'Which bus carries the memory address that the CPU wants to access?', options: ['Data bus', 'Control bus', 'Address bus', 'Universal bus'], answer: 2, why: 'The address bus carries addresses only, and only travels from the CPU outwards.' },
        { q: 'In the von Neumann architecture, where are instructions and data stored?', options: ['In two completely separate memories', 'In the same memory', 'Only in the CPU registers', 'Only on the hard drive'], answer: 1, why: 'Storing both together in the same memory is the defining feature of the von Neumann architecture.' },
        { q: 'What is held in the MDR?', options: ['The address being accessed', 'The data or instruction just fetched from memory', 'The result of a calculation', 'The clock speed'], answer: 1, why: 'The memory data register holds the actual data or instruction travelling to or from memory.' },
        { q: 'During which stage is the program counter increased?', options: ['Fetch', 'Decode', 'Execute', 'It is never increased'], answer: 0, why: 'The PC is incremented during the fetch stage so the CPU is ready for the following instruction.' },
        { q: 'Which part of the CPU sends out control signals to coordinate the other parts?', options: ['The accumulator', 'The cache', 'The control unit', 'The data bus'], answer: 2, why: 'The control unit directs everything, decoding instructions and issuing control signals.' },
        { q: 'What is stored in the accumulator?', options: ['The next instruction', 'The result of the most recent calculation', 'The list of installed programs', 'The MAC address'], answer: 1, why: 'The accumulator holds results produced by the ALU.' },
        { q: 'An instruction is split into two parts during decode. What are they called?', options: ['Header and trailer', 'Opcode and operand', 'Key and value', 'Source and destination'], answer: 1, why: 'The opcode says what to do and the operand says what to do it to.' },
      ],
    },
    {
      id: 't1-1-q2',
      title: 'Quiz 2: Performance and embedded systems',
      questions: [
        { q: 'A CPU has a clock speed of 3.2 GHz. What does this mean?', options: ['It has 3.2 billion transistors', 'It completes 3.2 billion cycles each second', 'It can store 3.2 GB of data', 'It uses 3.2 watts of power'], answer: 1, why: 'Clock speed is measured in hertz, which means cycles per second. 3.2 GHz is 3.2 thousand million cycles per second.' },
        { q: 'Why does a larger cache usually improve performance?', options: ['It increases the clock speed', 'More data can be kept close to the CPU so there are fewer slow trips to RAM', 'It adds extra cores', 'It reduces the size of the hard drive'], answer: 1, why: 'More cache means more cache hits, so the CPU waits less often for the much slower RAM.' },
        { q: 'What is a cache miss?', options: ['When the CPU finds the data it needs in the cache', 'When the required data is not in the cache so RAM must be used', 'When the cache is switched off', 'When two cores need the same data'], answer: 1, why: 'A miss means the data was not in cache, so the CPU has to make a slower request to RAM.' },
        { q: 'Adding more cores does not always make a program faster. Why not?', options: ['Cores make the clock speed drop', 'The software must be written to split work across cores', 'Cores can only run system software', 'Extra cores are switched off by the operating system'], answer: 1, why: 'A program that cannot be divided into parallel tasks will only use one core no matter how many exist.' },
        { q: 'Which of these is an embedded system?', options: ['A gaming laptop', 'A washing machine controller', 'A desktop PC', 'A tablet'], answer: 1, why: 'A washing machine controller is built for one dedicated job and its software is fixed.' },
        { q: 'Give one advantage of an embedded system over a general purpose computer.', options: ['It can run any software the user installs', 'It uses less power and costs less to make', 'It has a larger screen', 'It has more storage'], answer: 1, why: 'Because it only does one job, an embedded system can be small, cheap, low power and very reliable.' },
        { q: 'Which storage is fastest?', options: ['Solid state drive', 'RAM', 'Registers', 'Optical disc'], answer: 2, why: 'Registers are inside the CPU itself, so they are the fastest storage in the computer.' },
        { q: 'Overclocking means:', options: ['Adding more RAM', 'Running the CPU at a higher clock speed than the manufacturer set', 'Adding extra cores', 'Cleaning the cache'], answer: 1, why: 'Overclocking raises the clock speed, which generates more heat and may damage the CPU without extra cooling.' },
        { q: 'A quad core 2 GHz CPU is compared with a single core 3 GHz CPU running video editing software written for multiple cores. Which is likely to be faster?', options: ['The single core CPU', 'The quad core CPU', 'They will be identical', 'Neither will run the software'], answer: 1, why: 'Video editing splits well across cores, so four cores at 2 GHz will beat one core at 3 GHz.' },
        { q: 'Which statement about embedded systems is correct?', options: ['Users regularly install new applications on them', 'Their program is usually stored in ROM and does not change', 'They always need an internet connection', 'They contain no processor'], answer: 1, why: 'Embedded systems hold fixed software, normally in ROM, and it is not changed by the user.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-1-e1',
      stem: 'Describe the purpose of the program counter (PC) and the memory address register (MAR) in the fetch decode execute cycle.',
      marks: 4,
      markScheme: [
        { text: 'The PC holds the address of the next instruction to be fetched.', accept: [['pc', 'next'], ['program counter', 'next instruction']] },
        { text: 'The PC is incremented (increased by one) during the fetch stage.', accept: [['increment'], ['increase'], ['add 1'], ['plus one'], ['goes up']] },
        { text: 'The MAR holds the address currently being read from or written to.', accept: [['mar', 'address'], ['memory address register', 'address']] },
        { text: 'The address in the PC is copied into the MAR at the start of the cycle.', accept: [['copied'], ['copy'], ['transferred'], ['sent to the mar']] },
      ],
      modelAnswer:
        'The program counter holds the memory address of the next instruction that will be fetched. At the start of the fetch stage this address is copied into the memory address register. The MAR holds the address that is currently being accessed, and it is placed on the address bus so main memory knows which location to send back. The program counter is then incremented by one so that it points at the following instruction, ready for the next cycle.',
      examinerTip: 'Do not just name the registers. Say what each one holds and when it changes.',
    },
    {
      id: 't1-1-e2',
      context: 'A company is choosing between two processors for a new laptop. Processor A is dual core at 3.5 GHz with 4 MB of cache. Processor B is quad core at 2.4 GHz with 12 MB of cache.',
      stem: 'Explain which processor would be better for a user who mainly edits video, and justify your choice.',
      marks: 6,
      markScheme: [
        { text: 'Processor B is the better choice for video editing.', accept: [['b'], ['quad'], ['four core'], ['4 core']] },
        { text: 'Video editing software is written to use multiple cores.', accept: [['multiple cores'], ['multi core'], ['split', 'core'], ['parallel']] },
        { text: 'Four cores can process four instructions at the same time.', accept: [['at the same time'], ['simultaneous'], ['four instructions'], ['same time']] },
        { text: 'Processor B has a larger cache, so more data is held close to the CPU.', accept: [['larger cache'], ['bigger cache'], ['12 mb'], ['more cache']] },
        { text: 'A larger cache means fewer slow fetches from RAM.', accept: [['fewer', 'ram'], ['cache hit'], ['less time waiting'], ['slower ram']] },
        { text: 'Processor A has a higher clock speed, which helps single core tasks, but this matters less here.', accept: [['clock speed'], ['3.5'], ['higher speed'], ['ghz']] },
      ],
      modelAnswer:
        'Processor B would be better. Video editing software is normally written so that its work can be divided across several cores, so a quad core processor can process four instructions at the same time while a dual core processor can only manage two. Processor B also has 12 MB of cache instead of 4 MB, so far more video data and instructions can be held in the very fast memory inside the CPU. That gives more cache hits and fewer slow fetches from RAM, so the CPU spends less time waiting. Processor A does have a higher clock speed of 3.5 GHz, which would win for a task that only uses one core, but for video editing the extra cores and the larger cache matter more.',
      examinerTip: 'When a question says justify, you must compare both options and then commit to one clear decision.',
    },
    {
      id: 't1-1-e3',
      stem: 'State what is meant by an embedded system and give two advantages of using one in a microwave oven.',
      marks: 4,
      markScheme: [
        { text: 'An embedded system is a computer built into a larger device.', accept: [['built into'], ['part of a larger'], ['inside a device'], ['within a device']] },
        { text: 'It is designed to carry out one specific task.', accept: [['one', 'task'], ['dedicated'], ['specific function'], ['single purpose']] },
        { text: 'Advantage: it is cheaper to produce than a general purpose computer.', accept: [['cheap'], ['low cost'], ['less expensive']] },
        { text: 'Advantage: it uses less power, is smaller, or is more reliable because the software is fixed.', accept: [['less power'], ['low power'], ['smaller'], ['reliable'], ['fixed software'], ['cannot get viruses']] },
      ],
      modelAnswer:
        'An embedded system is a computer that is built into a larger device and is designed to carry out one specific task rather than any task the user chooses. In a microwave this is an advantage because the system only needs enough processing power for one job, so it is much cheaper to manufacture than a full computer. It also uses very little power and is very reliable, because the program is fixed in ROM and the user cannot install anything that could go wrong.',
    },
    {
      id: 't1-1-e4',
      stem: 'Describe the three stages of the fetch decode execute cycle.',
      marks: 6,
      markScheme: [
        { text: 'Fetch: the address in the PC is copied to the MAR and sent along the address bus.', accept: [['pc', 'mar'], ['address bus'], ['address', 'memory']] },
        { text: 'Fetch: the instruction is returned along the data bus into the MDR.', accept: [['mdr'], ['data bus'], ['returned'], ['sent back']] },
        { text: 'Fetch: the PC is incremented.', accept: [['increment'], ['increase'], ['goes up'], ['plus 1'], ['add one']] },
        { text: 'Decode: the control unit works out what the instruction means.', accept: [['control unit'], ['decode', 'means'], ['works out']] },
        { text: 'Decode: the instruction is split into opcode and operand.', accept: [['opcode'], ['operand']] },
        { text: 'Execute: the instruction is carried out, for example the ALU performs a calculation and stores the result in the accumulator.', accept: [['alu'], ['carried out'], ['accumulator'], ['performed']] },
      ],
      modelAnswer:
        'In the fetch stage the address held in the program counter is copied into the memory address register and placed on the address bus. Main memory then sends the instruction stored at that address back along the data bus into the memory data register, and the program counter is incremented so it points at the next instruction. In the decode stage the instruction is passed to the control unit, which splits it into the opcode, which says what operation to perform, and the operand, which says what data to use. In the execute stage the instruction is actually carried out, for example the ALU adds two values together and the answer is placed in the accumulator. The cycle then repeats.',
    },
    {
      id: 't1-1-e5',
      stem: 'Explain why increasing the number of cores in a CPU does not always double the speed of a program.',
      marks: 3,
      markScheme: [
        { text: 'Software must be written to split work across cores.', accept: [['written'], ['designed'], ['programmed'], ['multi core support'], ['coded']] },
        { text: 'Some tasks cannot be split because each step depends on the previous one.', accept: [['depends'], ['cannot be split'], ['sequential'], ['one after another'], ['order']] },
        { text: 'Cores may have to share resources such as cache, memory or the bus, which slows things down.', accept: [['share'], ['cache'], ['bus'], ['memory bandwidth'], ['bottleneck']] },
      ],
      modelAnswer:
        'Extra cores only help if the software has been written so that its work can be divided into separate tasks that run at the same time. Many programs contain steps that must happen one after another, because each step needs the result of the step before, so those parts can only ever use a single core. Cores also have to share resources such as cache and the memory bus, so as more cores compete for the same memory the gain from each extra core gets smaller.',
    },
  ],
};
