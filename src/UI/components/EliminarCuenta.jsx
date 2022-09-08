import React,{Fragment} from 'react'
import '../components/styles/EliminarCuenta.css'

export function EliminarCuenta() {//Mensaje de eliminacion de cuenta pop up
  return (
    <Fragment>
      <div className='contenedor'>
        <h4 className='texto'>¿Desea eliminar su cuenta?</h4>
        <div>
            <div className='button'>
                <button className='btn'>Cancelar</button>
                <button className='btn'>Aceptar</button>
            </div>
        </div>
      
      </div>

    </Fragment>
  );
}
