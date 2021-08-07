const express = require('express');
const userService = require('../../services/usersService');
const router = express.Router();

/* GET users listing. */
/* api/users */
router.get('/', function (req, res, next) {
  console.log(`Request Method ${req.method}`);
  console.log(`Request URL: ${req.url}`);

  userService.getUsers(function (err, result) {
    if (!err) {
      res.json(result);
    } else {
      res.json(err);
    }
  });
});

/* POST user */
/* api/users */
router.post('/', function (req, res, next) {
  console.log(req.body); // form data

  // 1. send the data to the service
  userService.createUser(req.body, function (err, result) { // 2. get the result from the service
    console.log(err);
    console.log(result);

    if (!err) {
      res.status(201).json(result);
    } else {
      res.json(err);
    }
  });

});


/* GET user by id */
/* api/users/:id */
router.get('/:id', function (req, res, next) { // id is the URL Param
  console.log(`Fetching user by id ${req.params.id}`);

  userService.getUserById(req.params.id, function (err, result) {
    if (!err) {
      res.status(200).json(result);
    } else {
      res.json(err);
    }
  });

});

// Update User by Id
router.put('/:id', (req, res, next) => {
  console.log(`User ID: ${req.params.id}`); // What user id we should update

  console.log(req.body); // Updatable Form Data

  userService.updateUser(req.params.id, req.body, function(err, result){
    if(!err){
      res.status(201).json(result);
    }else{
      res.json(err);
    }
  });
});

router.delete('/:id', (req, res, next) => {
  console.log(`User ID: ${req.params.id}`); // What user id we should delete

  userService.deleteUser(req.params.id, function(err, result){
    if(!err){
      res.status(201).json(result);
    }else{
      res.json(err);
    }
  })

});

// TODO: Learn about 'patch' http method


module.exports = router;
