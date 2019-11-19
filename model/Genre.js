"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Genre = mongoose.model("Genres", genreSchema);
module.exports = Genre;
