import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokmeonsByName } from "../../redux/action";
import pokemon_icon2 from "../../assets/pokemon_icon2.png";
import pokemon_icon from "../../assets/pokemon_icon.png";
import "./Nav.css";

export const Nav = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { value } = e.target;
    if (e.keyCode === 13) {
      dispatch(getPokmeonsByName(value));
    }
  };
  return (
    <div className="container_nav">
      <div className="container_nav_home">
        <Link to="/">
          <img src={pokemon_icon} alt="app" height={"50"} />
        </Link>
        <Link to="/pokemons">
          <img src={pokemon_icon2} alt="app" height={"50"} />
        </Link>
      </div>
      <input type="text" placeholder="Name" onKeyDown={handleSearch} />
    </div>
  );
};
