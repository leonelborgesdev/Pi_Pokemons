import React from "react";
import { Link } from "react-router-dom";
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
      <h2>{pokemon.name[0].toUpperCase() + pokemon.name.substring(1)}</h2>
      <h2>Types: {pokemon.types.map((type) => type.name + " ")}</h2>
      <Link to={`/pokemons/${pokemon.id}`}>Detalle</Link>
    </div>
  );
};
