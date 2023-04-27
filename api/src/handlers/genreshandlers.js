const postVideogames = (req, res) => {
  res.send(
    "NIY: Esta ruta recibirá todos los datos necesarios para crear un videojuego y relacionarlo con sus géneros solicitados"
  );
};
const getVideogames = (req, res) => {
  res.send(
    "NIY: Obtiene un arreglo con todos los géneros existentes de la API"
  );
};

module.exports = { postVideogames, getVideogames };
