const express = require("express");
const router = express.Router();
const Movies = require("../model/Movie");

router.post("/", (req, res) => {
  let movie = new Movies({
    description: req.body.description,
    title: req.body.title,
    rating: 3
  });

  res.send("ok");
});

router.get("/", (req, res) => {
  Movies.find()
    .then((movies) => {
      res.render("movie/index");
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
