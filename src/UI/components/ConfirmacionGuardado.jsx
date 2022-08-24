import React, {Fragment} from 'react'

export function ConfirmacionGuardado() {//mensaje de pop up de confirmacion
  return (
    <Fragment>
      <h4>¿Desea guardar lo hecho en el dia?</h4>

      <button>Cancelar</button>
      <button>Confirmar</button>

    </Fragment>
  )
}
