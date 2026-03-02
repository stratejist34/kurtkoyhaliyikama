'use client';

import Image from 'next/image';
import { Camera, Phone } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useCountUp } from '@/hooks/useCountUp';
import { useEffect, useRef } from 'react';

const WHATSAPP_URL =
    'https://wa.me/905424025123?text=Merhaba%2C%20halı%20yıkama%20için%20fotoğraf%20gönderiyorum.';

export const Hero = () => {
    const ratingRef = useCountUp({ end: 4.8, duration: 1400, decimals: 1 });
    const deliveriesRef = useCountUp({ end: 3000, duration: 1600, suffix: '+' });
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let raf = 0;
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                if (bgRef.current) {
                    bgRef.current.style.transform = `translateY(${window.scrollY * 0.12}px)`;
                }
            });
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section className="relative min-h-[85vh] max-h-[800px] flex items-center px-4 md:px-8 pt-32 md:pt-20 pb-16 overflow-hidden">
            {/* Background image + overlay */}
            <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
                <Image
                    src="/images/kurutulmus-hali.avif"
                    alt="Kurtköy Halı Yıkama - profesyonel yıkama sonrası tertemiz halı"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover ken-burns"
                    style={{ filter: 'blur(2px) saturate(1.1) brightness(75%)', transform: 'scale(1.05)' }}
                    fetchPriority="high"
                    quality={40}
                />
                <div
                    className="absolute inset-0 z-10"
                    style={{
                        background: `linear-gradient(
                            180deg,
                            rgba(19,78,74,0.30) 0%,
                            rgba(12,60,56,0.20) 50%,
                            rgba(255,255,255,0.9) 100%
                        )`,
                    }}
                />
            </div>

            {/* Glass Panel */}
            <div
                className="hero-stagger hero-stagger-1 relative z-30 ml-0 md:ml-[8%] lg:ml-[12%] max-w-[620px] p-8 md:p-10"
                style={{
                    borderRadius: '24px',
                    background: 'rgba(247, 250, 249, 0.82)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 12px 48px rgba(0,0,0,0.10), inset 0 1px 0 rgba(255,255,255,0.7)',
                }}
            >
                {/* Lokasyon + ücretsiz servis badge */}
                <span
                    className="hero-stagger hero-stagger-1 inline-flex items-center gap-2 mb-5 px-3.5 py-1.5 rounded-full text-sm font-bold border"
                    style={{ color: '#0A5C5F', background: '#E4F0F0', borderColor: '#B8D8D9' }}
                >
                    <span className="w-2 h-2 rounded-full bg-[#0D7377] animate-pulse" />
                    Kurtköy &amp; Pendik · Ücretsiz Alım–Teslim
                </span>

                {/* Headline */}
                <h1
                    className="hero-stagger hero-stagger-2 font-[family-name:var(--font-manrope)] text-[28px] sm:text-[34px] md:text-[42px] mb-4"
                    style={{
                        fontWeight: 800,
                        lineHeight: 1.08,
                        letterSpacing: '-0.5px',
                        color: '#1E2D24',
                    }}
                >
                    Halınızı Aldıralım.{' '}
                    <span style={{ color: '#0A5C5F', fontWeight: 800 }}>
                        Tertemiz Teslim Edelim.
                    </span>
                </h1>

                {/* Fiyat vurgusu */}
                <div
                    className="hero-stagger hero-stagger-2 mb-6 inline-flex items-baseline gap-2 px-4 py-2 rounded-xl"
                    style={{ background: 'rgba(30,45,36,0.06)' }}
                >
                    <span className="text-xl sm:text-2xl font-extrabold tracking-tight" style={{ color: '#1E2D24' }}>450–600₺</span>
                    <span className="text-sm font-medium" style={{ color: '#3A4A46' }}>/ 6m² halı</span>
                    <span style={{ color: '#3A4A46' }} className="hidden sm:inline">·</span>
                    <span className="text-sm font-medium hidden sm:inline" style={{ color: '#3A4A46' }}>3–5 günde teslim</span>
                </div>

                {/* Alt açıklama */}
                <p
                    className="hero-stagger hero-stagger-2 mb-7"
                    style={{ fontSize: '15px', color: '#2C3E36', lineHeight: 1.6 }}
                >
                    Fotoğraf gönderin, net fiyat öğrenin. Fiyat sabittir.
                </p>

                {/* CTA */}
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-sticky-conflict
                    onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'hero' })}
                    className="hero-stagger hero-stagger-3 w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-brand-coral text-white font-bold transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                    style={{
                        padding: '16px 36px',
                        borderRadius: '16px',
                        boxShadow: '0 12px 30px rgba(192,57,43,0.35)',
                        fontSize: '17px',
                    }}
                >
                    <Camera size={22} className="shrink-0" />
                    Fotoğraf Gönder, Net Fiyat Al
                </a>

                {/* İkincil telefon linki */}
                <a
                    href="tel:+905424025123"
                    onClick={() => trackEvent('telefon_aramasi', { konum: 'hero' })}
                    className="hero-stagger hero-stagger-3 inline-flex items-center gap-2 mt-4 transition-colors hover:text-brand-coral underline underline-offset-2 decoration-1"
                    style={{ fontSize: '15px', color: '#1E2D24' }}
                >
                    <Phone size={16} className="shrink-0" />
                    veya arayın: 0542 402 51 23
                </a>

                {/* Trust proof */}
                <div
                    className="hero-stagger hero-stagger-4 flex flex-wrap items-center gap-4 mt-6"
                    style={{ fontSize: '14px', color: '#1E2D24' }}
                >
                    <span className="flex items-center gap-1.5">
                        <span className="text-yellow-500">&#9733;</span>
                        <span ref={ratingRef} className="font-bold tabular-nums" />
                        <span className="opacity-80 font-medium">Google</span>
                    </span>
                    <span className="w-px h-3.5 bg-brand-navy/25" />
                    <span className="font-semibold tabular-nums"><span ref={deliveriesRef} /> Teslim</span>
                    <span className="w-px h-3.5 bg-brand-navy/25" />
                    <span className="font-semibold">Sabit Fiyat Garantisi</span>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center" style={{ animation: 'pulse 2s ease-in-out infinite', animationDelay: '3s', opacity: 0, animationFillMode: 'forwards' }}>
                <svg width="20" height="12" viewBox="0 0 20 12" fill="none" className="text-brand-navy/25">
                    <path d="M2 2L10 10L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>

            {/* Bottom fade to mist */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-mist to-transparent pointer-events-none z-30" />
        </section>
    );
};
