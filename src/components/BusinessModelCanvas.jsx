import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, TrendingUp, HandCoins, Globe, Users, Megaphone, ShieldCheck, DollarSign } from 'lucide-react';

export default function BusinessModelCanvas() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="canvas" className="py-32 bg-primary-bg relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-[10%] left-[5%] w-72 h-72 bg-primary-cta/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black text-text-main mb-6 tracking-tight"
                    >
                        Mô hình Kinh doanh
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Tổng quan về dự án Seamphony dựa trên <strong className="text-primary-cta font-bold">Lean Canvas</strong>.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {/* Card 1: Revenue Roadmap */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-8 text-green-500 group-hover:scale-110 transition-transform">
                            <DollarSign size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-text-main mb-6">Dòng Doanh Thu</h3>
                        <div className="space-y-4 grow">
                            <div className="p-4 bg-secondary-bg rounded-xl">
                                <span className="block text-xs font-bold text-text-muted uppercase tracking-widest mb-1">Giá bán lẻ</span>
                                <span className="text-2xl font-black text-text-main">250.000 <span className="text-sm font-normal">đ/m²</span></span>
                            </div>
                            <ul className="text-sm text-text-muted space-y-2 font-body">
                                <li className="flex gap-2"><span>•</span> Năm 1: 450tr VNĐ</li>
                                <li className="flex gap-2"><span>•</span> Năm 2: 1.5 tỷ VNĐ</li>
                                <li className="flex gap-2"><span>•</span> Năm 3: 2.5 - 3 tỷ VNĐ</li>
                            </ul>
                        </div>
                    </motion.div>

                    {/* Card 2: Channels */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <div className="w-16 h-16 bg-primary-cta/10 rounded-2xl flex items-center justify-center mb-8 text-primary-cta group-hover:scale-110 transition-transform">
                            <Megaphone size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-text-main mb-6">Kênh Tiếp Cận</h3>
                        <ul className="text-base text-text-muted space-y-4 font-body grow">
                            <li className="flex gap-3"><span className="text-primary-cta font-bold">01.</span> B2B Trực tiếp gửi Catalogue cho KTS</li>
                            <li className="flex gap-3"><span className="text-primary-cta font-bold">02.</span> Hợp tác ESG tuần hoàn với KCN</li>
                            <li className="flex gap-3"><span className="text-primary-cta font-bold">03.</span> Website & Triển lãm Nội thất Xanh</li>
                        </ul>
                    </motion.div>

                    {/* Card 3: Strategic Partners */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group flex flex-col">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-8 text-accent group-hover:scale-110 transition-transform">
                            <HandCoins size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-text-main mb-6">Đối Tác Chiến Lược</h3>
                        <ul className="text-base text-text-muted space-y-4 font-body grow">
                            <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Hệ sinh thái xưởng cơ khí địa phương</li>
                            <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Các nhà máy may mặc (Nguồn rác)</li>
                            <li className="flex gap-3"><span className="text-accent font-bold">✓</span> Hiệp hội thiết kế nội thất</li>
                        </ul>
                    </motion.div>

                    {/* Card 4: Costs Structure */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} className="bg-text-main text-white p-8 rounded-[2rem] shadow-xl hover:-translate-y-2 transition-all duration-500 group flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cta/20 rounded-full blur-3xl"></div>
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform relative z-10">
                            <TrendingUp size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-extrabold text-white mb-6 relative z-10">Cấu Trúc Chi Phí</h3>
                        <div className="space-y-4 grow relative z-10">
                            <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                                <span className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Giá vốn (COGS)</span>
                                <span className="text-2xl font-black">140.000 <span className="text-sm font-normal">đ/m²</span></span>
                            </div>
                            <p className="text-sm text-white/60 leading-relaxed font-body">
                                <strong>MMTB & R&D:</strong> Chiếm 60% tổng vốn <br />
                                <strong>Chi phí biến đổi:</strong> Thấp nhờ nguồn vải rác miễn phí.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
