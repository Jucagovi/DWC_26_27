import React, { useRef, useState } from "react";

const ListadoMal = () => {
  /*****************************************
   * En la parte de Javascript se crea una referencia a un componente del Virtual DOM.
   ******************************************/
  const listadoRef = useRef(null);
  const [elementos, setElementos] = useState([`Este es el elemento inicial.`]);

  const anadirElementoInner = (referencia) => {
    // 1.- Se añade el código en innerHTML a través de su referencia.
    referencia.current.innerHTML = `${referencia.current.innerHTML}<li>Nuevo elemento desde innerHTML.</li>`;
  };

  const anadirElementoCrear = (referencia) => {
    // 1.- Se crea el nodo del tipo element (<li>).
    let li = document.createElement("li");
    // 2.- Se crea el nodo tipo texto.
    let texto = document.createTextNode("Nuevo elemento desde createElement.");
    // 3.- Se introduce el nodo texto en el nodo element.
    li.appendChild(texto);
    // 4.- Se añade el nodo element a través de su referencia.
    referencia.current.appendChild(li);
  };

  const crearElemento = () => {
    setElementos([...elementos, `Este es un nuevo elemento.`]);
  };

  const borrarListado = (referencia) => {
    // Se cambia el valor del contenido del listado a cadena vacía (se borra).
    //referencia.current.innerHTML = "";
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
              anadirElementoCrear(listadoRef);
            }}
          >
            Añadir elemento con createElement
          </button>
          <button
            onClick={() => {
              borrarListado(listadoRef);
            }}
          >
            Borrar listado
          </button>
        </p>
        <ul ref={listadoRef}>
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

export default ListadoMal;
