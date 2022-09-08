import { Typography } from '@mui/material';
import React from 'react';
import { ClasesItem } from './ClasesItem';

//creo un array de objetos en el cual al llamarlo desde el componente creara cada item por cada objeto
const clases = [ 
  {id: 1,curso: "5°1°",horario:"17:00 a 18:00", materia: "english"},
  {id: 2,curso: "6°1°",horario:"15:00 a 18:00", materia: "english"},
  {id: 3,curso: "6°1°",horario:"15:00 a 18:00", materia: "so 2"},
];


export function ClasesLista() {//lista cada item de la clase
  return (
    <div className='lista-container'>
      <Typography className='titulo-clases' variant='h5'>Clases</Typography>

        {clases.map((clase) =>            //cremos un array.map del arreglo clases. por cada elemento del arreglo, crea un apodo para relacionado, e imprime el componente dentro del array.map
          <ClasesItem key={clase.id}      //el componente tiene un prop key que lo busca el atributo id de la constante 'clases', para que sea unico.
            clases={clase}         //creamos el prop clases y le enviamos el elemento con sus atributos y valores.
          />
        )}
    </div>
  );
}
