var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Campeonato = Mongoose.model('Campeonato');

/* GET visualizacao listing. */
router.get('/', function(req, res, next) {
  Campeonato.find().exec(function(err, data){
  	res.render('visualizacao', { title: 'Visualizacao', linkactive: ["active", "disabled", "active"], data: data });
  });
});

module.exports = router;
