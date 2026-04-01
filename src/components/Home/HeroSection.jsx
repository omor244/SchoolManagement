import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { ChevronLeft, ChevronRight } from "lucide-react";
import Navber from '../Navber/Navber';
import { SlideAttendance, SlidePartner, SlideStudentPortal } from './Slider';
import { useLocation } from 'react-router';
import { WaveSeparator } from '../Data/DataForHome';

/** * Animation Variants 
 */







const HeroSection = () => {

    const location = useLocation()
    console.log(location.pathname)
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

    useEffect(() => {
        if (!emblaApi) return;
        const intervalId = setInterval(() => emblaApi.scrollNext(), 7000);
        return () => clearInterval(intervalId);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    return (
        <section className="relative w-full  overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#0f172a] pb-16 md:pb-32 text-white">

            {/* Background Decorative Element */}
            <div className="absolute  top-[-5%] left-[-5%] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-purple-600/20 blur-[80px] md:blur-[120px] rounded-full -z-10" />

            {location.pathname == "/" && <><div className="relative bg-[#3a0463]  z-50">
                <Navber />
            </div> </> }

            <div className="overflow-hidden lg:px-22 w-full relative z-20" ref={emblaRef}>
                <div className="flex">
                    <SlideAttendance />
                    <SlideStudentPortal />
                    <SlidePartner />
                </div>
            </div>

            {/* Responsive Navigation Arrows */}
            <div className="absolute bottom-20 md:inset-y-0 left-4 lg:left-10 flex items-center z-30">
                <button
                    onClick={scrollPrev}
                    className="p-2 md:p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white backdrop-blur-md"
                    aria-label="Previous slide"
                >
                    <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
                </button>
            </div>
            <div className="absolute bottom-20 md:inset-y-0 right-4 lg:right-10 flex items-center z-30">
                <button
                    onClick={scrollNext}
                    className="p-2 md:p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white backdrop-blur-md"
                    aria-label="Next slide"
                >
                    <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
                </button>
            </div>

            <WaveSeparator />
        </section>
    );
};

export default HeroSection;