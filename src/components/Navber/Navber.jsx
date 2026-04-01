import React, { useState } from 'react';
import { Logo } from '../Logo/Logo';
import { Button } from '../ui/button';
import { Link, NavLink, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react'; // Icons for the mobile toggle
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { label: 'মূল পাতা', path: '/মূল-পাতা' },
        { label: 'ফীচার', path: '/ফীচার' },
        { label: 'কোম্পানি', path: '/' },
        { label: 'সলিউশন', path: '/' },
        { label: 'পার্টনার', path: '/' }
    ];
  
    const location = useLocation()
    return (
    <header className="relative px-10 lg:px-28 ">
            {/* Desktop & Mobile Header Bar */}
            <div className={`relative ${location.pathname == "/" ? "bg-[#3a0463] " : "bg-[#3a0463] "}  z-50 flex items-center justify-between  py-5 md:px-16 border-b border-white/10  backdrop-blur-md`}>
                <Logo />

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex  items-center gap-10 text-sm font-medium text-slate-200">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.label}
                            to={item.path}
                            className="hover:text-white   relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all group-hover:w-full" />
                        </NavLink>
                    ))}
                </nav>

                {/* Right Action & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Button
                        variant="outline"
                        className="hidden sm:inline-flex rounded-xl border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950 transition-all font-bold px-6"
                    >
                        সফটওয়্যার ব্যবহার করতে চাই
                    </Button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
            {/* bg-gradient-to-br  from-[#1e1b4b] via-[#3b0764] to-[#0f172a] */}
            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Background Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed   inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Slide-in Menu */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-screen w-[75%] max-w-xs bg-slate-900 border-l border-white/10 p-8 z-50 lg:hidden"
                        >
                            <div className="flex  flex-col h-full">
                                <div className="mb-10 ">
                                    <Logo />
                                </div>

                                <nav className="flex flex-col gap-6">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            to={item.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-medium text-slate-300 hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>

                                <div className="mt-auto pt-10 border-t border-white/10">
                                    <Button
                                        className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-pink-600 text-white font-bold h-12"
                                    >
                                        সফটওয়্যার ব্যবহার করুন
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;