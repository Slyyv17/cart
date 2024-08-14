import React, { useState } from "react";
import "./Cart.css";
import imgSrc from "./images/feem_d356085c4ebfd_IMG-20240209-WA0005.jpg"

// Rest of the code remains unchanged

function Carts() {
    const [cart, setCart] = useState(0);

    const increment = () => {
        setCart(cart + 1);
    }

    const decrement = () => {
        setCart(cart > 0 ? cart - 1 : cart); // Prevent cart from going below 0
    }

    const SubmitHandler = (e) => {
        e.preventDefault();
        alert(`You have added ${cart} item(s) to your cart`);
    }

    return (
        <form className="cart-container" onSubmit={SubmitHandler}>
            <div className="img-box">
                <img src={imgSrc} alt="cart-img" />
            </div>
            <div className="cart-details">
                <h1> Mixed Smoothies </h1>
                <span> $300.50 </span>
            </div>
            <div className="cart-quantity">
                <button type="button" onClick={decrement}> - </button>
                <p>{ cart }</p>
                <button type="button" onClick={increment}> + </button>
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Carts;
