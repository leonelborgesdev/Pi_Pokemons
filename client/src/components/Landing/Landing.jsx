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
          <h1>Pokemons</h1>
        </div>
        <div className="body_description">
          <div className="body_text">
            <h2>
              Ven y conoce a todos los pokemons registrados en nuestra base de
              datos
            </h2>
            <h2>
              Conoce sus habilidades estadisticas de ataque defensa y velocidad
            </h2>
            <h2>Y crea tus propios pokemons</h2>
            <Link to={"/pokemons"}>Ingresar</Link>
          </div>
          {theme === "red" ? (
            <div className="landing_img">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                height={"450px"}
                alt="pikachu"
              />
              <img className="img_rayos" src={rayos3} />
            </div>
          ) : theme === "orange" ? (
            <div className="landing_img">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                height={"450px"}
                alt="charizard"
              />
            </div>
          ) : (
            <div className="landing_img">
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                height={"450px"}
                alt="mewtwo"
              />
            </div>
          )}
        </div>
        <div className="footer_options">
          <div className="footer_landing">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="pikachu"
              height={"70px"}
              onClick={() => {
                handleChangetheme("red");
              }}
            />
          </div>
          <div className="footer_landing">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
              alt="charizard"
              height={"70px"}
              onClick={() => {
                handleChangetheme("orange");
              }}
            />
          </div>
          <div className="footer_landing">
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
              alt="mew two"
              height={"70px"}
              onClick={() => {
                handleChangetheme("purple");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
