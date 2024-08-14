import React, { useState } from "react";
import "./Carts.css";

function Carts() {
    const [cart, setCart] = useState(0);

    const increment = () => {
        setCart(cart + 1);
    }

    const decrement = () => {
        setCart(cart < 1 ? cart - 1 : cart);
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        alert(`You have added ${cart} item(s) to your cart`);
    }

    return (
        <div className="cart-container" onSubmit={SubmitHandler}>
            <div className="img-box">
                <img src="../images/image 32.png" alt="cart-img" />
            </div>
            <div className="cart-details">
                <h1> Aesthetic Lamp </h1>
                <span> $300.50 </span>
            </div>
            <div className="cart-quantity">
                <button onClick={decrement}> - </button>
                <p>{ cart }</p>
                <button onClick={increment}> + </button>
            </div>
            <button type="submit"></button>
        </div>
    ) 
}

export default Carts;
