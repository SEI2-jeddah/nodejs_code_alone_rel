const express = require("express");
const router = express.Router();
const User = require("../model/User");

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  let user = new User({
    firstname: req.body.first_name,
    lastname: req.body.last_name,
    username: req.body.display_name,
    password: req.body.password,
    email: req.body.email
  });

  user
    .save()
    .then(() => {
      res.redirect("/auth/login");
    })
    .catch(() => {
      res.redirect("/404");
    });
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", (req, res) => {});

module.exports = router;
