import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        q: "Vật liệu làm từ vải vụn dệt may có dễ gây cháy nổ không?",
        a: "KHÔNG. Điểm đột phá của Seamphony là việc phối trộn xơ vải với phụ gia khoáng chống cháy. Khi gặp nhiệt độ cao, phụ gia sẽ tạo ra một lớp màng cách nhiệt ngăn chặn ngọn lửa lan truyền, đảm bảo panel đáp ứng tiêu chuẩn an toàn cháy nổ nội thất."
    },
    {
        q: "Khí hậu miền Bắc rất nồm ẩm, panel có bị trương nở hay nấm mốc không?",
        a: "KHÔNG. Chúng tôi bổ sung thêm các phụ gia chống ẩm trong quá trình trộn xơ, đồng thời lớp vải bọc xuyên âm bên ngoài cũng được xử lý kháng nước. Cấu trúc lõi xốp từ sợi low-melt nung chảy không ngậm nước như gỗ công nghiệp."
    },
    {
        q: "Nguồn nguyên liệu rác thải dệt may có ổn định để sản xuất lâu dài?",
        a: "RẤT DỒI DÀO. Ngành dệt may Việt Nam thải ra khoảng 250.000 tấn rác tiền tiêu dùng mỗi năm. Việc liên kết thu gom tại nguồn giúp các xưởng may tiết kiệm hàng trăm triệu chi phí xử lý rác, đảm bảo nguồn cung đầu vào vô tận cho dự án."
    },
    {
        q: "Panel có phát tán hóa chất độc hại hay mùi hôi vào phòng kín không?",
        a: "AN TOÀN TUYỆT ĐỐI. Công nghệ ép nhiệt (thermal bonding) sử dụng sợi kết dính low-melt hoàn toàn KHÔNG dùng keo Formaldehyde gây ung thư hay các hợp chất hữu cơ bay hơi (VOC) độc hại như các loại ván ép gỗ thông thường."
    }
];

export default function FAQObjectionHandling() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-16 lg:py-24 bg-secondary-bg relative">
            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                        className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6"
                    >
                        <MessageCircleQuestion className="text-accent" size={32} />
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main tracking-tight"
                    >
                        Giải đáp Nút thắt Công nghệ <span className="text-accent">(Q&A)</span>
                    </motion.h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        // Split the answer into highlight part and the rest
                        const answerParts = faq.a.split('. ');
                        const highlightWord = answerParts[0];
                        const remainingText = faq.a.substring(highlightWord.length + 2); // +2 for the dot and space

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}
                                className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'bg-primary-bg border-accent/40 shadow-lg' : 'bg-primary-bg border-border/60 hover:border-accent/50 hover:bg-white/80 shadow-sm'}`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none group"
                                >
                                    <span className={`font-heading font-bold text-xl md:text-2xl pr-8 transition-colors ${isOpen ? 'text-accent' : 'text-text-main group-hover:text-accent'}`}>
                                        {faq.q}
                                    </span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 ${isOpen ? 'bg-accent/10 border border-accent/20 text-accent rotate-180' : 'bg-secondary-bg text-text-muted border border-border group-hover:bg-accent/5 group-hover:text-accent'}`}>
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth spring-like ease
                                        >
                                            <div className="p-6 md:p-8 pt-0 text-text-muted font-body text-lg leading-relaxed border-t border-border/50">
                                                <span className="inline-block font-extrabold text-text-main bg-accent/10 border border-accent/20 px-3 py-1 rounded-lg mr-3 uppercase tracking-wide">
                                                    {highlightWord}
                                                </span>
                                                <span>{remainingText}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
