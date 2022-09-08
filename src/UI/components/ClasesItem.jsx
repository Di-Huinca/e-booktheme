import React from 'react'
import '../components/styles/ClasesItem.css'

export function ClasesItem({clases, props}) {//item de calses del dia
  console.log(clases.materia);
  return (
  <div className='clases-item-container'> 
      <p>{clases.materia} {clases.curso} {clases.horario} </p>
  </div>
  );
}
