const { Router } = require("express");
const {
  getVideogamesById,
  getVideogames,
  postVideogames,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/:id", getVideogamesById);
videogamesRouter.get("/", getVideogames);
videogamesRouter.post("/", postVideogames);

module.exports = videogamesRouter;
