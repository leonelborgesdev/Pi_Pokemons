import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeImgLanding } from "../../redux/action";
import "./Landing.css";

export const Landing = () => {
  const { theme } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleChangetheme = (theme) => {
    dispatch(changeImgLanding(theme));
  };
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
                height={"450px"}
                alt="pikachu"
              />
            ) : theme === "orange" ? (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                height={"450px"}
                alt="charizard"
              />
            ) : (
              <img
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png"
                height={"450px"}
                alt="mewtwo"
              />
            )}
          </div>
        </div>
        <div className="footer_options">
          <label
            onClick={() => {
              handleChangetheme("red");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg"
              alt="pikachu"
              height={"70px"}
            />
          </label>
          <label
            onClick={() => {
              handleChangetheme("orange");
            }}
          >
            <img
              src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg"
              alt="charizard"
              height={"70px"}
            />
          </label>
          <label
            onClick={() => {
              handleChangetheme("purple");
            }}
          >
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
