import React, { useState } from "react";
import "./StateObjetos.css";
import {
  generarNombreAleatorio,
  generarApellidosAleatorio,
} from "../../libraries/funciones.js";
import ValorEstado from "../../tools/ValorEstado.jsx";
import ElementoListado from "./ElementoListado.jsx";

const StateObjetos = () => {
  // Si se trabaja con objetos es buena idea tener un "reinicio".
  const estadoInicial = [];
  // Se crea el componente con el estado inicial de valores.
  let [prueba, setPrueba] = useState(estadoInicial);

  const addObjeto = () => {
    // Se genera el objeto con el nombre de forma aleatoria.
    let objeto = {
      nombre: `${generarNombreAleatorio()}`,
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
        {Array.isArray(prueba) && prueba.length > 0
          ? prueba.map((valor, indice) => {
              return (
                <ElementoListado key={indice} datos={valor} />
                // ¿No se están haciendo demasiadas cosas?
                //    -> Sí, hay que crear componentes nuevos.
                // ¿No se deberían comprobar los datos antes de recorrerlos?
                //    -> Siempre hay que comprobar si es un array y si tiene valores antes de hacer el map.
              );
            })
          : "No hay datos, tonto."}
      </div>
    </>
  );
};

export default StateObjetos;
