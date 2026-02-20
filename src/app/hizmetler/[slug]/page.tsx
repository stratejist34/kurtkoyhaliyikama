'use client';

import React from 'react';
import { services } from '@/data/services';
import { notFound, useParams } from 'next/navigation';
import { CheckCircle2, Phone, MessageCircle } from 'lucide-react';
import { SlotMessage } from '@/components/premium/ui/SlotMessage';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_URL = 'https://wa.me/905424025123?text=Merhaba%2C%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function ServiceDetailPage() {
    const params = useParams();
    const slug = params.slug as string;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1 text-left">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 uppercase tracking-tight">{service.title}</h1>
                            <p className="text-brand-sand text-xl mb-8 opacity-90 max-w-2xl">{service.shortDescription}</p>
                            <SlotMessage variant="dark" className="mb-4" />
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="tel:05424025123"
                                    onClick={() => trackEvent('telefon_aramasi', { konum: 'hizmet_detay' })}
                                    className="bg-brand-coral text-white font-bold px-8 py-4 rounded-sm flex items-center gap-2 hover:bg-brand-coral/90 transition-all uppercase tracking-wide"
                                >
                                    <Phone className="w-5 h-5" />
                                    HEMEN ARAYIN
                                </a>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'hizmet_detay' })}
                                    className="bg-white/10 text-white font-bold px-8 py-4 rounded-sm flex items-center gap-2 hover:bg-white/20 transition-all border border-white/20 uppercase tracking-wide"
                                >
                                    <MessageCircle className="w-5 h-5 text-brand-sand" />
                                    WHATSAPP&apos;TAN FİYAT ALIN
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content & Details */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-16">
                        <div className="lg:col-span-2 space-y-12">
                            <div className="prose prose-lg max-w-none text-brand-navy/80">
                                <h2 className="text-3xl font-bold text-brand-navy mb-6">Hizmet Hakkında</h2>
                                <p className="leading-relaxed whitespace-pre-wrap">{service.fullDescription}</p>
                            </div>

                            {service.process && (
                                <div className="space-y-8">
                                    <h2 className="text-3xl font-bold text-brand-navy">Uygulama Sürecimiz</h2>
                                    <div className="grid gap-6">
                                        {service.process.map((step, index) => (
                                            <div key={index} className="flex gap-6 p-6 bg-brand-mist rounded-2xl border border-brand-navy/5">
                                                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-brand-coral font-bold text-xl border border-brand-navy/5">
                                                    {index + 1}
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h3>
                                                    <p className="text-brand-navy/60 leading-relaxed">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="bg-brand-navy p-8 rounded-3xl text-white">
                                <h3 className="text-xl font-bold mb-6">Bu Hizmette Farkımız</h3>
                                <ul className="space-y-4">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-brand-sky flex-shrink-0 mt-1" />
                                            <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-8 rounded-3xl border-2 border-dashed border-brand-navy/10">
                                <h3 className="text-xl font-bold text-brand-navy mb-4">Adrese Teslimat</h3>
                                <p className="text-brand-navy/60 text-sm mb-6">
                                    Ücretsiz servisimizle hijyenik ortamda temizlenip kısa sürede teslim edilir.
                                </p>
                                <div className="bg-brand-mist p-4 rounded-xl text-brand-navy font-bold text-center border border-brand-navy/5">
                                    {service.deliveryTime}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
