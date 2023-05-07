const { Router } = require("express");
const { getGenres, postGenres } = require("../handlers/genresHandlers");

genresRouter = Router();

// genresRouter.post("/", postGenres);
genresRouter.get("/", getGenres);

module.exports = genresRouter;
