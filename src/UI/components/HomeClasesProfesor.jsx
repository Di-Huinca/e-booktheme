import React, { Fragment } from 'react';
import { ClasesLista } from './ClasesLista';
import NavBar from './NavBar';

export function HomeClasesProfesor() {//home de de las clases del profesor
  return (
    <Fragment>
        <NavBar></NavBar>

       <ClasesLista></ClasesLista>

    </Fragment>
  );
}
