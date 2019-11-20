const express = require("express");
const router = express.Router();

router.get("/register", (req, res) => {
  res.render("auth/register");
});

router.post("/register", (req, res) => {});

router.get("/login", (req, res) => {
  res.render("auth/login");
});
router.post("/login", (req, res) => {});

module.exports = router;
