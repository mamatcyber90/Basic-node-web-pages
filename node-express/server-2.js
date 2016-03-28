// simple server using express
var express =require('express');
var morgan=require('morgan');       // to store log details on server

var hostname='localhost';
var port=3000;

var app=express();

app.use(morgan('dev'));

app.use(express.static(__dirname +'/public'));         // to use static files 

app.listen(port,hostname,function(){
	console.log('Server running at http://'+hostname+':'+port+'/');
});