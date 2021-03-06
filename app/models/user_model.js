// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  name: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: Boolean,
  location: String,
  meta: {
    age: Number,
    website: String
  },
  created_at: Date,
  updated_at: Date
});

/*userSchema.methods.checkUsernameAndPassword = function(abc) {
	console.log('i metoden dudify. Fra parameter: ');
	console.log(abc);
  // add some stuff to the users name
  this.name = this.name + '-dude'; 

  return this.name;
};*/

userSchema.methods.checkUsernameAndPassword = function (uname, callback) {
  User.find({username: uname}, function(err, users) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, users[0]);
    }
  });
};

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;

