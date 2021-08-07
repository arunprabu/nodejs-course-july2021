// exec db query
// send the data from here 

// createUser 
exports.createUser = function (userData, callback) {
  console.log('Inside createUser');
  console.log(userData);

  // mocking the db call with 2 sec timeout
  setTimeout(() => {
    callback(null, {
      id: 999,
      name: 'John',
      email: 'j@k.com',
      phone: '4234231132'
    });
  }, 1000);
  // exec db query
  // get the result from db
  // send the result back to routes
}

// getUsers
exports.getUsers = function (callback) {

  callback(null, [
    {
      id: 1,
      name: 'John',
      phone: '242424234',
      email: 'a@b.com'
    },
    {
      id: 2,
      name: 'Steve',
      phone: '2133',
      email: 't@s.com'
    }
  ]);
}

// getUserById
exports.getUserById = function (userId, callback) {
  console.log(userId);

  callback(null, {
    id: userId,
    name: 'John',
    phone: '2342234',
    email: 'j@k.com'
  });
}

// updateUser
exports.updateUser = function (userId, userData, callback) {
  console.log(userId);
  console.log(userData);

  callback(null,
    {
      msg: 'Updated Successfully!',
      data: {
        id: userId,
        name: userData.name,
        email: userData.email,
        phone: userData.phone
      }
    });

}


// deleteUser 
exports.deleteUser = function(userId, callback){

  console.log(userId);

  callback( null, {
    msg: 'Deleted Successfully!'
  })

}



