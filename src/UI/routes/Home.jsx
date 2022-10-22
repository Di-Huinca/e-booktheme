import React, {useEffect, useState} from 'react';
import { Button, Container } from 'react-bootstrap'

import ListarEvaluaciones from '../components/ListarEvaluaciones';
import  ListarMaterias  from '../components/ListarMaterias';

import { firebaseApp } from '../../firebase/firebase'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
import { getAuth, signOut } from 'firebase/auth';
import AgregarEvaluacion from '../components/AgregarEvaluacion';
import Sidebar from '../components/Sidebar';

const firestore = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp)


const Home = ({correoUsuario}) => {
 
  const [arrayEvaluaciones,setArrayEvaluaciones] = useState(null); 
  const [arrayTareas,setArrayTareas] = useState(null); 

  const fakeData = [
    { id:1, 
      nombre:"jeronimo", 
      descripcion:"prueba falsa para probar"},
    { id:2, 
      nombre:"hola hola", 
      descripcion:"prueba falsa 2 "}
  ]

  async function buscarDocumentoOrCrearDocumento(idDocumento){
    //crear referencia al documento
    const docuRef = doc(firestore, `usuarios/${idDocumento}`);
    //buscar documento
    const consulta = await getDoc(docuRef);
    //revisa si existe 
    if (consulta.exists()){
      //si existe
      const infoDocu = consulta.data();
      return infoDocu.evaluaciones;
    }else{
      //si no existe
      await setDoc(docuRef, {evaluaciones: [...fakeData] });
      const consulta = await getDoc(docuRef);
      const infoDocu = consulta.data();
      return infoDocu.evaluaciones;
      
    }
  }

  useEffect (() => {
    async function obtenerEvaluaciones(){
      const evalObtenidas = await buscarDocumentoOrCrearDocumento(correoUsuario);
      setArrayEvaluaciones(evalObtenidas);
    }
      obtenerEvaluaciones();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // useEffect(() => {
  //         async function obtenerTareas(){
  //       const tareasObtenidas = await buscarDocumentoOrCrearDocumento(correoUsuario);
  //       setArrayTareas(tareasObtenidas);
  //     }
  //     obtenerTareas();
  // }, [])

  return(
      <Container>
          <h4>Hola, sesion iniciada...</h4>
          <Button onClick={() => signOut(auth)}>Cerrar sesion</Button>

          <AgregarEvaluacion
            arrayEvaluaciones={arrayEvaluaciones}
            setArrayEvaluaciones={setArrayEvaluaciones}
            correoUsuario={correoUsuario}
          />

          {arrayEvaluaciones ? ( <ListarEvaluaciones arrayEvaluaciones={arrayEvaluaciones}
          setArrayEvaluaciones={setArrayEvaluaciones}
          correoUsuario={correoUsuario} />) : null}
          {arrayTareas ? ( <ListarMaterias arrayTareas={arrayTareas}
          setArrayTareas={setArrayTareas}
          correoUsuario={correoUsuario} />) : null}

          <Sidebar/>
          
      </Container>
    );
};

export default Home;

