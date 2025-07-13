import '../App.css';
import logo from '../Assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer' role="contentinfo">
            <div className='logo'>
                <img src={logo} alt="Little Lemon restaurant logo"/>
                <div className='copyright'><FaCopyright aria-hidden="true"/> 2025 Little Lemon. All rights reserved.</div>
            </div>
            <nav className='footer-section' role="navigation" aria-label="Footer navigation">
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </nav>
            <div className='footer-section'>
                <h4>Contact Us</h4>
                <address>
                    <ul>
                        <li>Address: 📍 123 Main Street, Chicago, IL 60601</li>
                        <li>Phone Number: ☎️ <a href="tel:+13125550199">(312) 555-0199</a></li>
                        <li>Email us at: 📧 <a href="mailto:contact@littlelemon.com">contact@littlelemon.com</a></li>
                    </ul>
                </address>
            </div>
            <div className='footer-section'>
                <h4>Social Media</h4>
                <div className='social-icons'>
                    <a href='#' aria-label="Visit our Facebook page"><FaFacebook aria-hidden="true"/></a>
                    <a href='#' aria-label="Follow us on Twitter"><FaTwitter aria-hidden="true"/></a>
                    <a href='#' aria-label="Follow us on Instagram"><FaInstagram aria-hidden="true"/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;