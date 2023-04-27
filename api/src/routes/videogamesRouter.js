const { Router } = require("express");
const {
  getVideogamesById,
  getVideogames,
  getVideogame,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.get("/:id", getVideogamesById);
videogamesRouter.get("/", getVideogames);
videogamesRouter.get("/name", getVideogame);

module.exports = videogamesRouter;
