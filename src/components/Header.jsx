import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <header className='fixed w-full flex justify-between items-center px-3 py-8 z-10
        lg:static'>
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