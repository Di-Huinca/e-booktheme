//Dependencias
import React, { useState } from 'react'
import { Stack, Container, Button } from 'react-bootstrap'
// import { withRouter } from 'react-router-dom';
//Estilos
import './Login.css'
import Logo from '../assets/img/logo.png'
//Base de datos
import { firebaseApp } from '../firebase/firebase'
import {
  getAuth,
  signInWithRedirect,
  GoogleAuthProvider
} from "firebase/auth"
import { useNavigate } from 'react-router-dom/dist';
const auth = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()

const Login = () => {

  const navigate = useNavigate()

  const iniciarSesion = async () => {
    try {
      await signInWithRedirect(auth, googleProvider)
      .then(
        navigate('../')
        )
    }catch(error){
      console.log(error.message)
    }
  }

  return (
    <div className='log-container'>
      <div className="panel-login">

        <div className='items'>
          <Container>

            <div className='logo-container'>
              <img className='img' src={Logo} width={"150px"} height={"150px"} />
            </div>

            <Stack gap={3}>
              <h1 className='title'>e-booktheme</h1>

              <div className='button'>

                <div className='acceder'>
                  <Button
                    variant="primary"
                    type="submit"
                    style={{ width: "150px" }}
                    onClick={iniciarSesion}
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

