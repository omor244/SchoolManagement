
import { motion } from 'framer-motion';
import { benefitData } from '../Data/DataForHome';
import { BenefitCard } from '../Card/BenefitCard';






const BenefitsSection = () => {


   

    return (
        <section className="py-20 bg-[#f4f7fa] font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Headings */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="inline-block bg-gradient-to-r my-5 from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg"
                    >
                        কেন “স্কুল৩৬০” সফটওয়্যারটি অনন্য?
                    </motion.div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-indigo-950 tracking-tight leading-snug">
                        কিভাবে “স্কুল৩৬০” সফটওয়্যারটি আপনার উপকার করতে পারে?
                    </h2>
                </div>

                {/* The 3-Column Grid matching reference screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                    {benefitData.map((benefit, index) => (
                        <BenefitCard
                            key={index}
                            {...benefit}
                            // Stagger the entrance for better UX
                            delay={(index % 3) * 0.15}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};

export default BenefitsSection;