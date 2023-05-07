import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getPokmeonsByName } from "../../redux/action";
import pokedex from "../../assets/pokedex.png";
import pokemon_icon1 from "../../assets/pokemon_icon1.png";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import "./Nav.css";
import { useState } from "react";
import { IconContext } from "react-icons";

export const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearch = (e) => {
    const { value } = e.target;
    if (e.keyCode === 13) {
      dispatch(getPokmeonsByName(value));
    }
  };
  const [sidebar, setSidebar] = useState(false);
  const [sidebarTypes, setSidebarTypes] = useState(false);
  const showSidebar = (setSidebarVal, sidebarVar) => {
    setSidebarVal(!sidebarVar);
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="container_nav">
          <div className="container_nav_home">
            <Link to="/pokemons/AboutMe">
              <img src={pokemon_icon1} alt="app" height={"50"} />
            </Link>
            <Link to="/pokemons">
              <img src={pokedex} alt="app" height={"50"} />
            </Link>
          </div>
          <input type="text" placeholder="Name" onKeyDown={handleSearch} />
          <div className="contenedor_toogle">
            <Link to={"#"} className={"menu-bars"}>
              <FaIcons.FaBars
                onClick={() => {
                  showSidebar(setSidebar, sidebar);
                }}
              />
            </Link>
          </div>
        </div>
        <div className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toogle">
              <Link to={"#"} className={"menu-bars"}>
                <AiIcons.AiOutlineClose
                  onClick={() => {
                    showSidebar(setSidebar, sidebar);
                  }}
                />
              </Link>
            </li>
            <li className="nav-text">
              <Link to={"#"}>
                <span>Ordenar</span>
              </Link>
            </li>
            <li className={sidebarTypes ? "nav-text active" : "nav-text"}>
              <Link
                to={"#"}
                onClick={() => {
                  showSidebar(setSidebarTypes, sidebarTypes);
                }}
              >
                <span>Types</span>
              </Link>
              <ul className="menu__inside">
                <li className="menu__inside">fire</li>
                <li className="menu__inside">grass</li>
                <li className="menu__inside">water</li>
              </ul>
            </li>
            <li className="nav-text">
              <Link to={"#"}>
                <span>Alfabetico</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to={"/pokemons/Create"}>
                <AiIcons.AiFillPlusCircle />
                <span
                  onClick={() => {
                    navigate("/pokemons/Create");
                  }}
                >
                  Crear
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};
