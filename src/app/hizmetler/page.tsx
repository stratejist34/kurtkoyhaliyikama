'use client';

import React from 'react';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MessageCircle, Phone, MapPin } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { FaqSection } from '@/components/premium/blocks/FaqSection';

const WHATSAPP_URL =
    'https://wa.me/905424025123?text=Merhaba%2C%20hizmetleriniz%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.';

export default function HizmetlerPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Hizmetlerimiz</h1>
                    <p className="text-brand-sand text-lg uppercase tracking-widest font-medium">Her biri ayrı uzmanlık.</p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-brand-mist">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service) => (
                            <div key={service.id} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                                {/* Image Header with Overlay */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(min-width: 768px) 33vw, 100vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 via-brand-navy/40 to-transparent" />
                                    <div className="absolute top-6 left-6">
                                        <div className="bg-white text-brand-navy font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">
                                            {service.badge}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 space-y-4">
                                    <h3 className="text-2xl font-bold text-brand-navy">{service.title}</h3>
                                    <p className="text-brand-navy/60 text-sm leading-relaxed">
                                        {service.shortDescription}
                                    </p>
                                    <ul className="space-y-2">
                                        {service.features.slice(0, 3).map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-xs text-brand-navy/80">
                                                <CheckCircle2 className="w-4 h-4 text-brand-coral shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href={`/hizmetler/${service.slug}`}
                                        className="inline-flex items-center gap-2 text-brand-coral font-bold hover:gap-4 transition-all mt-4"
                                    >
                                        Detayları İnceleyin
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                    <a
                                        href={`https://wa.me/905424025123?text=Merhaba%2C%20${encodeURIComponent(service.title)}%20hakk%C4%B1nda%20plan%20almak%20istiyorum.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'hizmetler' })}
                                        className="inline-flex items-center gap-1.5 text-brand-navy/50 hover:text-brand-coral text-xs font-medium transition-colors mt-1"
                                    >
                                        <MessageCircle className="w-3.5 h-3.5" />
                                        Bu hizmet için plan sor
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Region Access Section */}
            <section className="py-20 bg-white border-t border-brand-navy/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <MapPin className="w-5 h-5 text-brand-coral" />
                            <span className="text-brand-coral font-semibold text-sm uppercase tracking-wider">Hizmet Bölgelerimiz</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">Tüm Bölgelerde Yanınızdayız</h2>
                        <p className="text-brand-navy/60 max-w-2xl mx-auto">
                            Ücretsiz servisimizle aşağıdaki bölgelere düzenli olarak hizmet veriyoruz.
                        </p>
                        <p className="text-brand-navy/45 text-sm mt-2">
                            Her bölgede günlük sınırlı alım planı uygulanır.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                        {regions.map((region) => (
                            <Link
                                key={region.slug}
                                href={`/bolge/${region.slug}-hali-yikama`}
                                className="group flex items-center justify-center gap-2 p-4 bg-brand-mist rounded-xl border border-brand-navy/5 hover:border-brand-coral/30 hover:shadow-md transition-all text-center"
                            >
                                <span className="font-semibold text-brand-navy group-hover:text-brand-coral transition-colors text-sm">
                                    {region.name}
                                </span>
                                <ArrowRight className="w-3.5 h-3.5 text-brand-navy/30 group-hover:text-brand-coral group-hover:translate-x-0.5 transition-all" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <FaqSection />

            {/* CTA Section */}
            <section className="py-20 bg-white border-t border-brand-navy/5">
                <div className="max-w-2xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                        Bugünkü planlama dolmadan fotoğraf gönderin
                    </h2>
                    <p className="text-brand-navy/60 mb-10">
                        Halınızın fotoğrafını gönderin, dakikalar içinde net fiyat ve teslim süresi iletilsin.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'hizmetler' })}
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-brand-coral text-white font-bold text-lg rounded-sm hover:bg-brand-coral/90 shadow-lg transition-all"
                        >
                            <MessageCircle size={22} />
                            FİYAT ALIN
                        </a>
                        <a
                            href="tel:+905424025123"
                            onClick={() => trackEvent('telefon_aramasi', { konum: 'hizmetler' })}
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-brand-navy/20 text-brand-navy font-bold text-lg rounded-sm hover:border-brand-navy transition-all"
                        >
                            <Phone size={22} />
                            HEMEN ARAYIN
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
