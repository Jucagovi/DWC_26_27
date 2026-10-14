"use strict";

// Función para comprobar números.
const comprobarNumeros = (num = []) => {
  if (Array.isArray(num)) {
    return num.every((v, i, a) => {
      return !isNaN(v);
    });
  }
};

// Fucnión con la lógica de negocio.
const sumarFeos = (...numeros) => {
  if (comprobarNumeros(numeros)) {
    return numeros.reduce((acumulador, v, i, a) => {
      return (acumulador += v);
    });
  }
};

const multiplicarFeos = (...numeros) => {
  if (comprobarNumeros(numeros)) {
    return numeros.reduce((acumulador, v, i, a) => {
      return (acumulador *= v);
    });
  }
};

export { sumarFeos, multiplicarFeos, comprobarNumeros };
