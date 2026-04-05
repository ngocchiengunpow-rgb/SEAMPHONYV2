import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            // Hiển thị nút khi cuộn xuống 500px
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 30 }}
                    transition={{ type: 'spring', bounce: 0.5 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 lg:bottom-12 lg:right-12 z-50 p-4 bg-text-main text-white rounded-full shadow-[0_10px_30px_rgba(15,23,42,0.3)] hover:bg-primary-cta hover:scale-110 active:scale-95 transition-all duration-300 border border-white/20 flex flex-col items-center justify-center group"
                    aria-label="Trở lên đầu trang"
                >
                    <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
