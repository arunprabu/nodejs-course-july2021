// establish handshake with DB (from services)
const User = require('../models/user');

// createUser 
exports.createUser = function (userDataToBeSaved, callback) {
  console.log('Inside createUser');
  console.log(userDataToBeSaved);
  
  userDataToBeSaved.status = 'ACTIVE';
  // exec db query
  const userDao = new User(userDataToBeSaved);
  userDao.save((err, savedUser) => { // get the result 

    // send it back to routes
    if(!err){
      console.log(`User Created Successfully with User Id ${savedUser.name} `);
    }
    callback(err, savedUser);

  });
  
  
}

// getUsers
exports.getUsers = function (callback) {

  User.find((err, userList) =>{
    if(!err){
      console.log('Users Fetched: ' + userList.length);
    }
    callback(err, userList);
  });
  
}

// getUserById
exports.getUserById = function (userId, callback) {
  console.log(userId);

  User.findOne({userId: userId}, (err, userData) => {
    if(!err){
      console.log(userData);
    }
    callback(err, userData);
  });
}

// updateUser
exports.updateUser = function (userId, userData, callback) {
  console.log(userId);
  console.log(userData);

  User.updateOne({userId: userId}, userData, (err, result) => {

    let _msg = 'Not Updated! Some Error Occured!';
    if(!err){
      if(result && result.n == 1){
        console.log(result);
        _msg =  'Updated Successfully!'
      }
    }

    callback(err, { msg: _msg });
  });
}


//TODO: deleteUser 
exports.deleteUser = function(userId, callback){

  console.log(userId);

  callback( null, {
    msg: 'Deleted Successfully!'
  })

}



