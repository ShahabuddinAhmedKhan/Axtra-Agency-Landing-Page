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
import Cursor from '../cursor/Cursor';
import Horizontal from './Horizontal';


const Home = () => {
    return (
        <div>
            <div className='sm:block hidden'><Cursor></Cursor></div>
            <Banner></Banner>
            <WhoWeAre></WhoWeAre>
            <Services></Services>
            <Featured></Featured>
            <Quote></Quote>
            <div className='hidden xl:block'>
                <Horizontal></Horizontal>
            </div>
            <div className='block xl:hidden'>
                <WhyChooseUs></WhyChooseUs>
                <Stats></Stats>
            </div>
            <PricingTable></PricingTable>
            <RecentBlog></RecentBlog>


        </div>
    );
};

export default Home;