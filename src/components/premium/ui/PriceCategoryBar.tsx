'use client';
import { useEffect, useState } from 'react';

const categories = [
    { id: 'cat-hali', label: 'Halı (m²)' },
    { id: 'cat-yorgan', label: 'Yorgan (adet)' },
    { id: 'cat-diger', label: 'Diğer' },
];

export const PriceCategoryBar = () => {
    const [active, setActive] = useState('cat-hali');
    const [visible, setVisible] = useState(false);

    // Bar'ı fiyat tablosu görünür olunca göster
    useEffect(() => {
        const table = document.getElementById('fiyat-tablosu');
        if (!table) return;

        const obs = new IntersectionObserver(
            ([entry]) => setVisible(
                !entry.isIntersecting && entry.boundingClientRect.top < 0
            ),
            { threshold: 0 }
        );
        obs.observe(table);
        return () => obs.disconnect();
    }, []);

    // Aktif kategoriyi takip et
    useEffect(() => {
        const observers: IntersectionObserver[] = [];
        categories.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (!el) return;
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActive(id); },
                { rootMargin: '-20% 0px -60% 0px' }
            );
            obs.observe(el);
            observers.push(obs);
        });
        return () => observers.forEach(o => o.disconnect());
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed top-[60px] left-0 right-0 z-[90] bg-white/96 backdrop-blur-sm border-b border-brand-navy/8 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 flex gap-2 py-2">
                {categories.map(({ id, label }) => (
                    <a
                        key={id}
                        href={`#${id}`}
                        className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${active === id
                            ? 'bg-brand-navy text-white'
                            : 'text-brand-navy/50 hover:text-brand-navy hover:bg-brand-navy/5'
                            }`}
                    >
                        {label}
                    </a>
                ))}
            </div>
        </div>
    );
};
