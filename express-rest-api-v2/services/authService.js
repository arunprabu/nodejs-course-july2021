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

exports.login = function (loginFormData, callback) {

  //exec query 
  console.log(loginFormData);

  // 1. check whether the email is valid 
  // 2. if true, validate password 

  // if(!err){
  //   console.log('Signup Successful!');
  // }
  // callback(err, result);

}

