import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import "bootstrap/dist/css/bootstrap.min.css";
//Base de datos
import añadirEvaluacion from '../functions/añadirEvaluacion';
import uniqid from 'uniqid'

function ModalEditar({ isModalEditar, setIsModalEditar, evaluacionEditar, setEvaluacionEditar }) {
  const [evaluacionEstado, setEvaluacionEstado] = useState({ ...evaluacionEditar, })

  function editarEvaluacionModal() {
    //obtener info del formulario
    const fecha = document.getElementById('fechaInput').value;
    const tema = document.getElementById('temaInput').value;
    const uuid = uniqid()
    //enviar informacion a firebase
    const infoEvaluacion = { fecha, tema, uuid };
    añadirEvaluacion(infoEvaluacion);
    //cerrar modal
    setEvaluacionEditar(null)
    setIsModalEditar(false);
  }

  return (
    <>
      <Modal show={isModalEditar} onHide={() => {
        setIsModalEditar(false)
        setEvaluacionEditar(null)
      }
      }>
        <Modal.Header closeButton>
          <Modal.Title style={{ width: "150px" }}>
            Editar Evaluación
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
                value={evaluacionEstado.fecha}
                onChange={(e) =>
                  setEvaluacionEstado({
                    ...evaluacionEstado,
                    fecha: e.target.value,
                  })}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Temas</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                id="temaInput"
                value={evaluacionEstado.tema}
                onChange={(e) =>
                  setEvaluacionEstado({
                    ...evaluacionEstado,
                    tema: e.target.value,
                  })} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setIsModalEditar(false)
              setEvaluacionEditar(null)

            }}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={editarEvaluacionModal}>
            Guardar cambios
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalEditar