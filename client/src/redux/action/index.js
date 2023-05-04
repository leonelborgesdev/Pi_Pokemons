import {
  CHANGE_IMG_LANDING,
  GET_ALL_POKEMONS,
  GET_POKEMONS_BY_NAME,
  GET_POKEMON_BY_ID,
  NEXT_PREVIUS,
  PAGINADO_POKEMONS,
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
export const getPokmeonsByName = (name) => {
  return async function (dispatch) {
    const response = await fetch(`${api}/pokemons?name=${name}`);
    if (response) {
      const data = await response.json();
      dispatch({
        type: GET_POKEMONS_BY_NAME,
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
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: organize_type(data.pokemonObj),
      });
    }
  };
};
export const organize_type = (pokemon) => {
  const array = pokemon.types.reverse();
  const pokemon_reverse = {
    defending: pokemon.defending,
    height: pokemon.height,
    id: pokemon.id,
    life: pokemon.life,
    name: pokemon.name,
    speed: pokemon.speed,
    sprite: pokemon.sprite,
    sprite2: pokemon.sprite2,
    strength: pokemon.strength,
    types: array,
  };
  console.log(
    "pokemon",
    pokemon.types,
    "pokemon reverse",
    pokemon_reverse.types
  );
  return pokemon_reverse;
};
export const paginadoPokemons = (pagina) => {
  const ultPokemon = (pagina - 1) * 12;
  return async function (dispatch) {
    const response = await fetch(`${api}/pokemons?ultPokemon=${ultPokemon}`);
    if (response) {
      const data = await response.json();
      dispatch({
        type: PAGINADO_POKEMONS,
        payload: data.pokemons,
        pagina: pagina,
      });
    }
  };
};
export const nextPrevius = (first, last) => {
  return function (dispatch) {
    dispatch({
      type: NEXT_PREVIUS,
      first,
      last,
    });
  };
};
