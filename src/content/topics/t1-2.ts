import type { Topic } from '../../types';

export const t1_2: Topic = {
  id: 't1-2',
  code: '1.2',
  title: 'Memory and Storage',
  blurb: 'RAM, ROM, virtual memory, secondary storage, units, binary, hex, characters, images, sound and compression.',
  paper: 'Paper 1',
  icon: 'storage',
  lessons: [
    {
      id: 't1-2-l1',
      title: 'Primary storage: RAM, ROM and virtual memory',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'Primary storage is memory the CPU can reach directly and very quickly. It is small compared to a hard drive, but it is thousands of times faster.' },
        { t: 'diagram', id: 'ram-rom' },
        { t: 'h', text: 'RAM' },
        { t: 'p', text: 'RAM stands for random access memory. It holds the operating system, the applications you have open and the data you are working on right now. RAM is volatile, which means its contents disappear the moment the power is switched off.' },
        {
          t: 'real',
          title: 'Real life scenario: a desk',
          body: [
            'RAM is your desk. Everything you are working on right now is spread out on it. Secondary storage is the filing cabinet in the corner.',
            'When you finish for the day, someone tidies the desk completely and throws everything away. Whatever you did not put in the cabinet is gone. That is why unsaved work is lost when the power goes off.',
          ],
        },
        { t: 'h', text: 'ROM' },
        { t: 'p', text: 'ROM stands for read only memory. It is non volatile, so it keeps its contents when the power is off. ROM holds the small start up program, often called the BIOS or bootstrap, that runs the moment you press the power button and loads the operating system from secondary storage into RAM.' },
        { t: 'h', text: 'Virtual memory' },
        { t: 'p', text: 'If RAM becomes completely full, the computer has a problem. Rather than crashing, it uses part of the secondary storage as if it were extra RAM. This is called virtual memory.' },
        { t: 'diagram', id: 'virtual-memory' },
        {
          t: 'ol',
          items: [
            'RAM fills up and a new program needs space.',
            'The data that has not been used for the longest time is copied out of RAM onto the hard drive or SSD.',
            'The new data is loaded into the space that has been freed.',
            'If the old data is needed again it has to be swapped back in, which takes time.',
          ],
        },
        {
          t: 'warn',
          body: [
            'Virtual memory is much slower than real RAM because secondary storage is far slower to read and write. If the computer spends most of its time swapping data back and forth it slows to a crawl. That is called disk thrashing.',
            'The fix is to install more RAM, not more virtual memory.',
          ],
        },
        {
          t: 'table',
          head: ['', 'RAM', 'ROM'],
          rows: [
            ['Volatile?', 'Yes, contents lost on power off', 'No, contents kept'],
            ['Can be written to?', 'Yes, read and write', 'Read only in normal use'],
            ['Typical size', 'Gigabytes', 'Kilobytes or a few megabytes'],
            ['What it holds', 'Open programs and current data', 'Boot up instructions'],
          ],
        },
      ],
    },
    {
      id: 't1-2-l2',
      title: 'Secondary storage',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Secondary storage is non volatile storage used to keep programs and files permanently. Every computer needs it, because RAM forgets everything when the power goes off and ROM cannot normally be written to.' },
        { t: 'diagram', id: 'secondary-storage' },
        { t: 'h', text: 'Magnetic storage' },
        { t: 'p', text: 'A hard disk drive contains metal platters that spin at high speed. A read write head floats just above the surface and magnetises tiny areas to store 1s and 0s. Because parts are physically moving, HDDs are slower, noisier and easier to damage if dropped.' },
        { t: 'h', text: 'Solid state storage' },
        { t: 'p', text: 'An SSD or a USB memory stick uses flash memory. There are no moving parts at all, so it is much faster, silent, uses less power and survives being knocked about. It costs more per gigabyte and each memory cell can only be written to a limited number of times.' },
        { t: 'h', text: 'Optical storage' },
        { t: 'p', text: 'CDs, DVDs and Blu ray discs are read by a laser that detects pits burned into the surface. They are very cheap to produce in bulk and easy to post, but they hold much less data and scratch easily.' },
        {
          t: 'real',
          title: 'Real life scenario: choosing storage for a school trip',
          body: [
            'A geography teacher needs to take 20 GB of survey data into a field for a week, in the rain, in a rucksack.',
            'An external HDD is cheap but has moving parts and will not survive being dropped. A DVD is far too small. A solid state USB drive is the right answer, because it is small, tough, has no moving parts and easily holds 20 GB.',
            'Exam answers score marks for linking the choice to the situation, not just listing facts.',
          ],
        },
        {
          t: 'key',
          terms: [
            { term: 'Capacity', def: 'How much data it can hold.' },
            { term: 'Speed', def: 'How quickly data can be read and written.' },
            { term: 'Portability', def: 'How easy it is to carry around.' },
            { term: 'Durability', def: 'How well it survives being dropped, scratched or getting wet.' },
            { term: 'Reliability', def: 'How likely it is to keep working over time.' },
            { term: 'Cost', def: 'Usually judged per gigabyte so different sizes can be compared fairly.' },
          ],
        },
        {
          t: 'tip',
          body: [
            'If a question asks you to recommend a storage device, always name the device, then give at least two reasons that connect directly to the scenario in the question.',
          ],
        },
      ],
    },
    {
      id: 't1-2-l3',
      title: 'Units and binary numbers',
      minutes: 12,
      blocks: [
        { t: 'p', text: 'Computers only store 1s and 0s because a circuit is either carrying a current or it is not. One of these digits is called a bit, short for binary digit.' },
        { t: 'diagram', id: 'storage-units' },
        {
          t: 'example',
          title: 'Converting binary to denary',
          body: [
            'Write the place values above the bits, starting from 128 on the left.',
            '128  64  32  16   8   4   2   1',
            '  0   1   1   0   1   0   0   1',
            'Add up the columns that have a 1 in them: 64 + 32 + 8 + 1 = 105.',
          ],
        },
        {
          t: 'example',
          title: 'Converting denary to binary',
          body: [
            'Convert 156 into 8 bit binary. Work left to right and keep asking "does it fit".',
            'Does 128 fit into 156? Yes, so write 1 and 156 - 128 = 28 remains.',
            'Does 64 fit into 28? No, write 0. Does 32 fit into 28? No, write 0.',
            'Does 16 fit into 28? Yes, write 1, leaving 12. Does 8 fit into 12? Yes, write 1, leaving 4.',
            'Does 4 fit into 4? Yes, write 1, leaving 0. Then 2 and 1 are both 0.',
            'Answer: 10011100.',
          ],
        },
        { t: 'demo', id: 'binary', caption: 'Flip the bits yourself, then try hex, addition and shifts.' },
        { t: 'h', text: 'Binary addition' },
        { t: 'p', text: 'There are only four rules to learn. 0 + 0 = 0. 0 + 1 = 1. 1 + 1 = 0 carry 1. 1 + 1 + 1 = 1 carry 1.' },
        { t: 'code', lang: 'text', caption: 'Adding 00110101 and 00011010', code: '  0 0 1 1 0 1 0 1     (53)\n+ 0 0 0 1 1 0 1 0     (26)\n-------------------\n  0 1 0 0 1 1 1 1     (79)' },
        {
          t: 'warn',
          body: [
            'If the answer needs a ninth bit, that is an overflow error. The extra bit cannot be stored in one byte, so the result is wrong. An exam answer should say the number is too large to be represented in the number of bits available.',
          ],
        },
        { t: 'h', text: 'Binary shifts' },
        { t: 'p', text: 'A left shift moves every bit to the left and fills the gaps on the right with zeros. Each place shifted multiplies the number by 2. A right shift moves every bit right and divides by 2, throwing away any remainder.' },
        {
          t: 'example',
          title: 'Shift worked example',
          body: [
            '00001100 is 12. Shift left by 2: 00110000, which is 48. That is 12 x 4.',
            '00001101 is 13. Shift right by 1: 00000110, which is 6. The 0.5 has been lost for ever, which is a loss of precision.',
          ],
        },
        { t: 'h', text: 'Hexadecimal' },
        { t: 'p', text: 'Hexadecimal is base 16, using the digits 0 to 9 and then A to F for the values 10 to 15. One hex digit is exactly 4 bits, so one byte is always exactly two hex digits.' },
        {
          t: 'table',
          head: ['Denary', 'Binary', 'Hex'],
          rows: [
            ['10', '1010', 'A'],
            ['11', '1011', 'B'],
            ['12', '1100', 'C'],
            ['13', '1101', 'D'],
            ['14', '1110', 'E'],
            ['15', '1111', 'F'],
          ],
        },
        {
          t: 'example',
          title: 'Binary to hex the easy way',
          body: [
            'Take 11010110. Split it into two nibbles: 1101 and 0110.',
            '1101 = 8 + 4 + 1 = 13 = D. 0110 = 4 + 2 = 6.',
            'So the answer is D6. Never convert to denary first, it wastes time and causes mistakes.',
          ],
        },
        {
          t: 'tip',
          body: [
            'Hexadecimal is used because it is shorter than binary and much easier for a person to read, write and check without making errors. Programmers use it for colour codes, MAC addresses and memory addresses.',
          ],
        },
      ],
    },
    {
      id: 't1-2-l4',
      title: 'Characters, images and sound',
      minutes: 12,
      blocks: [
        { t: 'h', text: 'Characters' },
        { t: 'p', text: 'A character set is an agreed table that gives every character a binary code. Without an agreed set, one computer would send a code and another would show the wrong symbol.' },
        {
          t: 'ul',
          items: [
            'ASCII uses 7 bits and can represent 128 characters, which covers English letters, digits and punctuation.',
            'Extended ASCII uses 8 bits for 256 characters.',
            'Unicode uses more bits and covers over 140000 characters from every written language, plus emoji. Files are larger as a result.',
          ],
        },
        { t: 'demo', id: 'characters', caption: 'Type your name and watch it become binary and hex.' },
        {
          t: 'example',
          title: 'Useful ASCII facts',
          body: [
            'Capital A is 65, so B is 66 and C is 67.',
            'Lower case a is 97, exactly 32 more than capital A.',
            'The digit character 0 is 48. Note that the character 0 is not the same as the number 0.',
          ],
        },
        { t: 'h', text: 'Images' },
        { t: 'p', text: 'A bitmap image is a grid of pixels. Each pixel is stored as a binary number that says what colour it is.' },
        { t: 'diagram', id: 'image-bits' },
        {
          t: 'key',
          terms: [
            { term: 'Pixel', def: 'The smallest single point of colour in an image.' },
            { term: 'Resolution', def: 'The number of pixels in the image, usually written as width by height.' },
            { term: 'Colour depth', def: 'The number of bits used for each pixel. More bits means more possible colours.' },
            { term: 'Metadata', def: 'Extra data stored with the file, such as width, height, colour depth and the date taken.' },
          ],
        },
        { t: 'code', lang: 'text', caption: 'The formula you must know', code: 'file size in bits = width x height x colour depth\n\nExample: 800 x 600 pixels at 24 bits per pixel\n= 800 x 600 x 24\n= 11 520 000 bits\n= 1 440 000 bytes\n= 1.44 MB (approximately)' },
        { t: 'demo', id: 'image', caption: 'Draw on a pixel grid, change the colour depth and calculate real file sizes.' },
        { t: 'h', text: 'Sound' },
        { t: 'p', text: 'Sound in the real world is a smooth, continuous wave. A computer cannot store a smooth wave, so it measures the height of the wave many times per second and stores each measurement as a binary number. This is called sampling.' },
        { t: 'diagram', id: 'sound-sampling' },
        {
          t: 'key',
          terms: [
            { term: 'Sample rate', def: 'How many samples are taken each second, measured in hertz. A CD uses 44100 Hz.' },
            { term: 'Bit depth', def: 'How many bits are used to store each sample. More bits means each height is recorded more accurately.' },
            { term: 'Duration', def: 'How many seconds long the recording is.' },
          ],
        },
        { t: 'code', lang: 'text', caption: 'The sound formula', code: 'file size in bits = sample rate x bit depth x duration in seconds\n\nExample: 44100 Hz, 16 bit, 30 seconds\n= 44100 x 16 x 30\n= 21 168 000 bits\n= 2 646 000 bytes\n= 2.65 MB (approximately)' },
        { t: 'demo', id: 'sound', caption: 'Drag the sliders and watch quality and file size fight each other.' },
        {
          t: 'tip',
          body: [
            'Both formulas give an answer in bits. Divide by 8 for bytes, then by 1000 for kB and by 1000 again for MB. Always show your working because method marks are available even when the final number is wrong.',
          ],
        },
      ],
    },
    {
      id: 't1-2-l5',
      title: 'Compression',
      minutes: 7,
      blocks: [
        { t: 'p', text: 'Compression makes a file smaller. Smaller files use less storage, upload and download faster, and use less mobile data. Streaming video would be impossible without it.' },
        { t: 'diagram', id: 'compression-types' },
        { t: 'h', text: 'Lossy compression' },
        { t: 'p', text: 'Lossy compression permanently removes some of the data. In an MP3 it removes sounds that human ears are poor at noticing. In a JPEG it merges areas of similar colour. The file gets much smaller, but the original can never be recovered.' },
        { t: 'h', text: 'Lossless compression' },
        { t: 'p', text: 'Lossless compression finds patterns and stores them more efficiently, so no data is lost at all. The original file is rebuilt perfectly when it is opened.' },
        {
          t: 'example',
          title: 'How lossless actually works',
          body: [
            'Take the text AAAAAABBBBCC. Instead of storing 12 characters, store the count and the character: 6A4B2C.',
            'That is 6 characters instead of 12, and the original can be rebuilt exactly. This idea is called run length encoding.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: sending coursework',
          body: [
            'You need to email a folder of Python files to your teacher. You zip it, which is lossless, because deleting even one character from a program would break it.',
            'You also need to upload 200 holiday photos to social media. Those are saved as JPEG, which is lossy, because a tiny loss of detail nobody notices is a fair price for files that are ten times smaller.',
          ],
        },
        {
          t: 'table',
          head: ['', 'Lossy', 'Lossless'],
          rows: [
            ['Data removed?', 'Yes, permanently', 'No'],
            ['Original recoverable?', 'No', 'Yes, exactly'],
            ['File size reduction', 'Large', 'Smaller reduction'],
            ['Typical uses', 'Photos, music, streaming video', 'Text, program code, spreadsheets, logos'],
            ['File types', 'JPEG, MP3, MP4', 'PNG, ZIP, GIF, FLAC'],
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-2-q1',
      title: 'Quiz 1: Memory, storage and units',
      questions: [
        { q: 'What does volatile mean?', options: ['The memory is very fast', 'The contents are lost when power is removed', 'The memory cannot be written to', 'The memory is stored on a disc'], answer: 1, why: 'Volatile memory such as RAM loses everything the moment the power goes off.' },
        { q: 'What is stored in ROM?', options: ['The user documents', 'The start up instructions that load the operating system', 'The current web page', 'Downloaded apps'], answer: 1, why: 'ROM is non volatile and holds the boot up program, often called the BIOS.' },
        { q: 'Why is virtual memory used?', options: ['To make the hard drive bigger', 'To act as extra RAM when RAM is full', 'To speed up the CPU clock', 'To store passwords securely'], answer: 1, why: 'When RAM is full, part of secondary storage is used as if it were RAM so programs can keep running.' },
        { q: 'Why is virtual memory slower than RAM?', options: ['It is stored in the CPU', 'Secondary storage is much slower to read and write than RAM', 'It is encrypted', 'It uses less electricity'], answer: 1, why: 'Secondary storage access times are far slower, and data must be swapped in and out constantly.' },
        { q: 'How many bits are in one byte?', options: ['4', '8', '16', '1000'], answer: 1, why: 'One byte is 8 bits. Four bits is a nibble.' },
        { q: 'Which is the largest?', options: ['1 gigabyte', '1500 megabytes', '1 terabyte', '900000 kilobytes'], answer: 2, why: 'A terabyte is 1000 gigabytes, so it is far larger than the others.' },
        { q: 'Which storage type has no moving parts?', options: ['Hard disk drive', 'Solid state drive', 'DVD', 'Magnetic tape'], answer: 1, why: 'Solid state storage uses flash memory with no moving parts, making it fast and durable.' },
        { q: 'A student needs to give a 1 GB video to a friend on a bus. Which is most suitable?', options: ['A DVD', 'A USB flash drive', 'An internal hard disk drive', 'A CD'], answer: 1, why: 'A flash drive is small, tough and easily holds 1 GB. An internal HDD is not portable and a CD holds only 700 MB.' },
        { q: 'What does the term durability mean when comparing storage?', options: ['How much it costs', 'How much data it holds', 'How well it survives damage such as being dropped', 'How fast it transfers data'], answer: 2, why: 'Durability is about surviving physical damage such as knocks, scratches and moisture.' },
        { q: 'Why does a computer need secondary storage as well as RAM?', options: ['RAM is too fast', 'RAM is volatile so files must be kept somewhere permanent', 'Secondary storage is faster than RAM', 'The CPU cannot use RAM'], answer: 1, why: 'Files must survive the power being switched off, and RAM cannot do that.' },
      ],
    },
    {
      id: 't1-2-q2',
      title: 'Quiz 2: Binary, data representation and compression',
      questions: [
        { q: 'What is the denary value of the binary number 10110010?', options: ['178', '182', '166', '190'], answer: 0, why: '128 + 32 + 16 + 2 = 178.' },
        { q: 'What is 200 in 8 bit binary?', options: ['11001000', '11000100', '10011000', '11101000'], answer: 0, why: '128 + 64 + 8 = 200, so the bits at those places are 1.' },
        { q: 'What is the hexadecimal value of the binary number 10101111?', options: ['AF', 'FA', 'A7', 'F9'], answer: 0, why: '1010 is A and 1111 is F, giving AF.' },
        { q: 'What happens when the result of a binary addition needs 9 bits in an 8 bit system?', options: ['The extra bit is stored elsewhere', 'An overflow error occurs', 'The number is rounded down', 'Nothing, it is fine'], answer: 1, why: 'The answer is too large for the number of bits available, which is an overflow error.' },
        { q: 'A binary number is shifted left by 3 places. What happens to its value?', options: ['It is divided by 3', 'It is multiplied by 8', 'It is multiplied by 3', 'It stays the same'], answer: 1, why: 'Each place shifted left multiplies by 2, so three places multiplies by 2 x 2 x 2 = 8.' },
        { q: 'Which is a correct file size for a 1000 x 500 pixel image at 8 bits per pixel?', options: ['500 000 bits', '4 000 000 bits', '4 000 bits', '8 000 000 bits'], answer: 1, why: '1000 x 500 x 8 = 4 000 000 bits, which is 500 000 bytes.' },
        { q: 'What does increasing the sample rate of an audio recording do?', options: ['Reduces quality and file size', 'Improves quality and increases file size', 'Improves quality and reduces file size', 'Has no effect'], answer: 1, why: 'More samples per second capture the wave more accurately but need more storage.' },
        { q: 'What is metadata?', options: ['The pixels of an image', 'Data about the file such as its dimensions and date', 'A compressed version of the file', 'The colour depth only'], answer: 1, why: 'Metadata is data about data, for example resolution, colour depth, author and date.' },
        { q: 'Which file type uses lossy compression?', options: ['PNG', 'ZIP', 'MP3', 'TXT'], answer: 2, why: 'MP3 removes sound data permanently to make files far smaller.' },
        { q: 'Why would you use lossless rather than lossy compression for a program file?', options: ['It makes the file smaller', 'Removing any data would break the program', 'It is faster to open', 'Programs cannot be compressed'], answer: 1, why: 'Program code must be recovered exactly, so no data can be thrown away.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-2-e1',
      context: 'A laptop has 4 GB of RAM. The user often has many browser tabs and a video editor open at the same time, and the laptop becomes very slow.',
      stem: 'Explain how virtual memory is being used in this situation and why it makes the laptop slow.',
      marks: 5,
      markScheme: [
        { text: 'RAM has become full so there is no space for more data.', accept: [['ram', 'full'], ['runs out'], ['no space']] },
        { text: 'Data that has not been used recently is moved out of RAM.', accept: [['moved'], ['transferred'], ['swapped'], ['copied out'], ['least recently used']] },
        { text: 'It is stored in a section of secondary storage acting as virtual memory.', accept: [['secondary storage'], ['hard drive'], ['hard disk'], ['ssd'], ['storage']] },
        { text: 'Secondary storage is much slower to read and write than RAM.', accept: [['slower'], ['slow'], ['access time']] },
        { text: 'Data has to be constantly swapped back and forth, which is called disk thrashing.', accept: [['swap'], ['thrash'], ['back and forth'], ['constantly']] },
      ],
      modelAnswer:
        'The 4 GB of RAM has filled up because the browser tabs and the video editor all need memory at the same time. To keep the programs running, the operating system moves the data that has not been used for the longest time out of RAM and stores it in a section of the secondary storage, which is being used as virtual memory. Secondary storage is far slower to read and write than RAM, so every time that data is needed again it must be swapped back in, and something else must be swapped out. This constant swapping is called disk thrashing and it means the CPU spends most of its time waiting, which is why the laptop feels very slow.',
      examinerTip: 'Link every point back to the scenario. Saying "RAM is full" scores nothing unless you say what happens next.',
    },
    {
      id: 't1-2-e2',
      stem: 'A photograph is 1200 pixels wide and 900 pixels high, with a colour depth of 24 bits. Calculate the file size in megabytes. Show your working.',
      marks: 4,
      markScheme: [
        { text: 'Multiplies width by height by colour depth.', accept: [['1200', '900', '24'], ['width', 'height', 'colour depth']] },
        { text: 'Correct answer in bits: 25 920 000 bits.', accept: [['25920000'], ['25 920 000'], ['25,920,000']] },
        { text: 'Divides by 8 to get bytes: 3 240 000 bytes.', accept: [['3240000'], ['3 240 000'], ['3,240,000'], ['divide', '8']] },
        { text: 'Converts to megabytes: approximately 3.24 MB.', accept: [['3.24'], ['3.2 mb'], ['3.24 mb']] },
      ],
      modelAnswer:
        'File size in bits = width x height x colour depth = 1200 x 900 x 24 = 25 920 000 bits. To convert to bytes, divide by 8: 25 920 000 / 8 = 3 240 000 bytes. To convert to kilobytes, divide by 1000: 3240 kB. To convert to megabytes, divide by 1000 again: 3.24 MB.',
      examinerTip: 'Write the formula down first. Even if you make an arithmetic slip you will still earn the method marks.',
    },
    {
      id: 't1-2-e3',
      stem: 'Compare lossy and lossless compression, giving a suitable use for each.',
      marks: 6,
      markScheme: [
        { text: 'Lossy permanently removes some of the data.', accept: [['lossy', 'remove'], ['permanently'], ['deletes data'], ['discards']] },
        { text: 'The original file cannot be recovered after lossy compression.', accept: [['cannot be recovered'], ['not recovered'], ['never', 'original'], ['irreversible']] },
        { text: 'Lossless keeps all the data by storing it more efficiently, for example by recording repeated patterns.', accept: [['no data is lost'], ['all the data'], ['pattern'], ['run length'], ['efficient']] },
        { text: 'A lossless file can be restored exactly to the original.', accept: [['exactly'], ['identical'], ['restored'], ['rebuilt']] },
        { text: 'Lossy gives a much greater reduction in file size.', accept: [['smaller'], ['greater reduction'], ['much smaller']] },
        { text: 'Suitable uses: lossy for photos, music or streaming video, lossless for text, program code or a logo.', accept: [['jpeg'], ['mp3'], ['streaming'], ['png'], ['zip'], ['text'], ['code'], ['logo']] },
      ],
      modelAnswer:
        'Lossy compression permanently removes data from the file, for example sounds a human ear is unlikely to notice, so the original can never be recovered. Lossless compression does not remove any data. Instead it records the data more efficiently, for example by storing a repeated pattern once with a count of how many times it appears, so the file can be rebuilt exactly as it was. Lossy produces a much greater reduction in file size, which is why it is used for photographs, music and streaming video where a small loss of detail does not matter. Lossless is used where every bit must be perfect, such as program code, text documents and logos, because losing even one character would corrupt the file.',
    },
    {
      id: 't1-2-e4',
      stem: 'Explain why hexadecimal is often used by programmers instead of binary.',
      marks: 3,
      markScheme: [
        { text: 'Hexadecimal is much shorter than binary for the same value.', accept: [['shorter'], ['fewer digits'], ['less digits'], ['compact']] },
        { text: 'It is easier for a human to read, write and remember.', accept: [['easier to read'], ['easier', 'human'], ['remember'], ['read and write']] },
        { text: 'Fewer digits means fewer mistakes when copying values.', accept: [['fewer mistakes'], ['less errors'], ['fewer errors'], ['less likely', 'mistake']] },
        { text: 'Conversion between hex and binary is simple because one hex digit is exactly 4 bits.', accept: [['4 bits'], ['four bits'], ['nibble'], ['easy to convert']] },
      ],
      modelAnswer:
        'One byte written in binary needs eight digits but the same value in hexadecimal needs only two, so hexadecimal is far shorter. That makes it much easier for a person to read, write down and remember, and fewer digits means fewer mistakes when copying a value such as a memory address or a colour code. Converting between the two is also very quick because each hexadecimal digit represents exactly four bits.',
    },
    {
      id: 't1-2-e5',
      context: 'A podcast is recorded at a sample rate of 22050 Hz with a bit depth of 8 bits. It lasts 60 seconds.',
      stem: 'Calculate the file size in kilobytes, and state two changes that would reduce the file size.',
      marks: 5,
      markScheme: [
        { text: 'Multiplies sample rate by bit depth by duration.', accept: [['22050', '8', '60'], ['sample rate', 'bit depth', 'duration']] },
        { text: 'Correct answer in bits: 10 584 000 bits.', accept: [['10584000'], ['10 584 000'], ['10,584,000']] },
        { text: 'Divides by 8 for bytes: 1 323 000 bytes.', accept: [['1323000'], ['1 323 000'], ['1,323,000']] },
        { text: 'Converts to kilobytes: 1323 kB.', accept: [['1323'], ['1323 kb'], ['1.323 mb']] },
        { text: 'Reduce the sample rate or reduce the bit depth (or use lossy compression, or shorten the recording).', accept: [['lower', 'sample rate'], ['reduce', 'sample rate'], ['lower', 'bit depth'], ['reduce', 'bit depth'], ['compression'], ['shorter']] },
      ],
      modelAnswer:
        'File size in bits = sample rate x bit depth x duration = 22050 x 8 x 60 = 10 584 000 bits. Divide by 8 to get bytes: 1 323 000 bytes. Divide by 1000 to get kilobytes: 1323 kB. To reduce the file size the sample rate could be lowered, for example to 11025 Hz, so fewer samples are stored each second. The bit depth could also be reduced, for example to 4 bits, so each sample uses less space. Both changes reduce the sound quality, and applying lossy compression such as MP3 would be another option.',
    },
  ],
};
