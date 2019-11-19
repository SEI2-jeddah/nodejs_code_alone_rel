"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: String,
    rating: {
      type: Number
    },
    genres: {
      type: Schema.Types.ObjectId,
      ref: "Genres"
    }
  },
  { timestamps: true }
);

const Movies = mongoose.model("Movies", movieSchema);
module.exports = Movies;
