import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextPrevius, paginadoPokemons } from "../../redux/action";
import "./Paginado.css";

export const Paginado = () => {
  const paginas = 1154 / 12;
  const { first, last, pagina } = useSelector((state) => state);
  const dispatch = useDispatch();
  const array = [];
  for (let i = 0; i < paginas; i++) {
    array.push(i + 1);
  }
  const handlePaginado = (num) => {
    dispatch(paginadoPokemons(num));
  };
  const handleChangePage = (first, last) => {
    dispatch(nextPrevius(first, last));
  };
  console.log(array.length);
  return (
    <div className="container_paginado">
      {first !== 1 && (
        <>
          <div
            className="paginado_numero"
            onClick={() => {
              handlePaginado(pagina - 1);
              handleChangePage(first - 1, last - 1);
            }}
          >{`<`}</div>
          <div
            className="paginado_numero"
            onClick={() => {
              handlePaginado(1);
              handleChangePage(1, 3);
            }}
          >
            {`1`}
          </div>
          <p>....</p>
        </>
      )}

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
      {last !== 97 && (
        <>
          <p>....</p>
          <div
            className="paginado_numero"
            onClick={() => {
              handlePaginado(array.length);
              handleChangePage(array.length - 2, array.length);
            }}
          >
            {array.length}
          </div>
          <div
            className="paginado_numero"
            onClick={() => {
              handleChangePage(first + 1, last + 1);
              handlePaginado(pagina + 1);
            }}
          >{`>`}</div>
        </>
      )}
    </div>
  );
};
