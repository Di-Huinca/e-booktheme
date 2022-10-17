import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import '../components/Login.css';
import {GoogleAuthProvider,signInWithPopup,onAuthStateChanged} from "firebase/auth";
import {auth, userExists} from "../firebase/firebase"
import { useEffect } from 'react';
import { useState } from 'react';
import { async } from '@firebase/util';


export default function LoginView(){
  const [currentUser, setCurrentUser] = useState(null);
  /*
  Estados: 
  0= Inicializando
  1= loading
  2= login completo
  3= login pero sin registro
  4= No hay nadie logueado
  */
  const [state, setCurrenState] = useState(0);
}

export function Login() { //log in 

  useEffect(()=> {

    setCurrentState(1);
    onAuthStateChanged(auth, handleUserStateChanged);
  },[]);


  async function handleUserStateChanged(user){
    if (user) {
      const isRegistered = userExists(user.uid);
      if (isRegistered) {
          setCurrenState(2)
      } else {
          setCurrenState(3)
      } else {
        setCurrenState(4)
        console.log("No hay nadie autenticado.....")
      }
    }
  
  async function handleOnClick(){
    const googleProvider = new GoogleAuthProvider()
    await signInWithGoogle(googleProvider)

      async function signInWithGoogle(googleProvider){
        try {
          const res = await signInWithPopup(auth,googleProvider)
          console.log(res)
        } catch (error) {
          console.error(error)
        }
    }
  }
if (state == 1){
  return <div>Cargando....</div>
}

if (state == 3){
  return <div>Estas autenticado pero no estas registrado</div>
}

if(state=4){
  return <div>Cargando....</div>
}

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

