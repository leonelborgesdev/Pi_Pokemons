import React from "react";
import "./Nav.css";

export const Nav = () => {
  const handleSearch = () => {
    alert("hola :D");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            handleSearch();
          }
        }}
      />
    </div>
  );
};
