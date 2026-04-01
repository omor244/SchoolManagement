import {
    FileText,
    Mail,
    MapPin,
    Phone,

} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { Logo } from "../Logo/Logo";
const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative pt-16 pb-8 overflow-hidden font-sans text-white">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-bl from-pink-500 via-purple-900 to-orange-400 -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Brand & About */}
                    <div className="space-y-6">
                       <Logo/>
                        <p className="text-sm leading-relaxed opacity-90">
                            “স্কুল৩৬০” একটি ক্লাউড-ভিত্তিক শিক্ষা প্রতিষ্ঠান ব্যবস্থাপনা সফটওয়্যার, যা স্কুল ব্যবস্থাপনা সফটওয়্যার নামেও পরিচিত। স্পেট ইনিশিয়েটিভ লিমিটেড বাংলাদেশের স্কুল, কলেজ, মাদ্রাসা এবং কোচিং সেন্টারের জন্য সফটওয়্যারটি ডিজাইন করেছে।
                        </p>

                        {/* Direct Icons - No Array/Mapping */}
                        <div className="flex gap-3">
                            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                <FaFacebook />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                <FaTwitter size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="p-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors">
                                <FaYoutube size={18} />
                            </a>
                        </div>

                        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs opacity-80 pt-2">
                            <a href="#" className="hover:underline">শর্তাবলী</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">গোপনীয়তা নীতি</a>
                            <span>|</span>
                            <a href="#" className="hover:underline">রিটার্ন এবং রিফান্ড নীতি</a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">আমাদের সম্পর্কে</h4>
                        <ul className="space-y-3 text-sm opacity-90">
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› মূল পাতা</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› মডিউল</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ফিচার</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› বৈশিষ্ট্য</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› সফটওয়্যার মূল্য</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› আইটি রিকোয়েস্ট করুন</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ই-কমার্স</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Features */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">বৈশিষ্ট্য</h4>
                        <ul className="space-y-3 text-sm opacity-90">
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ব্যবহার করা সহজ</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› সবসময় আপ টু ডেট</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ডিজিটাল হাজিরা সিস্টেম</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› শিক্ষার্থীদের অনলাইন বেতন আদায়</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ইন্টিগ্রেটেড এসএমএস</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› ইন্টিগ্রেটেড ডাইনামিক ওয়েবসাইট</a></li>
                            <li><a href="#" className="hover:translate-x-1 inline-block transition-transform">› প্রয়োজন অনুসারে কাস্টমাইজ করার সুবিধা</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 border-b border-white/20 pb-2 inline-block">যোগাযোগের তথ্য</h4>
                        <ul className="space-y-5 text-sm opacity-90">
                            <li className="flex gap-3">
                                <MapPin className="flex-shrink-0 text-orange-400" size={20} />
                                <span className="text-xs md:text-sm">১-এ দিল মোহাম্মদ রোড, হাউস নং-০৭, ব্লক-এ, ঢাকা উদ্যান, মোহাম্মদপুর, ঢাকা-১২০৭</span>
                            </li>
                            <li className="flex gap-3">
                                <MapPin className="flex-shrink-0 text-orange-400" size={20} />
                                <span className="text-xs md:text-sm">১০৫, শুক্রাবাদ, মিরপুর রোড, ঢাকা-১২০৭</span>
                            </li>
                            <li className="flex gap-3">
                                <FileText className="flex-shrink-0 text-orange-400" size={20} />
                                <span className="text-xs md:text-sm">ট্রেড লাইসেন্স নং - TRAD/DSCC/051559/2020</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="flex-shrink-0 text-orange-400" size={20} />
                                <span className="text-xs md:text-sm">hello@spatei.com</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="flex-shrink-0 text-orange-400" size={20} />
                                <span className="text-xs md:text-sm">+৮৮০ ১৮৭৭ ৭৭৭১৪৯</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center text-[10px] md:text-xs opacity-60">
                    <p>কপিরাইট © ২০১৫ - {currentYear}, স্কুল৩৬০ | কর্তৃক সর্বস্বত্ব সংরক্ষিত।</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;