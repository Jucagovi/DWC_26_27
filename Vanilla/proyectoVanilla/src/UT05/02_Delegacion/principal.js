"use strict";

import { agregarEvento, agregarBoton } from "./bibliotecas/biblioteca.js";

window.onload = () => {
  let contenedor = document.getElementById("contenedor");

  /********************************************
   * Para asignar eventos siempre hay que seguir estas normas:
   *  -> siempe en el fichero principal,
   *  -> nunca dentro de una función (asignación no destructiva),
   *  -> siempre hay que utilizar la delegación de eventos (si es posible).
   *
   ********************************************/

  document.getElementById("nuevoBoton").addEventListener("click", () => {
    agregarBoton();
  });

  /*******************************************
   * ¿Cómo adigno eventos a varios elementos?
   ********************************************/

  /*  // Se seleccionan los elementos.
  let botones = document.getElementsByTagName("button");
  // Se agregan los eventos.
  document.getElementById("agregarEvento").addEventListener(
    "click",
    (evento) => {
      agregarEvento(botones);
    },
    false,
  ); */

  /********************************************
   * Delegación de eventos al rescate.
   ********************************************/
  document.getElementById("contenedor").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      console.log("Hola, Feo.");
    }
    if (e.target.tagName === "P") {
      console.log("Hola párrafo, Feo.");
    }
  });
}; //Fin del window.load.
