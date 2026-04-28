import React from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, FileText } from 'lucide-react';

export default function ContactForm() {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center">
                
                <div className="lg:w-5/12 w-full text-left">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6"
                    >
                        Liên hệ & <span className="text-primary-cta">Đăng ký tư vấn</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body mb-10 leading-relaxed"
                    >
                        Nếu bạn là xưởng may, nhà thầu nội thất, chủ quán café/homestay hoặc đơn vị quan tâm đến ESG và kinh tế tuần hoàn, hãy để lại thông tin để Seamphony liên hệ.
                    </motion.p>

                    <div className="space-y-6">
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary-cta/10 rounded-full flex items-center justify-center text-primary-cta shrink-0">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted font-bold uppercase tracking-wider">Email</p>
                                <a href="mailto:chien103391@st.vimaru.edu.vn" className="text-base md:text-lg font-heading font-bold text-text-main hover:text-primary-cta transition-colors break-all">chien103391@st.vimaru.edu.vn</a>
                            </div>
                        </motion.div>
                        
                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted font-bold uppercase tracking-wider">Hotline</p>
                                <a href="tel:0356882119" className="text-base md:text-lg font-heading font-bold text-text-main hover:text-accent transition-colors">0356 882 119</a>
                            </div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                <FileText size={20} />
                            </div>
                            <div>
                                <p className="text-sm text-text-muted font-bold uppercase tracking-wider">Hồ sơ dự án</p>
                                <a href="/Ho_so_du_an_Seamphony.pdf" download className="text-base md:text-lg font-heading font-bold text-text-main hover:text-green-600 transition-colors">Tải xuống file PDF</a>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="lg:w-7/12 w-full">
                    <motion.form
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                        className="bg-secondary-bg p-8 md:p-12 rounded-[2rem] border border-border shadow-xl space-y-6"
                        onSubmit={(e) => { e.preventDefault(); alert('Cảm ơn bạn đã quan tâm. Chúng tôi sẽ liên hệ lại sớm nhất!'); }}
                    >
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-text-main">Họ và tên *</label>
                                <input type="text" id="name" placeholder="Nhập họ và tên" required className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta transition-all font-body" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-text-main">Email *</label>
                                <input type="email" id="email" placeholder="nhapemail@example.com" required className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta transition-all font-body" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="role" className="text-sm font-bold text-text-main">Bạn là *</label>
                            <div className="relative">
                                <select id="role" className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta transition-all font-body appearance-none" required>
                                    <option value="">Chọn đối tượng...</option>
                                    <option value="contractor">Nhà thầu nội thất / kho VLXD</option>
                                    <option value="cafe">Chủ quán café / homestay / studio</option>
                                    <option value="factory">Xưởng may / DN dệt may</option>
                                    <option value="investor">Nhà đầu tư / chương trình hỗ trợ</option>
                                    <option value="other">Đối tượng khác</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">
                                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-bold text-text-main">Nhu cầu của bạn</label>
                            <textarea id="message" rows="4" placeholder="Mô tả ngắn gọn nhu cầu hoặc câu hỏi của bạn..." className="w-full px-4 py-3 rounded-xl border border-border bg-white focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta transition-all font-body resize-none"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-primary-cta hover:bg-[#d94a08] text-white font-heading font-bold text-lg py-4 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2">
                            Gửi thông tin <Send size={20} />
                        </button>
                    </motion.form>
                </div>

            </div>
        </section>
    );
}
