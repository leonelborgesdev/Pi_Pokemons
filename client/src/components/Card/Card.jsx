import React from "react";
import "./Card.css";

export const Card = ({ pokemon }) => {
  return (
    <div className="card_pokemons">
      <div className="card_img">
        <img
          src={pokemon.sprite.length === 0 ? pokemon.sprite2 : pokemon.sprite}
          alt="image"
        />
      </div>
      <h2>{pokemon.name}</h2>
      <h2>Types: {pokemon.types.map((type) => type.name + " ")}</h2>
    </div>
  );
};
