import '../App.css';
import Owners from '../Assets/Mario and Adrian b.jpg';
import restaurant from '../Assets/restaurant.jpg';

function About () {
    return (
        <section className='about' id="about">
            <div className='about-left'>
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>
                    Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago. 
                    We serve traditional recipes with a modern twist, using the freshest ingredients and bold flavors to bring our dishes to life.
                </p>
                <p>
                    Founded by Mario and Adrian, our mission is to create a warm, welcoming space where guests can enjoy delicious food and great company. 
                    Whether you're stopping by for lunch or a relaxing dinner, we promise an unforgettable experience.
                </p>
            </div>
            <div className='about-right'>
                <img src={Owners} alt="Owners image" className='about-img img1' />
                <img src={restaurant} alt="restaurant" className='about-img img2' />
            </div>
        </section>
    )
}
export default About;