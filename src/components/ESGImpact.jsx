import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Globe, Award } from 'lucide-react';

export default function ESGImpact() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.6 } },
    };

    return (
        <section id="esg" className="py-16 lg:py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="inline-flex items-center justify-center p-3 bg-green-100 rounded-2xl mb-6 text-green-600"
                    >
                        <Leaf size={32} />
                    </motion.div>
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="text-3xl md:text-5xl font-heading font-extrabold text-text-main mb-6"
                    >
                        Tác động <span className="text-green-600">tuần hoàn & ESG</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Mỗi mét vuông panel Seamphony không chỉ giúp không gian êm hơn, mà còn ghi lại một đơn vị tác động tuần hoàn cụ thể cho xưởng may và chủ công trình.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                    >
                        <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0">
                            <Recycle size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">Vòng 1 - Thu gom & Sản xuất</h3>
                        <p className="text-text-muted font-body leading-relaxed grow">
                            Ký "Thoả thuận đối tác tuần hoàn" với xưởng may. Seamphony hỗ trợ phân loại tại nguồn, đặt container thu gom. Nhà máy được miễn/giảm chi phí xử lý và nhận báo cáo ESG ghi nhận lượng vải được tái sinh.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                    >
                        <div className="w-16 h-16 bg-green-50 text-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0">
                            <Leaf size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">Vòng 2 - Sản xuất & Thị trường</h3>
                        <p className="text-text-muted font-body leading-relaxed grow">
                            Từ vải vụn tiền tiêu dùng, tạo ra panel tiêu âm thiết kế đẹp, cá nhân hóa theo không gian. Phân phối linh hoạt: bán dưới dạng tấm chuẩn (B2B/B2C) hoặc gói "khảo sát âm học + thiết kế + thi công" trọn gói.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 rounded-3xl border border-border/50 shadow-sm text-center hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                    >
                        <div className="w-16 h-16 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shrink-0">
                            <Globe size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-black text-text-main mb-4">Vòng 3 - Khách hàng & ESG</h3>
                        <p className="text-text-muted font-body leading-relaxed grow">
                            Mỗi công trình nhận "Chứng nhận không gian tuần hoàn" ghi rõ: m² panel, kg vải vụn được cứu khỏi lò đốt, kg CO₂ tránh phát thải. Tài sản truyền thông ESG thực sự, biến khách hàng thành đại sứ tuần hoàn.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp} transition={{ delay: 0.3 }}
                    className="bg-green-600 text-white p-10 md:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center gap-8 md:gap-12 relative overflow-hidden"
                >
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="shrink-0 w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30 relative z-10 shadow-lg">
                        <Award size={48} className="text-white" />
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-3xl font-heading font-black mb-4 tracking-tight">Chứng nhận không gian tuần hoàn cho từng công trình</h3>
                        <p className="text-lg font-body leading-relaxed text-white/90">
                            Mỗi công trình lắp đặt Seamphony sẽ nhận một "Chứng nhận không gian tuần hoàn" ghi rõ số m² panel, kg vải vụn tái chế và ước tính CO₂ tránh phát thải. Chủ quán, doanh nghiệp có thể sử dụng tài liệu này trong báo cáo ESG, hoạt động truyền thông và làm việc với nhà đầu tư.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
