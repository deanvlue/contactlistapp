var express = require('express');
var mongojs = require('mongojs');

//Connects to the db
var db = mongojs('contactlist',['contactlist']);

// Generats the web app
var app = express();


var bodyParser = require('body-parser');

//app.get('/', function(req, res){
  //res.send('Hello World from express server');
//});

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function(req, res){
  console.log("recibi un request para contactos");

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
});

app.post('/contactlist', function(req, res){
  console.log(req.body);
  db.contactlist.insert(req.body, function(err,doc){
    res.json(doc);
  });
});

app.listen(3001);
console.log("Server in localhost:3001");
  
