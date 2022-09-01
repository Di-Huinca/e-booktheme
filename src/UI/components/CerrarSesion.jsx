import React,{Fragment} from 'react'
import  './CerrarSesion.css'


export function CerrarSesion() {//mensaje de pop up preguntado si desea cerrar sesion
  return (
    <Fragment>
      <div className='contenedor'>
        <h3 className='texto'>¿Desea cerrar sesión?</h3>
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
