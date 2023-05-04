const { createGenre } = require("../controllers/genresControllers");
const axios = require("axios");
const { API_KEY } = process.env;
const { Genres } = require("../db");
// const postGenres = async (req, res) => {
//   const { name, description, platforms, image, release, rating, genres } =
//     req.body;
//   try {
//     const newGenres = await createGenre(
//       name,
//       description,
//       platforms,
//       image,
//       release,
//       rating,
//       genres
//     );
//     res.status(201).json(newGenres);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };

postGenres = async (req, res) => {
  try {
    let { name } = req.body;
    let newGenre = await Genres.create({ name: name });
    //console.log(newGenre)
    res.status(200).send(newGenre);
    console.log("Genre successfully created!");
  } catch (error) {
    res.send(error);
  }
};

// const getGenres = (req, res) => {
//   res.send(
//     "NIY: Obtiene un arreglo con todos los géneros existentes de la API"
//   );
// };

getGenres = async (req, res) => {
  try {
    let generos = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    let response = generos.data.results.map((el) => {
      return {
        name: el.name,
      };
    });

    response.forEach(async (e) => {
      await Genres.findOrCreate({
        where: {
          name: e.name,
        },
      });
    });

    let allGenres = await Genres.findAll();
    return res.json(allGenres);
  } catch (error) {
    console.error(error);
    res.send(error);
  }
};

module.exports = { postGenres, getGenres };
