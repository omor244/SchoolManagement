import React from 'react';
import { Logo } from '../Logo/Logo';
import { Button } from '../ui/button';
import { Link } from 'react-router';

const Navber = () => {
    return (
        <div>
            <div className="relative   z-30 flex items-center justify-between px-6 py-5 md:px-16 border-b border-white/10">
                <Logo />
                <nav className="hidden lg:flex items-center gap-10 text-sm font-medium text-slate-200">
                    {['মূল পাতা', 'ফীচার', 'কোম্পানি', 'সলিউশন', 'পার্টনার'].map(item => (
                        <Link key={item} to="/" className="hover:text-white transition">{item}</Link>
                    ))}
                </nav>
                <Button variant="outline" className="rounded-xl border-white/20 bg-transparent text-white hover:bg-white hover:text-slate-950 transition-all font-bold">
                    সফটওয়্যার ব্যবহার করতে চাই
                </Button>
            </div>
        </div>
    );
};

export default Navber;