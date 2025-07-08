import React from "react";
import Logo from "../Assets/logo.png"
import '../App.css';

function Header () {
    return (
        <header>
            <nav className="navbar">
                <img src={Logo} alt="Little Lemon Logo" className="logo" />
                <ul className="nav-links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;