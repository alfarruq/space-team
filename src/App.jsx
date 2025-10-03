import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import Courses from './pages/Courses'
import Tests from './pages/Tests'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'



function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
