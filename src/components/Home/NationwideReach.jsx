import React from 'react';
import { motion } from 'framer-motion';
import { divisions, getPosition } from '../Data/DataForHome';

const NationwideReach = () => {
    // Division data with specific colors matching the UI
  

    // Helper to handle circular positioning on large screens
   

    return (
        <section className="py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-6xl mx-auto px-6 text-center">

                {/* Section Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl font-bold text-slate-800 mb-20"
                >
                    বাংলাদেশের প্রতিটি বিভাগে পৌঁছে গেছে “স্কুল৩৬০”।
                </motion.h2>

                {/* Orbit Container */}
                <div className="relative flex justify-center items-center min-h-[500px]">

                    {/* Central Map Illustration */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="relative z-10 w-64 my-18 h-64 md:w-96 md:h-96 rounded-full bg-slate-50 border border-slate-100 flex flex-col items-center justify-center p-8 shadow-inner"
                    >
                        <img
                            src="https://school360.com.bd/core_media/images/onePointSolution/school360_of_bangladesh.png"
                            alt="Bangladesh Map"
                            className="w-full  h-auto opacity-80"
                            onError={(e) => { e.target.src = 'https://placehold.co/400?text=BD+Map'; }}
                        />
                        <p className="mt-4 text-xs font-bold text-orange-600 bg-white px-3 py-1 rounded-full shadow-sm">
                            ■ সারাদেশে স্কুল৩৬০-এর বিস্তার
                        </p>
                    </motion.div>

                    {/* Division Nodes */}
                    <div className="absolute inset-0 w-full h-full pointer-events-none">
                        <div className="relative w-full h-full max-w-2xl mx-auto">
                            {divisions.map((div, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: idx * 0.1 }}
                                    className={`absolute pointer-events-auto flex flex-col items-center justify-center w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white shadow-xl text-white ${div.color} ${getPosition(div.position)} transition-transform hover:scale-110 cursor-default`}
                                >
                                    <span className="text-sm md:text-base font-bold">{div.name}</span>
                                    <span className="text-[10px] md:text-xs bg-black/20 px-2 py-0.5 rounded-full mt-1">{div.count}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NationwideReach;