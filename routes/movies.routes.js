const express = require("express");
const router = express.Router();
const Movies = require("../model/Movie");

// router.post();

router.get("/ms", (res, ebere) => {
  ebere.send("o_____o");
});

router.get("/m", (req, res) => {
  res.send("m ___ok");
});

module.exports = router;
