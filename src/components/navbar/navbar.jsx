import React from 'react'
import "./navbar.css"

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className='logo'>BOOKING.COM</span>
                <div className="navItems">
                    <button className='navbtn'>register</button>
                    <button className='navbtn'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
