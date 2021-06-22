import React from 'react'
import './App.css'
import About from './Components/About'
import Food_Experts from './Components/Food_Experts'
import Menu from './Components/Menu'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'
import Home from './Components/Home'
import HamburgerMenu from './Components/HamburgerMenu'

const App = () => {
    return (
        <>
            <HamburgerMenu />
            <Home />
            <About/>
            <Menu />
            <Food_Experts />
            <Testimonials />
            <ContactUs />
            
        </>
    )
}

export default App
