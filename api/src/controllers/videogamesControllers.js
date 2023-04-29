const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY } = process.env;

const createVideogame = async (
  name,
  description,
  platforms,
  image,
  release,
  rating
) =>
  await Videogame.create({
    name,
    description,
    platforms,
    image,
    release,
    rating,
  });

const VideogamesById = async (id, source) => {
  const videogame =
    source === "api"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data
      : await Videogame.findByPk(id);
  return videogame;
};

module.exports = { createVideogame, VideogamesById };

//https://api.rawg.io/api/games/4?key=2b8fb77a19da463ebcfe759326687e6f
