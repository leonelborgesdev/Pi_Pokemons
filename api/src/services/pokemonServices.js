const axios = require("axios");
const { Pokemon } = require("../db");

async function cargar_pokemons(api) {
  const { data } = await axios(api);
  const apiPokemons = await data.results.map((obj) => axios.get(obj.url));
  const UrlPokemons = await axios.all(apiPokemons);
  // let pokemonsCreate = [];
  await UrlPokemons.map(async (pokemons) => {
    const pokemon = pokemons.data;
    const obj = pokemon.sprites.other["official-artwork"];
    let type = pokemon.types[0].type.url;
    let valor = type.split("/"); //6
    let type2 = "";
    let valor2 = "";
    if (pokemon.types.length === 2) {
      type2 = pokemon.types[1].type.url;
      valor2 = type2.split("/"); //6
    }
    const typesPokemon =
      pokemon.types.length < 2
        ? [valor[6].toString()]
        : [valor[6].toString(), valor2[6].toString()];
    const objetoPokemon = {
      id: pokemon.id.toString(),
      name: pokemon.name,
      life: pokemon.stats[0].base_stat,
      strength: pokemon.stats[1].base_stat,
      defending: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      sprite: pokemon.sprites.other.dream_world.front_default,
      sprite2: obj.front_default,
    };
    const Poke = await Pokemon.create(objetoPokemon);
    await Poke.setTypes(typesPokemon);
    return {
      id: pokemon.id.toString(),
      name: pokemon.name,
      life: pokemon.stats[0].base_stat,
      strength: pokemon.stats[1].base_stat,
      defending: pokemon.stats[2].base_stat,
      speed: pokemon.stats[5].base_stat,
      height: pokemon.height,
      weight: pokemon.weight,
      sprite: pokemon.sprites.other.dream_world.front_default,
      sprite2: obj.front_default,
      types:
        pokemon.types.length < 2
          ? [{ id: valor[6].toString(), name: pokemon.types[0].type.name }]
          : [
              { id: valor[6].toString(), name: pokemon.types[0].type.name },
              { id: valor2[6].toString(), name: pokemon.types[1].type.name },
            ],
    };
  });
  // return pokemonsCreate;
}

module.exports = { cargar_pokemons };
