import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Droplets, Leaf, Hammer, Palette, Award } from 'lucide-react';

export default function CoreFeatures() {
    const features = [
        {
            icon: <Award size={32} />,
            title: "Siêu Tiêu Âm",
            text: "Cấu trúc hàng triệu lỗ rỗng vi mô giúp bẫy âm thanh cực tốt ở dải tần 500-2000Hz.",
            metric: "NRC 0.65 - 0.80",
            subtext: "Tương đương gỗ tiêu âm đắt đỏ."
        },
        {
            icon: <Flame size={32} />,
            title: "Chống Cháy Lan",
            text: "Tích hợp muối Borat tự nhiên tạo lớp than cách nhiệt khi gặp nhiệt độ cao.",
            metric: "BS EN ISO 11925-2",
            subtext: "An toàn tuyệt đối cho nhà xưởng."
        },
        {
            icon: <Droplets size={32} />,
            title: "Kháng Nước",
            text: 'Bề mặt được phủ màng Nano Chitosen sinh học tạo "hiệu ứng lá sen", khóa ẩm tuyệt đối.',
            metric: "Nano Chitosan",
            subtext: "Chống nồm ẩm, nấm mốc."
        },
        {
            icon: <Leaf size={32} />,
            title: "0% Formaldehyde",
            text: "Sử dụng keo tinh bột biến tính an toàn tuyệt đối cho sức khỏe người sử dụng.",
            metric: "Eco-Friendly 100%",
            subtext: "Không phát tán vi nhựa."
        },
        {
            icon: <Hammer size={32} />,
            title: "Thi Công Siêu Tốc",
            text: "Trọng lượng nhẹ, không bị mủn. Dễ dàng cưa cắt và dán trực tiếp lên tường.",
            metric: "Tiết kiệm 50% tgian",
            subtext: "Không cần hệ khung xương."
        },
        {
            icon: <Palette size={32} />,
            title: "Giá Thành Tối Ưu",
            text: "Tận dụng nguồn rác thải dệt may giúp hạ giá thành sản phẩm xuống mức tối thiểu.",
            metric: "Rẻ hơn 40% gỗ",
            subtext: "Hiệu năng cao - Giá bình dân."
        }
    ];

    const containerVars = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const itemVars = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="py-24 md:py-32 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main tracking-tight"
                    >
                        6 Siêu Năng Lực Của Ván Ép <span className="text-primary-cta">Seamphony</span>
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
                                boxShadow: "0 20px 40px -15px rgba(143, 166, 172, 0.4)",
                                borderColor: "#8FA6AC"
                            }}
                            className="bg-secondary-bg p-8 lg:p-10 rounded-[2rem] border border-border shadow-sm transition-all duration-400 flex flex-col h-full group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-cta/5 rounded-bl-[100px] -z-10 group-hover:scale-110 transition-transform duration-500"></div>

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
