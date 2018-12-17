// app.js

var express = require('express');
var bodyParser = require('body-parser');

var product = require('./routes/product'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb://nmoadbuser:nmoadbuser2019@ds135592.mlab.com:35592/nmoamlab';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
//Store all JS and CSS in Scripts folder.
app.use('/', product);

var port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
