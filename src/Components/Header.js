import React from "react";
import Logo from "../Assets/logo.png"
import '../App.css';
import About from './About';
import { Link } from "react-router-dom";

function Header () {
    return (
        <header id="header">
            <nav className="navbar">
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><a href='#about'>About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;