import { CHANGE_IMG_LANDING, GET_ALL_POKEMONS } from "../action/type";

const initialState = {
  pokemons: [],
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
        theme: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
