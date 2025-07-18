import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { FaQuoteLeft } from "react-icons/fa";

const Quote = () => {
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