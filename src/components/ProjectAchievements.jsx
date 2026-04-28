import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Users, Factory, Globe } from 'lucide-react';

export default function ProjectAchievements() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="achievements" className="py-32 bg-primary-bg relative overflow-hidden scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-heading font-black text-text-main mb-6 tracking-tight"
                    >
                        Thành Tựu Dự Án
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Dù ở giai đoạn Early Stage, Seamphony đã đạt được những <strong className="text-primary-cta font-bold">cột mốc tiền đề</strong> cực kỳ quan trọng.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* R&D */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-16 h-16 bg-primary-cta/10 rounded-2xl flex items-center justify-center mb-6 text-primary-cta group-hover:scale-110 transition-transform">
                            <FlaskConical size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-text-main">Nghiên cứu & Phát triển (R&D)</h3>
                        <p className="font-body text-text-muted leading-relaxed">
                            Hoàn thiện mẫu <strong className="text-text-main">Proof of Concept (PoC)</strong> đạt mật độ khối và độ xốp tương đương ván tiêu âm thương mại. Thử nghiệm thành công phương pháp ép nhiệt sợi low-melt, không dùng hóa chất dính độc hại.
                        </p>
                    </motion.div>

                    {/* Market Validation */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
                            <Users size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-text-main">Xác Thực Thị Trường</h3>
                        <p className="font-body text-text-muted leading-relaxed">
                            Khảo sát sâu với hơn <strong className="text-accent">30 chủ F&B và Coworking</strong>. Ghi nhận 85% khách hàng ấn tượng với tính thẩm mỹ độc bản của ván ép vải vụn và sẵn sàng dùng thử khi có chứng nhận âm học.
                        </p>
                    </motion.div>

                    {/* Network & Materials */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-white p-8 rounded-[2rem] shadow-sm border border-border group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6 text-green-500 group-hover:scale-110 transition-transform">
                            <Factory size={32} />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 text-text-main">Mạng Lưới Nguyên Liệu</h3>
                        <p className="font-body text-text-muted leading-relaxed">
                            Kết nối thành công với <strong className="text-green-600">2 xưởng cắt may</strong> tại địa phương, sẵn sàng cung cấp nguồn vải vụn (rác tiền tiêu dùng) miễn phí trong suốt giai đoạn R&D và Pilot.
                        </p>
                    </motion.div>

                    {/* Digital Branding */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} className="bg-text-main text-white p-8 rounded-[2rem] shadow-xl group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cta/20 rounded-full blur-[40px] pointer-events-none"></div>
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform relative z-10">
                            <Globe size={32} className="text-white" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold mb-4 relative z-10">Thương Hiệu Số</h3>
                        <p className="font-body text-white/70 leading-relaxed relative z-10">
                            Xây dựng & vận hành thành công kênh Landing Page chính thức. Đã thu hút được <strong className="text-white">sự quan tâm của sinh viên kiến trúc</strong>, lan tỏa mạnh mẽ thông điệp giải cứu vải vụn công nghiệp tới nhóm cộng đồng yêu môi trường.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
