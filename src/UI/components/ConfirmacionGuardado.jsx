import React, {Fragment} from 'react'
import './ConfirmacionGuardado.css'

export function ConfirmacionGuardado() {//mensaje de pop up de confirmacion
  return (
    <Fragment>
      <div className="general">
        <h4 className='h4'>¿Desea guardar lo hecho en el dia?</h4>
          
            <div className="cancelar">
               <button className='cancel'>Cancelar</button>
            </div>

            <div className="aceptar">
                <button className='confirm'>Confirmar</button>
            </div>

      </div>
    </Fragment>
  )
}
