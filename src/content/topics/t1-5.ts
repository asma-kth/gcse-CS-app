import type { Topic } from '../../types';

export const t1_5: Topic = {
  id: 't1-5',
  code: '1.5',
  title: 'Systems Software',
  blurb: 'What the operating system does and why utility software matters.',
  paper: 'Paper 1',
  icon: 'system',
  lessons: [
    {
      id: 't1-5-l1',
      title: 'The operating system',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'Systems software runs the computer itself. It sits between the hardware and the applications you actually use. Without it, every single program would have to know how to talk to every possible printer, screen and keyboard.' },
        { t: 'diagram', id: 'os-functions' },
        {
          t: 'real',
          title: 'Real life scenario: a school office manager',
          body: [
            'The office manager decides who is allowed in which room (user management), keeps the filing cabinets organised (file management), allocates desk space to visitors (memory management), makes sure the printer and photocopier work for everyone (peripheral management) and answers the front desk (user interface).',
            'Teachers do not need to know how any of that happens. They just ask, and it is handled. That is exactly what an operating system does for applications.',
          ],
        },
        { t: 'h', text: 'The five functions in detail' },
        {
          t: 'key',
          terms: [
            { term: 'User interface', def: 'How the user interacts with the computer. This may be a graphical user interface with windows and icons, or a command line interface where the user types instructions.' },
            { term: 'Memory management', def: 'Decides which programs get which parts of RAM, keeps them separate so one program cannot corrupt another, and uses virtual memory when RAM runs out.' },
            { term: 'Peripheral and driver management', def: 'Uses device drivers so the computer can communicate with printers, keyboards, mice and screens. A driver is a small program that translates between the OS and one particular device.' },
            { term: 'User management', def: 'Handles accounts, log ins, passwords and access rights, and keeps each person files separate and private.' },
            { term: 'File management', def: 'Creates the folder structure, and lets files be created, named, moved, copied, deleted and searched for. It also records where every file is physically stored.' },
          ],
        },
        {
          t: 'example',
          title: 'Multitasking explained properly',
          body: [
            'A computer with one core cannot truly run two programs at once. The operating system gives each program a tiny slice of CPU time, then switches to the next one.',
            'This happens so fast, thousands of times per second, that it looks as though music, a browser and a word processor are all running at the same time.',
          ],
        },
      ],
    },
    {
      id: 't1-5-l2',
      title: 'Utility software',
      minutes: 7,
      blocks: [
        { t: 'p', text: 'Utility software does housekeeping jobs that keep a computer running well. It is not what you bought the computer for, but without it things go wrong.' },
        { t: 'h', text: 'Encryption software' },
        { t: 'p', text: 'Scrambles the contents of files or a whole drive so that if a laptop is stolen the data on it cannot be read without the key.' },
        { t: 'h', text: 'Defragmentation software' },
        { t: 'p', text: 'On a magnetic hard disk drive, files get saved into whatever gaps are available, so over time one file ends up scattered in pieces across the disk. This is fragmentation, and it slows reading down because the read write head has to move to many places.' },
        { t: 'p', text: 'Defragmentation software rearranges the pieces so each file is stored in one continuous block, and gathers the free space together.' },
        {
          t: 'warn',
          body: [
            'Never defragment a solid state drive. An SSD has no moving parts, so there is no speed benefit, and the extra writing wears the memory cells out faster.',
          ],
        },
        { t: 'h', text: 'Data compression software' },
        { t: 'p', text: 'Reduces file sizes so they take less storage space and transfer more quickly, for example creating a zip archive before emailing a folder.' },
        { t: 'h', text: 'Backup software' },
        { t: 'p', text: 'Makes copies of files so they can be recovered after accidental deletion, hardware failure, theft or a ransomware attack.' },
        {
          t: 'ul',
          items: [
            'A full backup copies everything. It takes the longest and uses the most space, but restoring is simple.',
            'An incremental backup copies only what has changed since the last backup. It is fast and small, but restoring means combining the full backup and every incremental one since.',
            'Backups should be stored in a different physical location, otherwise a fire or theft destroys both copies.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: coursework disaster',
          body: [
            'A student keeps their only copy of a project on one USB stick. The stick is left in a coat pocket and goes through the wash.',
            'With a backup on cloud storage they would have lost nothing. Without one they lose weeks of work. This is why the exam asks about backups so often.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-5-q1',
      title: 'Quiz 1: The operating system',
      questions: [
        { q: 'Which of these is a function of an operating system?', options: ['Editing photographs', 'Managing memory', 'Writing essays', 'Browsing the web'], answer: 1, why: 'Memory management is one of the five core functions of an operating system.' },
        { q: 'What is a device driver?', options: ['A person who installs computers', 'Software that lets the operating system communicate with a piece of hardware', 'A type of cable', 'A backup utility'], answer: 1, why: 'A driver translates between the operating system and one specific device.' },
        { q: 'What does user management involve?', options: ['Allocating RAM to programs', 'Handling accounts, log ins and access rights', 'Defragmenting the hard drive', 'Compressing files'], answer: 1, why: 'User management controls who can log in and what each account is allowed to do.' },
        { q: 'What is a graphical user interface?', options: ['An interface where the user types commands', 'An interface using windows, icons, menus and pointers', 'A type of processor', 'A network protocol'], answer: 1, why: 'A GUI uses visual elements, which makes it much easier for a beginner than typing commands.' },
        { q: 'How does an operating system appear to run several programs at once on a single core?', options: ['It runs them truly simultaneously', 'It gives each program a small slice of processor time in turn, switching very quickly', 'It stops all but one program', 'It uses the graphics card instead'], answer: 1, why: 'Rapid switching between tasks makes it look simultaneous even though only one runs at a time.' },
        { q: 'What does file management do?', options: ['Encrypts the hard drive', 'Organises folders and allows files to be created, moved, renamed and deleted', 'Manages the CPU clock speed', 'Connects to the internet'], answer: 1, why: 'File management maintains the folder structure and keeps track of where files are stored.' },
        { q: 'Why does the operating system keep programs in separate areas of memory?', options: ['To make them run faster', 'So one program cannot overwrite or corrupt another', 'To save electricity', 'To reduce the file size'], answer: 1, why: 'Isolating programs stops one crashing program taking the whole system down.' },
        { q: 'Which is an example of systems software?', options: ['A spreadsheet program', 'An operating system', 'A photo editor', 'A web browser'], answer: 1, why: 'Systems software runs and maintains the computer. The others are application software.' },
        { q: 'What is a command line interface?', options: ['An interface where instructions are typed as text', 'An interface using icons and windows', 'A touchscreen interface', 'A voice interface'], answer: 0, why: 'A CLI needs typed commands, which is harder to learn but powerful and uses fewer resources.' },
        { q: 'Which OS function decides which parts of RAM each open program can use?', options: ['File management', 'Memory management', 'User management', 'Peripheral management'], answer: 1, why: 'Memory management allocates RAM and manages virtual memory.' },
      ],
    },
    {
      id: 't1-5-q2',
      title: 'Quiz 2: Utility software',
      questions: [
        { q: 'What does defragmentation software do?', options: ['Deletes unused files', 'Rearranges file pieces so each file is stored together', 'Compresses files', 'Scans for viruses'], answer: 1, why: 'It gathers the scattered parts of each file into one continuous block to speed up reading.' },
        { q: 'Why should you not defragment an SSD?', options: ['It would delete the files', 'There is no read write head to move, so there is no benefit, and it wears the drive', 'SSDs cannot store fragmented files', 'It takes too long'], answer: 1, why: 'SSDs have no moving parts, so defragmenting gives no speed gain and shortens the drive life.' },
        { q: 'What is the main purpose of backup software?', options: ['To make files smaller', 'To allow data to be recovered if it is lost or damaged', 'To speed up the CPU', 'To organise folders'], answer: 1, why: 'Backups exist so data can be restored after deletion, failure, theft or ransomware.' },
        { q: 'What is an incremental backup?', options: ['A copy of everything every time', 'A copy of only the data changed since the last backup', 'A backup stored on paper', 'A backup that deletes the original'], answer: 1, why: 'Incremental backups are quicker and smaller but restoring needs the full backup plus every increment.' },
        { q: 'Why should backups be stored in a different location?', options: ['It is faster', 'So a fire or theft does not destroy both copies', 'To save money', 'To make the files smaller'], answer: 1, why: 'Off site storage protects against events that damage the whole building.' },
        { q: 'What does encryption software protect against?', options: ['Fragmented files', 'Someone reading data from a stolen device', 'Slow processors', 'Full hard drives'], answer: 1, why: 'Encrypted data is unreadable without the key, so a stolen laptop reveals nothing.' },
        { q: 'Compression software is useful because:', options: ['It repairs damaged files', 'Smaller files use less storage and transfer faster', 'It speeds up the CPU', 'It removes viruses'], answer: 1, why: 'Smaller files save storage space and upload or download more quickly.' },
        { q: 'Which of these is utility software?', options: ['A word processor', 'Anti malware software', 'A video game', 'A web browser'], answer: 1, why: 'Anti malware is a maintenance tool, so it counts as utility software.' },
        { q: 'Why does fragmentation happen on a hard disk drive?', options: ['The disk spins too fast', 'Files are saved into whatever free gaps are available, so they end up split up', 'The operating system is faulty', 'The drive is too new'], answer: 1, why: 'As files are deleted and added, free space becomes scattered and new files fill several gaps.' },
        { q: 'A full backup compared with an incremental backup is:', options: ['Faster to create but slower to restore', 'Slower to create but simpler to restore', 'Always smaller', 'Only possible on an SSD'], answer: 1, why: 'A full backup takes longer and more space, but restoring only needs that one copy.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-5-e1',
      stem: 'Describe three functions of an operating system.',
      marks: 6,
      markScheme: [
        { text: 'Memory management: allocates RAM to programs and keeps them separate.', accept: [['memory management'], ['allocat', 'ram'], ['memory', 'programs']] },
        { text: 'File management: organises folders and allows files to be created, moved and deleted.', accept: [['file management'], ['folder'], ['files', 'delete'], ['files', 'organis']] },
        { text: 'User management: handles accounts, log ins and access rights.', accept: [['user management'], ['account'], ['log in'], ['login'], ['access rights'], ['permission']] },
        { text: 'Peripheral management: uses drivers to communicate with hardware such as printers.', accept: [['peripheral'], ['driver'], ['printer'], ['hardware', 'communicat']] },
        { text: 'User interface: provides a way for the user to interact, such as a GUI or command line.', accept: [['user interface'], ['gui'], ['command line'], ['interact']] },
        { text: 'Each function is described, not just named.', accept: [['because'], ['this means'], ['so that'], ['allows'], ['which'], ['for example']] },
      ],
      modelAnswer:
        'One function is memory management. The operating system decides which parts of RAM each open program is given, keeps them in separate areas so one program cannot corrupt another, and moves data to virtual memory if RAM becomes full. A second function is file management. The operating system maintains the folder structure and allows files to be created, named, moved, copied, deleted and searched for, while keeping a record of where each file is physically stored. A third function is user management. The operating system handles accounts and log ins, checks passwords, and controls which files and settings each user is allowed to access, so that one student cannot open another student work.',
    },
    {
      id: 't1-5-e2',
      context: 'A user complains that their computer, which has a magnetic hard disk drive, has become slow at opening large files.',
      stem: 'Explain how defragmentation software could improve this, and state why it would not help if the computer had a solid state drive.',
      marks: 5,
      markScheme: [
        { text: 'Over time files become split into pieces stored in different places on the disk.', accept: [['fragment'], ['split'], ['pieces'], ['scattered'], ['different places']] },
        { text: 'The read write head has to move to several places to read one file, which takes time.', accept: [['read write head'], ['head'], ['move'], ['seek']] },
        { text: 'Defragmentation rearranges the parts so each file is stored together in one block.', accept: [['together'], ['one block'], ['contiguous'], ['rearrange'], ['reorganis']] },
        { text: 'This means fewer head movements, so files open faster.', accept: [['faster'], ['quicker'], ['less movement'], ['fewer movements']] },
        { text: 'An SSD has no moving parts, so access time is the same wherever data is stored, and extra writing shortens its life.', accept: [['no moving parts'], ['ssd', 'no benefit'], ['wear'], ['same speed'], ['write cycles']] },
      ],
      modelAnswer:
        'On a magnetic hard disk drive, files are saved into whatever free gaps are available, so as files are added and deleted a single file ends up split into fragments stored in different places on the disk. To read that file the read write head has to physically move to each location in turn, and all that movement takes time, which is why large files open slowly. Defragmentation software rearranges the data so that all the parts of each file are stored together in one continuous block, and it groups the free space together too, so the head makes far fewer movements and files open more quickly. On a solid state drive this would give no benefit at all, because there is no moving read write head and any location can be accessed just as quickly as any other. Worse, defragmenting an SSD writes a large amount of data unnecessarily, and each memory cell can only be written a limited number of times, so it shortens the life of the drive.',
    },
    {
      id: 't1-5-e3',
      stem: 'Explain why a school should use backup software, and describe one advantage of incremental backups over full backups.',
      marks: 4,
      markScheme: [
        { text: 'Backups allow data to be restored if it is lost, deleted, corrupted or stolen.', accept: [['restore'], ['recover'], ['lost'], ['deleted'], ['corrupt']] },
        { text: 'Protects against hardware failure, fire, theft or ransomware.', accept: [['hardware failure'], ['fire'], ['theft'], ['ransomware'], ['flood']] },
        { text: 'An incremental backup only copies data changed since the last backup.', accept: [['changed'], ['since the last'], ['only new'], ['modified']] },
        { text: 'This is faster and uses less storage space.', accept: [['faster'], ['quicker'], ['less space'], ['less storage'], ['smaller']] },
      ],
      modelAnswer:
        'A school holds work, assessment records and personal data that would be extremely difficult to recreate, so backup software is needed so that this data can be restored if files are accidentally deleted, a hard drive fails, equipment is stolen, or a ransomware attack encrypts the network. One advantage of incremental backups is that they only copy the data that has changed since the previous backup, so each backup takes far less time to run and uses much less storage space than copying everything every night.',
    },
    {
      id: 't1-5-e4',
      stem: 'Compare a graphical user interface with a command line interface.',
      marks: 4,
      markScheme: [
        { text: 'A GUI uses windows, icons, menus and a pointer.', accept: [['icons'], ['windows'], ['menus'], ['pointer'], ['visual']] },
        { text: 'A GUI is easier for a beginner because commands do not need to be memorised.', accept: [['easier'], ['beginner'], ['intuitive'], ['no need to remember'], ['user friendly']] },
        { text: 'A CLI requires the user to type commands.', accept: [['type'], ['text'], ['typed commands']] },
        { text: 'A CLI uses fewer system resources and can be faster or more powerful for an expert, and allows automation.', accept: [['fewer resources'], ['less memory'], ['faster', 'expert'], ['powerful'], ['script'], ['automat']] },
      ],
      modelAnswer:
        'A graphical user interface presents windows, icons, menus and a pointer, so the user can see the options available and simply click them. That makes it far easier for a beginner because no commands need to be memorised. However, it uses more memory and processing power because everything has to be drawn on screen. A command line interface requires the user to type commands exactly, which is harder to learn and easy to get wrong, but it uses very few system resources and an experienced user can work faster and can write scripts to automate repeated jobs, which a GUI cannot easily do.',
    },
    {
      id: 't1-5-e5',
      stem: 'State what is meant by utility software and give two examples with their purpose.',
      marks: 4,
      markScheme: [
        { text: 'Utility software carries out maintenance or housekeeping tasks that keep the computer running well.', accept: [['maintenance'], ['housekeeping'], ['keeps', 'running'], ['manage', 'system']] },
        { text: 'Example: encryption software scrambles data so it cannot be read without a key.', accept: [['encrypt']] },
        { text: 'Example: defragmentation reorganises files stored on a hard disk.', accept: [['defrag']] },
        { text: 'Example: compression reduces file size, or backup software creates recoverable copies.', accept: [['compress'], ['backup'], ['back up'], ['anti malware'], ['antivirus']] },
      ],
      modelAnswer:
        'Utility software is systems software that carries out maintenance and housekeeping tasks to keep a computer working properly, rather than doing the work the user bought the computer for. One example is encryption software, which scrambles the contents of files so that if the device is stolen the data cannot be read without the key. Another example is backup software, which automatically creates copies of files in another location so they can be restored if the originals are deleted, corrupted or encrypted by ransomware.',
    },
  ],
};
