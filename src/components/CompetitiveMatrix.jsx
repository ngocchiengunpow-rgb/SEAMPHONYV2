import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck, CheckCircle2, DollarSign, Volume2, Palette, Shield, Leaf } from 'lucide-react';

export default function CompetitiveMatrix() {
    const comparisonData = [
        {
            name: "Mút xốp tiêu âm",
            isHighlight: false,
            price: "Siêu rẻ (~80k-200k)",
            priceColor: "text-text-main",
            acoustic: "Trung bình (0.4-0.7)",
            acousticColor: "text-text-main",
            esthetic: "Kém (công nghiệp rẻ tiền)",
            estheticColor: "text-text-muted",
            safety: "Dễ cháy lan",
            safetyColor: "text-primary-cta",
            eco: "Tiêu cực",
            ecoColor: "text-primary-cta",
        },
        {
            name: "Panel PET nỉ ép",
            isHighlight: false,
            price: "Trung bình cao (~400k-700k)",
            priceColor: "text-text-main",
            acoustic: "Khá tốt (0.7-0.9)",
            acousticColor: "text-text-main",
            esthetic: "Đa dạng nhưng phụ thuộc nhập khẩu",
            estheticColor: "text-text-main",
            safety: "Ít bắt lửa",
            safetyColor: "text-accent",
            eco: "Khá (nhựa PET)",
            ecoColor: "text-accent",
        },
        {
            name: "Panel Rockwool bọc nỉ",
            isHighlight: false,
            price: "Trung bình (~350k-600k)",
            priceColor: "text-text-main",
            acoustic: "Rất tốt (0.7-1.0)",
            acousticColor: "text-accent",
            esthetic: "Sang trọng nhưng nặng nề",
            estheticColor: "text-text-main",
            safety: "Tốt",
            safetyColor: "text-text-muted",
            eco: "Kém (Bụi khoáng rủi ro)",
            ecoColor: "text-primary-cta",
        },
        {
            name: "Gỗ tiêu âm",
            isHighlight: false,
            price: "Rất đắt (>1.000k)",
            priceColor: "text-primary-cta",
            acoustic: "Tốt (0.5-0.8)",
            acousticColor: "text-accent",
            esthetic: "Đẹp, cao cấp",
            estheticColor: "text-accent",
            safety: "Trung bình",
            safetyColor: "text-text-muted",
            eco: "Trung bình",
            ecoColor: "text-text-muted",
        },
        {
            name: "Panel Vải Vụn Seamphony",
            isHighlight: true,
            price: "Cạnh tranh (~380k-480k)",
            priceColor: "text-white font-bold",
            acoustic: "Tốt (0.60 - 0.90)",
            acousticColor: "text-white font-bold",
            esthetic: "Thô mộc, độc bản, tùy biến cao",
            estheticColor: "text-white font-bold",
            safety: "Tốt (Phụ gia chống cháy)",
            safetyColor: "text-white font-bold",
            eco: "Tuyệt vời (Vải vụn địa phương + ESG)",
            ecoColor: "text-white font-bold",
        },
    ];

    return (
        <section id="matrix" className="py-24 bg-secondary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Định vị Cạnh tranh trên Thị trường
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        So sánh toàn diện về giá thành, hiệu năng và tính bền vững giữa các giải pháp tiêu âm thông dụng.
                    </motion.p>
                </div>

                {/* Desktop Table View */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className="overflow-x-auto rounded-[2rem] border border-border shadow-2xl bg-primary-bg"
                >
                    <table className="w-full text-left border-collapse min-w-[1000px]">
                        <thead>
                            <tr className="bg-secondary-bg border-b border-border">
                                <th className="p-6 font-heading font-extrabold text-xl text-text-main w-1/5">Sản phẩm</th>
                                <th className="p-6 font-heading font-bold text-text-main text-lg w-[16%]"><div className="flex items-center gap-2"><DollarSign size={20} className="text-primary-cta" /> Giá thành</div></th>
                                <th className="p-6 font-heading font-bold text-text-main text-lg w-[16%]"><div className="flex items-center gap-2"><Volume2 size={20} className="text-accent" /> Tiêu âm</div></th>
                                <th className="p-6 font-heading font-bold text-text-main text-lg w-[16%]"><div className="flex items-center gap-2"><Palette size={20} className="text-text-muted" /> Thẩm mỹ</div></th>
                                <th className="p-6 font-heading font-bold text-text-main text-lg w-[16%]"><div className="flex items-center gap-2"><Shield size={20} className="text-primary-cta" /> Cháy nổ</div></th>
                                <th className="p-6 font-heading font-bold text-text-main text-lg w-[16%]"><div className="flex items-center gap-2"><Leaf size={20} className="text-accent" /> Môi trường</div></th>
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.map((row, idx) => (
                                <tr key={idx} className={`border-b border-border transition-colors ${row.isHighlight ? 'bg-text-main hover:bg-text-main/90 shadow-[inset_0_0_20px_rgba(37,99,235,0.2)]' : 'hover:bg-secondary-bg/50'}`}>
                                    <td className={`p-6 font-heading font-bold text-xl ${row.isHighlight ? 'text-white' : 'text-text-main'}`}>
                                        {row.name}
                                        {row.isHighlight && <div className="inline-flex mt-2 items-center gap-1.5 px-3 py-1 bg-primary-cta text-white text-xs rounded-full uppercase tracking-wider"><CheckCircle2 size={14} /> Lựa chọn Tối ưu</div>}
                                    </td>
                                    <td className={`p-6 font-body text-base leading-relaxed ${row.priceColor}`}>{row.price}</td>
                                    <td className={`p-6 font-body text-base leading-relaxed ${row.acousticColor}`}>{row.acoustic}</td>
                                    <td className={`p-6 font-body text-base leading-relaxed ${row.estheticColor}`}>{row.esthetic}</td>
                                    <td className={`p-6 font-body text-base leading-relaxed ${row.safetyColor}`}>{row.safety}</td>
                                    <td className={`p-6 font-body text-base leading-relaxed ${row.ecoColor}`}>{row.eco}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>



            </div>
        </section>
    );
}
