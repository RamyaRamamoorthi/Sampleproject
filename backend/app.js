const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.post("/api/posts", (req, res, next) => {
  res.send("Hello Post")
});

app.get("/api/posts", (req, res, next) => {
    res.send("Hello get")
});

app.delete("/api/posts/:id", (req, res, next) => {
    res.send("Hello delete")
});
app.put("/api/posts/:id", (req, res, next) => {
    res.send("Hello update")
});
module.exports = app;
