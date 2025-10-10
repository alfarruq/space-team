import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { Route, Routes } from "react-router-dom"

import Home from './pages/Home'
import Courses from './pages/Courses'
import Tests from './pages/Tests'
import Blog from './pages/Blog'
import AboutUs from './pages/AboutUs'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Root from './root/root'



function App() {
  return (
    <>
      <Root />
    </>
  )
}

export default App
