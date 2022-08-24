import React, {Fragment} from 'react';
import './Login.css'

export function Login() { //log in 
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>¡Comencemos!</h1>
        <h2 className='subtitulo'>Use su DNI para ingresar</h2>

        <input type='text' placeholder='Username'/><br />
        <input type='password' name='password' placeholder='Contraseña'/><br />

        <input type='checkbox' name='checkbox' />
        <label For="checkbox"> Mantener sesion activa</label><br />

        <button className='boton'>INGRESAR</button>

        <div className='info'>No tenes cuenta? <a href="#">Regístrate aquí.</a></div>
        </div>
    </Fragment>
  );
}
