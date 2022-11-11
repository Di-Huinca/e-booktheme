import React from "react";

import Login from "./screens/Login";
import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
  // import Protected from './components/Protected'

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
    </>
  );
}
