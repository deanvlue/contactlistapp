var express = require('express');
var mongojs = require('mongojs');

//Connects to the db
var db = mongojs('contactlist',['contactlist']);

// Generats the web app
var app = express();

//app.get('/', function(req, res){
  //res.send('Hello World from express server');
//});

app.use(express.static(__dirname + '/public'));

app.get('/contactlist', function(req, res){
  console.log("recibi un request para contactos");

  db.contactlist.find(function(err, docs){
    console.log(docs);
    res.json(docs);
  });
/*
 * person1 ={
    name: 'Tim',
    email: 'tim@example.com',
    number: '111-111-111'
  };
  
  person2 ={
    name: 'Carlos',
    email: 'carlos@example.com',
    number: '111-222-444'
  };
  
  person3 ={
    name: 'Juan',
    email: 'juan@example.com',
    number: '333-333-333'
  };


  var contactlist = [person1, person2, person3];
  res.json(contactlist);*/
});

app.listen(3001);
console.log("Server in localhost:3001");
  
