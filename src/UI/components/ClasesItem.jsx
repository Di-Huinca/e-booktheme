import React from 'react'
import './ClasesItem.css'

export function ClasesItem(props) {//item de calses del dia
  return (
  <div className='clases-item-container'> 
      <p>{props.materia} {props.curso} {props.horario} </p>
  </div>
  );
}
