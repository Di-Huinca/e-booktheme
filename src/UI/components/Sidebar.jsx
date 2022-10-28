import React,{useState} from 'react'
import { IoIosAlbums,IoMdClose, IoMdLogOut, IoMdDocument, IoMdMenu,IoMdClipboard} from 'react-icons/io'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {

 const [active, setActive] = useState (false);
 
 const activateNav = () => {
  setActive(!active)
 }

  return (
    <div className={active ? 'sidebar' : 'sidebar-mobile'}>

        <div className="menu-icon" onClick={activateNav}>
              {!active ? <IoMdMenu className='menu'/> : <IoMdClose className='menu'/>}
        </div>

        <nav>
           <ul className={active ? 'ul-item' : 'ul-item oicon'}> 
              <li>
                <IoMdDocument className='icon' />
                <Link to='/'>Evaluaciones</Link>
              </li>
              <li>
                <IoIosAlbums className='icon' />
                <Link to='/'>Materias</Link>
              </li>
              <li>
                <IoMdLogOut className='icon' />
                <Link to='/'>Cerrar Sesion</Link>
              </li>
            </ul>
        </nav>
    </div>
  )
}

export default Sidebar