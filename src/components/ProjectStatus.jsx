import React from 'react';
import { motion } from 'framer-motion';
import { Flag, PlayCircle, Milestone } from 'lucide-react';

export default function ProjectStatus() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.9 } }
    };

    return (
        <section id="status" className="py-16 lg:py-24 bg-primary-bg relative border-t border-border/50">
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
                        Trạng thái hiện tại & Bước tiếp theo <span className="text-primary-cta">của Seamphony</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Seamphony đang đi từ ý tưởng đến xưởng pilot bằng những bước cụ thể, có thể kiểm chứng.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-white p-8 lg:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-[40px]"></div>
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main relative z-10">
                            <Flag className="text-accent" /> Hiện tại chúng tôi đang ở đâu?
                        </h3>
                        <ul className="space-y-4 text-text-muted font-body relative z-10">
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Hoàn thiện ý tưởng và mô hình kinh doanh dựa trên bài toán vải vụn dệt may – không gian dịch vụ ồn ào tại Hải Phòng – Quảng Ninh.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Nghiên cứu thành công sản phẩm MVP panel tiêu âm từ vải vụn theo quy trình nonwoven – ép nhiệt.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Khảo sát 10 quán café, nhận phản hồi tích cực và sẵn sàng thử nghiệm nếu dự án đi vào vận hành.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5"><div className="w-2 h-2 rounded-full bg-accent"></div></div>
                                <span>Xây dựng website giới thiệu dự án và bộ tài liệu nền tảng cho thi tuyển, gọi vốn và tìm kiếm đối tác.</span>
                            </li>
                            <li className="flex items-start gap-3 p-3 bg-white rounded-xl border border-border/50">
                                <span className="text-primary-cta mt-1 shrink-0 font-bold">👉</span>
                                <span className="font-semibold text-text-main">Chưa thành lập pháp nhân, đang trong giai đoạn hoàn thiện hồ sơ và chuẩn bị cho xưởng pilot.</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 lg:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cta/5 rounded-full blur-[40px]"></div>
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main relative z-10">
                            <PlayCircle className="text-primary-cta" /> Trong 12 tháng tới chúng tôi sẽ làm gì?
                        </h3>
                        <ul className="space-y-5 text-text-muted font-body relative z-10">
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">01</div>
                                <div>
                                    <p className="text-sm">Thiết lập xưởng pilot 150–200 m² tại Hải Phòng, đạt sản lượng ban đầu 100–150 m² panel/tháng.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">02</div>
                                <div>
                                    <p className="text-sm">Ký kết 2–3 thỏa thuận thu gom vải vụn tiền tiêu dùng với xưởng may/HTX tại Hải Phòng – Quảng Ninh.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">03</div>
                                <div>
                                    <p className="text-sm">Triển khai 3–5 công trình demo (café, homestay, văn phòng), đo mức ồn trước – sau và thu thập phản hồi người dùng.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">04</div>
                                <div>
                                    <p className="text-sm">Hợp tác với phòng thí nghiệm/đơn vị chuyên môn để đo hệ số hấp thụ âm theo chuẩn ISO, hoàn thiện hồ sơ kỹ thuật sản phẩm.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 p-4 bg-secondary-bg rounded-xl border border-border/50">
                                <div className="font-heading font-black text-2xl text-border mt-0.5">05</div>
                                <div>
                                    <p className="text-sm">Chuẩn bị cho giai đoạn mở rộng sản lượng lên 300 m²/tháng và tiếp cận nguồn vốn pre‑seed/ươm tạo.</p>
                                </div>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
