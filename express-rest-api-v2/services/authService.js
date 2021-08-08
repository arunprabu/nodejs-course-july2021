const passport = require('passport');
const Account = require('../models/account');

exports.signup = function (signupFormData, callback) {

  console.log(signupFormData);

  // for temp password  --  npm i generate-password
  // gen salt and hash for the password
  
  //exec query 
  const accountDao = new Account(signupFormData);

  accountDao.setPassword(signupFormData.password);

  // TODO: remove password from accountDao. learn about removing property from obj 

  accountDao.save( (err, result) => {
    if(!err){
      console.log('Signup Successful!');
      //send email with temp password -- @sendgrid/mail 
    }

    
    let status = {
      info: 'Not Saved'
    }
    if(result.accountId){
      status.info = 'Account Created'
    }
    callback(err, status);
  });

}

exports.login = function (req, callback) {

  //exec query 
  console.log(req.body);

  // auth flow using passport local
  passport.authenticate('local', function(err, account, info){
    // 
    if(err){
      callback(err);
    }

    // if account is found -- upon successful authentication
    if(account){
      const resp = {
        email: account.email,
        token: account.generateJWT() // Gen JWT Token
      }

      callback(err, resp);
    }else{
      // if the email is not found, send error
      callback(err, info);
    }

  })(req, callback);
}

