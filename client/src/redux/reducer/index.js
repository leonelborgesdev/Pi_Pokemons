import {
  CHANGE_IMG_LANDING,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMONS_BY_NAME,
  GET_POKEMON_BY_ID,
  NEXT_PREVIUS,
  PAGINADO_POKEMONS,
} from "../action/type";

const initialState = {
  pokemons: [],
  types: [],
  pokemon: {},
  theme: "red",
  first: 1,
  last: 3,
  pagina: 1,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_ALL_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case GET_POKEMONS_BY_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case CHANGE_IMG_LANDING:
      return {
        ...state,
        theme: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemon: action.payload,
      };
    case PAGINADO_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        pagina: action.pagina,
      };
    case NEXT_PREVIUS:
      return {
        ...state,
        first: action.first,
        last: action.last,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
