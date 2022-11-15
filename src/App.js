//Dependencias
import React from "react";
import { Route, Routes } from "react-router-dom";
//Pantallas
import Login from "./screens/Login";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Evaluacion from "./screens/Evaluacion";
import Materia from "./screens/Materia";
// import Protected from './components/Protected'

  export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/evaluacion" element={<Evaluacion/>}/>
        <Route path="/materia" element={<Materia/>}/>
      </Routes>
      
    </>
  );
}
