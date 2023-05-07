import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getPokemonsById } from "../../redux/action";
import "./PokemonDetail.css";

export const PokemonDetail = () => {
  const dispatch = useDispatch();
  const { pokemon, theme } = useSelector((state) => state);
  const types_primary = ["fire", "grass", "water"];
  const [bagr, setbagr] = useState("");
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonsById(id));
  }, []);
  return (
    <div className="container_id" id={theme}>
      <h1>Detail Pokemons</h1>
      <div
        className="container_id_detail"
        id={pokemon.types !== undefined ? pokemon.types[0].name : "none"}
      >
        <div className="container_id_img">
          <img src={pokemon.sprite ? pokemon.sprite : pokemon.sprite2} alt="" />
        </div>
        <div className="container_id_description">
          <div>
            {pokemon !== undefined ? (
              <React.Fragment>
                <h1>
                  {pokemon.name !== undefined &&
                    pokemon.name.toString().toUpperCase()}
                </h1>
                <h3>Life:{pokemon.life}</h3>
                <h3>Strength:{pokemon.strength}</h3>
                <h3>Defending:{pokemon.defending}</h3>
                <h3>Speed:{pokemon.speed}</h3>
                <h3>Height:{pokemon.height}</h3>
                <h3>Weight:{pokemon.weight}</h3>
                <h3>
                  Type:
                  {pokemon.types !== undefined &&
                    pokemon.types.map((type) => type.name)}
                </h3>
              </React.Fragment>
            ) : (
              <h3>NO se encontro pokemon</h3>
            )}
          </div>
          <div>
            <Link to={"/pokemons"}>Volver</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
