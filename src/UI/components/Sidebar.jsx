import { signOut } from 'firebase/auth'
import React from 'react'
import { IoIosAlbums,IoMdLogOut, IoMdDocument} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Sidebar.css'


const Sidebar = ({auth}) => {


  return (

    <div className="nav_cont">

      <ul className="nav">
        <li className="nav-items">
          <IoMdDocument className='icon' />
          <Link to='/'>Evaluaciones</Link>
        </li>
        <li className="nav-items">
          <IoIosAlbums className='icon' />
          <Link to='/'>Materias</Link>
        </li>
        <li className="nav-items"  onClick={() => signOut(auth)}>
          <IoMdLogOut className='icon' />
          <Link to='/login'>Cerrar Sesion</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar