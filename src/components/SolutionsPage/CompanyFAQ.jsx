import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { faqData } from '../Data/DataForSolution';
import { ChevronDown } from "lucide-react";

const CompanyFAQ = () => {
    return (
        <section className="py-20 bg-slate-50/50 font-sans">
            <div className="container mx-auto px-4 max-w-4xl">

                {/* Header Section */}
                <div className="text-center mb-12 space-y-4">
                    <Badge className="bg-[#4a148c] hover:bg-[#310d5d] text-white px-6 py-1.5 text-lg rounded-md shadow-md">
                        প্রশ্ন উত্তর
                    </Badge>
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                        আমরা বিশ্বাস করি আপনার মাথায় অনেক প্রশ্নের উদয় হয়েছে আমাদের সফটওয়্যার নিয়ে এবং আপনি ওই প্রশ্নগুলির উত্তর খোঁজার জন্য এইখানে এসেছেন। আপনার সহযোগিতার জন্য আমাদের জিজ্ঞাসা কৃত প্রশ্নের উত্তর নিম্নে দেয়ার প্রচেষ্টা করেছি মাত্র।
                    </p>
                </div>

                {/* Accordion Questions */}
                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqData.map((item, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-none bg-white rounded-xl shadow-sm px-4 overflow-hidden data-[state=open]:shadow-md transition-all duration-500 ease-in-out"
                        >
                            <AccordionTrigger
                                className="hover:no-underline py-5 text-left text-[#1a237e] font-bold text-sm md:text-base leading-snug cursor-pointer group flex flex-row items-center justify-start gap-4 transition-all duration-300"
                            >
                            

                                <span className="flex-1 text-left">{item.question}</span>
                            </AccordionTrigger>

                            {/* Answer Content - Left padding matches the icon + gap width */}
                            <AccordionContent className="text-slate-600 pb-5 leading-relaxed text-sm md:text-base border-t border-slate-50 mt-2 pt-4 pl-9 transition-all duration-500 ease-in-out">
                                {item.answer ? item.answer : "এই প্রশ্নের বিস্তারিত উত্তর জানতে আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।"}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    );
};

export default CompanyFAQ;