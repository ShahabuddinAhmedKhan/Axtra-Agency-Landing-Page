import Lottie from "lottie-react";
import downArrow from "../assets/Arrow.json"

const Banner = () => {
    return (
        <>
            <div className='pl-2 md:pl-10 sm:pl-20 xl:pl-34 '>
                <div className='flex items-center'>
                    <div><h1 className='font-bold text-2xl'>DIGITAL</h1></div>
                    <div className='ml-10 divider before:h-[1px] after:h-[1px] before:bg-black after:bg-black  w-25 pb-3 mb-0'></div>
                </div>
                <div >
                    <h1 className='xl:text-[230px] lg:text-[160px]  md:text-9xl sm:text-7xl font-extrabold text-[90px]'>MARK</h1>
                </div>
                <div className='flex flex-col-reverse md:flex-row  items-start md:gap-8 lg:gap-26 xl:gap-60 relative z-10'>
                    <div>
                        <h1 className='text-gray-600 font-bold w-77 pt-5'>
                            Static and dynamic secure code review can prevent a day before your product is even released. We can integrate with your dev environment</h1>
                    </div>
                    <div>
                        <h1 className='xl:text-[230px] lg:text-[160px]  md:text-9xl sm:text-7xl font-extrabold text-[90px] pl-50 sm:pl-55 md:pl-0'>ETING</h1>
                    </div>
                </div>


            </div>
            <div className="flex items-center  mt-7 lg:relative lg:-translate-y-20 xl:-translate-y-24   z-0   w-full  sm:pl-20 md:pl-24 xl:pl-50 gap-15 2xl:gap-80">
                <div className=" hidden md:block md:w-20 2xl:w-40 justify-start">
                    <Lottie animationData={downArrow} loop={true}></Lottie>


                </div>
                <div className="justify-end">
                    <img className='object-cover h-70 sm:h-60 md:w-300 2xl:w-400' src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b1728b9b.jpg&w=3840&q=75" alt="" />
                </div>
            </div>
            <div className="xl:max-w-7xl lg:max-w-5xl md:max-w-3xl mx-auto">
                <h1 className="py-15 text-xl text-center font-semibold">{
                    "We Worked with global largest brands".toUpperCase()
                    }</h1>
                <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 grid-cols-2  justify-items-center gap-8 pb-15">
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