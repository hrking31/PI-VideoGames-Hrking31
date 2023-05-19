const axios = require("axios");
const { Videogame, Genre } = require("../db");
const cleanArrayApi = require("../utils/cleanArrayApi");
const { infoDb, infoApi } = require("../utils/InfoApiDb");
const { Op } = require("sequelize");
const { API_KEY } = process.env;

//------>>>//--CREA VIDEOGAME--//<<<------//
const createVideogame = async (
  name,
  description,
  platforms,
  image,
  released,
  rating,
  genres
) =>
  await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genres,
  });

//------>>>//--BUSCA VIDEOGAME POR ID--//<<<------//
const VideogamesById = async (id, source) => {
  if (source === "db") {
    const gameDb = await Videogame.findByPk(id, { include: Genre });
    return infoDb(gameDb);
  } else {
    const gameApi = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    return infoApi(gameApi.data);
  }
};

//------>>>//--BUSCA VIDEOGAMES POR NOMBRE--//<<<------//
const allgetVideogames = async () => {
  // const databaseVideogames = await Videogame.findAll();
  // const apiVideogamesRaw = (
  //   await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
  // ).data.results;
  // const apiVideogames = cleanArrayApi(apiVideogamesRaw);
  // return [...databaseVideogames, ...apiVideogames];
  //////////////////////////////////////////////////////////////////////
  const databaseVideogames = await Videogame.findAll();
  const apiVideogames = [];
  for (let num = 1; num < 7; num++) {
    const newVideogames = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&page=${num}`
    );
    apiVideogames.push(...cleanArrayApi(newVideogames.data.results));
  }
  return [...databaseVideogames, ...apiVideogames];
};

const searchgetVideogames = async (name) => {
  const databaseVideogames = await Videogame.findAll({
    where: {
      name: { [Op.iLike]: "%" + name + "%" },
    },
  });
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
