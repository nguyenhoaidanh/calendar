var express=require('express');
var app=express();
var bodyParser = require("body-parser");

app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express.static('public'));
app.get('/',function(req,res){
		var data={month:"",year:""};
		res.render('index',{data:data});
});
app.get('/:month/:year',function(req,res){
		var data={month:req.params.month,year:req.params.year};
		res.render('index',{data:data});
});
app.set('port', process.env.PORT || 8080);
app.listen(process.env.PORT || 8080);
console.log("Create server done");