"use strict";

/**
 * DESCARGO DE RESPONSABILIDAD
 * Todas las funciones aquí declaradas son un claro error de diseño (no debe hacerse en principal.js).
 * Deben estar en un archivo de biblioteca aparte, se es consciente de este error.
 * En lo sucesivo, y exclusivamente con fines didácticos, serán declaradas de este modo.
 * Tanto en las prácticas como en un proyecto real, no debe hacerse así (si no queremos ser devorados por la entropía).
 */

/************************************************************************************************
 * VALORES PRIMITIVOS CONTRA OBJETOS (string, number, boolean, null y undefined).
 ************************************************************************************************/

let cadena = `Feo`; // Es posible utilizar comillas dobles, simples y agudas (recomendadas).
let entero = 5;
let real = 3.14; // ¡¡¡Cuidado con la notación de punto en IU!!! No usar el sistema imperial (sus naves son triángulos).

let cadenaObjeto = new String(`Feo objeto`);
let enteroObjeto = new Number(6);

/* console.log(cadena);
console.log(cadenaObjeto);
console.log(entero);
console.log(enteroObjeto); */

// Los primitivos no tienen métodos, ¿entonces?...
/* console.log(cadena.toUpperCase());
console.log(entero.toFixed(2));
console.log(real.toString()); */

/**
 * Autoboxing o Object Wrapper.
 * El método toUpperCase esta definido en el prototipo String, que esta relacionado con el valor primitivo de cadena.
 * En el momento que se llama al método del prototipo ejecuta la función y destruye este objeto utilizado.
 */

let cadena1 = cadena.toUpperCase();
let cadena2 = cadena.concat(" Horrible");

/* console.log(cadena);
console.log(cadena1);
console.log(cadena);
console.log(cadena2);
console.log(cadena); */

/**
 *  ¡¡¡ eval no se utiliza !!! No necesitáis saber qué es (aunque evalua la cadena de texto y muestra el resultado).
 *  Revisad los objetos String, Date y Math que funcionan igual que en Java.
 *
 */

/************************************************************************************************
 * ARRAYS
 ************************************************************************************************/

/** Declaración.  */

let cosas = new Array();
let tresTipos = new Array(11, "Feo", true);
let tresTiposDos = [11, "hola", true];
let masCosas = [];

/* console.log(tresTiposDos);
console.log(tresTiposDos[3]); */

/** 
            ¡¡CUIDADO!!
Métodos que modifican el array original y otros no (estos no hay que volver a utilizarlos).

  push(elemento)  → añade al final del array.
  pop()           → devuelve y elimina el último elemento.
  reverse()       → invierte el orden de los elementos (usar toReverse()).
  sort()          → ordena los elementos (usar toSorted()).

Algunos devuelven un elemento u otro valor.
Incluso los hay que no hacen nada.

  forEach(función) 	  → ejecuta la función para cada elemento.
  map(función) 		    → ejecuta la función para cada elemento (devuelve).
  every(función) 		  → si la función se cumple siempre.
  some(función) 		  → si la función se cumple para alguno.
  filter(función) 		→ devuelve un nuevo array con elementos que cumplen la función.

Los callbacks reciben tres parámetros opcionales en este orden:
  → el valor del elemento del array,
  → el índice del elemento y
  → el propio array.

Caso especial -> reduce(función(acumulador, valor, índice, array))

*/

var bichos = ["Shakra", "Sherma", "Mooshka", "Huntress", "Hornet"];

/* console.log(
  bichos.every((v, i, a) => {
    return typeof v === "string";
  }),
); // true */

let mezcladillo = [1, "dos", 3, "cuatro", 5, "seis"];

/* console.log(
  mezcladillo.filter((v, i, a) => {
    console.log(`En la posición ${i} está ${v}.`);
    console.log(a);
  }),
); // ["dos", "cuatro", "seis"] */

let numeros = [1, 3, 5, 7, 9];
let suma = numeros.reduce((acumulador, valor, indice, array) => {
  return acumulador + valor;
});

//console.log(suma);

const feos = ["Rodrigo", "Juan", "Artura", "Javier"];

/*** Recorrer un objeto (no se modifica pero hay que utilizar map). */

const feosMap = feos.map((feo) => {
  //console.log(feo);
  return feo.toUpperCase();
});

const feosForeach = feos.forEach((feo) => {
  //console.log(feo);
  return feo.toUpperCase();
});

/* console.log(feosMap);
console.log(feosForeach); */

/************************************************************************************************
 * OPERADOR SPREAD (desparramar)
 ************************************************************************************************/

/*** Shallow copy (copia superficial sólo comparten la referencia). */
/*** Con Spread se realiza una copia profunda (Deep copy) y se copia el contenido del objeto. */

const copia = [...numeros];

/* console.log(copia);      // [1, 2, 3]
console.log(numeros === copia); // false (diferentes referencias)
*/

/*** Combinar objetos. */
const array1 = [1, 2];
const array2 = [3, 4];
const combinado = [...array1, ...array2, ...numeros];

/* console.log(combinado); // [ 1, 2, 3, 4, 1, 3, 5, 7, 9 ]
console.log(personaExtra); */

/***
 *  Gestión de arrays con Spread operator (modo React).
 * */

// -> Recorrer un objeto (no se modifica pero hay que utilizar map).
const feos2 = feos.map((feo) => {
  //console.log(feo);
  return feo;
});

//console.log(feos2);

// -> Añadir un nuevo valor al objeto (uso de spread operator).
const nuevoFeo = "Juan Carlos";
const feos3 = [...feos, nuevoFeo];

//console.log(feos3);

// -> Eliminar un elemento del objeto (filter).
const feos4 = feos3.filter((feo) => {
  return feo !== nuevoFeo;
});

//console.log(feos4);

// -> Actualizar un elemento del objeto.
const nuevoValor = "Arturo";
const valorCambiar = "Artura";
const feos5 = feos.map((feo) => {
  if (feo === valorCambiar) {
    return nuevoValor;
  } else {
    return feo;
  }
});

//console.log(feos5);

/***
 *  arguments vs parámetros rest (con spread)
 * */

// Nueva forma de trabajar con un número indefinido de parámetros.

const sumarBien = (...numeros) => {
  //console.log(arguments); // Es un pseudo-array.
  console.log(numeros); // Es un objeto array.
  return numeros.reduce((acumulador, valor, indice, array) => {
    return acumulador + valor;
  });
};

/* console.log(sumarBien(3, 4, 5, 7, 5, 3, 6, 8, 5, 9, 3)); */

let numero = 45.6;
/* console.log(numero);
console.log(numero.toLocaleString("es-ES")); */

/************************************************************************************************
 * Objeto WINDOW
 ************************************************************************************************
 
Es el contenedor de todas la variables globales y funciones declarativas (las que tienen nombre).

  setTimeout(función,tiempo)      → Programa una acción.
  setInterval(función,tiempo) 		→ Repite una acción.
  clearTimeout/clearInterval(id) 	→ Elimina acción.
  alert() 			                  → Abre ventana de información.
  confirm() 		                  → Abre una ventana de confirmación.
  prompt() 		                    → Recoge información del usuario.

*/

// confirm -> Confirmar una acción.
/* if (confirm("¿Quieres saludar al usuario?")) {
  console.log("¡Hola usuario!");
} else {
  console.log("Pues no te saludo.");
} */

// prompt -> Recoger datos del usuario.
/* let datos = prompt("Escribe tu nombre, Feo.", "Nombre por defecto");
console.log(datos); */

let feo = "Soy un parámetro en tercera posición.";

// setTimeout -> esperar para realizar una acción.
// Esta función callback no recibe parámetros (se pasan a partir del tercer parámetro).
/* const idTimeout = setTimeout(
  () => {
    console.log("Espero dos segundos y ejecuto el código...");
    window.alert(feo); // ¡¡¡No usar nunca!!!
  },
  2000,
  feo
); */

let a = 5;
// setInterval -> repite una acción.
// Esta función callback no recibe parámetros (se pasan a partir del tercer parámetro).
/* const idIntervalo = setInterval(
  () => {
    console.log(Date.now());
    console.log(feo);
  },
  1000,
  feo
); */

// clearInterval/clearTimeout -> detener un intervalo.
/* const idParada = setTimeout(() => {
  if (confirm("¿Quieres detener el intervalo?")) {
    clearInterval(idIntervalo);
  }
}, 5000); */
