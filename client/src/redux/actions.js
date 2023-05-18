import axios from "axios";
import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME,
  GET_VIDEOGAME_DATAIL,
  ORDER_NAME,
  ORDER_GENRES,
  ORDER_RATING,
  CREATED,
  RESET,
  NEXT,
  PREV,
  // PAGES,
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

export const orderName = (name) => {
  return {
    type: ORDER_NAME,
    payload: name,
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

export const orderCreated = (created) => {
  return {
    type: CREATED,
    payload: created,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};

export const nextPage = () => {
  return {
    type: NEXT,
  };
};

export const prevPage = () => {
  return {
    type: PREV,
  };
};

// export const changesPage = () => {
//   return {
//     type: PAGES,
//   };
// };
