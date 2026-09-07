import type { Topic } from '../../types';

export const t1_3: Topic = {
  id: 't1-3',
  code: '1.3',
  title: 'Networks, Connections and Protocols',
  blurb: 'LANs and WANs, hardware, the internet, DNS, the cloud, wired and wireless, topologies, protocols and layers.',
  paper: 'Paper 1',
  icon: '🌐',
  lessons: [
    {
      id: 't1-3-l1',
      title: 'Types of network and what they need',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'A network is two or more devices connected together so they can share data and resources. If you have ever sent a document to a school printer, you have used one.' },
        { t: 'diagram', id: 'lan-wan' },
        {
          t: 'key',
          terms: [
            { term: 'LAN (local area network)', def: 'Covers a small area such as one school, office or home. The organisation owns and maintains the cables and hardware itself.' },
            { term: 'WAN (wide area network)', def: 'Covers a large geographical area, joining sites in different towns or countries. The connections are usually hired from a telecommunications company.' },
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: a supermarket chain',
          body: [
            'Inside one store, the tills, the stock computers and the office printers are joined by a LAN owned by that store.',
            'Every store then connects to head office over a WAN, using lines rented from a telecoms provider, so sales figures arrive centrally each night.',
            'The internet is simply the largest WAN in the world.',
          ],
        },
        { t: 'h', text: 'Hardware needed for a network' },
        { t: 'diagram', id: 'network-hardware' },
        {
          t: 'ul',
          items: [
            'A network interface card (NIC) lets a device connect to a network. It contains the MAC address.',
            'A switch receives data and sends it only to the device it is addressed to, using MAC addresses.',
            'A router joins different networks together and forwards data between them using IP addresses. Your home router connects your LAN to the internet.',
            'A wireless access point (WAP) allows devices to join without cables.',
            'Transmission media are the cables or radio waves that carry the signals.',
          ],
        },
        { t: 'h', text: 'Client server and peer to peer' },
        { t: 'diagram', id: 'client-server-p2p' },
        {
          t: 'table',
          head: ['', 'Client server', 'Peer to peer'],
          rows: [
            ['Control', 'Central server manages files and users', 'No central control, all devices equal'],
            ['Backups', 'Done centrally, easy to manage', 'Each device must back itself up'],
            ['Cost', 'Server hardware is expensive', 'Cheap, uses existing devices'],
            ['If one device fails', 'Server failure stops everything', 'Only that device is affected'],
            ['Best for', 'Schools, businesses', 'Small home networks, file sharing'],
          ],
        },
        { t: 'h', text: 'Factors that affect network performance' },
        {
          t: 'ul',
          items: [
            'Bandwidth: how much data can travel per second. Sharing it between many users slows everyone down.',
            'Number of users and devices all competing for that bandwidth.',
            'Type of transmission media: fibre optic is faster and more reliable than copper.',
            'Interference, distance from the wireless access point, and thick walls all weaken wireless signals.',
            'Latency: the delay before data starts to move, which matters hugely for online gaming and video calls.',
          ],
        },
      ],
    },
    {
      id: 't1-3-l2',
      title: 'The internet, DNS, hosting and the cloud',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'The internet is a worldwide network of interconnected networks. The world wide web is one service that runs on it, made of web pages linked together. They are not the same thing.' },
        { t: 'h', text: 'The Domain Name System' },
        { t: 'p', text: 'Humans remember names like bbc.co.uk but computers route data using IP addresses like 212.58.244.22. DNS is the system that translates one into the other.' },
        { t: 'diagram', id: 'dns-lookup' },
        {
          t: 'ol',
          items: [
            'You type a domain name into the browser.',
            'The browser asks a DNS server for the matching IP address.',
            'If that server does not know, it passes the request to another DNS server higher up.',
            'The IP address is sent back to your browser.',
            'The browser sends its request straight to the web server at that IP address.',
            'The web server sends the page back and your browser displays it.',
          ],
        },
        { t: 'h', text: 'Hosting and the cloud' },
        {
          t: 'key',
          terms: [
            { term: 'Hosting', def: 'Storing files, usually a website, on a powerful server owned by a company so they are available to others over the internet all day and night.' },
            { term: 'The cloud', def: 'Storage and software provided over the internet on somebody else system, rather than on your own device.' },
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: coursework in the cloud',
          body: [
            'You start an essay on a school computer, carry on at home on a tablet and finish it on your phone on the bus. Nothing was ever copied onto a memory stick.',
            'That works because the file lives on a server in a data centre and is downloaded and uploaded automatically whenever you open it.',
            'The advantages are access anywhere, automatic backup and easy sharing. The disadvantages are that you need an internet connection, you pay for the service over time, and you are trusting another company with your data.',
          ],
        },
        {
          t: 'table',
          head: ['Cloud advantages', 'Cloud disadvantages'],
          rows: [
            ['Access files from any device anywhere', 'Needs a reliable internet connection'],
            ['Backups happen automatically', 'Ongoing subscription cost'],
            ['Storage can be increased instantly', 'Security and privacy depend on the provider'],
            ['No need to buy and maintain your own servers', 'If the provider has an outage you lose access'],
          ],
        },
      ],
    },
    {
      id: 't1-3-l3',
      title: 'Wired, wireless and topologies',
      minutes: 8,
      blocks: [
        {
          t: 'table',
          head: ['', 'Wired (Ethernet)', 'Wireless (Wi Fi)'],
          rows: [
            ['Speed', 'Usually faster and more consistent', 'Slower, varies with signal'],
            ['Reliability', 'Very reliable, no interference', 'Affected by walls, distance and other devices'],
            ['Security', 'Harder to intercept, needs physical access', 'Signal travels through walls so must be encrypted'],
            ['Convenience', 'Devices are tied to a cable', 'Move freely anywhere in range'],
            ['Cost', 'Cable installation costs money and time', 'Cheap once the access point exists'],
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: a school ICT room',
          body: [
            'The desktop computers are wired because they never move, need consistent speed for large file transfers and benefit from the extra security.',
            'Student tablets use Wi Fi because they are carried between rooms and running 30 cables would be impossible.',
            'Good exam answers explain the choice like this, rather than just saying wired is faster.',
          ],
        },
        { t: 'h', text: 'Network topologies' },
        { t: 'diagram', id: 'topologies' },
        { t: 'h', text: 'Star topology' },
        {
          t: 'ul',
          items: [
            'Every device has its own cable to a central switch.',
            'Advantage: if one cable fails only that one device is affected.',
            'Advantage: performance stays good because devices do not share one cable.',
            'Advantage: easy to add a new device without disturbing the others.',
            'Disadvantage: needs a lot of cable, and if the central switch fails the whole network stops.',
          ],
        },
        { t: 'h', text: 'Mesh topology' },
        {
          t: 'ul',
          items: [
            'Devices connect to many other devices, sometimes to every other device in a full mesh.',
            'Advantage: there is no single point of failure, because data can take another route.',
            'Advantage: it handles heavy traffic well because there are many paths.',
            'Disadvantage: a full mesh needs an enormous amount of cable, so it is expensive to install and maintain.',
            'Wireless mesh is now common, for example whole home Wi Fi systems, because no cabling is needed.',
          ],
        },
      ],
    },
    {
      id: 't1-3-l4',
      title: 'Protocols and layers',
      minutes: 10,
      blocks: [
        { t: 'p', text: 'A protocol is a set of rules for how data is sent and received. Both devices must follow the same rules or the message is meaningless.' },
        {
          t: 'real',
          title: 'Real life scenario: a phone call',
          body: [
            'When you answer a phone, one person says hello, then the other replies, and only one speaks at a time. Nobody wrote that down, but everyone follows it.',
            'Computers need those rules written down exactly, and that is what a protocol is.',
          ],
        },
        {
          t: 'table',
          head: ['Protocol', 'What it is for'],
          rows: [
            ['TCP', 'Splits data into packets, numbers them, checks they all arrive and reassembles them in order'],
            ['IP', 'Adds addresses to packets and routes them across networks'],
            ['HTTP', 'Rules for requesting and sending web pages'],
            ['HTTPS', 'HTTP with encryption added so the data cannot be read if intercepted'],
            ['FTP', 'Transferring files between computers'],
            ['SMTP', 'Sending email'],
            ['IMAP', 'Retrieving email while leaving it stored on the server'],
            ['POP', 'Retrieving email by downloading it and removing it from the server'],
          ],
        },
        { t: 'h', text: 'Packets' },
        { t: 'diagram', id: 'packet-journey' },
        { t: 'p', text: 'Data is broken into small packets before it is sent. Each packet carries a header with the source and destination addresses and a packet number, then the payload of real data, then a trailer used to check for errors.' },
        { t: 'h', text: 'The four layer model' },
        { t: 'p', text: 'Networking is organised into layers. Each layer does one job and passes its results to the layer below or above.' },
        { t: 'diagram', id: 'tcp-ip-layers' },
        { t: 'demo', id: 'network-layers', caption: 'Open each layer and follow a real message down and back up.' },
        {
          t: 'tip',
          body: [
            'Why do we use layers? Four reasons worth memorising: each layer can be developed on its own, one layer can be changed without affecting the others, it makes faults easier to find, and it means different manufacturers can build compatible equipment.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-3-q1',
      title: 'Quiz 1: Networks, hardware and the internet',
      questions: [
        { q: 'What is a LAN?', options: ['A network covering a large geographical area', 'A network covering a small area on hardware owned by the organisation', 'A single computer', 'A type of cable'], answer: 1, why: 'A LAN covers one site and the organisation owns the infrastructure itself.' },
        { q: 'Which device joins two different networks together and forwards data using IP addresses?', options: ['Switch', 'Router', 'NIC', 'Hub'], answer: 1, why: 'A router connects networks and routes packets using IP addresses.' },
        { q: 'What does a switch use to decide where to send data?', options: ['IP address', 'MAC address', 'Domain name', 'Port number'], answer: 1, why: 'A switch forwards frames to the correct device using MAC addresses.' },
        { q: 'What is the purpose of DNS?', options: ['To encrypt data', 'To translate domain names into IP addresses', 'To split data into packets', 'To block viruses'], answer: 1, why: 'DNS is the naming system that turns a readable domain name into the IP address needed for routing.' },
        { q: 'Which of these is an advantage of a client server network over peer to peer?', options: ['It is cheaper to set up', 'Files and backups can be managed centrally', 'It has no single point of failure', 'It needs no specialist staff'], answer: 1, why: 'Central management of files, security and backups is the main benefit of client server.' },
        { q: 'What does bandwidth mean?', options: ['The delay before data starts moving', 'The amount of data that can be transmitted per second', 'The number of devices on a network', 'The physical width of a cable'], answer: 1, why: 'Bandwidth is the data carrying capacity per second. Delay is latency, a different thing.' },
        { q: 'Which is a disadvantage of cloud storage?', options: ['Files can be accessed from anywhere', 'It requires an internet connection', 'Backups are automatic', 'Storage can be expanded easily'], answer: 1, why: 'Without a connection you cannot reach the files, which is the main drawback.' },
        { q: 'What is the world wide web?', options: ['The same thing as the internet', 'A collection of linked web pages accessed over the internet', 'A type of network cable', 'A protocol for sending email'], answer: 1, why: 'The web is one service running on the internet, not the internet itself.' },
        { q: 'Which factor would most improve the performance of a busy school network?', options: ['Adding more users', 'Replacing copper cable with fibre optic', 'Moving the switch further away', 'Turning off the router'], answer: 1, why: 'Fibre optic offers far greater bandwidth and is not affected by electrical interference.' },
        { q: 'What does a NIC do?', options: ['Stores web pages', 'Allows a device to connect to a network and holds its MAC address', 'Translates domain names', 'Encrypts wireless traffic'], answer: 1, why: 'The network interface card is the hardware that lets a device join a network.' },
      ],
    },
    {
      id: 't1-3-q2',
      title: 'Quiz 2: Topologies, protocols and layers',
      questions: [
        { q: 'In a star topology, what happens if one cable breaks?', options: ['The whole network stops', 'Only the device on that cable is affected', 'Data takes a different route automatically', 'The switch shuts down'], answer: 1, why: 'Each device has its own cable, so a break only isolates that one device.' },
        { q: 'What is the main disadvantage of a full mesh topology?', options: ['There is a single point of failure', 'It needs a very large amount of cabling, so it is expensive', 'It cannot handle heavy traffic', 'Only two devices can connect'], answer: 1, why: 'Connecting every device to every other device requires huge amounts of cable.' },
        { q: 'Which protocol is used to send email?', options: ['IMAP', 'SMTP', 'FTP', 'HTTP'], answer: 1, why: 'SMTP sends email. IMAP and POP retrieve it.' },
        { q: 'What does HTTPS add compared with HTTP?', options: ['Faster loading', 'Encryption of the data being sent', 'Better images', 'Automatic backups'], answer: 1, why: 'The S stands for secure, meaning the connection is encrypted.' },
        { q: 'Which protocol splits data into packets and makes sure they all arrive?', options: ['IP', 'TCP', 'FTP', 'POP'], answer: 1, why: 'TCP handles packet numbering, delivery checking and reassembly.' },
        { q: 'Which layer of the four layer model does HTTP belong to?', options: ['Link', 'Internet', 'Transport', 'Application'], answer: 3, why: 'HTTP is an application layer protocol because it defines the rules for the task being done.' },
        { q: 'What is contained in the header of a packet?', options: ['Only the data being sent', 'Source and destination addresses and the packet number', 'An error checking value only', 'The name of the sender'], answer: 1, why: 'The header holds addressing and sequencing information so packets can be routed and reassembled.' },
        { q: 'Why are layers used in networking?', options: ['To make networks slower but safer', 'So each layer can be developed and changed without affecting the others', 'To reduce the number of protocols to one', 'To remove the need for hardware'], answer: 1, why: 'Layers separate concerns, making design, fault finding and compatibility much easier.' },
        { q: 'Which is a benefit of wired connections over wireless?', options: ['Devices can move freely', 'Installation is cheaper', 'More reliable with less interference', 'No hardware is required'], answer: 2, why: 'Cables are not affected by walls, distance or radio interference.' },
        { q: 'Which layer adds the IP addresses to a packet?', options: ['Application', 'Transport', 'Internet', 'Link'], answer: 2, why: 'The internet layer uses the IP protocol to address and route packets.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-3-e1',
      context: 'A small business has 12 computers in one office. It is deciding between a peer to peer network and a client server network.',
      stem: 'Recommend which type of network the business should use and justify your answer.',
      marks: 6,
      markScheme: [
        { text: 'A clear recommendation is made.', accept: [['client server'], ['peer to peer'], ['recommend']] },
        { text: 'Client server allows central management of files and user accounts.', accept: [['central'], ['centrally'], ['one place'], ['server manages']] },
        { text: 'Backups and security updates can be done in one place.', accept: [['backup'], ['back up'], ['security', 'central'], ['updates']] },
        { text: 'Peer to peer is cheaper because no server hardware is needed.', accept: [['cheap'], ['no server'], ['less expensive'], ['low cost']] },
        { text: 'Client server has a single point of failure: if the server fails, the network stops.', accept: [['single point of failure'], ['server fails'], ['server goes down'], ['whole network stops']] },
        { text: 'Justification refers to the size of the business or its need for shared files and security.', accept: [['12'], ['twelve'], ['small business'], ['grow'], ['shared files'], ['staff']] },
      ],
      modelAnswer:
        'The business should use a client server network. With 12 computers there are enough users that managing files and accounts on each machine separately would become difficult and inconsistent. A server allows all shared files, user accounts and permissions to be managed centrally, so a member of staff can log in at any machine and reach their work. Backups and security updates can also be carried out in one place, which is far more reliable than trusting each employee to back up their own computer. Peer to peer would be cheaper because no server hardware is needed, and it has no single point of failure, whereas if the server breaks the whole client server network stops working. However, for a business with shared files and a need for proper security, the central control of a client server network outweighs the extra cost.',
    },
    {
      id: 't1-3-e2',
      stem: 'Describe how the Domain Name System (DNS) is used when a user types a web address into a browser.',
      marks: 4,
      markScheme: [
        { text: 'The browser sends the domain name to a DNS server.', accept: [['dns server'], ['sends', 'domain'], ['request', 'dns']] },
        { text: 'The DNS server looks up the matching IP address.', accept: [['ip address'], ['looks up'], ['translate'], ['converts']] },
        { text: 'If it does not hold the record it asks another DNS server.', accept: [['another dns'], ['passes'], ['higher'], ['forwards', 'request']] },
        { text: 'The IP address is returned to the browser, which then requests the page from the web server.', accept: [['returned'], ['sent back'], ['web server'], ['requests the page']] },
      ],
      modelAnswer:
        'When the user types a domain name such as bbc.co.uk, the browser sends that name to a DNS server. The DNS server looks the name up in its records to find the matching IP address. If that server does not have a record for the name it passes the request on to another DNS server higher up in the system until the address is found. The IP address is then returned to the browser, and the browser uses it to send its request directly to the web server, which sends the web page back to be displayed.',
    },
    {
      id: 't1-3-e3',
      stem: 'Explain two advantages of a star topology over a mesh topology for a school network.',
      marks: 4,
      markScheme: [
        { text: 'A star needs far less cabling, so it is cheaper to install.', accept: [['less cable'], ['less cabling'], ['cheaper'], ['fewer cables']] },
        { text: 'It is easier to add or remove devices without disturbing the rest of the network.', accept: [['easy to add'], ['add a device'], ['expand'], ['without affecting']] },
        { text: 'Faults are easy to locate because each device has its own cable.', accept: [['fault'], ['locate'], ['identify', 'problem'], ['own cable']] },
        { text: 'Performance is good because devices do not share one connection.', accept: [['do not share'], ['performance'], ['collision'], ['own connection']] },
      ],
      modelAnswer:
        'A star topology needs far less cabling than a mesh, because every device only needs one cable to the central switch rather than cables to many other devices, so it is much cheaper and quicker for a school to install. It is also far easier to manage, because a new computer can be added simply by plugging it into a free port on the switch without disturbing any other device, and if a fault appears it can be traced to a single cable rather than searching a web of connections.',
    },
    {
      id: 't1-3-e4',
      stem: 'Describe the purpose of the transport layer and the internet layer in the four layer TCP IP model.',
      marks: 4,
      markScheme: [
        { text: 'The transport layer splits data into packets.', accept: [['split'], ['divide'], ['breaks'], ['packets']] },
        { text: 'The transport layer numbers packets and reassembles them in order, requesting any that are missing.', accept: [['order'], ['number'], ['reassemble'], ['missing'], ['resend']] },
        { text: 'The internet layer adds source and destination IP addresses.', accept: [['ip address'], ['addresses'], ['addressing']] },
        { text: 'The internet layer routes the packets across the network.', accept: [['route'], ['routing'], ['path'], ['router']] },
      ],
      modelAnswer:
        'The transport layer takes the data from the application and splits it into packets, numbering each one so that the receiving computer can put them back together in the right order. It also checks that every packet has arrived and asks for any missing packet to be sent again. The internet layer then adds the source and destination IP addresses to each packet and works out the route the packet should take across the network, so routers along the way know where to forward it.',
    },
    {
      id: 't1-3-e5',
      stem: 'A student says "wireless is always better than wired because you can move around". Discuss whether this statement is correct.',
      marks: 6,
      markScheme: [
        { text: 'Agrees that wireless offers mobility and convenience.', accept: [['mobility'], ['move around'], ['convenient'], ['anywhere']] },
        { text: 'Wireless avoids the cost and disruption of installing cables.', accept: [['no cables'], ['cheaper', 'install'], ['cabling cost'], ['no wiring']] },
        { text: 'Wired connections are usually faster and give more consistent speeds.', accept: [['faster'], ['consistent'], ['higher bandwidth'], ['speed']] },
        { text: 'Wired is more reliable because it is not affected by walls, distance or interference.', accept: [['interference'], ['walls'], ['distance'], ['reliable']] },
        { text: 'Wireless signals travel beyond the building so must be encrypted, making security harder.', accept: [['security'], ['encrypt'], ['intercept'], ['eavesdrop']] },
        { text: 'A judgement is given: it depends on the situation and the devices being used.', accept: [['depends'], ['both'], ['situation'], ['not always'], ['combination']] },
      ],
      modelAnswer:
        'The student is partly right. Wireless does allow devices to be moved freely anywhere within range, which suits laptops, tablets and phones, and it avoids the cost and disruption of running cables through an existing building. However, wired connections are normally faster and give far more consistent speeds because the full bandwidth is not shared with everyone nearby, and they are more reliable because thick walls, distance and interference from other devices do not weaken the signal. Security is also easier on a wired network, because someone has to physically plug in, whereas a wireless signal travels outside the building and must be encrypted. The statement is therefore not always correct: the best answer depends on the situation, and most real networks use a combination, with fixed desktops wired and mobile devices on Wi Fi.',
    },
  ],
};
