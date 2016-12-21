var express =require('express');
var app =express();
var port =5005;
app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/',function(req,res){
   res.send('Hello everyone!!!');
});
app.listen(5005,function(err){
   console.log('running server on port '+ port);
});
