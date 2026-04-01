
import { motion } from 'framer-motion';
import { metrics } from '../Data/DataForHome';

const SpeedEfficiency = () => {
   

    return (
        <section className="relative py-24 overflow-hidden font-sans">
            {/* Background Gradient matching the reference */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-400  via-purple-900 to-pink-500 -z-10" />

            {/* Decorative diagonal overlays */}
            <div className="absolute inset-0 opacity-10 -z-10">
                <div className="absolute top-0 left-1/4 w-32 h-full bg-white skew-x-12 transform" />
                <div className="absolute top-0 right-1/3 w-20 h-full bg-white skew-x-12 transform" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-2xl md:text-4xl font-bold text-white mb-20"
                >
                    কিভাবে আপনার স্কুল/কলেজ আগের চেয়ে দ্রুত হবে
                </motion.h2>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {metrics.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: item.delay }}
                            className="flex flex-col items-center group"
                        >
                            {/* Icon Container */}
                            <div className="bg-white p-5 rounded-2xl shadow-2xl mb-6 transition-transform group-hover:rotate-6 duration-300">
                                {item.icon}
                            </div>

                            {/* Metric Text */}
                            <div className="space-y-1">
                                <h3 className="text-xl md:text-3xl font-black text-white">
                                    {item.time}
                                </h3>
                                <p className="text-sm md:text-lg font-medium text-white/90">
                                    {item.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SpeedEfficiency;