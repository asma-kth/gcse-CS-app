import type { ExamPaper } from '../../types';

export const paper1_2: ExamPaper = {
  id: 'p1-2',
  component: 'Paper 1',
  number: 2,
  title: 'Paper 1 Mock B: Networks and Security',
  minutes: 45,
  totalMarks: 48,
  blurb: 'Networks, connections, protocols, layers and network security.',
  sections: [
    {
      name: 'Section A: quick recall',
      items: [
        { kind: 'mcq', id: 'p1-2-1', marks: 1, stem: 'Which device forwards data between different networks using IP addresses?', options: ['Switch', 'Router', 'NIC', 'Wireless access point'], answer: 1, why: 'A router joins networks together and routes packets by IP address.' },
        { kind: 'mcq', id: 'p1-2-2', marks: 1, stem: 'What is the purpose of DNS?', options: ['To encrypt web traffic', 'To translate domain names into IP addresses', 'To split data into packets', 'To block malware'], answer: 1, why: 'DNS is the naming system that converts a readable name into the IP address needed for routing.' },
        { kind: 'mcq', id: 'p1-2-3', marks: 1, stem: 'Which protocol makes sure every packet arrives and is reassembled in order?', options: ['IP', 'TCP', 'HTTP', 'SMTP'], answer: 1, why: 'TCP numbers packets, checks delivery and requests missing packets again.' },
        { kind: 'mcq', id: 'p1-2-4', marks: 1, stem: 'A denial of service attack aims to:', options: ['Steal customer data', 'Make a service unavailable', 'Install spyware', 'Guess a password'], answer: 1, why: 'A DoS attack floods a server so genuine users cannot get through. Nothing is stolen.' },
        { kind: 'mcq', id: 'p1-2-5', marks: 1, stem: 'Which layer of the four layer model adds IP addresses to packets?', options: ['Application', 'Transport', 'Internet', 'Link'], answer: 2, why: 'The internet layer uses the IP protocol to address and route packets.' },
        { kind: 'mcq', id: 'p1-2-6', marks: 1, stem: 'In a star topology, what happens when one cable fails?', options: ['The whole network stops', 'Only the device on that cable is affected', 'Data takes another route automatically', 'The router restarts'], answer: 1, why: 'Each device has its own cable to the switch, so a break isolates only that device.' },
        { kind: 'mcq', id: 'p1-2-7', marks: 1, stem: 'Which attack targets the person rather than the technology?', options: ['SQL injection', 'Brute force', 'Social engineering', 'Data interception'], answer: 2, why: 'Social engineering manipulates people into giving away information or access.' },
        { kind: 'mcq', id: 'p1-2-8', marks: 1, stem: 'What does a firewall do?', options: ['Removes viruses from files', 'Inspects traffic and blocks anything that breaks its rules', 'Encrypts stored data', 'Backs up files automatically'], answer: 1, why: 'A firewall filters network traffic entering and leaving according to a set of rules.' },
      ],
    },
    {
      name: 'Section B: written answers',
      items: [
        {
          kind: 'written',
          id: 'p1-2-9',
          marks: 6,
          context: 'A company with 40 staff in one building is setting up a network. It stores confidential client records.',
          stem: 'Recommend whether the company should use a client server or a peer to peer network, and justify your recommendation.',
          markScheme: [
            { text: 'A clear recommendation of client server is made.', accept: [['client server'], ['client-server'], ['recommend', 'server']] },
            { text: 'A server allows files and user accounts to be managed centrally.', accept: [['central'], ['centrally'], ['one place'], ['server manages']] },
            { text: 'Backups and security updates can be applied in one place.', accept: [['backup'], ['back up'], ['update'], ['security', 'central']] },
            { text: 'Access levels can be set so only authorised staff see confidential records.', accept: [['access level'], ['permission'], ['authorised'], ['rights']] },
            { text: 'Acknowledges that peer to peer is cheaper because no server is needed.', accept: [['cheap'], ['no server'], ['less expensive'], ['cost']] },
            { text: 'Acknowledges the single point of failure if the server goes down.', accept: [['single point of failure'], ['server fails'], ['goes down'], ['whole network stops']] },
          ],
          modelAnswer:
            'The company should use a client server network. With 40 staff and confidential client records, files and user accounts need to be managed centrally rather than scattered across individual machines. A server lets an administrator set access levels so that only authorised staff can open the client records, and it means backups and security updates are applied once, centrally, rather than depending on 40 people remembering. Peer to peer would be cheaper because no server hardware or specialist administrator is needed, and it has no single point of failure, whereas if the server breaks the whole client server network stops working. However, for confidential data the central control and reliable backups clearly outweigh the extra cost.',
        },
        {
          kind: 'written',
          id: 'p1-2-10',
          marks: 5,
          stem: 'Describe what happens when a user types a website address into their browser, from the request being made to the page appearing.',
          markScheme: [
            { text: 'The browser sends the domain name to a DNS server.', accept: [['dns'], ['domain name'], ['name server']] },
            { text: 'DNS returns the matching IP address, asking another DNS server if needed.', accept: [['ip address'], ['returns'], ['another dns'], ['looks up']] },
            { text: 'The browser sends an HTTP or HTTPS request to the web server at that IP address.', accept: [['http'], ['request'], ['web server']] },
            { text: 'The data is split into packets, which may take different routes.', accept: [['packet'], ['split'], ['routes']] },
            { text: 'Packets are reassembled in order and the browser renders the page.', accept: [['reassemb'], ['order'], ['render'], ['display'], ['puts them back']] },
          ],
          modelAnswer:
            'The browser first sends the domain name to a DNS server, which looks it up and returns the matching IP address, passing the request to another DNS server higher up if it does not hold the record. The browser then sends an HTTP or HTTPS request to the web server at that IP address. The reply is split by TCP into numbered packets, each given source and destination IP addresses by the internet layer, and those packets may travel by different routes across the internet. When they arrive, TCP puts them back into the correct order and asks for any missing packet to be sent again, and the browser then renders the HTML into the page you see.',
        },
        {
          kind: 'written',
          id: 'p1-2-11',
          marks: 4,
          stem: 'Explain why networks are organised into layers.',
          markScheme: [
            { text: 'Each layer has one specific job.', accept: [['one job'], ['specific'], ['own task'], ['single']] },
            { text: 'A layer can be changed or improved without affecting the others.', accept: [['without affecting'], ['changed'], ['independent'], ['swap']] },
            { text: 'It makes faults easier to find because each layer can be tested separately.', accept: [['fault'], ['test'], ['find'], ['troubleshoot'], ['diagnose']] },
            { text: 'Different manufacturers can build compatible equipment.', accept: [['manufacturer'], ['compatib'], ['different companies'], ['standard']] },
          ],
          modelAnswer:
            'Layering means each layer is given one specific job, so the whole system is far easier to design and understand than one enormous set of rules. Because each layer only talks to the layers directly above and below it through an agreed interface, one layer can be changed or improved without breaking the others, so swapping a wired connection for Wi Fi at the link layer does not require any change to HTTP at the application layer. It also makes faults much easier to find, because each layer can be tested on its own, and it means equipment from different manufacturers works together as long as everyone follows the same standards.',
        },
        {
          kind: 'written',
          id: 'p1-2-12',
          marks: 6,
          context: 'A secondary school has had several incidents: a student guessed a teacher password, a member of staff clicked a link in a fake email, and a laptop was stolen from an office.',
          stem: 'For each incident, name the threat and describe one prevention method the school should use.',
          markScheme: [
            { text: 'Identifies the password guessing as a brute force or unauthorised access attempt.', accept: [['brute force'], ['unauthorised access'], ['password attack']] },
            { text: 'Prevention: strong password policy, limited attempts or two factor authentication.', accept: [['strong password'], ['two factor'], ['2fa'], ['limit', 'attempt'], ['lockout']] },
            { text: 'Identifies the fake email as phishing or social engineering.', accept: [['phishing'], ['social engineering']] },
            { text: 'Prevention: staff training and awareness, or email filtering.', accept: [['training'], ['awareness'], ['educat'], ['filter'], ['spam']] },
            { text: 'Identifies the stolen laptop as a physical security failure and risk of data theft.', accept: [['physical'], ['theft'], ['stolen']] },
            { text: 'Prevention: locks, CCTV, or full disk encryption so the data cannot be read.', accept: [['lock'], ['cctv'], ['encrypt'], ['alarm'], ['secure room']] },
          ],
          modelAnswer:
            'The password guessing is a brute force attack, or at least unauthorised access. The school should enforce strong passwords that mix upper case, lower case, numbers and symbols, lock an account after a small number of failed attempts, and ideally add two factor authentication so a password alone is not enough. The fake email is phishing, a form of social engineering. The main defence is staff training so people recognise the warning signs, such as urgency, a generic greeting and a sender address that does not quite match, supported by email filtering that blocks known phishing domains. The stolen laptop is a physical security failure that risks data theft. The school should keep offices locked, use CCTV and cable locks, and encrypt the hard drive of every laptop so that even if a device is taken the data on it cannot be read.',
        },
        {
          kind: 'written',
          id: 'p1-2-13',
          marks: 4,
          stem: 'Explain two factors that could slow down a school network at the start of a lesson when 30 students log in at once.',
          markScheme: [
            { text: 'Bandwidth is shared, so more users means less capacity each.', accept: [['bandwidth'], ['shared'], ['capacity']] },
            { text: 'A high number of simultaneous requests overloads the server.', accept: [['server'], ['overload'], ['many requests'], ['at once'], ['simultaneous']] },
            { text: 'Wireless signal weakens with distance, walls or interference.', accept: [['wireless'], ['wi fi'], ['interference'], ['walls'], ['distance'], ['signal']] },
            { text: 'Copper cabling has lower bandwidth than fibre, or old hardware limits speed.', accept: [['copper'], ['fibre'], ['cable'], ['old hardware'], ['switch']] },
          ],
          modelAnswer:
            'Firstly, bandwidth is shared between everyone on the network, so when 30 students all request their profile and files at the same moment each one gets a much smaller share of the capacity and everything takes longer. Secondly, the server itself has to handle 30 authentication requests almost simultaneously, and if it does not have enough processing power or RAM a queue builds up. If the students are on Wi Fi the problem is worse still, because the wireless signal is shared, weakens with distance and thick walls, and suffers interference from other devices, so the effective speed each student sees is far lower than the headline figure.',
        },
        {
          kind: 'written',
          id: 'p1-2-14',
          marks: 5,
          stem: 'Describe how encryption protects data sent over a wireless network, and explain what encryption does not protect against.',
          markScheme: [
            { text: 'Data is scrambled into cipher text before being sent.', accept: [['scramble'], ['cipher'], ['unreadable'], ['encoded']] },
            { text: 'A key is required to decrypt it back into plain text.', accept: [['key'], ['decrypt'], ['unlock']] },
            { text: 'Wireless signals can be intercepted by anyone in range.', accept: [['intercept'], ['in range'], ['nearby'], ['sniff'], ['capture']] },
            { text: 'An interceptor without the key sees meaningless data.', accept: [['meaningless'], ['nonsense'], ['cannot read'], ['useless']] },
            { text: 'Encryption does not stop interception itself, nor does it stop malware, phishing or a weak password being given away.', accept: [['does not stop'], ['still intercept'], ['phishing'], ['malware'], ['social engineering'], ['does not prevent']] },
          ],
          modelAnswer:
            'Before data leaves the device it is encrypted, which means it is scrambled using a key so that it becomes cipher text rather than readable plain text. This matters on a wireless network because the signal travels through walls and beyond the building, so anyone in range with packet sniffing software can capture it. Without the correct key that captured data is meaningless, so the attacker gains nothing useful. What encryption does not do is prevent the interception itself, and it offers no protection at all against threats that bypass it, such as malware already running on the device, a phishing email that tricks the user into typing their password into a fake site, or a weak password that is simply guessed.',
        },
        {
          kind: 'written',
          id: 'p1-2-15',
          marks: 4,
          stem: 'Compare a star topology with a mesh topology.',
          markScheme: [
            { text: 'Star: every device has its own cable to a central switch.', accept: [['central'], ['switch'], ['own cable'], ['one cable each']] },
            { text: 'Star: a single cable fault affects only one device, but switch failure stops everything.', accept: [['one device'], ['switch fail'], ['single point']] },
            { text: 'Mesh: devices connect to many others so there are multiple routes.', accept: [['multiple routes'], ['many'], ['several paths'], ['alternative']] },
            { text: 'Mesh: no single point of failure but far more cabling and cost in a wired mesh.', accept: [['no single point'], ['expensive'], ['more cable'], ['cost'], ['cabling']] },
          ],
          modelAnswer:
            'In a star topology every device has its own cable running to a central switch. That makes it cheap to install, easy to add new devices, and simple to diagnose faults, because a broken cable affects only the one device on it. The weakness is that the switch is a single point of failure, so if it fails the entire network stops. In a mesh topology devices connect to many other devices, so data has several possible routes to its destination. That removes the single point of failure and handles heavy traffic well, but a full wired mesh needs an enormous amount of cabling, which makes it expensive to install and maintain. Wireless mesh avoids the cabling problem, which is why whole home Wi Fi systems use it.',
        },
        {
          kind: 'written',
          id: 'p1-2-16',
          marks: 6,
          stem: 'Describe the purpose of each of the four layers in the TCP IP model, giving one protocol found at each of the top three layers.',
          markScheme: [
            { text: 'Application layer provides the rules for the specific task, for example HTTP, HTTPS, SMTP, FTP or IMAP.', accept: [['application'], ['http'], ['smtp'], ['ftp'], ['imap']] },
            { text: 'Transport layer splits data into packets and reassembles them, for example TCP or UDP.', accept: [['transport'], ['tcp'], ['udp'], ['packet']] },
            { text: 'Internet layer adds IP addresses and routes packets, using IP.', accept: [['internet layer'], ['ip'], ['route'], ['address']] },
            { text: 'Link layer is the physical hardware, cables, Wi Fi and MAC addresses.', accept: [['link'], ['physical'], ['cable'], ['mac'], ['wifi'], ['wi fi']] },
            { text: 'Data travels down the layers when sending and up when receiving.', accept: [['down'], ['up'], ['sending'], ['receiving'], ['encapsulat']] },
            { text: 'Each layer adds or removes its own information.', accept: [['adds'], ['removes'], ['wraps'], ['header'], ['strips']] },
          ],
          modelAnswer:
            'The application layer is where the software and the user work, and it sets the rules for the particular job being done, using protocols such as HTTP and HTTPS for web pages, SMTP for sending email and FTP for file transfer. The transport layer, using TCP or UDP, splits the data into numbered packets, checks they all arrive and puts them back in order at the other end. The internet layer, using IP, adds the source and destination IP addresses to each packet and works out the route across the network. The link layer is the physical hardware itself, the cables, Wi Fi radios and network cards with their MAC addresses, which turn the packet into signals. When sending, data passes down through the layers with each one adding its own information, and when receiving it passes back up with each layer removing what its partner added.',
        },
      ],
    },
  ],
};
