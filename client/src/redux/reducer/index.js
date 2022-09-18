import {
  CHANGE_IMG_LANDING,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_ID,
} from "../action/type";

const initialState = {
  pokemons: [],
  pokemon: {},
  theme: "red",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
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
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
