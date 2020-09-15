import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total, prd) => total + prd.price, 0);
    
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length} </p>
            <p>Total Price: {total}</p>
            <button className="main-btn">Checkout </button>
        </div>
    );
};

export default Cart;