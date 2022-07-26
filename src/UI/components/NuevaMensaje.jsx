import React,{Fragment} from 'react';

export function NuevaMensaje() { //mensaje de pop up para añadir una nueva evaluacion o una clase
  return (
    <Fragment>
        <h4>Nueva</h4>

        <button>Evaluación</button>
        <button>Clase</button>
    </Fragment>
  );
}
