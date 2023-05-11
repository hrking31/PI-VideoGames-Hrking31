import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME,
  GET_VIDEOGAME_DATAIL,
  ORDER,
  ORDER_GENRES,
  ORDER_RATING,
  RESET,
} from "./types";

export const getVideogames = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/videogames");
    const videogame = apiData.data;
    dispatch({ type: GET_VIDEOGAMES, payload: videogame });
  };
};

export const getVideogame = (name) => {
  return async function (dispatch) {
    const apiData = await axios.get(
      `http://localhost:3001/videogames?name=${name}`
    );
    const videogame = apiData.data;
    dispatch({ type: GET_VIDEOGAME, payload: videogame });
  };
};

export const getVideogamesById = (id) => {
  return async function (dispatch) {
    const apiData = await axios.get(`http://localhost:3001/videogames/${id}`);
    const videogame = apiData.data;
    dispatch({ type: GET_VIDEOGAME_DATAIL, payload: videogame });
  };
};

export const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export const orderGenres = (genres) => {
  return {
    type: ORDER_GENRES,
    payload: genres,
  };
};

export function orderRating(rating) {
  return {
    type: ORDER_RATING,
    payload: rating,
  };
}

export const reset = () => {
  return {
    type: RESET,
  };
};
