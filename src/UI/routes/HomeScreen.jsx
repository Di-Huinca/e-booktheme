import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export default function HomeScreen() {
  return (
       <Fragment>
        <div className='header-container'>
          <NavBar></NavBar>
          <Link to="/">Home</Link>
        </div>

        <div className='contenido-container'>
          <Link to="/home/profesor">Pagina del profe </Link>
          <Link to='/login'>Login</Link> 
          <Link to ='/cerrar-sesion'>Cerrar Sesión</Link>
        </div>
       </Fragment> 
  )
}
