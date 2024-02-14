import React from 'react'

function Footer() {
    return (
        <footer style={{ bottom: 0, width: '100%' }}>
            <div className="card" style={{ backgroundColor: '#949494' }}>
                <div className="card-body">
                    <h5 className="card-title">We are global innovators who make purpose-built technical apparel, footwear, and gear for life's most demanding missions.</h5>
                    <p>© 2023 5.11, Inc. All rights reserved.</p>
                    <a className="navbar-brand" href="#">
                        <img src="https://www.511tactical.com/static/version1673368652/frontend/511/default/en_US/images/511-logo-on-light-2x.png" alt="Always be ready." width="100" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer