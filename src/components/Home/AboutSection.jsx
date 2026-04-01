
import { motion } from 'framer-motion';

const AboutSection = () => {
    // Animation variants for a professional reveal
    const fadeInVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section className="py-16 px-6 md:py-24 bg-white text-slate-800 overflow-hidden">
            <div className="max-w-5xl mx-auto text-center space-y-8">

                {/* "About Us" Badge/Button */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className="inline-block"
                >
                    <div className="inline-block bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-2 rounded-lg font-bold text-lg shadow-lg">
                        আমাদের সম্পর্কে
                    </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInVariants}
                    className="text-3xl md:text-4xl font-extrabold text-[#1e1b4b]"
                >
                    “স্কুল৩৬০” - শিক্ষা প্রতিষ্ঠানের জন্য সব
                </motion.h2>

                {/* Description Text Content */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
                    }}
                    className="text-slate-600 leading-relaxed text-base md:text-lg space-y-6 text-justify md:text-center"
                >
                    <p>
                        “স্কুল৩৬০” একটি ক্লাউড-ভিত্তিক শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা সফটওয়্যার, যা স্কুল ব্যবস্থাপনা সফটওয়্যার নামেও পরিচিত।
                        স্পেট ইননিশিয়েটিভ লিমিটেড বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা, কোচিং সেন্টার এবং জাতীয় বিশ্ববিদ্যালয়ের অধিভুক্ত
                        কলেজগুলির জন্য সফটওয়্যারটি ডিজাইন করেছে।
                    </p>

                    <p>
                        তথ্যপ্রযুক্তির এই যুগে দেশের শিক্ষা প্রতিষ্ঠানের ডিজিটালাইজেশন খুব জরুরি। শিক্ষা প্রতিষ্ঠান পরিচালনায় বিভিন্ন সমস্যা
                        সমাধানের জন্য “স্কুল৩৬০” শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা সফটওয়্যারটি ২০১৫ সালে যাত্রা শুরু করে। “স্কুল৩৬০” স্কুল,
                        কলেজ, মাদ্রাসা, কোচিং সেন্টার, পলিটেকনিক এবং ট্রেনিং সেন্টারে সফলভাবে ব্যবহৃত হচ্ছে। এটি যেকোনো জায়গা থেকে
                        এবং যেকোনো স্মার্ট ডিভাইসে খুব সহজে ব্যবহার করা যায়। আপনার শিক্ষা প্রতিষ্ঠানের জন্য “স্কুল৩৬০” সফটওয়্যারটি
                        আদর্শ ইআরপি সফটওয়্যার, যা দক্ষতা বাড়ায়, প্রতিষ্ঠান পরিচালনা সহজ করে, ছাত্র ও অভিভাবকদের ভালো সেবা প্রদান
                        নিশ্চিত করে এবং খরচ কমিয়ে প্রতিষ্ঠানের লাভজনকতা বাড়ায়। “স্কুল৩৬০” একটি অনন্য সফটওয়্যার যা সময়ের অপব্যবহার
                        এবং কাজের পুনরাবৃত্তি রোধ করে প্রতিষ্ঠানের কর্মীদের দক্ষতা এবং কার্যকারিতা বাড়ায়। “স্কুল৩৬০” আপনাকে সমস্ত
                        কার্যক্রমের সামগ্রিক স্বচ্ছতার আশ্বাস দেয়।
                    </p>

                    <p>
                        “স্কুল৩৬০” শিক্ষা প্রতিষ্ঠানের আধুনিকীকরণ এবং স্মুথ-ভাবে কাজগুলো পরিচালনায় বিশেষ অবদান রাখার জন্য ২০২০ সালে
                        'জাতীয় আইসিটি পুরস্কার'-এ চ্যাম্পিয়ন ভূষিত হয়। সুতরাং আমাদের অভিজ্ঞতা থেকে, আমরা বলতে পারি - আপনার
                        প্রতিষ্ঠানকে ডিজিটাল প্রতিষ্ঠানে রূপান্তর করতে “স্কুল৩৬০” হবে সব থেকে সেরা সফটওয়্যার।
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;