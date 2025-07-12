import '../App.css';
import logo from '../Assets/logo.png';
import { FaFacebook, FaTwitter, FaInstagram, FaCopyright } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Footer () {
    return (
        <footer className='footer'>
            <div className='logo'>
                <img src={logo} alt="Little Lemon logo"/>
                <div className='copyright'><FaCopyright/> 2025 Little Lemon. All rights reserved.</div>
            </div>
            <div className='footer-section'>
                <h4>Doormat Navigation</h4>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><a href="#">Menu</a></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><a href="#">Order Online</a></li>
                    <li><a href="#">Log In</a></li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>Contact Us</h4>
                <ul>
                    <li>Address: 📍 123 Main Street, Chicago, IL 60601</li>
                    <li>Phone Number: ☎️ (312) 555-0199</li>
                    <li>Email us at: 📧 contact@littlelemon.com</li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>Social Media</h4>
                <div className='social-icons'>
                    <a href='#'><FaFacebook/></a>
                    <a href='#'><FaTwitter/></a>
                    <a href='#'><FaInstagram/></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;