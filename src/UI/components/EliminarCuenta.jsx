import React,{Fragment} from 'react'

export function EliminarCuenta() {//mensaje de eliminacion de cuenta pop up
  return (
    <Fragment>
        <h4>¿Desea eliminar su cuenta?</h4>
        <button>Cancelar</button><button>Aceptar</button>
    </Fragment>
  );
}
