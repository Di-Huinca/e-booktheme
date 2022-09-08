import React from 'react';
import { EvaluacionItem } from './EvaluacionItem';
import './EvaluacionesLista.css';
import { Typography } from '@mui/material';

const EvaluacionesLista = () => {
  return (
    <div className='lista-container'>
        <Typography className='titulo-evaluaciones' variant='h5'>Evaluaciones</Typography>
        <EvaluacionItem 
            dia='viernes'
            fecha='24.05'
            materia='REDES II'
        />
    </div>
  )
}

export default EvaluacionesLista