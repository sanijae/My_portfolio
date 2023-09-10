import React from 'react'
import NavBar from './Components/Appbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'
import Experience from './Pages/Experience/Experience'
import Projects from './Pages/Projects/Projects'
import About from './Pages/About/About'
import Education from './Pages/Education/Education'

export default function App() {
  return (
    <>
     <NavBar/>
     <Routes>
      <Route path='/' exact index element={<Home/>} />
      <Route path='/Experiences' element={<Experience/>}/>
      <Route path='/Projects' element={<Projects/>}/>
      <Route path='/Education' element={<Education/>}/>
      <Route path='/About' element={<About/>}/>
     </Routes>
     <Footer/>
    </>
  )
}
