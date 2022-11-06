import React from 'react'
import {Container, Row, Stack, Col, Button} from 'react-bootstrap';

import firebaseApp from '../../firebase/firebase';
import { getFirestore,updateDoc,doc } from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);


const ListarMaterias = ({arrayTareas, correoUsuario, setArrayTareas}) => {

  async function eliminarTarea(idTareaAEliminar){
    //crear nuevo array de tareas
    const newArrayTareas = arrayTareas.filter((objetoTarea) => objetoTarea.id !== idTareaAEliminar);
    //actualizar BD
    const docuRef = doc (firestore, `usuarios/${correoUsuario}`);
    updateDoc(docuRef,{tareas: [...newArrayTareas] });
    //actualizar state
    setArrayTareas(newArrayTareas);
  }

  return (
    <Container>
      <Stack>
        {arrayTareas.map((objetoTarea) => {
          return(
            <>
              <Row>
                <Col>{objetoTarea.nombre}</Col>
                <Col>{objetoTarea.descripcion}</Col>
                <Col>
                  <Button onClick={() => eliminarTarea(objetoTarea.id)}
                  variant='danger'>Eliminar Tarea</Button>
                </Col>
              </Row>
            </>
          )
        })}
      </Stack>
    </Container>
  )
}

export default ListarMaterias;  