import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Leaf, Hammer, Palette, Award } from 'lucide-react';

export default function CoreFeatures() {
    const features = [
        {
            icon: <Award size={32} />,
            title: "Siêu Tiêu Âm",
            text: "Cấu trúc xốp đa lớp từ xơ vải đánh tơi giúp bẫy âm thanh cực tốt ở nhiều dải tần.",
            metric: "NRC 0.60 - 0.90",
            subtext: "Theo nghiên cứu quốc tế."
        },
        {
            icon: <Flame size={32} />,
            title: "Chống Cháy Lan",
            text: "Tích hợp phụ gia khoáng chống cháy tạo lớp bảo vệ an toàn khi gặp nhiệt độ cao.",
            metric: "BS EN ISO chuẩn",
            subtext: "An toàn tuyệt đối cho nhà xưởng."
        },
        {
            icon: <Palette size={32} />,
            title: "Thẩm Mỹ Độc Bản",
            text: "Mỗi tấm panel có sắc độ và vân vải khác nhau, bản sắc riêng không thể copy.",
            metric: "Tùy biến cao",
            subtext: "Thiết kế cho F&B, Homestay."
        },
        {
            icon: <Leaf size={32} />,
            title: "Xanh & An Toàn",
            text: "Công nghệ liên kết nhiệt bằng sợi low-melt, không sử dụng keo Formaldehyde độc hại.",
            metric: "Eco-Friendly 100%",
            subtext: "Không phát tán bụi khoáng."
        },
        {
            icon: <Hammer size={32} />,
            title: "Báo Cáo ESG",
            text: "Mỗi m² panel giải cứu ~0.6kg vải vụn. Cấp Chứng nhận Không gian Tuần hoàn – ghi nhận số m² panel, kg vải tái chế, CO₂ tránh phát thải.",
            metric: "Số liệu minh bạch",
            subtext: "Tài sản truyền thông ESG."
        },
        {
            icon: <Droplets size={32} />,
            title: "Giá Thành Tối Ưu",
            text: "Tận dụng nguồn rác thải dệt may địa phương giúp giữ giá thành cực kỳ cạnh tranh.",
            metric: "Từ 380k/m²",
            subtext: "Biên lợi nhuận gộp 25-35%."
        }
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.9 } }
    };

    return (
        <section className="py-24 md:py-32 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ type: "spring", bounce: 0, duration: 0.9 }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main tracking-tight"
                    >
                        6 Lợi Thế Của Panel Vải Vụn <span className="text-primary-cta">Seamphony</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVars} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVars}
                            whileHover={{
                                scale: 1.02,
                                y: -5,
                                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.1)",
                                borderColor: "rgba(148, 163, 184, 0.3)"
                            }}
                            className="bg-white p-8 lg:p-10 rounded-3xl border border-border/60 shadow-sm transition-all duration-500 flex flex-col h-full group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-cta/5 to-transparent rounded-bl-[100px] -z-10 group-hover:scale-150 transition-transform duration-700"></div>

                            <div className="w-16 h-16 bg-primary-bg rounded-2xl border border-border flex items-center justify-center mb-8 text-primary-cta group-hover:scale-110 group-hover:bg-primary-cta/10 transition-all duration-300 shrink-0 shadow-sm relative z-10">
                                {feature.icon}
                            </div>
                            <div className="mb-4 flex items-start justify-between gap-4 relative z-10">
                                <h3 className="text-2xl font-heading font-bold text-text-main group-hover:text-primary-cta transition-colors">{feature.title}</h3>
                                <span className="px-3 py-1 bg-primary-cta/10 text-primary-cta text-xs font-black rounded-lg uppercase tracking-tight whitespace-nowrap border border-primary-cta/20 shadow-sm">{feature.metric}</span>
                            </div>
                            <p className="text-lg text-text-muted font-body leading-relaxed mb-4 font-light relative z-10">
                                {feature.text}
                            </p>
                            <span className="text-sm font-bold text-text-main/60 uppercase tracking-widest relative z-10 block mt-auto pt-4 border-t border-border/40">— {feature.subtext}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
