//Dependencias
import React, { useState } from 'react';
//Estilos
import './Materia.css'
//Componentes
import Sidebar from '../components/Sidebar'
import Head from '../components/Head';
import MainCont from '../components/MainCont';
import Modal from '../components/Modal'
// import ModalEval from '../components/ModalEvaluacion';
//Base de datos
import firebaseApp from '../firebase/firebase'
import { getAuth } from 'firebase/auth';
const auth = getAuth(firebaseApp)


const Materia = () => {
  const [isModalAñadir, setIsModalAñadir] = useState(false);

  function añadirEvaluacion() {
    setIsModalAñadir(true);
  }
  return (

    <>
      <div className="materia">
        <div className="sidebar-container"><Sidebar auth={auth} /></div>
        <div className="header-container"><Head /></div>

        <div className="main-panel">
            <Modal />
          {/* <ModalEval isModalAñadir={isModalAñadir} setIsModalAñadir={setIsModalAñadir} /> */}
          <MainCont nombre="Materia"/>
        </div>
      </div>
    </>
  );
};

export default Materia;