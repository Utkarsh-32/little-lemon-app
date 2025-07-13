import '../App.css';
import Hero from '../Assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

export default function HeroSection () {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/booking');
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleReserveClick();
        }
    }

    return (
        <section className='hero' role="banner" aria-labelledby="hero-title">
            <div className='hero-content'>
                <h1 id="hero-title">Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button 
                    className='hero-button' 
                    onClick={handleReserveClick}
                    onKeyDown={handleKeyPress}
                    aria-label="Reserve a table at Little Lemon restaurant"
                >
                    Reserve a table
                </button>
            </div>
            <div className='hero-image'>
                <img src={Hero} alt='Delicious Mediterranean dish served at Little Lemon restaurant' />
            </div>
        </section>
    )
}