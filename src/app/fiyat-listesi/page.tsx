import { Metadata } from 'next';
import { priceList } from '@/data/pricing';
import { Phone, MessageCircle, Info, Truck, ShieldCheck, Sparkles, ChevronDown } from 'lucide-react';
import { SlotMessage } from '@/components/premium/ui/SlotMessage';
import { PriceCategoryBar } from '@/components/premium/ui/PriceCategoryBar';

const WHATSAPP_URL = 'https://wa.me/905424025123?text=Merhaba%2C%20fiyat%20bilgisi%20almak%20istiyorum.';

export const metadata: Metadata = {
    title: 'Halı Yıkama Fiyatları – Fiyat Listesi | Kurtköy Halı Yıkama',
    description: 'Kurtköy Halı Yıkama güncel fiyat listesi. Makina halısı, shaggy, nepal, el dokuma halı, yorgan, battaniye, stor perde ve koltuk yıkama fiyatları.',
    keywords: 'halı yıkama fiyat, kurtköy halı yıkama fiyat listesi, halı yıkama m2 fiyat, yorgan yıkama fiyat, koltuk yıkama fiyat',
};

function PriceCard({ name, price, unit }: { name: string; price: number; unit: string }) {
    return (
        <div className="flex items-center justify-between py-4 px-5 bg-white rounded-lg border border-brand-navy/5 hover:border-brand-sky/30 hover:shadow-sm transition-all">
            <span className="text-brand-navy font-semibold text-[15px]">{name}</span>
            <div className="flex items-baseline gap-1 shrink-0 ml-4">
                <span className="text-brand-coral font-black text-xl tabular-nums">{price.toLocaleString('tr-TR')}</span>
                <span className="text-brand-navy/40 text-sm font-medium">₺/{unit}</span>
            </div>
        </div>
    );
}

export default function FiyatListesiPage() {
    const haliPrices = priceList.filter(p => p.category === 'hali');
    const yorganPrices = priceList.filter(p => p.category === 'yorgan');
    const digerPrices = priceList.filter(p => p.category === 'diger');

    return (
        <main className="min-h-screen bg-brand-mist">
            <PriceCategoryBar />

            {/* Hero */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <p className="text-brand-sky text-sm uppercase tracking-widest font-semibold mb-4">Güncel Fiyat Listesi</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Halı Yıkama Fiyatları
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Tüm fiyatlarımız ücretsiz alım-teslim dahildir. Halınızın fotoğrafını gönderin, net fiyatı öğrenin.
                    </p>
                </div>
            </section>

            {/* Avantajlar — yatay chip satırı + fiyat anchor */}
            <section className="py-5 bg-white border-b border-brand-navy/5">
                <div className="max-w-4xl mx-auto px-4 flex flex-col items-center gap-3">
                    <div className="flex flex-wrap justify-center gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-sky/8 border border-brand-sky/15 text-brand-navy/65 text-xs font-medium">
                            <Truck size={12} className="text-brand-sky" />
                            Ücretsiz alım &amp; teslim
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-sky/8 border border-brand-sky/15 text-brand-navy/65 text-xs font-medium">
                            <ShieldCheck size={12} className="text-brand-sky" />
                            Bitkisel şampuan
                        </span>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-brand-sky/8 border border-brand-sky/15 text-brand-navy/65 text-xs font-medium">
                            <Sparkles size={12} className="text-brand-sky" />
                            Kapalı kurutma
                        </span>
                    </div>
                    <a
                        href="#fiyat-tablosu"
                        className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-coral text-white text-sm font-bold rounded-sm hover:bg-brand-coral/90 transition-colors"
                    >
                        Fiyatları Gör
                        <ChevronDown size={15} />
                    </a>
                </div>
            </section>

            {/* Fiyat Tablosu */}
            <section id="fiyat-tablosu" className="py-16">
                <div className="max-w-4xl mx-auto px-4">

                    {/* Halı Yıkama */}
                    <div id="cat-hali" className="mb-12 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                            Halı Yıkama Fiyatları
                            <span className="text-xs bg-brand-sky/15 text-brand-sky font-bold px-2.5 py-1 rounded-full">m² bazında</span>
                        </h2>
                        <div className="grid gap-2">
                            {haliPrices.map((item) => (
                                <PriceCard key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Yorgan & Battaniye */}
                    <div id="cat-yorgan" className="mb-12 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-brand-navy mb-6 flex items-center gap-2">
                            Yorgan &amp; Battaniye Yıkama
                            <span className="text-xs bg-brand-sky/15 text-brand-sky font-bold px-2.5 py-1 rounded-full">adet bazında</span>
                        </h2>
                        <div className="grid gap-2">
                            {yorganPrices.map((item) => (
                                <PriceCard key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Diğer Hizmetler */}
                    <div id="cat-diger" className="mb-12 scroll-mt-20">
                        <h2 className="text-2xl font-bold text-brand-navy mb-6">
                            Diğer Hizmetler
                        </h2>
                        <div className="grid gap-2">
                            {digerPrices.map((item) => (
                                <PriceCard key={item.name} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Bilgilendirme Notu — kompakt tek satır */}
                    <div className="flex items-center gap-2.5 bg-white rounded-lg border border-brand-navy/5 px-4 py-3 mb-8">
                        <Info size={14} className="text-brand-sky shrink-0" />
                        <p className="text-brand-navy/50 text-xs leading-relaxed">
                            Halı türü ve duruma göre fiyat değişebilir — fotoğrafla netleştiriyoruz.
                        </p>
                    </div>

                    <div className="flex items-center gap-2.5 bg-brand-sky/5 rounded-lg border border-brand-sky/10 px-4 py-3 mb-8">
                        <ShieldCheck size={14} className="text-brand-sky shrink-0" />
                        <p className="text-brand-navy/80 text-xs font-bold leading-relaxed">
                            Gizli maliyet yok. Fotoğraf onayından sonra fiyat değişmez.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="bg-brand-navy rounded-2xl p-8 md:p-12 text-center">
                        <SlotMessage variant="dark" className="mx-auto mb-4" />
                        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                            Bugünkü planlama dolmadan fotoğraf gönderin
                        </h2>
                        <p className="text-white/50 mb-8 max-w-md mx-auto">
                            Fotoğrafı gönderin — dakikalar içinde net fiyat ve teslim süresi bildirilir.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <FiyatCTA />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

function FiyatCTA() {
    'use client';

    return (
        <>
            <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-coral text-white font-bold text-lg rounded-sm hover:bg-brand-coral/90 shadow-lg transition-all"
            >
                <MessageCircle size={20} />
                FİYAT ALIN
            </a>
            <a
                href="tel:+905424025123"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-bold text-lg rounded-sm hover:border-white/40 transition-all"
            >
                <Phone size={20} />
                0542 402 51 23
            </a>
        </>
    );
}
