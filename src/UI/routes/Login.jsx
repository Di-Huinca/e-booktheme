import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css';
import {GoogleAuthProvider,signInWithPopup} from "firebase/auth";
import {auth} from "../firebase/firebase"


export function Login() { //log in 
  async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider()
    await signInWithGoogle(googleProvider)
  }
  
  async function signInWithGoogle(googleProvider){
      try {
        const res = await signInWithPopup(auth,googleProvider)
        console.log(res)
      } catch (error) {
        console.error(error)
      }
  };
  return (
    <Fragment>
      <div className='container'>
        <h1 className='titulo'>¡Comencemos!</h1>
        <h2 className='subtitulo'>Use su DNI para ingresar</h2>
        <div className='cont-input'>
        <input className='text' type='text' placeholder='Username'/>
        <input className='password' type='password' placeholder='Password'/>
        </div>
        <Link to='/'> <button onClick={handleOnClick} className='boton'>INGRESAR</button></Link>

        <div className='info'>No tenes cuenta? <Link to='/logform'>Regístrate aquí</Link></div>
        </div>
    </Fragment>
  );
}
