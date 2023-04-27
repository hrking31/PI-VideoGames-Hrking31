const { Router } = require("express");

const videogamesRouter = Router();

videogamesRouter.get("/", (req, res) => {
  res.status(200).send("estoy en video");
});

videogamesRouter.get("/:id", (req, res) => {
  res.status(200).send("detalle del video");
});

videogamesRouter.get("/name", (req, res) => {
  res.status(200).send("envio 15 videojuegos");
});

videogamesRouter.post("/", (req, res) => {
  res.status(200).send("crear usuario");
});

module.exports = videogamesRouter;
