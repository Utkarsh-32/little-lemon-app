import '../App.css';
import Hero from '../Assets/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

export default function HeroSection () {
    const navigate = useNavigate();

    const handleReserveClick = () => {
        navigate('/booking');
    }
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button className='hero-button' onClick={handleReserveClick}>Reserve a table</button>
            </div>
            <div className='hero-image'>
                <img src={Hero} alt='Restaurant dish' />
            </div>
        </section>
    )
}