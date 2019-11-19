const express = require("express");
const router = express.Router();
const Movies = require("../model/Movie");

// router.post();

router.get("/", (req, res) => {
  Movies.find()
    .then((movies) => {
      res.render("movie");
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
