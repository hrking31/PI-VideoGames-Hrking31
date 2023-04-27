const getVideogamesById = (req, res) => {
  res.send("NIY: Esta ruta obtiene el detalle de un videojuego específico. ");
};
const getVideogames = (req, res) => {
  res.send(
    "NIY: Obtiene un arreglo de objetos, donde cada objeto es un videojuego con su información."
  );
};
const getVideogame = (req, res) => {
  res.send(
    "NIY: Esta ruta debe obtener los primeros 15 videojuegos que se encuentren con la palabra recibida por query"
  );
};

module.exports = { getVideogame, getVideogames, getVideogamesById };
