import React, {Fragment} from 'react';
import './Login.css'

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

        <div className='info'>No tenes cuenta? <a href="#">Regístrate aquí.</a></div>
        </div>
    </Fragment>
  );
}
