import { Link } from "react-router";


export const Logo = () => (
    <Link to={'/'} className="flex items-center gap-2">
        <div className="bg-white/10 p-2 rounded-xl border border-white/20">
            <span className="text-xl">🏫</span>
        </div>
        <div className='text-white'>
            <h1 className="text-xl font-bold tracking-tight">School<span className="text-purple-400">360</span></h1>
            <p className="text-[10px] text-slate-300 font-light -mt-1">শৈক্ষিক প্রতিষ্ঠানের ডিজিটাল সমাধান</p>
        </div>
    </Link>
);