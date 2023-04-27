const { Router } = require("express");

genresRouter = Router();

genresRouter.get("/", (req, res) => {
  res.send("todos los generos existentes");
});

module.exports = genresRouter;
