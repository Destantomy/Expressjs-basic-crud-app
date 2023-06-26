/* eslint-disable max-len */
const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./app/database/connection');

// --start section configure to connect with dotenv file--
const dotenv = require('dotenv');
dotenv.config({path: './sources/config.env'});
// insert my app detail in .env file or if not available use 8080
const port = process.env.port || 8080;
// --end section configure to connect with dotenv file--

// log requests using morgan
app.use(morgan('tiny'));

// mongoDB connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({extended: true}));

// set view engine
// app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './app/views'));

// load assets
// app.use(express.static('css'));
app.use('/css', express.static(path.join(__dirname, 'assets/css')));
app.use('/img', express.static(path.join(__dirname, 'assets/img')));
app.use('/js', express.static(path.join(__dirname, 'assets/js')));

// load router
app.use('/', require('./app/routes/router'));

app.listen(port, () => {
  console.log(`server up and running on http://localhost:${port}`);
});
