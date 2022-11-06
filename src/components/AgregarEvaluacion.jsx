import React from 'react';
import {Container, Form, Col, Row, Button } from 'react-bootstrap';

import firebaseApp from '../../firebase/firebase';
import {getFirestore, updateDoc, doc} from 'firebase/firestore';
const firestore = getFirestore(firebaseApp);

const AgregarEvaluacion = (correoUsuario, setArrayEvaluaciones, arrayEvaluaciones) => {
  
    async function añadirEvaluacion(e){
        e.preventDefault();
        //necesito guardar en variables los valores de los inputs del formulario para poder enviarlos a la BD
        const titulo = e.target.formTitulo.value;
        const descripcion = e.target.formDescripcion.value;
        const fecha = e.target.formDate.value;
        //crear nuevo array evaluaciones
        const newArrayEvaluaciones = [...arrayEvaluaciones, {id:+ new Date() , titulo:titulo , descripcion:descripcion , fecha:fecha }];
        //actualizar BD
          const docuRef = doc(firestore, `usuarios/${correoUsuario}`);
          updateDoc(docuRef, {evaluaciones: [...newArrayEvaluaciones]});
          //actualizar state
          setArrayEvaluaciones(newArrayEvaluaciones); 
    }
  
    return (
    <Container>
        <Form onSubmit={añadirEvaluacion}>
            <Row>
                <Col><Form.Control id='formTitulo' type='text' placeholder='Titulo de la evaluación'/></Col>
                <Col><Form.Control id='formDescripcion' type='text' placeholder='Descripcion de la evaluación'/></Col>
                <Col><Form.Control id='formDate' type='date' placeholder='Fecha de la evaluacion'/></Col>
                <Col>
                    <Button type='submit'> Agregar Evaluacion  </Button>
                </Col>
            </Row>
        </Form>
    </Container>
  )
}

export default AgregarEvaluacion