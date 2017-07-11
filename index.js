var express = require("express");
var json = express();
var fs = require("fs");


json.use(express.static("public"));

json.get("/", function(req, res){
	// res.sendfile("index.html");
    res.send("ok");
});

json.listen(3000, function(){
	console.log("app statr on port 3000");
});