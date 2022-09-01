import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css'

export function Login() { //log in 
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>¡Comencemos!</h1>
        <h2 className='subtitulo'>Use su DNI para ingresar</h2>
        <div className='cont-input'>
        <input className='text' type='text' placeholder='Username'/>
        <input className='password' type='password' name='password' placeholder='Password'/>
          <div className='cont-sesion'>       
            <input className='checkbox' type='checkbox' name='checkbox' />
            <label For="checkbox"> Mantener sesion activa</label>
          </div>
        </div>
        <button className='boton'>INGRESAR</button>

        <div className='info'>No tenes cuenta? <Link to='/logform'>Regístrate aquí</Link></div>
        </div>
    </Fragment>
  );
}
