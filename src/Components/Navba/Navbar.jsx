import React, { useEffect } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    const tog = () => {
        const togle = document.querySelector('.navbar_links')
        const hr1 = document.querySelector("hr")
        togle.classList.toggle("navbar_link")
        hr1.classList.toggle("unhide")
    }
    const loc = window.location.pathname.slice(0, 4)

    return (
        <div className="navbar">
            <div className="navbar_con">
                <div className='navbar_logo'>
                    <h3><Link to="/">DSCE</Link></h3>
                    <div className="menu hide">
                        <i onClick={tog} class="fa-solid fa-bars"></i>
                    </div>
                </div>
                <hr className='hide1' />
                <div className="navbar_links">
                    <Link className={(loc === "/" || loc === "/Clg_Site/") ? "act" : ""} to="/">HOME</Link>
                    <Link className={(loc === "/Add") ? "act" : ""} to="/Addmissions">ADDMISSIONS</Link>
                    <Link className={(loc === "/Pro") ? "act" : ""} to="/Programs">PROGRAMS</Link>
                    <Link className={(loc === "/Abo") ? "act" : ""} to="/About">ABOUT</Link>
                    <Link className={(loc === "/Con") ? "act" : ""} to="/Contact">CONTACT US</Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar