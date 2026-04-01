
import {
    UserCircle, BookOpen, Wallet, Calculator,
    UserCheck, FileText, CreditCard, UserPlus,
    Banknote, Globe
} from 'lucide-react';
import {
    Fingerprint, Users, FileBarChart,
     LayoutDashboard, Box,
    Bus, BadgeDollarSign, BookOpenCheck,
    Mic2, MessageSquareText, Smartphone,
    CalendarDays, 
} from 'lucide-react';

export const modules = [
    { title: "শিক্ষার্থী ব্যবস্থাপনা", icon: <UserCircle className="w-5 h-5" />, color: "bg-green-500" },
    { title: "একাডেমিক ব্যবস্থাপনা", icon: <BookOpen className="w-5 h-5" />, color: "bg-green-600" },
    { title: "বেতন আদায় ব্যবস্থাপনা", icon: <Wallet className="w-5 h-5" />, color: "bg-blue-700" },
    { title: "বেসিক অ্যাকাউন্টস", icon: <Calculator className="w-5 h-5" />, color: "bg-blue-800" },
    { title: "শিক্ষক/শিক্ষার্থীর হাজিরা ব্যবস্থাপনা", icon: <UserCheck className="w-5 h-5" />, color: "bg-red-600" },
    { title: "রেজাল্ট ব্যবস্থাপনা", icon: <FileText className="w-5 h-5" />, color: "bg-red-500" },
    { title: "অনলাইন বেতন আদায়", icon: <CreditCard className="w-5 h-5" />, color: "bg-cyan-500" },
    { title: "অনলাইন ভর্তি ব্যবস্থাপনা", icon: <UserPlus className="w-5 h-5" />, color: "bg-cyan-600" },
    { title: "শিক্ষকদের বেতন ব্যবস্থাপনা", icon: <Banknote className="w-5 h-5" />, color: "bg-purple-600" },
    { title: "ডায়নামিক ওয়েব সল্যুশন", icon: <Globe className="w-5 h-5" />, color: "bg-purple-500" },
];


export const solutions = [
    { name: "পেমেন্ট গেটওয়ে", img: "https://school360.com.bd/core_media/images/onePointSolution/payment_gateway.svg", position: "top" },
    { name: "এসএমএস ও ইমেইল নোটিফিকেশন", img: "https://school360.com.bd/core_media/images/onePointSolution/sms_email_notifications.svg", position: "top-left" },
    { name: "অ্যাটেনডেন্স সলিউশন", img: "https://school360.com.bd/core_media/images/onePointSolution/attendance_solutions.svg", position: "top-right" },
    { name: "অনলাইন ভর্তি", img: "https://school360.com.bd/core_media/images/onePointSolution/data_export.svg", position: "right" },
    { name: "বারকোড স্ক্যানার", img: "https://school360.com.bd/core_media/images/onePointSolution/barcode_scanner.svg", position: "left" },
    { name: "ডাটা এক্সপোর্ট", img: "https://school360.com.bd/core_media/images/onePointSolution/data_export.svg", position: "bottom-left" },
    { name: "অ্যান্ড্রয়েড অ্যাপ", img: "https://school360.com.bd/core_media/images/onePointSolution/android_app.svg", position: "bottom" },
    { name: "ডাইনামিক ওয়েবসাইট", img: "https://school360.com.bd/core_media/images/onePointSolution/dynamic_website.svg", position: "bottom-right" },
];


export const moduless = [
    { title: "ডিজিটাল হাজিরা সিস্টেম", icon: <Fingerprint className="w-6 h-6 text-purple-600" /> },
    { title: "ছাত্র/ছাত্রী, শিক্ষক, কর্মচারী ব্যবস্থাপনা", icon: <Users className="w-6 h-6 text-red-500" /> },
    { title: "রেজাল্ট ব্যবস্থাপনা", icon: <FileBarChart className="w-6 h-6 text-pink-600" /> },
    { title: "স্টুডেন্ট একাডেমি ব্যবস্থাপনা এবং রিপোর্টস", icon: <Wallet className="w-6 h-6 text-orange-600" /> },
    { title: "বেসিক অ্যাকাউন্টস ব্যবস্থাপনা এবং রিপোর্টস", icon: <LayoutDashboard className="w-6 h-6 text-blue-600" /> },
    { title: "ইনভেন্টরি ব্যবস্থাপনা", icon: <Box className="w-6 h-6 text-purple-700" /> },
    { title: "পরিবহন ব্যবস্থাপনা", icon: <Bus className="w-6 h-6 text-red-600" /> },
    { title: "পে-রোল ব্যবস্থাপনা", icon: <BadgeDollarSign className="w-6 h-6 text-pink-700" /> },
    { title: "লেকচার, পাঠ পরিকল্পনা ও বাড়ির কাজ", icon: <BookOpenCheck className="w-6 h-6 text-blue-700" /> },
    { title: "ভয়েস এসএমএস", icon: <Mic2 className="w-6 h-6 text-indigo-600" /> },
    { title: "মাস্কিং এবং নন মাস্কিং এসএমএস নোটিফিকেশন", icon: <MessageSquareText className="w-6 h-6 text-blue-500" /> },
    { title: "শিক্ষার্থী ও শিক্ষক এবং অভিভাবক পোর্টাল", icon: <Smartphone className="w-6 h-6 text-purple-500" /> },
    { title: "ক্লাস রুটিন ও পরীক্ষার রুটিন ব্যবস্থাপনা", icon: <CalendarDays className="w-6 h-6 text-pink-500" /> },
    { title: "অনলাইনে ভর্তি প্রক্রিয়া সম্পন্ন করা", icon: <UserPlus className="w-6 h-6 text-red-400" /> },
    { title: "সম্পূর্ণরূপে ইন্টিগ্রেটেড ডাইনামিক ওয়েবসাইট", icon: <Globe className="w-6 h-6 text-purple-400" /> },
];