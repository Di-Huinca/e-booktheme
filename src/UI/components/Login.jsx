import React, {Fragment} from 'react';
import './Login.css'

export function Login() { //log in 
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>¡Comencemos!</h1>
        <h2 className='subtitulo'>Use su DNI para ingresar</h2>
        <div className='cont-input'>
        <input type='text' placeholder='Username'/>
        <input type='password' name='password' placeholder='Contraseña'/>
       
        <input type='checkbox' name='checkbox' />
        <label For="checkbox"> Mantener sesion activa</label>
        </div>
        <button className='boton'>INGRESAR</button>

        <div className='info'>No tenes cuenta? <a href="#">Regístrate aquí.</a></div>
        </div>
    </Fragment>
  );
}
