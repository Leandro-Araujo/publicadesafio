var Mongoose = require('mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
	console.log("Conexao ok");
});

Mongoose.connect('mongodb://talento:talento2020@ds131687.mlab.com:31687/talento');

var Campeonato = new Mongoose.Schema({

    placar: Number,
    minTemp: Number,
    maxTemp: Number

});

var Campeonato = Mongoose.model('Campeonato', Campeonato);