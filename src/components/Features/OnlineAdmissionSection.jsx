import React from 'react';
import { ChevronRight } from 'lucide-react';
import { admissionFeatures } from '../Data/DataForFeatures';
import { motion } from "framer-motion";
const OnlineAdmissionSection = () => {


    return (
        <section className="py-16 bg-[#f8f9fb]">
            <div className="container mx-auto px-4">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <div className="inline-block my-5 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
                        সহজ এবং স্মার্ট
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4a148c] mb-4">
                        অনলাইন ভর্তি ব্যবস্থাপনা
                    </h2>
                    <p className="text-gray-600 italic">
                        শিক্ষার্থীগণ বাসা থেকে অনলাইনে ভর্তির আবেদন করতে পারবে
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
                    {/* List Content */}
                    <div className="w-full lg:w-1/2 space-y-4">
                        {admissionFeatures.map((feature, index) => (
                            <div key={index} className="flex items-start gap-3 group">
                                <div className="mt-1">
                                    <ChevronRight className="w-5 h-5 text-[#e67e22] stroke-[3px]" />
                                    <ChevronRight className="w-5 h-5 text-[#e67e22] stroke-[3px] -mt-4 ml-1" />
                                </div>
                                <p className="text-[#1a237e] font-bold text-md leading-relaxed">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Image Content */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: 80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative p-2 bg-white shadow-2xl rounded-sm">
                            <img
                                src="https://i.ibb.co.com/XxVy4xYt/online-admission-management.webp"
                                alt="Online Admission Laptop"
                                className="w-full max-w-lg h-auto block"
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OnlineAdmissionSection;