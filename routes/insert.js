var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Campeonato = Mongoose.model('Campeonato');
/* GET insert page. */
router.get('/', function(req, res, next) {
  res.render('insercao', { title: 'Insercao', linkactive: ["active", "active", "disabled"] });
});

router.post('/', function(req, res, next) {
  var camp = new Campeonato({
    placar: req.body.placar,
    minTemp: req.body.min,
    maxTemp: req.body.max

  });
  camp.save(function(err, data) {
	if (err) return console.error(err);
	res.render('insercao', { title: 'Insercao', linkactive: ["active", "active", "disabled"] });
  });
});

module.exports = router;