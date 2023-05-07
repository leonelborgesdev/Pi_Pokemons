import React from "react";
import { Nav } from "../Nav/Nav";
import { useSelector } from "react-redux";

export const CreatePokemon = () => {
  const { theme } = useSelector((state) => state);
  return (
    <div id={theme}>
      <Nav />
      <h1>Create Pokemon</h1>
      <div>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Life" />
        <input type="text" placeholder="Strength" />
        <input type="text" placeholder="Defending" />
        <input type="text" placeholder="Speed" />
        <input type="text" placeholder="Heigth" />
        <input type="text" placeholder="Weight" />
      </div>
    </div>
  );
};
