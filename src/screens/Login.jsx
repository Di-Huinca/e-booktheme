//Dependencias
import React, { useState } from 'react'
import { Stack, Container, Form, Button } from 'react-bootstrap'
//Estilos
import './Login.css'
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
              <h1 className='title'>{estaRegistrandose ? "Registrate" : "e-booktheme"}</h1>
<<<<<<< HEAD:src/screens/Login.jsx
              <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label size="sm" className='email'>Ingrese su Email</Form.Label>
                  <Form.Control size="40px" className='email.label' type="email" placeholder="nombre@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className='Password'>Contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <div className='Roles'>
                  <Form.Group controlId="exampleForm.ControlSelect">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control as="select">
                      <option>Profesor</option>
                      <option>Preceptor</option>
                      <option>Administrador</option>
                    </Form.Control>
                  </Form.Group>
                </div>

                <div className='button'>
                      <div className= "Registrarse">
                      <Button
                        variant="dark"
                        type="submit">

                        {estaRegistrandose ? "Registrate" : "Inicia Sesion"}
                      </Button>
                      </div>
=======
              
                <div className='button'>
                      
>>>>>>> Feat_estilos:src/UI/routes/Login.jsx
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

