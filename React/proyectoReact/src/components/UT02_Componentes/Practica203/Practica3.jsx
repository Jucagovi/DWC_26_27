import React from "react";
import Contenedor from "./Contenedor.jsx";
import Interprete from "./Interprete.jsx";

const Practica3 = () => {
  return (
    <section id='center'>
      <h2>¡Hola, React!</h2>
      <Contenedor>
        <Interprete
          nombre='Feo Horrible'
          imagen='https://images.uncyclomedia.co/inciclopedia/es/thumb/6/63/Feo.png/225px-Feo.png'
        >
          Esta es una biografía muy fea de un tipo muy feo.
        </Interprete>
        <Interprete
          nombre='Fea de veredad'
          imagen='https://images.uncyclomedia.co/inciclopedia/es/thumb/6/63/Feo.png/225px-Feo.png'
        >
          Esta es la biografía muy fea pasada a través de <i>children</i>.
        </Interprete>
      </Contenedor>
    </section>
  );
};

export default Practica3;
