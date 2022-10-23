import React,{ useState } from 'react';

import Login from "./UI/routes/Login"
import Home from './UI/routes/Home';

import firebaseApp from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

  export function App() {
    const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    onAuthStateChanged(auth, (usuariofirebase) => {
      if (usuariofirebase){
        //si hay sesion iniciada...
        setUsuarioGlobal(usuariofirebase);
      }else{
        //si no hay sesion iniciada...
        setUsuarioGlobal(null);
      }
    })

    return (
      <>
        {usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email}/> : <Login/>}
      </>
     );
}
