//jshint esversion:6
const express = require("express");

const nodemailer = require("nodemailer");


const app = express();
app.use(express.static("public"));

app.use(express.json());



app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});



app.get("/contact", function(req, res){

  res.sendFile(__dirname + "/contact.html");
});

app.post("/contact", function(req, res){
  console.log(req.body);

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'muktarbello32@gmail.com',
    pass: 'octnqijpnxkwgzus'
  },
});

let mailOptions = {
  from: req.body.email,
  to: 'muktarbello32@gmail.com',
  subject: req.body.name,
  text: req.body.message,
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
 res.send('error');
  } else {
    console.log('Email sent: ' + info.response);
    res.send('success');
  }
});

});


app.get("/services", function(req, res){
  res.sendFile(__dirname + "/services.html");
});





app.listen(process.env.PORT || 3000, function() {
  console.log("Server started on port 3000");
});
