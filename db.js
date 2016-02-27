var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/myappdatabase2');

// if our user.js file is at app/models/user.js
var User = require('./app/models/user_model');

// create a new user called chris
var tempUser = new User({
  name: 'Chris',
  username: 'sevilayha8',
  password: 'password2' 
});

tempUser.checkUsernameAndPassword(username, password, function(err, name) {
  console.log('Your new name is ' + name);
  if (err) throw err;

  
});


// call the custom method. this will just add -dude to his name
/* user will now be Chris-dude
tempUser.dudify('aaaaa', function(err, name) {
  console.log('Your new name is ' + name);
  if (err) throw err;

  
});

//chris.dudify('aaa');

console.log(tempUser.name);

// call the built-in save method to save to the database
tempUser.save(function(err) {
  if (err) throw err;

  console.log('User saved successfully!');
});

/*