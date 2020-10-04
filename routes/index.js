var express = require('express');
var router = express.Router();
var Mongoose = require('mongoose');
var Campeonato = Mongoose.model('Campeonato');



/* GET home page. */
router.get('/', function(req, res, next) {
	Campeonato.find().exec(function(err, data){
		var recordMin = 0;
		var recordMax = 0;
		for(var i = 0; i < data.length; i++){
			if(data[i].placar >= data[i].minTemp){
				recordMin = recordMin + 1;

			}
			if(data[i].placar >= data[i].maxTemp){
				recordMax = recordMax + 1;
			}
		}
		
		res.render('index', { title: 'Home', linkactive: ["disabled", "active", "active"], recordMin: recordMin, recordMax: recordMax });
	});
  
});

module.exports = router;
