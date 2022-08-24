import React, {Fragment} from 'react'
import { ClasesAnteriores } from './ClasesAnteriores';

export function ClasesItem() {//item de calses del dia
  return (
    <Fragment>
        <h1>Nombre materia</h1>
        <p>Horarios y dias de la semana</p>

        <h3>Hoy</h3>
        <p>Actualizacion del dia con estados de si hay o no contenido</p>

        <h3>Anteriores</h3>
        <ClasesAnteriores/>

        <button>+</button>

    </Fragment>
  );
}
