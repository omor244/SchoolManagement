import React from 'react';
import { motion } from 'framer-motion';
import { modules, positions } from '../Data/Data';
import { Logo } from '../Logo/Logo';

const ModuleSection = () => {
   


    return (
        <section className="py-24 bg-white overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-full font-bold text-lg shadow-lg mb-6"
                >
                    “স্কুল৩৬০” শিক্ষা ব্যবস্থাপনা সফটওয়্যার
                </motion.div>

                <h2 className="text-4xl font-black text-slate-800 mb-20">মূল মডিউলসমূহ</h2>

                {/* Grid Container */}
                <div className="relative max-w-4xl mx-auto">

                    {/* Desktop Circular Layout using Grid */}
                    <div className="hidden lg:grid grid-cols-9 grid-rows-9 gap-4 items-center justify-items-center h-[600px]">

                        <div className="col-start-4 col-span-3 row-start-4 row-span-3 z-10">
                            <div className="w-64 h-64 rounded-full bg-black/80 border-2 border-dashed border-slate-200 flex items-center justify-center shadow-inner relative">
                                  <Logo/>
                                <div className="absolute inset-0 rounded-full bg-slate-100 animate-ping opacity-20 -z-10" />
                            </div>
                        </div>

                
                        {modules.slice(0, 8).map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                className={`${positions[index]} group z-20`}
                            >
                                <div className={`flex flex-col items-center justify-center w-32 h-32 rounded-full text-white shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl ${module.color} p-4 text-center border-4 border-white`}>
                                    <div className="mb-1 bg-white/20 p-2 rounded-full">
                                        {React.cloneElement(module.icon, { size: 20 })}
                                    </div>
                                    <span className="font-bold text-[11px] leading-tight">
                                        {module.title}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Mobile/Tablet Grid - Simple & Clean */}
                    <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-6">
                        {modules.map((module, index) => (
                            <motion.div
                                key={`mob-${index}`}
                                whileInView={{ opacity: 1, y: 0 }}
                                initial={{ opacity: 0, y: 20 }}
                                className={`flex flex-col items-center p-6 rounded-2xl text-white ${module.color} shadow-lg`}
                            >
                                <div className="mb-3 bg-white/20 p-3 rounded-full">
                                    {module.icon}
                                </div>
                                <span className="font-bold text-sm text-center">
                                    {module.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ModuleSection;