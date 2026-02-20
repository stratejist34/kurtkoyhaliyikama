'use client';
import Image from 'next/image';
import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

const comparisons = [
    {
        before: '/images/hali-yikama-detay.avif',
        after: '/images/paketli-hali-teslime-hazir.avif',
        beforeAlt: 'Yıkama işlemi sırasında halı detayı',
        afterAlt: 'Paketlenmiş teslime hazır temiz halı',
        label: 'Halı Yıkama',
    },
    {
        before: '/images/hali-Yikama-manset.avif',
        after: '/images/hali-kurutma.avif',
        beforeAlt: 'Profesyonel halı yıkama makinesi',
        afterAlt: 'Kapalı alanda kurutma sonrası halı',
        label: 'Derin Temizlik',
    },
    {
        before: '/wp-content/uploads/2020/12/hali-yikama-firmasi-768x576.jpg',
        after: '/wp-content/uploads/2020/12/velibaba-haliyikama-kurutma.jpg',
        beforeAlt: 'Halı yıkama tesisi genel görünüm',
        afterAlt: 'Kurutma tesisinde halılar',
        label: 'Tesis ve Kurutma',
    },
];

export const DecisionMoment = () => {
    const headerRef = useScrollReveal<HTMLDivElement>();
    const gridRef = useStaggerReveal<HTMLDivElement>({ threshold: 0.1 });

    return (
        <section className="py-28 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div ref={headerRef} className="reveal-up text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-black text-brand-navy mb-4 tracking-tight">
                        Fark gözle görülür.
                    </h2>
                    <p className="text-lg text-brand-navy/60 max-w-xl mx-auto">
                        Yıkama sürecimizden kareler. Sonuç halıda, kumaşta ve teslimde belli olur.
                    </p>
                </div>

                <div ref={gridRef} className="stagger-children grid grid-cols-1 md:grid-cols-3 gap-6">
                    {comparisons.map((item) => (
                        <div
                            key={item.label}
                            className="rounded-2xl border border-brand-navy/10 overflow-hidden bg-brand-mist/30 group hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="grid grid-cols-2 gap-0">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.before}
                                        alt={item.beforeAlt}
                                        fill
                                        sizes="(min-width: 768px) 200px, 45vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute bottom-2 left-2 bg-brand-navy/70 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        İşlem
                                    </span>
                                </div>
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={item.after}
                                        alt={item.afterAlt}
                                        fill
                                        sizes="(min-width: 768px) 200px, 45vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <span className="absolute bottom-2 right-2 bg-brand-sky/90 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                                        Sonuç
                                    </span>
                                </div>
                            </div>
                            <div className="px-5 py-4">
                                <p className="text-sm font-bold text-brand-navy">{item.label}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
