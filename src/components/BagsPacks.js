import React, { useEffect, useState } from 'react'
import Nav from './Nav';
import '../style/Market.css';
import Footer from './Footer';
import AltNav from './AltNav';

function BagsPacks() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/bagsPacks.json')
            .then(response => response.json())
            .then(data => setProducts(data.bagsPacks))
    }, []);


    return (
        <div className="market-container">
            <Nav />
            <AltNav title="TACTICAL BAGS & PACKS" /> {/* image size have problems + remove br */}
            <br />
            <br />
            <br />
            <div className="container pt-5">
                <div className="row">
                    {products.map(product => (
                        <div key={product.id} className="col-md-4">
                            <div className="card h-100 d-flex flex-column p-5">
                                <img src={product.thumbnail} className="card-img-top" alt={product.title} />
                                <div className="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div>
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">{product.description}</p>
                                    </div>
                                    <div className="text-center">
                                        <p className="card-text">${product.price}</p>
                                        <button className="btn rounded-0" style={{ backgroundColor: '#F8862C' }}>ADD TO CART</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default BagsPacks
