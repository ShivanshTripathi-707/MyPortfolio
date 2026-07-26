import React from 'react'
import "./App.css"
import Home from './Pages/Home'
import Navbar from './components/Navbar/Navbar'
import Error from './components/Error/Error'
import { Routes, Route } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <ToastContainer position="bottom-left" autoClose={3000}/>
      <Footer/>
    </>
  )
}

export default App
