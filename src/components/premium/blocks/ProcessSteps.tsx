'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

const steps = [
    {
        title: 'Derin Analiz ve Toz Alma',
        description: 'Halı liflerinin dibine hapsolmuş kum ve tozlar, vibrasyonlu sistemle tamamen arındırılır.',
        trust: 'Her halı türü ayrı programda işlenir.',
        image: '/images/hali-Yikama-manset.avif',
    },
    {
        title: 'Kristal Yıkama',
        description: 'Doğal şampuanlar ve berrak su ile lekelerden değil, bakterilerden de kurtulursunuz.',
        trust: 'Kanserojen madde içermeyen şampuanlar kullanılır.',
        image: '/images/hali-yikama-detay.avif',
    },
    {
        title: 'Kurutma ve Teslim',
        description: 'Kapalı, nem kontrollü odalarda kurutulur. 3-5 gün içinde adresinize teslim edilir.',
        trust: 'Sokak tozu ve egzoz dumanından uzakta, hijyenik ortamda kurutulur.',
        image: '/images/hali-kurutma.avif',
    },
];

export const ProcessSteps = () => {
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const headerRef = useScrollReveal<HTMLDivElement>();
    const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.15 });

    useEffect(() => {
        const tracked = new Set<number>();
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = Number((entry.target as HTMLElement).dataset.stepIndex);
                    if (!Number.isNaN(index) && entry.isIntersecting && !tracked.has(index)) {
                        tracked.add(index);
                    }
                });
            },
            { threshold: 0.45 }
        );

        cardRefs.current.forEach((node) => {
            if (node) observer.observe(node);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="process" className="py-24 bg-brand-mist relative overflow-hidden">
            <div className="gradient-blob w-64 h-64 bg-brand-sand/30 top-10 -left-32" />
            <div className="gradient-blob w-48 h-48 bg-brand-coral/10 bottom-20 -right-24" />

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div ref={headerRef} className="reveal-up text-center mb-16">
                    <p className="text-brand-sky/80 font-bold tracking-[0.24em] mb-3 text-xs">SÜREÇ VE TEKNOLOJİ</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Adım Adım Hijyen</h2>
                </div>

                <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            ref={(node) => {
                                cardRefs.current[index] = node;
                            }}
                            data-step-index={index}
                            className="relative rounded-[20px] border border-brand-navy/8 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] transition-all duration-200 group overflow-hidden"
                        >
                            <div className="pointer-events-none absolute inset-0 service-card-gradient opacity-90" />

                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={step.image}
                                    alt={step.title}
                                    fill
                                    sizes="(min-width: 768px) 33vw, 100vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 service-image-overlay" />
                                <span className="absolute top-4 left-4 bg-brand-navy/90 text-white text-xs font-bold px-3 py-1 rounded-full">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>

                            <div className="relative p-6">
                                <h3 className="text-xl font-bold mb-3 text-brand-navy">{step.title}</h3>
                                <p className="leading-relaxed mb-5 text-brand-navy/80 text-sm">
                                    {step.description}
                                </p>
                                <p className="inline-flex items-center rounded-full bg-transparent text-brand-navy/60 text-xs font-medium px-3 py-1 border border-brand-navy/15">
                                    {step.trust}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
