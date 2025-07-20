import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

const WhoWeAre = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            "#who", // Targeting multiple elements by their IDs
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
                    trigger: "#who", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                  
                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".team", // Targeting multiple elements by their IDs
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
                    trigger: ".team", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                   
                    once: true// Disable markers (useful for debugging)
                },
            }
        )
        gsap.fromTo(
            ".leading", // Targeting multiple elements by their IDs
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
                    trigger: ".leading", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                   
                    once: true// Disable markers (useful for debugging)
                },
            }
        )

    },[])
    return (
        <div onMouseEnter={() => {
                        gsap.to("#cursor", {borderColor: "#27fe00"})
                        gsap.to("#cursorDot", {backgroundColor: "#27fe00"})
                    }} onMouseLeave={() => {
                        gsap.to("#cursor", {borderColor: "#000000"})
                        gsap.to("#cursorDot", {backgroundColor: "#000000"})

                    }} className='bg-black border-red-600 overflow-hidden'>

            <div className=' md:flex xl:max-w-7xl lg:max-w-5xl md:max-w-3xl sm:max-w-xl max-w-sm mx-auto py-20 lg:py-30 gap-9 lg:gap-15 xl:gap-23'>
                <div className='flex-1'>
                    <img className='w-full' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.155b0493.jpg&w=1200&q=75" alt="" />
                </div>
                <div className='text-white flex-1 space-y-6'>

                    <h1 id='who' className='text-xl pt-5'>
                        {
                            "Who We Are".toUpperCase()
                        }
                    </h1>
                    <h3  className='text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold'>{
                        "We are leading /digital marketing/ agency.".toUpperCase().split("/").map((letter, idx) => <span key={idx} className='leading inline-block'>{letter}</span>)
                    }
                    </h3>
                    
                    <div className='border-l-1 border-gray-800  h-full ml-6  lg:ml-15'>
                        <p className='text-gray-400 font-semibold pl-4 lg:w-80'>
                            {"We’re a team of strategic mdigital /marketing working globally with largest/brands, We believe that progress only/happens when you refused to play things/safe. We combine ideas and behaviors,/and insights with design, technological/data to produce brand experiences that/customers love our services.".split("/").map((letter, idx) => <span key={idx} className='team inline-block'>{letter}</span>)}
                            
                        </p>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default WhoWeAre;