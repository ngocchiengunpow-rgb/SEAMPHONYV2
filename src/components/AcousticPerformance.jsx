import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function AcousticPerformance() {
    const nrcData = [
        {
            name: "Bê tông phẳng / Kính cường lực",
            nrc: 0.05,
            desc: "Kém, phản xạ hơn 95% âm thanh, gây cộng hưởng vang.",
            color: "bg-text-muted/20 text-text-muted"
        },
        {
            name: "Ván gỗ ép tự nhiên (MDF/Plywood)",
            nrc: 0.23,
            desc: "Thấp, âm thanh dội lại mạnh.",
            color: "bg-text-muted/40 text-text-muted"
        },
        {
            name: "Tấm tiêu âm mút xốp",
            nrc: 0.90,
            desc: "Tốt nhưng rủi ro cháy nổ cao, sinh khói độc, thẩm mỹ kém.",
            color: "bg-text-muted/60 text-text-muted"
        },
        {
            name: "Panel Vải Vụn Seamphony",
            nrc: 0.80,
            desc: "Rất tốt. Dựa trên công bố quốc tế (PMC/NCBI, SAGE Journals), cấu trúc nonwoven từ xơ vải tái chế đạt NRC 0.60 - 0.90. Có thể thay thế hoàn toàn panel sợi thủy tinh độc hại.",
            color: "bg-gradient-to-r from-primary-cta to-accent text-white"
        },
    ];

    return (
        <section id="acoustic" className="py-24 bg-primary-bg relative scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Khả năng Tiêu âm Vượt trội <span className="text-primary-cta">(Hệ số NRC)</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Hiệu suất cách âm thực tế so sánh với các vật liệu xây dựng và trang trí nội thất phổ biến trên thị trường.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className="bg-secondary-bg p-8 lg:p-16 rounded-[2.5rem] border border-border/80 shadow-2xl relative max-w-5xl mx-auto"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-cta/10 rounded-full blur-[80px] mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] mix-blend-multiply"></div>

                    <div className="space-y-12 relative z-10">
                        {nrcData.map((item, index) => {
                            const isHighlight = item.name.includes("Seamphony");
                            return (
                                <div key={index} className="relative group">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-4 font-body gap-2">
                                        <span className={`text-xl font-bold ${isHighlight ? 'text-text-main text-2xl' : 'text-text-muted'}`}>{item.name}</span>
                                        <span className={`font-black text-2xl ${isHighlight ? 'text-primary-cta text-4xl' : 'text-text-main'}`}>
                                            NRC {item.nrc.toFixed(2)}
                                        </span>
                                    </div>

                                    <div className="w-full bg-primary-bg rounded-full h-6 mb-3 overflow-hidden border border-border/50 shadow-inner">
                                        <motion.div
                                            className={`h-full rounded-full ${item.color} relative overflow-hidden`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${item.nrc * 100}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: 0.2 + index * 0.15, type: "spring", bounce: 0.2 }}
                                        >
                                            {isHighlight && <div className="absolute inset-0 bg-white/20 -skew-x-12 translate-x-[-100%] animate-[shimmer_2s_infinite]"></div>}
                                        </motion.div>
                                    </div>

                                    <p className={`text-base md:text-lg tracking-wide leading-relaxed ${isHighlight ? 'text-text-main font-semibold' : 'text-text-muted/80'}`}>{item.desc}</p>
                                </div>
                            )
                        })}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="inline-flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base font-bold tracking-widest uppercase border border-border/50 bg-secondary-bg/50 px-8 py-4 rounded-full shadow-sm text-text-muted">
                        <span>Mút xốp: <span className="text-text-main">NRC 0.50</span></span>
                        <span className="text-border">|</span>
                        <span>Panel PET nỉ ép: <span className="text-text-main">NRC 0.75</span></span>
                        <span className="text-border">|</span>
                        <span className="text-primary-cta">Seamphony: <span className="text-text-main">NRC 0.60-0.90</span></span>
                    </p>
                    <p className="mt-6 text-sm text-text-muted/80 italic max-w-3xl mx-auto">
                        * Các giá trị NRC là mục tiêu thiết kế dựa trên tổng hợp kết quả từ các nghiên cứu quốc tế về panel vải vụn, sẽ được kiểm chứng tại phòng thí nghiệm độc lập trong giai đoạn pilot.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
