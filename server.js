var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');

mongoose.connect('mongodb://locolhost/rest_test');

var app=express();
app.use(bodyParser.urlencoded({ extened: true}));
app.use(bodyParser.json());

app.use('/api',require('./routes/api'));

/*app.get('/',function(req,res){
  res.send('working');
});*/

app.listen(3000);
console.log('Api working at port 3000');
