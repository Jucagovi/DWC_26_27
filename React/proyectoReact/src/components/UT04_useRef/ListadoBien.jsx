import React, { useState } from "react";

const ListadoBien = () => {
  // Se usa un estado para mostrar lo datos en el DOM.
  const [elementos, setElementos] = useState([`Este es el elemento inicial.`]);

  const crearElemento = () => {
    setElementos([...elementos, `Este es un nuevo elemento.`]);
  };

  const borrarListado = () => {
    setElementos([]);
  };
  return (
    <>
      <div>
        <h2>Listado de elementos a incrementar.</h2>
        <p>
          <button
            onClick={() => {
              crearElemento();
            }}
          >
            Añadir elemento con innerHTML
          </button>
          <button
            onClick={() => {
              crearElemento();
            }}
          >
            Añadir elemento con createElement
          </button>
          <button
            onClick={() => {
              borrarListado();
            }}
          >
            Borrar listado
          </button>
        </p>
        {/* Y no es necesaria ninguna referencia */}
        <ul>
          {Array.isArray(elementos) && elementos.length
            ? elementos.map((elemento, indice) => {
                return <li key={indice}>{elemento}</li>;
              })
            : `No hay elementos.`}
        </ul>
      </div>
    </>
  );
};

export default ListadoBien;
