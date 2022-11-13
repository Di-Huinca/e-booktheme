import React, { useEffect, useState } from 'react'
import { Button, Table } from 'react-bootstrap'
import eliminarEvaluacion from '../functions/eliminarEvaluacion'
import getEvaluaciones from '../functions/getEvaluaciones'
import './MainCont.css'

const MainCont = () => {
    const [evaluaciones, setEvaluaciones] = useState([]);

    function updateEstadoEvaluacion() {
        getEvaluaciones().then((evaluaciones) => {
            setEvaluaciones(evaluaciones);
        })
    }

    useEffect(() => {
        updateEstadoEvaluacion();
    }, []);

    return (
        <>
            <h3 className="titulo" >Sus Materias</h3>
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
                                    <Button variant='dark'>Editar</Button>
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
        </>
    )
}

export default MainCont;