var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var Account = mongoose.model('Account');

// basic config for login using passport local 
passport.use(new LocalStrategy({
    usernameField: 'email'
  },
  function(email, password, done) {
    Account.findOne({ email: email }, function (err, account) {
      if (err) { return done(err); }
      // Return if account not found in database
      if (!account) {
        return done(null, false, {
          message: 'Account not found'
        });
      }
      // Return if password is wrong
      if (!account.validatePassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the account object
      return done(null, account);
    });
  }
));