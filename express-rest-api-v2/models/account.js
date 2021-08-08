const autoIncrement = require('mongoose-auto-increment');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
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
  email: {
    type: String,
    unique: true,
    required: true
  },
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
Account.methods.validatePassword = function(password){
  console.log(this.salt);
  // validate the p/w and return true or false
  const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512' ).toString('hex');
  return this.hash === hash;
}

// Gen JWT 
// only if successfully authenticated
Account.methods.generateJWT = function(){
  const today = new Date();
  const expirationDate = new Date(today);
  expirationDate.setDate(today.getDate() + 60);

  return jwt.sign({
    email: this.email,
    accountId: this.accountId,
    exp: parseInt(expirationDate.getTime() / 1000, 10)
  }, 'secret');

}


Account.plugin(autoIncrement.plugin, { model: 'Account', field: 'accountId', startAt: 1 });
module.exports = mongoose.model('Account', Account);

