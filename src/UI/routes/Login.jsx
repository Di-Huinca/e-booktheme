import React, {Fragment} from 'react';

export function Login() { //log in 
  return (
    <Fragment>
        <h1>¡Comencemos!</h1>
        <h2>Use su DNI para ingresar</h2>

        <input type='text' placeholder='Username'/><br />
        <input type='password' name='password' placeholder='Contraseña'/><br />

        <input type='checkbox' name='checkbox' />
        <label For="checkbox"> Mantener sesion activa</label><br />

        <button>INGRESAR</button>

        <div>No tenes cuenta? Regístrate aquí.</div>
    </Fragment>
  );
}