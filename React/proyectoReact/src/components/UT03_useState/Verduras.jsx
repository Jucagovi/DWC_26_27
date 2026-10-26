import React, { useState } from "react";
import { generarVerduraAleatorio } from "../../libraries/funciones.js";
import { generarFrutaAleatorio } from "../../libraries/funciones.js";
import VerdurasListado from "./VerdurasListado.jsx";
import VerdurasError from "./VerdurasError.jsx";
import Boton from "./Boton.jsx";

const Verduras = () => {
  // Origen de datos.
  const listadoInicial = ["Lechuga", "Tomate", "Pimiento", "Nabo"];
  const [listado, setListado] = useState(listadoInicial);

  // Funciones para modificar el estado.

  const descatalogarProducto = (idEliminar) => {
    const listaActualizada = productos.filter((p) => {
      return p.id !== idEliminar;
    });
    setProductos([...listaActualizada]);
  };

  const limpiar = () => {
    setListado([]);
  };

  const reiniciar = () => {
    setListado(listadoInicial);
  };

  const anadir = () => {
    setListado([...listado, generarVerduraAleatorio()]);
  };

  const borrar = (verdura) => {
    // Comprobar si tiene valores.
    const nuevasVerduras = listado.filter((v, i, a) => {
      return verdura !== v;
    });
    setListado(nuevasVerduras);
  };

  return (
    <>
      <h2>Ejemplo con verduras</h2>
      <div className='botonera'>
        <Boton nombre='Limpiar' funcion={limpiar} />
        <Boton nombre='Reiniciar' funcion={reiniciar} />
        <Boton nombre='Añadir' funcion={anadir} />
        <Boton
          nombre='Borrar'
          funcion={() => {
            const verduraEliminada = generarVerduraAleatorio();
            borrar(verduraEliminada);
            console.log(verduraEliminada);
          }}
          activo={listado.length > 0}
        />
      </div>

      <div>
        {Array.isArray(listado) && listado.length ? (
          <VerdurasListado datos={listado} />
        ) : (
          <VerdurasError />
        )}
      </div>
    </>
  );
};

export default Verduras;
