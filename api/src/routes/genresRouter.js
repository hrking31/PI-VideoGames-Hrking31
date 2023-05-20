const { Router } = require("express");
const { getGenres, postGenres } = require("../handlers/genresHandlers");

const genresRouter = Router();

genresRouter.post("/", postGenres);
genresRouter.get("/", getGenres);

module.exports = genresRouter;
