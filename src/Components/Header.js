import React from "react";
import Logo from "../Assets/logo.png"
import '../App.css';
import About from './About';
import { Link } from "react-router-dom";

function Header () {
    return (
        <header id="header" role="banner">
            <nav className="navbar" role="navigation" aria-label="Main navigation">
                <img src={Logo} alt="Little Lemon Restaurant Logo" className="logo" />
                <ul className="nav-links" role="menubar">
                    <li role="none"><Link to="/" role="menuitem" aria-label="Go to home page">Home</Link></li>
                    <li role="none"><Link to='/about' role="menuitem" aria-label="Learn about Little Lemon restaurant">About Us</Link></li>
                    <li role="none"><a href="#" role="menuitem" aria-label="View our menu">Menu</a></li>
                    <li role="none"><Link to="/booking" role="menuitem" aria-label="Make a table reservation">Reservations</Link></li>
                    <li role="none"><a href="#" role="menuitem" aria-label="Order food online">Order Online</a></li>
                    <li role="none"><a href="#" role="menuitem" aria-label="Login to your account">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;