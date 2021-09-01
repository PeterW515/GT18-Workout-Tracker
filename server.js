//bring in required packages from npm
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//bring in routes
const routes = require('./controllers');

//set port
const PORT = process.env.PORT || 3000;

//establish app as express
const app = express();

//set logger, encoding, json, static folder, and routes
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use(routes);

//connect to db
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

//start server
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});