const mongoose = require('./mongo'); // importing the connection configuration

const Schema = mongoose.Schema;

// name of the Collection is users
const User = new Schema({
  userId: Number,
  name: String,
  email: String,
  phone: String,
  status: String,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', User);

