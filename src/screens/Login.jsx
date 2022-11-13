//Dependencias
import React, { useState } from 'react'
import { Stack, Container,Button } from 'react-bootstrap'
//Estilos
import './Login.css'
import Logo from '../assets/img/logo.png'
//Base de datos
import { firebaseApp } from '../firebase/firebase'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth"
const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

const Login = () => {
  const { estaRegistrandose, setEstaRegistrandose } = useState(false)

  async function submitHandler(e) {
    e.preventDefault()
    const correo = e.target.formBasicEmail.value
    const contra = e.target.formBasicPassword.value

    if (estaRegistrandose) {
      // Si el usuario se registra
      const usuario = await createUserWithEmailAndPassword(
        auth,
        correo,
        contra
      )
    } else {
      // Si esta iniciando sesión
      signInWithEmailAndPassword(auth, correo, contra)
    }
  }

  return (
    <div className='log-container'>
      <div className="panel-login">

        <div className='items'>
          <Container>

            <div className='logo-container'>
              <img className='img' src={Logo} width={"150px"} height={"150px"}/>
            </div>

            <Stack gap={3}>
              <h1 className='title'>e-booktheme</h1>
              
                <div className='button'>
                      
                      <div className='acceder'>
                      <Button
                        variant="primary"
                        type="submit"
                        style={{ width: "150px" }}
                        onClick={() => signInWithRedirect(auth, googleProvider)}
                      >
                        Acceder con Google
                      </Button>
                      </div>
                </div>
            </Stack>
          </Container>
        </div>
      </div>
    </div>
  )
}


export default Login

