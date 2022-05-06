import React from 'react';
import AboutUs from '../../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Items from '../Items/Items';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Items></Items>
            <AboutUs></AboutUs>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;