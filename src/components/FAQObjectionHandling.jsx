import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircleQuestion } from 'lucide-react';

const faqs = [
    {
        q: "Vật liệu làm từ vải bảo hộ có dễ gây cháy nổ không?",
        a: "KHÔNG. Điểm đột phá của Seamphony là việc tích hợp muối Borat (natri tetraborat) tự nhiên vào hệ keo. Khi gặp nhiệt độ cao, hóa chất này sẽ khử nước, tạo ra một lớp than và màng cách nhiệt ngăn chặn ngọn lửa lan truyền, hướng tới việc vượt qua bài test chống cháy BS EN ISO 11925-2."
    },
    {
        q: "Khí hậu miền Bắc rất nồm ẩm, ván có bị mốc và trương nở không?",
        a: "KHÔNG. Ở bước cuối cùng, bề mặt ván được phun phủ một lớp màng nano sinh học siêu mỏng Nano Chitosen. Lớp màng này tạo ra 'hiệu ứng lá sen' kỵ nước, giúp khóa ẩm tuyệt đối mà không làm bít tắc các lỗ rỗng tiêu âm bên trong."
    },
    {
        q: "Nguồn nguyên liệu rác thải liệu có ổn định để sản xuất lâu dài?",
        a: "RẤT DỒI DÀO. Chỉ riêng khu vực khởi nghiệp của nhóm đã có hơn 150.000 công nhân cảng Hải Phòng và 80.000 thợ mỏ Quảng Ninh. Việc liên kết thu gom tại nguồn giúp các doanh nghiệp tiết kiệm 2-3 triệu đồng/tấn chi phí vứt rác, tạo ra nguồn cung đầu vào chi phí 0 đồng và vô tận cho dự án."
    },
    {
        q: "Ván ép có phát tán hóa chất độc hại hay vi nhựa ra phòng kín không?",
        a: "AN TOÀN TUYỆT ĐỐI. Seamphony sử dụng chất kết dính sinh học từ tinh bột este hóa, hoàn toàn KHÔNG chứa Formaldehyde gây ung thư hay các hợp chất hữu cơ bay hơi (VOC) độc hại như các loại ván công nghiệp MDF thông thường."
    }
];

export default function FAQObjectionHandling() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section className="py-24 bg-secondary-bg relative">
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
