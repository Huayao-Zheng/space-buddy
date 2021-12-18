import React from 'react';
import Navbar from '../components/Navbar';
import PricingCards from '../components/PricingCards';
import Footer from '../components/Footer';
import HeroImage from '../components/HeroImage';

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading="PRICING" text="Choose your trip" />
            <PricingCards />
            <Footer />
        </div>
    );
};

export default Pricing;
