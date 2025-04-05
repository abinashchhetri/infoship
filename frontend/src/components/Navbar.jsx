import React from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div>
      <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt='Logo of project'/>
    </div>
  )
}

export default Navbar
