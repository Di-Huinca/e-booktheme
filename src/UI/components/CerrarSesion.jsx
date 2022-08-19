import React,{Fragment} from 'react'

export function CerrarSesion() {//mensaje de pop up preguntado si desea cerrar sesion
  return (
    <Fragment>
        <h3>¿Desea cerrar sesión?</h3>
        <button>Cancelar</button><button>Aceptar</button>
    </Fragment>
  );
}
