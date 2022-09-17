import { CHANGE_IMG_LANDING, GET_ALL_POKEMONS } from "./type";

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
