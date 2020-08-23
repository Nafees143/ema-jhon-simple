import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';

const Shop = () => {
    const first10 = fakeData.slice(0,10);
    const [products, setProducts] = useState(first10);

    const handleAddProduct = (product) => [

    ]


    return (
        <div className = "shop-container">
            <h1>This is the Shop</h1>
            <h3>{products.length}</h3>
            <div className="product-container">
                
                    {
                        products.map(pd => <Product
                        handleAddProduct = {handleAddProduct}
                        product = {pd}
                        ></Product>)
                    }

            </div>
            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        </div>
    );
};

export default Shop;