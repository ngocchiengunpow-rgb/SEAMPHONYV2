import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp } from 'lucide-react';

export default function FinancialViability() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="viability" className="py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6"
                    >
                        Tại sao Seamphony là <span className="text-primary-cta">mô hình khả thi?</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Seamphony không chỉ dừng ở ý tưởng, mà đã được xây dựng trên các giả định tài chính và kỹ thuật cụ thể.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-secondary-bg p-8 lg:p-10 rounded-[2rem] border border-border hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main">
                            <Wallet className="text-primary-cta" /> Cấu trúc chi phí rõ ràng
                        </h3>
                        <ul className="space-y-4 text-text-muted font-body">
                            <li className="flex items-start gap-3">
                                <span className="text-primary-cta mt-1">✓</span>
                                <span>Chi phí đầu tư ban đầu (CapEx) dự kiến: <strong>505 – 660 triệu đồng</strong> cho máy cắt/băm, máy mở xơ, máy ép nhiệt, khuôn và cải tạo xưởng pilot.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-cta mt-1">✓</span>
                                <span>Chi phí vận hành (OpEx) tại quy mô 300 m²/tháng: <strong>90,7 – 122,8 triệu đồng/tháng</strong>, bao gồm nguyên liệu, nhân công, điện, vận chuyển, mặt bằng, khấu hao và marketing.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-primary-cta mt-1">✓</span>
                                <span>Giá vốn toàn phần ước tính: khoảng <strong>302.000 – 409.000 đ/m² panel</strong>.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 lg:p-10 rounded-[2rem] border border-border hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main">
                            <TrendingUp className="text-accent" /> Doanh thu & hoàn vốn
                        </h3>
                        <ul className="space-y-4 text-text-muted font-body">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">✓</span>
                                <span>Giá bán dự kiến: <strong>380.000 – 420.000 đ/m²</strong> cho panel tiêu chuẩn và <strong>430.000 – 480.000 đ/m²</strong> cho gói trọn gói (thiết kế + cung cấp + lắp đặt + báo cáo ESG).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">✓</span>
                                <span>Mục tiêu biên lợi nhuận gộp: khoảng <strong>20%</strong> khi tối ưu chi phí tại mức 300 m²/tháng.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">✓</span>
                                <span>Thời gian hoàn vốn không chiết khấu ước tính: khoảng <strong>1,9 năm vận hành đủ tải</strong>; tính cả giai đoạn tăng công suất, dự án hướng tới hoàn vốn trong <strong>khoảng 3 năm</strong>.</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
