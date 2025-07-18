

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
const Featured = () => {
    const image = ["https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F3.2d3fe8ed.jpg&w=1200&q=75", "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F2.fa8e208f.jpg&w=1200&q=75", "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.23156821.jpg&w=1200&q=75", "https://axtra-next-agency.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F4.ce321823.jpg&w=1200&q=75"

    ]
    return (
        <>
            <div className=" bg-black h-190">

                <div className="flex justify-center lg:max-w-7xl  md:max-w-4xl max-w-3xl mx-auto  h-full">
                    <Carousel className="sm:w-140 md:w-180 lg:w-200 xl:w-250 w-100   "
                    opts={{loop: true}}
                    plugins={[Autoplay({ delay: 4000 })]}>
                        <CarouselContent>
                            {image.map((src, index) => (
                                <CarouselItem key={index}>
                                    <h1 className="text-white ml-3 pt-15 font-semibold text-xl">FEATURED <br /> WORK</h1>
                                    <p className="text-white md:ml-15 pt-10 relative z-2 xl:pb-10"><span className="text-5xl font-bold">{index + 1} / </span>4</p>
                                    <div className="flex justify-between items-center  h-120  ">
                                        <div>
                                            <p className="text-white text-5xl  md:text-8xl xl:text-9xl font-bold relative -translate-y-16 -translate-x-1 shrink  z-2">
                                                {"Benjon ".toUpperCase()}
                                            </p>
                                            <p className="text-white  text-5xl xl:text-9xl md:text-8xl font-bold relative -translate-y-16 shrink translate-x-8  z-2">
                                                {" website".toUpperCase()}
                                            </p>
                                            <p className="text-white  text-5xl xl:text-9xl md:text-8xl font-bold relative -translate-y-16 shrink  z-2">
                                                {"2012".toUpperCase()}
                                            </p>
                                        </div>
                                        <img
                                            src={src}
                                            alt={`Image ${index + 1}`}
                                            className="relative  -translate-x-52 sm:-translate-x-42  z-0 sm:w-123 w-100 h-150 object-cover  "
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Featured;