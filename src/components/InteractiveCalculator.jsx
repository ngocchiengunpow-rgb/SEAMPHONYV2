import React, { useState, useEffect, useRef } from 'react';
import { motion, animate } from 'framer-motion';
import { Calculator, Zap } from 'lucide-react';

function AnimatedNumber({ value }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        const node = nodeRef.current;
        if (node) {
            const startValue = parseInt(node.textContent.replace(/\D/g, '')) || 0;
            const controls = animate(startValue, value, {
                duration: 0.8,
                ease: "easeOut",
                onUpdate(v) {
                    node.textContent = new Intl.NumberFormat('vi-VN').format(Math.round(v));
                },
            });
            return () => controls.stop();
        }
    }, [value]);

    return <span ref={nodeRef}>{new Intl.NumberFormat('vi-VN').format(value)}</span>;
}

export default function InteractiveCalculator() {
    const [area, setArea] = useState(50);
    const costPremium = area * 500000;
    const costSeamphony = area * 250000;
    const savings = costPremium - costSeamphony;

    return (
        <section className="py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Bài toán Kinh tế: <br className="md:hidden" /><span className="text-primary-cta">Tính toán Chi phí Thi công</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Mô phỏng tức thì số tiền bạn có thể tiết kiệm được khi lựa chọn giải pháp tiêu âm thông minh.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className="bg-secondary-bg p-8 lg:p-12 rounded-[2.5rem] border border-border/80 shadow-2xl relative max-w-4xl mx-auto"
                >
                    <div className="mb-12 flex flex-col items-center">
                        <label className="text-xl font-heading font-bold text-text-main mb-6 flex items-center gap-3">
                            <Calculator className="text-accent" /> Nhập diện tích cần ốp tường (m²)
                        </label>
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full max-w-lg">
                            <input
                                type="range"
                                min="10"
                                max="1000"
                                step="10"
                                value={area}
                                onChange={(e) => setArea(Number(e.target.value))}
                                className="w-full h-3 bg-primary-bg rounded-lg appearance-none cursor-pointer accent-primary-cta border border-border/50"
                            />
                            <div className="relative shrink-0">
                                <input
                                    type="number"
                                    min="1"
                                    value={area}
                                    onChange={(e) => setArea(Number(e.target.value))}
                                    className="w-28 px-4 py-3 border border-border shadow-sm rounded-xl bg-primary-bg text-text-main font-bold text-xl text-center focus:outline-none focus:border-primary-cta focus:ring-1 focus:ring-primary-cta"
                                />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted text-sm pointer-events-none font-bold">m²</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10 overflow-hidden">
                        <div className="bg-primary-bg p-4 md:p-6 lg:p-8 rounded-[2rem] border border-border shadow-sm text-center flex flex-col justify-center">
                            <p className="text-text-muted font-body mb-1 text-base md:text-lg font-semibold">Ván gỗ tiêu âm cao cấp</p>
                            <p className="text-xs md:text-sm text-text-muted/60 mb-4 md:mb-6">(Trung bình 500,000 VNĐ/m²)</p>
                            <p className="text-3xl lg:text-4xl xl:text-5xl font-heading font-black text-text-main/50 line-through decoration-text-muted/30 tracking-tighter break-all md:break-normal">
                                <AnimatedNumber value={costPremium} />
                                <span className="text-lg lg:text-xl ml-1 lg:ml-2">VNĐ</span>
                            </p>
                        </div>
                        <div className="bg-text-main p-4 md:p-6 lg:p-8 rounded-[2rem] shadow-xl border-2 border-primary-cta text-center relative overflow-hidden flex flex-col justify-center">
                            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-cta/20 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
                            <p className="text-white font-body mb-1 text-base md:text-lg font-bold relative z-10">Ván ép Seamphony</p>
                            <p className="text-xs md:text-sm text-white/60 mb-4 md:mb-6 relative z-10">(Khuyến nghị 250,000 VNĐ/m²)</p>
                            <p className="text-3xl lg:text-4xl xl:text-5xl font-heading font-black text-white relative z-10 drop-shadow-md tracking-tighter break-all md:break-normal">
                                <AnimatedNumber value={costSeamphony} />
                                <span className="text-lg lg:text-xl ml-1 lg:ml-2 text-primary-cta">VNĐ</span>
                            </p>
                        </div>
                    </div>

                    <div className="bg-primary-cta/10 border border-primary-cta/30 p-8 md:p-10 rounded-[2rem] text-center transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                        <p className="text-lg md:text-xl font-body font-bold text-text-main mb-4 uppercase tracking-wider flex items-center justify-center gap-2">
                            <Zap className="text-primary-cta fill-primary-cta" /> BẠN TIẾT KIỆM ĐƯỢC
                        </p>
                        <p className="text-5xl md:text-7xl font-heading font-black text-primary-cta mb-6 drop-shadow-sm">
                            <AnimatedNumber value={savings} />
                            <span className="text-2xl md:text-4xl ml-3 text-text-main">VNĐ</span>
                        </p>
                        <div className="inline-block bg-primary-bg px-6 py-2 rounded-full border border-primary-cta/20">
                            <p className="text-text-muted font-body text-sm md:text-base font-semibold">
                                Giúp các startup F&B và văn phòng tiết kiệm tối đa chi phí vật tư kiến trúc.
                            </p>
                        </div>
                    </div>

                </motion.div>
            </div>
        </section>
    );
}
