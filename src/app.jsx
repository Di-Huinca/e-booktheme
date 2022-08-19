import React, { Fragment } from 'react';
import { Login } from "./UI/components/Login";
import { NuevaMensaje } from './UI/components/NuevaMensaje';
import { ConfirmacionGuardado } from './UI/components/ConfirmacionGuardado';
import { LogForm } from './UI/components/LogForm';
import { CambioPass } from './UI/components/CambioPass';
import { HomeClasesProfesor } from './UI/components/HomeClasesProfesor';
import { CerrarSesion } from './UI/components/CerrarSesion';

import { EliminarCuenta } from './UI/components/EliminarCuenta';

import { Materia } from './UI/components/Materia';

import { VerificarEmail } from './UI/components/VerificarEmail';



  import { StackNavigator } from 'react-navigation'
  import HomeScreen from 'UI/components/HomeScreen'
  import MateriaScreen from 'UI/components/Materia'

  const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen},
    Materia: { screen: MateriaScreen},
  },{
    initialRouteName: 'Home',
  })

  AppRegistry.registerComponent('SimpleApp' , () => SimpleApp)





  //export function App() {
    //return (
      // <Fragment>
         
       //</Fragment>
     //);
//}
