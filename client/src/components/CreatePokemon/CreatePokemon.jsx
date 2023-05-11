import React, { useEffect } from "react";
import { Nav } from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePokemon.css";
import { useNavigate } from "react-router-dom";
import { getAllTypesPokemon } from "../../redux/action";

export const CreatePokemon = () => {
  const { theme, types } = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypesPokemon());
  }, []);
  const navigate = useNavigate();
  return (
    <div id={theme}>
      <Nav />
      <div className="container_create">
        <h1>Create Pokemon</h1>
        <div className="card_create">
          <div className="container_image_pokemon">
            <div className="image_pokemon"></div>
            <button>Exportar imagen</button>
          </div>
          <div className="form_create">
            <div className="form_create_info">
              <div className="form_create_inputs">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Life" />
                <input type="text" placeholder="Strength" />
                <input type="text" placeholder="Defending" />
                <input type="text" placeholder="Speed" />
                <input type="text" placeholder="Heigth" />
                <input type="text" placeholder="Weight" />
              </div>
              <div className="form_create_types">
                {types !== undefined &&
                  types.map((type) => {
                    return (
                      <React.Fragment>
                        <div className="">
                          <label>{type.name}</label>
                        </div>
                      </React.Fragment>
                    );
                  })}
              </div>
            </div>
            <div className="botones_create">
              <button>Create</button>
              <button
                onClick={() => {
                  navigate("/pokemons");
                }}
              >
                Volver
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
