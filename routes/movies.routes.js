const express = require("express");
const router = express.Router();
const Movies = require("../model/Movie");
const Genres = require("../model/Genre");

router.post("/create", (req, res) => {
  let movie = new Movies();

  movie.description = req.body.description;
  movie.title = req.body.title;
  movie.rating = req.body.rating;
  movie.genres = req.body.genres;
  console.log(movie);

  movie
    .save()
    .then((m) => {
      res.json({ m });
    })
    .catch((e) => {
      res.json({ e });
    });
});

router.get("/create", (req, res) => {
  Genres.find().then((genres) => {
    res.render("movie/create", { genres });
  });
});

router.get("/", (req, res) => {
  Movies.find()
    .populate("genres")
    .then((movies) => {
      res.json({ movies });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
