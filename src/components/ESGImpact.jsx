import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, Award } from 'lucide-react';

export default function ESGImpact() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.9 } },
    };

    return (
        <section id="esg" className="py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="inline-flex items-center justify-center p-3 bg-green-100 rounded-2xl mb-6 text-green-600"
                    >
                        <Leaf size={32} />
                    </motion.div>
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6"
                    >
                        Tác động <span className="text-green-600">tuần hoàn & ESG</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Mỗi mét vuông panel Seamphony không chỉ xử lý tiếng ồn, mà còn gắn với một lượng vải vụn được tái chế và một câu chuyện ESG cụ thể.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Recycle size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">0,6 kg vải / 1 m² panel</h3>
                        <p className="text-text-muted font-body leading-relaxed">
                            Trung bình mỗi 1 m² panel Seamphony sử dụng khoảng 0,6 kg vải vụn tiền tiêu dùng từ xưởng may.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Leaf size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">2,16 tấn vải/năm</h3>
                        <p className="text-text-muted font-body leading-relaxed">
                            Ở mức sản xuất pilot 300 m² panel/tháng, dự án có thể tái chế khoảng 2,16 tấn vải vụn mỗi năm, tránh chôn lấp và đốt bỏ.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">Hàng chục tấn/năm</h3>
                        <p className="text-text-muted font-body leading-relaxed">
                            Khi nhân rộng 2 – 3 "micro-hub tuần hoàn", tổng khối lượng vải vụn được tái chế mỗi năm có thể đạt tới hàng chục tấn.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.3 }}
                    className="bg-green-600 text-white p-10 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="shrink-0 w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 relative z-10 shadow-lg">
                        <Award size={48} className="text-white" />
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl font-heading font-black mb-4 tracking-tight">Chứng nhận Không gian Tuần hoàn</h3>
                        <p className="text-lg font-body leading-relaxed text-white/90">
                            Mỗi công trình lắp đặt Seamphony sẽ được cấp một "Chứng nhận không gian tuần hoàn" ghi rõ số m² panel, kg vải vụn tái chế và ước tính lượng CO₂ giảm phát thải. Doanh nghiệp F&B, Coworking có thể dùng tài liệu này làm báo cáo ESG và truyền thông xanh trực tiếp tới khách hàng.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
