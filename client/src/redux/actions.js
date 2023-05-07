import axios from "axios";

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_VIDEOGAME = "GET_VIDEOGAME";

export const getVideogames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const videogames = apiData.data;
    dispatch({ type: "GET_VIDEOGAMES", payload: videogames });
  };
};

export const getVideogame = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const videogames = apiData.data;
    dispatch({ type: "GET_VIDEOGAME", payload: videogames });
  };
};
