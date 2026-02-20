'use client';
import { Camera } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { SlotMessage } from '@/components/premium/ui/SlotMessage';

const WHATSAPP_URL =
    'https://wa.me/905424025123?text=Merhaba%2C%206m%C2%B2%20hal%C4%B1%20i%C3%A7in%20ortalama%20fiyat%20aral%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rd%C3%BCm.%20Foto%C4%9Fraf%20g%C3%B6nderiyorum.';

// Manuel toggle: kampanya aktifse true yap, değilse false
const KAMPANYA_AKTIF = true;

export const InstantQuote = () => {
    const ref = useScrollReveal<HTMLDivElement>();

    return (
        <section className="py-14 bg-white relative z-20">
            <div className="max-w-xl mx-auto px-4">
                <div ref={ref} className="reveal-scale bg-white rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)] border-2 border-brand-sky/15 p-8 flex flex-col items-center text-center relative overflow-hidden">

                    <h3 className="text-2xl font-bold text-brand-navy mb-2">
                        Ortalama 6m² Halı Temizliği
                    </h3>
                    <p className="text-4xl font-semibold text-brand-sky mb-1 tracking-tight">
                        450 - 600₺
                    </p>
                    <p className="text-brand-navy/60 text-sm font-medium mb-1">
                        Çoğu müşterimiz bu aralıkta kalır.
                    </p>

                    {KAMPANYA_AKTIF && (
                        <span className="inline-flex items-center gap-2 mt-2 mb-3 px-4 py-1.5 rounded-full text-xs font-bold bg-brand-sky/15 text-brand-sky border border-brand-sky/35 tracking-wide">
                            <span className="w-2 h-2 rounded-full bg-brand-sky animate-pulse inline-block" />
                            Bu ay özel fiyat · WhatsApp&apos;tan sorun
                        </span>
                    )}

                    <p className="text-brand-navy/50 text-xs mb-2">
                        Fiyat sürpriz değişmez.
                    </p>
                    <SlotMessage className="mb-3" />

                    <div className="w-full flex flex-col items-center gap-2">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-sticky-conflict
                            onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'fiyat_kutusu' })}
                            className="w-full border-2 border-brand-sky text-brand-sky hover:bg-brand-sky hover:text-white gap-3 h-14 rounded-xl group text-lg transition-colors flex items-center justify-center"
                        >
                            <Camera size={20} className="group-hover:rotate-12 transition-transform" />
                            <span>Fotoğraf Gönder, Net Fiyat Al</span>
                        </a>
                        <p className="text-brand-navy/55 text-xs font-medium">
                            Yazmak zorunda değilsiniz — fotoğrafı gönderin, biz fiyatı yazalım.
                        </p>
                        <a
                            href="tel:+905424025123"
                            onClick={() => trackEvent('telefon_aramasi', { konum: 'fiyat_kutusu' })}
                            className="text-brand-navy/50 hover:text-brand-navy text-sm font-medium transition-colors mt-1"
                        >
                            veya arayın: 0542 402 51 23
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
