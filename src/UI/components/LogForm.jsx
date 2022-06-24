import React,{Fragment} from 'react'

export function LogForm() {
  return (
    <Fragment>
        <h1>Creemos una cuenta</h1>
        <h2>Ingrese sus datos</h2>

        <input type="text" placeholder="DNI" /><br />
        <input type="password" placeholder='Contraseña'/><br />
        <input type="text" placeholder='Email'/><br />
        <button>Registrar</button>
    </Fragment>
  );
}
