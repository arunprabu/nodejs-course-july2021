const express = require('express');
const authService = require('../../services/authService');
const router = express.Router();

// localhost/api/auth/signup
router.post('/signup', function (req, res, next) {
  console.log(req.body); // form data

  authService.signup(req.body, (err, data) => {
    if(!err){
      res.status(201).json(data);
    }else{
      res.json(err);
    }
  });


});

// localhost/api/auth/login
router.post('/login', function (req, res, next) {
  console.log(req.body); // form data

  // TODO: // We are sending req.body -- check it later
  authService.login(req.body, (err, data) => {
    if(!err){
      res.status(201).json(data);
    }else{
      res.json(err);
    }
  });
});

module.exports = router;