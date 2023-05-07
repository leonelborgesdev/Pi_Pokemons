import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginadoPokemons } from "../../redux/action";
import pokeball from "../../assets/pokeball.gif";
import { Card } from "../Card/Card";
import { Nav } from "../Nav/Nav";
import { Paginado } from "../Paginado/Paginado";
import "./Pokemons.css";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img
            className="pet_pokemons"
            src={pokeball}
            alt="app"
            height={"150"}
          />
        </Link>
      </div>
      <Paginado />
    </div>
  );
};
