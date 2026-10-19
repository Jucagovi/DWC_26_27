import React, { useState } from "react";
import ValorEstado from "../../tools/ValorEstado";

const StateContador = () => {
  // Se crea el estado del componente.
  let [contador, setContador] = useState(0);
  /* Funciones asociadas al estado.
   *    Se crean el mismo componente ya que dependen del estado.
   *    Si forman parte del núcleo del componente se declaran en el componente.
   */
  const incremento = () => {
    setContador(contador + 1); // Una sola actualización por ámbito.
    //contador++; // No hay redibujado ya que no se está utilizando la función setContador.
    console.log(contador);
  };
  const decremento = () => {
    contador > 0 ? setContador(contador - 1) : 0;
    //contador--;
    console.log(contador);
  };

  const reiniciar = (numero) => {
    setContador(numero);
    console.log(contador);
  };

  // Se crea el código JSX.
  return (
    <>
      <div>
        <h1>Mi primer contador en React</h1>
        {/* Se muestra el estado del componente. */}
        <h1>{contador}</h1>
        <h2>
          <ValorEstado estado={contador} />
        </h2>
        {/*¿Y si quiero que su valor se muestre siempre si es positivo?
          -> Se comprueba el valor en la función "decremento". */}
        <p>
          {/* Se asignan los eventos a los botones. */}
          <button
            onClick={() => {
              incremento();
            }}
          >
            Incrementar
          </button>
          <button
            onClick={() => {
              decremento();
            }}
          >
            Decrementar
          </button>
          <button
            onClick={() => {
              reiniciar(0);
            }}
          >
            Reiniciar
          </button>
          {/*¿Y si quiero reiniciar el contador? 
            -> Se crea una función específica para ello.*/}
        </p>
      </div>
    </>
  );
};
/* *************************************************************************
 *   La función setContador es una función asíncrona por ese motivo no tiene
 *   un comportamiento síncrono (el valor de contador no coincide).
 *   Esto es un funcionamiento normal que se entenderá en la unidad
 *   destinada al asincronismo.
 *
 *   Para solucionar esto es mejor comprobar el estado en el return.
 *   ¿Crear una herramienta de desarrollo para esto?
 *************************************************************************** */
export default StateContador;
