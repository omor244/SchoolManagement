
import { motion } from 'framer-motion';
import { moduless } from '../Data/Data';


const OtherModules = () => {
  
    

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section className="py-20 bg-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                        অন্যান্য মডিউল
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto mt-4 rounded-full"></div>
                </div>

                {/* 3-Column Grid matching the design */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {moduless.map((module, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
                            className="bg-white p-5 rounded-xl border border-slate-100 flex items-center gap-5 group transition-all duration-300 cursor-default"
                        >
                            {/* Icon Container with subtle background hover effect */}
                            <div className="flex-shrink-0 p-3 rounded-lg bg-slate-50 group-hover:bg-white transition-colors duration-300">
                                {module.icon}
                            </div>

                            {/* Module Text */}
                            <h3 className="text-slate-700 font-bold text-sm md:text-base leading-snug group-hover:text-slate-900 transition-colors">
                                {module.title}
                            </h3>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OtherModules;