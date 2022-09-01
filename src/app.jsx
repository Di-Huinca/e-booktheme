import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { HomeClasesProfesor } from './UI/routes/HomeClasesProfesor';
import HomeScreen from './UI/routes/HomeScreen.jsx';
import {Login} from './UI/routes/Login.jsx' 

  export function App() {
    return (
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='home/profesor' element={<HomeClasesProfesor/>} />
          <Route path='login' element={<Login/>}></Route>
      </Routes>
</BrowserRouter>
     );
}
