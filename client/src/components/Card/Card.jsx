import React from "react";

export const Card = ({ pokemon }) => {
  console.log(pokemon);
  return (
    <div className="card_pokemons">
      <img src={pokemon.sprite} alt="image" />
      <h2>{pokemon.name}</h2>
      <h2>Types: {pokemon.types.map((type) => type.name + " ")}</h2>
    </div>
  );
};
