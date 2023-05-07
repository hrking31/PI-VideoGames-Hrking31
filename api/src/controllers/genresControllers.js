const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;

// const createGenre = async (
//   name,
//   description,
//   released,
//   rating,
//   platforms,
//   genres
// ) =>
//   await Genre.create({
//     name,
//     description,
//     released,
//     rating,
//     platforms,
//     genres,
//   });

const createGenre = async () => {
  const response = await axios.get(
    `https://api.rawg.io/api/genres?key=${API_KEY}`
  );
  const genres = response.data.results.map((genre) => ({
    name: genre.name,
  }));
  genres.forEach(async (genre) => {
    await Genre.findOrCreate({
      where: { name: genre.name },
    });
  });
  const allGenres = await Genre.findAll();
  return allGenres;
};

module.exports = { createGenre };
