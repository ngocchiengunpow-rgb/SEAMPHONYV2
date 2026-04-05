import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, TrendingUp, Zap } from 'lucide-react';

export default function SWOTAnalysis() {
    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
    };

    return (
        <section id="swot" className="py-32 bg-secondary-bg relative overflow-hidden">
            <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h2 
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-black text-text-main mb-6 tracking-tight"
                    >
                        Phân Tích SWOT
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Đánh giá <strong className="text-primary-cta font-bold">Nội tại & Ngoại cảnh</strong> để tối ưu hóa chiến lược cạnh tranh.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Strengths */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="bg-primary-bg rounded-[2rem] p-8 lg:p-10 border-t-8 border-t-green-500 shadow-xl relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                            <ShieldCheck size={64} className="text-green-500" />
                        </div>
                        <h3 className="text-3xl font-heading font-black mb-6 text-text-main">S - Strengths</h3>
                        <div className="text-green-600 font-bold mb-4 font-body uppercase tracking-widest text-sm">Điểm Mạnh Thực Lực</div>
                        <ul className="space-y-4 font-body text-text-muted">
                            <li className="flex items-start gap-3"><span className="text-green-500 font-black mt-1">✓</span> Nguyên liệu giá thấp & dồi dào từ bến cảng/KCN, triệt tiêu phí đầu vào.</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-black mt-1">✓</span> Công nghệ an toàn 100% nhờ hệ keo sinh học, phụ gia tự nhiên, Nano Chitosan.</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-black mt-1">✓</span> Giá trị thương hiệu mạnh mẽ, dễ gây thiện cảm, đạt chuẩn ESG.</li>
                            <li className="flex items-start gap-3"><span className="text-green-500 font-black mt-1">✓</span> Thẩm mỹ thô mộc (Industrial) độc bản không bị trùng lặp.</li>
                        </ul>
                    </motion.div>

                    {/* Weaknesses */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }} className="bg-primary-bg rounded-[2rem] p-8 lg:p-10 border-t-8 border-t-amber-500 shadow-xl relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                            <AlertTriangle size={64} className="text-amber-500" />
                        </div>
                        <h3 className="text-3xl font-heading font-black mb-6 text-text-main">W - Weaknesses</h3>
                        <div className="text-amber-600 font-bold mb-4 font-body uppercase tracking-widest text-sm">Điểm Yếu Tồn Đọng</div>
                        <ul className="space-y-4 font-body text-text-muted">
                            <li className="flex items-start gap-3"><span className="text-amber-500 font-black mt-1">!</span> <div>Năng lực sản xuất ban đầu còn hạn chế, khó theo tiến độ dự án lớn. <br className="hidden md:block"/><strong className="text-amber-600/80 text-sm">↳ Phản biện: Hợp tác xưởng ép gỗ địa phương gia công giai đoạn 1.</strong></div></li>
                            <li className="flex items-start gap-3"><span className="text-amber-500 font-black mt-1">!</span> <div>Thương hiệu mới mẻ, nhóm sinh viên chưa có mạng lưới sâu rộng. <br className="hidden md:block"/><strong className="text-amber-600/80 text-sm">↳ Phản biện: Đi từ thị trường ngách B2B nội vùng nhỏ lẻ để build portfolio.</strong></div></li>
                            <li className="flex items-start gap-3"><span className="text-amber-500 font-black mt-1">!</span> <div>Phụ thuộc vào khâu sơ chế thủ công (loại bỏ khóa kéo, cúc bấm). <br className="hidden md:block"/><strong className="text-amber-600/80 text-sm">↳ Phản biện: Nghiên cứu nâng cấp máy phân loại từ tính.</strong></div></li>
                        </ul>
                    </motion.div>

                    {/* Opportunities */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }} className="bg-primary-bg rounded-[2rem] p-8 lg:p-10 border-t-8 border-t-blue-500 shadow-xl relative group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                            <TrendingUp size={64} className="text-blue-500" />
                        </div>
                        <h3 className="text-3xl font-heading font-black mb-6 text-text-main">O - Opportunities</h3>
                        <div className="text-blue-600 font-bold mb-4 font-body uppercase tracking-widest text-sm">Cơ Hội Thị Trường</div>
                        <ul className="space-y-4 font-body text-text-muted">
                            <li className="flex items-start gap-3"><span className="text-blue-500 font-black mt-1">↑</span> Bùng nổ công trình xanh (LEED, LOTUS), tạo nguồn cầu vật liệu tái chế.</li>
                            <li className="flex items-start gap-3"><span className="text-blue-500 font-black mt-1">↑</span> Trợ lực vĩ mô từ mục tiêu Net Zero & Luật Bảo vệ Môi trường mới.</li>
                            <li className="flex items-start gap-3"><span className="text-blue-500 font-black mt-1">↑</span> Áp lực ESG khiến các doanh nghiệp FDI chủ động cung cấp rác miễn phí.</li>
                        </ul>
                    </motion.div>

                    {/* Threats */}
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.3 }} className="bg-text-main rounded-[2rem] p-8 lg:p-10 shadow-xl relative group hover:shadow-2xl hover:-translate-y-2 hover:shadow-red-500/20 transition-all duration-500 overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-red-500"></div>
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">
                            <Zap size={64} className="text-red-500" />
                        </div>
                        <h3 className="text-3xl font-heading font-black mb-6 text-white">T - Threats</h3>
                        <div className="text-red-400 font-bold mb-4 font-body uppercase tracking-widest text-sm">Mối Đe Dọa Ngoại Cảnh</div>
                        <ul className="space-y-4 font-body text-white/70">
                            <li className="flex items-start gap-3"><span className="text-red-500 font-black mt-1">✕</span> <div>Rào cản tâm lý e ngại về chất lượng/vệ sinh với vật liệu rác. <br className="hidden md:block"/><strong className="text-red-300 text-sm">↳ Đối sách: Publish báo cáo Lab Test 0% vi khuẩn & chứng minh công nghệ Nano.</strong></div></li>
                            <li className="flex items-start gap-3"><span className="text-red-500 font-black mt-1">✕</span> <div>Cạnh tranh khốc liệt về giá gốc từ mút xốp kim tự tháp. <br className="hidden md:block"/><strong className="text-red-300 text-sm">↳ Đối sách: Đánh mạnh vào insight chống cháy lan & thẩm mỹ thay vì Cạnh tranh giá rác.</strong></div></li>
                            <li className="flex items-start gap-3"><span className="text-red-500 font-black mt-1">✕</span> <div>Rủi ro sao chép công nghệ ép nhiệt từ các ông lớn. <br className="hidden md:block"/><strong className="text-red-300 text-sm">↳ Đối sách: Giữ kín công thức keo sinh học + Đăng ký bản quyền SHTT sớm nhất.</strong></div></li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
