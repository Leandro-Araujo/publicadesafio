var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home', linkactive: ["disabled", "active", "active"] });
});

module.exports = router;
