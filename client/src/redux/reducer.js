import {
  GET_VIDEOGAMES,
  GET_VIDEOGAME,
  GET_VIDEOGAME_DATAIL,
  ORDER,
  ORDER_GENRES,
  ORDER_RATING,
  RESET,
} from "./types";

const initialState = {
  originVideogames: [],
  videogames: [],
  detailVideogames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_VIDEOGAME:
      return {
        ...state,
        videogames: action.payload,
      };

    case GET_VIDEOGAME_DATAIL:
      return { ...state, detailVideogames: action.payload };

    case ORDER:
      const newOrder = state.videogames.sort((a, b) => {
        if (a.id > b.id) {
          return "A" === action.payload ? 1 : -1;
        }

        if (a.id < b.id) {
          return "D" === action.payload ? 1 : -1;
        }
        return 0;
      });
      return { ...state, videogames: newOrder };

    case ORDER_GENRES:
      const newGenres = state.videogames.filter(
        (genero) => genero.genres === action.payload
      );
      return { videogames: newGenres };

    case ORDER_RATING:
      const newRating =
        action.payload === "asc"
          ? state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : state.videogames.sort(function (a, b) {
              if (a.rating > b.rating) {
                return -1;
              }
              if (b.rating > a.rating) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        videogames: newRating,
      };

    case RESET:
      return { ...state, videogames: state.videogames };

    default:
      return { ...state };
  }
};
export default rootReducer;
