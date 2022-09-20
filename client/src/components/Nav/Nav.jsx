import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getPokmeonsByName } from "../../redux/action";
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
      <Link to="/">Landing</Link>
      <input type="text" placeholder="Name" onKeyDown={handleSearch} />
    </div>
  );
};
