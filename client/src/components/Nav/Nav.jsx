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
import { IconContext } from "react-icons";

export const Nav = () => {
  const dispatch = useDispatch();
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
            <Link to="/">
              <img src={pokemon_icon} alt="app" height={"50"} />
            </Link>
            <Link to="/pokemons">
              <img src={pokemon_icon2} alt="app" height={"50"} />
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
                <span>Ordenar</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to={"#"}>
                <span>Alfabetico</span>
              </Link>
            </li>
            <li className="nav-text">
              <Link to={"#"}>
                <AiIcons.AiFillPlusCircle />
                <span>Crear</span>
              </Link>
            </li>
          </ul>
        </div>
      </IconContext.Provider>
    </>
  );
};
