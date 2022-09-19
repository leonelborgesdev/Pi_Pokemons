import React from "react";
import { useDispatch } from "react-redux";
import { getPokmeonsByName } from "../../redux/action";
import "./Nav.css";

export const Nav = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const { value } = e.target;
    if (e.keyCode === 13) {
      alert("hola :D" + value);
      dispatch(getPokmeonsByName(value));
    }
  };
  return (
    <div>
      <input type="text" placeholder="Name" onKeyDown={handleSearch} />
    </div>
  );
};
