import '../App.css';
import Walter from '../Assets/Walter_White.png';
import Tony from '../Assets/Tony_stark.jpeg';
import Phoebe from '../Assets/Phoebe.jpeg';
import Jon from '../Assets/Jon_snow.jpeg';

const testimonials = [
    {
        name: 'Walter White',
        rating: 5,
        text: "Absolutely loved the lemon dessert! The atmosphere was cozy and inviting.",
        image: Walter
    },
    {
        name: 'Jon Snow',
        rating: 4,
        text: "Great service and delicious food. The Greek salad was super fresh.",
        image: Jon
    },
    {
        name: 'Phoebe Buffay',
        rating: 5,
        text: "Perfect dinner spot! Will definitely come back for the bruschetta.",
        image: Phoebe
    },
    {
        name: 'Tony Stark',
        rating: 4,
        text: "Everything was tasty, fast delivery and great packaging.",
        image: Tony
    }
]

function Testimonials() {
    return (
        <section className='testimonials-section' role="region" aria-labelledby="testimonials-heading">
            <h2 id="testimonials-heading" className='testimonials-heading'>What our Customers say!!</h2>
            <div className='testimonials-container' role="list" aria-label="Customer testimonials">
                {testimonials.map((t, index) => (
                    <article key={index} className='testimonials-card' role="listitem">
                        <div className='stars' aria-label={`${t.rating} out of 5 stars`}>
                            <span aria-hidden="true">{'⭐️'.repeat(t.rating)}</span>
                        </div>
                        <img src={t.image} alt={`${t.name}, customer`} className='Avatar' />
                        <h4>{t.name}</h4>
                        <blockquote className='tt' cite={`${t.name} testimonial`}>
                            "{t.text}"
                        </blockquote>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Testimonials;