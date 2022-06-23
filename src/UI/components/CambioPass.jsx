import React, {Fragment} from 'react';

export function CambioPass() {
  return (
    <Fragment>
        <h6>Contraseña</h6>
        <input type="password" placeholder='Contraseña actual' />
        <h6>Nueva contraseña</h6>
        <input type="password" placeholder='Contraseña nueva' />
        <h6>Nueva contraseña</h6>
        <input type="password" placeholder='Contraseña nueva'/>

        <br /><button>GUARDAR</button>
    </Fragment>
  );
}
