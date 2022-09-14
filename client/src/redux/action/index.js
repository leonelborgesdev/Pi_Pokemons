import { GET_ALL_POKEMONS } from "./type";

const api = "http://localhost:3001";

export const getAllPokemons = () => {
  return async function (dispatch) {
    const response = await fetch(api);
    if (response) {
      const data = await response.json();
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: data,
      });
    }
  };
};
