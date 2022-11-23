import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import eliminarClase from '../functions/eliminarClase'
import eliminarEvaluacion from '../functions/eliminarEvaluacion'
import getClases from '../functions/getClases'
import getEvaluaciones from '../functions/getEvaluaciones'
import './MainCont.css'

import ModalEditar from './ModalEditarEvaluacion'

const MainCont = ({ nombre, nombreEvaluacion, nombreClase }) => {
    const [evaluaciones, setEvaluaciones] = useState([]);
    const [isModalEditar, setIsModalEditar] = useState(false);
    const [evaluacionEditar, setEvaluacionEditar] = useState({});
    const [clases, setClases] = useState([]);
    const [claseEditar, setClaseEditar] = useState({});

    function updateEstadoEvaluacion() {
        getEvaluaciones().then((evaluaciones) => {
            setEvaluaciones(evaluaciones);
        })
    }
    function updateEstadoClase() {
        getClases().then((clases) => {
            setClases(clases);
        })
    }

    useEffect(() => {
        updateEstadoEvaluacion();
    }, []);
    useEffect(() => {
        updateEstadoClase();
    }, []);

    return (
        <>

            {evaluacionEditar &&
                (<ModalEditar
                    isModalEditar={isModalEditar}
                    setIsModalEditar={setIsModalEditar}
                    updateEstadoEvaluacion={updateEstadoEvaluacion}
                    evaluacionEditar={evaluacionEditar}
                    setEvaluacionEditar={setEvaluacionEditar}
                />)}
            <h3 className="titulo" >Sus {nombreEvaluacion}</h3>
            <div className="panel" >
                <Table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tema</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {evaluaciones && evaluaciones.map((evaluacion, index) => (
                            <tr key={index}>
                                <td>{evaluacion.fecha}</td>
                                <td>{evaluacion.tema}</td>
                                <td>
                                    <Button
                                        style={{ marginRight: '10px' }}
                                        variant='dark'
                                        onClick={() => {
                                            setEvaluacionEditar({ ...evaluacion },)
                                            setIsModalEditar(true);

                                        }}>
                                        Editar
                                    </Button>
                                    <Button variant='danger'
                                        onClick={() => {
                                            eliminarEvaluacion(evaluacion).then(
                                                confirmacion => {
                                                    updateEstadoEvaluacion()
                                                }
                                            )
                                        }}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            {claseEditar &&
                (<ModalEditar
                    isModalEditar={isModalEditar}
                    setIsModalEditar={setIsModalEditar}
                    updateEstadoClase={updateEstadoClase}
                    claseEditar={claseEditar}
                    setClaseEditar={setClaseEditar}
                />)}
            <h3 className="titulo" >Sus {nombreClase}</h3>
            <div className="panel" >
                <Table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Tema</th>
                            <th>Observaciones</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clases && clases.map((clase, index) => (
                            <tr key={index}>
                                <td>{clase.fecha}</td>
                                <td>{clase.tema}</td>
                                <td>{clase.observacion}</td>
                                <td>
                                    <Button
                                        style={{ marginRight: '10px' }}
                                        variant='dark'
                                        onClick={() => {
                                            setClaseEditar({ ...clase },)
                                            setIsModalEditar(true);

                                        }}>
                                        Editar
                                    </Button>
                                    <Button variant='danger'
                                        onClick={() => {
                                            eliminarClase(clase).then(
                                                confirmacion => {
                                                    updateEstadoClase()
                                                }
                                            )
                                        }}>
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default MainCont;