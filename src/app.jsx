import React, { Fragment } from 'react';
import { Login } from "./UI/components/Login";
import { NuevaMensaje } from './UI/components/NuevaMensaje';
import { ConfirmacionGuardado } from './UI/components/ConfirmacionGuardado';
import { LogForm } from './UI/components/LogForm';
import { CambioPass } from './UI/components/CambioPass';
import { HomeClasesProfesor } from './UI/components/HomeClasesProfesor';
import { Observaciones } from './UI/components/Observaciones';

export function App() {
  return (
    <Fragment>
        <Login />
        <NuevaMensaje />
        <ConfirmacionGuardado />
        <LogForm/>
        <CambioPass/>
        

    </Fragment>
  );
}
