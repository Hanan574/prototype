const express = require("express");

//express app

const app = express();

//register view engine

app.set("view engine", "ejs");
app.set("views", "view");

//listening for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/afar", (req, res) => {
  res.render("afar");
});
app.get("/amhara", (req, res) => {
  res.render("amhara");
});
app.get("/gambella", (req, res) => {
  res.render("gambella");
});
app.get("/gurage", (req, res) => {
  res.render("gurage");
});
app.get("/oromo", (req, res) => {
  res.render("oromo");
});
app.get("/sidama", (req, res) => {
  res.render("sidama");
});
app.get("/snnpr", (req, res) => {
  res.render("snnpr");
});
app.get("/somalia", (req, res) => {
  res.render("somalia");
});
app.get("/wolayta", (req, res) => {
  res.render("wolayta");
});
app.get("/tigray", (req, res) => {
  res.render("tigray");
});
app.get("/contribute", (req, res) => {
  res.render("contribute");
});
app.get("/explore", (req, res) => {
  res.render("explore");
});
