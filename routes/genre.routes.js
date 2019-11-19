const express = require("express");
const router = express.Router();
const Genre = require("../model/Genre");

router.post("/create", (req, res) => {
  let genre = new Genre({
    name: req.body.name
  });

  genre
    .save()
    .then(() => {
      res.redirect("/genres");
    })
    .catch((err) => {
      res.send(err);
    });

  // res.send("ok");
});

//show create form
router.get("/create", (req, res) => {
  res.render("genre/create");
});

router.get("/", (req, res) => {
  Genre.find()
    .then((genres) => {
      res.render("genre/index", { genres });
    })
    .catch((err) => {
      res.json({ error: err });
    });
});

module.exports = router;
