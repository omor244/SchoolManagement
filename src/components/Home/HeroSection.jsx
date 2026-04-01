import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle2, QrCode } from "lucide-react";
import Navber from '../Navber/Navber';

/** * Animation Variants 
 */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const WaveSeparator = () => (
    <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[40px] sm:h-[60px] md:h-[100px] lg:h-[150px] w-full"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C100.33,42.33,205.33,68.33,321.39,56.44Z"
                className="fill-white"
            />
        </svg>
    </div>
);

// --- Slide 1: Digital Attendance ---
const SlideAttendance = () => (
    <motion.div
        variants={containerVariants} initial="hidden" whileInView="visible"
        className="flex-none w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-32"
    >
        <div className="space-y-6 w-full text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
                <motion.h3 variants={itemVariants} className="text-yellow-400 font-bold uppercase text-xs md:text-sm">ডাইনামিক এবং স্মার্ট</motion.h3>
                <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                    ডিজিটাল হাজিরা <br className='hidden lg:block' /> ম্যানেজমেন্ট
                </motion.h1>
            </div>
            <motion.ul variants={itemVariants} className="space-y-3 text-slate-200 text-base md:text-lg inline-block lg:block text-left">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-yellow-400 shrink-0" />শিক্ষক-শিক্ষিকা/শিক্ষার্থীদের হাজিরা</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-yellow-400 shrink-0" />বায়োমেট্রিক/আরএফআইডি ইন্টিগ্রেশন</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-yellow-400 shrink-0" />অনুপস্থিতি এসএমএস নোটিফিকেশন</li>
            </motion.ul>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center order-1 lg:order-2">
            <img
                src="https://i.ibb.co.com/B5LBZ034/attendance-solution-bn.png"
                alt="Attendance Solution"
                className="w-[80%] md:w-full max-w-[450px] h-auto drop-shadow-2xl"
            />
        </motion.div>
    </motion.div>
);

// --- Slide 2: Student Portal ---
const SlideStudentPortal = () => (
    <motion.div
        variants={containerVariants} initial="hidden" whileInView="visible"
        className="flex-none w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-32"
    >
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
                <motion.h3 variants={itemVariants} className="text-yellow-400 font-bold uppercase text-xs md:text-sm">ইউজার ফ্রেন্ডলি</motion.h3>
                <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                    শিক্ষার্থী পোর্টাল <br className='hidden lg:block' /> মোবাইল অ্যাপ
                </motion.h1>
                <motion.div variants={itemVariants} className="bg-pink-600 inline-block px-3 py-1 rounded-lg text-[10px] md:text-xs font-bold text-white shadow-lg">
                    অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন খুব সহজে
                </motion.div>
            </div>
            <motion.ul variants={itemVariants} className="space-y-3 text-slate-200 text-base md:text-lg inline-block lg:block text-left">
                {['শিক্ষার্থী প্রোফাইল', 'বাড়ির কাজ ও ডায়েরি', 'উপস্থিতি এবং ফলাফল', 'ফি প্রদান ও বকেয়া'].map(text => (
                    <li key={text} className="flex items-center gap-3"><QrCode className="h-5 w-5 text-yellow-400 shrink-0" />{text}</li>
                ))}
            </motion.ul>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center order-1 lg:order-2">
            <img
                src="https://i.ibb.co.com/Pf4HQVF/student-portal-app.png"
                alt="Student Portal"
                className="h-[300px] md:h-[450px] lg:h-[550px] w-auto object-contain drop-shadow-2xl"
            />
        </motion.div>
    </motion.div>
);

// --- Slide 3: Partner ---
const SlidePartner = () => (
    <motion.div
        variants={containerVariants} initial="hidden" whileInView="visible"
        className="flex-none w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center px-6 md:px-12 lg:px-24 py-12 md:py-20 lg:py-32"
    >
        <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-3">
                <motion.p variants={itemVariants} className="text-yellow-400 text-sm md:text-lg font-medium">কাজ করতে আগ্রহী?</motion.p>
                <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight text-white">
                    নিজস্ব এলাকায় উদ্যোক্তা <br className='hidden lg:block' /> হয়ে আয় করুন!
                </motion.h1>
            </div>
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg px-8 py-6 h-auto font-bold shadow-2xl transition-transform active:scale-95">আবেদন করুন</Button>
            </motion.div>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center order-1 lg:order-2">
            <div className="relative p-2 rounded-3xl border border-white/10 bg-white/5 overflow-hidden max-w-[300px] md:max-w-none">
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                    alt="Entrepreneur"
                    className="rounded-2xl h-60 md:h-80 w-auto object-cover border-2 border-yellow-400/30"
                />
            </div>
        </motion.div>
    </motion.div>
);

const HeroSection = () => {
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

            <div className="relative  z-50">
                <Navber />
            </div>

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