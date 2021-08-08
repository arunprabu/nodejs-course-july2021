const autoIncrement = require('mongoose-auto-increment');
const crypto = require('crypto');
const mongoose = require('./mongo'); // importing the connection configuration

const Schema = mongoose.Schema;

// name of the Collection is accounts
const Account = new Schema({
  accountId: {
    type: Number,
    unique: true,
    required: true
  },
  name: String,
  email: String,
  salt: String,
  hash: String,
  status: String,
  isEmailVerified: Boolean,
  createdBy: String,
  createdOn: { type: Date, default: Date.now },
  updatedBy: String,
  updatedOn: { type: Date, default: Date.now }
}, { strict: true }); // learn about true and false

// util method -- to encrypt p/w using salt 
// then, you will get the relevant hash for the p/w 
Account.methods.setPassword = function(password) { // original password
  console.log(password);
  // create salt to be applied on the p/w -- to get the hash
  this.salt = crypto.randomBytes(16).toString('hex');
  console.log(this.salt);
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512' ).toString('hex');
  console.log(this.hash);
}

// have validatePassword methd -- take in original p/w as input

// validate the p/w and return true or false

Account.plugin(autoIncrement.plugin, { model: 'Account', field: 'accountId', startAt: 1 });
module.exports = mongoose.model('Account', Account);

