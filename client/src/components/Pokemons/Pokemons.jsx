import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, paginadoPokemons } from "../../redux/action";
import { Card } from "../Card/Card";
import { Nav } from "../Nav/Nav";
import { Paginado } from "../Paginado/Paginado";
import "./Pokemons.css";

export const Pokemons = () => {
  const dispatch = useDispatch();
  const { theme, pagina } = useSelector((state) => state);
  useEffect(() => {
    console.log(pagina);
    dispatch(paginadoPokemons(pagina));
  }, []);
  const { pokemons } = useSelector((state) => state);
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
