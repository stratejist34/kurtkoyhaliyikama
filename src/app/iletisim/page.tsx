import React from 'react';
import { Phone, MapPin, MessageCircle, Clock, Navigation } from 'lucide-react';

export const metadata = {
    title: 'İletişim | Kurtköy Halı Yıkama',
    description: 'Kurtköy, Pendik, Tuzla bölgesinde profesyonel halı yıkama hizmeti için bizimle iletişime geçin. 7/24 WhatsApp ile ulaşabilirsiniz.',
};

const contactCards = [
    {
        href: 'tel:05424025123',
        icon: Phone,
        iconColor: 'text-brand-coral',
        label: 'Telefon',
        value: '0542 402 51 23',
        sub: 'Haftanın 7 günü, 08:30 - 20:00',
        interactive: true,
    },
    {
        href: 'https://wa.me/905424025123?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.',
        icon: MessageCircle,
        iconColor: 'text-green-500',
        label: 'WhatsApp',
        value: 'Fotoğraf Gönder, Fiyat Al',
        sub: 'En hızlı yanıt kanalı',
        interactive: true,
    },
    {
        href: 'https://maps.google.com/?q=40.9165692,29.2536815',
        icon: Navigation,
        iconColor: 'text-brand-sky',
        label: 'Yol Tarifi Al',
        value: 'Velibaba Mh. Aydos Cd. No:71',
        sub: 'Pendik / İstanbul',
        interactive: true,
    },
];

export default function IletisimPage() {
    return (
        <main className="min-h-screen bg-brand-mist">

            {/* Hero */}
            <section className="relative pt-32 pb-20 page-hero-bg page-hero-cut overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/microscopic_bacteria_bg.png')] opacity-10 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
                    <p className="text-brand-sand text-xs uppercase tracking-[0.25em] font-bold mb-4">İletişim</p>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
                        Bir adım uzağınızdayız.
                    </h1>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Halınızın fotoğrafını gönderin, 30 saniye içinde net fiyat alın.
                    </p>
                </div>
            </section>

            {/* Contact Cards */}
            <section className="relative -mt-12 z-20 pb-16">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-5">
                        {contactCards.map((card) => (
                            <a
                                key={card.label}
                                href={card.href}
                                target={card.href.startsWith('http') ? '_blank' : undefined}
                                rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                className="group bg-white rounded-[20px] p-6 border border-brand-navy/6 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-brand-sky/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-brand-mist flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                                </div>
                                <p className="text-[10px] font-bold text-brand-navy/40 uppercase tracking-[0.2em] mb-1">{card.label}</p>
                                <p className="text-lg font-bold text-brand-navy mb-1 leading-snug">{card.value}</p>
                                <p className="text-xs text-brand-navy/45">{card.sub}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map + Info */}
            <section className="pb-24">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="grid lg:grid-cols-5 gap-8">
                        {/* Map — takes 3 columns */}
                        <div className="lg:col-span-3 bg-white rounded-[24px] border border-brand-navy/6 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7984.939614045459!2d29.25368150000001!3d40.9165692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadb2049c0df8b%3A0xe583c25c2a9c6814!2zRGVydmnFn2_En3VsbGFyxLEgSGFsxLEgWcSxa2FtYQ!5e1!3m2!1str!2str!4v1771565356241!5m2!1str!2str"
                                width="100%"
                                height="420"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dervişoğulları Halı Yıkama Konumu"
                                className="w-full"
                            />
                        </div>

                        {/* Info panel — takes 2 columns */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Address card */}
                            <div className="bg-white rounded-[20px] p-8 border border-brand-navy/6 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] flex-1">
                                <div className="w-10 h-10 rounded-xl bg-brand-sky/10 flex items-center justify-center mb-5">
                                    <MapPin className="w-5 h-5 text-brand-sky" />
                                </div>
                                <h3 className="text-sm font-bold text-brand-navy/40 uppercase tracking-[0.15em] mb-3">Adres</h3>
                                <p className="text-brand-navy font-semibold text-lg leading-relaxed mb-1">
                                    Velibaba Mh. Aydos Cd. No:71
                                </p>
                                <p className="text-brand-navy/50 text-sm">Pendik / İstanbul</p>
                            </div>

                            {/* Working hours card */}
                            <div className="bg-white rounded-[20px] p-8 border border-brand-navy/6 shadow-[0_2px_8px_rgba(0,0,0,0.04),0_4px_16px_rgba(0,0,0,0.03)] flex-1">
                                <div className="w-10 h-10 rounded-xl bg-brand-coral/10 flex items-center justify-center mb-5">
                                    <Clock className="w-5 h-5 text-brand-coral" />
                                </div>
                                <h3 className="text-sm font-bold text-brand-navy/40 uppercase tracking-[0.15em] mb-3">Çalışma Saatleri</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-brand-navy/60 text-sm">Pazartesi – Cumartesi</span>
                                        <span className="text-brand-navy font-semibold text-sm">08:30 – 20:00</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-brand-navy/60 text-sm">Pazar</span>
                                        <span className="text-brand-navy font-semibold text-sm">09:00 – 18:00</span>
                                    </div>
                                </div>
                                <div className="mt-5 pt-4 border-t border-brand-navy/5">
                                    <p className="text-xs text-brand-navy/40">WhatsApp üzerinden 7/24 mesaj bırakabilirsiniz.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}
