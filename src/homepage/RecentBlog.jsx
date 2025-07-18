import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const RecentBlog = () => {
    return (
        <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto'>
            <div className='flex justify-center my-10'>
                <div >
                    <h3 className='text-gray-700 text-xl lg:text-2xl font-semibold'>RECENT BLOG</h3>
                    <h1 className='mt-3 mb-8 text-3xl lg:text-4xl font-bold'>{`Read Updated `.toUpperCase()} <br /> JOURNAL</h1>
                    <p className='text-xl lg:text-2xl text-gray-700 font-semibold w-75 border-l-1 pl-10 ml-20'>Read our blog and try to see everything
                        from every perspective. Our passion lies
                        in making everything accessible and
                        aesthetic for everyone.</p>
                </div>
            </div>
            <div className='py-20 lg:flex '>
                <div className='sm:flex gap-30 items-center'>
                    <img className='w-40 lg:w-70 pb-8' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.8079d114.jpg&w=750&q=75" alt="" />
                    <div className='lg:relative lg:-translate-x-80 lg:translate-y-12 lg:bg-white lg:p-10'>
                        <h4 className='text-gray-700 pb-3'>
                            UI Design . 02 May 2019
                        </h4>
                        <h1 className='text-2xl border-b-1 lg:w-50 xl:w-85 w-85 pb-10 lg:text-xl'>How to bring fold to your startup company with Axtra</h1>
                        <button className='flex gap-4 items-center pt-4'>
                            Read More
                            <FaArrowRightLong className='-rotate-40' />
                        </button>
                    </div>
                </div>
                <div className='sm:flex gap-30 items-center'>
                    <img className='w-40 lg:w-70 pb-8' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.c0b84348.jpg&w=750&q=75" alt="" />
                    <div className='lg:relative lg:-translate-x-80 lg:translate-y-13 lg:bg-white lg:p-10'>
                        <h4 className='text-gray-700 pb-3'>
                            UI Design . 02 May 2019
                        </h4>
                        <h1 className='text-2xl border-b-1 lg:w-50 xl:w-85 w-85 pb-10 lg:text-xl'>How to bring fold to your startup company with Axtra</h1>
                        <button className='flex gap-4 items-center pt-4'>
                            Read More
                            <FaArrowRightLong className='-rotate-40' />
                        </button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default RecentBlog;