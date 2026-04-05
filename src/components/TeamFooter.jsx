import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Mail, Lightbulb, MapPin, Handshake, Phone } from 'lucide-react';

export default function TeamFooter() {
    return (
        <footer id="team" className="bg-text-main text-white pt-32 pb-16 relative overflow-hidden">
            {/* Sleek architectural dark gradients */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-primary-cta/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                {/* The Ask Section - Massive Highlight Card */}
                <motion.div
                    id="the-ask"
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white text-text-main rounded-[2.5rem] p-10 lg:p-16 mb-24 shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 scroll-mt-32"
                >
                    <div className="absolute top-0 left-0 w-3 h-full bg-primary-cta"></div>

                    <h3 className="text-4xl md:text-5xl font-heading font-black mb-12 flex items-center gap-5 tracking-tight">
                        <Handshake size={48} className="text-primary-cta" /> Điều đội thi mong muốn
                    </h3>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">1</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Kết Nối Đầu Tư & Tài Trợ</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Tìm kiếm nguồn vốn khởi điểm để chi trả <strong>chứng nhận đo lường an toàn kỹ thuật (chống cháy, cách âm)</strong> nhằm tạo tiền đề pháp lý vững chắc cho thương mại hóa.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">2</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Cố Vấn Chuyên Môn</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Mong muốn kết nối với các <strong>chuyên gia kỹ thuật vật liệu</strong> để tư vấn tối ưu máy móc và hoạch định chiến lược với khách hàng doanh nghiệp B2B.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">3</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Mở Rộng Mạng Lưới</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Cơ hội cọ xát thực chiến trước các Quỹ và <strong>tìm kiếm các đối tác thi công</strong> sẵn sàng hỗ trợ đưa sản phẩm ván ép Seamphony tiếp cận thị trường thử nghiệm.</p>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 lg:gap-24 mb-20">
                    {/* Team */}
                    <div id="founders" className="scroll-mt-32">
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-heading font-black mb-10 text-white flex items-center gap-4"
                        >
                            <UsersIcon size={36} className="text-accent" /> Nhà sáng lập
                        </motion.h3>
                        <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
                        >
                            <div className="flex gap-6 items-center mb-4">
                                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                                    <User size={32} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-heading font-bold text-white mb-1">Nguyễn Ngọc Chiến</h4>
                                    <p className="text-accent font-black text-sm uppercase tracking-widest mb-1">Founder</p>
                                    <p className="text-white/60 font-body text-xs">Khoa Kinh tế, Đại học Hàng Hải VN</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                            className="bg-white/5 p-6 rounded-[2rem] border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md"
                        >
                            <div className="flex gap-6 items-center flex-wrap">
                                <div className="flex gap-4 w-full">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                                        <User size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-heading font-bold text-white mb-1">Trương Ngọc Khánh Duy</h4>
                                        <p className="text-accent font-black text-xs uppercase tracking-widest leading-none mb-1">Co-Founder</p>
                                        <p className="text-white/60 font-body text-xs line-clamp-1">Viện ĐT Quốc tế, ĐH Hàng Hải VN</p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-white/10 my-1"></div>
                                <div className="flex gap-4 w-full">
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0 border border-white/20">
                                        <User size={24} className="text-white" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-xl font-heading font-bold text-white mb-1">Bùi Thanh Thủy</h4>
                                        <p className="text-accent font-black text-xs uppercase tracking-widest leading-none mb-1">Co-Founder</p>
                                        <p className="text-white/60 font-body text-xs line-clamp-1">Viện ĐT Quốc tế, ĐH Hàng Hải VN</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <p className="text-white/50 text-sm font-body italic pl-2 border-l-2 border-accent">Trong năm đầu tiên, nhóm phân công vận hành toàn diện bao trùm khối chuyên môn cơ khí, vật liệu và kinh doanh thị trường.</p>
                    </div>
                </div>

                    {/* Vision */}
                    <div>
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="text-3xl lg:text-4xl font-heading font-black mb-10 text-white flex items-center gap-4"
                        >
                            <Rocket size={36} className="text-primary-cta" /> Tầm nhìn Tương lai
                        </motion.h3>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            className="bg-primary-cta/10 p-10 rounded-[2.5rem] border border-primary-cta/30 backdrop-blur-md h-full flex flex-col justify-center"
                        >
                            <Lightbulb size={48} className="text-primary-cta mb-8" />
                            <p className="text-xl font-body leading-relaxed text-white/90 font-light">
                                Không dừng lại ở ốp tường tiêu âm. Tham vọng của Seamphony là cải tiến lực nén siêu cường độ để <strong className="font-bold text-white text-2xl block mt-4">Thay thế hoàn toàn gỗ công nghiệp truyền thống.</strong><br />
                                <span className="text-white/70 block mt-4 text-lg">Biến rác dệt may đứt gãy thành bàn, ghế, tủ, kệ tủ văn phòng tái chế 100%.</span>
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Brand Center */}
                <div className="flex flex-col items-center justify-center py-12 border-t border-white/10 mt-12 mb-6">
                    <img src="/logo.png" alt="Seamphony" className="w-24 h-24 object-contain brightness-0 invert opacity-50 hover:opacity-100 transition-opacity mb-6" onError={(e) => e.target.style.display = 'none'} />
                    <h2 className="font-heading font-black tracking-[0.2em] text-2xl text-white/50">SEAMPHONY</h2>
                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 font-body text-sm lowercase tracking-wider">
                    <p>© 2026 seamphony project. i-startup 2026.</p>
                    <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                        <a href="tel:0356882119" className="flex items-center gap-3 hover:text-primary-cta transition-colors cursor-pointer"><Phone size={18} /> 0356 882 119</a>
                        <a href="mailto:chien103391@st.vimaru.edu.vn" className="flex items-center gap-3 hover:text-primary-cta transition-colors cursor-pointer"><Mail size={18} /> chien103391@st.vimaru.edu.vn</a>
                        <span className="flex items-center gap-3 hover:text-primary-cta transition-colors"><MapPin size={18} /> hai phong, vietnam</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

function UsersIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
    )
}
