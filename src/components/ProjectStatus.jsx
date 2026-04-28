import React from 'react';
import { motion } from 'framer-motion';
import { Flag, PlayCircle, Milestone } from 'lucide-react';

export default function ProjectStatus() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="status" className="py-24 bg-primary-bg relative border-t border-border/50">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="inline-flex items-center justify-center p-3 bg-primary-cta/10 rounded-2xl mb-6 text-primary-cta"
                    >
                        <Milestone size={32} />
                    </motion.div>
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6"
                    >
                        Trạng thái hiện tại & <span className="text-primary-cta">Bước tiếp theo</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Minh bạch về tiến độ dự án để chào đón các nhà đầu tư và đối tác tiên phong.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-secondary-bg p-8 lg:p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px]"></div>
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main relative z-10">
                            <Flag className="text-accent" /> Hiện tại chúng tôi đã có:
                        </h3>
                        <ul className="space-y-4 text-text-muted font-body relative z-10">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Hoàn thành nghiên cứu sản phẩm mẫu (MVP).</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Hoàn thiện báo cáo mô hình kinh doanh chi tiết.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Tiến hành khảo sát trực tiếp 10 quán café trên địa bàn.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Vận hành phiên bản đầu tiên của website giới thiệu.</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/50">
                                <span className="text-primary-cta mt-1 shrink-0 font-bold">👉</span>
                                <span className="font-semibold text-text-main">Mục tiêu hiện tại: Tìm kiếm đối tác pilot và huy động nguồn vốn Pre-seed.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 lg:p-10 rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cta/5 rounded-full blur-[40px]"></div>
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main relative z-10">
                            <PlayCircle className="text-primary-cta" /> Bước tiếp theo (12 tháng tới):
                        </h3>
                        <ul className="space-y-5 text-text-muted font-body relative z-10">
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">01</div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-1">Xây dựng xưởng Pilot</h4>
                                    <p className="text-sm">Đầu tư máy móc cơ bản (cắt, băm, ép nhiệt) tại Hải Phòng để tiêu chuẩn hóa thông số sản xuất.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">02</div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-1">Kiểm định độc lập</h4>
                                    <p className="text-sm">Gửi mẫu đến phòng lab uy tín để có chứng nhận chính thức về hệ số tiêu âm NRC và khả năng chống cháy.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">03</div>
                                <div>
                                    <h4 className="font-bold text-text-main mb-1">Thi công 3-5 công trình Demo</h4>
                                    <p className="text-sm">Lắp đặt thử nghiệm tại các không gian F&B, homestay để đo lường hiệu quả giảm ồn thực tế và thu thập phản hồi.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
