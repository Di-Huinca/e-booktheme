import React, { Fragment } from 'react';
import { Login } from "./UI/components/Login";
import { NuevaMensaje } from './UI/components/NuevaMensaje';
import { ConfirmacionGuardado } from './UI/components/ConfirmacionGuardado';
import { LogForm } from './UI/components/LogForm';

export function App() {
  return (
    <Fragment>
        <Login />
        <NuevaMensaje />
        <ConfirmacionGuardado />
        <LogForm/>
    </Fragment>
  );
}
