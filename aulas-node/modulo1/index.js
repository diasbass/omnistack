const express = require("express");
const nunjucks = require("nunjucks");

const app = express();

nunjucks.configure("views", {
  autoscape: true,
  express: app,
  watch: true
});

app.set("view engine", "njk");

const users = ["Usuario A", "Usuario B", "Usuario C"];

app.get("/", (req, res) => {
  return res.render("list", { users });
});

app.get("/new", (req, res) => {
  return res.render("new");
});

app.listen(3000);
