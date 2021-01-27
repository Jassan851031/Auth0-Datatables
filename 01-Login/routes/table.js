var express = require('express');
var secured = require('../lib/middleware/secured');
var router = express.Router();


/* GET user table. */
router.get('/table', function (req, res, next) {
  res.render('table', { title: 'Users table' });
});

module.exports = router;

// router.get('http://localhost:8082/api/users', function (req, res, next) {
//   res.render('usuarios', { title: 'Users_table' });
// });

// module.exports = router;