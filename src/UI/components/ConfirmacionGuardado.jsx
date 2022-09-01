import React, {Fragment} from 'react'
import './ConfirmacionGuardado.css'
import './index.css'

export function ConfirmacionGuardado() {//mensaje de pop up de confirmacion
  return (
    <Fragment>
      <div className="contenedor">
        <h4 className='texto'>¿Desea guardar lo hecho en el dia?</h4>
          <div>
            <div className='button'>
            <button className='btn'>Aceptar</button>
            <button className='btn'>Cancelar</button>
            </div>
          </div>
      </div>
    </Fragment>
  )
}
