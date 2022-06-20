import React, { Fragment } from 'react';
import { Login } from "./UI/components/Login";
import { NuevaMensaje } from './UI/components/NuevaMensaje';

export function App() {
  return (
    <Fragment>
        <Login />
        <NuevaMensaje />
    </Fragment>
  );
}
