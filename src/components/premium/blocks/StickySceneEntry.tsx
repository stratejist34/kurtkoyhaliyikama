'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_URL =
    'https://wa.me/905424025123?text=Merhaba%2C%206m%C2%B2%20hal%C4%B1%20i%C3%A7in%20ortalama%20fiyat%20aral%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rd%C3%BCm.%20Foto%C4%9Fraf%20g%C3%B6nderiyorum.';

const SHOW_THRESHOLD = 0.15; // %15 scroll → görünür

export const StickySceneEntry = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [ctaConflict, setCtaConflict] = useState(false);

    // IntersectionObserver: Sayfa içi coral CTA'larla çakışma kontrolü
    useEffect(() => {
        const targets = document.querySelectorAll('[data-sticky-conflict]');
        if (targets.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => setCtaConflict(entries.some((e) => e.isIntersecting)),
            { threshold: 0.1 }
        );

        targets.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    // Scroll tabanlı görünürlük
    useEffect(() => {
        if (isClosed) return;

        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                const scrollPct = docHeight > 0 ? scrollY / docHeight : 0;
                const nearFooter = scrollY + window.innerHeight > document.documentElement.scrollHeight - 300;

                setIsVisible(!nearFooter && scrollPct >= SHOW_THRESHOLD);
                ticking = false;
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isClosed]);

    if (isClosed) return null;

    const show = isVisible && !ctaConflict;

    return (
        <>
            {/* Desktop — icon-only */}
            <div
                className={`hidden md:flex fixed bottom-8 right-8 z-50 flex-col items-end gap-2 transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${show ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'}`}
            >
                <button
                    onClick={() => setIsClosed(true)}
                    className="bg-black/20 hover:bg-black/40 text-white/80 p-1 rounded-full backdrop-blur-sm transition-colors self-end"
                    aria-label="Kapat"
                >
                    <X size={14} />
                </button>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'sticky_masaustu' })}
                    className="relative flex items-center justify-center w-14 h-14 bg-[#134E4A] text-white rounded-full shadow-xl border border-white/20 hover:scale-[1.06] active:scale-95 transition-transform"
                    aria-label="WhatsApp üzerinden fiyat alın"
                >
                    <MessageCircle size={24} className="text-white" />
                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-white rounded-full animate-pulse" />
                </a>

                <a
                    href="tel:+905424025123"
                    onClick={() => trackEvent('telefon_aramasi', { konum: 'sticky_masaustu' })}
                    className="flex items-center justify-center w-12 h-12 bg-white/90 backdrop-blur-md text-brand-navy rounded-full shadow-md border border-brand-navy/5 hover:bg-white transition-colors"
                    aria-label="Telefon ile ara"
                >
                    <Phone size={18} className="text-brand-navy/70" />
                </a>
            </div>

            {/* Mobil — tab bar */}
            <div
                className={`md:hidden fixed bottom-0 left-0 right-0 z-50 flex shadow-[0_-4px_10px_rgba(0,0,0,0.05)] transition-transform duration-300 ${show ? 'translate-y-0' : 'translate-y-full'}`}
            >
                <a
                    href="tel:+905424025123"
                    onClick={() => trackEvent('telefon_aramasi', { konum: 'sticky_mobil' })}
                    className="w-[30%] bg-white text-brand-navy flex flex-col items-center justify-center gap-1 border-t border-brand-mist active:bg-gray-50 py-3.5"
                    aria-label="Telefon ile ara"
                >
                    <Phone size={20} className="text-brand-navy/80" />
                    <span className="text-xs font-bold">ARA</span>
                </a>

                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'sticky_mobil' })}
                    className="w-[70%] bg-brand-coral text-white flex items-center justify-center gap-2 py-3.5 border-t border-brand-coral active:bg-brand-coral/90"
                    aria-label="WhatsApp üzerinden fiyat al"
                >
                    <MessageCircle size={20} className="shrink-0" />
                    <div className="flex flex-col items-start leading-none">
                        <span className="font-bold text-sm">Fotoğraf Gönder</span>
                        <span className="text-[10px] text-white/75 font-normal">Bugün planına dahil ol</span>
                    </div>
                </a>
            </div>
        </>
    );
};
