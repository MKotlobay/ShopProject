import React from 'react';

function AltNav({ title }) {
    return (
        <div className="market-content">
            <h1 className="market-title">{title}</h1>
            <img
                className="market-background container"
                style={{maxWidth: '100vw'}}
                src="https://www.511tactical.com/static/version1707847711/frontend/511/default/en_US/images/category-title-banner-desk-2x.png"
                alt="Always be ready." />
        </div>
    );
}

export default AltNav;
