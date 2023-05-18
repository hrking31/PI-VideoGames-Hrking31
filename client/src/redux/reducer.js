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

const initialState = {
  originVideogames: [],
  videogames: [],
  detailVideogames: [],
  numPage: 1,
};

//------>>>//--BUSCA TODOS LOS VIDEOGAME--//<<<------//
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        videogames: action.payload,
        originVideogames: action.payload,
      };

    //------>>>//--BUSCA VIDEOGAME POR NOMBRE--//<<<------//
    case GET_VIDEOGAME:
      return {
        ...state,
        videogames: action.payload,
        // originVideogames: action.payload,
      };

    //------>>>//--BUSCA VIDEOGAME POR ID--//<<<------//
    case GET_VIDEOGAME_DATAIL:
      return { ...state, detailVideogames: action.payload };

    //------>>>//--ORDENA POR ID--//<<<------//
    case ORDER_NAME:
      const newName =
        action.payload === "asc"
          ? [...state.videogames].sort((a, b) => {
              return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            })
          : [...state.videogames].sort((a, b) => {
              return b.name.toLowerCase().localeCompare(a.name.toLowerCase());
            });
      return {
        ...state,
        videogames: newName,
      };

    //------>>>//--ORDENA POR GENRES--//<<<------//
    case ORDER_GENRES:
      const newGenres = [...state.videogames].filter(
        (genero) => genero.genres === action.payload
      );
      return { ...state, videogames: newGenres };

    //------>>>//--ORDENA POR RATING--//<<<------//
    case ORDER_RATING:
      const newRating =
        action.payload === "asc"
          ? [...state.videogames].sort(function (a, b) {
              if (a.rating > b.rating) {
                return 1;
              }
              if (b.rating > a.rating) {
                return -1;
              }
              return 0;
            })
          : [...state.videogames].sort(function (a, b) {
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

    //------>>>//--ORDENA POR CREACION--//<<<------//
    case CREATED:
      console.log("state===>", [...state.videogames]);

      const newCreated =
        action.payload === "true"
          ? [...state.originVideogames].filter(
              (creado) => creado.created === true
            )
          : [...state.originVideogames].filter(
              (creado) => creado.created === action.payload
            );
      console.log("new===>", newCreated);
      return { ...state, videogames: newCreated };

    //------>>>//--REINICIA LOS FILTORS--//<<<------//
    case RESET:
      return { ...state, videogames: state.originVideogames };

    case NEXT:
      return { ...state, numPage: state.numPage + 1 };

    case PREV:
      return { ...state, numPage: state.numPage - 1 };

    // case PAGES:
    //   return { ...state, numPage: state.numPage + 1 };

    default:
      return { ...state };
  }
};
export default rootReducer;
