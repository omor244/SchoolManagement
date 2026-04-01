import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, CheckCircle2, QrCode } from "lucide-react";
import Navber from '../Navber/Navber';

/** * Animation Variants 
 * These control the staggered reveal of text and the sliding of images.
 */
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

/**
 * Custom Wave Separator 
 * Matches the curved transition at the bottom of your reference images.
 */
const WaveSeparator = () => (
    <div className="absolute bottom-0 left-0 w-full leading-[0] z-40">
        <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[60px] w-full md:h-[100px] lg:h-[150px]"
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
        variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false }}
        className="flex-none w-full grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-12 md:py-20"
    >
        <div className="space-y-8">
            <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-yellow-400 font-bold tracking-wider uppercase text-sm">ডাইনামিক এবং স্মার্ট</motion.h3>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                    ডিজিটাল হাজিরা <br className='hidden md:block' /> ম্যানেজমেন্ট
                </motion.h1>
            </div>
            <motion.ul variants={itemVariants} className="space-y-4 text-slate-200 text-lg">
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-yellow-400" />শিক্ষক-শিক্ষিকা/শিক্ষার্থীদের অনলাইন হাজিরা</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-yellow-400" />বায়োমেট্রিক/আরএফআইডি কার্ড ইন্টিগ্রেশন</li>
                <li className="flex items-center gap-3"><CheckCircle2 className="h-6 w-6 text-yellow-400" />উপস্থিতি, অনুপস্থিতি, লেট এসএমএস নোটিফিকেশন</li>
            </motion.ul>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center">
            <img
                src="https://i.ibb.co.com/B5LBZ034/attendance-solution-bn.png"
                alt="Attendance Solution"
                className="w-full max-w-[500px] h-auto object-contain z-10 drop-shadow-2xl"
            />
        </motion.div>
    </motion.div>
);

// --- Slide 2: Student Portal ---
const SlideStudentPortal = () => (
    <motion.div
        variants={containerVariants} initial="hidden" whileInView="visible"
        className="flex-none w-full grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-12 md:py-20 "
    >
        <div className="space-y-8">
            <div className="space-y-4">
                <motion.h3 variants={itemVariants} className="text-yellow-400 font-bold tracking-wider uppercase text-sm">ইউজার ফ্রেন্ডলি</motion.h3>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                    শিক্ষার্থী পোর্টাল <br className='hidden md:block' /> মোবাইল অ্যাপ
                </motion.h1>
                <motion.div variants={itemVariants} className="bg-pink-600 inline-block px-4 py-1.5 rounded-lg text-xs font-bold text-white tracking-wide shadow-lg">
                    ডাউনলোড জোন থেকে অ্যান্ড্রয়েড অ্যাপ ডাউনলোড করুন খুব সহজে
                </motion.div>
            </div>
            <motion.ul variants={itemVariants} className="space-y-4 text-slate-200 text-lg">
                {['শিক্ষার্থী প্রোফাইল', 'বাড়ির কাজ, ডায়েরি নোট', 'উপস্থিতি এবং ফলাফল', 'ফি প্রদান ও বকেয়া স্ট্যাটাস'].map(text => (
                    <li key={text} className="flex items-center gap-3"><QrCode className="h-6 w-6 text-yellow-400" />{text}</li>
                ))}
            </motion.ul>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center">
            <img
                src="https://i.ibb.co.com/Pf4HQVF/student-portal-app.png"
                alt="Student Portal"
                className="h-[350px] md:h-[500px] w-auto object-contain z-10"
                style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.5))" }}
            />
        </motion.div>
    </motion.div>
);

// --- Slide 3: Entrepreneur Opportunity ---
const SlidePartner = () => (
    <motion.div
        variants={containerVariants} initial="hidden" whileInView="visible"
        className="flex-none w-full grid md:grid-cols-2 gap-12 items-center px-6 md:px-16 py-12 md:py-20"
    >
        <div className="space-y-8">
            <div className="space-y-4">
                <motion.p variants={itemVariants} className="text-yellow-400 text-lg font-medium">আপনি কি "স্কুল৩৬০" পরিবারের সাথে কাজ করতে আগ্রহী?</motion.p>
                <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-white">
                    নিজস্ব এলাকায় উদ্যোক্তা <br className='hidden md:block' /> হয়ে আয় করুন!
                </motion.h1>
                <motion.p variants={itemVariants} className="text-slate-300 text-base max-w-lg pt-2">
                    আছে আইটি প্রতিষ্ঠান বা ক্ষুদ্র উদ্যোক্তাদের জন্য "হোয়াইট লেভেল" পদ্ধতিতে কাজ করার সুযোগ।
                </motion.p>
            </div>
            <motion.div variants={itemVariants}>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-xl text-lg px-10 py-7 font-bold shadow-2xl transition-transform hover:scale-105">আবেদন করুন</Button>
            </motion.div>
        </div>
        <motion.div variants={imageVariants} className="relative flex justify-center items-center">
            <div className="relative p-2 rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=400&auto=format&fit=crop"
                    alt="Entrepreneur"
                    className="rounded-[1.8rem] h-80 w-auto object-cover border-2 border-yellow-400/30"
                />
            </div>
        </motion.div>
    </motion.div>
);

// --- Main HeroSection Component ---
const HeroSection = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 });

    useEffect(() => {
        if (!emblaApi) return;
        const intervalId = setInterval(() => emblaApi.scrollNext(), 7000);
        return () => clearInterval(intervalId);
    }, [emblaApi]);

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    return (
        <section className="relative px-32 w-full overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#3b0764] to-[#0f172a] pb-24 md:pb-40 text-white">

            {/* Background Decorative Elements */}
            <div className="absolute top-[-5%] left-[-5%] w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full z-0" />
            <div className="absolute bottom-[10%] right-[-5%] w-[350px] h-[350px] bg-blue-600/10 blur-[100px] rounded-full z-0" />

            <div className="relative  z-50">
                <Navber />
            </div>

            <div className="overflow-hidden  relative z-20" ref={emblaRef}>
                <div className="flex">
                    <SlideAttendance />
                    <SlideStudentPortal />
                    <SlidePartner />
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 md:left-10 flex items-center z-30 pointer-events-none">
                <button
                    onClick={scrollPrev}
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white backdrop-blur-md pointer-events-auto"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            </div>
            <div className="absolute inset-y-0 right-4 md:right-10 flex items-center z-30 pointer-events-none">
                <button
                    onClick={scrollNext}
                    className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-white/20 transition-all text-white backdrop-blur-md pointer-events-auto"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            {/* The Bottom Curve Separator */}
            <WaveSeparator />
        </section>
    );
};

export default HeroSection;