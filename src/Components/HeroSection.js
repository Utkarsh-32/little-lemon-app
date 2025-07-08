import '../App.css';
import Hero from '../Assets/restauranfood.jpg'

export default function HeroSection () {
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist.</p>
                <button className='hero-button'>Reserve a table</button>
            </div>
            <div className='hero-image'>
                <img src={Hero} alt='Restaurant dish' />
            </div>
        </section>
    )
}