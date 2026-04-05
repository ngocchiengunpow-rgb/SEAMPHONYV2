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
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="problem" className="py-24 md:py-32 bg-secondary-bg relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold text-text-main mb-6 tracking-tight">Thị trường Bế tắc</h2>
                    <p className="text-xl text-text-muted font-body max-w-2xl mx-auto">Thiếu giải pháp giao thoa giữa ngành sản xuất quần áo bảo hộ và ngành thiết kế nội thất.</p>
                </motion.div>

                <motion.div
                    variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20"
                >
                    {/* Pillar 1 */}
                    <motion.div variants={itemVars} className="group h-full">
                        <div className="bg-primary-bg p-8 lg:p-12 rounded-[2rem] border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col pt-0 px-0 overflow-hidden">
                            <div className="h-48 w-full relative mb-8 overflow-hidden">
                                <img src="/waste-problem.jpg" alt="Rác thải bảo hộ" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-primary-bg/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm">
                                    <Factory size={24} className="text-primary-cta" />
                                </div>
                            </div>
                            <div className="px-8 lg:px-12 flex flex-col grow pb-8">
                                <h3 className="text-3xl font-heading font-bold text-text-main mb-6">Nỗi lo từ nhà máy</h3>
                                <p className="text-lg text-text-muted font-body leading-relaxed grow">
                                    Vải bảo hộ cực kỳ dai và khó bị phân hủy sinh học tự nhiên: <strong className="text-primary-cta">chôn thì hỏng đất, đốt thì sinh khí độc.</strong> 
                                    Ước tính có tới <strong className="text-text-main text-2xl font-black">560–710 tấn</strong> rác bảo hộ thải ra mỗi năm tại HP–QN. 
                                    Doanh nghiệp phải gồng gánh chi phí xử lý <strong className="text-primary-cta text-xl font-bold">2–3 triệu/tấn</strong> mà rủi ro môi trường vẫn hiện hữu.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Pillar 2 */}
                    <motion.div variants={itemVars} className="group h-full">
                        <div className="bg-primary-bg p-8 lg:p-12 rounded-[2rem] border border-border/60 shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col pt-0 px-0 overflow-hidden">
                            <div className="h-48 w-full relative mb-8 overflow-hidden">
                                <img src="/office-application.jpg" alt="Văn phòng ồn ào" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute top-4 left-4 w-12 h-12 bg-primary-bg/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-sm">
                                    <Home size={24} className="text-accent" />
                                </div>
                            </div>
                            <div className="px-8 lg:px-12 flex flex-col grow pb-8">
                                <h3 className="text-3xl font-heading font-bold text-text-main mb-6">Khó khăn về nội thất</h3>
                                <p className="text-lg text-text-muted font-body leading-relaxed grow">
                                    Không gian mở cực kỳ ồn ào. Mút xốp kim tự tháp rẻ tiền: <strong className="text-accent">kém thẩm mỹ, dễ bắt lửa, sinh khói độc.</strong> Trong khi gỗ tiêu âm cao cấp lại có giá thành quá đắt đỏ so với ngân sách của các chuỗi F&B hay văn phòng nhỏ.
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
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-text-main rounded-[2.5rem] p-10 lg:p-16 relative overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center gap-12"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-cta/20 to-accent/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3"></div>

                    <div className="shrink-0 relative z-10 hidden md:block">
                        <div className="w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center">
                            <Clock size={48} className="text-primary-cta" />
                        </div>
                    </div>

                    <div className="relative z-10 w-full text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6 md:hidden">
                            <Clock size={16} className="text-primary-cta" /> <span className="text-xs font-bold text-white uppercase tracking-widest">Thời điểm vàng</span>
                        </div>
                        <h3 className="hidden md:flex text-4xl font-heading font-extrabold text-white mb-6 items-center gap-4">
                            Thời điểm vàng <div className="h-1 w-16 bg-gradient-to-r from-primary-cta to-transparent rounded-full"></div>
                        </h3>
                        <p className="text-xl md:text-2xl font-body text-white/80 leading-relaxed font-light">
                            Nhà nước đẩy mạnh luật bảo vệ môi trường, ép doanh nghiệp làm <strong className="text-primary-cta">Kinh tế Tuần hoàn</strong>. Khách hàng Gen Z cực kỳ chuộng gu thô mộc (Industrial) và lối sống Xanh bền vững.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
