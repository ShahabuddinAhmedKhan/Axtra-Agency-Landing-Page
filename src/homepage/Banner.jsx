import Lottie from "lottie-react";
import downArrow from "../assets/Arrow.json"
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin

const Banner = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.fromTo(
            "#images img", // Targeting multiple elements by their IDs
            {
                y: 100,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: "#images", // Trigger the animation when the grid comes into view
                    start: "top 75%", // Start when the top of the grid reaches 80% of the viewport height
                    end: "bottom 5%", // End when the bottom of the grid reaches 20% of the viewport height
                   
                  
                    once: true// Disable markers (useful for debugging)
                },
            }
        )

        gsap.fromTo(
            ".letter", // Targeting multiple elements by their IDs
            {
                x: 30,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                ease: "power2.out",
                stagger: 0.3
            }
        )
        gsap.fromTo(
            ".eting", // Targeting multiple elements by their IDs
            {
                x: 50,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 1.5,
                ease: "power2.out",
                stagger: 0.1
            }
        )
        gsap.fromTo(
            ".sentences", // Targeting multiple elements by their IDs
            {
                x: 50,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                x: 0,
                opacity: 1,
                duration: 1,
                delay: 2,
                ease: "power2.out",
                stagger: 0.1
            }
        )
        gsap.fromTo(
            "#worked", // Targeting multiple elements by their IDs
            {
                y: 30,
                opacity: 0,

            }, // Start from the right (off-screen)
            {
                y: 0,
                opacity: 1,
                duration: 2,
                ease: "power2.out",

            }
        )
    }, [])
    return (
        <>
            <div className='pl-2 md:pl-10 sm:pl-20 xl:pl-34 '>
                <div className='flex items-center'>
                    <div><h1 className='font-bold text-2xl'>DIGITAL</h1></div>
                    <div className='ml-10 divider before:h-[1px] after:h-[1px] before:bg-black after:bg-black  w-25 pb-3 mb-0'></div>
                </div>
                <div >
                    <h1 onMouseEnter={() => {
                        gsap.to("#cursor", { borderColor: "#27fe00" })
                        gsap.to("#cursorDot", { backgroundColor: "#27fe00" })
                    }} onMouseLeave={() => {
                        gsap.to("#cursor", { borderColor: "#000000" })
                        gsap.to("#cursorDot", { backgroundColor: "#000000" })

                    }} className='xl:text-[230px] lg:text-[160px]  md:text-9xl sm:text-7xl text-6xl font-extrabold  sm:w-200 w-50'>{"MARK".split("").map((letter, idx) => <span key={idx} className="letter inline-block  "> {letter}</span>)}</h1>
                </div>
                <div className='flex flex-col-reverse md:flex-row  items-start md:gap-8 lg:gap-26 xl:gap-60 relative z-10'>
                    <div>
                        <h1 id="bannerText" className='text-gray-600 font-bold w-77 pt-5'>
                            {
                                "Static and dynamic secure code review / can prevent a day before your product / is even released. We can integrate with / your dev environment".split("/").map((letter, idx) => <span key={idx} className="sentences inline-block">{letter}</span>)
                            }</h1>
                    </div>
                    <div>
                        <h1 onMouseEnter={() => {
                            gsap.to("#cursor", { borderColor: "#27fe00" })
                            gsap.to("#cursorDot", { backgroundColor: "#27fe00" })
                        }} onMouseLeave={() => {
                            gsap.to("#cursor", { borderColor: "#000000" })
                            gsap.to("#cursorDot", { backgroundColor: "#000000" })

                        }} id="bannerText1" className='xl:text-[230px] lg:text-[160px]  md:text-9xl sm:text-7xl text-6xl  font-extrabold  pl-50 sm:pl-55 md:pl-0'> {"ETING".split("").map((letter, idx) => <span key={idx} className="eting inline-block  "> {letter}</span>)}</h1>
                    </div>
                </div>


            </div>
            <div className="flex items-center  mt-7 lg:relative lg:-translate-y-20 xl:-translate-y-24   z-0   w-full  sm:pl-20 md:pl-24 xl:pl-50 gap-15 2xl:gap-80">
                <div className=" hidden md:block md:w-20 2xl:w-40 justify-start">
                    <Lottie animationData={downArrow} loop={true}></Lottie>


                </div>
                <div className="justify-end">
                    <img onMouseEnter={() => {
                        gsap.to("#cursor", { borderColor: "#27fe00" })
                        gsap.to("#cursorDot", { backgroundColor: "#27fe00" })
                    }} onMouseLeave={() => {
                        gsap.to("#cursor", { borderColor: "#000000" })
                        gsap.to("#cursorDot", { backgroundColor: "#000000" })

                    }} className='object-cover h-70 sm:h-60 md:w-300 2xl:w-400' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b1728b9b.jpg&w=3840&q=75" alt="" />
                </div>
            </div>
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto">
                <h1 id="worked" className="py-15 text-xl text-center font-semibold">{
                    "We Worked with global largest brands".toUpperCase()
                }</h1>
                <div id="images" className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  justify-items-center gap-8 pb-15">
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.d7a31a6b.png&w=256&q=75" alt="" />
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.bcc21f06.png&w=256&q=75" alt="" />
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.f90365a1.png&w=256&q=75" alt="" />
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.86b12e3b.png&w=256&q=75" alt="" />
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.a04b4741.png&w=256&q=75" alt="" />
                    <img src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.02d3a5b8.png&w=256&q=75" alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;