import React from "react";
// Añadir media.
// Añadir CSS.
import logotipo from "../../assets/react.svg";

function ComponenteFeo(props) {
  //const PrimerComponente = (props) => {
  // Código JavaScript Vanilla.
  return (
    // Código JSX que aparecerá en el DOM.
    // Para más de una etiqueta se utiliza React.Fragments.
    <>
      <h1>¡Hola,feo!</h1>
      <img src={logotipo} />
      <p className='titulo'>El ingenioso hidalgo Don Quijote de la Mancha.</p>
      <p>
        En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha
        mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga
        antigua, rocín flaco y galgo corredor.
      </p>
      <p>
        Una olla de algo más vaca que carnero, salpicón las más noches, duelos y
        quebrantos los sábados, lantejas los viernes, algún palomino de
        añadidura los domingos, consumían las tres partes de su hacienda.
      </p>
      <p>
        El resto della concluían sayo de velarte, calzas de velludo para las
        fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se
        honraba con su vellorí de lo más fino.
      </p>
    </>
  );
}

export default ComponenteFeo;
