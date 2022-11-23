import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
//Base de datos
import añadirEvaluacion from '../functions/añadirEvaluacion';
import uniqid from 'uniqid'

function ModalEval({ isModalAñadir, setIsModalAñadir }) {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  function añadirEvaluacionModal() {
    //obtener info del formulario
    const fecha = document.getElementById('fechaInput').value;
    const tema = document.getElementById('temaInput').value;
    const uuid = uniqid()
    //enviar informacion a firebase
    const infoEvaluacion = {fecha, tema, uuid};
    añadirEvaluacion(infoEvaluacion);
    //cerrar modal
    setShow(false);
  }

  return (
    <>
      <Button variant="warning" style={{margin: '20px'}} onClick={handleShow}>
        Nueva Evaluación
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "150px" }}>
            Nueva Evaluación
          </Modal.Title>

        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" >
              <Form.Label>Fecha</Form.Label>
              <Form.Control
                id="fechaInput"
                type="date"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Temas</Form.Label>
              <Form.Control as="textarea" rows={3} id="temaInput" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={añadirEvaluacionModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEval