import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';


const Services = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            "#service", // Targeting multiple elements by their IDs
            {
                y: 50,
                scaleY: 0.3,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#service", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height


                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".market", // Targeting multiple elements by their IDs
            {
                y: 50,
                scaleY: 0.3,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".market", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height


                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".search", // Targeting multiple elements by their IDs
            {
                x: -50,

                opacity: 0,

            }, // Start from the right (off-screen)
            {
                x: 0,

                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".search", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height


                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".consumer", // Targeting multiple elements by their IDs
            {
                y: 50,
                scaleY: 0.3,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                scale: 1,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".consumer", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height


                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".buton", // Target the button
            {
                y: -40, // Start 50px above
                opacity: 0, // Start as invisible
            },
            {
                y: 0, // Move to its natural position
                opacity: 1, // Fade in
                duration: 2,
                ease: "bounce.out", // Bounce effect
                scrollTrigger: {
                    trigger: ".buton", // Trigger the animation when the button comes into view
                    start: "top 75%", // Start when the top of the button reaches 75% of the viewport height
                    end: "bottom 5%", // End when the bottom of the button reaches 5% of the viewport height
                    once: true, // Only trigger once
                },
            }
        );

    }, [])
    return (
        <div>
            <div className='sm:max-w-xl mx-auto'>
                <h1 id='service' className='mt-15 mb-5 text-xl font-semibold text-gray-700'>{"Services".toUpperCase()}</h1>
                <h1 className='text-4xl font-bold w-80 xl:py-5 xl:text-5xl'>
                    {

                        "Our marketing / Services".toUpperCase().split("/").map((letter, idx) => <span key={idx} className='market inline-block'>{letter}</span>)
                    }
                </h1>
                <p className='border-l-1 border-gray-300 w-95ml-30 pt-20 pl-5 xl:pl-20 pb-10'>
                    {

                        "Consumers today rely heavily on digital means to research/ products. We research a brand of bldend engaging with it,/ according to the meanwhile, 51%of consumers say they use/ Google to research products before buying.".toUpperCase().split("/").map((letter, idx) => <span key={idx} className='consumer inline-block'>{letter}</span>)
                    }
                </p>
                <hr className='mt-10 text-gray-300' />
            </div>
            <div className='sm:max-w-xl md:max-w-3xl lg:max-w-7xl mx-auto mt-10'>
                <div className='md:flex gap-10 justify-around'>
                    <h1 className='search text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60 '>{"Search Engine Optimization".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p className='search'>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div className='search'>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <div className='buton '>
                        <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                            <p className='text-gray-500'>Details</p>
                            <FaArrowRightLong className='-rotate-40' />
                        </button>
                    </div>

                </div>
                <hr className='text-gray-300' />

                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className='search text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"Email Marketing".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p className='search'>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div className='search'>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <div className='buton'>
                        <button className=' btn my-5 p-15 h-50 w-50 rounded-full '>
                            <p className='text-gray-500'>Details</p>
                            <FaArrowRightLong className='-rotate-40' />
                        </button>
                    </div>

                </div>
                <hr className='text-gray-300' />
                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className=' search text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"COntent Marketing".toUpperCase()}</h1>
                    <div className='w-85 space-y-7 font-semibold'>
                        <p className='search'>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div className='search'>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <div className='buton'>
                        <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                            <p className='text-gray-500'>Details</p>
                            <FaArrowRightLong className='-rotate-40' />
                        </button>
                    </div>

                </div>
                <hr className='text-gray-300' />
                <div className='md:flex gap-10 justify-around mt-10'>
                    <h1 className='search text-3xl font-bold my-9 lg:text-4xl xl:text-5xl w-60  '>{"Social Marketing".toUpperCase()}</h1>
                    <div className='search w-85 space-y-7 font-semibold'>
                        <p>
                            We help brands stand out through aweful, elegant visual design. Our design mainly philosophy.
                        </p>

                        <div>
                            <h1>+ Logo Design</h1>
                            <h1>+ Advertisement</h1>
                            <h1>+ Promotion</h1>


                        </div>
                    </div>
                    <div className='buton'>
                        <button className='btn my-5 p-15 h-50 w-50 rounded-full '>
                        <p className='text-gray-500'>Details</p>
                        <FaArrowRightLong className='-rotate-40' />
                    </button>
                    </div>

                </div>
                <hr className='text-gray-300' />

            </div>
        </div>
    );
};

export default Services;