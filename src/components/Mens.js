import React, { useEffect, useState } from 'react';
import '../style/Market.css';
import Footer from './Footer';
import AltNav from './AltNav';
import Trending from './Trending';

function Mens(props) {
    const { products, addCart, addFavorite } = props

    const addToFavorites = (product) => {
        addFavorite(product);
    };

    return (
        <div className="market-container">
            <AltNav title="MEN'S TACTICAL CLOTHING" />
            <div className="container pt-5">
                <div className="row">
                    {products && products.map(product => (
                        <div key={product.id} className="col-md-4">
                            <div className="product-card h-100 d-flex flex-column p-5">
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="card-text">${product.price}</p>
                                        <button className="btn rounded-0" style={{ backgroundColor: '#F8862C' }} onClick={() => { addCart(product) }}>ADD TO CART</button>
                                        <button className="btn " onClick={() => addToFavorites(product)}> <i className="fa-sharp fa-solid fa-bookmark" style={{ color: '#f8862c' }} /> </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Mens;
