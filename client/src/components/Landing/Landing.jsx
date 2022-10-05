import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeImgLanding } from "../../redux/action";
import rayos3 from "../../assets/rayos3.gif";
import { Link } from "react-router-dom";
import "./Landing.css";

export const Landing = () => {
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChangetheme = (theme) => {
    dispatch(changeImgLanding(theme));
  };
  return (
    <div className="container_landing" id={theme}>
      <div className="circle"></div>
      <div className="circle2"></div>
      <div className="card_landing">
        <div className="circleInt"></div>
        <div className="title_landing">
          <h2>PokeApp</h2>
        </div>
        <div className="body_description">
          <div className="body_text">
            <h2>
              Ven y conoce a todos <br />
              Los <span>Pokemon</span>
            </h2>
            <p>
              Entra al mundo pokemon, conoce su gran variedad y diversidad, en
              esta app podras visualizar las caracteristicas mas importantes de
              ellos, como ser sus habilidades especiales, estadisticas de ataque
              defensa y velocidad
              <br />Y crea tus propios pokemons
            </p>
            <Link to={"/pokemons"}>Ingresar</Link>
          </div>
          {theme === "red" ? (
            <div className="landing_img">
              <img
                className="img_poke"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                alt="pikachu"
              />
              <img className="img_animate" src={rayos3} />
            </div>
          ) : theme === "orange" ? (
            <div className="landing_img">
              <img
                className="img_poke"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="charizard"
              />
            </div>
          ) : (
            <div className="landing_img">
              <img
                className="img_poke"
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                alt="mewtwo"
              />
            </div>
          )}
        </div>
        <div className="footer_options">
          <div
            className="footer_landing"
            onClick={() => {
              handleChangetheme("red");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="pikachu"
              height={"70px"}
            />
            <div className="loader"></div>
          </div>
          <div
            className="footer_landing"
            onClick={() => {
              handleChangetheme("orange");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
              alt="charizard"
              height={"70px"}
            />
            <div className="loader"></div>
          </div>
          <div
            className="footer_landing"
            onClick={() => {
              handleChangetheme("purple");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
              alt="mew two"
              height={"70px"}
            />
            <div className="loader"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
