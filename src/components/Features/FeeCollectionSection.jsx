import { motion } from 'framer-motion';
import React from 'react';

const FeeCollectionSection = () => {
    return (
        <section className="py-16 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Top Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4a148c] mb-4">
                        ফি সংগ্রহ করা
                    </h2>
                    <div className="inline-block bg-gradient-to-r from-[#e91e63] to-[#f39c12] text-white px-8 py-2 rounded-lg font-bold shadow-md">
                        একদম সহজ
                    </div>
                </div>

                {/* Main Triple Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">

                    {/* Column 1: Agent & App (Pink Border) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        
                        className=" rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
                       
                        {/* Replace with your specific illustrations */}
                        <div className="py-8 flex justify-center">
                            <img src="https://i.ibb.co.com/Rp4s6kb6/bkash-payment.png" alt="Agent Payment" className="h-7xl object-contain" />
                        </div>
                    
                    </motion.div>

                    {/* Column 2: Institute Building (Central) */}
                    <motion.div
                        initial={{ opacity: 0, y: 80 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        
                        className="flex flex-col  items-center justify-center text-center">
                       
                        <div className="w-full ">
                            <img src="https://i.ibb.co.com/MxH69fdJ/school-college.png" alt="Institute" className="w-full mb-52 h-5xl" />
                        </div>
                    </motion.div>

                    {/* Column 3: Student Portal & Web (Green Border) */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                       
                        className="rounded-3xl p-6 relative overflow-hidden flex flex-col justify-between">
                        
                        <div className="py-8 flex justify-center">
                            <img src="https://i.ibb.co.com/0VBS6rkh/student-portal-android-app.png" alt="Mobile App Payment" className="h-7xl object-contain" />
                        </div>
                      
                    </motion.div>
                </div>

                {/* Bottom Banner Section */}
         
                <div className="max-w-4xl mx-auto mb-10">
                    <div className=" bg-gradient-to-r from-orange-400 to-pink-500  text-white text-center py-3 px-6 rounded-full font-bold text-sm md:text-base shadow-lg">
                        “স্কুল৩৬০” সফটওয়্যারটি ব্যবহার করে স্বয়ংক্রিয়ভাবে শিক্ষার্থীদের বেতন সংগ্রহ করুন বিকাশ, রকেট বা অনলাইন ব্যাংকিং এর মাধ্যমে
                    </div>
                </div>

                {/* Payment Partner Logos Section */}
                <div className=" rounded-[3rem] p-6 bg-white shadow-sm flex flex-wrap justify-center items-center gap-6 md:gap-10">
                    {/* Map through your partner logo images here */}
                    <img src="https://school360.com.bd/core_media/images/software_features/data_bank/supported_payment_methods.png" alt="Nagad" className="h-24 w-full grayscale-0" />
                  
                    
                </div>

            </div>
        </section>
    );
};

export default FeeCollectionSection;