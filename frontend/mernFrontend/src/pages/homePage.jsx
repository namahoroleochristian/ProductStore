import React from 'react'
import Navbar from '../components/Navbar'
import { useColorMode } from '../context/colorMode';

function HomePage() {

  
  return (
    <div className='h-full w-full'>
        <Navbar/>
        <div>
          <h2>No Data Here</h2>
        </div>
    </div>
  )
}

export default HomePage