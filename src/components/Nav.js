import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../style/Cart.css'


function Nav() {

    const [totalProducts, setTotalProducts] = useState(0);
    const [basket, setBasket] = useState([]);
    const [sideCartVisible, setSideCartVisible] = useState(false); // State to manage side cart visibility

    // Function to calculate and display the total number of products in the cart
    // const showTotalProducts = () => {
    //     if (basket.length === 0) {
    //         setTotalProducts(0);
    //         return;
    //     }
    //     const total = basket.reduce((acc, item) => acc + item.qty, 0);
    //     setTotalProducts(total);
    // };

    // useEffect(() => {
    //     showTotalProducts();
    // }, [basket]);

    // Function to toggle side cart visibility
    const toggleSideCart = () => {
        setSideCartVisible(!sideCartVisible);
    };

    // Function to add a product to the cart
    // const handleAddToCartClick = (productId) => {
    //     const product = products.find((product) => product.id === productId);

    //     if (product) {
    //         // The product does not exist in the cart yet
    //         if (!basket.find(el => el.id === product.id)) {
    //             const newProduct = { ...product, qty: 1 };
    //             setBasket([...basket, newProduct]);
    //         }
    //         // The product already exists, only quantity needs to be updated
    //         else {
    //             const updatedBasket = basket.map((item) =>
    //                 item.id === productId ? { ...item, qty: item.qty + 1 } : item
    //             );
    //             setBasket(updatedBasket);
    //         }
    //     }
    // };



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
                                <a className="nav-link active" href="/gift-cards.html">GIFT CARDS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/store-locator.html">STORE LOCATOR</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/myaccount.html">MY ACCOUNT</a>
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


                        <span id="totalProducts">{totalProducts}</span>
                        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#949494' }}>
                            <div id="shoppingCart">
                                <a style={{ paddingLeft: '10px', paddingRight: '10px' }} href="#">
                                    <button className="btn" id="cartButton" onClick={toggleSideCart}>
                                        <i className="fa-solid fa-cart-shopping" style={{ color: '#f8862c' }}></i>
                                    </button>
                                </a>
                                <div id="sideCart" className={sideCartVisible ? "visible" : "hidden"}>
                                    <div className="cart-total-products"></div>
                                    <div className="cart-total-price"></div>
                                    <button id="clearCartButton" className="btn btn-danger mx-auto my-1 w-50">Clear Cart</button>
                                </div>
                            </div>
                        </nav>

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
