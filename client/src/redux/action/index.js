import {
  CHANGE_IMG_LANDING,
  GET_ALL_POKEMONS,
  GET_ALL_TYPES,
  GET_POKEMONS_BY_NAME,
  GET_POKEMON_BY_ID,
  NEXT_PREVIUS,
  PAGINADO_POKEMONS,
  CREATE_POKEMON,
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
export const getAllTypesPokemon = () => {
  return async function (dispatch) {
    const response = await fetch(`${api}/types`);
    if (response) {
      const data = await response.json();
      dispatch({
        type: GET_ALL_TYPES,
        payload: data.types,
      });
    }
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
export const add_pokemon = (pokemon) => {
  return async function (dispatch) {
    console.log("pokemon:", pokemon);
    const response = await fetch(`${api}/pokemon`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(pokemon),
    });
    if (response) {
      const data = await response.json();
      console.log("respuesta", data);
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
      console.log(data.pokemonObj, "pokemooooon data");
      dispatch({
        type: GET_POKEMON_BY_ID,
        payload: organize_type(data.pokemonObj),
        // payload: data.pokemonObj,
      });
    }
  };
};
export const organize_type = (pokemon) => {
  const array = pokemon.types.reverse();
  const pokemon_reverse = {
    defending: pokemon.defending,
    height: pokemon.height,
    weight: pokemon.weight,
    id: pokemon.id,
    life: pokemon.life,
    name: pokemon.name,
    speed: pokemon.speed,
    sprite: pokemon.sprite,
    sprite2: pokemon.sprite2,
    strength: pokemon.strength,
    types: array,
  };
  console.log("pokemon", pokemon, "pokemon reverse", pokemon_reverse);
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
