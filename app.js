var express =require('express');
<<<<<<< aaf8d56b41d69a2820364d0a6c91a9f7b50f34dc
var app =express();
var port =5005;
app.get('/',function(req,res){
   res.send('Hello everyone!!!');
});
app.listen(5005,function(err){
   console.log('running server on port '+ port);
=======

var app =express();
var port = 5005;
app.get('/',function(req,res){
   res.send('Hello everyone!!!');
});
app.listen(5005,function(err)
{
	console.log('running server on port' + port);
>>>>>>> Created public folder
});
