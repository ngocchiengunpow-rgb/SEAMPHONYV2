import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Shirt, Factory, Scissors, Droplet, Zap } from 'lucide-react';
import { useRef } from 'react';

const steps = [
    {
        icon: Shirt,
        title: "1. Thu gom & Phân loại",
        desc: "Thu gom từ các nhà máy, bến cảng. Phân loại thô theo màu sắc (Xanh thợ mỏ, Cam cảng biển).",
        color: "bg-accent/10 text-accent border-accent/20"
    },
    {
        icon: Factory,
        title: "2. Xử lý Công nghiệp",
        desc: "Cắt xén loại bỏ vật liệu cứng. Giặt sấy khử khuẩn dầu mỡ. Đưa qua băng chuyền từ loại bỏ mạt sắt.",
        color: "bg-primary-cta/10 text-primary-cta border-primary-cta/20"
    },
    {
        icon: Scissors,
        title: "3. Băm Đánh Tơi",
        desc: "Đánh tơi thành dạng sợi bông. Cấu trúc sợi tạo thành hàng triệu lỗ rỗng vi mô giúp bẫy âm thanh.",
        color: "bg-text-muted/10 text-text-muted border-text-muted/20"
    },
    {
        icon: Droplet,
        title: "4. Phối Trộn Sinh Học",
        desc: "Sử dụng keo tinh bột biến tính. Bổ sung muối borat tự nhiên tạo liên kết chéo, chống cháy phi halogen.",
        color: "bg-accent/10 text-accent border-accent/20"
    },
    {
        icon: Zap,
        title: "5. Ép Nhiệt & Phủ Nano",
        desc: "Ép nhiệt áp suất cao. Phủ màng sinh học Nano Chitosan kỵ nước. Khóa ẩm chống nồm mà vẫn giữ rỗng 100%.",
        color: "bg-primary-cta/10 text-primary-cta border-primary-cta/20"
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
                        initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-heading font-extrabold mb-8 tracking-tight"
                    >
                        Bản chất Công nghệ
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, type: "spring" }}
                        className="text-xl md:text-2xl font-body leading-relaxed text-text-muted font-light"
                    >
                        Nén chặt hàng triệu sợi vải cũ lại với nhau bằng <strong className="text-text-main">keo sinh học</strong>, hoàn toàn không chứa Formaldehyde độc hại hay VOC. Sản phẩm là một loại "gỗ" mới làm từ vải.
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
                                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
                                    <div className={`bg-primary-bg p-8 lg:p-10 rounded-[2rem] border shadow-sm hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 ${step.color.replace('bg-', 'border-').replace('/10', '/30')}`}>
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
