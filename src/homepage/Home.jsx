import React from 'react';
import Banner from './Banner';
import WhoWeAre from './WhoWeAre';
import Services from './Services';
import Featured from './Featured';
import Quote from './Quote';
import WhyChooseUs from './WhyChooseUs';
import Stats from './Stats';
import PricingTable from './PricingTable';
import RecentBlog from './RecentBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <Services></Services>
            <Featured></Featured>
            <Quote></Quote>
            <WhyChooseUs></WhyChooseUs>
            <Stats></Stats>
            <PricingTable></PricingTable>
            <RecentBlog></RecentBlog>
            
        </div>
    );
};

export default Home;