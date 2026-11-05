"use strict";

// Función para comprobar si un número es primo (cortesía de ChatGPT).
const esPrimo = (numero) => {
  if (numero < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
};

// Forma 1: createElement.
/* 
const tabla = document.createElement("table");
tabla.setAttribute("id", "feo");

let numero = 1;
for (let i = 0; i < 10; i++) {
  const tr = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    const td = document.createElement("td");
    td.textContent = `${numero}`;
    tr.appendChild(td);
    numero++;
  }
  tabla.appendChild(tr);
}
document.body.appendChild(tabla);

const idSet = setTimeout(() => {
  // Utilizando el desparrame.
  const celdas = [...document.getElementById("feo").getElementsByTagName("td")];
  celdas.map((celda) => {
    if (esPrimo(parseInt(celda.textContent))) {
      celda.classList.add("primo");
    }
  });
}, 2000); */

// Forma 2: insertAdjacentHTML.

// Se crea una función que devuelve un string con la tabla formada.
const crearTabla = (identificador) => {
  let tabla = `<table id="${identificador}">`;
  let numero = 1;
  for (let i = 0; i < 10; i++) {
    tabla = `${tabla}<tr>`;
    for (let j = 0; j < 10; j++) {
      tabla = `${tabla}<td>${numero}</td>`;
      numero++;
    }
    tabla = `${tabla}</tr>`;
  }
  tabla = `${tabla}</table>`;
  return tabla;
};

// Se insterta la tabla creada en el <body>.
document.body.insertAdjacentHTML(`beforeend`, crearTabla("fea"));
document.body.insertAdjacentHTML(`beforeend`, crearTabla("feo"));
document.body.insertAdjacentHTML(`beforeend`, crearTabla("horrible"));

// Se pinta de rojo el fondo de los números primos.
const idSet = setTimeout(() => {
  // Utilizando el desparrame.
  const celdas = [...document.getElementById("feo").getElementsByTagName("td")];
  celdas.map((celda) => {
    if (esPrimo(parseInt(celda.textContent))) {
      celda.classList.add("primo");
    }
  });
}, 2000);
