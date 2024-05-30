const express = require('express');
const cors = require('cors');
const app = express();
const passport = require('passport');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const db = require('./db/models');
const config = require('./config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const authRoutes = require('./routes/auth');
const fileRoutes = require('./routes/file');
const searchRoutes = require('./routes/search');

const openaiRoutes = require('./routes/openai');

const usersRoutes = require('./routes/users');

const contactsRoutes = require('./routes/contacts');

const estimatesRoutes = require('./routes/estimates');

const jobsRoutes = require('./routes/jobs');

const rolesRoutes = require('./routes/roles');

const permissionsRoutes = require('./routes/permissions');

const templatesRoutes = require('./routes/templates');

const tradesRoutes = require('./routes/trades');

const invoicesRoutes = require('./routes/invoices');

const ordersRoutes = require('./routes/orders');

const imagesRoutes = require('./routes/images');

const documentsRoutes = require('./routes/documents');

const emailsRoutes = require('./routes/emails');

const chatsRoutes = require('./routes/chats');

const appointmentsRoutes = require('./routes/appointments');

const tasksRoutes = require('./routes/tasks');

const contractsRoutes = require('./routes/contracts');

const amendmentsRoutes = require('./routes/amendments');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      version: '1.0.0',
      title: 'Evans CRM',
      description:
        'Evans CRM Online REST API for Testing and Prototyping application. You can perform all major operations with your entities - create, delete and etc.',
    },
    servers: [
      {
        url: config.swaggerUrl,
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
      responses: {
        UnauthorizedError: {
          description: 'Access token is missing or invalid',
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const specs = swaggerJsDoc(options);
app.use(
  '/api-docs',
  function (req, res, next) {
    swaggerUI.host = req.get('host');
    next();
  },
  swaggerUI.serve,
  swaggerUI.setup(specs),
);

app.use(cors({ origin: true }));
require('./auth/auth');

app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/file', fileRoutes);
app.enable('trust proxy');

app.use(
  '/api/users',
  passport.authenticate('jwt', { session: false }),
  usersRoutes,
);

app.use(
  '/api/contacts',
  passport.authenticate('jwt', { session: false }),
  contactsRoutes,
);

app.use(
  '/api/estimates',
  passport.authenticate('jwt', { session: false }),
  estimatesRoutes,
);

app.use(
  '/api/jobs',
  passport.authenticate('jwt', { session: false }),
  jobsRoutes,
);

app.use(
  '/api/roles',
  passport.authenticate('jwt', { session: false }),
  rolesRoutes,
);

app.use(
  '/api/permissions',
  passport.authenticate('jwt', { session: false }),
  permissionsRoutes,
);

app.use(
  '/api/templates',
  passport.authenticate('jwt', { session: false }),
  templatesRoutes,
);

app.use(
  '/api/trades',
  passport.authenticate('jwt', { session: false }),
  tradesRoutes,
);

app.use(
  '/api/invoices',
  passport.authenticate('jwt', { session: false }),
  invoicesRoutes,
);

app.use(
  '/api/orders',
  passport.authenticate('jwt', { session: false }),
  ordersRoutes,
);

app.use(
  '/api/images',
  passport.authenticate('jwt', { session: false }),
  imagesRoutes,
);

app.use(
  '/api/documents',
  passport.authenticate('jwt', { session: false }),
  documentsRoutes,
);

app.use(
  '/api/emails',
  passport.authenticate('jwt', { session: false }),
  emailsRoutes,
);

app.use(
  '/api/chats',
  passport.authenticate('jwt', { session: false }),
  chatsRoutes,
);

app.use(
  '/api/appointments',
  passport.authenticate('jwt', { session: false }),
  appointmentsRoutes,
);

app.use(
  '/api/tasks',
  passport.authenticate('jwt', { session: false }),
  tasksRoutes,
);

app.use(
  '/api/contracts',
  passport.authenticate('jwt', { session: false }),
  contractsRoutes,
);

app.use(
  '/api/amendments',
  passport.authenticate('jwt', { session: false }),
  amendmentsRoutes,
);

app.use(
  '/api/openai',
  passport.authenticate('jwt', { session: false }),
  openaiRoutes,
);

app.use(
  '/api/search',
  passport.authenticate('jwt', { session: false }),
  searchRoutes,
);

const publicDir = path.join(__dirname, '../public');

if (fs.existsSync(publicDir)) {
  app.use('/', express.static(publicDir));

  app.get('*', function (request, response) {
    response.sendFile(path.resolve(publicDir, 'index.html'));
  });
}

const PORT = process.env.PORT || 8080;

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});

module.exports = app;
