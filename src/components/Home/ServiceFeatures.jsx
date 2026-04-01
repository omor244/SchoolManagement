import { motion } from 'framer-motion';
import { features } from '../Data/Data';


const ServiceFeatures = () => {
  

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* Left Side: Mockup Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center"
                >
                    {/* Main Monitor/Mobile Illustration */}
                    <div className="relative w-full max-w-lg">
                        <img
                            src="https://school360.com.bd/core_media/images/app-description/digital_smart_manager.webp" // Replace with your actual asset path
                            alt="Data Visualization Mockup"
                            className="w-full h-auto drop-shadow-2xl"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Service+Illustration'; }}
                        />
                        {/* Background decorative elements matching the screenshot */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-slate-50 rounded-full blur-3xl opacity-50" />
                    </div>
                </motion.div>

                {/* Right Side: Feature List */}
                <div className="space-y-10">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="flex items-start gap-6 group"
                        >
                            {/* Icon Box */}
                            <div className={`flex-shrink-0 ${feature.bgColor} p-4 rounded-xl shadow-lg transition-transform group-hover:scale-110 duration-300`}>
                                {feature.icon}
                            </div>

                            {/* Text Content */}
                            <div className="space-y-2">
                                <h3 className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                                    {feature.title}
                                </h3>
                                <p className="text-slate-500 leading-relaxed max-w-md">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServiceFeatures;