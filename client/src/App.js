import React from 'react'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import MainLayout from './layout/MainLayout'
import Home from "./page/Home"
import About from './page/About'
import Services from './page/Services'
import Calculator from './page/Calculator'
import Contacts from './page/Contacts'
import Gallery from './page/Gallery'
import Blog from './page/Blog'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/calculator" element={<Calculator/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
