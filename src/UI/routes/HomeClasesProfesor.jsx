import React, { Fragment } from 'react';
import { ClasesLista } from '../components/ClasesLista';
import NavBar from '../components/NavBar';

export function HomeClasesProfesor() {//home de de las clases del profesor
  return (
    <Fragment>
        <NavBar></NavBar>

       <ClasesLista></ClasesLista>

    </Fragment>
  );
}
