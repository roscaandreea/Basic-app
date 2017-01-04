var express =require('express');
var app =express();
var port = process.env.PORT|| 5005;

app.use(express.static('public'));

app.set('views','src/views');
var handlebars =require('express-handlebars');
app.engine('.hbs',handlebars({extname: '.hbs'}));
app.set('view engine','.hbs');

app.get('/', function(req,res){
   res.render('index', { title:'Hello from here!!!', list:['a','b','c']});
});

app.listen(5005,function(err){
   console.log('running server on port '+ port);
});
