const { Router } = require("express");
const { getPlatforms } = require("../handlers/platformsHandlers");

const platformsRouter = Router();

platformsRouter.get("/", getPlatforms);

module.exports = platformsRouter;
