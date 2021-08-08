const autoIncrement = require('mongoose-auto-increment');
const mongoose = require('./mongo'); // importing the connection configuration

const Schema = mongoose.Schema;

// name of the Collection is users
const User = new Schema({
  userId: {
    type: Number,
    unique : true,  
    required : true 
  },
  name: String,
  email: String,
  phone: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now }
});

User.plugin(autoIncrement.plugin, { model: 'User', field: 'userId', startAt: 1 });
module.exports = mongoose.model('User', User);

