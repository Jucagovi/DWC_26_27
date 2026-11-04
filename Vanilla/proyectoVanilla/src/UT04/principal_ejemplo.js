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
/* const id = setInterval(() => {
  //borrarParrafos();
  console.log(contador);
  contador++;
}, 2000); */

/**
 * Ejercicio 4.01
 */

const contarParrafos = () => {
  const parrafos = document.getElementsByTagName("p");
  return parrafos.length;
};
const parrafos = document.getElementsByTagName("p");

setTimeout(() => {
  const destino = document.getElementById("info");
  // Primera forma con createElement.
  /* const parrafo1 = document.createElement("p");
  const texto1 = document.createTextNode(
    `El número de párrafos es ${contarParrafos()}`,
  );
  parrafo1.appendChild(texto1);
  destino.appendChild(parrafo1); */

  // Segunda forma de hacerlo.
  /* console.log(destino);
  destino.innerHTML = `<p>El número de párrafos es: ${contarParrafos()}</p>`; */

  // Tercera forma de hacerlo.
  destino.insertAdjacentHTML(
    `afterend`,
    `<div>
    <h2>Hola , este es ele número de párrafos</h2>
    <p>El número de párrafos es: ${contarParrafos()}</p>
    </div>`,
  );
}, 2000);
document.get;
const listado1 = document.getElementsByTagName("p");
const listado2 = document.querySelectorAll("p");
/* console.log(listado1);
console.log(listado2);
console.log([]);
 */

console.log(parrafos[1].getElementsByTagName("a")[1]);
