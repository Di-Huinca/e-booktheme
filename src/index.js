import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { App } from "./App.jsx";
import './index.css'
import { HomeClasesProfesor } from "./UI/routes/HomeClasesProfesor.jsx";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <BrowserRouter>
            <Routes>
                <Route path='/' elemnt={<App/>} />
                <Route path='home' element={<HomeClasesProfesor/>} />
            </Routes>
    </BrowserRouter>
);