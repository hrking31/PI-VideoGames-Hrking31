const { createGenre } = require("../controllers/genresControllers");

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

// postGenres = async (req, res) => {
//   try {
//     let { name } = req.body;
//     let newGenre = await Genres.create({ name: name });
//     //console.log(newGenre)
//     res.status(200).send(newGenre);
//     console.log("Genre successfully created!");
//   } catch (error) {
//     res.send(error);
//   }
// };

const getGenres = async (req, res) => {
  try {
    const newGenre = await createGenre();
    res.status(201).json(newGenre);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getGenres };
