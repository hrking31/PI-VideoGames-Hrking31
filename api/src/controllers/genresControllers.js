const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { API_KEY } = process.env;

//------>>>//--CREA RELACION DE GENRES EN DB--//<<<------//
// const createGenreDb = async (name, videogameId) => {
//   const newGenre = await Genre.create({ name });
//   await Genre.setVideogames(videogameId);
//   return newGenre;
// };
const createGenreDb = async (name, videogameId) => {
  const newGenre = await Genre.create({ name });
  const videogame = await Videogame.findByPk(videogameId); // Obtener la instancia de Videogame

  await newGenre.setVideogames([videogame]); // Establecer la relación entre el género y el videojuego

  return newGenre;
};

//------>>>//--BUSCA LOS GENRES Y LOS ALMACENA EN DB--//<<<------//
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

module.exports = { createGenre, createGenreDb };
