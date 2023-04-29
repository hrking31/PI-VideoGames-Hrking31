const {
  createVideogame,
  VideogamesById,
} = require("../controllers/videogamesControllers");

const getVideogamesById = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";

  try {
    const gameID = await VideogamesById(id, source);
    res.status(200).json(gameID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVideogames = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`Esta ruta envia un nombre: ${name}`);
  else res.send("Esta ruta envia todos los usuarios");
};

const postVideogames = async (req, res) => {
  const { name, description, platforms, image, release, rating } = req.body;
  try {
    const newVideogame = await createVideogame(
      name,
      description,
      platforms,
      image,
      release,
      rating
    );
    res.status(201).json(newVideogame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getVideogames, getVideogamesById, postVideogames };
