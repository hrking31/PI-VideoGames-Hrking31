const axios = require("axios");
const { Videogame, Genre } = require("../db");
const { cleanArrayDb, cleanArrayApi } = require("../utils/cleanArrayApi");
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
  genres,
  videogameId
) => {
  const newVideogame = await Videogame.create({
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genres,
  });
  for (const genreName of genres) {
    const genre = await Genre.findOne({ where: { name: genreName } });
    if (genre) {
      await newVideogame.addGenre(genre);
    }
  }
  const populatedVideogame = await Videogame.findByPk(newVideogame.id, {
    include: Genre,
  });

  return populatedVideogame;
};

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
  const databaseVideogames = cleanArrayDb(
    await Videogame.findAll({ include: Genre })
  );
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
  const databaseVideogames = cleanArrayDb(
    await Videogame.findAll({
      where: {
        name: { [Op.iLike]: "%" + name + "%" },
      },

      include: Genre,
    })
  );
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
