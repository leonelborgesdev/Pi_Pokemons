import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokmeonsByName } from "../../redux/action";
import pokemon_icon2 from "../../assets/pokemon_icon2.png";
import pokemon_icon from "../../assets/pokemon_icon.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Nav.css";
import { useState } from "react";

export const Nav = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { value } = e.target;
    if (e.keyCode === 13) {
      dispatch(getPokmeonsByName(value));
    }
  };
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="container_nav">
        <Link to={"#"} className={"menu-bars"}>
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
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
      <div className={sidebar ? "nav_menu active" : "nav_menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toogle">
            <Link to={"#"} className={"menu-bars"}>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          <li className="navbar-toogle">
            <Link to={"#"} className={"menu-bars"}>
              <AiIcons.AiOutlineClose />
              <span>Types</span>
            </Link>
          </li>
          <li className="navbar-toogle">
            <Link to={"#"} className={"menu-bars"}>
              <AiIcons.AiOutlineClose />
              <span>Ordenar</span>
            </Link>
          </li>
          <li className="navbar-toogle">
            <Link to={"#"} className={"menu-bars"}>
              <AiIcons.AiOutlineClose />
              <span>Crear</span>
            </Link>
          </li>
          <li className="navbar-toogle">
            <Link to={"#"} className={"menu-bars"}>
              <AiIcons.AiOutlineClose />
              <span>Types</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};
