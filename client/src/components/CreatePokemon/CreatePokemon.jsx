import React, { useEffect, useState } from "react";
import { Nav } from "../Nav/Nav";
import { useDispatch, useSelector } from "react-redux";
import "./CreatePokemon.css";
import { useNavigate } from "react-router-dom";
import { add_pokemon, getAllTypesPokemon } from "../../redux/action";
import { v4 as uuid } from "uuid";

export const CreatePokemon = () => {
  const { theme, types } = useSelector((state) => state);
  const [pokemon, setPokemon] = useState({
    id: uuid(),
    name: "",
    life: "",
    strength: "",
    defending: "",
    speed: "",
    height: "",
    weight: "",
    sprite: "",
    sprite2: "",
    types: [0, 0],
  });
  const [positionType, setPositionType] = useState(0);
  const [typeName, setTypeName] = useState({ 0: "ninguno", 1: "ninguno" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTypesPokemon());
  }, []);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPokemon({ ...pokemon, [name]: value });
  };
  const handleTypes = (id_type, name_type) => {
    pokemon.types[positionType] = name_type;
    setTypeName({ ...typeName, [positionType]: name_type });
    console.log(pokemon);
  };
  const changeTypePosition = (id_type) => {
    setPositionType(id_type);
    console.log(positionType);
  };
  const handleCreatePokemon = () => {
    dispatch(add_pokemon(pokemon));
  };
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
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="life"
                  placeholder="Life"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="strength"
                  placeholder="Strength"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="defending"
                  placeholder="Defending"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="speed"
                  placeholder="Speed"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="heigth"
                  placeholder="Heigth"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight"
                  onChange={handleChange}
                />
                <input type="text" name="sprite" placeholder="Url Image..." />
                <input type="text" name="sprite2" placeholder="Url Image2..." />
              </div>
              <div className="form_create_types">
                <div className="types_select">
                  <div>
                    <label
                      name=""
                      onClick={() => {
                        changeTypePosition(0);
                      }}
                    >
                      {typeName[0]}
                    </label>
                  </div>
                  <div>
                    <label
                      name=""
                      onClick={() => {
                        changeTypePosition(1);
                      }}
                    >
                      {typeName[1]}
                    </label>
                  </div>
                </div>
                <div className="form_create_types_sel">
                  {types !== undefined &&
                    types.map((type) => {
                      return (
                        <React.Fragment key={type.id}>
                          <div className="lbType">
                            <label
                              onClick={() => {
                                {
                                  handleTypes(type.id, type.name);
                                }
                              }}
                            >
                              {type.name}
                            </label>
                          </div>
                        </React.Fragment>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="botones_create">
              <button
                onClick={() => {
                  handleCreatePokemon();
                }}
              >
                Create
              </button>
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
