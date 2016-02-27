var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase2');

var User = require('./app/models/user_model');

// get all the users
User.find({}, function(err, users) {
  if (err) throw err;

  // object of all the users
  console.log(users);
});