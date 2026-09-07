import type { Topic } from '../../types';

export const t1_6: Topic = {
  id: 't1-6',
  code: '1.6',
  title: 'Ethical, Legal, Cultural and Environmental Impacts',
  blurb: 'The impact of technology on people, the law, culture, privacy and the planet.',
  paper: 'Paper 1',
  icon: 'scales',
  lessons: [
    {
      id: 't1-6-l1',
      title: 'The four kinds of impact',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'This topic is the one students most often lose marks on, not because it is hard but because answers stay vague. The fix is simple: always name the impact type, give a specific consequence, and name who is affected.' },
        { t: 'diagram', id: 'impacts-list' },
        {
          t: 'key',
          terms: [
            { term: 'Ethical', def: 'Is it the right thing to do, even if it is allowed? Fairness, honesty and responsibility.' },
            { term: 'Legal', def: 'Does it break the law? This is about specific Acts of Parliament.' },
            { term: 'Cultural', def: 'How does it change the way groups of people live, work and relate to each other?' },
            { term: 'Environmental', def: 'What is the effect on energy use, natural resources and waste?' },
            { term: 'Privacy', def: 'Who can see personal data, and did the person agree to that?' },
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: a supermarket introduces self service tills',
          body: [
            'Ethical: is it fair to replace staff with machines when those people rely on the wages?',
            'Legal: the shop must follow data protection rules for the loyalty card data it collects at the till.',
            'Cultural: shopping becomes a solitary activity, and older customers who are less confident with technology may feel excluded.',
            'Environmental: fewer paper receipts are printed, but new machines must be manufactured and powered, and old ones become e waste.',
            'Notice that each point names the impact type and then gives a specific consequence. That is exactly what earns marks.',
          ],
        },
        { t: 'h', text: 'Environmental impacts worth knowing' },
        {
          t: 'ul',
          items: [
            'Manufacturing devices uses rare metals that must be mined, which damages landscapes and can involve poor working conditions.',
            'Data centres consume enormous amounts of electricity, much of it for cooling.',
            'E waste is the fastest growing waste stream in the world, and some of it is shipped to countries with weaker safety rules.',
            'On the positive side, video calls reduce travel, smart heating reduces energy use, and digital documents reduce paper.',
          ],
        },
        { t: 'h', text: 'Cultural impacts worth knowing' },
        {
          t: 'ul',
          items: [
            'The digital divide: people without a good connection or a device are shut out of services that assume everyone is online.',
            'Changes to employment: some jobs disappear while new ones appear, and workers may need retraining.',
            'Always on culture: people are expected to answer messages outside working hours.',
            'Access to information and education for people who previously had none.',
          ],
        },
      ],
    },
    {
      id: 't1-6-l2',
      title: 'The law, licensing and privacy',
      minutes: 9,
      blocks: [
        { t: 'p', text: 'Four pieces of legislation are named in the specification. Learn what each one covers and one example of breaking it.' },
        {
          t: 'table',
          head: ['Legislation', 'What it covers', 'Example of breaking it'],
          rows: [
            ['Data Protection Act 2018', 'How organisations must collect, store and use personal data', 'A company sells customer email addresses without consent'],
            ['Computer Misuse Act 1990', 'Unauthorised access to computer systems', 'Guessing a friend password to read their messages'],
            ['Copyright, Designs and Patents Act 1988', 'Protects original work such as music, film, software and writing', 'Uploading a film to a streaming site without permission'],
            ['Software licences', 'The terms under which software may be used', 'Installing one licence on thirty school computers'],
          ],
        },
        { t: 'h', text: 'The Data Protection Act principles' },
        {
          t: 'ul',
          items: [
            'Data must be used fairly, lawfully and transparently.',
            'It must be collected for a specific stated purpose and not used for something else.',
            'Only the data actually needed should be collected.',
            'It must be accurate and kept up to date.',
            'It must not be kept longer than necessary.',
            'It must be kept secure.',
          ],
        },
        {
          t: 'real',
          title: 'Real life scenario: a fitness app',
          body: [
            'You install an app to count your steps. It also asks for your contacts, your location at all times and access to your photos.',
            'Legally it must tell you why it wants each one and get your consent. Ethically, asking for contacts when it only counts steps is hard to justify.',
            'If that data were later sold to an insurance company that raised your premiums, the privacy impact becomes very real.',
          ],
        },
        { t: 'h', text: 'Open source and proprietary software' },
        {
          t: 'table',
          head: ['', 'Open source', 'Proprietary'],
          rows: [
            ['Source code', 'Available to everyone', 'Kept secret by the company'],
            ['Cost', 'Usually free', 'Usually paid for'],
            ['Modification', 'Anyone may change and share it', 'Not allowed'],
            ['Support', 'Community forums, no guarantee', 'Official support from the company'],
            ['Reliability', 'Many people can find and fix bugs', 'Tested and quality checked before release'],
            ['Examples', 'Linux, Firefox, LibreOffice', 'Windows, Microsoft Office, Adobe Photoshop'],
          ],
        },
        {
          t: 'tip',
          body: [
            'For a discuss or evaluate question, structure your answer as: one benefit, one drawback, then a clear judgement that answers the actual question asked. Answers with no judgement rarely reach the top band.',
          ],
        },
      ],
    },
  ],
  quizzes: [
    {
      id: 't1-6-q1',
      title: 'Quiz 1: Impacts',
      questions: [
        { q: 'Which impact type is about whether something is right, even if it is legal?', options: ['Legal', 'Ethical', 'Cultural', 'Environmental'], answer: 1, why: 'Ethics is about right and wrong, which can go beyond what the law requires.' },
        { q: 'What is the digital divide?', options: ['The gap between hardware and software', 'The gap between people who have good access to technology and those who do not', 'The difference between two networks', 'The split between analogue and digital signals'], answer: 1, why: 'The digital divide is a cultural impact where some people are excluded from online services.' },
        { q: 'Which of these is an environmental impact of technology?', options: ['Employees losing jobs to automation', 'Rare metals being mined to build devices', 'A company selling customer data', 'People feeling pressure to reply to emails at night'], answer: 1, why: 'Mining for materials damages landscapes and consumes resources, which is environmental.' },
        { q: 'What is e waste?', options: ['Unwanted emails', 'Discarded electronic equipment', 'Wasted electricity', 'Deleted files'], answer: 1, why: 'E waste is discarded electronic devices, which is the fastest growing waste stream globally.' },
        { q: 'A company introduces robots that replace warehouse staff. Which impact is this mainly?', options: ['Environmental', 'Cultural and ethical', 'Legal only', 'No impact'], answer: 1, why: 'It changes how people work and live, and raises fairness questions about those losing their jobs.' },
        { q: 'Which is a positive environmental effect of technology?', options: ['Increased data centre electricity use', 'Video calls reducing the need to travel', 'More devices being thrown away', 'More packaging being produced'], answer: 1, why: 'Replacing travel with video calls reduces fuel use and emissions.' },
        { q: 'Why do data centres use so much electricity?', options: ['Servers run constantly and need large cooling systems', 'They print a lot of paper', 'They are always being rebuilt', 'They use old technology only'], answer: 0, why: 'Servers run day and night and generate heat, so cooling uses a huge share of the power.' },
        { q: 'Which is a privacy concern?', options: ['A phone battery running out', 'An app collecting location data without a clear reason', 'A slow internet connection', 'A cracked screen'], answer: 1, why: 'Collecting personal data beyond what is needed is a privacy issue.' },
        { q: 'Which group is most affected by the digital divide?', options: ['People with the newest phones', 'People on low incomes or in areas with poor connectivity', 'Software developers', 'Large companies'], answer: 1, why: 'Cost and poor infrastructure are the main barriers to being online.' },
        { q: 'In an evaluate question, what is needed to reach the highest marks?', options: ['A long list of facts', 'Benefits, drawbacks and a clear judgement', 'Only advantages', 'Only your opinion'], answer: 1, why: 'You must weigh both sides and then commit to a conclusion linked to the question.' },
      ],
    },
    {
      id: 't1-6-q2',
      title: 'Quiz 2: Law and licensing',
      questions: [
        { q: 'Which law covers unauthorised access to computer systems?', options: ['Data Protection Act', 'Computer Misuse Act', 'Copyright, Designs and Patents Act', 'Freedom of Information Act'], answer: 1, why: 'The Computer Misuse Act 1990 makes unauthorised access an offence.' },
        { q: 'Downloading a film without paying breaks which law?', options: ['Computer Misuse Act', 'Copyright, Designs and Patents Act', 'Data Protection Act', 'Health and Safety Act'], answer: 1, why: 'Copyright law protects original creative work such as films, music and software.' },
        { q: 'Which principle of the Data Protection Act says an organisation should not collect more data than it needs?', options: ['Data must be accurate', 'Data must be adequate and limited to what is necessary', 'Data must be kept for ever', 'Data must be shared widely'], answer: 1, why: 'Data minimisation means only collecting what is genuinely required for the stated purpose.' },
        { q: 'What is open source software?', options: ['Software with source code available for anyone to view and modify', 'Software that is always free of bugs', 'Software that only runs online', 'Software owned by one company and kept secret'], answer: 0, why: 'Open source means the source code is published and may be modified and shared.' },
        { q: 'Which is an advantage of proprietary software?', options: ['You can edit the source code', 'It is always free', 'Official support and quality testing from the company', 'It cannot contain bugs'], answer: 2, why: 'Paying for software normally brings guaranteed support and professional testing.' },
        { q: 'A school installs one copy of software on 30 computers with a single user licence. This is:', options: ['Perfectly legal', 'A breach of the software licence', 'Covered by the Data Protection Act', 'Only an ethical issue'], answer: 1, why: 'The licence sets the terms of use, and installing beyond them breaches it.' },
        { q: 'Under the Data Protection Act, personal data must be:', options: ['Kept for ever in case it is useful', 'Kept secure and no longer than necessary', 'Shared with any organisation that asks', 'Stored only on paper'], answer: 1, why: 'Data must be kept securely and deleted once the purpose has been fulfilled.' },
        { q: 'Which is an advantage of open source software for a school?', options: ['There is always a helpline to call', 'It is usually free, so more machines can be equipped for the same budget', 'It cannot be modified', 'It never needs updating'], answer: 1, why: 'No licence fee means the budget goes further, which matters for hundreds of machines.' },
        { q: 'Guessing someone password to read their messages breaks which law?', options: ['Copyright, Designs and Patents Act', 'Computer Misuse Act', 'Data Protection Act', 'None of these'], answer: 1, why: 'Gaining access to a system you are not authorised to use is a Computer Misuse Act offence.' },
        { q: 'Which of these is a disadvantage of open source software?', options: ['The code cannot be inspected', 'Support relies on the community with no guarantee', 'It is always expensive', 'It can never be modified'], answer: 1, why: 'There is no company obliged to help, so support depends on volunteers and forums.' },
      ],
    },
  ],
  exam: [
    {
      id: 't1-6-e1',
      context: 'A council is replacing all of its paper forms with an online only system for reporting problems such as broken street lights.',
      stem: 'Discuss the impacts of this decision.',
      marks: 8,
      markScheme: [
        { text: 'Positive: reports are processed faster and more cheaply.', accept: [['faster'], ['cheaper'], ['efficient'], ['quicker'], ['saves money']] },
        { text: 'Positive: environmental benefit from less paper and less travel.', accept: [['paper'], ['travel'], ['environment'], ['trees'], ['emissions']] },
        { text: 'Positive: reports can be made at any time from anywhere.', accept: [['any time'], ['24'], ['anywhere'], ['convenien']] },
        { text: 'Negative: the digital divide excludes people without internet access or devices.', accept: [['digital divide'], ['no internet'], ['without access'], ['cannot afford'], ['excluded']] },
        { text: 'Negative: older or less confident users may struggle with the system.', accept: [['older'], ['elderly'], ['less confident'], ['disabilit'], ['struggle']] },
        { text: 'Legal: personal data collected must be handled under the Data Protection Act.', accept: [['data protection'], ['personal data'], ['gdpr']] },
        { text: 'Environmental: servers must run constantly and use electricity.', accept: [['server'], ['electricity'], ['data centre'], ['power']] },
        { text: 'A clear judgement is reached, for example that the system should be introduced alongside a phone or in person option.', accept: [['alongside'], ['as well as'], ['keep'], ['alternative'], ['overall'], ['conclusion'], ['should']] },
      ],
      modelAnswer:
        'There are clear benefits. An online system processes reports far faster and more cheaply than paper, because the data goes straight into the council database without anyone retyping it, and residents can report a problem at any hour from home instead of travelling to an office. There is an environmental benefit too, since far less paper is printed and fewer journeys are made, although this is partly offset because the servers hosting the system must run constantly and use electricity. However, there are real drawbacks. The digital divide means residents on low incomes, in areas with poor broadband, or without a smartphone are effectively shut out of a service they pay for through their council tax. Older residents and those with certain disabilities may find the interface difficult and give up rather than report a fault. The council also becomes responsible for the personal data it collects and must handle it in line with the Data Protection Act, keeping it secure and only for as long as it is needed. Overall the move is sensible because of the cost and speed benefits, but it should not be online only. Keeping a telephone option available would give most of the savings while making sure nobody is excluded.',
      examinerTip: 'Eight mark questions need both sides and a conclusion. Aim for three positives, three negatives and a judgement.',
    },
    {
      id: 't1-6-e2',
      stem: 'Describe two responsibilities that the Data Protection Act places on an organisation that stores customer data.',
      marks: 4,
      markScheme: [
        { text: 'Data must be kept secure.', accept: [['secure'], ['security'], ['protected'], ['encrypt']] },
        { text: 'Data must only be used for the purpose it was collected for.', accept: [['purpose'], ['what it was collected'], ['not', 'other']] },
        { text: 'Data must be accurate and kept up to date.', accept: [['accurate'], ['up to date'], ['correct']] },
        { text: 'Data must not be kept longer than necessary, and only what is needed should be collected.', accept: [['not kept longer'], ['delete'], ['only', 'needed'], ['minimum'], ['necessary']] },
      ],
      modelAnswer:
        'The organisation must keep the data secure, for example by encrypting it and restricting access so that only staff who need it can see it, in order to prevent it being stolen or leaked. It must also only use the data for the specific purpose it was collected for and told the customer about, so customer addresses gathered to deliver orders could not then be sold to an advertising company. In addition it must keep the data accurate and up to date, and delete it once it is no longer needed.',
    },
    {
      id: 't1-6-e3',
      stem: 'Compare open source software and proprietary software for a school that needs office software for 500 computers.',
      marks: 6,
      markScheme: [
        { text: 'Open source is usually free, so it costs far less across 500 machines.', accept: [['free'], ['no cost'], ['cheaper'], ['licence fee']] },
        { text: 'Open source code can be viewed and modified to suit the school.', accept: [['modif'], ['source code'], ['customis'], ['adapt'], ['change the code']] },
        { text: 'Open source may have no guaranteed support, only community help.', accept: [['no support'], ['community'], ['forum'], ['no guarantee']] },
        { text: 'Proprietary software normally includes official support and regular updates.', accept: [['official support'], ['helpline'], ['company', 'support'], ['updates']] },
        { text: 'Proprietary software may be more familiar to students and employers.', accept: [['familiar'], ['employer'], ['industry standard'], ['used at home'], ['compatib']] },
        { text: 'A clear recommendation is made with justification.', accept: [['recommend'], ['should'], ['overall'], ['conclusion'], ['best']] },
      ],
      modelAnswer:
        'Open source software such as LibreOffice would normally be free, which across 500 computers saves a very large amount of money that could be spent on hardware instead, and because the source code is available it could be modified or extended to suit the school if it had the technical staff to do so. The drawback is that there is no company obliged to help when something goes wrong, so the school would depend on community forums and its own network team. Proprietary software such as Microsoft Office costs a licence fee for every machine, but it comes with official support and regular tested updates, and it is the software most students will meet at home and in future workplaces, so files are less likely to have formatting problems when shared. Overall, for a school with a limited budget and a competent IT team, open source is the better choice because of the very large saving, but if compatibility with outside organisations is critical then a proprietary licence would be safer.',
    },
    {
      id: 't1-6-e4',
      stem: 'Explain two environmental impacts of the increasing use of smartphones.',
      marks: 4,
      markScheme: [
        { text: 'Manufacturing uses rare metals that have to be mined.', accept: [['rare'], ['metal'], ['mining'], ['mined'], ['resources']] },
        { text: 'Mining damages landscapes and uses large amounts of energy and water.', accept: [['damage'], ['landscape'], ['energy'], ['water'], ['pollution']] },
        { text: 'Devices are replaced frequently, creating large amounts of e waste.', accept: [['e waste'], ['ewaste'], ['landfill'], ['thrown away'], ['replaced']] },
        { text: 'E waste contains toxic substances that can leak into soil and water if not recycled properly.', accept: [['toxic'], ['chemical'], ['soil'], ['water'], ['recycl']] },
      ],
      modelAnswer:
        'Manufacturing smartphones requires rare metals such as lithium and cobalt, which have to be mined. Mining scars the landscape, uses very large amounts of energy and water, and can pollute local rivers. Secondly, because people replace their phones every two or three years, enormous quantities of e waste are produced. If those phones are not recycled properly the toxic substances inside them, such as lead and mercury, can leak into soil and water supplies, and much of this waste is shipped to countries with weaker environmental protections.',
    },
    {
      id: 't1-6-e5',
      stem: 'A student uses a program to try thousands of passwords on a school system without permission. State which law this breaks and explain why.',
      marks: 3,
      markScheme: [
        { text: 'Identifies the Computer Misuse Act 1990.', accept: [['computer misuse']] },
        { text: 'The student is attempting unauthorised access to a computer system.', accept: [['unauthorised'], ['without permission'], ['not allowed'], ['no permission']] },
        { text: 'Intent to gain access, and possibly to commit a further offence or modify data, is an offence under the Act.', accept: [['intent'], ['offence'], ['illegal'], ['crime'], ['modify']] },
      ],
      modelAnswer:
        'This breaks the Computer Misuse Act 1990. The student is deliberately attempting to gain access to a computer system that they have not been given permission to use, which is unauthorised access and is an offence under the Act even if they never actually succeed in logging in. If they then went on to change or delete data the offence would be more serious still, as unauthorised modification of computer material carries a heavier penalty.',
    },
  ],
};
