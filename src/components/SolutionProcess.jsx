import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shirt, Factory, Scissors, Droplet, Zap } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        icon: Shirt,
        title: "1. Thu gom & Phân loại",
        desc: "Thu gom vải vụn tiền tiêu dùng từ xưởng may. Phân loại theo nhóm sợi, loại bỏ phụ kiện kim loại, nhựa.",
        color: "bg-accent/10 text-accent border-accent/20"
    },
    {
        icon: Scissors,
        title: "2. Cắt & Mở xơ",
        desc: "Dùng máy shredder cắt vải thành mảnh 2-5cm. Máy đánh tơi (fiber opener) chuyển mảnh vải thành xơ rời.",
        color: "bg-primary-cta/10 text-primary-cta border-primary-cta/20"
    },
    {
        icon: Droplet,
        title: "3. Phối trộn Phụ gia",
        desc: "Trộn 60-70% xơ vải với 20-25% sợi low-melt kết dính và 8-12% phụ gia khoáng chống cháy, chống ẩm.",
        color: "bg-text-muted/10 text-text-muted border-text-muted/20"
    },
    {
        icon: Factory,
        title: "4. Tạo thảm & Ép nhiệt",
        desc: "Rải hỗn hợp lên khuôn thép. Ép nhiệt thủy lực ở 160-200°C làm sợi low-melt nóng chảy, tạo lõi xốp cứng.",
        color: "bg-accent/10 text-accent border-accent/20"
    },
    {
        icon: Zap,
        title: "5. Hoàn thiện Cá nhân hóa",
        desc: "Cắt chuẩn kích thước 600x600 hoặc 600x1200mm. Bọc vải nỉ/polyester xuyên âm, in thêu logo theo yêu cầu.",
        color: "bg-primary-cta/10 text-primary-cta border-primary-cta/20"
    },
    {
        icon: Zap,
        title: "6. Kiểm định & Demo",
        desc: "Đo hệ số hấp thụ âm bằng ống trở kháng. Lắp đặt công trình demo thực tế để đo mức ồn trước-sau.",
        color: "bg-text-muted/10 text-text-muted border-text-muted/20"
    }
];

export default function SolutionProcess() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section id="solution" className="py-32 bg-primary-bg text-text-main relative scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0, duration: 0.9 }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-8 tracking-tight"
                    >
                        Bản chất Công nghệ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.2 }}
                        className="text-xl md:text-2xl font-body leading-relaxed text-text-muted font-light"
                    >
                        Ứng dụng chuỗi công nghệ <strong className="text-text-main">vải không dệt - ép nhiệt (nonwoven thermal bonding)</strong>, chuyển hóa vải vụn thành vật liệu nội thất xanh đạt chuẩn âm học.
                    </motion.p>
                </div>

                {/* Scroll-driven Timeline */}
                <div ref={containerRef} className="relative max-w-5xl mx-auto pl-4 md:pl-0">
                    {/* Animated Line */}
                    <div className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-secondary-bg md:-translate-x-1/2 rounded-full hidden sm:block z-0"></div>
                    <motion.div
                        style={{ scaleY: pathLength, transformOrigin: 'top' }}
                        className="absolute left-[39px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-cta to-accent md:-translate-x-1/2 rounded-full hidden sm:block z-0"
                    ></motion.div>

                    {steps.map((step, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40, scale: 0.98 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ type: "spring", bounce: 0, duration: 0.9, delay: 0.1 }}
                                className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 last:mb-0 group ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-[12px] md:left-1/2 shrink-0 md:-translate-x-1/2 z-10 hidden sm:flex mt-1 md:mt-0">
                                    <div className={`w-14 h-14 bg-primary-bg rounded-full border-4 shadow-xl flex items-center justify-center transition-transform duration-300 transform group-hover:rotate-12 group-hover:scale-110 ${step.color.split(' ')[0]}`}>
                                        <step.icon size={24} className={step.color.split(' ')[1]} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className={`w-full sm:pl-28 md:pl-0 md:w-1/2 ${isEven ? 'md:pl-20' : 'md:pr-20'}`}>
                                    <div className={`bg-white p-8 lg:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl transition-all duration-500 group-hover:-translate-y-1 relative overflow-hidden`}>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color.replace('text-', 'from-').split(' ')[0]}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
                                        <div className="flex items-center gap-4 mb-4 sm:hidden">
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${step.color}`}>
                                                <step.icon size={24} />
                                            </div>
                                        </div>
                                        <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">{step.title}</h3>
                                        <p className="text-lg font-body leading-relaxed text-text-muted">{step.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
