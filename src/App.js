import React,{ useState } from 'react';

import Login from "./screens/Login"
import Home from './screens/Home';

import firebaseApp from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './screens/NotFound';

const auth = getAuth(firebaseApp);

  export default function App() {
    // const [usuarioGlobal, setUsuarioGlobal] = useState(null);

    // onAuthStateChanged(auth, (usuariofirebase) => {
    //   if (usuariofirebase){
    //     //si hay sesion iniciada...
    //     setUsuarioGlobal(usuariofirebase);
    //   }else{
    //     //si no hay sesion iniciada...
    //     setUsuarioGlobal(null);
    //   }
    // })

    return (<>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<App/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>

      {/* {usuarioGlobal ? <Home correoUsuario={usuarioGlobal.email}/> : <Login/>} */}
      </>
     );
}
