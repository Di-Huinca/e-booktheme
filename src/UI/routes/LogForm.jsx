import React,{ Component} from 'react'
import { Link } from 'react-router-dom';

export class LogForm extends Component{ //formulario de registro 

  

  state = {
    dni: '',
    password: '',
    email:''
  }

  onSubmit = e => {
    e.preventDefault();
  }

  onChange = e => {
    console.log(e.target.name, e.target.value)
    this.setState({
      [e.target.name] : e.target.value
    })
  }


  render(){
    return(
      <form onSubmit={this.onSubmit}>
        <h1>Creemos una cuenta</h1>
        <h2>Ingrese sus datos</h2>

        <input type="text" name='dni' placeholder="DNI" onChange={this.onChange} value={this.state.dni}/><br />
        <input type="password" name='password' placeholder='Contraseña' onChange={this.onChange} value={this.state.password}/><br />
        <input type="text" name='email' placeholder='Email' onChange={this.onChange} value={this.state.email}/><br />
        <Link to='/'> <button type='submit'>Registrar</button></Link>
      </form>
    );
  }
}
