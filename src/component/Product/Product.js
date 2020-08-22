import React from 'react';
import './Product.css';

const Product = (props) => {
    const {img, name, seller, price,stock} = props.product;
    return (
        <div className = "product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className = "product-name">
                <h4>{name}</h4>
                <br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p><small>only {stock} left Order soon</small></p>
            </div>
            
        </div>
    );
};

export default Product;