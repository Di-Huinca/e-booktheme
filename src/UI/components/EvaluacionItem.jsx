import React from 'react'
import '../components/styles/EvaluacionItem.css'

export function EvaluacionItem(props) {
  return (
    <div className='eva-item-container'>
        <p> {props.dia} {props.fecha} {props.materia}</p>
    </div>
  )
}
