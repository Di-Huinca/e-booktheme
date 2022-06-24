import React,{Fragment} from 'react';

export function Materia() {
  return (
    <Fragment>
        <h1>Nombre materia</h1>
        <p>Horarios y dias de la semana</p>

        <ul>
            <li> Unidad 
                 <select name="" id="">
                    <option value="Unidad 1 "> Unidad 1</option>
                    <option value="Unidad 2 "> Unidad 2</option>
                    <option value="Unidad 3 "> Unidad 3</option>
                </select>
                <button>+</button>
            </li>
            <li>Tema
                <select name="" id="">
                    <option value="Tema 1 "> Tema ....</option>
                    <option value="Tema 2 "> Tema ....</option>
                    <option value="Tema 3 "> Tema ....</option>
                   
                </select>
                <button>+</button>
            </li>
        </ul>

        <h2>Observaciones</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel labore ipsa dolore in doloremque, omnis commodi modi laborum nulla quaerat porro laudantium? Deleniti commodi voluptas assumenda vel maxime ullam quis.</p>

        <button>GUARDAR</button>
    </Fragment>
  );
}
