require('dotenv').config();

module.exports = {
  dbUser: process.env.DB_USER || 'postgres',
  dbPass: process.env.DB_PASS || 'yourpassword',
  dbHost: process.env.DB_HOST || 'localhost',
  dbPort: process.env.DB_PORT || '5432',
  dbName: process.env.DB_NAME || 'yourdbname',
};
