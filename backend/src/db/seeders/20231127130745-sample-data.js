const db = require('../models');
const Users = db.users;

const Contacts = db.contacts;

const Estimates = db.estimates;

const Jobs = db.jobs;

const Templates = db.templates;

const Trades = db.trades;

const Invoices = db.invoices;

const Orders = db.orders;

const Images = db.images;

const Documents = db.documents;

const Emails = db.emails;

const Chats = db.chats;

const Appointments = db.appointments;

const Tasks = db.tasks;

const Contracts = db.contracts;

const Amendments = db.amendments;

const EstimateSections = db.estimate_sections;

const ContactPhones = db.contact_phones;

const ContactEmails = db.contact_emails;

const LaborTicket = db.labor_ticket;

const Crew = db.crew;

const Subcontractor = db.subcontractor;

const History = db.history;

const Address = db.address;

const ContactsData = [
  {
    name: 'Paul Dirac',

    email: 'fannie.runte@kassulke.info',

    phone: '(645) 700-2540 x4743',

    address: 'Suite 484 476 Maris View, New Lucienne, CA 21332',

    status: 'Lead',

    firstName: "That's messed up",

    lastName: 'Let me tell ya',

    source: 'Google Ads',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Commercial',

    work_type: 'Retail',

    referral: 'My buddy Harlen',

    company: 'Prohaska-Jast',
  },

  {
    name: 'Ernst Mayr',

    email: 'tammara_murphy@wunsch.biz',

    phone: '1-100-827-5116 x911',

    address: '782 Rempel Curve, Wyattbury, MD 97326',

    status: 'Lead',

    firstName: 'Turd gone wrong',

    lastName: 'Standby',

    source: 'Facebook',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Residential',

    work_type: 'New',

    referral: "I'm washing my hands of it",

    company: 'Harber and Sons',
  },

  {
    name: 'Euclid',

    email: 'saturnina.yundt@rice.info',

    phone: '1-430-017-3169 x6480',

    address: '6255 Cammy Cove, Merriville, TN 46896-3436',

    status: 'Customer',

    firstName: "That's messed up",

    lastName: 'My boss gonna fire me',

    source: 'Google Ads',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Commercial',

    work_type: 'Insurance',

    referral: "I'm washing my hands of it",

    company: 'Prohaska and Sons',
  },

  {
    name: 'August Kekule',

    email: 'marcy.anderson@bruen-hyatt.biz',

    phone: '402.616.5446 x464',

    address: '607 Darrell Groves, Brekkehaven, SD 65941',

    status: 'Prospect',

    firstName: "Y'all never listen to me",

    lastName: "That's messed up",

    source: 'Other',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Residential',

    work_type: 'Insurance',

    referral: "That's messed up",

    company: 'Fay, Mayert and Powlowski',
  },
];

const EstimatesData = [
  {
    name: 'James Clerk Maxwell',

    description: 'Your weapons, you will not need them.',

    trade: 'That damn Bill Stull',

    template_used: 'Come on now',

    material_cost: 73.65,

    labor_cost: 43.43,

    markup: 77.14,

    profit_margin: 76.78,

    total_price: 95.56,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },

  {
    name: 'George Gaylord Simpson',

    description:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',

    trade: "I'm washing my hands of it",

    template_used: 'Yup',

    material_cost: 71.18,

    labor_cost: 33.45,

    markup: 27.69,

    profit_margin: 96.58,

    total_price: 72.96,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Approved',
  },

  {
    name: 'Trofim Lysenko',

    description:
      'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    trade: 'Like a red-headed stepchild',

    template_used: "C'mon Naomi",

    material_cost: 59.63,

    labor_cost: 25.03,

    markup: 51.83,

    profit_margin: 43.08,

    total_price: 52.42,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'New',
  },

  {
    name: 'Louis Pasteur',

    description: 'Adventure. Excitement. A Jedi craves not these things.',

    trade: 'My boss gonna fire me',

    template_used: "Y'all never listen to me",

    material_cost: 92.86,

    labor_cost: 79.56,

    markup: 51.84,

    profit_margin: 91.57,

    total_price: 14.63,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Approved',
  },
];

const JobsData = [
  {
    name: 'Max Delbruck',

    description: 'Always pass on what you have learned.',

    category: 'Commercial',

    type: 'Repair',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 748 79435 Rippin Roads, South Maribethtown, HI 05956-1691',

    start_date: new Date('2024-05-08'),

    end_date: new Date('2024-05-14'),
  },

  {
    name: 'Murray Gell-Mann',

    description: 'Always pass on what you have learned.',

    category: 'Residential',

    type: 'Retail',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 582 5950 Jones Union, Kleinborough, WY 48851-5482',

    start_date: new Date('2024-06-12'),

    end_date: new Date('2024-03-26'),
  },

  {
    name: 'Galileo Galilei',

    description: 'At an end your rule is, and not short enough it was!',

    category: 'Residential',

    type: 'Repair',

    status: 'Approved',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 875 1852 Zulauf Lodge, Lake Adolphberg, PA 39133',

    start_date: new Date('2024-04-15'),

    end_date: new Date('2024-02-26'),
  },

  {
    name: 'Paul Ehrlich',

    description: 'Mudhole? Slimy? My home this is!',

    category: 'Residential',

    type: 'Insurance',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '342 Bernier Park, Johnstonbury, TN 58695',

    start_date: new Date('2023-11-29'),

    end_date: new Date('2024-07-29'),
  },
];

const TemplatesData = [
  {
    name: 'Albert Einstein',

    description:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    // type code here for "relation_many" field

    is_email_template: false,
  },

  {
    name: 'Comte de Buffon',

    description:
      'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',

    // type code here for "relation_many" field

    is_email_template: true,
  },

  {
    name: 'Murray Gell-Mann',

    description: 'That is why you fail.',

    // type code here for "relation_many" field

    is_email_template: true,
  },

  {
    name: 'August Kekule',

    description:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    // type code here for "relation_many" field

    is_email_template: false,
  },
];

const TradesData = [
  {
    name: 'Sigmund Freud',
  },

  {
    name: 'August Kekule',
  },

  {
    name: 'Justus Liebig',
  },

  {
    name: 'William Harvey',
  },
];

const InvoicesData = [
  {
    invoice_number: "How 'bout them Cowboys",

    invoice_date: new Date('2023-10-16'),

    terms: 'By Due Date',

    approved_job_value: 49.09,

    balance_amount: 89.68,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Contact the tower',

    invoice_date: new Date('2024-05-17'),

    terms: 'Net 10 Days',

    approved_job_value: 38.55,

    balance_amount: 77.09,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Contact the tower',

    invoice_date: new Date('2024-08-17'),

    terms: 'Net 45 Days',

    approved_job_value: 69.15,

    balance_amount: 27.66,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'My buddy Harlen',

    invoice_date: new Date('2024-08-04'),

    terms: 'Net 10 Days',

    approved_job_value: 11.69,

    balance_amount: 15.94,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: 'So I was walking Oscar',

    total_amount: 68.09,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Always the last one to the party',

    total_amount: 54.18,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Yup',

    total_amount: 78.19,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'No one tells me shit',

    total_amount: 79.07,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagesData = [
  {
    // type code here for "images" field

    Name: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: "Goin' hog huntin'",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: "Goin' hog huntin'",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    name: 'Gustav Kirchhoff',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Charles Sherrington',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Max Born',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Wilhelm Wundt',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const EmailsData = [
  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field
    // type code here for "relation_one" field
    // type code here for "relation_one" field
  },
];

const ChatsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Rudolf Virchow',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Claude Bernard',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Sigmund Freud',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Leonard Euler',
  },
];

const AppointmentsData = [
  {
    subject: "That Barbala couldn't fly his way out of a wet paper bag",

    start_time: new Date('2024-07-18'),

    end_time: new Date('2024-06-07'),

    notes: 'Feel the force!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'So I was walking Oscar',

    start_time: new Date('2024-06-21'),

    end_time: new Date('2024-09-22'),

    notes:
      'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: "Goin' hog huntin'",

    start_time: new Date('2024-03-21'),

    end_time: new Date('2023-10-12'),

    notes: 'Younglings, younglings gather ’round.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That damn gimble',

    start_time: new Date('2024-06-04'),

    end_time: new Date('2024-07-23'),

    notes: 'Good relations with the Wookiees, I have.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: 'Let me tell ya',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Medium',

    due_date: new Date('2024-06-09'),

    // type code here for "relation_one" field
  },

  {
    subject: "Goin' hog huntin'",

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'High',

    due_date: new Date('2024-05-16'),

    // type code here for "relation_one" field
  },

  {
    subject: "Goin' hog huntin'",

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'High',

    due_date: new Date('2024-06-12'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'Medium',

    due_date: new Date('2023-10-24'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Willard Libby',

    amount: 61.51,

    body: 'Reckless he is. Matters are worse.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-10-16'),

    // type code here for "relation_one" field
  },

  {
    name: 'James Clerk Maxwell',

    amount: 98.81,

    body: 'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-03-03'),

    // type code here for "relation_one" field
  },

  {
    name: 'Charles Darwin',

    amount: 75.71,

    body: 'Use your feelings, Obi-Wan, and find him you will.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-12-10'),

    // type code here for "relation_one" field
  },

  {
    name: 'Johannes Kepler',

    amount: 53.85,

    body: 'Always pass on what you have learned.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-03-13'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Supplement',

    amount: 56.61,

    description:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
  },

  {
    // type code here for "relation_one" field

    type: 'Discount',

    amount: 22.24,

    description: 'Difficult to see. Always in motion is the future...',
  },

  {
    // type code here for "relation_one" field

    type: 'Discount',

    amount: 47.85,

    description:
      'Much to learn you still have my old padawan. ... This is just the beginning!',
  },

  {
    // type code here for "relation_one" field

    type: 'Supplement',

    amount: 61.23,

    description:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',
  },
];

const EstimateSectionsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 18.92,

    material_price: 99.32,

    labor_price: 62.09,

    name: 'Thomas Hunt Morgan',

    description: 'Ow, ow, OW! On my ear you are!',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 64.58,

    material_price: 57.13,

    labor_price: 24.98,

    name: 'Alfred Kinsey',

    description:
      'Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 74.66,

    material_price: 77.23,

    labor_price: 41.43,

    name: 'Carl Gauss (Karl Friedrich Gauss)',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 62.88,

    material_price: 66.01,

    labor_price: 90.71,

    name: 'Erwin Schrodinger',

    description:
      'Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.',
  },
];

const ContactPhonesData = [
  {
    phone_number: "That's messed up",

    type: 'work',

    is_primary: true,
  },

  {
    phone_number: 'My buddy Harlen',

    type: 'mobile',

    is_primary: false,
  },

  {
    phone_number: 'That goddamn Datamate',

    type: 'mobile',

    is_primary: false,
  },

  {
    phone_number: 'So I was walking Oscar',

    type: 'home',

    is_primary: true,
  },
];

const ContactEmailsData = [
  {
    email: 'jae.murphy@lowe.info',

    type: 'work',
  },

  {
    email: 'petrina@raynor.com',

    type: 'work',
  },

  {
    email: 'almeta@halvorson.io',

    type: 'other',
  },

  {
    email: 'whitney.witting@daugherty.name',

    type: 'personal',
  },
];

const LaborTicketData = [
  {
    name: 'Leonard Euler',

    // type code here for "relation_one" field

    start_date: new Date('2024-04-17'),

    end_date: new Date('2024-03-18'),

    crew_instructions:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    actual_start_time: new Date('2024-05-27'),

    actual_end_time: new Date('2024-02-15'),

    crew_actions: 'Not Checked In',

    labor_progress: 'Working',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    assigned_date: new Date('2024-08-18'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Albert Einstein',

    // type code here for "relation_one" field

    start_date: new Date('2024-01-06'),

    end_date: new Date('2024-07-15'),

    crew_instructions: 'Good relations with the Wookiees, I have.',

    actual_start_time: new Date('2024-06-19'),

    actual_end_time: new Date('2024-03-23'),

    crew_actions: 'Postponed',

    labor_progress: 'Cancelled ',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer: 'Do. Or do not. There is no try.',

    assigned_date: new Date('2024-04-18'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Joseph J. Thomson',

    // type code here for "relation_one" field

    start_date: new Date('2024-03-09'),

    end_date: new Date('2024-06-10'),

    crew_instructions: 'Always pass on what you have learned.',

    actual_start_time: new Date('2024-05-02'),

    actual_end_time: new Date('2024-03-15'),

    crew_actions: 'Checked In',

    labor_progress: 'Delayed',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'The dark side clouds everything. Impossible to see the future is.',

    assigned_date: new Date('2023-11-18'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Gertrude Belle Elion',

    // type code here for "relation_one" field

    start_date: new Date('2024-02-11'),

    end_date: new Date('2024-08-29'),

    crew_instructions: 'Around the survivors a perimeter create.',

    actual_start_time: new Date('2024-08-27'),

    actual_end_time: new Date('2023-11-02'),

    crew_actions: 'Postponed',

    labor_progress: 'Working',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    assigned_date: new Date('2024-08-10'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const CrewData = [
  {
    name: 'Konrad Lorenz',

    // type code here for "relation_many" field

    color: 'Let me tell ya',
  },

  {
    name: 'Albrecht von Haller',

    // type code here for "relation_many" field

    color: 'Standby',
  },

  {
    name: 'Edward O. Wilson',

    // type code here for "relation_many" field

    color: 'Texas!',
  },

  {
    name: 'Carl Gauss (Karl Friedrich Gauss)',

    // type code here for "relation_many" field

    color: 'I want my 5$ back',
  },
];

const SubcontractorData = [
  {
    name: 'Jonas Salk',

    first_name: 'So I was walking Oscar',

    last_name: 'Come on now',

    address: 'Suite 820 505 Kuvalis Trace, New Constanceport, WI 59360',

    phone: '(312) 661-7275',

    mobile_phone: "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_many" field

    entity_name: 'Texas!',
  },

  {
    name: 'Carl Gauss (Karl Friedrich Gauss)',

    first_name: 'That damn gimble',

    last_name: 'My buddy Harlen',

    address: '4561 Rob Crescent, Lake Johnie, AK 19581',

    phone: '1-609-283-2192 x7099',

    mobile_phone: 'No one tells me shit',

    // type code here for "relation_many" field

    entity_name: 'That damn Bill Stull',
  },

  {
    name: 'Claude Bernard',

    first_name: 'I want my damn cart back',

    last_name: 'My buddy Harlen',

    address: '527 Yundt Prairie, Kautzerstad, PA 02177',

    phone: '621-462-7817 x80285',

    mobile_phone: 'Come on now',

    // type code here for "relation_many" field

    entity_name: 'That damn Bill Stull',
  },

  {
    name: 'Paul Ehrlich',

    first_name: "That Barbala couldn't fly his way out of a wet paper bag",

    last_name: "Goin' hog huntin'",

    address: 'Apt. 651 309 Stanford Ports, Collierstad, MI 44255',

    phone: '450.044.5171 x018',

    mobile_phone: 'Let me tell ya',

    // type code here for "relation_many" field

    entity_name: 'I want my 5$ back',
  },
];

const HistoryData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    action_description: 'That damn diabetes',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    action_description: 'Texas!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    action_description: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    action_description: 'Yup',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const AddressData = [
  {
    street: 'Standby',

    suite_apt_unit: 'Come on now',

    city: 'Texas!',

    state: 'AK',

    zip: 'Turd gone wrong',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: true,

    is_billing_Address: false,

    // type code here for "relation_one" field
  },

  {
    street: "Goin' hog huntin'",

    suite_apt_unit: 'Let me tell ya',

    city: 'I want my 5$ back',

    state: 'AS',

    zip: 'Like a red-headed stepchild',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: false,

    is_billing_Address: false,

    // type code here for "relation_one" field
  },

  {
    street: 'Reminds me of my old girlfriend Olga Goodntight',

    suite_apt_unit: "Y'all never listen to me",

    city: 'Come on now',

    state: 'AS',

    zip: "That Barbala couldn't fly his way out of a wet paper bag",

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: true,

    is_location: true,

    is_billing_Address: true,

    // type code here for "relation_one" field
  },

  {
    street: 'Come on now',

    suite_apt_unit: 'I want my 5$ back',

    city: 'Reminds me of my old girlfriend Olga Goodntight',

    state: 'AS',

    zip: 'My buddy Harlen',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: false,

    is_billing_Address: true,

    // type code here for "relation_one" field
  },
];

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateContactWithAssigned_to() {
  const relatedAssigned_to0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact0 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contact0?.setAssigned_to) {
    await Contact0.setAssigned_to(relatedAssigned_to0);
  }

  const relatedAssigned_to1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact1 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contact1?.setAssigned_to) {
    await Contact1.setAssigned_to(relatedAssigned_to1);
  }

  const relatedAssigned_to2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact2 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contact2?.setAssigned_to) {
    await Contact2.setAssigned_to(relatedAssigned_to2);
  }

  const relatedAssigned_to3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact3 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contact3?.setAssigned_to) {
    await Contact3.setAssigned_to(relatedAssigned_to3);
  }
}

async function associateEstimateWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Estimate0 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Estimate0?.setRelated_contact) {
    await Estimate0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Estimate1 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Estimate1?.setRelated_contact) {
    await Estimate1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Estimate2 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Estimate2?.setRelated_contact) {
    await Estimate2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Estimate3 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Estimate3?.setRelated_contact) {
    await Estimate3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateEstimateWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Estimate0 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Estimate0?.setRelated_job) {
    await Estimate0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Estimate1 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Estimate1?.setRelated_job) {
    await Estimate1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Estimate2 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Estimate2?.setRelated_job) {
    await Estimate2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Estimate3 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Estimate3?.setRelated_job) {
    await Estimate3.setRelated_job(relatedRelated_job3);
  }
}

async function associateJobWithAssigned_to() {
  const relatedAssigned_to0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Job0 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Job0?.setAssigned_to) {
    await Job0.setAssigned_to(relatedAssigned_to0);
  }

  const relatedAssigned_to1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Job1 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Job1?.setAssigned_to) {
    await Job1.setAssigned_to(relatedAssigned_to1);
  }

  const relatedAssigned_to2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Job2 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Job2?.setAssigned_to) {
    await Job2.setAssigned_to(relatedAssigned_to2);
  }

  const relatedAssigned_to3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Job3 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Job3?.setAssigned_to) {
    await Job3.setAssigned_to(relatedAssigned_to3);
  }
}

async function associateJobWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Job0 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Job0?.setRelated_contact) {
    await Job0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Job1 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Job1?.setRelated_contact) {
    await Job1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Job2 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Job2?.setRelated_contact) {
    await Job2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Job3 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Job3?.setRelated_contact) {
    await Job3.setRelated_contact(relatedRelated_contact3);
  }
}

// Similar logic for "relation_many"

async function associateInvoiceWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Invoice0 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Invoice0?.setRelated_job) {
    await Invoice0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Invoice1 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Invoice1?.setRelated_job) {
    await Invoice1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Invoice2 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Invoice2?.setRelated_job) {
    await Invoice2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Invoice3 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Invoice3?.setRelated_job) {
    await Invoice3.setRelated_job(relatedRelated_job3);
  }
}

async function associateOrderWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setRelated_job) {
    await Order0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setRelated_job) {
    await Order1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setRelated_job) {
    await Order2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setRelated_job) {
    await Order3.setRelated_job(relatedRelated_job3);
  }
}

async function associateOrderWithRelated_estimate() {
  const relatedRelated_estimate0 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Order0 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Order0?.setRelated_estimate) {
    await Order0.setRelated_estimate(relatedRelated_estimate0);
  }

  const relatedRelated_estimate1 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Order1 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Order1?.setRelated_estimate) {
    await Order1.setRelated_estimate(relatedRelated_estimate1);
  }

  const relatedRelated_estimate2 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Order2 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Order2?.setRelated_estimate) {
    await Order2.setRelated_estimate(relatedRelated_estimate2);
  }

  const relatedRelated_estimate3 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Order3 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Order3?.setRelated_estimate) {
    await Order3.setRelated_estimate(relatedRelated_estimate3);
  }
}

async function associateImageWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Image0 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Image0?.setRelated_job) {
    await Image0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Image1 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Image1?.setRelated_job) {
    await Image1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Image2 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Image2?.setRelated_job) {
    await Image2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Image3 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Image3?.setRelated_job) {
    await Image3.setRelated_job(relatedRelated_job3);
  }
}

async function associateImageWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Image0 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Image0?.setRelated_contact) {
    await Image0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Image1 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Image1?.setRelated_contact) {
    await Image1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Image2 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Image2?.setRelated_contact) {
    await Image2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Image3 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Image3?.setRelated_contact) {
    await Image3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateDocumentWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setRelated_job) {
    await Document0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setRelated_job) {
    await Document1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setRelated_job) {
    await Document2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setRelated_job) {
    await Document3.setRelated_job(relatedRelated_job3);
  }
}

async function associateDocumentWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document0 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Document0?.setRelated_contact) {
    await Document0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document1 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Document1?.setRelated_contact) {
    await Document1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document2 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Document2?.setRelated_contact) {
    await Document2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document3 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Document3?.setRelated_contact) {
    await Document3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateEmailWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setRelated_job) {
    await Email0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setRelated_job) {
    await Email1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setRelated_job) {
    await Email2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setRelated_job) {
    await Email3.setRelated_job(relatedRelated_job3);
  }
}

async function associateEmailWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setRelated_contact) {
    await Email0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setRelated_contact) {
    await Email1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setRelated_contact) {
    await Email2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setRelated_contact) {
    await Email3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateEmailWithRelated_user() {
  const relatedRelated_user0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email0 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Email0?.setRelated_user) {
    await Email0.setRelated_user(relatedRelated_user0);
  }

  const relatedRelated_user1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email1 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Email1?.setRelated_user) {
    await Email1.setRelated_user(relatedRelated_user1);
  }

  const relatedRelated_user2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email2 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Email2?.setRelated_user) {
    await Email2.setRelated_user(relatedRelated_user2);
  }

  const relatedRelated_user3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email3 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Email3?.setRelated_user) {
    await Email3.setRelated_user(relatedRelated_user3);
  }
}

async function associateChatWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Chat0 = await Chats.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Chat0?.setRelated_job) {
    await Chat0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Chat1 = await Chats.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Chat1?.setRelated_job) {
    await Chat1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Chat2 = await Chats.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Chat2?.setRelated_job) {
    await Chat2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Chat3 = await Chats.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Chat3?.setRelated_job) {
    await Chat3.setRelated_job(relatedRelated_job3);
  }
}

// Similar logic for "relation_many"

async function associateAppointmentWithAssigned_to() {
  const relatedAssigned_to0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setAssigned_to) {
    await Appointment0.setAssigned_to(relatedAssigned_to0);
  }

  const relatedAssigned_to1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setAssigned_to) {
    await Appointment1.setAssigned_to(relatedAssigned_to1);
  }

  const relatedAssigned_to2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setAssigned_to) {
    await Appointment2.setAssigned_to(relatedAssigned_to2);
  }

  const relatedAssigned_to3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setAssigned_to) {
    await Appointment3.setAssigned_to(relatedAssigned_to3);
  }
}

async function associateAppointmentWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setRelated_job) {
    await Appointment0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setRelated_job) {
    await Appointment1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setRelated_job) {
    await Appointment2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setRelated_job) {
    await Appointment3.setRelated_job(relatedRelated_job3);
  }
}

async function associateAppointmentWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Appointment0 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Appointment0?.setRelated_contact) {
    await Appointment0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Appointment1 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Appointment1?.setRelated_contact) {
    await Appointment1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Appointment2 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Appointment2?.setRelated_contact) {
    await Appointment2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Appointment3 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Appointment3?.setRelated_contact) {
    await Appointment3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateTaskWithAssigned_to() {
  const relatedAssigned_to0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setAssigned_to) {
    await Task0.setAssigned_to(relatedAssigned_to0);
  }

  const relatedAssigned_to1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setAssigned_to) {
    await Task1.setAssigned_to(relatedAssigned_to1);
  }

  const relatedAssigned_to2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setAssigned_to) {
    await Task2.setAssigned_to(relatedAssigned_to2);
  }

  const relatedAssigned_to3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setAssigned_to) {
    await Task3.setAssigned_to(relatedAssigned_to3);
  }
}

async function associateTaskWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Task0 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Task0?.setRelated_job) {
    await Task0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Task1 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Task1?.setRelated_job) {
    await Task1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Task2 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Task2?.setRelated_job) {
    await Task2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Task3 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Task3?.setRelated_job) {
    await Task3.setRelated_job(relatedRelated_job3);
  }
}

async function associateContractWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Contract0 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contract0?.setRelated_contact) {
    await Contract0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Contract1 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contract1?.setRelated_contact) {
    await Contract1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Contract2 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contract2?.setRelated_contact) {
    await Contract2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Contract3 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contract3?.setRelated_contact) {
    await Contract3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateContractWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Contract0 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Contract0?.setRelated_job) {
    await Contract0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Contract1 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Contract1?.setRelated_job) {
    await Contract1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Contract2 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Contract2?.setRelated_job) {
    await Contract2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Contract3 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Contract3?.setRelated_job) {
    await Contract3.setRelated_job(relatedRelated_job3);
  }
}

async function associateAmendmentWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Amendment0 = await Amendments.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Amendment0?.setRelated_job) {
    await Amendment0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Amendment1 = await Amendments.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Amendment1?.setRelated_job) {
    await Amendment1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Amendment2 = await Amendments.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Amendment2?.setRelated_job) {
    await Amendment2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Amendment3 = await Amendments.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Amendment3?.setRelated_job) {
    await Amendment3.setRelated_job(relatedRelated_job3);
  }
}

async function associateEstimateSectionWithRelated_estimate() {
  const relatedRelated_estimate0 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const EstimateSection0 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (EstimateSection0?.setRelated_estimate) {
    await EstimateSection0.setRelated_estimate(relatedRelated_estimate0);
  }

  const relatedRelated_estimate1 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const EstimateSection1 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (EstimateSection1?.setRelated_estimate) {
    await EstimateSection1.setRelated_estimate(relatedRelated_estimate1);
  }

  const relatedRelated_estimate2 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const EstimateSection2 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (EstimateSection2?.setRelated_estimate) {
    await EstimateSection2.setRelated_estimate(relatedRelated_estimate2);
  }

  const relatedRelated_estimate3 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const EstimateSection3 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (EstimateSection3?.setRelated_estimate) {
    await EstimateSection3.setRelated_estimate(relatedRelated_estimate3);
  }
}

async function associateEstimateSectionWithRelated_template() {
  const relatedRelated_template0 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const EstimateSection0 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (EstimateSection0?.setRelated_template) {
    await EstimateSection0.setRelated_template(relatedRelated_template0);
  }

  const relatedRelated_template1 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const EstimateSection1 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (EstimateSection1?.setRelated_template) {
    await EstimateSection1.setRelated_template(relatedRelated_template1);
  }

  const relatedRelated_template2 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const EstimateSection2 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (EstimateSection2?.setRelated_template) {
    await EstimateSection2.setRelated_template(relatedRelated_template2);
  }

  const relatedRelated_template3 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const EstimateSection3 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (EstimateSection3?.setRelated_template) {
    await EstimateSection3.setRelated_template(relatedRelated_template3);
  }
}

async function associateLaborTicketWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const LaborTicket0 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LaborTicket0?.setRelated_job) {
    await LaborTicket0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const LaborTicket1 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LaborTicket1?.setRelated_job) {
    await LaborTicket1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const LaborTicket2 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LaborTicket2?.setRelated_job) {
    await LaborTicket2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const LaborTicket3 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LaborTicket3?.setRelated_job) {
    await LaborTicket3.setRelated_job(relatedRelated_job3);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateLaborTicketWithRelated_order() {
  const relatedRelated_order0 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const LaborTicket0 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (LaborTicket0?.setRelated_order) {
    await LaborTicket0.setRelated_order(relatedRelated_order0);
  }

  const relatedRelated_order1 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const LaborTicket1 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (LaborTicket1?.setRelated_order) {
    await LaborTicket1.setRelated_order(relatedRelated_order1);
  }

  const relatedRelated_order2 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const LaborTicket2 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (LaborTicket2?.setRelated_order) {
    await LaborTicket2.setRelated_order(relatedRelated_order2);
  }

  const relatedRelated_order3 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const LaborTicket3 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (LaborTicket3?.setRelated_order) {
    await LaborTicket3.setRelated_order(relatedRelated_order3);
  }
}

// Similar logic for "relation_many"

// Similar logic for "relation_many"

async function associateHistoryWithRelated_estimate() {
  const relatedRelated_estimate0 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_estimate) {
    await History0.setRelated_estimate(relatedRelated_estimate0);
  }

  const relatedRelated_estimate1 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_estimate) {
    await History1.setRelated_estimate(relatedRelated_estimate1);
  }

  const relatedRelated_estimate2 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_estimate) {
    await History2.setRelated_estimate(relatedRelated_estimate2);
  }

  const relatedRelated_estimate3 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_estimate) {
    await History3.setRelated_estimate(relatedRelated_estimate3);
  }
}

async function associateHistoryWithRelated_invoice() {
  const relatedRelated_invoice0 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_invoice) {
    await History0.setRelated_invoice(relatedRelated_invoice0);
  }

  const relatedRelated_invoice1 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_invoice) {
    await History1.setRelated_invoice(relatedRelated_invoice1);
  }

  const relatedRelated_invoice2 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_invoice) {
    await History2.setRelated_invoice(relatedRelated_invoice2);
  }

  const relatedRelated_invoice3 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_invoice) {
    await History3.setRelated_invoice(relatedRelated_invoice3);
  }
}

async function associateHistoryWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_job) {
    await History0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_job) {
    await History1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_job) {
    await History2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_job) {
    await History3.setRelated_job(relatedRelated_job3);
  }
}

async function associateHistoryWithRelated_email() {
  const relatedRelated_email0 = await Emails.findOne({
    offset: Math.floor(Math.random() * (await Emails.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_email) {
    await History0.setRelated_email(relatedRelated_email0);
  }

  const relatedRelated_email1 = await Emails.findOne({
    offset: Math.floor(Math.random() * (await Emails.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_email) {
    await History1.setRelated_email(relatedRelated_email1);
  }

  const relatedRelated_email2 = await Emails.findOne({
    offset: Math.floor(Math.random() * (await Emails.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_email) {
    await History2.setRelated_email(relatedRelated_email2);
  }

  const relatedRelated_email3 = await Emails.findOne({
    offset: Math.floor(Math.random() * (await Emails.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_email) {
    await History3.setRelated_email(relatedRelated_email3);
  }
}

async function associateHistoryWithRelated_labor_ticket() {
  const relatedRelated_labor_ticket0 = await LaborTicket.findOne({
    offset: Math.floor(Math.random() * (await LaborTicket.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_labor_ticket) {
    await History0.setRelated_labor_ticket(relatedRelated_labor_ticket0);
  }

  const relatedRelated_labor_ticket1 = await LaborTicket.findOne({
    offset: Math.floor(Math.random() * (await LaborTicket.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_labor_ticket) {
    await History1.setRelated_labor_ticket(relatedRelated_labor_ticket1);
  }

  const relatedRelated_labor_ticket2 = await LaborTicket.findOne({
    offset: Math.floor(Math.random() * (await LaborTicket.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_labor_ticket) {
    await History2.setRelated_labor_ticket(relatedRelated_labor_ticket2);
  }

  const relatedRelated_labor_ticket3 = await LaborTicket.findOne({
    offset: Math.floor(Math.random() * (await LaborTicket.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_labor_ticket) {
    await History3.setRelated_labor_ticket(relatedRelated_labor_ticket3);
  }
}

async function associateHistoryWithRelated_user() {
  const relatedRelated_user0 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_user) {
    await History0.setRelated_user(relatedRelated_user0);
  }

  const relatedRelated_user1 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_user) {
    await History1.setRelated_user(relatedRelated_user1);
  }

  const relatedRelated_user2 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_user) {
    await History2.setRelated_user(relatedRelated_user2);
  }

  const relatedRelated_user3 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_user) {
    await History3.setRelated_user(relatedRelated_user3);
  }
}

async function associateHistoryWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_contact) {
    await History0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_contact) {
    await History1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_contact) {
    await History2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_contact) {
    await History3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateHistoryWithRelated_appointment() {
  const relatedRelated_appointment0 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const History0 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (History0?.setRelated_appointment) {
    await History0.setRelated_appointment(relatedRelated_appointment0);
  }

  const relatedRelated_appointment1 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const History1 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (History1?.setRelated_appointment) {
    await History1.setRelated_appointment(relatedRelated_appointment1);
  }

  const relatedRelated_appointment2 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const History2 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (History2?.setRelated_appointment) {
    await History2.setRelated_appointment(relatedRelated_appointment2);
  }

  const relatedRelated_appointment3 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const History3 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (History3?.setRelated_appointment) {
    await History3.setRelated_appointment(relatedRelated_appointment3);
  }
}

async function associateAddressWithRelated_contact() {
  const relatedRelated_contact0 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Address0 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Address0?.setRelated_contact) {
    await Address0.setRelated_contact(relatedRelated_contact0);
  }

  const relatedRelated_contact1 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Address1 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Address1?.setRelated_contact) {
    await Address1.setRelated_contact(relatedRelated_contact1);
  }

  const relatedRelated_contact2 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Address2 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Address2?.setRelated_contact) {
    await Address2.setRelated_contact(relatedRelated_contact2);
  }

  const relatedRelated_contact3 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Address3 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Address3?.setRelated_contact) {
    await Address3.setRelated_contact(relatedRelated_contact3);
  }
}

async function associateAddressWithRelated_job() {
  const relatedRelated_job0 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Address0 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Address0?.setRelated_job) {
    await Address0.setRelated_job(relatedRelated_job0);
  }

  const relatedRelated_job1 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Address1 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Address1?.setRelated_job) {
    await Address1.setRelated_job(relatedRelated_job1);
  }

  const relatedRelated_job2 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Address2 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Address2?.setRelated_job) {
    await Address2.setRelated_job(relatedRelated_job2);
  }

  const relatedRelated_job3 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Address3 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Address3?.setRelated_job) {
    await Address3.setRelated_job(relatedRelated_job3);
  }
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await Contacts.bulkCreate(ContactsData);

    await Estimates.bulkCreate(EstimatesData);

    await Jobs.bulkCreate(JobsData);

    await Templates.bulkCreate(TemplatesData);

    await Trades.bulkCreate(TradesData);

    await Invoices.bulkCreate(InvoicesData);

    await Orders.bulkCreate(OrdersData);

    await Images.bulkCreate(ImagesData);

    await Documents.bulkCreate(DocumentsData);

    await Emails.bulkCreate(EmailsData);

    await Chats.bulkCreate(ChatsData);

    await Appointments.bulkCreate(AppointmentsData);

    await Tasks.bulkCreate(TasksData);

    await Contracts.bulkCreate(ContractsData);

    await Amendments.bulkCreate(AmendmentsData);

    await EstimateSections.bulkCreate(EstimateSectionsData);

    await ContactPhones.bulkCreate(ContactPhonesData);

    await ContactEmails.bulkCreate(ContactEmailsData);

    await LaborTicket.bulkCreate(LaborTicketData);

    await Crew.bulkCreate(CrewData);

    await Subcontractor.bulkCreate(SubcontractorData);

    await History.bulkCreate(HistoryData);

    await Address.bulkCreate(AddressData);

    await Promise.all([
      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateContactWithAssigned_to(),

      await associateEstimateWithRelated_contact(),

      await associateEstimateWithRelated_job(),

      await associateJobWithAssigned_to(),

      await associateJobWithRelated_contact(),

      // Similar logic for "relation_many"

      await associateInvoiceWithRelated_job(),

      await associateOrderWithRelated_job(),

      await associateOrderWithRelated_estimate(),

      await associateImageWithRelated_job(),

      await associateImageWithRelated_contact(),

      await associateDocumentWithRelated_job(),

      await associateDocumentWithRelated_contact(),

      await associateEmailWithRelated_job(),

      await associateEmailWithRelated_contact(),

      await associateEmailWithRelated_user(),

      await associateChatWithRelated_job(),

      // Similar logic for "relation_many"

      await associateAppointmentWithAssigned_to(),

      await associateAppointmentWithRelated_job(),

      await associateAppointmentWithRelated_contact(),

      await associateTaskWithAssigned_to(),

      await associateTaskWithRelated_job(),

      await associateContractWithRelated_contact(),

      await associateContractWithRelated_job(),

      await associateAmendmentWithRelated_job(),

      await associateEstimateSectionWithRelated_estimate(),

      await associateEstimateSectionWithRelated_template(),

      await associateLaborTicketWithRelated_job(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateLaborTicketWithRelated_order(),

      // Similar logic for "relation_many"

      // Similar logic for "relation_many"

      await associateHistoryWithRelated_estimate(),

      await associateHistoryWithRelated_invoice(),

      await associateHistoryWithRelated_job(),

      await associateHistoryWithRelated_email(),

      await associateHistoryWithRelated_labor_ticket(),

      await associateHistoryWithRelated_user(),

      await associateHistoryWithRelated_contact(),

      await associateHistoryWithRelated_appointment(),

      await associateAddressWithRelated_contact(),

      await associateAddressWithRelated_job(),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('contacts', null, {});

    await queryInterface.bulkDelete('estimates', null, {});

    await queryInterface.bulkDelete('jobs', null, {});

    await queryInterface.bulkDelete('templates', null, {});

    await queryInterface.bulkDelete('trades', null, {});

    await queryInterface.bulkDelete('invoices', null, {});

    await queryInterface.bulkDelete('orders', null, {});

    await queryInterface.bulkDelete('images', null, {});

    await queryInterface.bulkDelete('documents', null, {});

    await queryInterface.bulkDelete('emails', null, {});

    await queryInterface.bulkDelete('chats', null, {});

    await queryInterface.bulkDelete('appointments', null, {});

    await queryInterface.bulkDelete('tasks', null, {});

    await queryInterface.bulkDelete('contracts', null, {});

    await queryInterface.bulkDelete('amendments', null, {});

    await queryInterface.bulkDelete('estimate_sections', null, {});

    await queryInterface.bulkDelete('contact_phones', null, {});

    await queryInterface.bulkDelete('contact_emails', null, {});

    await queryInterface.bulkDelete('labor_ticket', null, {});

    await queryInterface.bulkDelete('crew', null, {});

    await queryInterface.bulkDelete('subcontractor', null, {});

    await queryInterface.bulkDelete('history', null, {});

    await queryInterface.bulkDelete('address', null, {});
  },
};
