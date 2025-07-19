import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const RecentBlog = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            ".design", // Targeting multiple elements by their IDs
            {
                x: 50,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".recent", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                  
                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".recent", // Targeting multiple elements by their IDs
            {
                y: 50,
                scaleY: 0.3,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                scaleY: 1,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".recent", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                  
                    once: true// Disable markers (useful for debugging)
                },
            }
        )
    },[])
    return (
        <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto'>
            <div className='flex justify-center my-10'>
                <div >
                    <h3 className=' text-gray-700 text-xl lg:text-2xl font-semibold'>RECENT BLOG</h3>
                    <h1 className='recent mt-3 mb-8 text-3xl lg:text-4xl font-bold'>{`Read Updated `.toUpperCase()} <br /> JOURNAL</h1>
                    <p className=' text-xl lg:text-2xl text-gray-700 font-semibold w-75 border-l-1 pl-10 ml-20'>{
                        "Read our blog and try to see/everything from every/ perspective. Our passion/ lies in making everything/ accessible and aesthetic for/ everyone.".split("/").map((sentence,idx) => <span key={idx} className='recent inline-block'>{sentence}</span>)
                        }</p>
                </div>
            </div>
            <div className='py-20 lg:flex '>
                <div className='design sm:flex gap-30 items-center'>
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
                <div className='design sm:flex gap-30 items-center'>
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