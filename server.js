const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv/config");

app.set("view engine", "ejs");
app.use(ejsLayouts);

mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", async (req, res) => {
  res.render("contact");
});

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(5100, () => console.log("express running"));
