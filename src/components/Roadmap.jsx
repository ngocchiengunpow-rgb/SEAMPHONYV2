import React from 'react';
import { motion } from 'framer-motion';

export default function Roadmap() {
    return (
        <section id="roadmap" className="py-24 bg-secondary-bg relative border-t border-border/50">
            <div className="max-w-5xl mx-auto px-6 lg:px-12">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6">
                        Lộ trình phát triển <span className="text-primary-cta">Seamphony</span>
                    </h2>
                    <p className="text-lg text-text-muted font-body">
                        Seamphony được triển khai theo ba giai đoạn, từ xưởng pilot đến mạng lưới "micro-hub tuần hoàn".
                    </p>
                </div>

                <div className="relative border-l-2 border-border ml-6 md:ml-0 md:border-none space-y-16">
                    {/* Timeline Line for Desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-border -translate-x-1/2"></div>

                    {/* Stage 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0, duration: 0.9 }}
                        className="relative flex flex-col md:flex-row items-center md:justify-between w-full group"
                    >
                        <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary-cta shadow-[0_0_0_8px_rgba(234,88,12,0.1)] border-2 border-white z-10 transition-transform duration-300 group-hover:scale-125"></div>
                        <div className="md:w-5/12 ml-6 md:ml-0 md:text-right md:pr-12 w-full">
                            <div className="bg-white p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 inline-block text-left w-full md:text-right hover:-translate-y-1">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary-cta/10 text-primary-cta font-bold text-sm tracking-wider uppercase mb-3">Giai đoạn 1</span>
                                <h3 className="text-2xl font-heading font-bold text-text-main mb-4">0 – 12 tháng: Hoàn thiện pilot & chứng minh</h3>
                                <ul className="space-y-3 font-body text-text-muted md:ml-auto md:mr-0 inline-block text-left w-full">
                                    <li className="flex gap-2"><span>•</span> <span>Thiết lập xưởng pilot 150 – 200 m² tại Hải Phòng, đạt sản lượng ban đầu 100 – 150 m² panel/tháng.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Hoàn thiện quy trình kỹ thuật 6 bước: thu gom – phân loại – cắt/mở xơ – phối trộn – ép nhiệt – kiểm định.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Lắp đặt 3 – 5 công trình demo (café, homestay, văn phòng) và đo mức ồn trước – sau để xây dựng case study.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Ký kết 2 – 3 thoả thuận thu gom vải vụn với xưởng may/HTX tại Hải Phòng – Quảng Ninh.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-5/12 hidden md:block"></div>
                    </motion.div>

                    {/* Stage 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.1 }}
                        className="relative flex flex-col md:flex-row items-center md:justify-between w-full group"
                    >
                        <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-accent shadow-[0_0_0_8px_rgba(37,99,235,0.1)] border-2 border-white z-10 transition-transform duration-300 group-hover:scale-125"></div>
                        <div className="md:w-5/12 hidden md:block"></div>
                        <div className="md:w-5/12 ml-6 md:ml-0 md:pl-12 w-full mt-6 md:mt-0">
                            <div className="bg-white p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 inline-block text-left w-full hover:-translate-y-1">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-bold text-sm tracking-wider uppercase mb-3">Giai đoạn 2</span>
                                <h3 className="text-2xl font-heading font-bold text-text-main mb-4">12 – 24 tháng: Ổn định sản lượng & dòng tiền</h3>
                                <ul className="space-y-3 font-body text-text-muted inline-block text-left w-full">
                                    <li className="flex gap-2"><span>•</span> <span>Tăng sản lượng lên khoảng 300 m² panel/tháng với chất lượng ổn định.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Mở rộng kênh B2B: nhà thầu nội thất, kho vật liệu xây dựng, kiến trúc sư tại Hải Phòng – Quảng Ninh.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Đạt cột mốc dòng tiền dương và bắt đầu chuẩn bị cho mở rộng sang địa bàn mới.</span></li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Stage 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.2 }}
                        className="relative flex flex-col md:flex-row items-center md:justify-between w-full group"
                    >
                        <div className="absolute left-[-33px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-green-500 shadow-[0_0_0_8px_rgba(34,197,94,0.1)] border-2 border-white z-10 transition-transform duration-300 group-hover:scale-125"></div>
                        <div className="md:w-5/12 ml-6 md:ml-0 md:text-right md:pr-12 w-full mt-6 md:mt-0">
                            <div className="bg-white p-6 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-300 inline-block text-left w-full md:text-right hover:-translate-y-1">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-green-500/10 text-green-600 font-bold text-sm tracking-wider uppercase mb-3">Giai đoạn 3</span>
                                <h3 className="text-2xl font-heading font-bold text-text-main mb-4">Sau 24 tháng: Nhân rộng "micro-hub tuần hoàn"</h3>
                                <ul className="space-y-3 font-body text-text-muted md:ml-auto md:mr-0 inline-block text-left w-full">
                                    <li className="flex gap-2"><span>•</span> <span>Nhân rộng mô hình sang 2 – 3 cụm dệt may – dịch vụ khác (ví dụ: Nam Định – Thái Bình, Bắc Ninh – Bắc Giang...).</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Mỗi cụm hình thành một "micro-hub": thu gom vải vụn tại chỗ, sản xuất tại chỗ, cung cấp cho thị trường nội thất và dịch vụ địa phương.</span></li>
                                    <li className="flex gap-2"><span>•</span> <span>Hướng tới quy mô tái chế hàng chục tấn vải vụn tiền tiêu dùng mỗi năm và hiện diện tại hàng trăm công trình trên toàn quốc.</span></li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:w-5/12 hidden md:block"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
