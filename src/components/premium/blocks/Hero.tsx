'use client';

import Image from 'next/image';
import { Camera } from 'lucide-react';
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
        <section className="relative min-h-[85vh] max-h-[800px] flex items-center px-4 md:px-8 pt-20 pb-16 overflow-hidden">
            {/* Background image + overlay */}
            <div ref={bgRef} className="absolute inset-0 z-0" style={{ willChange: 'transform' }}>
                <Image
                    src="/images/kurutulmus-hali.avif"
                    alt="Kurtköy Halı Yıkama - profesyonel yıkama sonrası tertemiz halı"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover ken-burns"
                    style={{ filter: 'blur(6px) saturate(88%) brightness(82%)', transform: 'scale(1.05)' }}
                    fetchPriority="high"
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
                    background: 'rgba(255, 255, 255, 0.72)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.6)',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.8)',
                }}
            >
                {/* Mini trust tag */}
                <span
                    className="hero-stagger hero-stagger-1 inline-block mb-5 text-sm"
                    style={{ color: '#4F5B57' }}
                >
                    Kurtköy &amp; Pendik&apos;te ücretsiz alım–teslim
                </span>

                {/* Headline */}
                <h1
                    className="hero-stagger hero-stagger-2 font-[family-name:var(--font-manrope)] text-[28px] sm:text-[34px] md:text-[42px] mb-4"
                    style={{
                        fontWeight: 600,
                        lineHeight: 1.08,
                        letterSpacing: '-0.5px',
                        color: '#20302D',
                    }}
                >
                    Halı yıkamak yalnızca temizlik değil,{' '}
                    <span style={{ color: '#0D7377', fontWeight: 700 }}>
                        eviniz için güvenli bir karardır.
                    </span>
                </h1>

                {/* Description */}
                <p
                    className="hero-stagger hero-stagger-2 mb-7"
                    style={{
                        fontSize: '16px',
                        color: '#4F5B57',
                        lineHeight: 1.6,
                    }}
                >
                    Onayınız olmadan işlem yapılmaz.
                    <br />
                    Süreci fotoğrafla başlatır, net fiyatla ilerleriz.
                </p>

                {/* CTA */}
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-sticky-conflict
                    onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'hero' })}
                    className="hero-stagger hero-stagger-3 inline-flex items-center gap-3 text-white font-semibold transition-all duration-300 hover:brightness-95 active:scale-[0.98]"
                    style={{
                        background: '#E26B5D',
                        padding: '14px 28px',
                        borderRadius: '16px',
                        boxShadow: '0 12px 30px rgba(226,107,93,0.3)',
                        fontSize: '16px',
                    }}
                >
                    <Camera size={20} className="shrink-0" />
                    Fotoğraf Gönder, Net Fiyat Al
                </a>

                {/* Trust proof */}
                <div
                    className="hero-stagger hero-stagger-4 flex flex-wrap items-center gap-5 mt-5"
                    style={{ fontSize: '14px', color: '#4F5B57' }}
                >
                    <span className="flex items-center gap-1.5">
                        <span className="text-yellow-500">&#9733;</span>
                        <span ref={ratingRef} className="font-bold tabular-nums" />
                        <span className="opacity-60">Google</span>
                    </span>
                    <span className="w-px h-3 bg-black/10" />
                    <span className="tabular-nums"><span ref={deliveriesRef} /> Teslim</span>
                    <span className="w-px h-3 bg-black/10" />
                    <span>Fiyat sabittir</span>
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
