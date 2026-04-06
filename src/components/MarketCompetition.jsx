import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Users, BarChart3, DollarSign, CheckCircle2 } from 'lucide-react';

const AnimatedCounter = ({ from = 0, to, duration = 2, suffix = "", prefix = "" }) => {
    const [count, setCount] = useState(from);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            let startTimestamp = null;
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
                setCount(Math.floor(progress * (to - from) + from));
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, from, to, duration]);

    return (
        <span ref={ref}>
            {prefix}{count.toLocaleString()}{suffix}
        </span>
    );
};

export default function MarketCompetition() {
    const nrcData = [
        { name: "Bê tông / Kính cường lực", nrc: 0.05, desc: "Phản xạ >95% âm thanh, vang", color: "bg-text-muted/20 text-text-muted" },
        { name: "Ván tự nhiên (MDF)", nrc: 0.23, desc: "Âm dội lại mạnh", color: "bg-text-muted/40 text-text-muted" },
        { name: "Mút xốp gai rẻ tiền", nrc: 0.90, desc: "Rủi ro cháy nổ, thẩm mỹ kém", color: "bg-text-muted/60 text-text-muted" },
        { name: "Ván Ép Seamphony", nrc: 0.80, desc: "Cực tốt. Vượt chuẩn BS EN ISO 11925-2", color: "bg-gradient-to-r from-primary-cta to-accent text-white" },
    ];

    return (
        <section id="market" className="py-32 bg-secondary-bg relative scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">

                    {/* Left: Stats */}
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="text-4xl md:text-6xl font-heading font-extrabold text-text-main mb-8 tracking-tight"
                        >
                            Thị trường khổng lồ
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="text-xl text-text-muted font-body mb-16 font-light leading-relaxed"
                        >
                            Nhu cầu vật liệu cản âm bùng nổ trong không gian mở. Khách hàng khao khát gu kiến trúc Industrial độc bản.
                        </motion.p>

                        <div className="space-y-12">
                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                                    <DollarSign className="text-primary-cta" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-5xl font-heading font-black text-text-main flex items-baseline tracking-tight">
                                        <AnimatedCounter to={1.47} duration={2} suffix=" Tỷ USD" />
                                    </h4>
                                    <p className="text-text-muted font-body mt-2 text-lg uppercase tracking-wider font-semibold">Quy mô TT nội thất VN 2024</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                                    <BarChart3 className="text-primary-cta" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-5xl font-heading font-black text-text-main flex items-baseline tracking-tight">
                                        <AnimatedCounter to={323000} duration={2.5} suffix="+" />
                                    </h4>
                                    <p className="text-text-muted font-body mt-2 text-lg uppercase tracking-wider font-semibold">Cửa hàng F&B toàn quốc</p>
                                </div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-6 items-start">
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border">
                                    <Users className="text-primary-cta" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-5xl font-heading font-black text-text-main flex items-baseline tracking-tight">
                                        <AnimatedCounter to={230000} duration={2.5} suffix="+" />
                                    </h4>
                                    <p className="text-text-muted font-body mt-2 text-lg uppercase tracking-wider font-semibold">Công nhân Cảng & Mỏ VN</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Customer Segments */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }} whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                        className="bg-primary-bg p-8 lg:p-12 rounded-[2.5rem] border border-border/80 shadow-2xl relative"
                    >
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-cta/20 rounded-full blur-3xl mix-blend-multiply"></div>

                        <div className="flex items-center gap-4 mb-10 relative z-10">
                            <div className="w-12 h-12 bg-secondary-bg rounded-xl flex items-center justify-center"><Target className="text-text-main" size={24} /></div>
                            <h3 className="text-3xl font-heading font-extrabold text-text-main">Chân dung Khách hàng</h3>
                        </div>

                        <div className="space-y-6 relative z-10">
                            <div className="bg-primary-cta/10 p-8 rounded-[2rem] border border-primary-cta/20 hover:bg-primary-cta/20 transition-colors">
                                <h4 className="text-xl font-heading font-bold mb-3 flex items-center gap-3 text-primary-cta">
                                    <span className="w-3 h-3 rounded-full bg-primary-cta"></span> Văn phòng mở & F&B
                                </h4>
                                <p className="text-text-main/80 font-body text-base">Cần giải pháp tiêu âm hiệu quả, thẩm mỹ độc bản đồng thời khống chế ngân sách đầu tư nội thất.</p>
                            </div>
                            <div className="bg-accent/10 p-8 rounded-[2rem] border border-accent/20 hover:bg-accent/20 transition-colors">
                                <h4 className="text-xl font-heading font-bold mb-3 flex items-center gap-3 text-accent">
                                    <span className="w-3 h-3 rounded-full bg-accent"></span> Công ty Thiết kế
                                </h4>
                                <p className="text-text-main/80 font-body text-base">Ưu tiên sử dụng Seamphony để cộng điểm vật liệu tái chế xanh trong hệ thống chứng chỉ LEED / LOTUS.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Advantage blocks & Customer Segments */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <h3 className="text-3xl font-heading font-extrabold text-text-main mb-6">Lợi thế Cạnh tranh</h3>
                        <div className="bg-primary-bg p-8 rounded-[2rem] border border-border shadow-sm flex items-start gap-5 group hover:border-primary-cta/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-primary-cta/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="text-primary-cta" />
                            </div>
                            <div>
                                <h4 className="text-xl font-heading font-bold mb-2">Tiết kiệm 40% chi phí</h4>
                                <p className="text-text-muted font-body">So với gỗ xẻ rãnh tiêu âm truyền thống. Giá không cạnh tranh đại trà mà đánh đúng phân khúc ngách.</p>
                            </div>
                        </div>
                        <div className="bg-primary-bg p-8 rounded-[2rem] border border-border shadow-sm flex items-start gap-5 group hover:border-accent/50 transition-colors">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                <CheckCircle2 className="text-accent" />
                            </div>
                            <div>
                                <h4 className="text-xl font-heading font-bold mb-2">Thẩm mỹ thô mộc độc bản</h4>
                                <p className="text-text-muted font-body">Hòa quyện ngẫu nhiên sợi màu cam/xanh tạo phong cách không tấm nào giống hệt tấm nào.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
