import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ClasesLista } from '../components/ClasesLista';
import NavBar from '../components/NavBar';

export function HomeClasesProfesor() {//home de de las clases del profesor
  return (
    <Fragment>
        <div className='header-container'>
          <NavBar></NavBar>
          <Link className='btn-home' to='/'>Home</Link>
        </div>

       <ClasesLista></ClasesLista>

    </Fragment>
  );
}
