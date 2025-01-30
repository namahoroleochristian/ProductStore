import React from 'react'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import HomePage from '../pages/homePage.jsx'
import CreatePage from '../pages/createPage.jsx'
const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/create' element={<CreatePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesPage