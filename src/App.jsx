
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from "react-router"
import Home from './pages/Home'
import Tests from './pages/Tests'
import Course from './pages/Courses'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/tests' element={<Tests />} />
        <Route path='/courses' element={<Course />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/aboutus' element={<AboutUs />} />
      </Routes>


      <Footer />
    </>
  )
}

export default App
