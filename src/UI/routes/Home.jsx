import React from 'react';
import firebaseConfig from '../../firebase/firebase'
import { Button, Container } from 'react-bootstrap'
import ListarEvaluaciones from '../components/ListarEvaluaciones';
import { ListarMaterias } from '../components/ListarMaterias';
import { getFirestore } from 'firebase/firestore'

const firestore = getFirestore(firebaseConfig);



const Home = () => {
  const fakeData = [
    {id:1, descripcion:"prueba falsa para probar"}
  ]
  
  return(
      <Container>
          <ListarEvaluaciones arrayEvaluaciones={fakeData}/>
          <ListarMaterias/>

          <Button variant='contained' ></Button>
          <Button variant='contained' ></Button>
      </Container>
    );
};

export default Home;

