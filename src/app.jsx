import React, { Fragment } from 'react';
import { CambioPass } from './UI/components/CambioPass';
import { Login } from './UI/components/Login';
import { ConfirmacionGuardado } from './UI/components/ConfirmacionGuardado';
 
export function App() {
    return (
      <Fragment>
            <CambioPass></CambioPass>
            <Login></Login>
            <ConfirmacionGuardado></ConfirmacionGuardado>
       </Fragment>
     );
}
