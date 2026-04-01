import { motion } from 'framer-motion';

const HighlightBadge = ({ children }) => (
    <div className="inline-block bg-orange-500 text-white px-4 py-1 rounded text-xl md:text-sm font-bold my-1">
        {children}
    </div>
);

export const BenefitCard = ({ imageUrl, textAbove, highlightText, textBelow, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: delay }}
        whileHover={{ y: -5, boxShadow: "0 30px 50px -20px rgba(0,0,0,0.15)" }}
        viewport={{ once: true }}
        className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center group transition-all duration-300 shadow-lg"
    >
        {/* Image Container matching the visual style */}
        <div className="h-28 md:h-36 w-full flex items-center justify-center mb-6 overflow-hidden">
            <img
                src={imageUrl}
                alt={highlightText}
                className="max-h-full max-w-full object-contain"
                onError={(e) => { e.target.src = 'https://placehold.co/200x150?text=Asset'; }}
            />
        </div>

        {/* Text Area containing standard text and highlights */}
        <div className="space-y-1.5 flex flex-col items-center min-h-[90px] justify-center">
            <p className="text-slate-600 text-lg md:text-sm leading-snug">
                {textAbove}
            </p>
            <HighlightBadge>{highlightText}</HighlightBadge>
            <p className="text-slate-600 text-lg md:text-sm leading-snug font-medium">
                {textBelow}
            </p>
        </div>
    </motion.div>
);