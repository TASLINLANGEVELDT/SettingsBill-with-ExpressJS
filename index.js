const express = require('express');

const app = express();

 app.get('/', function(req, res){
   res.send('Settings Bill App')
 })

app.post('/settings', function(req, res){

});

app.post('/action', function(req, res){

});

app.post('/actions', function(req, res){

});

app.post('/actions/:type', function(req, res){

});

const PORT = process.env.PORT ||3013

app.listen(PORT, function(){
  console.log("App started at port:", PORT)
});
