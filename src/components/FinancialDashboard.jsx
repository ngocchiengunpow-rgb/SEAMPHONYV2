import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, TrendingUp, HandCoins, HardHat, Beaker, MapPin, Megaphone } from 'lucide-react';

export default function FinancialDashboard() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, type: "spring", bounce: 0.2 } },
    };

    return (
        <section id="financial" className="py-32 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Tài chính & Lộ trình
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl md:text-2xl text-text-muted font-body font-light"
                    >
                        Chiến lược <strong className="text-primary-cta">Khởi nghiệp tinh gọn</strong> <i>(Lean Startup)</i>, tối ưu vòng quay vốn.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    {/* Funding Ask */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="bg-secondary-bg p-8 lg:p-12 rounded-[2.5rem] border border-border flex flex-col h-full hover:shadow-2xl transition-shadow duration-500"
                    >
                        <h3 className="text-3xl font-heading font-extrabold mb-8 flex items-center gap-4 text-text-main">
                            <div className="w-12 h-12 bg-primary-cta/10 rounded-xl flex items-center justify-center">
                                <HandCoins className="text-primary-cta" size={24} />
                            </div>
                            Nhu cầu Gọi Vốn: 150 Triệu VNĐ
                        </h3>

                        <div className="space-y-4 mb-10 w-full">
                            <div className="flex justify-between items-center p-4 bg-primary-bg rounded-2xl border border-border shadow-sm">
                                <span className="font-semibold text-text-muted">Vốn tự có (30%)</span>
                                <span className="font-extrabold text-xl font-heading">45 Triệu</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-primary-bg rounded-2xl border border-border shadow-sm">
                                <span className="font-semibold text-text-muted">Thưởng thi khởi nghiệp (20%)</span>
                                <span className="font-extrabold text-xl font-heading">30 Triệu</span>
                            </div>
                            <div className="flex justify-between items-center p-4 bg-primary-cta text-white rounded-2xl shadow-lg transform scale-[1.02]">
                                <span className="font-bold">Angel Investors / Xưởng NT (50%)</span>
                                <span className="font-black text-2xl font-heading tracking-tight">75 Triệu</span>
                            </div>
                        </div>

                        <div className="mt-auto">
                            <h4 className="font-heading font-bold text-text-main mb-6 text-xl">Mục đích giải ngân (150Tr)</h4>
                            <div className="grid sm:grid-cols-2 gap-4 font-body text-sm text-text-muted">
                                <div className="flex items-start gap-3 bg-primary-bg p-4 rounded-xl shadow-sm border border-border"><HardHat className="text-primary-cta shrink-0" size={20} /> <span className="pt-0.5"><strong>33.3%</strong> Máy móc (băm, ép 20T)</span></div>
                                <div className="flex items-start gap-3 bg-primary-bg p-4 rounded-xl shadow-sm border border-border"><Beaker className="text-accent shrink-0" size={20} /> <span className="pt-0.5"><strong>26.7%</strong> R&D & QCVN 06:2022</span></div>
                                <div className="flex items-start gap-3 bg-primary-bg p-4 rounded-xl shadow-sm border border-border"><MapPin className="text-primary-cta shrink-0" size={20} /> <span className="pt-0.5"><strong>20.0%</strong> Thuê xưởng 30m2</span></div>
                                <div className="flex items-start gap-3 bg-primary-bg p-4 rounded-xl shadow-sm border border-border"><Megaphone className="text-accent shrink-0" size={20} /> <span className="pt-0.5"><strong>20.0%</strong> Marketing B2B</span></div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Unit Economics */}
                    <motion.div
                        variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }}
                        className="bg-text-main text-white p-8 lg:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col h-full"
                    >
                        <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent rounded-full opacity-20 blur-[100px]"></div>

                        <h3 className="text-3xl font-heading font-extrabold mb-10 flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center backdrop-blur-md">
                                <PieChart className="text-white" size={24} />
                            </div>
                            Đơn giá (1m² ván ép)
                        </h3>

                        <div className="space-y-5 mb-10 relative z-10 grow">
                            <div className="flex justify-between text-lg font-body border-b border-white/10 pb-3">
                                <span className="text-white/70">Nguyên liệu thô</span>
                                <span className="font-semibold text-white">20,000đ</span>
                            </div>
                            <div className="flex justify-between text-lg font-body border-b border-white/10 pb-3">
                                <span className="text-white/70">Keo sinh học & Hóa chất</span>
                                <span className="font-semibold text-white">45,000đ</span>
                            </div>
                            <div className="flex justify-between text-lg font-body border-b border-white/10 pb-3">
                                <span className="text-white/70">Nhân công</span>
                                <span className="font-semibold text-white">35,000đ</span>
                            </div>
                            <div className="flex justify-between text-lg font-body border-b border-white/10 pb-3">
                                <span className="text-white/70">Năng lượng & Khấu hao</span>
                                <span className="font-semibold text-white">25,000đ</span>
                            </div>
                            <div className="flex justify-between text-lg font-body border-b border-white/10 pb-3">
                                <span className="text-white/70">Logistics</span>
                                <span className="font-semibold text-white">15,000đ</span>
                            </div>
                            <div className="flex justify-between text-2xl font-heading font-black pt-4 text-primary-cta">
                                <span>Tổng giá vốn (COGS)</span>
                                <span>140,000đ</span>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl flex flex-col items-center justify-center text-center border border-white/20 relative z-10">
                            <p className="text-sm font-body uppercase tracking-[0.2em] text-white/70 mb-2">Giá Bán Lẻ Dự Kiến</p>
                            <p className="text-5xl font-heading font-black text-white mb-4">250,000<span className="text-2xl text-white/50">đ</span></p>
                            <div className="bg-primary-cta text-white px-6 py-2 rounded-full text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(234,88,12,0.4)]">
                                Lợi nhuận gộp: 110,000đ (44%)
                            </div>
                            <p className="text-sm font-body text-white/60 mt-4">Rẻ hơn 5,000đ so với ván rãnh tiêu chuẩn.</p>
                        </div>
                    </motion.div>
                </div>

                {/* 3-Year Roadmap */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0.2 }}
                    className="bg-secondary-bg rounded-[2.5rem] p-10 lg:p-16 border border-border shadow-xl relative overflow-hidden"
                >
                    <div className="flex items-center gap-4 mb-16 relative z-10">
                        <div className="w-14 h-14 bg-primary-bg rounded-2xl flex items-center justify-center shadow-sm border border-border"><TrendingUp size={28} className="text-accent" /></div>
                        <h3 className="text-3xl md:text-4xl font-heading font-extrabold text-text-main">Lộ trình 3 Năm</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 relative z-10">
                        {/* Year 1 */}
                        <div className="md:border-r border-border md:pr-10 relative group">
                            <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-border transition-colors group-hover:bg-accent md:hidden"></div>
                            <h4 className="text-5xl font-heading font-black mb-4 text-border group-hover:text-text-main transition-colors">Y1</h4>
                            <p className="text-accent font-extrabold text-lg mb-6 tracking-wide">CHỨNG MINH SẢN PHẨM</p>
                            <div className="space-y-3 font-body text-text-muted text-lg">
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Sản lượng</span> <strong>150m²/tháng</strong></p>
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Doanh thu</span> <strong>450 triệu</strong></p>
                                <p className="flex justify-between text-primary-cta pb-2"><span>Lỗ kế toán</span> <strong>-50 triệu</strong></p>
                            </div>
                        </div>

                        {/* Year 2 */}
                        <div className="md:border-r border-border md:px-10 relative group">
                            <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-border transition-colors group-hover:bg-accent md:hidden"></div>
                            <h4 className="text-5xl font-heading font-black mb-4 text-border group-hover:text-text-main transition-colors">Y2</h4>
                            <p className="text-accent font-extrabold text-lg mb-6 tracking-wide">CHỨNG MINH THỊ TRƯỜNG</p>
                            <div className="space-y-3 font-body text-text-muted text-lg">
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Sản lượng</span> <strong>500m²/tháng</strong></p>
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Doanh thu</span> <strong>1.5 tỷ</strong></p>
                                <p className="flex justify-between text-text-main font-bold pb-2"><span>Lãi ròng</span> <strong>200-300 triệu</strong></p>
                            </div>
                        </div>

                        {/* Year 3 */}
                        <div className="md:pl-10 relative group">
                            <div className="absolute -left-4 top-2 w-2 h-2 rounded-full bg-border transition-colors group-hover:bg-primary-cta md:hidden"></div>
                            <h4 className="text-5xl font-heading font-black mb-4 text-border group-hover:text-text-main transition-colors">Y3</h4>
                            <p className="text-primary-cta font-extrabold text-lg mb-6 tracking-wide">MỞ RỘNG BỨT PHÁ</p>
                            <div className="space-y-3 font-body text-text-muted text-lg">
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Sản lượng</span> <strong>1000m²/tháng</strong></p>
                                <p className="flex justify-between border-b border-border/50 pb-2"><span>Doanh thu</span> <strong>2.5 - 3 tỷ</strong></p>
                                <p className="flex justify-between text-text-main font-bold pb-2"><span>Lãi ròng</span> <strong>700tr - 1 tỷ</strong></p>
                                <div className="mt-4 inline-block bg-text-main text-white px-4 py-2 rounded-lg text-sm font-bold tracking-widest shadow-md">BIÊN RÒNG 30%-35%</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
