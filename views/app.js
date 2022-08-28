//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const greeting = "Hello there";
const title = "Here's who I am and what I do";
const bio = `I am Pulindu de Silva a product of University of Moratuwa. I have a bachelors degree in 
Electrical Engineering. Soon after graduating I worked as an Energy Engineer. But I wanted to change 
my field to web development because it was my passion since childhood. Since I am an eager to learn 
individual, I've earned a professional certificate on Google Automation with python from Coursera,and 
I have already enrolled for "The Complete 2022 Web Development Bootcamp" offered by Udemy and 
"Meta Front-End Developer Professional Certificate" offered by Coursera to strengthen my knowledge 
on Web development. To start my journey as a front-end/ full stack web developer I know these skills 
will come in handy.`

app.get("/", function (req, res) {
    res.render("about", { bioContent: bio, greeting: greeting, title: title });
});



app.listen(3000, function () {
    console.log("Server started on port 3000");
});