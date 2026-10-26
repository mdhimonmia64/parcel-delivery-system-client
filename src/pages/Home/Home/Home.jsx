import React from 'react';
import Banner from '../Banner/Banner';
import WorksCart from '../WorksCart/WorksCart';
import Services from '../Services/Services';
import ClientLogosMarquee from '../ClientLogosMarquee/ClientLogosMarquee';
import Benefits from '../Benefits/Benefits';
import BeMerchant from '../BeMerchant/BeMerchant';
import SliderCard from '../SliderCard/SliderCard';
import Customers from '../SliderCard/Customers';
import FAQuestions from '../FAQAskedQuestion/FAQuestions';

const Home = () => {
    return (
        <>
            <Banner />
            <WorksCart />
            <Services />
            <ClientLogosMarquee />
            <Benefits />
            <BeMerchant />
            <Customers />
            <SliderCard />
            <FAQuestions />
            
        </>
    );
};

export default Home;