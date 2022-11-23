import React from 'react'
import {Container, Row, Stack, Col, Button} from 'react-bootstrap'

import firebaseApp from '../../firebase/firebase';
import {getFirestore, updateDoc, doc} from 'firebase/firestore'
const firestore = getFirestore(firebaseApp);


const ListarEvaluaciones = ({arrayEvaluaciones, correoUsuario, setArrayEvaluaciones}) => {

    async function eliminarEvaluacion(idEvaluacionAEliminar){
        //crear nuevo array de evaluaciones
        const newArrayEvaluaciones = arrayEvaluaciones.filter((objetoEval)=> objetoEval.id !== idEvaluacionAEliminar);
        //actualizar BD
        const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
        updateDoc(docuRef, {evaluaciones: [...newArrayEvaluaciones] }); 
        //actualizar state
        setArrayEvaluaciones(newArrayEvaluaciones);
    }


  return (
    <Container>
        <Stack>
        {arrayEvaluaciones.map((objetoEval) => {
            return(
                <>
                <Row>
                    <Col> {objetoEval.nombre}</Col>
                    <Col> {objetoEval.descripcion}</Col>
                    <Col>
                        <Button onClick={() => eliminarEvaluacion(objetoEval.id)} variant='danger' >Eliminar Evaluacion</Button>
                    </Col>
                </Row>
                </>
            )
         })}
        </Stack>
    </Container>
  )
}

export default ListarEvaluaciones;