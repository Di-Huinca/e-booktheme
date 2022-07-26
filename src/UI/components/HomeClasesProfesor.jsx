import React, { Fragment } from 'react';
import { ClasesLista } from './ClasesLista';

export function HomeClasesProfesor() {//home de de las clases del profesor
  return (
    <Fragment>
      <h4>Clases del profesor/a</h4>
      <ClasesLista />
    </Fragment>
  );
}
