const {
  createVideogame,
  VideogamesById,
  allgetVideogames,
  searchgetVideogames,
} = require("../controllers/videogamesControllers");

//------>>>//----//<<<------//
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

//------>>>//----//<<<------//
const getVideogames = async (req, res) => {
  const { name } = req.query;
  const results = name
    ? await searchgetVideogames(name)
    : await allgetVideogames();
  res.status(200).json(results);
};

//------>>>//----//<<<------//
const postVideogames = async (req, res) => {
  const { name, description, platforms, image, released, rating } = req.body;
  try {
    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      released,
      rating
    );
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getVideogames, getVideogamesById, postVideogames };
