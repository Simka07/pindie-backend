const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const apiRouter = require('./routes/apiRouter.js');


const connectToDatabase = require('./database/connect');
const cors = require('./middlewares/cors');

const app = express();
const PORT = 3000;

connectToDatabase();

app.use(
  cors, 
  apiRouter,
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),

);

app.listen(PORT);
