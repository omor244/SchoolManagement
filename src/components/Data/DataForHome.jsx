
import {
    UserCircle, BookOpen, Wallet, Calculator,
    UserCheck, FileText, CreditCard, UserPlus,
    Banknote, Globe,
    PieChart,
    Mail,
    Printer,
    Laptop
} from 'lucide-react';
import {
    Fingerprint, Users, FileBarChart,
     LayoutDashboard, Box,
    Bus, BadgeDollarSign, BookOpenCheck,
    Mic2, MessageSquareText, Smartphone,
    CalendarDays, Infinity, Map, LayoutGrid, School, UserCog, Heart
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

export const features = [
    {
        title: "নন-স্টপ সার্ভিস",
        description: "আমাদের সফটওয়্যারটি আপনার পরিষেবায় অবিরাম যা সর্বদা আপনাকে পরিবেশন করবে।",
        icon: <Infinity className="w-8 h-8 text-white" />,
        bgColor: "bg-orange-500"
    },
    {
        title: "২৪/৭ অ্যাক্সেসযোগ্য",
        description: "আপনি ইন্টারনেট সংযোগ সহ যেকোনো স্মার্ট ডিভাইস ব্যবহার করে যেকোনো স্থান থেকে যে কোনো সময় সফটওয়্যারটি অ্যাক্সেস করতে পারবেন।",
        icon: <Map className="w-8 h-8 text-white" />,
        bgColor: "bg-red-400"
    },
    {
        title: "অটো রিপোর্ট",
        description: "প্রতিবেদনের জন্য আর নয় অপেক্ষা, সক্রিয়ভাবে আপনার প্রয়োজন মত আর্থিক রিপোর্ট পাবেন।",
        icon: <LayoutGrid className="w-8 h-8 text-white" />,
        bgColor: "bg-orange-600"
    }
];

export const Features = [
    {
        title: "এইচআর উপস্থিতি রিপোর্ট",
        description: "আপনার কর্মীদের দৈনিক উপস্থিতির প্রতিবেদন পেয়ে যাবেন।",
        icon: <UserCheck className="w-6 h-6 text-white" />,
        color: "bg-red-400"
    },
    {
        title: "অটো ডে ক্লোজিং রিপোর্ট",
        description: "স্বয়ংক্রিয়ভাবে আপনার প্রতিষ্ঠানের দৈনিক আয়, ব্যয়ের রিপোর্ট পেয়ে যাবেন।",
        icon: <PieChart className="w-6 h-6 text-white" />,
        color: "bg-orange-500"
    },
    {
        title: "এসএমএস/ই-মেইল বিজ্ঞপ্তি",
        description: "আপনার স্মার্টফোনে এসএমএস / ই-মেইল বিজ্ঞপ্তি পেয়ে যাবেন।",
        icon: <Mail className="w-6 h-6 text-white" />,
        color: "bg-orange-400"
    }
];

export const benefitData = [
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/transparent-accounts.svg", textAbove: "হিসাব বিভাগকে নিয়ন্ত্রণ করুন", highlightText: "স্বচ্ছতার সঙ্গে", textBelow: "আর থাকুন নিশ্চিত ও ঝুঁকিমুক্ত" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/error-free-result.svg", textAbove: "অতিরিক্ত ঝামেলা ছাড়া", highlightText: "নির্ভুলভাবে", textBelow: "যথাসময়ে ফলাফল প্রকাশ করুন" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/reports-in-seconds.svg", textAbove: "প্রতিবেদনের বিবৃতি পান", highlightText: "মুহূর্তে", textBelow: "এবং কর্মক্ষমতা পর্যবেক্ষণ করুন" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/moneyreceipt-in-tenseconds.svg", textAbove: "বেতনের রশিদ তৈরি করুন", highlightText: "১০ সেকেন্ডে", textBelow: "এবং পেমেন্ট এসএমএস পান" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/focusmore.svg", textAbove: "প্রাতিষ্ঠানিক কাজ কমিয়ে", highlightText: "মনোযোগী হউন", textBelow: "শিক্ষার্থীদের পড়াশোনার প্রতি" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/relationship-buildup.svg", textAbove: "শিক্ষক, শিক্ষার্থী ও অভিভাবকদের মধ্যে", highlightText: "সুসম্পর্ক", textBelow: "স্থাপনে সাহায্য করবে" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/reputation.svg", textAbove: "শিক্ষক, অভিভাবক ও শিক্ষার্থীর সন্তুষ্টির সাথে", highlightText: "প্রতিষ্ঠানের খ্যাতি", textBelow: "বৃদ্ধি করুন" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/security-backup.svg", textAbove: "উন্নত ও শক্তিশালী ডাটা", highlightText: "নিরাপত্তা ও ব্যাকআপ", textBelow: "গোপনীয়তা এবং নিরাপত্তা নিশ্চিত করুন" },
    { imageUrl: "https://school360.com.bd/core_media/images/school360-benefits/customer-support.svg", textAbove: "পাবেন আন্তরিক", highlightText: "সাপোর্ট", textBelow: "নিবেদিত ও বিশ্বস্ত টিম দ্বারা" },
];

export const metrics = [
    {
        time: "৩০ সেকেন্ডে",
        label: "নতুন ছাত্র নিবন্ধন",
        icon: <UserPlus className="w-8 h-8 text-indigo-900" />,
        delay: 0.1
    },
    {
        time: "২০ সেকেন্ডে",
        label: "অনলাইন ভর্তি",
        icon: <Laptop className="w-8 h-8 text-indigo-900" />,
        delay: 0.2
    },
    {
        time: "১০ সেকেন্ডে",
        label: "ফি পেমেন্ট",
        icon: <Wallet className="w-8 h-8 text-indigo-900" />,
        delay: 0.3
    },
    {
        time: "২০ সেকেন্ডে",
        label: "ফলাফল প্রকাশ করুন",
        icon: <Printer className="w-8 h-8 text-indigo-900" />,
        delay: 0.4
    }
];

export const divisions = [
    { name: "সিলেট", count: "৫০+", color: "bg-red-600", position: "top" },
    { name: "রাজশাহী", count: "৮০+", color: "bg-purple-700", position: "top-left" },
    { name: "ময়মনসিংহ", count: "৫০+", color: "bg-lime-500", position: "top-right" },
    { name: "খুলনা", count: "২০০+", color: "bg-pink-600", position: "left" },
    { name: "বরিশাল", count: "১০০+", color: "bg-rose-500", position: "right" },
    { name: "চট্টগ্রাম", count: "২০০+", color: "bg-orange-500", position: "bottom-left" },
    { name: "ঢাকা", count: "১৫০+", color: "bg-emerald-500", position: "bottom-right" },
    { name: "রংপুর", count: "২০০+", color: "bg-cyan-500", position: "bottom" },
];

export const getPosition = (pos) => {
    switch (pos) {
        case "top": return "lg:-top-12 lg:left-1/2 lg:-translate-x-1/2";
        case "top-left": return "lg:top-4 lg:left-4";
        case "top-right": return "lg:top-4 lg:right-4";
        case "left": return "lg:top-1/2 lg:-left-16 lg:-translate-y-1/2";
        case "right": return "lg:top-1/2 lg:-right-16 lg:-translate-y-1/2";
        case "bottom-left": return "lg:bottom-4 lg:left-4";
        case "bottom-right": return "lg:bottom-4 lg:right-4";
        case "bottom": return "lg:-bottom-12 lg:left-1/2 lg:-translate-x-1/2";
        default: return "";
    }
};

export const stats = [
    {
        count: "৯৯৬+",
        label: "স্কুল রেজিস্ট্রেশন",
        icon: <School className="w-10 h-10 text-white/90" />,
        delay: 0.1
    },
    {
        count: "৪৭০৮০০+",
        label: "শিক্ষার্থী নিবন্ধন",
        icon: <Users className="w-10 h-10 text-white/90" />,
        delay: 0.2
    },
    {
        count: "২১০৩০+",
        label: "শিক্ষক নিবন্ধন",
        icon: <UserCog className="w-10 h-10 text-white/90" />,
        delay: 0.3
    },
    {
        count: "১০৫০৮০+",
        label: "অভিভাবক নিবন্ধন",
        icon: <Heart className="w-10 h-10 text-white/90" />,
        delay: 0.4
    }
];


export const positions = [
    "row-1 col-start-5", // Top
    "row-2 col-start-8", // Top-Right
    "row-5 col-start-9", // Right
    "row-8 col-start-8", // Bottom-Right
    "row-9 col-start-5", // Bottom
    "row-8 col-start-2", // Bottom-Left
    "row-5 col-start-1", // Left
    "row-2 col-start-2", // Top-Left
];

export const WaveSeparator = () => (
    <div className="absolute bottom-0 left-0 w-full leading-[0] z-10">
        <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block h-[40px] sm:h-[60px] md:h-[100px] lg:h-[150px] w-full"
        >
            <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C100.33,42.33,205.33,68.33,321.39,56.44Z"
                className="fill-white"
            />
        </svg>
    </div>
);