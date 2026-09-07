import type { Topic } from '../../types';

export const t1_4: Topic = {
  id: 't1-4',
  code: '1.4',
  title: 'Network Security',
  blurb: 'The seven threats, how attacks work, and the methods used to prevent them.',
  paper: 'Paper 1',
  icon: '🛡️',
  lessons: [
    {
      id: 't1-4-l1',
      title: 'Threats to a network',
      minutes: 11,
      blocks: [
        { t: 'p', text: 'The specification names seven forms of attack. You need to be able to describe each one and, just as importantly, explain what an organisation can do about it.' },
        { t: 'diagram', id: 'threats-list' },
        { t: 'h', text: 'Malware' },
        { t: 'p', text: 'Malware means malicious software. It is installed without the user knowing and does damage. Viruses attach themselves to files and spread when those files are opened. Worms spread on their own across a network. Trojans pretend to be something useful. Ransomware encrypts your files and demands payment. Spyware records what you do, including your keystrokes.' },
        {
          t: 'real',
          title: 'Real life scenario: a hospital',
          body: [
            'A staff member opens an email attachment that claims to be a rota. It is ransomware. Within minutes patient records across the network are encrypted and a payment demand appears.',
            'Appointments have to be cancelled and staff work on paper. The damage is not just money, it is real harm to real people.',
            'The defences that would have helped: staff training, anti malware software, restricted user permissions and up to date backups.',
          ],
        },
        { t: 'h', text: 'Social engineering' },
        { t: 'p', text: 'Social engineering attacks the person rather than the computer. The attacker manipulates someone into giving away information or access. It works because people want to be helpful and because urgency stops us thinking clearly.' },
        { t: 'h', text: 'Phishing' },
        { t: 'p', text: 'Phishing is a specific type of social engineering. The attacker sends a message that appears to come from a trusted organisation, such as a bank or a school, asking the victim to click a link and enter their details on a fake website.' },
        {
          t: 'example',
          title: 'How to spot a phishing email',
          body: [
            'The sender address does not quite match the real organisation, for example support@bankofnational-secure.com.',
            'It creates panic or urgency: "your account will be closed in 24 hours".',
            'It uses a generic greeting such as "Dear Customer" instead of your name.',
            'Spelling and grammar mistakes are common.',
            'The link text and the real destination do not match.',
          ],
        },
        { t: 'h', text: 'Brute force attacks' },
        { t: 'p', text: 'A brute force attack uses software to try huge numbers of password combinations until one works. A short password made of common words falls in seconds. A long password mixing upper case, lower case, numbers and symbols would take far longer than a lifetime.' },
        { t: 'h', text: 'Denial of service attacks' },
        { t: 'p', text: 'A denial of service attack floods a server with so many requests that it cannot respond to genuine users. No data is stolen. The damage is that the service becomes unavailable, which costs an online shop money every minute it is down. When thousands of infected computers do this at once it is called a distributed denial of service.' },
        { t: 'h', text: 'Data interception and theft' },
        { t: 'p', text: 'Data can be captured as it travels across a network using packet sniffing software. On unsecured public Wi Fi, anything sent without encryption can be read by someone else in the room.' },
        { t: 'h', text: 'SQL injection' },
        { t: 'p', text: 'SQL injection means typing database commands into a text box on a website. If the website passes that text straight into a database query, the attacker can read, change or delete data they should never see.' },
        { t: 'code', lang: 'sql', caption: 'What the attacker types into a login box', code: "Username:  admin\nPassword:  anything' OR '1'='1\n\nThe query the website builds becomes:\nSELECT * FROM Users WHERE Name = 'admin' AND Pass = 'anything' OR '1'='1'\n\nBecause '1'='1' is always true, the whole condition is true\nand the attacker is logged in without knowing the password." },
        {
          t: 'warn',
          body: [
            'The fix for SQL injection is input validation, so that unexpected characters are rejected or treated as plain text rather than as commands.',
          ],
        },
      ],
    },
    {
      id: 't1-4-l2',
      title: 'Preventing attacks',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'For every threat there is a defence. Exam questions almost always ask you to link one to the other, so learn them as pairs.' },
        {
          t: 'table',
          head: ['Prevention method', 'What it does', 'Stops or reduces'],
          rows: [
            ['Penetration testing', 'Experts are paid to attack your own system to find weaknesses before criminals do', 'All threats, by finding holes first'],
            ['Anti malware software', 'Scans files, removes known malware and blocks suspicious behaviour', 'Viruses, worms, trojans, spyware'],
            ['Firewalls', 'Inspects traffic entering and leaving the network and blocks anything that breaks the rules', 'Unauthorised access, some DoS traffic'],
            ['User access levels', 'Each user only gets access to what their role needs', 'Insider misuse, damage spreading'],
            ['Passwords', 'Strong, unique passwords, ideally with two factor authentication', 'Brute force, unauthorised access'],
            ['Encryption', 'Scrambles data so it is unreadable without the key', 'Data interception and theft'],
            ['Physical security', 'Locks, alarms, CCTV and secure server rooms', 'Theft of hardware and direct access'],
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: user access levels in a school',
          body: [
            'A student can read their own files and use the printers. A teacher can also see their class assessment data. A network manager can see everything and install software.',
            'This is not about trust. It limits the damage: if a student account is compromised, the attacker only gains what a student could do.',
          ],
        },
        { t: 'h', text: 'Encryption in a bit more detail' },
        { t: 'p', text: 'Encryption does not hide the fact that a message was sent. It scrambles the contents using a key so that anyone who intercepts it sees nonsense. Only someone with the correct key can turn it back into the original message.' },
        {
          t: 'example',
          title: 'A Caesar cipher, shift of 3',
          body: [
            'Plain text: MEET AT NOON',
            'Each letter moves 3 places forward in the alphabet.',
            'Cipher text: PHHW DW QRRQ',
            'The key is the number 3. This is far too weak for real use because there are only 25 possible keys, but it shows the principle.',
          ],
        },
        {
          t: 'tip',
          body: [
            'A strong exam answer on prevention always names the method, says what it does, and then says which threat it addresses. Three parts, three chances at a mark.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-4-q1',
      title: 'Quiz 1: Threats',
      questions: [
        { q: 'What is malware?', options: ['Hardware that has broken', 'Software written to cause harm or damage', 'A type of firewall', 'A strong password system'], answer: 1, why: 'Malware is malicious software, including viruses, worms, trojans, ransomware and spyware.' },
        { q: 'What is the aim of a denial of service attack?', options: ['To steal customer data', 'To make a service unavailable by flooding it with requests', 'To install a virus on every computer', 'To guess a password'], answer: 1, why: 'A DoS attack overwhelms a server so genuine users cannot get through. Nothing is stolen.' },
        { q: 'Which attack targets the person rather than the technology?', options: ['SQL injection', 'Brute force', 'Social engineering', 'Data interception'], answer: 2, why: 'Social engineering manipulates people into giving away information or access.' },
        { q: 'A message claims to be from your bank and asks you to click a link and confirm your password. This is:', options: ['A worm', 'Phishing', 'A trojan', 'A brute force attack'], answer: 1, why: 'Phishing uses a fake but convincing message to trick the victim into handing over details.' },
        { q: 'What does a brute force attack do?', options: ['Physically breaks into a building', 'Tries many password combinations until one works', 'Floods a server with traffic', 'Encrypts files for ransom'], answer: 1, why: 'Software automatically tries combinations until it finds the right password.' },
        { q: 'What is SQL injection?', options: ['Injecting a virus into a database file', 'Entering database commands into an input box to access data', 'Sending too many database queries', 'Encrypting a database'], answer: 1, why: 'The attacker types SQL into a text box and the site runs it as a command.' },
        { q: 'Which type of malware pretends to be a useful program?', options: ['Worm', 'Trojan', 'Ransomware', 'Spyware'], answer: 1, why: 'A trojan disguises itself as something legitimate so the user installs it willingly.' },
        { q: 'What does packet sniffing allow an attacker to do?', options: ['Speed up a network', 'Read data as it travels across a network', 'Delete files from a server', 'Change a MAC address'], answer: 1, why: 'Packet sniffing captures data in transit, which is why encryption matters.' },
        { q: 'What is ransomware?', options: ['Software that encrypts files and demands payment', 'Software that speeds up your computer', 'A type of firewall rule', 'A password manager'], answer: 0, why: 'Ransomware locks the victim out of their own data and demands money to unlock it.' },
        { q: 'Which of these makes a brute force attack much harder?', options: ['A short password of common words', 'A long password using letters, numbers and symbols', 'Using the same password everywhere', 'Writing the password down'], answer: 1, why: 'Length and variety hugely increase the number of combinations that must be tried.' },
      ],
    },
    {
      id: 't1-4-q2',
      title: 'Quiz 2: Prevention',
      questions: [
        { q: 'What is the purpose of a firewall?', options: ['To scan files for viruses', 'To inspect traffic entering and leaving a network and block anything against the rules', 'To encrypt stored data', 'To back up files automatically'], answer: 1, why: 'A firewall filters network traffic based on a set of rules.' },
        { q: 'What is penetration testing?', options: ['Testing how fast a network is', 'Deliberately attacking your own system to find weaknesses', 'Checking cables are plugged in', 'Testing new software with users'], answer: 1, why: 'Penetration testing finds the holes before criminals do.' },
        { q: 'Why are user access levels used?', options: ['To make logging in faster', 'So users can only reach the data their role requires', 'To increase network speed', 'To reduce electricity use'], answer: 1, why: 'Limiting access limits the damage a compromised or careless account can do.' },
        { q: 'What does encryption do?', options: ['Stops data being intercepted', 'Makes intercepted data unreadable without the key', 'Deletes data after sending', 'Compresses data to make it smaller'], answer: 1, why: 'Encryption does not prevent interception, it makes the intercepted data meaningless.' },
        { q: 'Which prevention method best addresses staff clicking phishing links?', options: ['A bigger hard drive', 'Staff training and awareness', 'Faster broadband', 'More RAM'], answer: 1, why: 'Phishing attacks people, so the defence must be educating people.' },
        { q: 'Which is an example of physical security?', options: ['A strong password', 'A locked server room with CCTV', 'Anti malware software', 'An encrypted file'], answer: 1, why: 'Physical security protects the hardware itself from theft or direct access.' },
        { q: 'Anti malware software mainly protects against:', options: ['Denial of service attacks', 'Viruses, worms and spyware', 'Weak passwords', 'Physical theft'], answer: 1, why: 'Anti malware detects and removes malicious software.' },
        { q: 'What is two factor authentication?', options: ['Using two passwords', 'Proving identity with something you know and something you have', 'Logging in twice', 'Using two different browsers'], answer: 1, why: 'It combines two different types of proof, such as a password plus a code sent to a phone.' },
        { q: 'How does input validation help prevent SQL injection?', options: ['It encrypts the database', 'It rejects or neutralises unexpected characters before they reach the database', 'It makes the website load faster', 'It blocks all user input'], answer: 1, why: 'Validation stops user text being treated as database commands.' },
        { q: 'A company backs up its data daily to a separate location. Which threat does this best reduce the impact of?', options: ['Phishing', 'Ransomware', 'Brute force', 'Packet sniffing'], answer: 1, why: 'With a recent backup the company can restore its files instead of paying a ransom.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-4-e1',
      context: 'An online shop has been attacked. Customers found the website unavailable for six hours, but no customer data was stolen.',
      stem: 'Identify the most likely type of attack and explain how it works.',
      marks: 4,
      markScheme: [
        { text: 'Identifies a denial of service (or distributed denial of service) attack.', accept: [['denial of service'], ['dos'], ['ddos']] },
        { text: 'The server is flooded with a very large number of requests.', accept: [['flood'], ['overload'], ['too many requests'], ['huge number'], ['overwhelm']] },
        { text: 'The server cannot cope so genuine users cannot access the site.', accept: [['genuine users'], ['legitimate'], ['real users'], ['cannot access'], ['unavailable']] },
        { text: 'No data is stolen, the aim is to disrupt the service.', accept: [['no data'], ['not stolen'], ['disrupt'], ['availability']] },
      ],
      modelAnswer:
        'This is most likely a denial of service attack, and possibly a distributed denial of service if many computers were involved. The attacker sends an enormous number of requests to the shop web server, far more than it was designed to handle. The server spends all of its processing power and bandwidth trying to answer those fake requests, so genuine customers cannot get a response and the site appears to be down. No data is taken, because the aim of the attack is simply to stop the service being available, which costs the shop sales for every hour it lasts.',
    },
    {
      id: 't1-4-e2',
      stem: 'Describe what is meant by social engineering and give one example.',
      marks: 3,
      markScheme: [
        { text: 'Manipulating or tricking people rather than attacking the technology.', accept: [['trick'], ['manipulat'], ['people'], ['human']] },
        { text: 'The aim is to obtain confidential information or access.', accept: [['information'], ['password'], ['access'], ['details'], ['confidential']] },
        { text: 'A valid example is given, such as phishing, blagging, shouldering or pharming.', accept: [['phishing'], ['blagging'], ['shoulder'], ['pretexting'], ['pretend', 'it support'], ['pharming']] },
      ],
      modelAnswer:
        'Social engineering means tricking or manipulating a person into giving away confidential information or access, rather than attacking the computer system directly. It works because people naturally want to be helpful and because a sense of urgency stops them checking carefully. An example is phishing, where an attacker sends an email that looks like it comes from a bank, telling the victim their account will be closed unless they click a link and enter their password on a fake website.',
    },
    {
      id: 't1-4-e3',
      stem: 'A school wants to improve its network security. Describe three different prevention methods it could use and explain what each one protects against.',
      marks: 6,
      markScheme: [
        { text: 'Firewall: inspects incoming and outgoing traffic and blocks anything against the rules.', accept: [['firewall']] },
        { text: 'Anti malware: scans for and removes viruses and other malicious software.', accept: [['anti malware'], ['antivirus'], ['anti virus'], ['antimalware']] },
        { text: 'User access levels: students, staff and administrators get different permissions.', accept: [['access level'], ['permission'], ['user rights'], ['privilege']] },
        { text: 'Strong passwords or two factor authentication reduce brute force and unauthorised access.', accept: [['password'], ['two factor'], ['2fa'], ['authentication']] },
        { text: 'Encryption makes intercepted data unreadable.', accept: [['encrypt']] },
        { text: 'Physical security or penetration testing is described correctly.', accept: [['physical security'], ['locked'], ['cctv'], ['penetration test'], ['pen test']] },
      ],
      modelAnswer:
        'The school could install a firewall, which inspects all the traffic entering and leaving the network and blocks anything that breaks its rules, preventing unauthorised access from outside. It could install anti malware software, which scans files and removes viruses, worms, trojans and spyware before they can spread across the network. It should also set user access levels, so that students can only reach their own work while teachers and network managers have wider permissions, which limits the damage if a student account is compromised. In addition, requiring strong passwords with two factor authentication would make brute force attacks impractical.',
    },
    {
      id: 't1-4-e4',
      stem: 'Explain how encryption protects data that is sent over a wireless network.',
      marks: 3,
      markScheme: [
        { text: 'Data is scrambled or converted into cipher text before it is sent.', accept: [['scramble'], ['cipher'], ['unreadable'], ['converted']] },
        { text: 'A key is needed to decrypt it back into the original message.', accept: [['key'], ['decrypt'], ['unlock']] },
        { text: 'If it is intercepted, the attacker sees meaningless data.', accept: [['intercept'], ['meaningless'], ['nonsense'], ['cannot read'], ['useless']] },
        { text: 'Encryption does not stop interception, only understanding.', accept: [['does not stop'], ['still intercept'], ['does not prevent']] },
      ],
      modelAnswer:
        'Before the data leaves the device it is encrypted, which means it is scrambled using a key so that it becomes cipher text rather than readable plain text. Wireless signals travel through walls and beyond the building, so anyone nearby can capture them with packet sniffing software. However, without the correct key that captured data is meaningless, so the attacker gains nothing. It is important to note that encryption does not stop the data being intercepted, it only stops the interceptor being able to understand it.',
    },
    {
      id: 't1-4-e5',
      context: 'A website login form passes whatever the user types straight into a database query.',
      stem: 'Explain the risk this creates and describe how it can be prevented.',
      marks: 4,
      markScheme: [
        { text: 'Identifies SQL injection as the risk.', accept: [['sql injection'], ['sql']] },
        { text: 'The attacker types database commands into the input box.', accept: [['commands'], ['code'], ['query'], ['statement']] },
        { text: 'This could let them view, change or delete data they should not access, or log in without a password.', accept: [['view'], ['delete'], ['change'], ['steal'], ['bypass'], ['log in without']] },
        { text: 'Prevention: input validation or sanitising input so it is treated as text, not commands.', accept: [['validation'], ['sanitis'], ['sanitiz'], ['parameter'], ['reject', 'characters'], ['escape']] },
      ],
      modelAnswer:
        'This creates a risk of SQL injection. Because whatever the user types is passed straight into the database query, an attacker can type SQL commands into the username or password box instead of normal text. For example, entering a condition that is always true can make the query return every record, letting the attacker log in without a password or view, change and delete data they should never be able to reach. It is prevented by input validation, where the program checks the input against expected rules and rejects or neutralises characters such as quotation marks, so that anything typed is treated as ordinary text rather than as a database command.',
    },
  ],
};
