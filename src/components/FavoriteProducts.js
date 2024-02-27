import React, { useEffect, useState } from 'react';
import '../style/Market.css';
import Footer from './Footer';
import AltNav from './AltNav';

function FavoriteProducts() {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        const storedFavoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
        setFavoriteProducts(storedFavoriteProducts);
    }, []);

    const removeFromFavorites = (productId) => {
        // Filter out the product with the given productId
        const updatedFavorites = favoriteProducts.filter(product => product.id !== productId);
        // Update state and local storage with the updated favorites
        setFavoriteProducts(updatedFavorites);
        localStorage.setItem('favoriteProducts', JSON.stringify(updatedFavorites));
    };

    return (
        <div className="market-container">
            <AltNav title="Favorite Products" />
            <div className="container pt-5">
                {favoriteProducts.length === 0 ? (
                    <div className="row" style={{ minHeight: '50vh' }}>
                        <div className="col-md-12 text-center pt-5">
                            <h2>No favorite products yet!</h2>
                            <p>Start adding products to your favorites by clicking the bookmark icon.</p>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {favoriteProducts.map(product => (
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
                                            <button className="btn" onClick={() => removeFromFavorites(product.id)}>
                                                <i className="fa-sharp fa-solid fa-trash" style={{ color: '#f04a23' }} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default FavoriteProducts;
