var Mongoose = require('mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {

});

/*Mongoose.connect('mongodb://localhost/sitelink');

var Campeonato = new Mongoose.Schema({

    

});

var Campeonato = Mongoose.model('Campeonato', Campeonato);*/