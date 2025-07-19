import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiTick } from 'react-icons/ti';

const PricingTable = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            ".price", // Targeting multiple elements by their IDs
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
                    trigger: ".price", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                  
                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".card", // Targeting multiple elements by their IDs
            {
                y: 50,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: ".card", // Trigger the animation when the grid comes into view
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
                duration: 3,
                ease: "bounce.out", // Bounce effect
                scrollTrigger: {
                    trigger: ".buton", // Trigger the animation when the button comes into view
                    start: "top 75%", // Start when the top of the button reaches 75% of the viewport height
                    end: "bottom 5%", // End when the bottom of the button reaches 5% of the viewport height
                    once: true, // Only trigger once
                },
            }
        );
    },[])
    return (
        <div>
            <div className='bg-[#f3ecec] py-20  '>
                <div className='md:flex xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto gap-10'>
                    <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-sm mx-auto flex-1'>
                        <h1 className='price text-xl font-bold text-gray-700'>{
                            "Pricing Table".toUpperCase()

                        }</h1>
                        <h1 className='price text-4xl font-bold pt-5 pb-15'>{
                            "Be kind to your mind".toUpperCase()

                        }</h1>
                        <div className="collapse collapse-plus bg-[#f3ecec] rounded-none border-black border-t-1 ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Design should enrich our day</div>
                            <div className="collapse-content text-sm font-semibold text-gray-600">Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people</div>
                        </div>
                        <div className="collapse collapse-plus bg-[#f3ecec] rounded-none border-black border-t-1 ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Bring their individul experience and creative</div>
                            <div className="collapse-content text-sm font-semibold text-gray-600">This is the second accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes.</div>
                        </div>
                        <div className="collapse collapse-plus bg-[#f3ecec] rounded-none border-black border-t-1 ">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Human centred design to challenges</div>
                            <div className="collapse-content text-sm font-semibold text-gray-600">Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people</div>
                        </div>
                        <div className="collapse collapse-plus bg-[#f3ecec] rounded-none border-black border-t-1 border-b-1">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title font-semibold">Developing core web applications</div>
                            <div className="collapse-content text-sm font-semibold text-gray-600">Our design services starts and ends with a best-in-class experience strategy that builds brands. Through a process of iteration and prototyping design interfaces that bring joy to people</div>
                        </div>


                    </div>
                    <div className='xl:max-w-7xl lg:max-w-4xl  md:max-w-3xl sm:max-w-xl max-w-120  mx-auto flex-1'>
                        {/* card1 */}
                        <div onMouseEnter={() => {
                        gsap.to("#cursor", {borderColor: "#27fe00"})
                        gsap.to("#cursorDot", {backgroundColor: "#27fe00"})
                    }} onMouseLeave={() => {
                        gsap.to("#cursor", {borderColor: "#000000"})
                        gsap.to("#cursorDot", {backgroundColor: "#000000"})

                    }} className='card bg-black rounded-2xl mt-10 '>
                            <div className='flex justify-between pl-32 mb-5 items-center pt-10 pr-10'>
                                <h1 className='border-1 border-gray-500 text-gray-500 w-20 h-7 p-2 flex justify-center items-center rounded-2xl '>YEARLY</h1>
                                <p className='text-white text-3xl font-bold'>$129 <span className='text-xl'>.99</span></p>
                            </div>
                            <div className='flex gap-12 pl-10'>
                                <TiTick className='text-black text-4xl h-10 rounded-sm bg-[#ff9776]' />
                                <div>
                                    <h1 className='text-white font-bold text-2xl'>14 DAYS FREE</h1>
                                    <p className='text-gray-500 font-bold mt-5 pb-5'>
                                        Subscription fee is $129.99 USD and automatically <br />  renews each year.
                                    </p>
                                </div>
                            </div>

                        </div>
                        {/* card2 */}
                        <div className='card bg-white rounded-2xl mt-10 '>
                            <div className='flex justify-between pl-32 mb-5 items-center pt-10 pr-10'>
                                <h1 className='border-1 border-black  w-20 h-7 p-2 flex justify-center items-center rounded-2xl '>YEARLY</h1>
                                <p className='text-black text-3xl font-bold'>$12 <span className='text-xl'>.99</span></p>
                            </div>
                            <div className='flex gap-12 pl-10'>
                                <TiTick className='text-gray-500 border-gray-500 border-2 text-4xl h-10 rounded-sm bg-white' />
                                <div>
                                    <h1 className='text-black font-bold text-2xl'>7 DAYS FREE</h1>
                                    <p className='text-black font-bold mt-5 pb-5'>
                                        Subscription fee is $12.99 USD and automatically <br /> renews each year.
                                    </p>
                                </div>
                            </div>


                        </div>
                        <button className='buton btn my-10  h-60 w-60 rounded-full '>
                            <p className='text-gray-500 text-2xl mr-4'>Try It <br /> Free Now</p>
                            <FaArrowRightLong className='text-gray-500 -rotate-45 text-2xl' />
                        </button>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default PricingTable;