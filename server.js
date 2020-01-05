const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors')

const tournaments = require('./routes/tournaments');
const players = require('./routes/players');
const index = require('./routes/index')

const app = express();

dotenv.config({ path: './config/config.env' });

connectDB();

app.use(express.json());
app.use(cors())


app.set('view engine', 'pug')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
//Routes
app.use('/', index)
app.use('/api/v1/tournaments', tournaments);
app.use('/api/v1/players', players);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${5000}`)
);

process.on('unhandledRejection', err => {
  console.log(`Error: ${err.message}`);
  // Close server exit process
  server.close(() => process.exit(1));
});
