import React from "react";
import { useParams } from "react-router-dom";
import listado from "../assets/objetos/discentes.json";

const DiscenteDetalle = () => {
  // Se recoje la variable pasada por la API react-router-dom.
  const { identificador } = useParams();

  /** Esta variable viaja desde la ruta:
   *
   *  <Route path='/administracion/discentedetalle/:id' element={<DiscenteDetalle />} />
   *
   */

  const discenteFiltrado = listado.discentes.filter((valor) => {
    return valor.id === parseInt(identificador); // ¡¡¡Ojo!!! La información se comparte en formato string.
  });

  // Se desestructura el resultado para mayor comodidad.
  const { nombre, apellidos, curso, modulos } = discenteFiltrado[0]; // ¡¡¡Ojo!!! (Bis). Filter siempre devuelve un array.

  return (
    <>
      <div>
        <h1>{identificador}</h1>
        <h2>
          {nombre} {apellidos}
        </h2>
        <h3>Matriculado/a en {curso}.</h3>
        <h3>Con los módulos {modulos}.</h3>
      </div>
    </>
  );
};

// Preguntas de diseño:
// ¿Versión mejorada con un componente <DiscenteInformacion>?
// ¿Y si no existe el discente?

export default DiscenteDetalle;
