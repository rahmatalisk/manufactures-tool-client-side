import React from 'react';
import Footer from '../../Sheared/Footer';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import OfferBanner from './OfferBanner';
import Reveiws from './Reveiws';
import Services from './Services';
import ToolsAdd from './ToolsAdd';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ToolsAdd></ToolsAdd>
            <BusinessSummery></BusinessSummery>
            <OfferBanner></OfferBanner>
            <Reveiws></Reveiws>
            <Footer></Footer>
        </div>
    );
};

export default Home;