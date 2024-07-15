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

const ContactsData = [
  {
    name: 'Hermann von Helmholtz',

    email: 'li_runolfsdottir@spinka-aufderhar.net',

    phone: '1-964-719-0633',

    address: '580 Danielle Squares, Brunomouth, AK 01918',

    status: 'Customer',

    firstName: "Y'all never listen to me",

    lastName: "That's messed up",

    source: 'Website',
  },

  {
    name: 'Max Born',

    email: 'bernadette@christiansen.com',

    phone: '708-589-8243 x11111',

    address: 'Suite 943 3091 Berry Meadows, Shaylamouth, DE 71909',

    status: 'Customer',

    firstName: 'I got that scurvy',

    lastName: 'Turd gone wrong',

    source: 'Facebook',
  },

  {
    name: 'Albert Einstein',

    email: 'eva_boyle@boyle.co',

    phone: '658-020-8235 x87607',

    address: 'Apt. 815 9442 Jc Passage, East Sookborough, MO 97923-7154',

    status: 'Lead',

    firstName: "It's around here somewhere",

    lastName: 'That goddamn Datamate',

    source: 'Website',
  },

  {
    name: 'Jean Piaget',

    email: 'michal_goldner@nolan.info',

    phone: '814.673.4642 x25421',

    address: 'Apt. 509 2079 Becker Underpass, West Beulahaven, MS 40957',

    status: 'Customer',

    firstName: 'That damn diabetes',

    lastName: 'That damn diabetes',

    source: 'Website',
  },

  {
    name: 'Euclid',

    email: 'daryl.turner@kemmer-schimmel.com',

    phone: '(287) 283-0586',

    address: '741 Dwain Dam, East Onachester, DE 59807-2857',

    status: 'Lead',

    firstName: 'Let me tell ya',

    lastName: 'Standby',

    source: 'Google Ads',
  },
];

const EstimatesData = [
  {
    name: 'Neils Bohr',

    description:
      'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    trade: 'No one tells me shit',

    template_used: "How 'bout them Cowboys",

    material_cost: 89.56,

    labor_cost: 93.47,

    markup: 31.63,

    profit_margin: 17.47,

    total_price: 81.43,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'New',
  },

  {
    name: 'Frederick Gowland Hopkins',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    trade: 'Standby',

    template_used: "That Barbala couldn't fly his way out of a wet paper bag",

    material_cost: 80.48,

    labor_cost: 81.33,

    markup: 56.29,

    profit_margin: 13.96,

    total_price: 80.17,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },

  {
    name: 'Sigmund Freud',

    description:
      'The dark side clouds everything. Impossible to see the future is.',

    trade: "How 'bout them Cowboys",

    template_used: 'Reminds me of my old girlfriend Olga Goodntight',

    material_cost: 37.11,

    labor_cost: 70.58,

    markup: 11.78,

    profit_margin: 48.63,

    total_price: 56.04,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Sent',
  },

  {
    name: 'Erwin Schrodinger',

    description:
      'Like fire across the galaxy the Clone Wars spread. In league with the wicked Count Dooku, more and more planets slip. Against this threat, upon the Jedi Knights falls the duty to lead the newly formed army of the Republic. And as the heat of war grows, so, to, grows the prowess of one most gifted student of the Force.',

    trade: "I'm washing my hands of it",

    template_used: 'My buddy Harlen',

    material_cost: 38.45,

    labor_cost: 59.81,

    markup: 26.74,

    profit_margin: 78.42,

    total_price: 13.76,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'New',
  },

  {
    name: 'Gustav Kirchhoff',

    description:
      'Much to learn you still have my old padawan. ... This is just the beginning!',

    trade: 'Texas!',

    template_used: 'Come on now',

    material_cost: 70.34,

    labor_cost: 72.55,

    markup: 70.74,

    profit_margin: 23.28,

    total_price: 19.45,

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    status: 'Approved',
  },
];

const JobsData = [
  {
    name: 'Claude Levi-Strauss',

    description:
      'Yes, a Jedi’s strength flows from the Force. But beware of the dark side. Anger, fear, aggression; the dark side of the Force are they. Easily they flow, quick to join you in a fight. If once you start down the dark path, forever will it dominate your destiny, consume you it will, as it did Obi-Wan’s apprentice.',

    category: 'Residential',

    type: 'Warranty',

    status: 'Invoiced',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '2889 Medhurst Bypass, Casperchester, MA 71404',

    start_date: new Date('2024-06-02'),

    end_date: new Date('2023-09-24'),
  },

  {
    name: 'Max Born',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    category: 'PropertyManagement',

    type: 'New',

    status: 'Active',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '27106 Krajcik Parkways, Lake Jc, IL 61768-0761',

    start_date: new Date('2023-10-20'),

    end_date: new Date('2024-01-03'),
  },

  {
    name: 'Frederick Sanger',

    description: 'To answer power with power, the Jedi way this is',

    category: 'PropertyManagement',

    type: 'Insurance',

    status: 'Invoiced',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Apt. 873 39564 Amina Ports, Priceborough, IA 98906',

    start_date: new Date('2023-12-31'),

    end_date: new Date('2023-07-16'),
  },

  {
    name: 'Dmitri Mendeleev',

    description:
      'Always two there are, no more, no less. A master and an apprentice.',

    category: 'Commercial',

    type: 'Warranty',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: '6450 Collin Road, North Laquita, OR 26682-2856',

    start_date: new Date('2024-06-25'),

    end_date: new Date('2024-02-26'),
  },

  {
    name: 'James Watson',

    description:
      'Always two there are, no more, no less. A master and an apprentice.',

    category: 'Residential',

    type: 'Service',

    status: 'Quoted',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "images" field

    // type code here for "files" field

    address: 'Suite 183 1171 Stiedemann Inlet, Boscohaven, VA 30436-9282',

    start_date: new Date('2023-07-19'),

    end_date: new Date('2023-09-09'),
  },
];

const TemplatesData = [
  {
    name: 'Paul Ehrlich',

    description: 'Reckless he is. Matters are worse.',

    // type code here for "relation_one" field
  },

  {
    name: 'Paul Ehrlich',

    description:
      'Ready are you? What know you of ready? For eight hundred years have I trained Jedi. My own counsel will I keep on who is to be trained. A Jedi must have the deepest commitment, the most serious mind. This one a long time have I watched. All his life has he looked away - to the future, to the horizon. Never his mind on where he was. Hmm? What he was doing. Hmph. Adventure. Heh. Excitement. Heh. A Jedi craves not these things. You are reckless.',

    // type code here for "relation_one" field
  },

  {
    name: 'Karl Landsteiner',

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',

    // type code here for "relation_one" field
  },

  {
    name: 'Justus Liebig',

    description:
      'Do not assume anything Obi-Wan. Clear your mind must be if you are to discover the real villains behind this plot.',

    // type code here for "relation_one" field
  },

  {
    name: 'Hans Selye',

    description:
      'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',

    // type code here for "relation_one" field
  },
];

const TradesData = [
  {
    name: 'Tycho Brahe',
  },

  {
    name: 'Wilhelm Wundt',
  },

  {
    name: 'Carl Linnaeus',
  },

  {
    name: 'Nicolaus Copernicus',
  },

  {
    name: 'Charles Lyell',
  },
];

const InvoicesData = [
  {
    invoice_number: 'Standby',

    invoice_date: new Date('2024-03-12'),

    terms: 'Net 45 Days',

    approved_job_value: 86.43,

    balance_amount: 40.11,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'So I was walking Oscar',

    invoice_date: new Date('2023-11-06'),

    terms: 'Net 45 Days',

    approved_job_value: 95.26,

    balance_amount: 18.57,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'I tell you what',

    invoice_date: new Date('2024-06-09'),

    terms: 'By Due Date',

    approved_job_value: 44.67,

    balance_amount: 55.01,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Yup',

    invoice_date: new Date('2023-10-27'),

    terms: 'Upon Receipt',

    approved_job_value: 22.83,

    balance_amount: 27.77,

    // type code here for "relation_one" field
  },

  {
    invoice_number: 'Might be DQ time',

    invoice_date: new Date('2023-08-06'),

    terms: 'Net 45 Days',

    approved_job_value: 86.67,

    balance_amount: 42.14,

    // type code here for "relation_one" field
  },
];

const OrdersData = [
  {
    order_number: 'Turd gone wrong',

    total_amount: 76.73,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'My boss gonna fire me',

    total_amount: 79.68,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'That goddamn Datamate',

    total_amount: 11.75,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'Got depression, Smith and Wessen',

    total_amount: 64.33,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    order_number: 'My boss gonna fire me',

    total_amount: 39.93,

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const ImagesData = [
  {
    // type code here for "images" field

    Name: 'I tell you what',

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Contact the tower',

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Always the last one to the party',

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'Let me tell ya',

    // type code here for "relation_one" field
  },

  {
    // type code here for "images" field

    Name: 'I want my damn cart back',

    // type code here for "relation_one" field
  },
];

const DocumentsData = [
  {
    name: 'Claude Levi-Strauss',

    // type code here for "relation_one" field
  },

  {
    name: 'Richard Feynman',

    // type code here for "relation_one" field
  },

  {
    name: 'Gertrude Belle Elion',

    // type code here for "relation_one" field
  },

  {
    name: 'Alfred Wegener',

    // type code here for "relation_one" field
  },

  {
    name: 'Ernst Haeckel',

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

    name: 'Claude Levi-Strauss',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Antoine Laurent Lavoisier',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Stephen Hawking',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Paul Ehrlich',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_many" field

    name: 'Edward Teller',
  },
];

const AppointmentsData = [
  {
    subject: 'Come on now',

    start_time: new Date('2023-10-30'),

    end_time: new Date('2023-12-15'),

    notes: 'You will find only what you bring in.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'My buddy Harlen',

    start_time: new Date('2023-12-13'),

    end_time: new Date('2024-05-04'),

    notes:
      'Once you start down the dark path, forever will it dominate your destiny, consume you it will.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'That damn Bill Stull',

    start_time: new Date('2023-08-13'),

    end_time: new Date('2024-03-06'),

    notes:
      'Soon will I rest, yes, forever sleep. Earned it I have. Twilight is upon me, soon night must fall.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: 'So I was walking Oscar',

    start_time: new Date('2023-12-10'),

    end_time: new Date('2024-01-14'),

    notes: 'Not if anything to say about it I have',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },

  {
    subject: "I'm washing my hands of it",

    start_time: new Date('2024-03-28'),

    end_time: new Date('2024-03-19'),

    notes:
      'Always two there are, no more, no less. A master and an apprentice.',

    // type code here for "relation_one" field

    // type code here for "relation_one" field

    // type code here for "relation_one" field
  },
];

const TasksData = [
  {
    subject: "That's messed up",

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'Low',

    due_date: new Date('2024-01-05'),

    // type code here for "relation_one" field
  },

  {
    subject: "I'm washing my hands of it",

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Medium',

    due_date: new Date('2023-07-31'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Reminds me of my old girlfriend Olga Goodntight',

    // type code here for "relation_one" field

    status: 'Accepted',

    priority: 'Low',

    due_date: new Date('2024-06-28'),

    // type code here for "relation_one" field
  },

  {
    subject: 'Contact the tower',

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Low',

    due_date: new Date('2024-04-22'),

    // type code here for "relation_one" field
  },

  {
    subject: "How 'bout them Cowboys",

    // type code here for "relation_one" field

    status: 'Open',

    priority: 'Low',

    due_date: new Date('2023-08-17'),

    // type code here for "relation_one" field
  },
];

const ContractsData = [
  {
    name: 'Charles Sherrington',

    amount: 76.29,

    body: 'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',

    // type code here for "relation_one" field

    signed_date: new Date('2024-04-16'),

    // type code here for "relation_one" field
  },

  {
    name: 'Willard Libby',

    amount: 38.87,

    body: 'Death is a natural part of life. Rejoice for those around you who transform into the Force. Mourn them do not. Miss them do not. Attachment leads to jealously. The shadow of greed, that is.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-11-02'),

    // type code here for "relation_one" field
  },

  {
    name: 'Sigmund Freud',

    amount: 23.78,

    body: 'Good relations with the Wookiees, I have.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-05-10'),

    // type code here for "relation_one" field
  },

  {
    name: 'Frederick Sanger',

    amount: 30.67,

    body: 'Luminous beings are we - not this crude matter.',

    // type code here for "relation_one" field

    signed_date: new Date('2024-05-17'),

    // type code here for "relation_one" field
  },

  {
    name: 'Frederick Sanger',

    amount: 49.61,

    body: 'Your weapons, you will not need them.',

    // type code here for "relation_one" field

    signed_date: new Date('2023-08-06'),

    // type code here for "relation_one" field
  },
];

const AmendmentsData = [
  {
    // type code here for "relation_one" field

    type: 'Discount',

    amount: 52.64,

    description: 'Hmm. In the end, cowards are those who follow the dark side.',
  },

  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 87.14,

    description:
      'Through the Force, things you will see. Other places. The future - the past. Old friends long gone.',
  },

  {
    // type code here for "relation_one" field

    type: 'Change Order',

    amount: 92.38,

    description: 'Mudhole? Slimy? My home this is!',
  },

  {
    // type code here for "relation_one" field

    type: 'Supplement',

    amount: 55.38,

    description: 'Younglings, younglings gather ’round.',
  },

  {
    // type code here for "relation_one" field

    type: 'Insurance Claim',

    amount: 68.17,

    description:
      'Strong is Vader. Mind what you have learned. Save you it can.',
  },
];

const EstimateSectionsData = [
  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 75.61,

    material_price: 12.55,

    labor_price: 70.69,

    name: 'Karl Landsteiner',

    description:
      'The dark side clouds everything. Impossible to see the future is.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 48.92,

    material_price: 67.95,

    labor_price: 62.81,

    name: 'Arthur Eddington',

    description: 'That is why you fail.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 28.97,

    material_price: 54.11,

    labor_price: 69.03,

    name: 'Wilhelm Wundt',

    description:
      'Pain, suffering, death I feel. Something terrible has happened. Young Skywalker is in pain. Terrible pain',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 54.73,

    material_price: 65.45,

    labor_price: 48.61,

    name: 'Ernst Haeckel',

    description: 'Younglings, younglings gather ’round.',
  },

  {
    // type code here for "relation_one" field

    // type code here for "relation_one" field

    amount: 10.13,

    material_price: 58.04,

    labor_price: 94.03,

    name: 'Gustav Kirchhoff',

    description:
      'Always two there are, no more, no less. A master and an apprentice.',
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

    await Promise.all([
      // Similar logic for "relation_many"

      await associateEstimateWithRelated_contact(),

      await associateEstimateWithRelated_job(),

      await associateJobWithAssigned_to(),

      await associateJobWithRelated_contact(),

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
  },
};
