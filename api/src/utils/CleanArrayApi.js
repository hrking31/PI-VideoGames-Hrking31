const cleanArrayDb = (arr) =>
  arr.map((Elem) => {
    return {
      id: Elem.id,
      name: Elem.name,
      description: Elem.description,
      image: Elem.image,
      release: Elem.release,
      rating: Elem.rating,
      platforms: Elem.platforms.map((ch) => ch),
      genres: Elem.genres?.map((ch) => ch.name),
      created: Elem.created,
    };
  });

const cleanArrayApi = (arr) =>
  arr.map((Elem) => {
    return {
      id: Elem.id,
      name: Elem.name,
      description: Elem.description,
      image: Elem.background_image,
      released: Elem.released,
      rating: Elem.rating,
      platforms: Elem.platforms.map((nombre) => nombre.platform.name),
      genres: Elem.genres.map((nombre) => nombre.name),
      created: "false",
    };
  });
module.exports = { cleanArrayDb, cleanArrayApi };
