import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';


const Services = () => {
    return (
        <div>
            <div className='sm:max-w-xl mx-auto'>
                <h1 className='mt-15 mb-5 text-xl font-semibold text-gray-700'>{"Services".toUpperCase()}</h1>
                <h1 className='text-4xl font-bold w-80 xl:py-5 xl:text-5xl'>
                    {"Our marketing  Services".toUpperCase()}
                </h1>
                <p className='border-l-1 border-gray-300 w-95 ml-30 pt-20 pl-5 xl:pl-20 pb-10'>Consumers today rely heavily on digital means to
                    research products. We research a brand of bldend
                    engaging with it, according to the meanwhile, 51%
                    of consumers say they use Google to research
                    products before buying.</p>
                <hr className='mt-10 text-gray-300' />
            </div>
            <div className='sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto mt-10'>
                <div className='md:flex gap-10 justify-around'>
                    <h1 className='text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60 '>{"Search Engine Optimization".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                        <p className='text-gray-500'>Details</p>
                        <FaArrowRightLong className='-rotate-40' />
                    </button>

                </div>
                <hr className='text-gray-300' />

                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className='text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"Email Marketing".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                        <p className='text-gray-500'>Details</p>
                        <FaArrowRightLong className='-rotate-40' />
                    </button>

                </div>
                <hr className='text-gray-300' />
                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className='text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"COntent Marketing".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                        <p className='text-gray-500'>Details</p>
                        <FaArrowRightLong className='-rotate-40' />
                    </button>

                </div>
                <hr className='text-gray-300' />
                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className='text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"Social Marketing".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                        <p className='text-gray-500'>Details</p>
                        <FaArrowRightLong className='-rotate-40' />
                    </button>

                </div>
                <hr className='text-gray-300' />

            </div>
        </div>
    );
};

export default Services;