import { ChevronRight } from "lucide-react";
import { appFeatures } from "../Data/DataForFeatures";
import { motion } from "framer-motion";

const AndroidAppSection = () => {
   
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">

                <div className="inline-block  bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
                    সহজ এবং স্মার্ট
                    </div>
                    <br />
                <h2 className=" text-3xl font-black mt-4 text-purple-900 inline-block pb-2  ">
                    অ্যান্ড্রয়েড অ্যাপ
                </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                    {/* App Visual with Circular Gradient */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center order-2 lg:order-1">
                        <img src="https://i.ibb.co.com/8DxqZNXC/student-portal-app.png" alt="" />
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        {appFeatures.map((feature, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="flex flex-col mt-1 shrink-0">
                                    <ChevronRight className="w-5 h-5 text-red-600 stroke-[3px]" />
                                    <ChevronRight className="w-5 h-5 text-red-600 stroke-[3px] -mt-4 ml-1" />
                                </div>
                                <p className="text-slate-800 font-semibold text-sm md:text-base leading-relaxed">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AndroidAppSection