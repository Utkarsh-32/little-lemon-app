import React from "react";
import '../App.css'
import Greek from "../Assets/greek_salad.jpg"
import Lemon from "../Assets/lemon_dessert.jpg"
import Bruchetta from "../Assets/bruchetta.jpg"
import DeliveryIcon from "../Assets/delivery-icon.svg"

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
        description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        image: Lemon
    }
]

function Specials () {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2>This Week's Specials !!</h2>
                <button className="menu-button">Online Menu</button>
            </div>
            <div className="specials-cards">
                {specials.map((dish, index) => (
                    <div className="card" key={index}>
                        <img src={dish.image} alt={dish.name} />
                        <div className="card-content">
                            <div className="card-header">
                                <h4>{dish.name}</h4>
                                <span className="price">{dish.price}</span>
                            </div>
                            <p>{dish.description}</p>
                        </div>
                        <div className="order-delivery">
                            <span>Order a delivery 🛵</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Specials;