import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Home, Clock } from 'lucide-react';

export default function Problem() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
    };

    const itemVars = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.9 } },
    };

    return (
        <section id="problem" className="py-24 md:py-32 bg-secondary-bg relative overflow-hidden scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", bounce: 0, duration: 0.9 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text-main mb-6 tracking-tight">Thị trường Bế tắc</h2>
                    <p className="text-xl text-text-muted font-body max-w-2xl mx-auto">Thiếu giải pháp giao thoa giữa ngành công nghiệp dệt may và nhu cầu nội thất tiêu âm thẩm mỹ.</p>
                </motion.div>

                <motion.div
                    variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20"
                >
                    {/* Pillar 1 */}
                    <motion.div variants={itemVars} className="group h-full">
                        <div className="bg-white p-8 lg:p-12 rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col pt-0 px-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-primary-cta/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="h-56 w-full relative mb-8 overflow-hidden">
                                <img src="/waste-problem.jpg" alt="Rác thải bảo hộ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1558098329-a11cff621064?q=80&w=2000&auto=format&fit=crop"} />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm border border-white/50">
                                    <Factory size={24} className="text-primary-cta" />
                                </div>
                            </div>
                            <div className="px-8 lg:px-12 flex flex-col grow pb-8 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-main mb-6">Nỗi lo từ nhà máy dệt may</h3>
                                <p className="text-base md:text-lg text-text-muted font-body leading-relaxed grow">
                                    Việt Nam phát sinh khoảng <strong className="text-text-main text-xl md:text-2xl font-black">250.000 tấn</strong> vải vụn tiền tiêu dùng mỗi năm. 
                                    40% bị đốt lò hoặc đồng xử lý. Doanh nghiệp phải gồng gánh chi phí xử lý <strong className="text-primary-cta text-lg md:text-xl font-bold">650–1.000 đ/kg</strong> (lên tới hàng trăm triệu mỗi năm) chỉ để thoát khỏi vải vụn của chính mình.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div variants={itemVars} className="group h-full">
                        <div className="bg-white p-8 lg:p-12 rounded-3xl border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full flex flex-col pt-0 px-0 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                            <div className="h-56 w-full relative mb-8 overflow-hidden">
                                <img src="/office-application.jpg" alt="Văn phòng ồn ào" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" onError={(e) => e.target.src = "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2000&auto=format&fit=crop"} />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm border border-white/50">
                                    <Home size={24} className="text-accent" />
                                </div>
                            </div>
                            <div className="px-8 lg:px-12 flex flex-col grow pb-8 relative z-10">
                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-main mb-6">Khó khăn không gian dịch vụ</h3>
                                <p className="text-base md:text-lg text-text-muted font-body leading-relaxed grow">
                                    Mức ồn trong quán cafe, nhà hàng thường đạt <strong className="text-accent text-lg md:text-xl font-bold">~80 dBA</strong>. Mút xốp kim tự tháp: <strong className="text-accent">kém thẩm mỹ, dễ bắt lửa.</strong> Bông khoáng rockwool: rủi ro bụi khoáng. Gỗ tiêu âm: quá đắt đỏ. Khách hàng CẦN vật liệu cách âm đẹp, an toàn và có câu chuyện Xanh.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Golden Time Section - Sleek Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0, duration: 1 }}
                    className="bg-[#0F172A] rounded-3xl p-10 lg:p-14 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-cta/10 to-accent/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>

                    <div className="shrink-0 relative z-10 hidden md:block">
                        <div className="w-28 h-28 bg-white/5 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.05)]">
                            <Clock size={44} className="text-primary-cta" />
                        </div>
                    </div>

                    <div className="relative z-10 w-full text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 md:hidden">
                            <Clock size={16} className="text-primary-cta" /> <span className="text-xs font-bold text-white uppercase tracking-widest">Thời điểm vàng</span>
                        </div>
                        <h3 className="hidden md:flex text-3xl md:text-4xl font-heading font-extrabold text-white mb-6 items-center gap-4">
                            Thời điểm vàng <div className="h-1 w-16 bg-gradient-to-r from-primary-cta to-transparent rounded-full"></div>
                        </h3>
                        <p className="text-lg md:text-xl font-body text-white/80 leading-relaxed font-light">
                            Doanh nghiệp dệt may đang khát khao báo cáo <strong className="text-primary-cta font-semibold">ESG</strong>. Chủ công trình dịch vụ (F&B, Homestay) ngày càng chú trọng không gian êm ái và lối sống Xanh tuần hoàn.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
