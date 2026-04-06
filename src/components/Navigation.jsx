import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Tầm nhìn', href: '#hero' },
    { name: 'Vấn đề', href: '#problem' },
    { name: 'Công nghệ', href: '#solution' },
    { name: 'Mô hình', href: '#canvas' },
    { name: 'SWOT', href: '#swot' },
    { name: 'Lợi thế', href: '#market' },
    { name: 'Tài chính', href: '#financial' },
    { name: 'Thành tựu', href: '#achievements' },
    { name: 'ESG', href: '#esg' },
    { name: 'Đội ngũ', href: '#founders' },
];

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-primary-bg/80 backdrop-blur-xl border-border/50 py-3 shadow-sm' : 'bg-transparent py-5 border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-3 group shrink-0 mr-4 lg:mr-auto">
                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shrink-0">
                        {/* Vui lòng lưu file logo đã tách nền của bạn thành public/logo.png */}
                        <img src="/logo.png" alt="Seamphony Logo" className="w-full h-full object-contain drop-shadow transition-transform duration-300 group-hover:scale-105" onError={(e) => { e.currentTarget.style.display = 'none'; e.currentTarget.nextElementSibling.style.display = 'flex'; }} />
                        <div className="hidden w-full h-full bg-primary-cta rounded-lg items-center justify-center text-white font-heading font-bold text-xl drop-shadow">S</div>
                    </div>
                    <span className="font-heading font-extrabold text-lg md:text-xl text-text-main tracking-tight group-hover:text-primary-cta transition-colors">SEAMPHONY</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-3 xl:gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="whitespace-nowrap text-sm font-semibold tracking-wide text-text-muted hover:text-primary-cta transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-primary-cta hover:after:w-full after:transition-all after:duration-300"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#the-ask" className="whitespace-nowrap ml-2 px-6 py-2.5 bg-text-main text-white font-heading font-semibold rounded-full hover:bg-primary-cta transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
                        Hợp tác ngay
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-text-main p-2 hover:bg-secondary-bg rounded-full transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="lg:hidden absolute top-full left-0 w-full bg-primary-bg/95 backdrop-blur-xl border-b border-border/50 shadow-xl"
                    >
                        <div className="flex flex-col px-6 py-6 gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-xl font-heading font-bold text-text-main hover:text-primary-cta transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#the-ask"
                                onClick={() => setMobileMenuOpen(false)}
                                className="mt-4 text-center px-6 py-4 bg-primary-cta text-white font-heading font-bold rounded-2xl shadow-lg"
                            >
                                Hợp tác ngay
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
