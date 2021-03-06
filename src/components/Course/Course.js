import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Course.css';
    

const Course = () => {
    
    const first10 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first10);
    const [cart, setCart] = useState ([]);

    const handleAddProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <div className="course-container">
            <div className="product-container">
           
                {
                    products.map( pd => <Product
                    handleAddProduct = {handleAddProduct}
                         product={pd}></Product>)
                }
           
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Course;