import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import "./MainLayout.css"

const MainLayout = () => {
  return (
    <div className='main-container'>
      <div className='container'>
        <Navbar/>

        <main>
          <Outlet/>
        </main>

        <Footer/>
      </div>
    </div>
  )
}

export default MainLayout