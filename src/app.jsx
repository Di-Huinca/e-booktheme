
import React,{ useState } from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";


import Login from "./UI/routes/Login"
import Home from './UI/routes/Home';
import Evaluaciones from './UI/routes/Evaluaciones';
// import Datepicker from './UI/components/Datepicker'

import firebaseApp from './firebase/firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth(firebaseApp);

  export function App() {
 
    return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='Evaluaciones' element={<Evaluaciones/>}/>
        </Routes>
      </BrowserRouter>

      </>
     );
}
