import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginadoPokemons } from "../../redux/action";
import "./Paginado.css";

export const Paginado = () => {
  const paginas = 1154 / 12;
  const { first, last } = useSelector((state) => state);
  const dispatch = useDispatch();
  const array = [];
  for (let i = 0; i < paginas; i++) {
    array.push(i + 1);
  }
  const handlePaginado = (num) => {
    dispatch(paginadoPokemons(num - 1));
  };
  console.log(array.length);
  return (
    <div className="container_paginado">
      {first !== 1 && <div className="paginado_numero">{`<`}</div>}
      {array.map((num) => {
        return (
          <React.Fragment key={num}>
            {num >= first && num <= last && (
              <div
                className="paginado_numero"
                onClick={() => {
                  handlePaginado(num);
                }}
              >
                {num}
              </div>
            )}
          </React.Fragment>
        );
      })}
      {last !== 97 && <div className="paginado_numero">{`>`}</div>}
    </div>
  );
};
