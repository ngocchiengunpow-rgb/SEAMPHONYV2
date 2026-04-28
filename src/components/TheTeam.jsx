import React from 'react';
import { motion } from 'framer-motion';
import { User, Rocket, Lightbulb } from 'lucide-react';

export default function TheTeam() {
    return (
        <section id="founders" className="py-16 lg:py-24 bg-text-main relative overflow-hidden scroll-mt-32">
            {/* Sleek architectural dark gradients */}
            <div className="absolute top-0 right-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-primary-cta/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
                    {/* Team */}
                    <div>
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
            </div>
        </section>
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
