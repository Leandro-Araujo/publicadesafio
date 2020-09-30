var express = require('express');
var router = express.Router();

/* GET insert page. */
router.get('/', function(req, res, next) {
  res.render('insercao', { title: 'Insercao', linkactive: ["active", "active", "disabled"] });
});

module.exports = router;