import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ContactPage = () => {
    return (
        <section className="py-20 bg-slate-50/50 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <Badge className="bg-[#4a148c] hover:bg-[#310d5d] text-white px-6 py-3 text-lg rounded-md shadow-md">
                        যোগাযোগ করুন
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">
                        যেকোনো প্রয়োজনে আমাদের জানান
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        আমাদের সফটওয়্যার সম্পর্কে বিস্তারিত জানতে অথবা ডেমো দেখতে আজই আমাদের সাথে যোগাযোগ করুন।
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    {/* Left Side: Contact Info & Form */}
                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-purple-100 rounded-full text-[#4a148c]">
                                        <Phone size={20} />
                                    </div>
                                    <div className="text-xs font-bold text-slate-800">+8801792918454</div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-pink-100 rounded-full text-[#e91e63]">
                                        <Mail size={20} />
                                    </div>
                                    <div className="text-xs font-bold text-slate-800">school360@gmail.com</div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="text-xs font-bold text-slate-800">Sherpur, Rajshahi, BD</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                            <CardContent className="p-8 space-y-6">
                                <h3 className="text-xl font-bold text-[#1a237e]">সরাসরি মেসেজ পাঠান</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input placeholder="আপনার নাম" className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500" />
                                    <Input placeholder="মোবাইল নাম্বার" className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500" />
                                </div>
                                <Input placeholder="ইমেইল এড্রেস" className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500" />
                                <Textarea placeholder="আপনার মেসেজ লিখুন..." className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500 min-h-[150px]" />
                                <Button className="w-full bg-[#4a148c] text-white hover:bg-[#310d5d] py-6 text-lg font-bold rounded-xl gap-2">
                                    <Send size={18} /> মেসেজ পাঠান
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side: Map */}
                    <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14539.344445353198!2d89.4182963!3d24.3522197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fda639f7831d3d%3A0xc3c94f509e530663!2sSherpur!5e0!3m2!1sen!2sbd!4v1712211234567!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>

                        {/* Overlay Card for Map */}
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50">
                            <p className="text-sm font-bold text-slate-800">হেড অফিস:</p>
                            <p className="text-xs text-slate-600 leading-relaxed">
                                স্পেট ইনোভেশন লিমিটেড, শেরপুর, রাজশাহী বিভাগ, বাংলাদেশ।
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;