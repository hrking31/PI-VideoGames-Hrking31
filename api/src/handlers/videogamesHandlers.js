const {
  createVideogame,
  VideogamesById,
  allgetVideogames,
  searchgetVideogames,
} = require("../controllers/videogamesControllers");

//------>>>//--CREA VIDEOGAME--//<<<------//
// const postVideogames = async (req, res) => {
//   const { name, description, platforms, image, released, rating, genres } =
//     req.body;
//   try {
//     const newVideogame = await createVideogame(
//       name,
//       description,
//       platforms,
//       image,
//       released,
//       rating,
//       genres
//     );
//     res.status(201).json(newVideogame);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

const postVideogames = async (req, res) => {
  const {
    name,
    description,
    platforms,
    image,
    released,
    rating,
    genres,
    videogameId,
  } = req.body;
  try {
    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      released,
      rating,
      genres
    );
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//------>>>//--BUSCA VIDEOGAME POR ID--//<<<------//
const getVideogamesById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const gameID = await VideogamesById(id, source);
    res.status(200).json(gameID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//------>>>//--BUSCA VIDEOGAMES POR NOMBRE--//<<<------//
const getVideogames = async (req, res) => {
  const { name } = req.query;
  try {
    const results = name
      ? await searchgetVideogames(name)
      : await allgetVideogames();
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getVideogames, getVideogamesById, postVideogames };
