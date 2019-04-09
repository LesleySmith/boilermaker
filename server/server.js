const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("Knock, knock");
  console.log("Who's there?");
  console.log(`Your server, listening on port ${port}`);
});

// Logging Middleware
app.use(morgan('dev'));

// Static Middleware
app.use(express.static(path.join(__dirname, './public')));

// Body Parsing Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 'API' Routes
app.use('/api', require('./apiRoutes'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './public/index.html'));
});

// SERVER ERROR
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

