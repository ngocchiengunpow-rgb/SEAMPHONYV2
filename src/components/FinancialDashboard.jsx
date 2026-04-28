import React from 'react';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp } from 'lucide-react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const capexData = [
    { name: 'Máy móc & Thiết bị', value: 360, color: '#EA580C' }, // primary-cta
    { name: 'Cải tạo xưởng & Setup', value: 120, color: '#10B981' }, // green-500
    { name: 'Pháp lý & Dự phòng', value: 120, color: '#3B82F6' }, // blue-500
];

const cashflowData = [
    { name: 'Năm 1', DoanhThu: 800, ChiPhi: 1000, LoiNhuan: -200 },
    { name: 'Năm 2', DoanhThu: 2400, ChiPhi: 1900, LoiNhuan: 500 },
    { name: 'Năm 3', DoanhThu: 4500, ChiPhi: 3200, LoiNhuan: 1300 },
];

export default function FinancialDashboard() {
    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0, duration: 0.9 } }
    };

    return (
        <section id="financial" className="py-16 lg:py-24 bg-primary-bg relative scroll-mt-32">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Tại sao Seamphony là <span className="text-primary-cta">mô hình khả thi?</span>
                    </motion.h2>
                    <motion.p
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-text-muted font-body"
                    >
                        Seamphony không chỉ dừng ở ý tưởng, mà đã được xây dựng trên các giả định tài chính và kỹ thuật cụ thể.
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* CapEx Section */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                        className="bg-white p-8 lg:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main">
                            <Wallet className="text-primary-cta" /> Cấu trúc chi phí (CapEx & OpEx)
                        </h3>
                        
                        <div className="flex gap-4 mb-8 mt-2 flex-wrap md:flex-nowrap">
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">CapEx</span>
                                <span className="text-xl font-black text-text-main">505-660<span className="text-sm font-normal">tr</span></span>
                            </div>
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">OpEx / tháng</span>
                                <span className="text-xl font-black text-text-main">90-122<span className="text-sm font-normal">tr</span></span>
                            </div>
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Giá vốn</span>
                                <span className="text-xl font-black text-text-main">~350k<span className="text-sm font-normal">/m²</span></span>
                            </div>
                        </div>

                        <div className="h-64 w-full mb-6">
                            <h4 className="text-center font-bold text-sm text-text-muted mb-2 uppercase tracking-wider">Phân bổ Đầu tư ban đầu (Mô phỏng)</h4>
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={capexData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={80}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {capexData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip formatter={(value) => [`${value} triệu VNĐ`, 'Ngân sách']} />
                                    <Legend verticalAlign="bottom" height={36}/>
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                        
                        <p className="text-sm text-text-muted/80 font-body italic mt-auto">
                            * Chi phí đầu tư ban đầu ước tính dựa trên cấu hình máy băm, máy ép nhiệt quy mô 150-200m2.
                        </p>
                    </motion.div>

                    {/* Revenue & Cashflow Section */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: 0.2 }}
                        className="bg-white p-8 lg:p-10 rounded-3xl border border-border/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3 text-text-main">
                            <TrendingUp className="text-accent" /> Doanh thu & Dòng tiền
                        </h3>
                        
                        <div className="flex gap-4 mb-8 mt-2 flex-wrap md:flex-nowrap">
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Giá bán</span>
                                <span className="text-xl font-black text-text-main">380k-480k</span>
                            </div>
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Biên LN Gộp</span>
                                <span className="text-xl font-black text-text-main">~20%</span>
                            </div>
                            <div className="flex-1 min-w-[100px] bg-secondary-bg p-4 rounded-xl border border-border/50 text-center">
                                <span className="block text-xs font-bold text-text-muted uppercase mb-1">Hoàn vốn</span>
                                <span className="text-xl font-black text-text-main">~3 năm</span>
                            </div>
                        </div>

                        <div className="h-64 w-full mb-6">
                            <h4 className="text-center font-bold text-sm text-text-muted mb-2 uppercase tracking-wider">Dự phóng Doanh thu & Lợi nhuận (Mô phỏng)</h4>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={cashflowData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} tickFormatter={(value) => `${value}tr`} />
                                    <Tooltip formatter={(value) => [`${value} triệu VNĐ`]} cursor={{fill: 'transparent'}} />
                                    <Legend />
                                    <Bar dataKey="DoanhThu" name="Doanh Thu" fill="#0f172a" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="LoiNhuan" name="Lợi Nhuận" fill="#EA580C" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        
                        <p className="text-sm text-text-muted/80 font-body italic mt-auto">
                            * Thời gian hoàn vốn không chiết khấu ước tính khoảng 1.9 năm vận hành đủ tải. Tính cả giai đoạn tăng công suất, dự án hướng tới hoàn vốn trong 3 năm.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
