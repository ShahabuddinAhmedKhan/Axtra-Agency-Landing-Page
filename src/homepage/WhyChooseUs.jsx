import React from 'react';
import whyChoose from "../assets/whychoose.json"
import Lottie from 'lottie-react';

const WhyChooseUs = () => {
    return (
        <div className='bg-[#f3ecec]  pb-20'>
            <div className=''>
                <h1 className='text-center font-bold text-2xl py-20' >WHY CHOOSE US</h1>
                <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto flex lg:flex-row flex-col lg:gap-20 gap-12'>
                    <div>
                        <h1 className='font-bold text-3xl pb-10'>{"Keyword,Research Strategy, Survey, & Analytics".toUpperCase()}</h1>
                        <p className='font-semibold mb-10 text-2xl'>
                            Attention, we take out our round glasses and our sweater with elbow patches to go back to the origins of the user experience: the first mention of the user and its importance was born in the
                        </p>
                        <button className="btn rounded-full hover:bg-red-200 border-2 border-black bg-[#f3ecec]">GOOGLE</button>
                        <button className="btn rounded-full hover:bg-red-200 border-2 border-black bg-[#f3ecec]">PINTEREST</button>
                        <button className="btn rounded-full hover:bg-red-200 border-2 border-black bg-[#f3ecec]">INSTAGRAM</button>
                        <div className='w-40 pt-20 hidden lg:block'>
                            <Lottie animationData={whyChoose} loop={true} />
                        </div>


                    </div>
                    <div className='space-y-9'>
                        <div className='flex justify-center items-center gap-7'>
                            <div>
                                <h1 className='size-30 border-3 border-black rounded-full flex justify-center items-center text-4xl font-bold'>60%</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>STRATEGY</h1>
                                <p className='font-semibold w-60 mt-5 text-xl'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>

                            </div>

                        </div>
                        <div className='flex justify-center items-center gap-7 lg:relative lg:-translate-x-12 sm:-translate-x-20'>
                            <div>
                                <h1 className='size-30 border-3 border-black rounded-full flex justify-center items-center text-4xl font-bold'>95%</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>AUDIENCE</h1>
                                <p className='font-semibold w-60 mt-5 text-xl'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>

                            </div>

                        </div>
                        <div className='flex justify-center items-center gap-7'>
                            <div>
                                <h1 className='size-30 border-3 border-black rounded-full flex justify-center items-center text-4xl font-bold'>70%</h1>
                            </div>
                            <div>
                                <h1 className='text-2xl font-bold'>KEYWORD</h1>
                                <p className='text-xl font-semibold w-60 mt-5'>Your marketing strategy optimizing performances doesn’t have to be a guessing game.</p>

                            </div>

                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default WhyChooseUs;