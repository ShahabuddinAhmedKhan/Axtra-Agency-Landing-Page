import React from 'react';

const WhoWeAre = () => {
    return (
        <div className='bg-black border-red-600 overflow-hidden'>

            <div className=' md:flex xl:max-w-7xl lg:max-w-5xl md:max-w-3xl max-w-xl mx-auto py-20 lg:py-30 gap-9 lg:gap-15 xl:gap-23'>
                <div className='flex-1'>
                    <img className='w-full' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=1200&q=75" alt="" />
                </div>
                <div className='text-white flex-1 space-y-6'>

                    <h1 className='text-xl'>
                        {
                            "Who We Are".toUpperCase()
                        }
                    </h1>
                    <h3 className='text-3xl lg:text-4xl xl:text-5xl font-bold'>{
                        "We are leading digital marketing agency.".toUpperCase()
                    }
                    </h3>
                    
                    <div className='border-l-1 border-gray-800  h-full ml-6  lg:ml-15'>
                        <p className='text-gray-400 font-semibold pl-4 lg:w-80'>
                            We’re a team of strategic mdigital
                            marketing working globally with largest
                            brands, We believe that progress only
                            happens when you refused to play things
                            safe. We combine ideas and behaviors,
                            and insights with design, technological
                            data to produce brand experiences that
                            customers love our services.
                        </p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default WhoWeAre;