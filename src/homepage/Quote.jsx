import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
    const imageRefs = useRef([]);
    useEffect(() => {
    const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 30;
        const y = (e.clientY / innerHeight - 0.5) * 30;

        imageRefs.current.forEach((img, i) => {
            if (!img) return;
            const factor = (i + 1) * 0.2;
            gsap.to(img, {
                x: x * factor,
                y: y * factor,
                duration: 0.5,
                ease: "power3.out",
            });
        });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
}, []);

    const image = ["When we talk about ALts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success", "When we talk about ALts, we do not mean a typical business partner, but rather a team that collaborates with us daily, always there for us when we encounter difficulties and celebrate achievements. We see in Alts our best ally for success"

    ]
    return (
        <div >
            <>
                <div className="mt-50 h-200" >


                    <div className="flex justify-center lg:max-w-7xl  md:max-w-4xl max-w-3xl mx-auto  h-full">


                        <Carousel className="sm:w-140 md:w-180 lg:w-200 xl:w-250 w-100   "
                            opts={{ loop: true }}
                            plugins={[Autoplay({ delay: 7000 })]}


                        >
                            <img
                                ref={(el) => (imageRefs.current[0] = el)}
                                className="h-70 absolute right-0 top-98 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F5.83e5f14f.jpg&w=640&q=75"
                                alt=""
                            />

                            <img
                                ref={(el) => (imageRefs.current[1] = el)}
                                className="h-40 absolute right-40 top-130 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F6.faeeace1.jpg&w=384&q=75"
                                alt=""
                            />

                            <img
                                ref={(el) => (imageRefs.current[2] = el)}
                                className="h-25 absolute right-10 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.44563823.jpg&w=256&q=75"
                                alt=""
                            />

                            <img
                                ref={(el) => (imageRefs.current[3] = el)}
                                className="h-50 absolute -top-40 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.5fcd9521.jpg&w=384&q=75"
                                alt=""
                            />

                            <img
                                ref={(el) => (imageRefs.current[4] = el)}
                                className="h-30 absolute -top-10 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.82004ae1.jpg&w=256&q=75"
                                alt=""
                            />

                            <img
                                ref={(el) => (imageRefs.current[5] = el)}
                                className="h-75 absolute top-90 left-0 transition-transform"
                                src="https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.632d09dc.jpg&w=750&q=75"
                                alt=""
                            />

                            <CarouselContent>

                                {image.map((src, index) => (
                                    <CarouselItem key={index}>
                                        <div className=" h-100 space-y-6">
                                            <FaQuoteLeft className="text-6xl  mb-10 mx-auto" />
                                            <p className="text-center italic text-xl md:text-2xl font-semibold">
                                                {src}

                                            </p>
                                            <h1 className="font-bold text-4xl text-center">
                                                MARIA D.HALK
                                            </h1>
                                            <h1 className="text-center">
                                                MANAGING DIRECTOR
                                            </h1>

                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious className="relative translate-x-45 lg:translate-x-80   sm:translate-x-65 xl:translate-x-115 -translate-y-80 size-20 border-black " />
                            <CarouselNext className="relative translate-x-25 lg:translate-x-70  sm:translate-x-50 xl:translate-x-95 size-20 -translate-y-80 border-black" />
                        </Carousel>
                    </div>
                </div>
            </>

        </div>
    );
};

export default Quote;