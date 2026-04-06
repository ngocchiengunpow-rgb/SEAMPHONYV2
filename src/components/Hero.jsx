import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Leaf, Volume2, VolumeX } from 'lucide-react';

export default function Hero() {
    const videoRef = useRef(null);
    const [isMuted, setIsMuted] = useState(true);

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !videoRef.current.muted;
            setIsMuted(videoRef.current.muted);
        }
    };

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
                            CUỘC THI KHỞI NGHIỆP I-STARTUP 2026
                        </span>
                    </motion.div>

                    <motion.h1
                        custom={1} initial="hidden" animate="visible" variants={fadeUp}
                        className="text-6xl md:text-8xl lg:text-9xl font-heading font-extrabold text-text-main tracking-tighter leading-[1.05] mb-8 max-w-6xl"
                    >
                        Ván ép cách âm từ <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cta to-accent">đồ bảo hộ cũ.</span>
                    </motion.h1>

                    <motion.div
                        custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 mb-4 text-xs md:text-sm font-semibold text-text-muted uppercase tracking-[0.15em] max-w-4xl"
                    >
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">CÔNG NGHIỆP</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">CÔNG NGHỆ MỚI</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md">CÔNG NGHỆ CHẾ TẠO</span>
                        <span className="bg-secondary-bg px-3 py-1.5 rounded-md border border-primary-cta/30 text-primary-cta">XÂY DỰNG</span>
                    </motion.div>

                    <motion.div
                        custom={2} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-wrap justify-center gap-4 mb-10 text-sm md:text-base font-bold text-text-main"
                    >
                        <span className="flex items-center gap-2">🔥 Xử lý 560-710 tấn rác/năm</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-2">⚡ NRC 0.65 - 0.80</span>
                        <span className="text-text-muted">•</span>
                        <span className="flex items-center gap-2 text-primary-cta">💰 Rẻ hơn 40%</span>
                    </motion.div>

                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="flex flex-col sm:flex-row gap-6 mb-14"
                    >
                        <a href="#the-ask" className="px-8 py-4 bg-primary-cta text-white font-heading font-bold text-lg rounded-full hover:bg-[#d94a08] transition-all duration-300 shadow-lg hover:shadow-primary-cta/40 hover:-translate-y-1">
                            Liên Hệ Hợp Tác
                        </a>
                        <a href="#hero" className="px-8 py-4 bg-transparent border-2 border-primary-cta text-primary-cta font-heading font-bold text-lg rounded-full hover:bg-primary-cta hover:text-white transition-all duration-300 shadow-lg hover:shadow-primary-cta/40 hover:-translate-y-1">
                            Tải Hồ Sơ Dự Án
                        </a>
                    </motion.div>

                    <motion.div
                        custom={3} initial="hidden" animate="visible" variants={fadeUp}
                        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto text-left"
                    >
                        <div className="space-y-6 text-lg md:text-xl text-text-muted font-body leading-relaxed">
                            <p className="text-2xl md:text-3xl font-heading font-bold text-text-main leading-tight mb-4">
                                Giải pháp <span className="text-primary-cta">ép nhiệt tuần hoàn</span> biến rác bảo hộ siêu bền thành vật liệu tiêu âm cao cấp.
                            </p>
                            <ul className="space-y-3 font-body text-base md:text-lg">
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Bẫy âm thông minh:</strong> Cấu trúc hàng triệu lỗ rỗng vi mô từ sợi bông đánh tơi.</li>
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Công nghệ sạch:</strong> Keo tinh bột sinh học + Phủ màng Nano Chitosan kỵ nước.</li>
                                <li className="flex items-start gap-3"><span className="text-primary-cta">✓</span> <strong>Thẩm mỹ hiện đại:</strong> Màu sắc thô mộc Industrial độc bản cho chuỗi F&B, Văn phòng.</li>
                            </ul>
                            <blockquote className="border-l-4 border-primary-cta pl-6 py-2 mt-8 italic font-medium text-text-main text-2xl">
                                "Không có thứ gì là rác, chỉ là chúng ta chưa đặt nó đúng chỗ."
                            </blockquote>
                        </div>

                        {/* Product Video Showcase */}
                        <div className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-cta/20 to-accent/20 rounded-[2rem] blur-2xl transform group-hover:scale-105 transition-transform duration-700"></div>
                            
                            <div className="absolute top-4 -right-4 bg-primary-cta text-white font-bold px-4 py-2 rounded-lg shadow-xl z-20 transform rotate-6 border border-white/20 text-sm">
                                85% Khách hàng F&B sẵn sàng dùng thử!
                            </div>

                            <div className="relative aspect-[4/3] bg-black rounded-[2rem] border-4 border-white/10 shadow-2xl overflow-hidden transform transition-all duration-700 hover:rotate-yd-12 hover:scale-[1.02] cursor-pointer" onClick={toggleMute}>
                                <video
                                    ref={videoRef}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                >
                                    <source src="/SEAMPHONY.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                                
                                {/* Video Controls Overlay */}
                                <div className="absolute bottom-6 right-6 z-30">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                                        className="w-12 h-12 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-primary-cta/80 transition-all duration-300"
                                    >
                                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                    </button>
                                </div>

                                {/* Dynamic Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none"></div>
                            </div>
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
