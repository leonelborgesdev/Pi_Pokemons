import React from "react";
import { useSelector } from "react-redux";
import "./Paginado.css";

export const Paginado = () => {
  const paginas = 1154 / 12;
  const { first, last } = useSelector((state) => state);
  const array = [];
  for (let i = 0; i < paginas; i++) {
    array.push(i + 1);
  }
  return (
    <div className="container_paginado">
      {array.map((num) => {
        return (
          <>
            {num >= first && num <= last && (
              <div className="paginado_numero">{num}</div>
            )}
          </>
        );
      })}
    </div>
  );
};
