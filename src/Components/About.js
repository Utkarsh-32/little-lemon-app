import '../App.css';
import Owners from '../Assets/Mario and Adrian b.jpg';
import restaurant from '../Assets/restaurant.jpg';
import { Helmet } from 'react-helmet-async';

function About () {
    return (
        <>
            <Helmet>
                <title>About Us | Little Lemon Restaurant</title>
                <meta name="description" content="Learn about Little Lemon, a family-owned Mediterranean restaurant in Chicago. Founded by Mario and Adrian, we serve traditional recipes with a modern twist." />
                <meta name="keywords" content="about Little Lemon, Mario and Adrian, Chicago Mediterranean restaurant, family restaurant, restaurant history" />
                <meta property="og:title" content="About Us | Little Lemon Restaurant" />
                <meta property="og:description" content="Learn about Little Lemon, a family-owned Mediterranean restaurant in Chicago. Founded by Mario and Adrian, we serve traditional recipes with a modern twist." />
                <meta property="og:url" content="https://littlelemon.com/about" />
                <meta property="twitter:title" content="About Us | Little Lemon Restaurant" />
                <meta property="twitter:description" content="Learn about Little Lemon, a family-owned Mediterranean restaurant in Chicago. Founded by Mario and Adrian, we serve traditional recipes with a modern twist." />
                <link rel="canonical" href="https://littlelemon.com/about" />
            </Helmet>
            <section className='about' id="about" role="region" aria-labelledby="about-heading">
                <div className='about-left'>
                    <h2 id="about-heading">Little Lemon</h2>
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
                <div className='about-right' aria-label="Restaurant images">
                    <img 
                        src={Owners} 
                        alt="Mario and Adrian, the owners of Little Lemon restaurant" 
                        className='about-img img1' 
                    />
                    <img 
                        src={restaurant} 
                        alt="Interior of Little Lemon restaurant showing the dining area" 
                        className='about-img img2' 
                    />
                </div>
            </section>
        </>
    )
}
export default About;