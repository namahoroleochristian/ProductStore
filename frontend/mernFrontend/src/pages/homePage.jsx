import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/Login'
// import { useColorMode } from '../context/ThemeContext.jsx';

function HomePage() {

  
  return (
    <div className='h-full w-full'>
        <Navbar/>
        <div>
          <Login/>
        </div>
    </div>
  )
}

export default HomePage