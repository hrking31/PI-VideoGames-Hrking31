const infoDb = (game) => {
  const info = game.dataValues;
  return {
    name: info.name,
    image: info.image,
    description: info.description,
    release: info.released,
    rating: info.rating,
    platforms: info.platforms.map((ch) => ch),
    genres: infoDb.genres?.map((nombre) => nombre.name),
    created: info.created,
  };
};

const infoApi = (game) => {
  return {
    name: game.name,
    image: game.background_image,
    description: game.description,
    release: game.released,
    rating: game.rating,
    platforms: game.platforms.map((ch) => ch.platform.name),
    genres: game.genres.map((ch) => ch.name),
  };
};
module.exports = {
  infoApi,
  infoDb,
};
