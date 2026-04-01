import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../Data/Data';


const AchievementStats = () => {
   

    return (
        <section className="relative py-24 overflow-hidden font-sans">
            {/* Dynamic Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-purple-900 to-pink-500 -z-10" />

            {/* Decorative diagonal glass-morphism effect */}
            <div className="absolute inset-0 opacity-10 -z-10">
                <div className="absolute top-0 left-1/3 w-40 h-full bg-white skew-x-12 transform" />
                <div className="absolute top-0 right-1/4 w-32 h-full bg-white skew-x-12 transform" />
            </div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {stats.map((stat, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: stat.delay
                            }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center space-y-4"
                        >
                            {/* Icon with subtle hover animation */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="mb-2"
                            >
                                {stat.icon}
                            </motion.div>

                            {/* Counter Text */}
                            <div className="space-y-1">
                                <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter">
                                    {stat.count}
                                </h3>
                                <p className="text-sm md:text-base font-bold text-white/80 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementStats;