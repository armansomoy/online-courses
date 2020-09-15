import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props);
    const {thumb, title, author, rating, price} = props.product;
    return (
        <div className="product">
            <div>
                <img src={thumb} alt=""/>
            </div>
            <div className="product-name">
                <h4>{title}</h4>
                <br/>
                <h6>Rating: {rating} Start</h6>
                <p> <small>{author}</small>    </p>
                <p>$ {price}</p>
                <button 
                onClick={() => props.handleAddProduct(props.product)}
                className="main-btn">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;