import React from "react";
import Logo from "../Assets/logo.png"
import '../App.css';

function Header () {
    return (
        <header>
            <nav className="navbar">
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                <ul className="nav-links">
                    <li><a href="#/Home">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;