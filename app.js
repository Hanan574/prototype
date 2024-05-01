const express = require("express");

//express app

const app = express();

//register view engine

app.set("view engine", "ejs");
app.set("views", "view");

//listening for requests
app.listen(3000);

app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});
app.get("/afar", (req, res) => {
  res.render("afar", { title: "Afar" });
});
app.get("/amhara", (req, res) => {
  res.render("amhara", { title: "Amhara" });
});
app.get("/gambella", (req, res) => {
  res.render("gambella", { title: "Gambella" });
});
app.get("/gurage", (req, res) => {
  res.render("gurage", { title: "Gurage" });
});
app.get("/oromo", (req, res) => {
  res.render("oromo", { title: "Oromo" });
});
app.get("/sidama", (req, res) => {
  res.render("sidama", { title: "sidama" });
});
app.get("/snnpr", (req, res) => {
  res.render("snnpr", { title: "snnpr" });
});
app.get("/somalia", (req, res) => {
  res.render("somalia", { title: "somalia" });
});
app.get("/wolayta", (req, res) => {
  res.render("wolayta", { title: "wolayta" });
});
app.get("/tigray", (req, res) => {
  res.render("tigray", { title: "tigray" });
});
app.get("/contribute", (req, res) => {
  res.render("contribute", { title: "contribute" });
});
app.get("/explore", (req, res) => {
  res.render("explore", { title: "explore" });
});
app.get("/login", (req, res) => {
  res.render("login", { title: "login" });
});
