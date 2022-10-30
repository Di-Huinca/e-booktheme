import React, { useState } from 'react'
import { Stack, Container, Form, Button } from 'react-bootstrap'
import './Login.css'

// import logo from '../../assets/img/logo.png'

import firebaseApp from '../../firebase/firebase'
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
      <div className="panel">

        <Container>
          {/* <div className=''>
            <img src={logo}/>
          </div> */}

          <Stack gap={3}>
            <h1 className='title'>{estaRegistrandose ? "Registrate" : "e-booktheme"}</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label size="sm" className='email'>Ingrese su Email</Form.Label>
                <Form.Control size="40px" classsName='email.label' type="email" placeholder="nombre@example.com" />
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
                <Button

                  variant="dark"
                  type="submit">

                  {estaRegistrandose ? "Registrate" : "Inicia Sesion"}
                </Button>
              </div>
            </Form>
            <div className="acceder">
              <Button size='lg'

                variant="primary"
                type="submit"
                style={{ width: "300px" }}
                onClick={() => signInWithRedirect(auth, googleProvider)}
              >
                Acceder con Google
              </Button>
            </div>
          </Stack>
        </Container>
      </div>
    </div>
  )
}


export default Login

