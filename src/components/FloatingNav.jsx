import React, { useState, useEffect } from 'react';

const sections = [
    { id: 'hero', name: 'Tầm nhìn' },
    { id: 'problem', name: 'Vấn đề' },
    { id: 'solution', name: 'Công nghệ' },
    { id: 'core-features', name: 'Lợi thế' },
    { id: 'acoustic', name: 'Hiệu năng' },
    { id: 'canvas', name: 'Mô hình' },
    { id: 'market', name: 'Thị trường' },
    { id: 'financial', name: 'Tài chính' },
    { id: 'roadmap', name: 'Lộ trình' },
    { id: 'esg', name: 'ESG' },
    { id: 'status', name: 'Tiến độ' },
    { id: 'the-ask', name: 'Kêu gọi' },
    { id: 'founders', name: 'Đội ngũ' }
];

export default function FloatingNav() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observers = [];

        const observerOptions = {
            root: null,
            rootMargin: '-30% 0px -60% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach(({ id }) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
                observers.push(element);
            }
        });

        return () => {
            observers.forEach((element) => observer.unobserve(element));
        };
    }, []);

    return (
        <div className="fixed right-4 top-1/2 -translate-y-1/2 z-[60] hidden xl:flex flex-col gap-3">
            {sections.map((section) => (
                <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-end"
                    aria-label={`Cuộn đến phần ${section.name}`}
                >
                    <span className={`mr-4 px-3 py-1.5 rounded-lg bg-text-main text-white text-xs font-bold font-body opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none`}>
                        {section.name}
                    </span>
                    <div
                        className={`w-3 h-3 rounded-full transition-all duration-300 border-2 ${
                            activeSection === section.id
                                ? 'bg-primary-cta border-primary-cta scale-125'
                                : 'bg-transparent border-text-muted/40 hover:border-primary-cta hover:bg-primary-cta/30'
                        }`}
                    />
                </a>
            ))}
        </div>
    );
}
