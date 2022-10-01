
import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import {Login} from "./UI/routes/Login"

  export function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}>
            </Route>
        </Routes>
      </BrowserRouter>
     );
}
