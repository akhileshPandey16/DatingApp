var express 	= require('express')
	app			= express(),
	server		= require('http').createServer(app),
	io			= require('socket.io').listen(server);

// app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static("public"));
// ==========================================================


var users		= [],
	connections	= [];
// ==========================================================
//ROUTES :=>>
// ==========================================================	
app.get("/",function(req,res) {
	res.send("Hello!");
});
// ==========================================================
app.get("/signUp",function(req,res) {
	res.render("signUp");
});
// ==========================================================
server.listen(process.env.PORT||3000);