import React from "react";
import '../App.css'
import Greek from "../Assets/greek_salad.jpg"
import Lemon from "../Assets/lemon_dessert.jpg"
import Bruchetta from "../Assets/bruchetta.jpg"
import { MdDeliveryDining } from "react-icons/md";

const specials = [
    {
        name: "Greek Salad",
        price: "$12.99",
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        image: Greek
    },
    {
        name: "Bruchetta",
        price: "$5.99",
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image: Bruchetta
    },
    {
        name: "Lemon Dessert",
        price: "$5.00",
        description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: Lemon
    }
]

function Specials () {
    const handleMenuButtonClick = () => {
        // Handle menu button click
        console.log("Menu button clicked");
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleMenuButtonClick();
        }
    }

    return (
        <section className="specials" role="region" aria-labelledby="specials-heading">
            <div className="specials-header">
                <h2 id="specials-heading">This Week's Specials !!</h2>
                <button 
                    className="menu-button" 
                    onClick={handleMenuButtonClick}
                    onKeyDown={handleKeyPress}
                    aria-label="View our complete online menu"
                >
                    Online Menu
                </button>
            </div>
            <div className="specials-cards" role="list" aria-label="Weekly special dishes">
                {specials.map((dish, index) => (
                    <article className="card" key={index} role="listitem">
                        <img src={dish.image} alt={`${dish.name} - ${dish.description}`} />
                        <div className="card-content">
                            <div className="card-header">
                                <h4>{dish.name}</h4>
                                <span className="price" aria-label={`Price: ${dish.price}`}>{dish.price}</span>
                            </div>
                            <p className="description">{dish.description}</p>
                        </div>
                        <div className="order-delivery">
                            <span>
                                <div className="order">
                                    <a href="#" aria-label={`Order ${dish.name} for delivery`}>
                                        <div>Order a delivery</div> 
                                        <div aria-hidden="true"><MdDeliveryDining/></div>
                                    </a>
                                </div>
                            </span>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}

export default Specials;