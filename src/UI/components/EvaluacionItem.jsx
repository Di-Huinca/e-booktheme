import React from 'react'
import './EvaluacionItem.css'

export function EvaluacionItem(props) {
  return (
    <div className='item-container'>
        <p> {props.dia} {props.fecha} {props.materia}</p>
    </div>
  )
}
