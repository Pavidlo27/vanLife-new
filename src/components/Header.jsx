import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true)

    const handleScroll = () => {
        const currentScrollPos = window.scrollY

        if (currentScrollPos > prevScrollPos) {
            setVisible(false)
        } else {
            setVisible(true)
        }

        setPrevScrollPos(currentScrollPos)
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    })

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header className={`fixed w-full flex justify-between items-center 
        ${visible ? 'top-0' : '-top-[300px]'} duration-300 ease-out
        px-3 py-8 z-10 bg-[#f8f8f8] lg:static `}>
            <Link to='/' className='site-logo'>#VanLife</Link>



            <nav>
                <NavLink
                    to='about'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to='vans'
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
            </nav>
        </header>
    )
}

export default Header