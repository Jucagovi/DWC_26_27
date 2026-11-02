"use strict";

const borrarEnlaces = () => {
  const enlaces = document.getElementsByTagName("a");
  const destino = document.getElementById("enlaces");
  /*  for (let i = 0; i < enlaces.length; i++) {
    destino.appendChild(enlaces[i]);
  } */
  const enlaceArrays = Array.from(enlaces);
  enlaceArrays.map((valor) => {
    destino.appendChild(valor);
  });
};

const incluirBoton = () => {
  document
    .getElementById("botones")
    .insertAdjacentHTML("beforebegin", "<button>Feo</button>");
};

const borrarParrafos = () => {
  const parrafos = Array.from(document.getElementsByTagName("p"));
  parrafos.map((parrafo) => {
    parrafo.remove();
  });
};

let contador = 0;
const id = setInterval(() => {
  //borrarParrafos();
  console.log(contador);
  contador++;
}, 2000);
