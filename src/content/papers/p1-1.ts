import type { ExamPaper } from '../../types';

export const paper1_1: ExamPaper = {
  id: 'p1-1',
  component: 'Paper 1',
  number: 1,
  title: 'Paper 1 Mock A: Computer Systems',
  minutes: 45,
  totalMarks: 48,
  blurb: 'Systems architecture, memory and storage, and data representation.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p1-1-1', marks: 1, stem: 'Which register holds the address of the next instruction to be fetched?', options: ['MAR', 'MDR', 'Program counter', 'Accumulator'], answer: 2, why: 'The program counter points at the next instruction, and it is incremented during the fetch stage.' },
        { kind: 'mcq', id: 'p1-1-2', marks: 1, stem: 'How many bits are in one nibble?', options: ['2', '4', '8', '16'], answer: 1, why: 'A nibble is 4 bits, which is exactly one hexadecimal digit.' },
        { kind: 'mcq', id: 'p1-1-3', marks: 1, stem: 'Which type of memory loses its contents when the power is switched off?', options: ['ROM', 'RAM', 'SSD', 'Optical disc'], answer: 1, why: 'RAM is volatile. ROM and secondary storage are non volatile.' },
        { kind: 'mcq', id: 'p1-1-4', marks: 1, stem: 'What is the denary value of the binary number 01101001?', options: ['105', '107', '99', '113'], answer: 0, why: '64 + 32 + 8 + 1 = 105.' },
        { kind: 'mcq', id: 'p1-1-5', marks: 1, stem: 'Which of these is measured in hertz?', options: ['Cache size', 'Clock speed', 'Number of cores', 'Storage capacity'], answer: 1, why: 'Hertz means cycles per second, which is what clock speed measures.' },
        { kind: 'mcq', id: 'p1-1-6', marks: 1, stem: 'Which compression type permanently removes data?', options: ['Lossless', 'Lossy', 'Both', 'Neither'], answer: 1, why: 'Lossy compression discards data that cannot be recovered.' },
        { kind: 'mcq', id: 'p1-1-7', marks: 1, stem: 'What does the ALU do?', options: ['Stores the operating system', 'Decodes instructions', 'Performs calculations and logical comparisons', 'Connects to the internet'], answer: 2, why: 'The arithmetic logic unit handles arithmetic and logic operations.' },
        { kind: 'mcq', id: 'p1-1-8', marks: 1, stem: 'A binary number is shifted left by 2 places. Its value is:', options: ['Halved', 'Doubled', 'Multiplied by 4', 'Divided by 4'], answer: 2, why: 'Each place shifted left multiplies by 2, so two places multiplies by 4.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p1-1-9',
          marks: 6,
          stem: 'Describe the stages of the fetch decode execute cycle.',
          markScheme: [
            { text: 'The address in the program counter is copied into the MAR.', accept: [['pc', 'mar'], ['program counter', 'mar']] },
            { text: 'The address is placed on the address bus and sent to memory.', accept: [['address bus'], ['sent to memory'], ['main memory']] },
            { text: 'The instruction is returned along the data bus into the MDR.', accept: [['mdr'], ['data bus']] },
            { text: 'The program counter is incremented.', accept: [['increment'], ['increase'], ['add 1'], ['goes up']] },
            { text: 'The control unit decodes the instruction into opcode and operand.', accept: [['control unit'], ['opcode'], ['operand'], ['decode']] },
            { text: 'The instruction is executed, for example the ALU performs a calculation stored in the accumulator.', accept: [['alu'], ['accumulator'], ['executed'], ['carried out']] },
          ],
          modelAnswer:
            'In the fetch stage the address in the program counter is copied into the memory address register and placed on the address bus. Main memory returns the instruction at that address along the data bus into the memory data register, and the program counter is incremented so it points at the next instruction. In the decode stage the control unit splits the instruction into an opcode, which says what to do, and an operand, which says what to do it to. In the execute stage the instruction is carried out, for example the ALU adds two numbers and the result is stored in the accumulator. The cycle then repeats.',
        },
        {
          kind: 'written',
          id: 'p1-1-10',
          marks: 4,
          context: 'A school is buying laptops. Laptop A has 8 GB of RAM and a 256 GB SSD. Laptop B has 4 GB of RAM and a 1 TB hard disk drive.',
          stem: 'Explain one advantage of Laptop A and one advantage of Laptop B for use in lessons.',
          markScheme: [
            { text: 'Laptop A has more RAM so more programs can be open without using virtual memory.', accept: [['more ram'], ['8 gb'], ['virtual memory'], ['more programs']] },
            { text: 'Laptop A has an SSD which is faster and has no moving parts, so it boots quickly and survives knocks.', accept: [['ssd', 'faster'], ['no moving parts'], ['durable'], ['boot']] },
            { text: 'Laptop B has far more storage capacity for the same money.', accept: [['1 tb'], ['more storage'], ['capacity'], ['cheaper per']] },
            { text: 'Laptop B could store many more student files, videos or software packages.', accept: [['files'], ['videos'], ['software'], ['store more']] },
          ],
          modelAnswer:
            'Laptop A is better for everyday lessons because 8 GB of RAM means far more applications can be open at once before the operating system has to use virtual memory, which would slow the machine down badly. Its SSD also has no moving parts, so it starts up much faster and is far more likely to survive being carried between classrooms. Laptop B has four times the storage capacity, which would suit a media course where students save large video files, and hard disk drives cost much less per gigabyte.',
        },
        {
          kind: 'written',
          id: 'p1-1-11',
          marks: 5,
          context: 'An image is 640 pixels wide, 480 pixels high, and uses a colour depth of 16 bits.',
          stem: 'Calculate the file size in kilobytes, showing your working, and state one way the file size could be reduced.',
          markScheme: [
            { text: 'Multiplies width by height by colour depth.', accept: [['640', '480', '16'], ['width', 'height', 'colour depth']] },
            { text: 'Correct answer in bits: 4 915 200 bits.', accept: [['4915200'], ['4 915 200'], ['4,915,200']] },
            { text: 'Divides by 8 to give 614 400 bytes.', accept: [['614400'], ['614 400'], ['614,400'], ['divide', '8']] },
            { text: 'Converts to kilobytes: 614.4 kB.', accept: [['614.4'], ['614 kb'], ['614.4 kb']] },
            { text: 'Suggests reducing the resolution or the colour depth, or applying compression.', accept: [['resolution'], ['colour depth'], ['fewer pixels'], ['compress'], ['smaller image']] },
          ],
          modelAnswer:
            'File size in bits = width x height x colour depth = 640 x 480 x 16 = 4 915 200 bits. Divide by 8 to convert to bytes: 4 915 200 / 8 = 614 400 bytes. Divide by 1000 to convert to kilobytes: 614.4 kB. The file size could be reduced by lowering the colour depth, for example to 8 bits, which would halve the size, or by reducing the resolution so fewer pixels are stored. Applying compression such as saving as a JPEG would also reduce it.',
        },
        {
          kind: 'written',
          id: 'p1-1-12',
          marks: 4,
          stem: 'Explain what virtual memory is and why using it can make a computer slower.',
          markScheme: [
            { text: 'Virtual memory is an area of secondary storage used as if it were RAM.', accept: [['secondary storage'], ['hard drive'], ['ssd'], ['storage', 'as ram']] },
            { text: 'It is used when RAM becomes full.', accept: [['ram is full'], ['runs out'], ['no space'], ['full']] },
            { text: 'Data is swapped between RAM and storage.', accept: [['swap'], ['moved'], ['transferred'], ['back and forth']] },
            { text: 'Secondary storage is much slower than RAM, so the CPU waits.', accept: [['slower'], ['slow'], ['waits'], ['access time']] },
          ],
          modelAnswer:
            'Virtual memory is a section of secondary storage that the operating system uses as if it were extra RAM. When RAM becomes completely full, the data that has not been used for the longest time is moved out of RAM and into virtual memory so that new programs still have space to run. The problem is that secondary storage is far slower to read and write than RAM, so every time that data is needed again it has to be swapped back in while something else is swapped out. All this swapping means the CPU spends most of its time waiting, which is why the computer feels sluggish.',
        },
        {
          kind: 'written',
          id: 'p1-1-13',
          marks: 4,
          stem: 'Add the binary numbers 00101101 and 00011011. Show your working and state whether an overflow occurs.',
          markScheme: [
            { text: 'Correct binary answer 01001000.', accept: [['01001000'], ['1001000']] },
            { text: 'Shows carrying during the addition.', accept: [['carry'], ['carried'], ['1 1 1'], ['working']] },
            { text: 'Converts to denary correctly: 45 + 27 = 72.', accept: [['72'], ['45', '27']] },
            { text: 'States that no overflow occurs because the answer fits in 8 bits.', accept: [['no overflow'], ['fits'], ['8 bits'], ['within']] },
          ],
          modelAnswer:
            '  00101101   (45)\n+ 00011011   (27)\n  --------\n  01001000   (72)\n\nWorking from the right: 1 + 1 = 0 carry 1. 0 + 1 + 1 = 0 carry 1. 1 + 0 + 1 = 0 carry 1. 1 + 1 + 1 = 1 carry 1. 0 + 1 + 1 = 0 carry 1. 1 + 0 + 1 = 0 carry 1. 0 + 0 + 1 = 1. 0 + 0 = 0. The answer is 01001000, which is 72 in denary. No overflow occurs because the result still fits within 8 bits.',
        },
        {
          kind: 'written',
          id: 'p1-1-14',
          marks: 4,
          context: 'A student records a 60 second podcast at a sample rate of 44100 Hz and a bit depth of 16 bits.',
          stem: 'Explain what sample rate and bit depth mean, and describe the effect of halving the sample rate.',
          markScheme: [
            { text: 'Sample rate is the number of samples taken per second.', accept: [['samples per second'], ['each second'], ['how many samples']] },
            { text: 'Bit depth is the number of bits used to store each sample.', accept: [['bits', 'each sample'], ['per sample'], ['bits used to store']] },
            { text: 'Halving the sample rate halves the file size.', accept: [['half', 'size'], ['smaller file'], ['halves']] },
            { text: 'Quality falls because the wave is captured less accurately.', accept: [['quality'], ['less accurate'], ['worse'], ['muffled'], ['detail']] },
          ],
          modelAnswer:
            'The sample rate is how many measurements of the sound wave are taken every second, so 44100 Hz means the height of the wave is recorded 44100 times per second. The bit depth is how many bits are used to store each of those measurements, so 16 bits allows 65536 different volume levels for each sample. If the sample rate were halved to 22050 Hz, the file size would also halve because only half as many samples are stored. However, the recording would sound noticeably worse, because with fewer measurements the stored waveform is a less accurate copy of the original sound, so higher frequencies are lost and speech can sound muffled.',
        },
        {
          kind: 'written',
          id: 'p1-1-15',
          marks: 5,
          stem: 'Explain how cache size and the number of cores each affect the performance of a CPU.',
          markScheme: [
            { text: 'Cache is small, very fast memory inside or close to the CPU.', accept: [['fast memory'], ['inside the cpu'], ['close to'], ['small']] },
            { text: 'A larger cache holds more data and instructions, giving more cache hits.', accept: [['more data'], ['cache hit'], ['holds more'], ['store more']] },
            { text: 'Fewer slow fetches from RAM means the CPU waits less.', accept: [['ram'], ['fewer', 'fetch'], ['waits less'], ['slower memory']] },
            { text: 'Each core can fetch, decode and execute its own instruction.', accept: [['each core'], ['own instruction'], ['at the same time'], ['simultaneous']] },
            { text: 'Extra cores only help if the software is written to use them.', accept: [['written'], ['designed'], ['software', 'use'], ['multi core'], ['split']] },
          ],
          modelAnswer:
            'Cache is a small amount of extremely fast memory built into or very close to the CPU. The CPU checks it before going to RAM, so a larger cache means more of the data and instructions it needs are already there, producing more cache hits. Every cache hit avoids a much slower fetch from RAM, so the CPU spends less time waiting and gets more work done each second. The number of cores matters because each core is a complete processing unit that can fetch, decode and execute its own instruction at the same time as the others, so a quad core processor could in theory handle four instructions simultaneously. In practice this only helps if the software has been written so that its work can be split into parts that run in parallel.',
        },
        {
          kind: 'written',
          id: 'p1-1-16',
          marks: 4,
          stem: 'Convert the binary number 11011110 into hexadecimal and explain why programmers prefer hexadecimal to binary.',
          markScheme: [
            { text: 'Splits into two nibbles 1101 and 1110.', accept: [['1101'], ['1110'], ['nibble'], ['split']] },
            { text: 'Correct answer DE.', accept: [['de'], ['0xde'], ['d', 'e']] },
            { text: 'Hexadecimal is much shorter than binary for the same value.', accept: [['shorter'], ['fewer digits'], ['less digits'], ['compact']] },
            { text: 'Shorter values are easier for a human to read and less likely to be miscopied.', accept: [['easier'], ['read'], ['mistake'], ['error'], ['remember']] },
          ],
          modelAnswer:
            'Split the byte into two nibbles: 1101 and 1110. The first nibble is 8 + 4 + 1 = 13, which is D in hexadecimal. The second is 8 + 4 + 2 = 14, which is E. The answer is therefore DE. Programmers prefer hexadecimal because a value that takes eight digits in binary takes only two in hexadecimal, so it is far quicker to write and read. Fewer digits also means far fewer mistakes when copying values such as memory addresses, colour codes and MAC addresses.',
        },
        {
          kind: 'written',
          id: 'p1-1-17',
          marks: 4,
          stem: 'Compare lossy and lossless compression, giving one suitable use of each.',
          markScheme: [
            { text: 'Lossy permanently removes data so the original cannot be recovered.', accept: [['permanently'], ['cannot be recovered'], ['removes data'], ['discard']] },
            { text: 'Lossless keeps all the data and the original can be restored exactly.', accept: [['exactly'], ['all the data'], ['no data is lost'], ['restored']] },
            { text: 'Lossy achieves a much greater reduction in file size.', accept: [['smaller'], ['greater reduction'], ['much smaller']] },
            { text: 'Suitable uses given, such as lossy for photos or streaming and lossless for text or program code.', accept: [['jpeg'], ['mp3'], ['photo'], ['music'], ['streaming'], ['text'], ['code'], ['png'], ['zip']] },
          ],
          modelAnswer:
            'Lossy compression permanently removes some of the data in a file, for example sounds a human ear struggles to hear, so the original can never be recovered. Lossless compression removes nothing. It stores the data more efficiently, for example by recording a repeated pattern once with a count, so the original file can be rebuilt exactly. Lossy gives a far greater reduction in file size, which is why it is used for photographs, music and streaming video. Lossless is used where every bit matters, such as a text document or program code, because deleting even one character would corrupt the file.',
        },
      ],
    },
  ],
};
