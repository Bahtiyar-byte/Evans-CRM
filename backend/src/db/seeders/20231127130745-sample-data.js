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
    name: 'Franz Boas',

    email: 'fredda@altenwerth-blanda.com',

    phone: '1-793-562-0040 x393',

    address: '9188 Alease Manor, Hiltonmouth, PA 11326-9431',

    status: 'Prospect',

    firstName: "C'mon Naomi",

    lastName: 'That damn gimble',

    source: 'Website',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Commercial',

    work_type: 'Insurance',

    referral: "C'mon Naomi",

    company: 'Reinger-Heaney',
  },

  {
    name: 'William Bayliss',

    email: 'felton@luettgen-koch.name',

    phone: '1-446-934-1718 x9203',

    address: 'Suite 185 990 Johnston Dale, Schadenport, KS 19693-3046',

    status: 'Lead',

    firstName: "That's messed up",

    lastName: "Y'all never listen to me",

    source: 'Website',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Property Management',

    work_type: 'Insurance',

    referral: 'That damn diabetes',

    company: 'Smith, Dare and Hermann',
  },

  {
    name: 'Comte de Buffon',

    email: 'kristyn.considine@mayer.co',

    phone: '753.774.9974 x12713',

    address: 'Suite 247 2587 Runolfsson Roads, Mertzburgh, CA 03167-1857',

    status: 'Lead',

    firstName: "That's messed up",

    lastName: 'Let me tell ya',

    source: 'Google Ads',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    // type code here for "relation_one" field

    category: 'Residential',

    work_type: 'Repair',

    referral: 'Like a red-headed stepchild',

    company: 'Corkery, Brown and Klein',
  },
];

const EstimatesData = [
  {
    name: 'Ernst Mayr',

    description: 'You will find only what you bring in.',

    trade: "That's messed up",

    template_used: 'Come on now',

    material_cost: 59.29,

    labor_cost: 49.12,

    markup: 16.18,

    profit_margin: 40.31,

    total_price: 98.12,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },

  {
    name: 'Frederick Gowland Hopkins',

    description: 'Do. Or do not. There is no try.',

    trade: 'Texas!',

    template_used: 'Might be DQ time',

    material_cost: 49.14,

    labor_cost: 97.54,

    markup: 88.14,

    profit_margin: 33.83,

    total_price: 11.02,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'New',
  },

  {
    name: 'Karl Landsteiner',

    description: 'Do. Or do not. There is no try.',

    trade: 'That damn Bill Stull',

    template_used: 'That damn gimble',

    material_cost: 56.92,

    labor_cost: 35.56,

    markup: 32.67,

    profit_margin: 50.29,

    total_price: 69.68,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },
];

const JobsData = [
  {
    name: 'William Harvey',

    description:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    category: 'Residential',

    type: 'Retail',

    status: 'Active',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 871 63149 Hermann Ports, Willmsmouth, DE 49228-4461',

    start_date: new Date('2024-03-25'),

    end_date: new Date('2024-07-09'),
  },

  {
    name: 'Charles Sherrington',

    description: 'Hmm. In the end, cowards are those who follow the dark side.',

    category: 'Residential',

    type: 'Service',

    status: 'Approved',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 140 79252 Johnston Stream, South Lomaside, ME 48691',

    start_date: new Date('2024-05-28'),

    end_date: new Date('2024-07-26'),
  },

  {
    name: 'Rudolf Virchow',

    description: 'Use your feelings, Obi-Wan, and find him you will.',

    category: 'Commercial',

    type: 'Service',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '134 Schaden Parkway, South Ty, VT 17200-3259',

    start_date: new Date('2024-03-03'),

    end_date: new Date('2024-01-29'),
  },
];

const TemplatesData = [
  {
    name: 'Claude Bernard',

    description: 'Mudhole? Slimy? My home this is!',

    // type code here for "relation_many" field

    is_email_template: false,
  },

  {
    name: 'Frederick Gowland Hopkins',

    description: 'At an end your rule is, and not short enough it was!',

    // type code here for "relation_many" field

    is_email_template: true,
  },

  {
    name: 'Max von Laue',

    description: 'Difficult to see. Always in motion is the future...',

    // type code here for "relation_many" field

    is_email_template: false,
  },
];

const TradesData = [
  {
    name: 'Lynn Margulis',
  },

  {
    name: 'Frederick Gowland Hopkins',
  },

  {
    name: 'Theodosius Dobzhansky',
  },
];

const InvoicesData = [
  {
    invoice_number: 'So I was walking Oscar',

    invoice_date: new Date('2024-04-08'),

    terms: 'By Due Date',

    approved_job_value: 57.56,

    balance_amount: 79.35,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "That Barbala couldn't fly his way out of a wet paper bag",

    invoice_date: new Date('2023-11-30'),

    terms: 'Net 7 Days',

    approved_job_value: 48.09,

    balance_amount: 56.84,

    // type code here for "relation_one" field
  },

  {
    invoice_number: "Goin' hog huntin'",

    invoice_date: new Date('2024-05-31'),

    terms: 'By Due Date',

    approved_job_value: 24.98,

    balance_amount: 78.73,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: 'My boss gonna fire me',

    total_amount: 31.19,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: "That Barbala couldn't fly his way out of a wet paper bag",

    total_amount: 39.24,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Standby',

    total_amount: 45.95,

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

    Name: 'I tell you what',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'My boss gonna fire me',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    name: 'Paul Dirac',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Johannes Kepler',

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    name: 'Konrad Lorenz',

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
];

const ChatsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Neils Bohr',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Max Planck',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Stephen Hawking',
  },
];

const AppointmentsData = [
  {
    subject: 'That damn Bill Stull',

    start_time: new Date('2024-01-26'),

    end_time: new Date('2024-05-03'),

    notes: 'Already know you that which you need.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'No one tells me shit',

    start_time: new Date('2023-12-01'),

    end_time: new Date('2023-12-30'),

    notes: 'Ow, ow, OW! On my ear you are!',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: "I'm washing my hands of it",

    start_time: new Date('2024-03-20'),

    end_time: new Date('2024-08-08'),

    notes:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: 'Like a red-headed stepchild',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'Low',

    due_date: new Date('2024-09-11'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Yup',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'High',

    due_date: new Date('2024-04-07'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Let me tell ya',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'High',

    due_date: new Date('2023-12-04'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Linus Pauling',

    amount: 65.89,

    body: 'That is why you fail.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-08-01'),

    // type code here for "relation_one" field
  },

  {
    name: 'John Bardeen',

    amount: 47.89,

    body: 'The dark side clouds everything. Impossible to see the future is.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-08-27'),

    // type code here for "relation_one" field
  },

  {
    name: 'Robert Koch',

    amount: 99.16,

    body: 'Luminous beings are we - not this crude matter.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-10-17'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 82.09,

    description: 'Already know you that which you need.',
  },

  {
    // type code here for "relation_one" field

    type: 'Discount',

    amount: 85.27,

    description: 'Hmm. In the end, cowards are those who follow the dark side.',
  },

  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 61.16,

    description: 'Younglings, younglings gather ’round.',
  },
];

const EstimateSectionsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 69.51,

    material_price: 69.22,

    labor_price: 19.45,

    name: 'William Herschel',

    description: 'Around the survivors a perimeter create.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 94.53,

    material_price: 18.59,

    labor_price: 60.19,

    name: 'Francis Crick',

    description: 'Hmm. In the end, cowards are those who follow the dark side.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 54.57,

    material_price: 28.44,

    labor_price: 25.31,

    name: 'Francis Crick',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',
  },
];

const ContactPhonesData = [
  {
    phone_number: "Goin' hog huntin'",

    type: 'mobile',

    is_primary: false,
  },

  {
    phone_number: 'Reminds me of my old girlfriend Olga Goodntight',

    type: 'mobile',

    is_primary: true,
  },

  {
    phone_number: 'That goddamn Datamate',

    type: 'mobile',

    is_primary: false,
  },
];

const ContactEmailsData = [
  {
    email: 'alaina@koch.biz',

    type: 'personal',
  },

  {
    email: 'naomi_padberg@collins.name',

    type: 'other',
  },

  {
    email: 'malena@carroll.name',

    type: 'personal',
  },
];

const LaborTicketData = [
  {
    name: 'Robert Koch',

    // type code here for "relation_one" field

    start_date: new Date('2023-11-27'),

    end_date: new Date('2024-10-16'),

    crew_instructions: 'At an end your rule is, and not short enough it was!',

    actual_start_time: new Date('2024-04-11'),

    actual_end_time: new Date('2024-09-29'),

    crew_actions: 'Postponed',

    labor_progress: 'Delayed',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    assigned_date: new Date('2024-10-08'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Hermann von Helmholtz',

    // type code here for "relation_one" field

    start_date: new Date('2024-04-12'),

    end_date: new Date('2024-04-26'),

    crew_instructions: 'To answer power with power, the Jedi way this is',

    actual_start_time: new Date('2024-06-16'),

    actual_end_time: new Date('2024-06-18'),

    crew_actions: 'Not Checked In',

    labor_progress: 'Partially Complete',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    assigned_date: new Date('2024-08-12'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },

  {
    name: 'Jean Piaget',

    // type code here for "relation_one" field

    start_date: new Date('2024-08-19'),

    end_date: new Date('2024-03-01'),

    crew_instructions:
      'Much to learn you still have my old padawan. ... This is just the beginning!',

    actual_start_time: new Date('2024-05-02'),

    actual_end_time: new Date('2024-07-06'),

    crew_actions: 'Not Checked In',

    labor_progress: 'Completed',

    // type code here for "relation_many" field

    // type code here for "relation_many" field

    disclaimer: 'At an end your rule is, and not short enough it was!',

    assigned_date: new Date('2023-12-24'),

    // type code here for "relation_many" field

    // type code here for "relation_one" field
  },
];

const CrewData = [
  {
    name: 'Johannes Kepler',

    // type code here for "relation_many" field

    color: 'That goddamn Datamate',
  },

  {
    name: 'John Bardeen',

    // type code here for "relation_many" field

    color: 'Reminds me of my old girlfriend Olga Goodntight',
  },

  {
    name: 'Charles Sherrington',

    // type code here for "relation_many" field

    color: 'Come on now',
  },
];

const SubcontractorData = [
  {
    name: 'Dmitri Mendeleev',

    first_name: 'Come on now',

    last_name: "I'm washing my hands of it",

    address: '7550 Cruickshank Station, Lake Byron, WI 17568',

    phone: '534.695.2696 x38009',

    mobile_phone: 'I want my damn cart back',

    // type code here for "relation_many" field

    entity_name: 'Might be DQ time',
  },

  {
    name: 'J. Robert Oppenheimer',

    first_name: 'Turd gone wrong',

    last_name: "How 'bout them Cowboys",

    address: 'Apt. 316 3789 Parthenia Pine, New Edmondton, MD 90966-7574',

    phone: '(721) 923-0732 x2059',

    mobile_phone: 'I tell you what',

    // type code here for "relation_many" field

    entity_name: 'Reminds me of my old girlfriend Olga Goodntight',
  },

  {
    name: 'Linus Pauling',

    first_name: 'That damn gimble',

    last_name: 'My buddy Harlen',

    address: 'Apt. 856 615 Raynor Common, Lake Willowton, MN 24692',

    phone: '822-820-8105 x401',

    mobile_phone: 'Contact the tower',

    // type code here for "relation_many" field

    entity_name: 'Let me tell ya',
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

    action_description: 'My buddy Harlen',

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

    action_description: "C'mon Naomi",

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const AddressData = [
  {
    street: 'Let me tell ya',

    suite_apt_unit: "That Barbala couldn't fly his way out of a wet paper bag",

    city: "I'm washing my hands of it",

    state: 'AZ',

    zip: 'Turd gone wrong',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: true,

    is_billing_Address: false,

    // type code here for "relation_one" field

    latitude: 50.88,

    longitude: 38.57,
  },

  {
    street: 'Turd gone wrong',

    suite_apt_unit: 'Got depression, Smith and Wessen',

    city: 'Got depression, Smith and Wessen',

    state: 'AL',

    zip: "How 'bout them Cowboys",

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: true,

    is_location: false,

    is_billing_Address: true,

    // type code here for "relation_one" field

    latitude: 99.06,

    longitude: 75.22,
  },

  {
    street: "Y'all never listen to me",

    suite_apt_unit: "Goin' hog huntin'",

    city: 'I want my 5$ back',

    state: 'AL',

    zip: 'Like a red-headed stepchild',

    country: 'USA',

    // type code here for "relation_one" field

    is_mailing_address: false,

    is_location: true,

    is_billing_Address: false,

    // type code here for "relation_one" field

    latitude: 59.87,

    longitude: 69.96,
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
