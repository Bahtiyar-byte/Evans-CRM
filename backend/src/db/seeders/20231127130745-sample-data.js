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
    name: 'Robert Koch',

    email: 'petra_shanahan@cole.net',

    phone: '1-248-345-6892 x02942',

    address: 'Apt. 765 90043 Cassidy Prairie, Nikolausmouth, KY 81161-5136',

    status: 'Customer',

    firstName: 'I tell you what',

    lastName: 'Come on now',

    source: 'Google Ads',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Property Management',

    work_type: 'Service',

    referral: "I'm washing my hands of it",

    company: 'Anderson LLC',
  },

  {
    name: 'Willard Libby',

    email: 'arlene@gibson-simonis.co',

    phone: '675.379.9492 x117',

    address: '82955 Luna Ramp, New Lilla, MA 82725',

    status: 'Lead',

    firstName: 'That damn Bill Stull',

    lastName: 'That damn diabetes',

    source: 'Website',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Residential',

    work_type: 'Insurance',

    referral: 'I got that scurvy',

    company: 'Wiza LLC',
  },

  {
    name: 'Michael Faraday',

    email: 'stewart.hintz@legros-mertz.name',

    phone: '570-024-9985 x704',

    address: 'Suite 949 5270 Malisa Trail, Celsashire, MI 27879-4581',

    status: 'Prospect',

    firstName: 'That damn Bill Stull',

    lastName: 'I want my 5$ back',

    source: 'Facebook',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Property Management',

    work_type: 'Service',

    referral: 'No one tells me shit',

    company: 'Okuneva, Lowe and DuBuque',
  },

  {
    name: 'Dmitri Mendeleev',

    email: 'palmer_shields@hills.co',

    phone: '1-188-494-5449 x11799',

    address: '50471 Chassidy Springs, Port Gregorymouth, ND 26056-0950',

    status: 'Customer',

    firstName: "I'm washing my hands of it",

    lastName: 'I want my 5$ back',

    source: 'Facebook',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Commercial',

    work_type: 'New',

    referral: 'I got that scurvy',

    company: 'Mitchell-Schultz',
  },

  {
    name: 'Dmitri Mendeleev',

    email: 'vince_hoppe@bailey.name',

    phone: '817-027-9504',

    address: '9986 Charlsie Fords, New Gregory, OK 45578-6151',

    status: 'Lead',

    firstName: 'That damn Bill Stull',

    lastName: 'Might be DQ time',

    source: 'Facebook',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Property Management',

    work_type: 'Inspection',

    referral: "That's messed up",

    company: 'Macejkovic-Senger',
  },
];

const EstimatesData = [
  {
    name: 'Ernst Mayr',

    description: 'Reckless he is. Matters are worse.',

    trade: 'So I was walking Oscar',

    template_used: 'That damn gimble',

    material_cost: 58.39,

    labor_cost: 52.95,

    markup: 24.56,

    profit_margin: 91.84,

    total_price: 71.81,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Approved',
  },

  {
    name: 'August Kekule',

    description: 'Ow, ow, OW! On my ear you are!',

    trade: 'That damn diabetes',

    template_used: "Y'all never listen to me",

    material_cost: 77.46,

    labor_cost: 51.68,

    markup: 39.36,

    profit_margin: 78.36,

    total_price: 67.18,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },

  {
    name: 'B. F. Skinner',

    description: 'Luminous beings are we - not this crude matter.',

    trade: 'Always the last one to the party',

    template_used: 'No one tells me shit',

    material_cost: 32.58,

    labor_cost: 55.89,

    markup: 49.69,

    profit_margin: 62.46,

    total_price: 34.22,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Approved',
  },

  {
    name: 'George Gaylord Simpson',

    description:
      'The dark side clouds everything. Impossible to see the future is.',

    trade: 'That damn gimble',

    template_used: "Y'all never listen to me",

    material_cost: 93.16,

    labor_cost: 26.85,

    markup: 34.28,

    profit_margin: 39.14,

    total_price: 36.02,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'New',
  },

  {
    name: 'Paul Dirac',

    description: 'Ow, ow, OW! On my ear you are!',

    trade: 'Turd gone wrong',

    template_used: 'That damn Bill Stull',

    material_cost: 75.87,

    labor_cost: 86.28,

    markup: 32.45,

    profit_margin: 39.71,

    total_price: 85.93,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },
];

const JobsData = [
  {
    name: 'Jean Baptiste Lamarck',

    description:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    category: 'Commercial',

    type: 'Service',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '71065 Rohan Wall, Wolfstad, MO 58333',

    start_date: new Date('2024-01-04'),

    end_date: new Date('2024-06-27'),
  },

  {
    name: 'William Herschel',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    category: 'PropertyManagement',

    type: 'Warranty',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '617 Deena Skyway, East Jarvis, NC 29978-0812',

    start_date: new Date('2024-07-16'),

    end_date: new Date('2023-11-02'),
  },

  {
    name: 'Anton van Leeuwenhoek',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    category: 'Commercial',

    type: 'Insurance',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 716 6905 Maudie Flats, West Clementeside, PA 26226',

    start_date: new Date('2024-05-29'),

    end_date: new Date('2024-05-12'),
  },

  {
    name: 'B. F. Skinner',

    description:
      'Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.',

    category: 'PropertyManagement',

    type: 'New',

    status: 'Active',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '913 Arlen Ferry, Zacheryville, NC 08775',

    start_date: new Date('2024-05-06'),

    end_date: new Date('2024-04-04'),
  },

  {
    name: 'Linus Pauling',

    description: 'Always pass on what you have learned.',

    category: 'Commercial',

    type: 'Service',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 691 7214 Sammie Ville, East Sixtaville, TX 40681-9187',

    start_date: new Date('2023-11-06'),

    end_date: new Date('2024-09-15'),
  },
];

const TemplatesData = [
  {
    name: 'Marcello Malpighi',

    description: 'Do. Or do not. There is no try.',

    // type code here for "relation_many" field

    is_email_template: true,
  },

  {
    name: 'Rudolf Virchow',

    description: 'Feel the force!',

    // type code here for "relation_many" field

    is_email_template: false,
  },

  {
    name: 'Franz Boas',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    // type code here for "relation_many" field

    is_email_template: true,
  },

  {
    name: 'Karl Landsteiner',

    description: 'Your weapons, you will not need them.',

    // type code here for "relation_many" field

    is_email_template: false,
  },

  {
    name: 'Noam Chomsky',

    description: 'Adventure. Excitement. A Jedi craves not these things.',

    // type code here for "relation_many" field

    is_email_template: true,
  },
];

const TradesData = [
  {
    name: 'Sigmund Freud',
  },

  {
    name: 'Thomas Hunt Morgan',
  },

  {
    name: 'Jean Baptiste Lamarck',
  },

  {
    name: 'Comte de Buffon',
  },

  {
    name: 'Konrad Lorenz',
  },
];

const InvoicesData = [
  {
    invoice_number: 'Reminds me of my old girlfriend Olga Goodntight',

    invoice_date: new Date('2023-11-11'),

    terms: 'Net 60 Days',

    approved_job_value: 54.65,

    balance_amount: 62.85,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Always the last one to the party',

    invoice_date: new Date('2024-05-22'),

    terms: 'Upon Receipt',

    approved_job_value: 15.08,

    balance_amount: 90.92,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'That damn Bill Stull',

    invoice_date: new Date('2024-06-25'),

    terms: 'By Due Date',

    approved_job_value: 34.69,

    balance_amount: 21.02,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "Y'all never listen to me",

    invoice_date: new Date('2023-12-10'),

    terms: 'Net 10 Days',

    approved_job_value: 87.37,

    balance_amount: 90.57,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Turd gone wrong',

    invoice_date: new Date('2024-01-09'),

    terms: 'Net 60 Days',

    approved_job_value: 89.63,

    balance_amount: 15.27,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: "It's around here somewhere",

    total_amount: 16.24,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Yup',

    total_amount: 28.41,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'That damn diabetes',

    total_amount: 43.45,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'I want my 5$ back',

    total_amount: 81.82,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: "I'm washing my hands of it",

    total_amount: 49.06,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagesData = [
  {
    // type code here for "images" field

    Name: 'I tell you what',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: "Y'all never listen to me",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Got depression, Smith and Wessen',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    name: 'Ernest Rutherford',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Louis Pasteur',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'George Gaylord Simpson',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Louis Victor de Broglie',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Hans Bethe',

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

    name: 'Francis Galton',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'B. F. Skinner',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Karl Landsteiner',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'J. Robert Oppenheimer',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Leonard Euler',
  },
];

const AppointmentsData = [
  {
    subject: 'No one tells me shit',

    start_time: new Date('2023-11-23'),

    end_time: new Date('2024-03-31'),

    notes: 'Strong is Vader. Mind what you have learned. Save you it can.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That damn gimble',

    start_time: new Date('2024-09-04'),

    end_time: new Date('2023-12-08'),

    notes: 'At an end your rule is, and not short enough it was!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That goddamn Datamate',

    start_time: new Date('2023-11-28'),

    end_time: new Date('2024-04-19'),

    notes:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'I want my damn cart back',

    start_time: new Date('2024-04-13'),

    end_time: new Date('2024-08-03'),

    notes: 'Do. Or do not. There is no try.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: "How 'bout them Cowboys",

    start_time: new Date('2023-12-14'),

    end_time: new Date('2024-07-21'),

    notes: 'You will find only what you bring in.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: 'That damn gimble',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'High',

    due_date: new Date('2024-09-07'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Yup',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Low',

    due_date: new Date('2024-04-24'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Texas!',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'Medium',

    due_date: new Date('2024-01-16'),

    // type code here for "relation_one" field
  },

  {
    subject: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'Low',

    due_date: new Date('2024-06-22'),

    // type code here for "relation_one" field
  },

  {
    subject: 'I want my damn cart back',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'High',

    due_date: new Date('2024-03-07'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Ernst Haeckel',

    amount: 98.77,

    body: 'Difficult to see. Always in motion is the future...',

    // type code here for "relation_one" field

    signed_date: new Date('2023-11-19'),

    // type code here for "relation_one" field
  },

  {
    name: 'Theodosius Dobzhansky',

    amount: 44.49,

    body: 'Reckless he is. Matters are worse.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-09-11'),

    // type code here for "relation_one" field
  },

  {
    name: 'Edward Teller',

    amount: 52.29,

    body: 'Already know you that which you need.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-09-08'),

    // type code here for "relation_one" field
  },

  {
    name: 'John von Neumann',

    amount: 33.95,

    body: 'Do. Or do not. There is no try.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-05-25'),

    // type code here for "relation_one" field
  },

  {
    name: 'Joseph J. Thomson',

    amount: 69.88,

    body: 'Luminous beings are we - not this crude matter.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-03-25'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 47.49,

    description:
      'Much to learn you still have my old padawan. ... This is just the beginning!',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 53.99,

    description:
      'Strong is Vader. Mind what you have learned. Save you it can.',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 34.87,

    description:
      'Clear your mind must be, if you are to find the villains behind this plot.',
  },

  {
    // type code here for "relation_one" field

    type: 'Supplement',

    amount: 94.51,

    description:
      'Always two there are, no more, no less. A master and an apprentice.',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 37.68,

    description: 'Good relations with the Wookiees, I have.',
  },
];

const EstimateSectionsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 62.02,

    material_price: 63.79,

    labor_price: 51.42,

    name: 'Albrecht von Haller',

    description: 'Use your feelings, Obi-Wan, and find him you will.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 83.58,

    material_price: 89.67,

    labor_price: 56.77,

    name: 'Max Born',

    description: 'At an end your rule is, and not short enough it was!',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 76.88,

    material_price: 50.27,

    labor_price: 12.48,

    name: 'Albrecht von Haller',

    description:
      'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 23.22,

    material_price: 65.45,

    labor_price: 65.72,

    name: 'Isaac Newton',

    description: 'Adventure. Excitement. A Jedi craves not these things.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 93.97,

    material_price: 88.45,

    labor_price: 80.54,

    name: 'Dmitri Mendeleev',

    description: 'At an end your rule is, and not short enough it was!',
  },
];

const ContactPhonesData = [
  {
    phone_number: 'Contact the tower',

    type: 'mobile',

    is_primary: true,
  },

  {
    phone_number: 'Texas!',

    type: 'work',

    is_primary: false,
  },

  {
    phone_number: "That's messed up",

    type: 'mobile',

    is_primary: true,
  },

  {
    phone_number: 'I want my 5$ back',

    type: 'home',

    is_primary: false,
  },

  {
    phone_number: 'Turd gone wrong',

    type: 'work',

    is_primary: true,
  },
];

const ContactEmailsData = [
  {
    email: 'leslie.reynolds@renner-mayert.net',

    type: 'other',
  },

  {
    email: 'nick.koch@parker.biz',

    type: 'work',
  },

  {
    email: 'ollie_dubuque@johnston.io',

    type: 'personal',
  },

  {
    email: 'mechelle_kunze@weissnat.io',

    type: 'personal',
  },

  {
    email: 'ferdinand@harber.info',

    type: 'other',
  },
];

const LaborTicketData = [
  {
    name: 'Isaac Newton',

    // type code here for "relation_one" field

    start_date: new Date('2023-10-07'),

    end_date: new Date('2024-02-07'),

    crew_instructions: 'Truly wonderful, the mind of a child is.',

    actual_start_time: new Date('2024-07-03'),

    actual_end_time: new Date('2024-01-20'),

    crew_actions: 'Checked In',

    labor_progress: 'Partially Complete',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer: 'Truly wonderful, the mind of a child is.',

    assigned_date: new Date('2024-03-29'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Alfred Binet',

    // type code here for "relation_one" field

    start_date: new Date('2024-04-14'),

    end_date: new Date('2024-04-13'),

    crew_instructions: 'Good relations with the Wookiees, I have.',

    actual_start_time: new Date('2024-04-27'),

    actual_end_time: new Date('2024-06-14'),

    crew_actions: 'Postponed',

    labor_progress: 'Partially Complete',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    assigned_date: new Date('2024-06-17'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'William Herschel',

    // type code here for "relation_one" field

    start_date: new Date('2024-02-02'),

    end_date: new Date('2023-11-15'),

    crew_instructions: 'Younglings, younglings gather ’round.',

    actual_start_time: new Date('2024-01-17'),

    actual_end_time: new Date('2024-07-06'),

    crew_actions: 'Checked In',

    labor_progress: 'Partially Complete',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer: 'Truly wonderful, the mind of a child is.',

    assigned_date: new Date('2024-04-06'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Leonard Euler',

    // type code here for "relation_one" field

    start_date: new Date('2024-02-23'),

    end_date: new Date('2024-03-12'),

    crew_instructions: 'Truly wonderful, the mind of a child is.',

    actual_start_time: new Date('2024-06-17'),

    actual_end_time: new Date('2024-02-18'),

    crew_actions: 'Checked In',

    labor_progress: 'Completed',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer: 'At an end your rule is, and not short enough it was!',

    assigned_date: new Date('2024-08-04'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Joseph J. Thomson',

    // type code here for "relation_one" field

    start_date: new Date('2023-11-02'),

    end_date: new Date('2024-01-27'),

    crew_instructions:
      'Hmm. In the end, cowards are those who follow the dark side.',

    actual_start_time: new Date('2023-10-26'),

    actual_end_time: new Date('2024-07-12'),

    crew_actions: 'Postponed',

    labor_progress: 'Delayed',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away - to the future, to the horizon. Never his mind on where he was. Hmm? What he was doing. Hmph. Adventure. Heh. Excitement. Heh. A Jedi craves not these things. You are reckless.',

    assigned_date: new Date('2024-03-25'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const CrewData = [
  {
    name: 'Andreas Vesalius',

    // type code here for "relation_many" field

    color: "That Barbala couldn't fly his way out of a wet paper bag",
  },

  {
    name: 'Ernst Haeckel',

    // type code here for "relation_many" field

    color: "C'mon Naomi",
  },

  {
    name: 'Max Born',

    // type code here for "relation_many" field

    color: "That Barbala couldn't fly his way out of a wet paper bag",
  },

  {
    name: 'Galileo Galilei',

    // type code here for "relation_many" field

    color: 'I tell you what',
  },

  {
    name: 'Carl Linnaeus',

    // type code here for "relation_many" field

    color: 'Contact the tower',
  },
];

const SubcontractorData = [
  {
    name: 'Claude Bernard',

    first_name: 'So I was walking Oscar',

    last_name: 'No one tells me shit',

    address: '490 Treutel Prairie, East Katelin, FL 43492',

    phone: '396.667.0424 x371',

    mobile_phone: 'I want my damn cart back',

    // type code here for "relation_many" field

    entity_name: "That Barbala couldn't fly his way out of a wet paper bag",
  },

  {
    name: 'Albert Einstein',

    first_name: 'Got depression, Smith and Wessen',

    last_name: 'No one tells me shit',

    address: 'Apt. 427 23077 Wuckert Gateway, East Brynnfurt, MD 44815-0413',

    phone: '711-581-7702',

    mobile_phone: 'Turd gone wrong',

    // type code here for "relation_many" field

    entity_name: 'I want my 5$ back',
  },

  {
    name: 'Pierre Simon de Laplace',

    first_name: 'Got depression, Smith and Wessen',

    last_name: 'My buddy Harlen',

    address: '5365 Lockman Passage, Mertzstad, RI 12740-9934',

    phone: '(781) 238-1978 x37895',

    mobile_phone: 'Contact the tower',

    // type code here for "relation_many" field

    entity_name: 'I want my damn cart back',
  },

  {
    name: 'Frederick Gowland Hopkins',

    first_name: 'Like a red-headed stepchild',

    last_name: 'Might be DQ time',

    address: '37111 Wehner Motorway, Beahanville, IL 95107-9213',

    phone: '276-488-5660',

    mobile_phone: 'I tell you what',

    // type code here for "relation_many" field

    entity_name: "Goin' hog huntin'",
  },

  {
    name: 'Ernst Mayr',

    first_name: 'Reminds me of my old girlfriend Olga Goodntight',

    last_name: "That Barbala couldn't fly his way out of a wet paper bag",

    address: '44540 John Freeway, Lake Mack, ND 18122-5976',

    phone: '623-521-8255 x5844',

    mobile_phone: "Goin' hog huntin'",

    // type code here for "relation_many" field

    entity_name: 'Standby',
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

    action_description:
      "That Barbala couldn't fly his way out of a wet paper bag",

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

    action_description: 'I want my damn cart back',

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

    action_description: "Y'all never listen to me",

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

    action_description: 'Got depression, Smith and Wessen',

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

    action_description:
      "That Barbala couldn't fly his way out of a wet paper bag",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const AddressData = [
  {
    street: 'So I was walking Oscar',

    suite_apt_unit: "Y'all never listen to me",

    city: "That Barbala couldn't fly his way out of a wet paper bag",

    state: 'AZ',

    zip: "I'm washing my hands of it",

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: true,

    is_location: false,

    is_billing_Address: true,

    // type code here for "relation_one" field

    latitude: 31.81,

    longitude: 64.66,
  },

  {
    street: 'Come on now',

    suite_apt_unit: 'No one tells me shit',

    city: "C'mon Naomi",

    state: 'AK',

    zip: "Goin' hog huntin'",

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: false,

    is_billing_Address: false,

    // type code here for "relation_one" field

    latitude: 14.23,

    longitude: 97.36,
  },

  {
    street: 'Always the last one to the party',

    suite_apt_unit: 'That damn diabetes',

    city: 'So I was walking Oscar',

    state: 'AL',

    zip: "That Barbala couldn't fly his way out of a wet paper bag",

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: true,

    is_location: true,

    is_billing_Address: false,

    // type code here for "relation_one" field

    latitude: 40.85,

    longitude: 71.49,
  },

  {
    street: 'Like a red-headed stepchild',

    suite_apt_unit: 'That damn gimble',

    city: 'Come on now',

    state: 'AK',

    zip: 'So I was walking Oscar',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: true,

    is_location: true,

    is_billing_Address: false,

    // type code here for "relation_one" field

    latitude: 87.85,

    longitude: 29.01,
  },

  {
    street: 'Yup',

    suite_apt_unit: 'I tell you what',

    city: "I'm washing my hands of it",

    state: 'AR',

    zip: 'My buddy Harlen',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: false,

    is_billing_Address: true,

    // type code here for "relation_one" field

    latitude: 13.07,

    longitude: 47.47,
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

  const relatedAssigned_to4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Contact4 = await Contacts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contact4?.setAssigned_to) {
    await Contact4.setAssigned_to(relatedAssigned_to4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Estimate4 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Estimate4?.setRelated_contact) {
    await Estimate4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Estimate4 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Estimate4?.setRelated_job) {
    await Estimate4.setRelated_job(relatedRelated_job4);
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

  const relatedAssigned_to4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Job4 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Job4?.setAssigned_to) {
    await Job4.setAssigned_to(relatedAssigned_to4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Job4 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Job4?.setRelated_contact) {
    await Job4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Invoice4 = await Invoices.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Invoice4?.setRelated_job) {
    await Invoice4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setRelated_job) {
    await Order4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_estimate4 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Order4 = await Orders.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Order4?.setRelated_estimate) {
    await Order4.setRelated_estimate(relatedRelated_estimate4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Image4 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Image4?.setRelated_job) {
    await Image4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Image4 = await Images.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Image4?.setRelated_contact) {
    await Image4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Document4 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Document4?.setRelated_job) {
    await Document4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Document4 = await Documents.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Document4?.setRelated_contact) {
    await Document4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Email4 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Email4?.setRelated_job) {
    await Email4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Email4 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Email4?.setRelated_contact) {
    await Email4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_user4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Email4 = await Emails.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Email4?.setRelated_user) {
    await Email4.setRelated_user(relatedRelated_user4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Chat4 = await Chats.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Chat4?.setRelated_job) {
    await Chat4.setRelated_job(relatedRelated_job4);
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

  const relatedAssigned_to4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setAssigned_to) {
    await Appointment4.setAssigned_to(relatedAssigned_to4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setRelated_job) {
    await Appointment4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Appointment4 = await Appointments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Appointment4?.setRelated_contact) {
    await Appointment4.setRelated_contact(relatedRelated_contact4);
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

  const relatedAssigned_to4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const Task4 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Task4?.setAssigned_to) {
    await Task4.setAssigned_to(relatedAssigned_to4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Task4 = await Tasks.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Task4?.setRelated_job) {
    await Task4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Contract4 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contract4?.setRelated_contact) {
    await Contract4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Contract4 = await Contracts.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Contract4?.setRelated_job) {
    await Contract4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Amendment4 = await Amendments.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Amendment4?.setRelated_job) {
    await Amendment4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_estimate4 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const EstimateSection4 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (EstimateSection4?.setRelated_estimate) {
    await EstimateSection4.setRelated_estimate(relatedRelated_estimate4);
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

  const relatedRelated_template4 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const EstimateSection4 = await EstimateSections.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (EstimateSection4?.setRelated_template) {
    await EstimateSection4.setRelated_template(relatedRelated_template4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const LaborTicket4 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (LaborTicket4?.setRelated_job) {
    await LaborTicket4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_order4 = await Orders.findOne({
    offset: Math.floor(Math.random() * (await Orders.count())),
  });
  const LaborTicket4 = await LaborTicket.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (LaborTicket4?.setRelated_order) {
    await LaborTicket4.setRelated_order(relatedRelated_order4);
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

  const relatedRelated_estimate4 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_estimate) {
    await History4.setRelated_estimate(relatedRelated_estimate4);
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

  const relatedRelated_invoice4 = await Invoices.findOne({
    offset: Math.floor(Math.random() * (await Invoices.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_invoice) {
    await History4.setRelated_invoice(relatedRelated_invoice4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_job) {
    await History4.setRelated_job(relatedRelated_job4);
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

  const relatedRelated_email4 = await Emails.findOne({
    offset: Math.floor(Math.random() * (await Emails.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_email) {
    await History4.setRelated_email(relatedRelated_email4);
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

  const relatedRelated_labor_ticket4 = await LaborTicket.findOne({
    offset: Math.floor(Math.random() * (await LaborTicket.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_labor_ticket) {
    await History4.setRelated_labor_ticket(relatedRelated_labor_ticket4);
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

  const relatedRelated_user4 = await Users.findOne({
    offset: Math.floor(Math.random() * (await Users.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_user) {
    await History4.setRelated_user(relatedRelated_user4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_contact) {
    await History4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_appointment4 = await Appointments.findOne({
    offset: Math.floor(Math.random() * (await Appointments.count())),
  });
  const History4 = await History.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (History4?.setRelated_appointment) {
    await History4.setRelated_appointment(relatedRelated_appointment4);
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

  const relatedRelated_contact4 = await Contacts.findOne({
    offset: Math.floor(Math.random() * (await Contacts.count())),
  });
  const Address4 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Address4?.setRelated_contact) {
    await Address4.setRelated_contact(relatedRelated_contact4);
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

  const relatedRelated_job4 = await Jobs.findOne({
    offset: Math.floor(Math.random() * (await Jobs.count())),
  });
  const Address4 = await Address.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Address4?.setRelated_job) {
    await Address4.setRelated_job(relatedRelated_job4);
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
