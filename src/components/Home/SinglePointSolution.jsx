import React from 'react';
import { motion } from 'framer-motion';
import { solutions } from '../Data/Data';

const SinglePointSolution = () => {
    // Solutions data updated to use image paths instead of icons
   

    // Helper function for circular positioning on desktop
    const getPositionClasses = (pos) => {
        switch (pos) {
            case "top": return "lg:-top-16 lg:left-1/2 lg:-translate-x-1/2";
            case "top-left": return "lg:top-0 lg:left-0";
            case "top-right": return "lg:top-0 lg:right-0";
            case "left": return "lg:top-1/2 lg:-left-20 lg:-translate-y-1/2";
            case "right": return "lg:top-1/2 lg:-right-20 lg:-translate-y-1/2";
            case "bottom-left": return "lg:bottom-0 lg:left-0";
            case "bottom-right": return "lg:bottom-0 lg:right-0";
            case "bottom": return "lg:-bottom-16 lg:left-1/2 lg:-translate-x-1/2";
            default: return "";
        }
    };

    return (
        <section className="py-20 bg-white overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Section Header */}
                <div className="mb-16 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg"
                    >
                        সিঙ্গেল পয়েন্ট সমাধান
                    </motion.div>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        আপনি আমাদের স্কুল কলেজ ব্যবস্থাপনা সফটওয়্যার থেকে আপনার প্রয়োজনীয় সমস্ত সমাধান পাবেন।
                    </p>
                </div>

                {/* Orbit Container */}
                <div className="relative mt-20  mb-20 m-42 flex justify-center items-center">

                    {/* Central Mockup Ring */}
                    <div className="relative w-64 my-10 h-64 md:w-80 md:h-80 border-2 border-dashed border-yellow-400/50 rounded-full flex items-center justify-center bg-yellow-50/30">
                        <div className="relative z-10 w-48 md:w-60">
                            <img
                                src="https://school360.com.bd/core_media/images/onePointSolution/Dashboard.png"
                                alt="System Mockup"
                                className="w-full h-auto drop-shadow-xl"
                                onError={(e) => { e.target.src = 'https://placehold.co/400x300?text=System+Mockup'; }}
                            />
                        </div>
                    </div>

                    {/* Solution Nodes */}
                    <div className="absolute inset-0 w-full h-full">
                        {solutions.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`absolute flex flex-col items-center gap-2 group cursor-pointer ${getPositionClasses(item.position)} 
                  w-32 md:w-40 scale-75 md:scale-100`}
                            >
                                {/* Image Container */}
                                <div className="bg-white md:w-96 p-2 rounded-2xl  group-hover:-translate-y-1 transition-all duration-300 w-16 h-16  md:h-28 flex items-center justify-center overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full "
                                        onError={(e) => { e.target.src = 'https://placehold.co/100x100?text=Module'; }}
                                    />
                                </div>
                                {/* <span className="text-xs md:text-sm font-bold text-slate-700 bg-white/80 px-2 py-1 rounded">
                                    {item.name}
                                </span> */}
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SinglePointSolution;