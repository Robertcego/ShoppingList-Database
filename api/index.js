// ********** Middleware ********** \\
const morgan = require('morgan');
const errorHandler = require('./src/utils/middlewares/errorHandler');
const setHeaders = require('./src/utils/middlewares/setHeaders');
// ********** Middleware ********** \\

// *********** Database setup ********* \\
const { conn } = require('./src/models/index');
// *********** Database setup ********* \\

//*********** Server setup ******** \\
const routes = require('./src/routes/index');
const PORT = 3001;
const express = require('express');
const app = express();

//*********** Server setup ******** \\
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', routes);
app.use(errorHandler);
app.use(setHeaders);

// ********** Server calls ********** \\

// ********** Server port ********** \\
// ! sync returns a promise
conn.sync({ force: true }).then(() => {
  console.log('====================================');
  console.log('Database has been synced!');
  console.log('====================================');
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  });
});
