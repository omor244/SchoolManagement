
import { motion } from 'framer-motion';

import { modules } from '../Data/Data';

const ModuleSection = () => {
   

    return (
        <section className="py-20 bg-slate-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center">

                {/* Updated Title Color (Indigo/Slate instead of Purple) */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="inline-block  text-white px-8 py-3 rounded-xl mb-4 "
                >
                    <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
                        “স্কুল৩৬০” শিক্ষা ব্যবস্থাপনা সফটওয়্যার
                    </div>
                 
                </motion.div>

                <h2 className="text-4xl font-black text-slate-800 mb-16">মূল মডিউল</h2>

                <div className="relative flex flex-col items-center">

                    {/* Central Logo Placeholder */}
                    <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
                        <div className="w-64 h-32 bg-white border-4 border-dashed border-slate-200 rounded-3xl flex items-center justify-center shadow-inner">
                            <span className="text-slate-400 font-bold text-2xl italic">School 360</span>
                        </div>
                    </div>

                    {/* Modules Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-64 gap-y-6 w-full max-w-5xl">
                        {modules.map((module, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className={`flex items-center gap-4 p-1 rounded-full text-white shadow-md ${module.color} 
                  ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                            >
                                <div className="bg-white/20 p-3 rounded-full">
                                    {module.icon}
                                </div>
                                <span className="flex-1 font-bold text-sm md:text-base px-4">
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