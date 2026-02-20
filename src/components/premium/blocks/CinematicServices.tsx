'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/premium/ui/Reveal';

const BLUR_FOREST = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxIDEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxQjNBMkQiLz48L3N2Zz4=';

const services = [
    {
        id: 'koltuk',
        category: 'Koltuk Yıkama - Derin Lif Temizliği',
        headline: 'Yorgun Dokulara\nYeniden Hayat.',
        theme: 'dramatic',
        image: '/wp-content/uploads/2024/01/deha-koltuk-yikama-servisi-2.jpg',
        href: '/hizmetler/koltuk-yikama',
        cta: 'İncele',
        reveal: 'left' as const,
    },
    {
        id: 'perde',
        category: 'Perde Yıkama',
        headline: 'Işık Girsin.\nToz Değil.',
        theme: 'breath',
        image: '/wp-content/uploads/2020/12/kurtkoy-stor-perde-yikama.jpg',
        href: '/hizmetler/stor-perde-yikama',
        cta: 'İncele',
        reveal: 'right' as const,
    },
    {
        id: 'yorgan',
        category: 'Yorgan Yıkama',
        headline: 'Her Gece Yüzünüzü\nGömüyorsunuz.',
        headlineAccent: 'İçinde ne var?',
        theme: 'peak',
        image: '/images/yorgan-kurutma.avif',
        href: '/hizmetler/yorgan-battaniye-yikama',
        cta: 'İçeriğini Gör',
        reveal: 'left' as const,
    },
];

const overlayByTheme: Record<string, string> = {
    dramatic: 'opacity-[0.65] group-hover:opacity-[0.55]',
    breath: 'opacity-[0.55] group-hover:opacity-[0.45]',
    peak: 'opacity-[0.70] group-hover:opacity-[0.60]',
};

export const CinematicServices = () => {
    return (
        <section className="py-32 bg-brand-mist relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <Reveal direction="up" className="mb-24 max-w-3xl">
                    <h2 className="text-5xl md:text-7xl font-bold text-brand-navy mb-6 tracking-tight leading-[0.92]">
                        Sadece Halı Değil.<br />
                        <span className="text-brand-navy/70">Evinizin Temas Ettiği Her Şey.</span>
                    </h2>
                    <p className="text-xl text-brand-navy/68 font-medium border-l-4 border-brand-coral pl-6 py-2">
                        Hijyen bir ürün değil, sistemdir.
                    </p>
                </Reveal>

                <div className="space-y-8">
                    {services.map((service, index) => (
                        <Reveal key={service.id} direction={service.reveal} delay={index * 100}>
                            <Link
                                href={service.href}
                                className={`group relative block w-full h-[280px] md:h-[350px] overflow-hidden rounded-3xl transition-all duration-700 ease-out border border-brand-navy/15 ${index === 0
                                    ? 'hover:-translate-y-1.5'
                                    : index === 1
                                        ? 'hover:scale-[1.01]'
                                        : 'hover:scale-[1.015]'
                                    }`}
                            >
                                <div
                                    className={`absolute inset-0 bg-brand-navy transition-transform duration-1000 ${service.theme === 'dramatic'
                                        ? 'group-hover:scale-110'
                                        : service.theme === 'breath'
                                            ? 'group-hover:scale-105'
                                            : 'group-hover:scale-105 group-hover:rotate-1'
                                        }`}
                                >
                                    <Image
                                        src={service.image}
                                        alt={service.category}
                                        fill
                                        sizes="(min-width: 1280px) 1200px, 95vw"
                                        placeholder="blur"
                                        blurDataURL={BLUR_FOREST}
                                        className="w-full h-full object-cover"
                                        quality={70}
                                    />
                                </div>

                                <div className={`absolute inset-0 cinematic-overlay-blend transition-opacity duration-700 ${overlayByTheme[service.theme]}`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-10 items-start">
                                    <div
                                        className={`transform transition-transform duration-700 ease-out ${service.theme === 'dramatic' ? 'group-hover:-translate-y-2' : 'group-hover:-translate-y-1'
                                            }`}
                                    >
                                        <span className="inline-block mb-3 text-xs font-bold tracking-[0.2em] text-brand-sand drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                                            {service.category}
                                        </span>

                                        <h3 className="text-3xl md:text-5xl font-bold mb-4 leading-[1.0] whitespace-pre-line text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]">
                                            {service.theme === 'peak' ? (
                                                <>
                                                    {service.headline}
                                                    <br />
                                                    <span className="text-brand-sand text-xl md:text-3xl font-medium italic mt-1 block drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                                                        {service.headlineAccent}
                                                    </span>
                                                </>
                                            ) : (
                                                service.headline
                                            )}
                                        </h3>

                                        <div className="flex items-center gap-2 border border-white/50 bg-white/15 backdrop-blur-sm text-white font-semibold tracking-wide text-sm px-5 py-2.5 rounded-md opacity-90 group-hover:opacity-100 transition-all duration-500 delay-100 w-fit shadow-lg">
                                            <span>{service.cta}</span>
                                            <ArrowRight size={14} className="text-white/80" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>

                {/* Angled Navy Break — Story Section */}
                <div className="relative -mx-4 md:-mx-[calc((100vw-80rem)/2+1rem)]" style={{ margin: '0 calc(-50vw + 50%)' }}>
                    <div
                        className="relative bg-brand-navy text-white py-24 md:py-32 overflow-hidden"
                        style={{ clipPath: 'polygon(0 40px, 100% 0, 100% calc(100% - 40px), 0 100%)' }}
                    >


                        {/* Subtle dot pattern */}
                        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />


                        <Reveal direction="up">
                            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                                <p className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6" style={{ textShadow: '0 2px 16px rgba(0,0,0,0.3)' }}>
                                    Her halının bir hikâyesi var.
                                </p>
                                <p className="text-xl md:text-2xl text-white/70 font-medium max-w-xl mx-auto leading-relaxed">
                                    Biz o hikâyeyi bozmadan temizliyoruz.
                                </p>
                                <div className="mt-8 w-16 h-0.5 bg-brand-coral mx-auto rounded-full" />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};
