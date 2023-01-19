import React from 'react'
import {Routes,Route} from 'react-router-dom'
import App from '../App'
import SecondPage from './SecondPage'


const RoutingPage = () => {
  return (
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/second' element={<SecondPage/>}/>
    </Routes>
  )
}

export default RoutingPage