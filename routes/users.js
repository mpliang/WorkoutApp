var express = require('express');
var router = express.Router();

var User = require('../models/User');


/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find({}, function(err, data){
    console.log(data);
    res.status(err ? 400 : 200).send(err || data);
  });
});

// router.get('/:userId', function(req, res) {
//   User.findById(req.params.userId, function(err, client){
//     console.log('test');
//     res.send(client);
//   });
// });

router.get('/user', function(req, res, next) {
  User.find({}, function(err, data){
    console.log(data);
    res.status(err ? 400 : 200).send(err || data);
  });
});



module.exports = router;
