import React from 'react';
import { motion } from 'framer-motion';
import { Handshake } from 'lucide-react';

export default function TheAsk() {
    return (
        <section id="the-ask" className="py-16 lg:py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                    className="bg-white text-text-main rounded-[2.5rem] p-10 lg:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-border/50 relative overflow-hidden transform hover:-translate-y-2 transition-transform duration-500 scroll-mt-32"
                >
                    <div className="absolute top-0 left-0 w-3 h-full bg-primary-cta"></div>
                    <div className="absolute -top-[20%] -right-[10%] w-[400px] h-[400px] bg-primary-cta/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <h3 className="text-4xl md:text-5xl font-heading font-black mb-12 flex items-center gap-5 tracking-tight relative z-10">
                        <Handshake size={48} className="text-primary-cta" /> Điều đội thi mong muốn
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-10 relative z-10">
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">1</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Kết Nối Đầu Tư & Tài Trợ</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Tìm kiếm nguồn vốn khởi điểm để chi trả <strong>chứng nhận đo lường âm học và chống cháy</strong> nhằm tạo tiền đề pháp lý vững chắc cho thương mại hóa.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">2</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Cố Vấn Chuyên Môn</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Mong muốn kết nối với các <strong>chuyên gia kỹ thuật vật liệu</strong> để tư vấn tối ưu máy móc và hoạch định chiến lược với khách hàng doanh nghiệp B2B.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="w-14 h-14 bg-secondary-bg rounded-2xl flex items-center justify-center text-primary-cta font-black text-2xl shadow-sm border border-border/50">3</div>
                            <h4 className="font-heading font-bold text-xl text-text-main">Mở Rộng Mạng Lưới</h4>
                            <p className="font-body text-text-muted text-base leading-relaxed">Cơ hội cọ xát thực chiến trước các Quỹ và <strong>tìm kiếm các đối tác thi công</strong> sẵn sàng hỗ trợ đưa sản phẩm panel Seamphony tiếp cận thị trường thử nghiệm.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
