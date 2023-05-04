const axios = require("axios");
const { Videogame } = require("../db");
const cleanArrayDb = require("../utils/CleanArrayDb");
const cleanArrayApi = require("../utils/cleanArrayApi");
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
  if (source === "db") {
    return cleanArrayDb([await Videogame.findByPk(id)]);
  } else {
    return cleanArrayApi([
      (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`))
        .data,
    ]);
  }
};

//------>>>//--BUSCA VIDEOGAMES POR NOMBRE--//<<<------//
const allgetVideogames = async () => {
  const databaseVideogames = await Videogame.findAll();
  const apiVideogamesRaw = (
    await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
  ).data.results;
  const apiVideogames = cleanArrayApi(apiVideogamesRaw);
  return [...databaseVideogames, ...apiVideogames];
};

const searchgetVideogames = async (name) => {
  const databaseVideogames = await Videogame.findAll({ where: { name: name } });
  const apiVideogamesRaw = (
    await axios.get(
      `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    )
  ).data.results;
  const apiVideogames = cleanArrayApi(apiVideogamesRaw);
  return [...databaseVideogames, ...apiVideogames];
};

module.exports = {
  createVideogame,
  VideogamesById,
  allgetVideogames,
  searchgetVideogames,
};

//https://api.rawg.io/api/games/4?key=2b8fb77a19da463ebcfe759326687e6f
