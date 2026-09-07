import type { ExamPaper } from '../../types';

export const paper1_3: ExamPaper = {
  id: 'p1-3',
  component: 'Paper 1',
  number: 3,
  title: 'Paper 1 Mock C: Full Component Mix',
  minutes: 45,
  totalMarks: 44,
  blurb: 'Every Paper 1 topic mixed together, including systems software and impacts.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p1-3-1', marks: 1, stem: 'Which of these is a function of an operating system?', options: ['Editing a photograph', 'Managing memory', 'Writing an essay', 'Browsing a website'], answer: 1, why: 'Memory management is one of the five core functions of an operating system.' },
        { kind: 'mcq', id: 'p1-3-2', marks: 1, stem: 'Defragmentation software should NOT be used on:', options: ['A magnetic hard disk drive', 'A solid state drive', 'An external hard drive', 'A network drive'], answer: 1, why: 'An SSD has no moving read write head, so there is no speed gain and extra writing shortens its life.' },
        { kind: 'mcq', id: 'p1-3-3', marks: 1, stem: 'Which law covers unauthorised access to a computer system?', options: ['Data Protection Act', 'Computer Misuse Act', 'Copyright, Designs and Patents Act', 'Freedom of Information Act'], answer: 1, why: 'The Computer Misuse Act 1990 makes unauthorised access an offence.' },
        { kind: 'mcq', id: 'p1-3-4', marks: 1, stem: 'What is an embedded system?', options: ['A computer that runs any software the user installs', 'A computer built into a device to do one specific job', 'A very fast server', 'A cloud storage service'], answer: 1, why: 'Embedded systems are dedicated to one task and their software is normally fixed.' },
        { kind: 'mcq', id: 'p1-3-5', marks: 1, stem: 'Which is an example of open source software?', options: ['Microsoft Office', 'Adobe Photoshop', 'LibreOffice', 'Windows'], answer: 2, why: 'LibreOffice publishes its source code and allows it to be modified and shared.' },
        { kind: 'mcq', id: 'p1-3-6', marks: 1, stem: 'What is e waste?', options: ['Unwanted email', 'Discarded electronic equipment', 'Wasted electricity', 'Deleted files'], answer: 1, why: 'E waste is discarded electronic devices, the fastest growing waste stream in the world.' },
        { kind: 'mcq', id: 'p1-3-7', marks: 1, stem: 'ASCII uses 7 bits. How many characters can it represent?', options: ['64', '128', '256', '512'], answer: 1, why: '2 to the power of 7 is 128.' },
        { kind: 'mcq', id: 'p1-3-8', marks: 1, stem: 'Which utility software makes copies of data so it can be recovered later?', options: ['Defragmentation', 'Compression', 'Backup', 'Encryption'], answer: 2, why: 'Backup software creates recoverable copies of files.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p1-3-9',
          marks: 6,
          stem: 'Describe three functions of an operating system, explaining why each is needed.',
          markScheme: [
            { text: 'Memory management allocates RAM to programs and keeps them separate.', accept: [['memory management'], ['allocat', 'ram'], ['memory', 'program']] },
            { text: 'File management organises folders and lets files be created, moved and deleted.', accept: [['file management'], ['folder'], ['files']] },
            { text: 'User management handles accounts, log ins and access rights.', accept: [['user management'], ['account'], ['log in'], ['login'], ['access right']] },
            { text: 'Peripheral management uses drivers so hardware can be used.', accept: [['peripheral'], ['driver'], ['printer'], ['hardware']] },
            { text: 'The user interface lets a person interact with the computer.', accept: [['interface'], ['gui'], ['command line'], ['interact']] },
            { text: 'Each function is explained rather than just named.', accept: [['because'], ['so that'], ['this means'], ['allows'], ['prevents'], ['without']] },
          ],
          modelAnswer:
            'Memory management decides which part of RAM each open program gets and keeps them in separate areas, which is needed so that one badly behaved program cannot overwrite another and crash the whole machine, and so that virtual memory can be used when RAM fills up. File management maintains the folder structure and lets files be created, named, moved, copied and deleted, which is needed because otherwise every application would have to know exactly where data sits on the physical disk. User management handles accounts, passwords and access rights, which is needed so that several people can share one computer while keeping their work private and so that students cannot change system settings.',
        },
        {
          kind: 'written',
          id: 'p1-3-10',
          marks: 8,
          context: 'A local council plans to replace its paper library membership system with an online only app.',
          stem: 'Discuss the ethical, legal, cultural and environmental impacts of this decision, and give a conclusion.',
          markScheme: [
            { text: 'Positive: the system is faster, cheaper to run and available at any time.', accept: [['faster'], ['cheaper'], ['any time'], ['24'], ['convenien']] },
            { text: 'Environmental positive: less paper is printed and fewer journeys are made.', accept: [['paper'], ['travel'], ['journeys'], ['trees'], ['emissions']] },
            { text: 'Environmental negative: servers must run constantly and use electricity.', accept: [['server'], ['electricity'], ['power'], ['data centre']] },
            { text: 'Cultural negative: the digital divide excludes people without internet access or a device.', accept: [['digital divide'], ['no internet'], ['cannot afford'], ['excluded'], ['without access']] },
            { text: 'Cultural or ethical negative: older or less confident users may struggle.', accept: [['older'], ['elderly'], ['less confident'], ['disabilit'], ['struggle']] },
            { text: 'Legal: personal data must be handled under the Data Protection Act.', accept: [['data protection'], ['personal data'], ['gdpr']] },
            { text: 'Ethical: is it fair to remove a service people rely on, and what happens to staff jobs.', accept: [['fair'], ['jobs'], ['staff'], ['rely'], ['unfair']] },
            { text: 'A clear conclusion is given, for example keeping an offline option alongside the app.', accept: [['conclusion'], ['overall'], ['should'], ['alongside'], ['as well as'], ['keep'], ['alternative']] },
          ],
          modelAnswer:
            'There are real benefits. An online system processes memberships far faster and more cheaply than paper, because data goes straight into the database without anyone retyping it, and residents can join or renew at any hour without travelling to the library. Environmentally, much less paper is printed and fewer car journeys are made, although this is partly offset because the servers hosting the app run day and night and consume electricity, and data centres use a large share of that power on cooling. Culturally, the biggest risk is the digital divide: residents on low incomes, in areas with poor broadband or without a smartphone are shut out of a service they fund through council tax, and older residents or those with certain disabilities may find the app difficult and give up. Ethically that raises a fairness question, as does the impact on library staff whose roles may be cut. Legally, the council becomes responsible for the personal data it collects and must comply with the Data Protection Act by keeping it secure, using it only for the stated purpose and deleting it when it is no longer needed. Overall the move is sensible because of the cost and speed benefits, but it should not be online only. Keeping a paper or in person option available would preserve most of the savings while making sure nobody is excluded.',
        },
        {
          kind: 'written',
          id: 'p1-3-11',
          marks: 4,
          stem: 'Explain the difference between a graphical user interface and a command line interface, giving one advantage of each.',
          markScheme: [
            { text: 'A GUI uses windows, icons, menus and a pointer.', accept: [['icon'], ['window'], ['menu'], ['pointer'], ['visual']] },
            { text: 'A CLI requires typed commands.', accept: [['type'], ['typed'], ['text command']] },
            { text: 'GUI advantage: easier for a beginner because commands need not be memorised.', accept: [['easier'], ['beginner'], ['intuitive'], ['no need to remember']] },
            { text: 'CLI advantage: uses fewer resources and allows automation or faster expert use.', accept: [['fewer resources'], ['less memory'], ['script'], ['automat'], ['faster', 'expert'], ['powerful']] },
          ],
          modelAnswer:
            'A graphical user interface presents windows, icons, menus and a pointer, so the user can see what is available and click it. A command line interface shows only a prompt, and the user must type exact commands. The advantage of a GUI is that it is far easier for a beginner, because nothing has to be memorised and the options are visible. The advantage of a CLI is that it uses very few system resources, so it runs on low powered machines and servers, and an experienced user can work faster and write scripts that automate repeated jobs, which a GUI cannot easily do.',
        },
        {
          kind: 'written',
          id: 'p1-3-12',
          marks: 5,
          stem: 'A company wants to protect against ransomware. Describe the measures it should put in place and explain why backups are the most important.',
          markScheme: [
            { text: 'Install and update anti malware software.', accept: [['anti malware'], ['antivirus'], ['anti virus']] },
            { text: 'Train staff so they do not open suspicious attachments or links.', accept: [['training'], ['staff'], ['educat'], ['awareness'], ['attachment']] },
            { text: 'Use user access levels so damage is limited to one account.', accept: [['access level'], ['permission'], ['privilege'], ['limit']] },
            { text: 'Keep regular backups stored separately from the network.', accept: [['backup'], ['back up']] },
            { text: 'Backups mean the files can be restored without paying the ransom.', accept: [['restore'], ['without paying'], ['no ransom'], ['recover']] },
          ],
          modelAnswer:
            'The company should install anti malware software and keep it updated so known ransomware is blocked before it runs, train staff so they do not open suspicious attachments or click links in unexpected emails, and set user access levels so that if one account is compromised the attacker can only reach that person files rather than the whole network. It should also patch software promptly, since ransomware often exploits known flaws. Backups are the most important measure because they are the only one that works after the attack has already succeeded. If recent backups are held separately from the network, the company can wipe the infected machines and restore its data, so it never has to pay the ransom and loses only the work done since the last backup.',
        },
        {
          kind: 'written',
          id: 'p1-3-13',
          marks: 4,
          stem: 'Explain why a character set is needed, and state one difference between ASCII and Unicode.',
          markScheme: [
            { text: 'A character set is an agreed table pairing each character with a binary code.', accept: [['agreed'], ['table'], ['binary code'], ['each character']] },
            { text: 'Without it, different computers would display different symbols for the same code.', accept: [['different'], ['wrong symbol'], ['same code'], ['consistent'], ['understand']] },
            { text: 'ASCII uses 7 bits for 128 characters, covering English only.', accept: [['7 bit'], ['128'], ['english']] },
            { text: 'Unicode uses more bits and covers over 140000 characters from every language, but files are larger.', accept: [['unicode'], ['more bits'], ['every language'], ['larger'], ['emoji']] },
          ],
          modelAnswer:
            'A character set is an agreed table that pairs every character with a unique binary code. It is needed so that when one computer sends the code 01000001 another computer knows it means a capital A, rather than displaying some other symbol. ASCII uses 7 bits and can therefore represent 128 characters, which is enough for English letters, digits and punctuation but nothing else. Unicode uses more bits per character and covers over 140000 characters from every written language plus emoji, which makes it far more useful internationally but means files take up more space.',
        },
        {
          kind: 'written',
          id: 'p1-3-14',
          marks: 5,
          context: 'A photographer stores 2000 photographs, each 6 MB, and needs to work on them at home and take them to clients.',
          stem: 'Recommend a suitable storage device and justify your choice using at least three characteristics.',
          markScheme: [
            { text: 'Calculates or states the capacity needed, about 12 GB.', accept: [['12 gb'], ['12000'], ['2000', '6'], ['capacity needed']] },
            { text: 'Recommends solid state storage such as an external SSD or high capacity flash drive.', accept: [['ssd'], ['solid state'], ['flash'], ['usb']] },
            { text: 'Justifies on portability, since it must travel to clients.', accept: [['portab'], ['carry'], ['small'], ['travel']] },
            { text: 'Justifies on durability, since there are no moving parts to damage.', accept: [['durab'], ['no moving parts'], ['robust'], ['dropped']] },
            { text: 'Justifies on speed, since large image files open and copy quickly.', accept: [['fast'], ['speed'], ['quick']] },
          ],
          modelAnswer:
            '2000 photographs at 6 MB each need about 12 000 MB, which is roughly 12 GB, so a 32 GB or larger device gives comfortable room to grow. An external solid state drive would be the best choice. It is small and light so it is genuinely portable for visits to clients, unlike an internal drive. It has no moving parts, so it is far more durable than a magnetic external hard drive being carried in a bag every day. It is also much faster to read and write, which matters when opening and copying files of this size. The one drawback is that solid state costs more per gigabyte than a magnetic drive, but at only 12 GB of data that difference is small.',
        },
        {
          kind: 'written',
          id: 'p1-3-15',
          marks: 4,
          stem: 'Compare open source software with proprietary software.',
          markScheme: [
            { text: 'Open source publishes its source code so anyone may view and modify it.', accept: [['source code'], ['modif'], ['view'], ['change']] },
            { text: 'Open source is usually free of charge.', accept: [['free'], ['no cost'], ['cheaper']] },
            { text: 'Proprietary keeps the source code secret and is usually paid for.', accept: [['secret'], ['closed'], ['paid'], ['licence fee'], ['not available']] },
            { text: 'Proprietary usually offers official support and tested updates, while open source relies on the community.', accept: [['support'], ['community'], ['update'], ['helpline'], ['no guarantee']] },
          ],
          modelAnswer:
            'Open source software publishes its source code, so anyone can read it, change it and share their version, and it is normally free of charge. That makes it attractive to organisations with tight budgets and to developers who want to adapt it to their own needs. Proprietary software keeps its source code secret, is usually paid for through a licence, and may not legally be modified. In return, proprietary software normally comes with official support and professionally tested updates, whereas open source depends on community forums with no guarantee that anyone will help.',
        },
      ],
    },
  ],
};
