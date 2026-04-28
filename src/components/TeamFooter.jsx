import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Mail, Lightbulb, MapPin, Handshake, Phone } from 'lucide-react';

export default function TeamFooter() {
    return (
        <footer id="footer" className="bg-text-main text-white pt-16 pb-16 relative overflow-hidden">
            {/* Sleek architectural dark gradients */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-primary-cta/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* Brand Center */}
                <div className="flex flex-col items-center justify-center py-12 border-t border-white/10 mt-12 mb-6 text-center">
                    <img src="/logo.png" alt="Seamphony" className="w-24 h-24 object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity mb-6" onError={(e) => e.target.style.display = 'none'} />
                    <h2 className="font-heading font-black tracking-[0.2em] text-2xl text-white/50 mb-6">SEAMPHONY</h2>
                    <p className="text-white/40 text-xs md:text-sm font-body max-w-2xl italic">
                        * Các giả định kỹ thuật và thị trường được xây dựng dựa trên báo cáo của GIZ (2025) và các nghiên cứu quốc tế về panel âm học từ vải vụn.
                    </p>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-body text-sm lowercase tracking-wider">
                    <p>© 2026 seamphony project. bvc 2026.</p>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <a href="tel:0356882119" className="flex items-center gap-3 hover:text-primary-cta transition-colors cursor-pointer"><Phone size={18} /> 0356 882 119</a>
                        <a href="mailto:chien103391@st.vimaru.edu.vn" className="flex items-center gap-3 hover:text-primary-cta transition-colors cursor-pointer"><Mail size={18} /> chien103391@st.vimaru.edu.vn</a>
                        <span className="flex items-center gap-3 hover:text-primary-cta transition-colors"><MapPin size={18} /> hai phong, vietnam</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

