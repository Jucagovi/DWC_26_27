import React, { useState } from "react";
import "./StateObjetos.css";
import {
  generarNombreAleatorio,
  generarApellidosAleatorio,
} from "../../libraries/funciones.js";
import ValorEstado from "../../tools/ValorEstado.jsx";
import ElementoListado from "./ElementoListado.jsx";

function StateObjetos() {
  // Si se trabaja con objetos es buena idea tener un "reinicio".
  const estadoInicial = [];
  // Se crea el componente con el estado inicial de valores.
  let [prueba, setPrueba] = useState(estadoInicial);

  const addObjeto = () => {
    // Se genera el objeto con el nombre de forma aleatoria.
    let objeto = {
      nombre: generarNombreAleatorio(),
      apellidos: `${generarApellidosAleatorio()} ${generarApellidosAleatorio()}`,
    };
    setPrueba([...prueba, objeto]);
  };

  return (
    <>
      <button
        onClick={() => {
          addObjeto();
        }}
      >
        Añadir objeto
      </button>
      <div className='StateObjetos-listado'>
        {/* Imprimir el estado (Objeto) para comprobar su comportamiento.*/}
        {prueba.map((valor, indice) => {
          return (
            <p>
        {valor.apellidos}, {valor.nombre}
      </p>
            // ¿No se están haciendo demasiadas cosas?
            // ¿No se deberían comprobar los datos antes de recorrerlos?
          );
        })}
      </div>
    </>
  );
}

export default StateObjetos;
