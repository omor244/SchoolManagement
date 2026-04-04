"use client";
import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Swal from 'sweetalert2';

const ContactPage = () => {
    const form = useRef();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

  
    useEffect(() => {
        emailjs.init("7acannAX0nl9telhx");
    }, []);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const SERVICE_ID = "service_gn8o2lh";
        const TEMPLATE_ID = "template_fj3tvsa";
        const PUBLIC_KEY = "7acannAX0nl9telhx";

        try {
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY);

            setIsSubmitting(false);
            setIsSuccess(true);
            e.target.reset(); // ফর্ম খালি করা
            Toast.fire({
                icon: 'success',
                title: 'মেসেজটি সফলভাবে পাঠানো হয়েছে!',
                background: '#f0fdf4',
                color: '#166534',
                iconColor: '#22c55e'
            });
            setTimeout(() => setIsSuccess(false), 5000);
        } catch (error) {
            console.error("EmailJS Error:", error);
            setIsSubmitting(false);
            Toast.fire({
                icon: 'error',
                title: 'দুঃখিত, পাঠানো সম্ভব হয়নি!',
                text: 'আবার চেষ্টা করুন।',
                background: '#fef2f2',
                color: '#991b1b',
                iconColor: '#ef4444'
            });
        }
    };

    return (
        <section className="py-20 bg-slate-50/50 font-sans">
            <div className="container mx-auto px-4 max-w-7xl">

                {/* Header Section */}
                <div className="text-center mb-16 space-y-4">
                    <Badge className="bg-[#4a148c] hover:bg-[#310d5d] text-white px-6 py-3 text-lg rounded-md shadow-md">
                        যোগাযোগ করুন
                    </Badge>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900">যেকোনো প্রয়োজনে আমাদের জানান</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">আমাদের সফটওয়্যার সম্পর্কে বিস্তারিত জানতে অথবা ডেমো দেখতে আজই আমাদের সাথে যোগাযোগ করুন।</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8">
                        {/* Contact Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-purple-100 rounded-full text-[#4a148c]"><Phone size={20} /></div>
                                    <div className="text-xs font-bold text-slate-800">+8801792918454</div>
                                </CardContent>
                            </Card>
                            <Card className="border-none shadow-sm bg-white hover:shadow-md transition-shadow">
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-3">
                                    <div className="p-3 bg-pink-100 rounded-full text-[#e91e63]"><Mail size={20} /></div>
                                    <div className="text-xs font-bold text-slate-800">school360@gmail.com</div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Automatic Contact Form */}
                        <Card className="border-none shadow-xl bg-white rounded-3xl overflow-hidden">
                            <CardContent className="p-8 space-y-6">
                                <h3 className="text-xl font-bold text-[#1a237e]">সরাসরি মেসেজ পাঠান</h3>

                                <form ref={form} onSubmit={sendEmail} className="space-y-4">
                                    {/* আপনার টেমপ্লেটের {{title}} ভেরিয়েবলের জন্য একটি ডিফল্ট ভ্যালু */}
                                    <input type="hidden" name="title" value="Software Inquiry" />

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {/* টেমপ্লেটের {{name}} এর সাথে মিল রেখে name="name" দেওয়া হয়েছে */}
                                        <Input
                                            name="name"
                                            required
                                            placeholder="আপনার নাম"
                                            className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                        />
                                        <Input
                                            name="user_phone"
                                            required
                                            placeholder="মোবাইল নাম্বার"
                                            className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                        />
                                    </div>
                                    <Input
                                        name="user_email"
                                        type="email"
                                        required
                                        placeholder="ইমেইল এড্রেস"
                                        className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500"
                                    />
                                    {/* টেমপ্লেটের {{message}} এর সাথে মিল রেখে name="message" */}
                                    <Textarea
                                        name="message"
                                        required
                                        placeholder="আপনার মেসেজ লিখুন..."
                                        className="bg-slate-50 border-none focus-visible:ring-2 focus-visible:ring-purple-500 min-h-[150px]"
                                    />

                                    <Button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-6 text-lg font-bold rounded-xl gap-2 transition-all duration-300 ${isSuccess ? 'bg-green-600 hover:bg-green-700' : 'bg-[#4a148c] hover:bg-[#310d5d]'} text-white`}
                                    >
                                        {isSubmitting ? (
                                            <><Loader2 className="animate-spin" /> পাঠানো হচ্ছে...</>
                                        ) : isSuccess ? (
                                            <><CheckCircle /> মেসেজ পাঠানো হয়েছে!</>
                                        ) : (
                                            <><Send size={18} /> মেসেজ পাঠান</>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Side: Map */}
                    <div className="h-full min-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                        {/* Map placeholder */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14541.488663842187!2d89.44498393527236!3d24.333501700684617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fce03405786523%3A0xc39f96b965c27634!2sSherpur!5e0!3m2!1sen!2sbd!4v1712232000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                        <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50">
                            <p className="text-sm font-bold text-slate-800">হেড অফিস:</p>
                            <p className="text-xs text-slate-600 leading-relaxed">স্পেট ইনোভেশন লিমিটেড, শেরপুর, রাজশাহী বিভাগ, বাংলাদেশ।</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactPage;