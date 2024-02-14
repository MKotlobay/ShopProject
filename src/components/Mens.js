import React from 'react';
import Nav from './Nav';
import '../style/Market.css';
import Footer from './Footer';

function Mens() {
    return (
        <div className="market-container">
            <Nav />
            <div className="market-content">
                <h1 className="market-title">MEN'S TACTICAL CLOTHING</h1>
                <img
                    className="market-background"
                    src="https://www.511tactical.com/static/version1707847711/frontend/511/default/en_US/images/category-title-banner-desk-2x.png"
                    alt="Always be ready." />
            </div>
            <div>
                <h2>MEN'S PT-R® TRAINING GEAR</h2>
            </div>
            <Footer/>
        </div>
    );
}

export default Mens;
