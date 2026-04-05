import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2 } from 'lucide-react';

export default function ProjectGallery() {
    const images = [
        { src: "/gallery-1.jpg", alt: "Ứng dụng Seamphony trong phòng họp" },
        { src: "/gallery-2.jpg", alt: "Ứng dụng Seamphony trong lớp học" },
        { src: "/gallery-3.jpg", alt: "Ứng dụng Seamphony trong văn phòng mở" },
    ];

    return (
        <section id="gallery" className="py-24 bg-primary-bg relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-heading font-extrabold text-text-main mb-6 tracking-tight"
                    >
                        Không gian <span className="text-primary-cta">Thực tế</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                        className="text-xl text-text-muted font-body font-light"
                    >
                        Chiêm ngưỡng vẻ đẹp thô mộc, độc bản của ván ép Seamphony khi được ứng dụng vào các phong cách thiết kế đương đại.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="group relative rounded-[2rem] overflow-hidden bg-secondary-bg border border-border shadow-md hover:shadow-2xl transition-all duration-500 aspect-[4/5] md:aspect-auto md:h-[500px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                }}
                            />

                            {/* Fallback pattern if image is missing */}
                            <div className="hidden absolute inset-0 flex-col items-center justify-center text-center p-6 bg-secondary-bg">
                                <Camera size={48} className="text-text-muted/30 mb-4" />
                                <span className="text-text-muted text-sm font-semibold uppercase tracking-widest mb-2">Ảnh đang tải</span>
                                <span className="text-xs text-text-muted/60">(Lưu ảnh của bạn thành {img.src} tại thư mục public)</span>
                            </div>

                            {/* Hover content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex justify-between items-end">
                                <p className="text-white font-heading font-bold text-lg leading-tight max-w-[80%] drop-shadow-md">
                                    {img.alt}
                                </p>
                                <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-cta transition-colors">
                                    <Maximize2 size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
