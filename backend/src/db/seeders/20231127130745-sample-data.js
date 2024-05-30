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

const ContactsData = [
  {
    name: 'William Herschel',

    email: 'drucilla_haag@rempel.co',

    phone: '904-820-1026 x687',

    address: '7345 Rey Wells, Port Abel, ND 83490',

    status: 'Customer',

    firstName: 'Might be DQ time',

    lastName: 'Turd gone wrong',

    source: 'Google Ads',
  },

  {
    name: 'Francis Galton',

    email: 'athena@russel-schmeler.net',

    phone: '1-857-153-4425 x2092',

    address: '1995 Fritsch Divide, Murrayborough, SC 91301',

    status: 'Prospect',

    firstName: 'That damn diabetes',

    lastName: "It's around here somewhere",

    source: 'Facebook',
  },

  {
    name: 'James Watson',

    email: 'levi.williamson@deckow-doyle.org',

    phone: '250.908.2118 x89689',

    address: 'Apt. 585 34862 Lynch Avenue, North Izettaborough, NM 33556-9386',

    status: 'Prospect',

    firstName: 'I tell you what',

    lastName: "C'mon Naomi",

    source: 'Website',
  },

  {
    name: 'B. F. Skinner',

    email: 'rashad@bogan.biz',

    phone: '1-718-213-4328 x75109',

    address: '76195 Coy Ferry, Lake Edisonburgh, IA 25035-8817',

    status: 'Lead',

    firstName: "Goin' hog huntin'",

    lastName: 'So I was walking Oscar',

    source: 'Website',
  },

  {
    name: 'Louis Pasteur',

    email: 'isis@marks.org',

    phone: '164.586.2339',

    address: 'Apt. 754 16637 Althea Divide, Luettgenville, IN 13512-9320',

    status: 'Prospect',

    firstName: "Goin' hog huntin'",

    lastName: 'That damn diabetes',

    source: 'Other',
  },
];

const EstimatesData = [
  {
    name: 'Erwin Schrodinger',

    description: 'To answer power with power, the Jedi way this is',

    trade: 'Yup',

    template_used: "Y'all never listen to me",

    material_cost: 25.87,

    labor_cost: 55.68,

    markup: 45.35,

    profit_margin: 29.26,

    total_price: 97.16,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Trofim Lysenko',

    description:
      'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    trade: 'Yup',

    template_used: "That Barbala couldn't fly his way out of a wet paper bag",

    material_cost: 59.95,

    labor_cost: 44.95,

    markup: 25.58,

    profit_margin: 21.62,

    total_price: 91.22,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Hermann von Helmholtz',

    description:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    trade: 'Let me tell ya',

    template_used: 'That goddamn Datamate',

    material_cost: 31.71,

    labor_cost: 68.43,

    markup: 21.27,

    profit_margin: 54.14,

    total_price: 28.76,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Carl Linnaeus',

    description:
      'Clear your mind must be, if you are to find the villains behind this plot.',

    trade: 'I got that scurvy',

    template_used: "Y'all never listen to me",

    material_cost: 66.46,

    labor_cost: 72.65,

    markup: 89.41,

    profit_margin: 68.59,

    total_price: 46.07,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Noam Chomsky',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    trade: 'Texas!',

    template_used: "It's around here somewhere",

    material_cost: 70.59,

    labor_cost: 86.21,

    markup: 23.15,

    profit_margin: 34.99,

    total_price: 84.87,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const JobsData = [
  {
    name: 'Louis Pasteur',

    description: 'That is why you fail.',

    category: 'Residential',

    type: 'Insurance',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 679 6290 Dare Streets, Port Gwenn, ID 24125-8324',

    start_date: new Date('2023-10-25'),

    end_date: new Date('2023-10-18'),
  },

  {
    name: 'Thomas Hunt Morgan',

    description: 'That is why you fail.',

    category: 'Commercial',

    type: 'Warranty',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '80791 Nitzsche Prairie, Jodyshire, NM 36201-4696',

    start_date: new Date('2023-07-30'),

    end_date: new Date('2023-09-14'),
  },

  {
    name: 'Galileo Galilei',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    category: 'PropertyManagement',

    type: 'New',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 954 8617 Ward Court, South Leona, TN 27857-3746',

    start_date: new Date('2023-07-31'),

    end_date: new Date('2024-04-07'),
  },

  {
    name: 'Heike Kamerlingh Onnes',

    description: 'Feel the force!',

    category: 'PropertyManagement',

    type: 'Retail',

    status: 'Completed',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '11579 Abshire Plains, Port Jeff, FL 94991',

    start_date: new Date('2024-03-06'),

    end_date: new Date('2023-07-19'),
  },

  {
    name: 'Max von Laue',

    description: 'Younglings, younglings gather ’round.',

    category: 'Commercial',

    type: 'Inspection',

    status: 'Approved',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 643 221 Taylor Plains, Steuberburgh, SC 49369-5022',

    start_date: new Date('2024-02-12'),

    end_date: new Date('2023-07-11'),
  },
];

const TemplatesData = [
  {
    name: 'Isaac Newton',

    description: 'Use your feelings, Obi-Wan, and find him you will.',

    // type code here for "relation_one" field
  },

  {
    name: 'Claude Levi-Strauss',

    description: 'Do. Or do not. There is no try.',

    // type code here for "relation_one" field
  },

  {
    name: 'Hans Bethe',

    description: 'You will find only what you bring in.',

    // type code here for "relation_one" field
  },

  {
    name: 'Gregor Mendel',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    // type code here for "relation_one" field
  },

  {
    name: 'Francis Galton',

    description: 'Hmm. In the end, cowards are those who follow the dark side.',

    // type code here for "relation_one" field
  },
];

const TradesData = [
  {
    name: 'Alfred Kinsey',
  },

  {
    name: 'Stephen Hawking',
  },

  {
    name: 'Euclid',
  },

  {
    name: 'Lucretius',
  },

  {
    name: 'Isaac Newton',
  },
];

const InvoicesData = [
  {
    invoice_number: "That Barbala couldn't fly his way out of a wet paper bag",

    invoice_date: new Date('2023-07-31'),

    terms: 'Net 15 Days',

    approved_job_value: 55.51,

    balance_amount: 65.37,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Texas!',

    invoice_date: new Date('2023-10-25'),

    terms: 'Net 15 Days',

    approved_job_value: 39.01,

    balance_amount: 24.11,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "I'm washing my hands of it",

    invoice_date: new Date('2023-11-03'),

    terms: 'Net 30 Days',

    approved_job_value: 25.08,

    balance_amount: 28.95,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Texas!',

    invoice_date: new Date('2024-05-27'),

    terms: 'Net 7 Days',

    approved_job_value: 16.45,

    balance_amount: 34.75,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Got depression, Smith and Wessen',

    invoice_date: new Date('2024-02-16'),

    terms: 'Upon Receipt',

    approved_job_value: 71.61,

    balance_amount: 31.68,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: "I'm washing my hands of it",

    total_amount: 19.25,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: "Goin' hog huntin'",

    total_amount: 23.03,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'So I was walking Oscar',

    total_amount: 33.25,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'That damn diabetes',

    total_amount: 15.23,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: "It's around here somewhere",

    total_amount: 29.42,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagesData = [{}, {}, {}, {}, {}];

const DocumentsData = [{}, {}, {}, {}, {}];

const EmailsData = [{}, {}, {}, {}, {}];

const ChatsData = [{}, {}, {}, {}, {}];

const AppointmentsData = [
  {
    subject: 'I want my damn cart back',

    start_time: new Date('2023-11-20'),

    end_time: new Date('2023-10-23'),

    notes: 'Difficult to see. Always in motion is the future...',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Reminds me of my old girlfriend Olga Goodntight',

    start_time: new Date('2024-05-05'),

    end_time: new Date('2023-12-23'),

    notes:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That damn gimble',

    start_time: new Date('2023-06-01'),

    end_time: new Date('2023-06-18'),

    notes: 'To answer power with power, the Jedi way this is',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: "That's messed up",

    start_time: new Date('2024-04-21'),

    end_time: new Date('2023-08-04'),

    notes: 'Do. Or do not. There is no try.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That damn gimble',

    start_time: new Date('2023-06-11'),

    end_time: new Date('2023-06-19'),

    notes: 'Ow, ow, OW! On my ear you are!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: 'Like a red-headed stepchild',

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'Medium',

    due_date: new Date('2024-01-24'),

    // type code here for "relation_one" field
  },

  {
    subject: 'No one tells me shit',

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'Medium',

    due_date: new Date('2023-09-18'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Low',

    due_date: new Date('2024-05-09'),

    // type code here for "relation_one" field
  },

  {
    subject: 'So I was walking Oscar',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'High',

    due_date: new Date('2023-07-14'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Contact the tower',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'High',

    due_date: new Date('2024-02-03'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Max Delbruck',

    amount: 80.93,

    body: 'At an end your rule is, and not short enough it was!',

    // type code here for "relation_one" field

    signed_date: new Date('2023-07-20'),

    // type code here for "relation_one" field
  },

  {
    name: 'Albrecht von Haller',

    amount: 55.38,

    body: 'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-04-01'),

    // type code here for "relation_one" field
  },

  {
    name: 'Jean Baptiste Lamarck',

    amount: 41.09,

    body: 'Always two there are, no more, no less. A master and an apprentice.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-02-08'),

    // type code here for "relation_one" field
  },

  {
    name: 'Leonard Euler',

    amount: 60.87,

    body: 'Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away - to the future, to the horizon. Never his mind on where he was. Hmm? What he was doing. Hmph. Adventure. Heh. Excitement. Heh. A Jedi craves not these things. You are reckless.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-06-09'),

    // type code here for "relation_one" field
  },

  {
    name: 'Ernst Haeckel',

    amount: 99.41,

    body: 'Younglings, younglings gather ’round.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-09-30'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Change Order',

    amount: 83.03,

    description: 'Good relations with the Wookiees, I have.',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 61.92,

    description: 'Reckless he is. Matters are worse.',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 66.95,

    description: 'Luminous beings are we - not this crude matter.',
  },

  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 91.95,

    description: 'Luminous beings are we - not this crude matter.',
  },

  {
    // type code here for "relation_one" field

    type: 'Upgrade',

    amount: 80.02,

    description: 'Younglings, younglings gather ’round.',
  },
];

// Similar logic for "relation_many"

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

async function associateEstimateWithRelated_template() {
  const relatedRelated_template0 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const Estimate0 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Estimate0?.setRelated_template) {
    await Estimate0.setRelated_template(relatedRelated_template0);
  }

  const relatedRelated_template1 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const Estimate1 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Estimate1?.setRelated_template) {
    await Estimate1.setRelated_template(relatedRelated_template1);
  }

  const relatedRelated_template2 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const Estimate2 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Estimate2?.setRelated_template) {
    await Estimate2.setRelated_template(relatedRelated_template2);
  }

  const relatedRelated_template3 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const Estimate3 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Estimate3?.setRelated_template) {
    await Estimate3.setRelated_template(relatedRelated_template3);
  }

  const relatedRelated_template4 = await Templates.findOne({
    offset: Math.floor(Math.random() * (await Templates.count())),
  });
  const Estimate4 = await Estimates.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Estimate4?.setRelated_template) {
    await Estimate4.setRelated_template(relatedRelated_template4);
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

async function associateJobWithRelated_estimate() {
  const relatedRelated_estimate0 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Job0 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Job0?.setRelated_estimate) {
    await Job0.setRelated_estimate(relatedRelated_estimate0);
  }

  const relatedRelated_estimate1 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Job1 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Job1?.setRelated_estimate) {
    await Job1.setRelated_estimate(relatedRelated_estimate1);
  }

  const relatedRelated_estimate2 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Job2 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Job2?.setRelated_estimate) {
    await Job2.setRelated_estimate(relatedRelated_estimate2);
  }

  const relatedRelated_estimate3 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Job3 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Job3?.setRelated_estimate) {
    await Job3.setRelated_estimate(relatedRelated_estimate3);
  }

  const relatedRelated_estimate4 = await Estimates.findOne({
    offset: Math.floor(Math.random() * (await Estimates.count())),
  });
  const Job4 = await Jobs.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Job4?.setRelated_estimate) {
    await Job4.setRelated_estimate(relatedRelated_estimate4);
  }
}

async function associateTemplateWithRelated_trade() {
  const relatedRelated_trade0 = await Trades.findOne({
    offset: Math.floor(Math.random() * (await Trades.count())),
  });
  const Template0 = await Templates.findOne({
    order: [['id', 'ASC']],
    offset: 0,
  });
  if (Template0?.setRelated_trade) {
    await Template0.setRelated_trade(relatedRelated_trade0);
  }

  const relatedRelated_trade1 = await Trades.findOne({
    offset: Math.floor(Math.random() * (await Trades.count())),
  });
  const Template1 = await Templates.findOne({
    order: [['id', 'ASC']],
    offset: 1,
  });
  if (Template1?.setRelated_trade) {
    await Template1.setRelated_trade(relatedRelated_trade1);
  }

  const relatedRelated_trade2 = await Trades.findOne({
    offset: Math.floor(Math.random() * (await Trades.count())),
  });
  const Template2 = await Templates.findOne({
    order: [['id', 'ASC']],
    offset: 2,
  });
  if (Template2?.setRelated_trade) {
    await Template2.setRelated_trade(relatedRelated_trade2);
  }

  const relatedRelated_trade3 = await Trades.findOne({
    offset: Math.floor(Math.random() * (await Trades.count())),
  });
  const Template3 = await Templates.findOne({
    order: [['id', 'ASC']],
    offset: 3,
  });
  if (Template3?.setRelated_trade) {
    await Template3.setRelated_trade(relatedRelated_trade3);
  }

  const relatedRelated_trade4 = await Trades.findOne({
    offset: Math.floor(Math.random() * (await Trades.count())),
  });
  const Template4 = await Templates.findOne({
    order: [['id', 'ASC']],
    offset: 4,
  });
  if (Template4?.setRelated_trade) {
    await Template4.setRelated_trade(relatedRelated_trade4);
  }
}

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

    await Promise.all([
      // Similar logic for "relation_many"

      await associateEstimateWithRelated_contact(),

      await associateEstimateWithRelated_job(),

      await associateEstimateWithRelated_template(),

      await associateJobWithAssigned_to(),

      await associateJobWithRelated_contact(),

      await associateJobWithRelated_estimate(),

      await associateTemplateWithRelated_trade(),

      await associateInvoiceWithRelated_job(),

      await associateOrderWithRelated_job(),

      await associateOrderWithRelated_estimate(),

      await associateAppointmentWithRelated_contact(),

      await associateAppointmentWithAssigned_to(),

      await associateTaskWithAssigned_to(),

      await associateTaskWithRelated_job(),

      await associateContractWithRelated_contact(),

      await associateContractWithRelated_job(),

      await associateAmendmentWithRelated_job(),
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
  },
};
