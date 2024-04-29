import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../style/Cart.css'
import ProductQty from './ProductQty';


function Nav(props) {
    const { cartProducts, setCartProducts } = props;

    const [sideCartVisible, setSideCartVisible] = useState(false); // State to manage side cart visibility
    const [totalProducts, setTotalProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    // Function to toggle side cart visibility
    const toggleSideCart = () => {
        setSideCartVisible(!sideCartVisible);
    };

    useEffect(() => {
        // Calculate the total quantity of products in the cart
        const totalQuantity = cartProducts.reduce((total, product) => total + (product.quantity || 1), 0);
        setTotalProducts(totalQuantity);
    }, [cartProducts]);

    const updateCartProductQuantity = (productId, newQuantity) => {
        // Update the quantity of the product in the cartProducts array
        const updatedCartProducts = cartProducts.map(product =>
            product.id === productId ? { ...product, quantity: newQuantity } : product
        );
        setCartProducts(updatedCartProducts);
        // Update local storage
        localStorage.setItem('cartProducts', JSON.stringify(updatedCartProducts));
    };

    const clearCart = () => {
        // Clear local storage
        localStorage.removeItem('cartProducts');

        // Clear cartProducts state
        setCartProducts([]);
    };

    useEffect(() => {
        // Calculate the total price of all products in the cart
        let totalPrice = 0;
        cartProducts.forEach(product => {
            const productPrice = product.price || 0; // Assuming price is stored in each product object
            const productQuantity = product.quantity || 1;
            totalPrice += productPrice * productQuantity;
        });
        setTotalPrice(totalPrice);
    }, [cartProducts]);

    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'white' }}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="m-auto" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" href="/gift-card">GIFT CARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/store-locator">STORE LOCATOR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/my-account">MY ACCOUNT</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#949494' }}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <img
                            src="https://www.511tactical.com/static/version1673368652/frontend/511/default/en_US/images/511-logo-on-light-2x.png"
                            alt="Always be ready." width="150"
                        />
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-center m-auto">
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.511tactical.com/new.html">NEW</a>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/mens"
                                    className="nav-link active">
                                    MEN'S
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/womens"
                                    className="nav-link active">
                                    WOMEN'S
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/bags-packs"
                                    className="nav-link active">
                                    BAGS & PACKS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.511tactical.com/footwear.html">FOOTWEAR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.511tactical.com/accessories.html">ACCESSORIES</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.511tactical.com/public-safety.html">PROFESSIONAL</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="https://www.511tactical.com/sale.html">SALE</a>
                            </li>
                        </ul>

                        {/* Side cart */}
                        <span id="totalProducts" style={{ color: '#f04a23' }}>{totalProducts}</span>
                        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#949494' }}>
                            <div id="shoppingCart">
                                <a >
                                    <button className="btn" id="cartButton" onClick={toggleSideCart}>
                                        <i className="fa-solid fa-cart-shopping" style={{ color: '#f8862c' }}></i>
                                    </button>
                                </a>
                                <div id="sideCart" className={sideCartVisible ? "visible" : "hidden"}>
                                    <p className='d-flex justify-content-center'>Total Price: ${totalPrice.toFixed(2)}</p>
                                    <button id="clearSideCartButton" className="btn btn-danger mx-auto my-1 w-50" onClick={clearCart}>Clear Cart</button>
                                    <div className='d-flex flex-column justify-content-center align-items-center'>
                                        {cartProducts.map(product => (
                                            <div key={product.id}>
                                                <p className='pt-4'>{product.title}</p>
                                                <img src={product.thumbnail} alt={product.title} />
                                                <ProductQty
                                                    productId={product.id}
                                                    quantity={product.quantity || 1}
                                                    updateProductQuantity={(quantity) => updateCartProductQuantity(product.id, quantity)}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>
                        <div>
                            <button className="btn">
                                <NavLink
                                    to="/favorite-products"
                                    className="nav-link active" style={{ color: '#f8862c' }}>
                                    <i className="fa-sharp fa-solid fa-bookmark" />
                                </NavLink>
                            </button>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn rounded-0" style={{ color: '#F8862C', outlineStyle: 'solid', outlineWidth: '1px' }}
                                type="submit">Search</button>
                        </form>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
