const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejsLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv/config");
const moviesRoutes = require("./routes/movies.routes");
const genreRoutes = require("./routes/genre.routes");
const authRoutes = require("./routes/auth.routes");
const session = require("express-session");
const passport = require("passport");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.use(ejsLayouts);

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);
//passport initialize must be after your session
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(
  process.env.DEV_DB,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to mongoDB");
  }
);

mongoose.set("useCreateIndex", true);

app.use("/movies", moviesRoutes);
app.use("/genres", genreRoutes);
app.use("/auth", authRoutes);

app.get("*", (req, res) => {
  res.render("404");
});

app.listen(5100, () => console.log("express running"));
