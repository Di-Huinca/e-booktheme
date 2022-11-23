import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
//Base de datos
import añadirClase from '../functions/añadirClase';
import uniqid from 'uniqid'

function ModalClase() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function añadirClaseModal() {
    //obtener info del formulario
    const fecha = document.getElementById('fechaInput').value;
    const tema = document.getElementById('temaInput').value;
    const observacion = document.getElementById('observacionInput').value;
    const uuid = uniqid()
    //enviar informacion a firebase
    const infoEvaluacion = { fecha, tema, observacion, uuid };
    añadirClase(infoEvaluacion);
    //cerrar modal
    setShow(false);
  }


  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Nueva Clase
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "150px" }}>
            Nueva Clase
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tema del dia</Form.Label>
              <Form.Control
                type="input"
                placeholder="Ej: Polinomios"
                autoFocus
                id='temaInput'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Observaciones</Form.Label>
              <Form.Control as="textarea" rows={3} id='observacionInput' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={añadirClaseModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalClase