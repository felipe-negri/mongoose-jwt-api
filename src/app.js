const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();

const { validaJson } = require('./utils/validacao');

const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(validaJson);

app.use(routes);

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error(err));

app.listen(9000, () => console.log('Aberto na porta 9000'))
