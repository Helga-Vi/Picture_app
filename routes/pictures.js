var express = require('express');
var router = express.Router();

/* GET pictures listing. */
router.get('/', function(req, res, next) {
  res.render('pictures');
});

router.post('/', function(req, res, next) {
    console.log(req.files);
    res.end();
  });

module.exports = router;