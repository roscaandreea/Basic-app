var express =require('express');
var app =express();
var port = process.env.PORT|| 5005;

app.use(express.static('public'));

app.set('views','src/views');
app.set('view engine','jade');

app.get('/', function(req,res){
   res.render('index',{list:['a','b','c']});
});

app.listen(5005,function(err){
   console.log('running server on port '+ port);
});
