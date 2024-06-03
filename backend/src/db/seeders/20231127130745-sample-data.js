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
    name: 'Andreas Vesalius',

    email: 'jordan@mante-mclaughlin.io',

    phone: '1-332-160-9749 x205',

    address: '525 Lueilwitz Mountains, Delaineside, TN 86166-2709',

    status: 'Customer',

    firstName: 'Turd gone wrong',

    lastName: "C'mon Naomi",

    source: 'Facebook',
  },

  {
    name: 'Max Born',

    email: 'cedric@howe-barrows.biz',

    phone: '795.732.1024 x2574',

    address: 'Apt. 107 334 Noelle Club, Port Gerard, TN 82078-1016',

    status: 'Lead',

    firstName: 'Might be DQ time',

    lastName: 'Come on now',

    source: 'Website',
  },

  {
    name: 'Francis Galton',

    email: 'elidia_moore@terry.io',

    phone: '1-602-272-5120 x23847',

    address: '534 Marks Trail, Maristad, ME 11400-7345',

    status: 'Customer',

    firstName: "That's messed up",

    lastName: 'Come on now',

    source: 'Facebook',
  },

  {
    name: 'Charles Lyell',

    email: 'kandi.conroy@mann.info',

    phone: '1-589-318-0792 x6896',

    address: 'Suite 500 75227 Nova Mews, East Ka, ND 29088-5644',

    status: 'Prospect',

    firstName: "It's around here somewhere",

    lastName: 'Texas!',

    source: 'Google Ads',
  },
];

const EstimatesData = [
  {
    name: 'Richard Feynman',

    description: 'Difficult to see. Always in motion is the future...',

    trade: "Y'all never listen to me",

    template_used: 'Contact the tower',

    material_cost: 83.27,

    labor_cost: 16.03,

    markup: 89.21,

    profit_margin: 55.17,

    total_price: 71.58,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Pierre Simon de Laplace',

    description:
      'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',

    trade: 'Yup',

    template_used: "Goin' hog huntin'",

    material_cost: 24.48,

    labor_cost: 23.23,

    markup: 10.86,

    profit_margin: 17.56,

    total_price: 94.41,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Ludwig Boltzmann',

    description: 'Reckless he is. Matters are worse.',

    trade: 'No one tells me shit',

    template_used: 'My buddy Harlen',

    material_cost: 89.11,

    labor_cost: 83.02,

    markup: 37.67,

    profit_margin: 96.35,

    total_price: 19.59,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'William Harvey',

    description: 'Truly wonderful, the mind of a child is.',

    trade: "How 'bout them Cowboys",

    template_used: "C'mon Naomi",

    material_cost: 68.62,

    labor_cost: 13.74,

    markup: 96.95,

    profit_margin: 35.81,

    total_price: 86.93,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const JobsData = [
  {
    name: 'Louis Pasteur',

    description:
      'The dark side clouds everything. Impossible to see the future is.',

    category: 'PropertyManagement',

    type: 'Retail',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '5548 Kunze Course, Emmymouth, DE 41838-6370',

    start_date: new Date('2024-02-12'),

    end_date: new Date('2024-02-20'),
  },

  {
    name: 'Paul Dirac',

    description:
      'Much to learn you still have my old padawan. ... This is just the beginning!',

    category: 'Residential',

    type: 'Repair',

    status: 'Approved',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 182 60587 Konopelski Locks, Cronabury, CT 36108-4339',

    start_date: new Date('2023-12-26'),

    end_date: new Date('2024-03-21'),
  },

  {
    name: 'Edward Teller',

    description: 'Reckless he is. Matters are worse.',

    category: 'Commercial',

    type: 'Retail',

    status: 'Active',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 995 9935 Raynor Spring, Haroldland, ID 62100-5238',

    start_date: new Date('2024-03-02'),

    end_date: new Date('2024-05-18'),
  },

  {
    name: 'Claude Bernard',

    description:
      'The dark side clouds everything. Impossible to see the future is.',

    category: 'Commercial',

    type: 'New',

    status: 'Approved',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '2664 Ervin Causeway, North Maryborough, NM 88679-0532',

    start_date: new Date('2023-09-21'),

    end_date: new Date('2023-11-01'),
  },
];

const TemplatesData = [
  {
    name: 'Justus Liebig',

    description:
      'Always two there are, no more, no less. A master and an apprentice.',

    // type code here for "relation_one" field
  },

  {
    name: 'Noam Chomsky',

    description: 'At an end your rule is, and not short enough it was!',

    // type code here for "relation_one" field
  },

  {
    name: 'Alfred Kinsey',

    description: 'Feel the force!',

    // type code here for "relation_one" field
  },

  {
    name: 'James Watson',

    description:
      'Strong is Vader. Mind what you have learned. Save you it can.',

    // type code here for "relation_one" field
  },
];

const TradesData = [
  {
    name: 'Edward O. Wilson',
  },

  {
    name: 'Ernest Rutherford',
  },

  {
    name: 'Charles Lyell',
  },

  {
    name: 'Archimedes',
  },
];

const InvoicesData = [
  {
    invoice_number: 'Contact the tower',

    invoice_date: new Date('2023-11-18'),

    terms: 'Net 15 Days',

    approved_job_value: 73.81,

    balance_amount: 99.86,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "I'm washing my hands of it",

    invoice_date: new Date('2024-01-13'),

    terms: 'Net 7 Days',

    approved_job_value: 71.96,

    balance_amount: 27.82,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "That's messed up",

    invoice_date: new Date('2024-04-18'),

    terms: 'Net 10 Days',

    approved_job_value: 80.09,

    balance_amount: 24.32,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Like a red-headed stepchild',

    invoice_date: new Date('2023-08-02'),

    terms: 'Net 60 Days',

    approved_job_value: 95.64,

    balance_amount: 53.31,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: 'That damn Bill Stull',

    total_amount: 11.47,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Come on now',

    total_amount: 43.72,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: "How 'bout them Cowboys",

    total_amount: 96.84,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'I tell you what',

    total_amount: 82.32,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagesData = [
  {
    // type code here for "images" field

    Name: "That's messed up",

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: "Goin' hog huntin'",

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Come on now',

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'That goddamn Datamate',

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    name: 'Emil Fischer',

    // type code here for "relation_one" field
  },

  {
    name: 'Werner Heisenberg',

    // type code here for "relation_one" field
  },

  {
    name: 'Arthur Eddington',

    // type code here for "relation_one" field
  },

  {
    name: 'Enrico Fermi',

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

    name: 'Max von Laue',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Jean Baptiste Lamarck',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Karl Landsteiner',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Albrecht von Haller',
  },
];

const AppointmentsData = [
  {
    subject: "Goin' hog huntin'",

    start_time: new Date('2023-06-29'),

    end_time: new Date('2023-09-04'),

    notes:
      'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Come on now',

    start_time: new Date('2024-01-20'),

    end_time: new Date('2023-12-16'),

    notes: 'At an end your rule is, and not short enough it was!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'I tell you what',

    start_time: new Date('2023-09-05'),

    end_time: new Date('2023-11-20'),

    notes: 'Your weapons, you will not need them.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'Come on now',

    start_time: new Date('2023-07-19'),

    end_time: new Date('2023-12-10'),

    notes: 'Strong is Vader. Mind what you have learned. Save you it can.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: 'Turd gone wrong',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Medium',

    due_date: new Date('2023-11-23'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Yup',

    // type code here for "relation_one" field

    status: 'Completed',

    priority: 'Low',

    due_date: new Date('2023-09-30'),

    // type code here for "relation_one" field
  },

  {
    subject: 'So I was walking Oscar',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Low',

    due_date: new Date('2023-06-05'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Might be DQ time',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'High',

    due_date: new Date('2023-10-16'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Dmitri Mendeleev',

    amount: 15.83,

    body: 'Always two there are, no more, no less. A master and an apprentice.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-12-27'),

    // type code here for "relation_one" field
  },

  {
    name: 'Enrico Fermi',

    amount: 91.07,

    body: 'Size matters not. Look at me. Judge me by my size, do you? Hmm? Hmm. And well you should not. For my ally is the Force, and a powerful ally it is. Life creates it, makes it grow. Its energy surrounds us and binds us. Luminous beings are we, not this crude matter. You must feel the Force around you; here, between you, me, the tree, the rock, everywhere, yes. Even between the land and the ship.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-07-18'),

    // type code here for "relation_one" field
  },

  {
    name: 'Johannes Kepler',

    amount: 86.85,

    body: 'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-11-13'),

    // type code here for "relation_one" field
  },

  {
    name: 'Justus Liebig',

    amount: 33.06,

    body: 'Adventure. Excitement. A Jedi craves not these things.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-12-03'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Change Order',

    amount: 71.77,

    description:
      'Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.',
  },

  {
    // type code here for "relation_one" field

    type: 'Change Order',

    amount: 74.59,

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',
  },

  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 23.74,

    description: 'You will find only what you bring in.',
  },

  {
    // type code here for "relation_one" field

    type: 'Change Order',

    amount: 70.36,

    description:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',
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

      await associateImageWithRelated_job(),

      await associateDocumentWithRelated_job(),

      await associateEmailWithRelated_job(),

      await associateEmailWithRelated_contact(),

      await associateEmailWithRelated_user(),

      await associateChatWithRelated_job(),

      // Similar logic for "relation_many"

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
