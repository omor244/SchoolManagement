
import { motion } from 'framer-motion';
import { Features } from '../Data/DataForHome';

const InstitutionInHands = () => {
   

    return (
        <section className="py-20 bg-slate-50 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Content Column */}
                <div className="space-y-8">
                    <div className="space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="inline-block bg-orange-500 text-white px-6 py-2 rounded-lg font-bold shadow-md"
                        >
                            নিশ্চিন্তে থাকুন
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                            আপনার প্রতিষ্ঠান এখন হাতের মুঠোয়
                        </h2>
                        <p className="text-slate-500 max-w-lg leading-relaxed">
                            এসএমএস এর মাধ্যমে প্রতিদিনের আর্থিক প্রতিবেদন পেয়ে যাবেন। রিপোর্টের জন্য আপনার অ্যাকাউন্টস ম্যানেজারকে জিজ্ঞাসা করার প্রয়োজন নেই।
                        </p>
                    </div>

                    <div className="space-y-6">
                        {Features.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-start gap-4 group"
                            >
                                <div className={`${item.color} p-3 rounded-xl shadow-lg transition-transform group-hover:scale-110`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-800 text-lg">{item.title}</h4>
                                    <p className="text-slate-500 text-sm">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Graphic Column */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="relative flex justify-center lg:justify-end"
                >
                    {/* Main Illustration Placeholder */}
                    <div className="relative w-full max-w-lg">
                        <img
                            src="https://school360.com.bd/core_media/images/app-description/sms.svg"
                            alt="Hand holding phone illustration"
                            className="w-full h-auto drop-shadow-2xl"
                            onError={(e) => { e.target.src = 'https://placehold.co/600x400?text=Hand+Interaction+Graphic'; }}
                        />

                      
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default InstitutionInHands;