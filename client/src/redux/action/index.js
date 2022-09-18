import {
  CHANGE_IMG_LANDING,
  GET_ALL_POKEMONS,
  GET_POKEMON_BY_ID,
} from "./type";

const api = "http://localhost:3001";

export const changeImgLanding = (theme) => {
  return function (dispatch) {
    dispatch({
      type: CHANGE_IMG_LANDING,
      payload: theme,
    });
  };
};
export const getAllPokemons = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/pokemons`);
    if (response) {
      const data = await response.json();
      dispatch({
        type: GET_ALL_POKEMONS,
        payload: data.pokemons,
      });
    }
  };
};

export const getPokemonsById = (id) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/pokemons/${id}`);
    if (response) {
      const data = await response.json();
      console.log(data);
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: data.pokemonObj,
      });
    }
  };
};
