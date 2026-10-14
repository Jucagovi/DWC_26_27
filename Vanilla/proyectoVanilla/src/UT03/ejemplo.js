"use strict";

import { dispositivos } from "../datos/dispositivos.js";

/*************
 * Funciones que no deberían estar declaradas aquí,
 * sino importadas desde una biblioteca.
 */

// Listado de elementos.
const listadoNombre = (feos) => {
  if (Array.isArray(feos)) {
    feos.map((v, i, a) => {
      console.log(v?.nombre);
    });
  } else {
    console.log(`Necesito un array, idiota.`);
  }
};

// Precio total,
const obtenerTotal = (feos) => {
  const total = feos.reduce((acumulador, v, i, a) => {
    return (acumulador += parseInt(v.precio));
  }, 0);

  console.log(`El total del valor es: ${total}.`);
};

// Infome completo de un dispositivo.
const listadoCompleto = (feos) => {
  feos.map((v, i, a) => {
    console.log(`${v.nombre} (${v.marca}).`);
    console.log(
      `Especificaciones: ${v.especificaciones.procesador} (${v.especificaciones.ram}).`,
    );
    console.log(v.especificaciones);
    console.log(`Accesorios:`);
    v.accesorios.map((v, i, a) => {
      console.log(`   - ${v.tipo}`);
    });
    console.log(`------------------------------------`);
  });
};

// Comprobar si está en sctock.
const enStock = (feos) => {
  return feos.filter((v, i, a) => {
    return v.enStock ?? v;
  });
};

// Comprobar no tiene sctock.
const sinStock = (feos) => {
  return feos.filter((v, i, a) => {
    return !v.enStock ?? v;
  });
};

// Acceso a un elemento.

//console.log(dispositivos[0].nombre);

//listadoNombre(dispositivos);
//listadoCompleto(dispositivos);

listadoCompleto(sinStock(dispositivos));

//listadoNombre(enStock(dispositivos));

