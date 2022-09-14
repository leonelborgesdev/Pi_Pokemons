import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons } from "../../redux/action";
import { Card } from "../Card/Card";

export const Pokemons = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPokemons());
  }, []);
  const { pokemons } = useSelector((state) => state);
  console.log(pokemons);
  return (
    <div>
      <h1>Pokemons</h1>
      {pokemons.length > 0 ? (
        pokemons.map((pokemon) => {
          return <Card pokemon={pokemon} />;
        })
      ) : (
        <span>No se encontro Pokemons</span>
      )}
    </div>
  );
};
