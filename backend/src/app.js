const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();


app.use(morgan('dev'));
app.use(cors());

//el servidor de rutas 
app.use(require('./routes/users'));

module.exports = app;