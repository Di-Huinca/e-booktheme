import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { HomeClasesProfesor } from './UI/routes/HomeClasesProfesor';
import HomeScreen from './UI/routes/HomeScreen.jsx';
import {Login} from './UI/routes/Login.jsx' 
import {LogForm} from './UI/routes/LogForm.jsx' 
import { CerrarSesion } from './UI/components/CerrarSesion';

  export function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='home/profesor' element={<HomeClasesProfesor/>} />
          <Route path='login' element={<Login/>}></Route>
          <Route path='logform' element={<LogForm/>} />
          <Route path='cerrar-sesion' element={<CerrarSesion/>} />
      </Routes>
</BrowserRouter>
     );
}
