import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Leaf, Play } from 'lucide-react';

export default function Hero() {
    const [isPlaying, setIsPlaying] = useState(false);

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] // Apple-like smooth spring
            }
        })
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-primary-bg">
            {/* Sleek Gradient Background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-orange-50 opacity-70"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
                <div className="flex flex-col items-center text-center">

                    <motion.div
                        custom={0} initial="hidden" animate="visible" variants={fadeUp}
                        className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary-cta/20 bg-primary-cta/5"
                    >
                        <Leaf size={18} className="text-primary-cta" />
                        <span className="text-xs md:text-sm font-bold tracking-widest text-primary-cta uppercase">
                            BUSINESS VENTURE CHALLENGE 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={1} initial="hidden" animate="visible" variants={fadeUp}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-text-main tracking-tighter leading-[1.05] mb-8 max-w-6xl"
                    >
                        Panel cách âm từ <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cta to-accent">vải vụn tái chế.</span>
                    </motion.h1>

                    <motion.div
                        custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 mb-4 text-xs md:text-sm font-semibold text-text-muted uppercase tracking-[0.15em] max-w-4xl"
                    >
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">VẬT LIỆU XANH</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">KINH TẾ TUẦN HOÀN</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">NỘI THẤT</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md border border-primary-cta/30 text-primary-cta">ESG</span>
                    </motion.div>

                    <motion.div
                        custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base font-bold text-text-main"
                    >
                        <span className="flex items-center gap-2">🔥 Tái chế 250.000 tấn vải/năm</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-2">⚡ NRC 0.60 - 0.90</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-2 text-primary-cta">💰 Báo cáo ESG</span>
                    </motion.div>

                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 md:gap-6 mb-14"
                    >
                        <a href="#the-ask" className="px-8 py-4 bg-primary-cta text-white font-heading font-bold text-lg rounded-full hover:bg-[#d94a08] transition-all duration-300 shadow-lg hover:shadow-primary-cta/40 hover:-translate-y-1">
                            Liên Hệ Hợp Tác
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()}
                            className="px-6 py-4 bg-transparent border-2 border-primary-cta text-primary-cta font-heading font-bold text-base md:text-lg rounded-full hover:bg-primary-cta hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-cta/40 hover:-translate-y-1 cursor-not-allowed opacity-80"
                        >
                            Tải Hồ Sơ Dự Án
                        </a>
                        <a 
                            href="#" 
                            onClick={(e) => e.preventDefault()}
                            className="px-6 py-4 bg-transparent border-2 border-accent text-accent font-heading font-bold text-base md:text-lg rounded-full hover:bg-accent hover:text-white transition-all duration-300 shadow-lg hover:shadow-accent/40 hover:-translate-y-1 cursor-not-allowed opacity-80"
                        >
                            Tải PitchDeck
                        </a>
                    </motion.div>

                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto text-left"
                    >
                        <div className="space-y-6 text-lg md:text-xl text-text-muted font-body leading-relaxed">
                            <p className="text-2xl md:text-3xl font-heading font-bold text-text-main leading-tight mb-4">
                                Giải pháp <span className="text-primary-cta">vải không dệt ép nhiệt</span> biến vải vụn thành vật liệu tiêu âm thẩm mỹ.
                            </p>
                            <ul className="space-y-3 font-body text-base md:text-lg">
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Bẫy âm thông minh:</strong> Cấu trúc xốp đa lớp từ sợi vải đánh tơi phối trộn liên kết nhiệt.</li>
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Công nghệ xanh:</strong> Không dùng keo độc hại, kết dính bằng sợi low-melt và phụ gia khoáng an toàn.</li>
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Thẩm mỹ độc bản:</strong> Mỗi tấm panel có sắc độ và vân vải riêng biệt, lý tưởng cho không gian F&B, Homestay.</li>
                            </ul>
                            <blockquote className="border-l-4 border-primary-cta pl-6 py-2 mt-8 italic font-medium text-text-main text-2xl">
                                "Không có thứ gì là rác, chỉ là chúng ta chưa đặt nó đúng chỗ."
                            </blockquote>
                        </div>

                        {/* Product Visual Showcase - Stacked Vertical Layout */}
                        <div className="flex flex-col gap-8 lg:ml-10 w-full max-w-2xl">
                            <div className="relative group perspective-1000">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-cta/20 to-accent/20 rounded-[2rem] blur-3xl transform group-hover:scale-105 transition-transform duration-700"></div>
                                
                                {/* Main Video Card */}
                                <div className="relative aspect-video w-full bg-black rounded-[2.5rem] border-4 border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 hover:rotate-yd-2 hover:scale-[1.01] z-10 group/vid">
                                    {!isPlaying ? (
                                        <div 
                                            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-neutral-900/40 backdrop-blur-[2px] z-20 group/play"
                                            onClick={() => setIsPlaying(true)}
                                        >
                                            {/* Play CTA Button */}
                                            <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-full bg-primary-cta/90 text-white shadow-[0_0_50px_-10px_rgba(234,88,12,0.6)] group-hover/play:scale-110 group-hover/play:bg-primary-cta transition-all duration-500 border-4 border-white/20">
                                                <Play size={40} className="fill-current ml-1" />
                                            </div>
                                            {/* Click to Play Hint */}
                                            <div className="absolute bottom-10 left-0 right-0 text-center text-white/80 font-heading font-bold text-sm tracking-widest uppercase opacity-0 group-hover/play:opacity-100 transition-opacity duration-500">
                                                Click to Play Intro
                                            </div>
                                        </div>
                                    ) : (
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/NjwceX8d06U?autoplay=1&controls=1&rel=0&modestbranding=1"
                                            title="SEAMPHONY Introduction Video"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                    
                                    {!isPlaying && <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none"></div>}
                                </div>
                            </div>

                            {/* Product Image Card - Positioned Below Video */}
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 1 }}
                                className="relative w-full aspect-[4/3] max-w-lg mx-auto bg-secondary-bg rounded-[2rem] border-4 border-white/30 shadow-xl overflow-hidden group/img transform hover:scale-[1.02] transition-all duration-500 cursor-pointer"
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                                <img src="/panel_sample.png" alt="Seamphony Product Sample" className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700" />
                                
                                {/* Refined Badge - Rotated Corner Ribbon Style */}
                                <div className="absolute top-6 -right-8 bg-primary-cta text-white font-black px-12 py-2 shadow-2xl z-30 transform rotate-12 border-y border-white/20 text-[10px] md:text-xs tracking-tight">
                                    100% Vải vụn tái chế!
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={4} initial="hidden" animate="visible" variants={fadeUp}
                        className="mt-20 animate-bounce"
                    >
                        <a href="#problem" className="w-14 h-14 rounded-full bg-secondary-bg border border-border flex items-center justify-center text-text-muted hover:text-primary-cta hover:border-primary-cta transition-colors shadow-sm">
                            <ChevronDown size={28} />
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
