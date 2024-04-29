import React from 'react'
import Nav from './Nav';
import Banner from './Banner';
import Quote from './Quote';
import GridLayout from './GridLayout';
import Footer from './Footer';

function Layout({onButtonAdd}) {

    return (
        <div>
            <Banner />
            <Quote />
            <GridLayout onButtonAdd={onButtonAdd} />
            <Footer />
        </div>
    )
}

export default Layout;
