const axios = require("axios");
const { Videogame } = require("../db");
const { API_KEY } = process.env;

//------>>>//--CREA VIDEOGAME--//<<<------//
const createVideogame = async (
  name,
  description,
  platforms,
  image,
  released,
  rating
) =>
  await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
  });

//------>>>//--BUSCA VIDEOGAME POR ID--//<<<------//
const VideogamesById = async (id, source) => {
  const videogame =
    source === "api"
      ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
          .data
      : await Videogame.findByPk(id);
  // return videogame;
  return cleanArray([videogame]);
};

//------>>>//----//<<<------//
const cleanArray = (arr) =>
  arr.map((Elem) => {
    return {
      id: Elem.id,
      name: Elem.name,
      description: Elem.description,
      image: Elem.background_image,
      released: Elem.released,
      rating: Elem.rating,
      platforms: Array.isArray(Elem.platforms)
        ? Elem.platforms.map((nombre) => nombre.platform.name)
        : [],
      //platforms: Elem.platforms.map((nombre) => nombre.platform.name),
      created: false,
    };
  });

const allgetVideogames = async () => {
  const databaseVideogames = await Videogame.findAll();
  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
  ).data.results;
  const apiVideogames = cleanArray(apiVideogamesRaw);
  return [...databaseVideogames, ...apiVideogames];
};

const searchgetVideogames = async (name) => {
  const databaseVideogames = await Videogame.findAll({ where: { name: name } });
  const apiVideogamesRaw = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    )
  ).data.results;
  const apiVideogames = cleanArray(apiVideogamesRaw);
  return [...databaseVideogames, ...apiVideogames];
};

module.exports = {
  createVideogame,
  VideogamesById,
  allgetVideogames,
  searchgetVideogames,
};

//https://api.rawg.io/api/games/4?key=2b8fb77a19da463ebcfe759326687e6f
