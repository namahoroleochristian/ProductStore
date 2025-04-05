import React from 'react'
import { Link } from 'react-router-dom'
import { CiDark, CiSquarePlus } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import { useColorMode } from '../context/ThemeContext.jsx';

function Navbar() {
    const {colorMode,toggleColorMode} =useColorMode()

  return (
    <nav className='  flex justify-between text-teal-600 text-5xl font-mono font-bold bg-transparent  px-8 py-8'>
        <ul>
        <Link to='/' className=''>
                PRODUCTSTORE
            </Link>
        </ul>
        <ul className='flex justify-between'>
            <Link to='/create' className='ml-16'>
                <CiSquarePlus/>
            </Link>
            <Link  className='ml-16'>
                {colorMode ==='light'?<CiLight onClick={()=>toggleColorMode()}/>:<CiDark onClick={()=>toggleColorMode()}/>}
            </Link>
        </ul>
    </nav>
  )
}

export default Navbar