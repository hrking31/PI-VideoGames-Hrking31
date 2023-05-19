const { Router } = require("express");
const {
  getVideogamesById,
  getVideogames,
  postVideogames,
} = require("../handlers/videogamesHandlers");

const videogamesRouter = Router();

videogamesRouter.post("/", postVideogames);
videogamesRouter.get("/:id", getVideogamesById);
videogamesRouter.get("/", getVideogames);

module.exports = videogamesRouter;
