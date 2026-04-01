import React from 'react';
import { motion } from 'framer-motion';

// Component for the specific orange highlight badge
const HighlightBadge = ({ children }) => (
    <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded text-xs md:text-sm font-bold my-1">
        {children}
    </div>
);

// Generic benefit card to standardize the 9 items
const BenefitCard = ({ imageUrl, textAbove, highlightText, textBelow, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ y: -5, boxShadow: "0 15px 30px -10px rgba(0,0,0,0.15)" }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group transition-all duration-300 shadow-sm"
    >
        {/* Image Container matching the visual style */}
        <div className="h-28 md:h-32 w-full flex items-center justify-center mb-6 overflow-hidden">
            <img
                src={imageUrl}
                alt={highlightText}
                className="max-h-full max-w-full object-contain"
                onError={(e) => { e.target.src = 'https://placehold.co/200x150?text=Asset'; }}
            />
        </div>

        {/* Text Area containing standard text and highlights */}
        <div className="space-y-1.5 flex flex-col items-center min-h-[90px] justify-center">
            <p className="text-slate-600 text-xs md:text-sm leading-snug">
                {textAbove}
            </p>
            <HighlightBadge>{highlightText}</HighlightBadge>
            <p className="text-slate-600 text-xs md:text-sm leading-snug font-medium">
                {textBelow}
            </p>
        </div>
    </motion.div>
);

const BenefitsSection = () => {
    // Standard base URL for the assets shown in the screenshots
    const assetBaseUrl = "https://school360.com.bd/core_media/images/howItBenefitsYou/";

    const benefitData = [
        { imageUrl: assetBaseUrl + "Accounting.png", textAbove: "হিসাব বিভাগকে নিয়ন্ত্রণ করুন", highlightText: "স্বচ্ছতার সঙ্গে", textBelow: "আর থাকুন নিশ্চিত ও ঝুঁকিমুক্ত" },
        { imageUrl: assetBaseUrl + "Result.png", textAbove: "অতিরিক্ত ঝামেলা ছাড়া", highlightText: "নির্ভুলভাবে", textBelow: "যথাসময়ে ফলাফল প্রকাশ করুন" },
        { imageUrl: assetBaseUrl + "Reports.png", textAbove: "প্রতিবেদনের বিবৃতি পান", highlightText: "মুহূর্তে", textBelow: "এবং কর্মক্ষমতা পর্যবেক্ষণ করুন" },
        { imageUrl: assetBaseUrl + "FeesSms.png", textAbove: "বেতনের রশিদ তৈরি করুন", highlightText: "১০ সেকেন্ডে", textBelow: "এবং পেমেন্ট এসএমএস পান" },
        { imageUrl: assetBaseUrl + "ReduceWork.png", textAbove: "প্রাতিষ্ঠানিক কাজ কমিয়ে", highlightText: "মনোযোগী হউন", textBelow: "শিক্ষার্থীদের পড়াশোনার প্রতি" },
        { imageUrl: assetBaseUrl + "Trust.png", textAbove: "শিক্ষক, শিক্ষার্থী ও অভিভাবকদের মধ্যে", highlightText: "সুসম্পর্ক", textBelow: "স্থাপনে সাহায্য করবে" },
        { imageUrl: assetBaseUrl + "Reputation.png", textAbove: "শিক্ষক, অভিভাবক ও শিক্ষার্থীর সন্তুষ্টির সাথে", highlightText: "প্রতিষ্ঠানের খ্যাতি", textBelow: "বৃদ্ধি করুন" },
        { imageUrl: assetBaseUrl + "DataBackup.png", textAbove: "উন্নত ও শক্তিশালী ডাটা", highlightText: "নিরাপত্তা ও ব্যাকআপ", textBelow: "গোপনীয়তা এবং নিরাপত্তা নিশ্চিত করুন" },
        { imageUrl: assetBaseUrl + "Support.png", textAbove: "পাবেন আন্তরিক", highlightText: "সাপোর্ট", textBelow: "নিবেদিত ও বিশ্বস্ত টিম দ্বারা" },
    ];

    return (
        <section className="py-20 bg-slate-50 font-sans">
            <div className="max-w-7xl mx-auto px-6">

                {/* Section Headings */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="bg-indigo-950 text-white px-6 py-1.5 rounded-lg text-sm md:text-base font-medium shadow-md mb-5"
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