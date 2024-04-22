var express = require('express');
var router = express.Router();

/* GET pictures listing. */
router.get('/', function(req, res, next) {
  res.render('pictures');
});

module.exports = router;