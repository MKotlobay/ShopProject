import React from 'react';
import Nav from './Nav';
import '../style/Mens.css';

function Mens() {
    return (
        <div className="mens-container">
            <Nav />
            <div className="mens-content">
                <h1 className="mens-title">MEN'S TACTICAL CLOTHING</h1>
                <img
                    className="mens-background"
                    src="https://www.511tactical.com/static/version1707847711/frontend/511/default/en_US/images/category-title-banner-desk-2x.png"
                    alt="Always be ready." />
            </div>
        </div>
    );
}

export default Mens;
