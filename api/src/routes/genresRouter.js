const { Router } = require("express");
const { getVideogames, postVideogames } = require("../handlers/genresHandlers");

genresRouter = Router();

genresRouter.post("/", postVideogames);
genresRouter.get("/", getVideogames);

module.exports = genresRouter;
