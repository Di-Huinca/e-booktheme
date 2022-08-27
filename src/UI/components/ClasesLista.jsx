import { Typography } from '@mui/material';
import React,{Fragment} from 'react';
import { ClasesItem } from './ClasesItem';

export function ClasesLista() {//lista cada item de la clase
  return (
    <Fragment>
      <div>
      <Typography variant='h5' component='h5'>Clases</Typography>
      <ClasesItem></ClasesItem>
      </div>
    </Fragment>
  );
}
