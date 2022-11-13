
import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./UI/routes/Login"
import Home from './UI/routes/Home';
// import Evaluaciones from './UI/routes/Evaluaciones';

  export function App() {
 
    return (<>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>

        </Routes>
      </BrowserRouter>

      </>
     );
}
