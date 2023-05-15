import React, { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePokemon.css";
import { useNavigate } from "react-router-dom";
import { getAllTypesPokemon } from "../../redux/action";

export const CreatePokemon = () => {
  const { theme, types } = useSelector((state) => state);
  const { pokemon, setPokemon } = useState({
    id: "",
    name: "",
    life: "",
    strength: "",
    defending: "",
    speed: "",
    height: "",
    weight: "",
    url_image: "",
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypesPokemon());
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {};
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
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="life" placeholder="Life" />
                <input type="text" name="strength" placeholder="Strength" />
                <input type="text" name="defending" placeholder="Defending" />
                <input type="text" name="speed" placeholder="Speed" />
                <input type="text" name="heigth" placeholder="Heigth" />
                <input type="text" name="weight" placeholder="Weight" />
                <input
                  type="text"
                  name="url_image"
                  placeholder="Url Image..."
                />
              </div>
              <div className="form_create_types">
                {types !== undefined &&
                  types.map((type) => {
                    return (
                      <React.Fragment key={type.id}>
                        <div className="lbType">
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
