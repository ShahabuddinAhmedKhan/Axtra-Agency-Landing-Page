import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Stats = () => {
    return (
        <div>
            <div className='bg-[#fffaf0] pb-20'>
                <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto flex md:flex-row flex-col items-center gap-28 py-20'>
                    <div className=''>
                        <div className='flex md:gap-20 gap-36 mb-10'>
                            <div>
                                <h1 className='text-5xl font-bold mb-5'>25K</h1>
                                <p className='text-xl font-semibold text-gray-600 w-20'>Project
                                    completed</p>
                            </div>

                            <div>
                                <h1 className='text-5xl font-bold mb-5'>8K</h1>
                                <p className='text-xl font-semibold text-gray-600 w-20'>Happy
                                    customers</p>
                            </div>



                        </div>

                        <div className='flex md:gap-20 gap-36'>
                            <div>
                                <h1 className='text-5xl font-bold mb-5'>15</h1>
                                <p className='text-xl font-semibold text-gray-600 w-20'>Years
                                    experiences</p>
                            </div>

                            <div>
                                <h1 className='text-5xl font-bold mb-5'>98</h1>
                                <p className='text-xl font-semibold text-gray-600 w-20'>Awards
                                    achievement</p>
                            </div>



                        </div>


                    </div>
                    <div>
                        <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcounter-3.40d27be6.png&w=1920&q=75" alt="" />
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Stats;