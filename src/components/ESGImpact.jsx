import React from 'react';
import { motion } from 'framer-motion';
import { Coins, TreePine, Cpu, HeartHandshake } from 'lucide-react';

export default function ESGImpact() {
    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };

    const itemVars = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, type: "spring", bounce: 0.4 } },
    };

    return (
        <section id="esg" className="py-32 bg-primary-bg relative scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Giải pháp <span className="text-accent">Bền vững ESG</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Seamphony không chỉ là một sản phẩm thương mại. Đó là lời giải cho bài toán môi trường và kinh tế tuần hoàn tại Việt Nam.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-2 gap-8 lg:gap-10"
                >
                    {/* Economics */}
                    <motion.div variants={itemVars} className="group">
                        <div className="h-full bg-secondary-bg p-10 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-white hover:border-accent hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
                            <div className="w-20 h-20 bg-primary-bg rounded-2xl flex items-center justify-center border border-border/50 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Coins size={40} className="text-accent" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-text-main mb-4 group-hover:text-accent transition-colors">Kinh tế</h3>
                            <p className="text-lg text-text-muted font-body leading-relaxed">
                                Nguyên liệu đầu vào <strong className="text-text-main">giá 0 đồng</strong>. Cung cấp ván ốp tường tiết kiệm 40% chi phí. Giúp xí nghiệp địa phương xóa bỏ gánh nặng phí xử lý rác thải khổng lồ.
                            </p>
                        </div>
                    </motion.div>

                    {/* Environment */}
                    <motion.div variants={itemVars} className="group">
                        <div className="h-full bg-secondary-bg p-10 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500">
                            <div className="w-20 h-20 bg-primary-bg rounded-2xl flex items-center justify-center border border-border/50 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500 -rotate-3">
                                <TreePine size={40} className="text-accent group-hover:text-accent" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-text-main group-hover:text-white mb-4 transition-colors">Môi trường</h3>
                            <p className="text-lg text-text-muted font-body leading-relaxed group-hover:text-white/90 transition-colors">
                                Giải cứu bãi chôn lấp. Xóa bỏ khói độc do đốt vải bảo hộ cũ. Giảm áp lực khai thác rừng làm gỗ nhân tạo, trực tiếp đóng góp vào mục tiêu giảm phát thải <strong className="font-bold">Net Zero</strong>.
                            </p>
                        </div>
                    </motion.div>

                    {/* Technology */}
                    <motion.div variants={itemVars} className="group">
                        <div className="h-full bg-secondary-bg p-10 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-text-main hover:text-white hover:shadow-2xl hover:shadow-text-main/30 transition-all duration-500">
                            <div className="w-20 h-20 bg-primary-bg rounded-2xl flex items-center justify-center border border-border/50 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500 rotate-3">
                                <Cpu size={40} className="text-text-main group-hover:text-text-main" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-text-main group-hover:text-white mb-4 transition-colors">Công nghệ</h3>
                            <p className="text-lg text-text-muted font-body leading-relaxed group-hover:text-white/90 transition-colors">
                                Ép nhiệt cơ học kết hợp keo tinh bột độc quyền. Không yêu cầu dây chuyền nhập khẩu triệu đô. Khả năng <strong className="font-bold">nhân bản quy mô công nghiệp</strong> cực nhanh bằng cụm máy thủy lực nội địa.
                            </p>
                        </div>
                    </motion.div>

                    {/* Social */}
                    <motion.div variants={itemVars} className="group">
                        <div className="h-full bg-secondary-bg p-10 lg:p-12 rounded-[2.5rem] border border-border/50 hover:bg-white hover:border-primary-cta hover:shadow-2xl hover:shadow-primary-cta/10 transition-all duration-500">
                            <div className="w-20 h-20 bg-primary-bg rounded-2xl flex items-center justify-center border border-border/50 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-500">
                                <HeartHandshake size={40} className="text-primary-cta" />
                            </div>
                            <h3 className="text-3xl font-heading font-bold text-text-main mb-4 group-hover:text-primary-cta transition-colors">Xã hội</h3>
                            <p className="text-lg text-text-muted font-body leading-relaxed">
                                Tạo sinh kế linh hoạt cho sinh viên và lao động lớn tuổi (thu gom, cắt khuy). Mỗi tấm ván là một câu chuyện nhân văn <strong className="text-primary-cta font-bold">tôn vinh mồ hôi công nhân</strong> cảng biển và thợ mỏ.
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
