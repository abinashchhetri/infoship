import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import CompanyHomePage from './pages/CompanyHomePage'
import Signup from './pages/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
        <ToastContainer position='top-center' autoClose={3000} closeOnClick pauseOnHover={false}/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/companyhomepage' element={<CompanyHomePage/>}/>
      </Routes>
      
    </div>
  )
}

export default App
