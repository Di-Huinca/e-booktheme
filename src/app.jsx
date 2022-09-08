import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from './UI/routes/Login';
import HomeScreen from './UI/routes/HomeScreen';

  export function App() {
    return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          
        </Routes>
      </BrowserRouter>
     );
}
