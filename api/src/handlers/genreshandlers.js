const { createGenre } = require("../controllers/usersControllers");

const postGenres = async (req, res) => {
  const { name, description, released, rating, platforms, genres } = req.body;
  try {
    const newGenres = await createGenre(
      name,
      description,
      released,
      rating,
      platforms,
      genres
    );
    res.status(201).json(newGenres);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getGenres = (req, res) => {
  res.send(
    "NIY: Obtiene un arreglo con todos los géneros existentes de la API"
  );
};

module.exports = { postGenres, getGenres };
