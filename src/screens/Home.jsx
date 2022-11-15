//Dependencias
import React, { useState } from 'react';
//Estilos
import './Home.css'
//Componentes
import Sidebar from '../components/Sidebar'
import Head from '../components/Head';
import MainCont from '../components/MainCont';
import ModalEval from '../components/ModalEvaluacion';
import Modal from '../components/ModalClase'
//Base de datos
import firebaseApp from '../firebase/firebase'
import { getAuth } from 'firebase/auth';
const auth = getAuth(firebaseApp)


const Home = () => {
  const [isModalAñadir, setIsModalAñadir] = useState(false);

  function añadirEvaluacion() {
    setIsModalAñadir(true);
  }
  return (

    <>
      <div className="home">
        <div className="sidebar-container"><Sidebar auth={auth} /></div>
        <div className="header-container"><Head /></div>

        <div className="main-panel">
          <Modal />
          <ModalEval isModalAñadir={isModalAñadir} setIsModalAñadir={setIsModalAñadir} />
          <MainCont nombreEvaluacion='Evaluaciones' nombreClase='Clases' />
        </div>
      </div>
    </>
  );
};

export default Home;

