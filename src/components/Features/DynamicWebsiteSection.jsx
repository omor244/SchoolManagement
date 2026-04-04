
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from 'lucide-react';
import { points } from '../Data/DataForFeatures';
import { motion } from "framer-motion";
const DynamicWebsiteSection = () => {
  

    return (
        <section className="py-16 bg-white font-sans">
            <div className="container mx-auto px-4 max-w-6xl">

                {/* Header Section */}
                <div className="text-center mb-12 space-y-2">
                    <Badge className="bg-gradient-to-r from-[#e91e63] to-[#f39c12] hover:opacity-90 border-none text-white px-6 py-1 text-sm rounded-md shadow-sm">
                        ইন্টারেক্টিভ
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#4a148c]">
                        ডাইনামিক ওয়েবসাইট
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base">
                        আপনার ইচ্ছামত ওয়েবসাইটটি সহজেই পরিচালনা করুন
                    </p>
                </div>

                {/* Content Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side: Visual Illustration */}
                    <div className=" ">
                     
                        <div className="">
                            < motion.div
                                initial={{ opacity: 0, x: -80 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="p-2 ">
                                <img
                                    src="https://i.ibb.co.com/twsVhgp0/responsive-dynamic-website.webp"
                                    alt="Dynamic w-full  Website Display"
                                    className=" "
                                />
                            </ motion.div>
                        </div>
                    </div>

                    {/* Right Side: Description and Bullet Points */}
                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6">
                        <p className="text-[#1a237e] text-sm md:text-base leading-relaxed text-justify font-medium">
                            স্পেট ইনোভেশন লিমিটেড গণপ্রজাতন্ত্রী বাংলাদেশ সরকার ও শিক্ষা প্রতিষ্ঠানের প্রকৃত চাহিদা বুঝতে পেরে ইতিমধ্যে ডেভেলপ করা হয়েছে ডাইনামিক ওয়েব সলিউশন। যা স্কুল৩৬০ সফটওয়্যারের সাথে সম্পূর্ণ ইন্টিগ্রেটেড। শিক্ষা প্রতিষ্ঠানের প্রতিদিনের তথ্যাবলী ম্যানুয়ালি ওয়েবসাইটে আপলোড করতে হবে না, সব স্বয়ংক্রিয় ভাবেই হয়ে যাবে। সরকারের শিক্ষা প্রশাসন পাবে বিভাগ, জেলা ও উপজেলা ভিত্তিক দৃষ্টি নন্দন তথ্য নির্ভর ড্যাশবোর্ড। এর ফলে, শতভাগ সফল হবে সরকারের উদ্দেশ্য এবং পূরণ হবে শিক্ষা প্রতিষ্ঠানের প্রকৃত চাহিদা। উপকৃত হবে ছাত্র-ছাত্রী, শিক্ষক মন্ডলী ও অভিভাবক। কারণ, সরকারের চাহিদার সাথে মিল রেখেই তৈরি হয়েছে শতভাগ কার্যকরী এই ডাইনামিক ওয়েব সলিউশন।
                        </p>

                        {/* Feature List */}
                        <ul className="space-y-3">
                            {points.map((text, i) => (
                                <li key={i} className="flex items-center gap-3 group">
                                    <div className="flex flex-col shrink-0">
                                        <ChevronRight className="w-5 h-5 text-[#e91e63] stroke-[3px]" />
                                        <ChevronRight className="w-5 h-5 text-[#e91e63] stroke-[3px] -mt-4 ml-1" />
                                    </div>
                                    <span className="text-slate-800 font-bold text-sm md:text-base group-hover:text-[#e91e63] transition-colors">
                                        {text}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default DynamicWebsiteSection;