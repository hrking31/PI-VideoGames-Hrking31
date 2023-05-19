const {
  createGenreDb,
  createGenre,
} = require("../controllers/genresControllers");

//------>>>//--CREA RELACION DE GENRES EN DB--//<<<------//
postGenres = async (req, res) => {
  const { name, videogameId } = req.body;
  try {
    const newGenreDb = await createGenreDb(name, videogameId);
    res.status(200).json(newGenreDb);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//------>>>//--BUSCA LOS GENRES Y LOS ALMACENA EN DB--//<<<------//
const getGenres = async (req, res) => {
  try {
    const newGenre = await createGenre();
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { postGenres, getGenres };
