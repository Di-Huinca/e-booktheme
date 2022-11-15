//Dependencias
import React, { useState } from 'react';
//Estilos
import './Evaluacion.css'
//Componentes
import Sidebar from '../components/Sidebar'
import Head from '../components/Head';
import MainCont from '../components/MainCont';
import ModalEval from '../components/ModalEvaluacion';
//Base de datos
import firebaseApp from '../firebase/firebase'
import { getAuth } from 'firebase/auth';
const auth = getAuth(firebaseApp)


const Evaluacion = () => {
  const [isModalAñadir, setIsModalAñadir] = useState(false);

  function añadirEvaluacion() {
    setIsModalAñadir(true);
  }
  return (

    <>
      <div className="evaluacion">
        <div className="sidebar-container"><Sidebar auth={auth} /></div>
        <div className="header-container"><Head /></div>

        <div className="main-panel">
          <ModalEval isModalAñadir={isModalAñadir} setIsModalAñadir={setIsModalAñadir} />
          <MainCont />
        </div>
      </div>
    </>
  );
};

export default Evaluacion;