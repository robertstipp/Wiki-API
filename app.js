//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

// TODO:

// Database: Mongoose DB

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser: true});

articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model('Article', articleSchema);

let articles = [];


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
