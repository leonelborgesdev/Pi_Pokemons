import React from "react";
import { useSelector } from "react-redux";
import "./Landing.css";

export const Landing = () => {
  const { theme } = useSelector((state) => state);
  return (
    <div className="container_landing">
      <div className="card_landing">
        <div className="title_landing">
          <h1>Pokemons</h1>
        </div>
        <div className="body_description">
          <div className="body_text"></div>
          <div className="landing_img">
            {theme === "red" ? (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
                width={"350px"}
              />
            ) : theme === "orange" ? (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                alt="charizard"
              />
            ) : (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                alt="mewtwo"
              />
            )}
          </div>
        </div>
        <div className="footer_options">
          <label>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="pikachu"
              height={"70px"}
            />
          </label>
          <label>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
              alt="charizard"
              height={"70px"}
            />
          </label>
          <label>
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg"
              alt="mew two"
              height={"70px"}
            />
          </label>
        </div>
      </div>
    </div>
  );
};
