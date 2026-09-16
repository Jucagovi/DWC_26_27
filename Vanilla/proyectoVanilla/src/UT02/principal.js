"use strict"; // Siempre primera línea (ni siquiera un comentario).

/**
 * DESCARGO DE RESPONSABILIDAD
 * Todas las funciones aquí declaradas son un claro error de diseño (no debe hacerse en principal.js).
 * Deben estar en un archivo de biblioteca aparte, se es consciente de este error.
 * En lo sucesivo, y exclusivamente con fines didácticos, serán declaradas de este modo.
 * Tanto en las prácticas como en un proyecto real, no debe hacerse así (si no queremos ser devorados por la entropía).
 */

/******* ÁMBITOS *******/

// BLOQUE -> todo el código contenido entre llaves.

var ejemploFeo = 3; // Equivale a una función global (no abusar de ellas).

function ejemplo() {
  if (ejemploFeo === 3) {
    var variable1 = 1;
    let variable2 = 2;
  }
  console.log(variable1); // variable1 existe en este lugar.
  console.log(variable2); // variable2 no existe en este lugar.
}

/* ejemplo(); */

/******* TIPOS DE DATOS *******/

/* console.log(typeof 94.8); // Devuelve 'number'.
console.log(typeof "Feo"); // Devuelve 'string'.
let edad = 23,
  nuevaEdad,
  incremento = 4;
const nombre = "Feo Horrible";
console.log(typeof incremento === "number");
nuevaEdad = edad + incremento;
// Este es el modo "java" de mostrar cadenas (evitar).
console.log(nombre + " tras " + incremento + " años tendrá " + nuevaEdad);
// Mejor se usa *template literals*.
console.log(`${nombre} tras ${incremento} años tendrá ${nuevaEdad}`);
 */
/******* FUNCIONES *******/

/*** Declaración de funciones declaración */

function doblar(num1) {
  var res = num1 * 2;
  return `El resultado es ${res}`;
}

console.log(doblar(151));

/*** Parámetros predeterminados */

function saludar(persona = "Amigo") {
  return `¡Hola ${persona}!`;
}

console.log(saludar());
console.log(saludar("Feo"));

/*** Funciones como parámetro */

function alpha(num, fun) {
  return fun(num);
}

console.log(alpha(50, doblar));
console.log(alpha("Feo", doblar));

/*** Hoisting en funciones */

//Existe pero no es recomedable utilizarlo.

/*** Funciones anónimas (expresión) */

const feo = function (num1, num2) {
  return num1 + num2;
};

console.log(typeof feo);
console.log(feo);
console.log(feo(5, 5));

//Se usan en la definición de métodos de los objetos.

//Otro uso de la funciones anónimas (como parámetros)

var beta = alpha(5, function (num) {
  return num * 2;
});

/* console.log(`El valor de beta es ${beta}`); */

/*** Funciones flecha (usadas como callbacks, no como métodos) */

const potencia = (num) => {
  return num ** 3;
};

/*** El pseudoarray (objeto iterable) arguments */

function sumarB() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  /*   let arrayFeo = [4, 5, 4, 7];
  console.log(arrayFeo);
  console.log(arguments); */
  return total;
}

console.log(sumarB(4, 5, 4, 7, 12, 13, 34, 56, 7, 12, 13, 34, 56));
