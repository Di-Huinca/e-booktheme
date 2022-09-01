import React, { Fragment } from 'react';
import { CerrarSesion } from './UI/components/CerrarSesion';
import { ConfirmacionGuardado } from './UI/components/ConfirmacionGuardado';
import { EliminarCuenta } from './UI/components/EliminarCuenta';


export function App() {

    return (
      <Fragment>
            <CerrarSesion></CerrarSesion>
            <ConfirmacionGuardado></ConfirmacionGuardado>
            <EliminarCuenta></EliminarCuenta>
       </Fragment>
     );
}
