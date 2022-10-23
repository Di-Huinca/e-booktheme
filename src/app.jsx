
import React,{ useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";

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

    return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            
        </Routes>
      </BrowserRouter>

      {usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email}/> : <Login/>}
      </>
     );
}
