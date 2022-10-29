import React from 'react';
import {Routes, Route } from 'react-router-dom';
import { App } from '../../App';
import Home from './Home';
import Login from './Login';
import NotFound from './NotFound';

const Router  = () => (
    <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
    </Routes>
);

export default Router;