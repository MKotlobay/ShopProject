import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import '../style/Cart.css'


function Nav(props) {
    const { totalProducts, newCardCart } = props;

    const [sideCartVisible, setSideCartVisible] = useState(false); // State to manage side cart visibility

    // Function to toggle side cart visibility
    const toggleSideCart = () => {
        setSideCartVisible(!sideCartVisible);
    };


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


                        {/* Side cart */}
                        <span id="totalProducts">{totalProducts}</span>
                        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#949494' }}>
                            <div id="shoppingCart">
                                <a style={{ paddingLeft: '10px', paddingRight: '10px' }} href="#">
                                    <button className="btn" id="cartButton" onClick={toggleSideCart}>
                                        <i className="fa-solid fa-cart-shopping" style={{ color: '#f8862c' }}></i>
                                    </button>
                                </a>
                                <div id="sideCart" className={sideCartVisible ? "visible" : "hidden"}>
                                    <button id="clearCartButton" className="btn btn-danger mx-auto my-1 w-50">Clear Cart</button>
                                    <div>
                                        {newCardCart}
                                    </div>
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
