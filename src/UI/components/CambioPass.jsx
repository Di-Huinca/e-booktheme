import React, {Fragment} from 'react';
import './CambioPass.css'

export function CambioPass() {//Funcion cambiar de contraseña UI
  return (
    <Fragment>
        <div className='container'>

        <h6 className='Subtitle'>Contraseña</h6>
        <input className='input' type="password" placeholder='Contraseña actual' />
        
        <h6 className='Subtitle' >Nueva contraseña</h6>
        <input className='input' type="password" placeholder='Contraseña nueva' />
        
        <h6 className='Subtitle'>Nueva contraseña</h6>
        <input className='input' type="password" placeholder='Contraseña nueva'/>
        </div>
        
        <div className='caja-boton'>
        <button className='boton'>GUARDAR</button>
        </div>

    </Fragment>
  );
}
