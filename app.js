//jshint esversion:6

const express = require("express");


const app = express();

app.use(express.static("public"));


app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});



app.get("/contact", function(req, res){
  res.sendFile(__dirname + "/contact.html");
});




app.get("/services", function(req, res){
  res.sendFile(__dirname + "/services.html");
});





app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
