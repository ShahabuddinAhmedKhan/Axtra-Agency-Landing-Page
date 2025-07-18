import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black'>
            <div className='md:flex gap-10 sm:border-b-1 justify-around '>
                <div className='py-10 px-10 '>
                    <img className='w-15 sm:w-30' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsite-logo-white-2.c8e48a63.png&w=256&q=75" alt="" />
                    <p className='text-xs font-bold text-gray-300 w-50 pt-7'>{"When do they work well, and when do they on us and finally, when do we actually need how can we avoid them.".toUpperCase()}</p>
                </div>
                <div className='text-white'>
                    <h1 className='border-1 border-gray-500 px-10 py-8 text-center'>FACEBOOK</h1>
                    <h1 className='border-1 border-gray-500 px-10 py-8 text-center'>TWITTER</h1>
                    <h1 className='border-1 border-gray-500 px-10 py-8 text-center'>LINKEDIN</h1>
                    <h1 className='border-1 border-gray-500 px-10 py-8 text-center'>INSTAGRAM</h1>
                </div>
                <div className='flex justify-center items-center text-5xl py-10 '>
                    <h1 className='text-white font-bold '>LET'S TALK</h1>
                </div>
            </div>
            <div className='text-white border-t-1 sm:border-0 xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto'>
                <ul className='flex gap-7 justify-center py-10'>
                    <li>ABOUT US</li>
                    <li>CONTACT</li>
                    <li>CAREER</li>
                    <li>FAWS</li>
                </ul>
                <p className='flex justify-center pb-10 font-extralight'>Copyright © 2022 - 2025 | All right reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;