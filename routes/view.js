var express = require('express');
var router = express.Router();

/* GET visualizacao listing. */
router.get('/', function(req, res, next) {
  res.render('visualizacao', { title: 'Visualizacao' });
});

module.exports = router;
