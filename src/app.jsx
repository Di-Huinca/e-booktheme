import React, { Fragment } from 'react';
import { CambioPass } from './UI/components/CambioPass';
import { Login } from './UI/components/Login';

  export function App() {
    return (
      <Fragment>
            <CambioPass></CambioPass>
            <Login></Login>
       </Fragment>
     );
}
