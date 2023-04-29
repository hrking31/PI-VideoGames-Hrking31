const { Genre } = require("../db");

const createGenre = async (
  name,
  description,
  released,
  rating,
  platforms,
  genres
) =>
  await Genre.create({
    name,
    description,
    released,
    rating,
    platforms,
    genres,
  });

module.exports = { createGenre };
