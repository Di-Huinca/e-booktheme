import React, { useEffect, useState } from 'react';

import '../routes/Home.css'
import Sidebar from '../components/Sidebar'
import Head from '../components/Head';
import MainCont from '../components/MainCont';

// Ventanas Modal
import ModalEval from '../components/ModalEvaluacion';
import Modal from '../components/Modal'

import firebaseApp from '../../firebase/firebase'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)


const Home = ({ correoUsuario }) => {

  const [arrayEvaluaciones, setArrayEvaluaciones] = useState(null);
  const [arrayTareas, setArrayTareas] = useState(null);

  const fakeData = [
    {
      id: 1,
      nombre: "jeronimo",
      descripcion: "prueba falsa para probar"
    },
    {
      id: 2,
      nombre: "hola hola",
      descripcion: "prueba falsa 2 "
    }
  ]

  async function buscarDocumentoOrCrearDocumento(idDocumento) {
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    //revisa si existe 
    if (consulta.exists()) {
      //si existe
      const infoDocu = consulta.data();
      return infoDocu.evaluaciones;
    } else {
      //si no existe
      await setDoc(docuRef, { evaluaciones: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.evaluaciones;

    }
  }

  useEffect(() => {
    async function obtenerEvaluaciones() {
      const evalObtenidas = await buscarDocumentoOrCrearDocumento(correoUsuario);
      setArrayEvaluaciones(evalObtenidas);
    }
    obtenerEvaluaciones();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (

    <>
      <div className="home">
        <div className="sidebar-container"><Sidebar auth={auth} /></div>
        <div className="header-container"><Head /></div>

        <div className="main-panel">
          <Modal />
          <ModalEval />
          <MainCont />
        </div>
      </div>
    </>
  );
};

export default Home;

