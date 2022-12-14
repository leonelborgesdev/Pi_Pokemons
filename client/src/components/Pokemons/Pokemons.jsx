import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/action";
import { Card } from "../Card/Card";
import { Nav } from "../Nav/Nav";
import { Paginado } from "../Paginado/Paginado";
import "./Pokemons.css";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);
  const { pokemons } = useSelector((state) => state);
  console.log(pokemons);
  return (
    <div id={theme}>
      <Nav />
      <div className="container_pokemons">
        <h1>Pokemons</h1>
        <div className="cards_pokemons">
          {pokemons.length > 0 ? (
            pokemons.map((pokemon) => {
              return <Card pokemon={pokemon} key={pokemon.id} />;
            })
          ) : (
            <span>No se encontro Pokemons</span>
          )}
        </div>
      </div>
      <Paginado />
    </div>
  );
};
