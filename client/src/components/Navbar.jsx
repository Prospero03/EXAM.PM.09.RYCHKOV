import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";
import logo from '../img/logo/logo.png'; 

const Navbar = () => {
  const links = [
    {name: "Главная",
      to: "/"
    },
    {name: "О Компании",
      to: "/about"
    },
    {name: "Услуги",
      to: "/services"
    },
    {name: "Калькулятор",
      to: "/calculator"
    },
    {name: "Контакты",
      to: "/contacts"
    },
    {name: "Галерея",
      to: "/gallery"
    },
    {name: "Блог",
      to: "/blog"
    },
    
  ]
  return (
    <>
    <div className='container-nav'>

      
      <img className='nav-logo'
          src={logo}
          alt="Логотип"
          
        />
      

      <div className='nav-links'>
      {links.map((items, i)=>(
        <Link key={i} to={items.to} className='nav-link'>
          {items.name}
        </Link>
      ))
      }
      </div>

    </div>
    </>
  )
}

export default Navbar