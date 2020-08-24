import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
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
                <button className = "main-btn" 
                onClick = {() => props.handleAddProduct(props.product)}
                >
                <FontAwesomeIcon icon={faShoppingCart} /> Add to card</button>
            </div>
            
        </div>
    );
};

export default Product;