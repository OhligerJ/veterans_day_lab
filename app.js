var express = require("express"),
app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index');
});

app.get('*', function(req, res){
	res.render('404');
});

app.listen(3000, function(){
	console.log("Server starting on port 3000");
});