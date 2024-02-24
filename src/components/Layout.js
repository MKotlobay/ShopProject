import React from 'react'
import Nav from './Nav';
import Banner from './Banner';
import Quote from './Quote';
import GridLayout from './GridLayout';
import Footer from './Footer';

function Layout() {
    return (
        <div>
            <Banner />
            <Quote />
            <GridLayout/>
            <Footer/>
        </div>

    )
}

export default Layout