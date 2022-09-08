import { Typography } from '@mui/material';
import React from 'react';
import { ClasesItem } from './ClasesItem';

export function ClasesLista() {//lista cada item de la clase
  return (
    <div className='lista-container'>
      <Typography className='titulo-clases' variant='h5'>Clases</Typography>
      <ClasesItem 
        materia='Inglés'
        curso='6°1°'
        horario='15:00hs a 18:00hs'
      />
      <ClasesItem 
        materia='Seguridad informatica'
        curso='5°1°'
        horario='13:00hs a 18:00hs'
      />
      
    </div>
  );
}
