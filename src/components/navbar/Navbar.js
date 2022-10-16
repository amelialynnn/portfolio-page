import React, { useState } from 'react'

import './Navbar.css'

const Navbar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden stroke')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  //toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible stroke')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden stroke')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <nav>
      <div className="burger-menu" onClick={updateMenu}>
        <span className={burger_class}></span>
        <span className={burger_class}></span>
        <span className={burger_class}></span>
      </div>

      <div className={menu_class}>
        <ul>
          <li>
            <a href="#home" aria-label="go to home section.">
              Home
            </a>
          </li>
          <li>
            <a href="#about" aria-label="go to about section.">
              About
            </a>
          </li>
          <li>
            <a href="#skills-tools" aria-label="go to skills & tools section.">
              Skills & Tools
            </a>
          </li>
          <li>
            <a href="#work" aria-label="go to work section.">
              Work
            </a>
          </li>
          <li>
            <a href="#testimonials" aria-label="go to testimonials section.">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" aria-label="go to contact section.">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
