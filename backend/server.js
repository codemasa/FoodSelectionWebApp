const dotenv = require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require('cors');
const mysql = require('mysql');
const nodemailer = require("nodemailer");


const connection = mysql.createConnection({
  host     : process.env.DB_HOST,
  user     : process.env.DB_USER,
  password : process.env.DB_PASS,
  port     : process.env.DB_PORT
});

const API_PORT = 3002;
const app = express();
connection.connect(function(err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }

  console.log('Connected to database on port '+ API_PORT);
});

app.use(cors({
  origin: 'http://localhost:'+3000,
  credentials: false
}));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));



app.get('/chefstefandb', function (req, res) {
    connection.query('SELECT * FROM chefstefandb.Recipe LIMIT 0, 10', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

});
app.use('/order', (req, res) =>
              {
                const date = (new Date().getDate());
                const month = (new Date().getMonth()+1);
                const year = (new Date().getFullYear());
                const hour = (new Date().getHours());
                const minute = (new Date().getMinutes());
                const minutes = minute > 9 ? minute : "0" + minute
                const second = (new Date().getSeconds());
                const seconds = second > 9 ? second : "0" + second

                const arr = req.body;
                const count = arr.length;
                var htmlMessage = "<h1>New order with "+ count +" items</h1>";
                for(var i=0 ; i<count ; i++){
                  htmlMessage += "<h1>"+arr[i].recipeName+"</h1>";
                  htmlMessage += "<p> Meal: "+arr[i].formData.meal+"</p>";
                  htmlMessage += "<p> Qty: "+arr[i].formData.portions+"</p>";
                  if(arr[i].formData.instructions){
                    htmlMessage += "<p> Instructions: "+arr[i].formData.instructions+"</p>";
                  }else{
                    htmlMessage += "<p> Instructions: none</p>";
                  }
                }
                const transporter = nodemailer.createTransport({
                  service: process.env.EMAIL_SERVICE,
                  auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS
                  }
                });
                const mailOptions = {
                  from: '"Chef Rabicano Notifs" chefrabicanonotifs@gmail.com', // sender address
                  to: process.env.EMAIL_REC, // list of receivers
                  subject: "New Recipe Request "+ date + "/" + month + "/" + year + " at " + hour + ":"+ minutes + ":"+ seconds, // Subject line
                  text: "", // plain text body
                  html: htmlMessage // html body
                };
                transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                    console.log(error);
                  } else {
                    console.log('Email sent: ' + info.response);
                    res.send(true)
                  }
                });
});

app.listen(3002, () => {
 console.log('Go to http://localhost:3002/chefstefandb to see posts');
});
