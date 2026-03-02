import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, Phone, MessageCircle, MapPin, ArrowRight } from 'lucide-react';
import { SlotMessage } from '@/components/premium/ui/SlotMessage';
import { StickySceneEntry } from '@/components/premium/blocks/StickySceneEntry';
import { CTAInvite } from '@/components/premium/blocks/CTAInvite';
import {
    getRegionServices,
    getRegionServiceBySlug,
    getServiceData,
    getNearbyRegionServices,
    getSameRegionOtherServices
} from '@/data/regions';
import { getServiceFaqs } from '@/data/services';

const siteUrl = 'https://kurtkoyhaliyikama.net';

export async function generateStaticParams() {
    return getRegionServices().map((rs) => ({
        slug: rs.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const regionService = getRegionServiceBySlug(slug);
    if (!regionService) return {};

    const { region, service, title } = regionService;
    const serviceData = getServiceData(service.id);
    const priceStr = serviceData?.pricingRange ? ` · ${serviceData.pricingRange.min}-${serviceData.pricingRange.max}₺` : '';

    return {
        title: `${region.name} ${service.name} | Ücretsiz Alım-Teslim${priceStr}`,
        description: `${region.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti. 3-5 günde teslim, ücretsiz servis, sabit fiyat. Fotoğraf gönderin, hemen fiyat alın. ☎ 0542 402 51 23`,
        alternates: {
            canonical: `/bolge/${slug}`,
        },
        openGraph: {
            title: `${region.name} ${service.name} | Kurtköy Halı Yıkama`,
            description: `${region.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti. Ücretsiz servis, sabit fiyat.`,
            url: `${siteUrl}/bolge/${slug}`,
            locale: 'tr_TR',
            type: 'website',
        },
        keywords: [
            `${region.name.toLowerCase()} ${service.name.toLowerCase()}`,
            `${region.name.toLowerCase()} halı yıkama`,
            `${region.name.toLowerCase()} temizlik`,
            service.name.toLowerCase(),
            'profesyonel temizlik',
            region.name.toLowerCase(),
        ],
    };
}

export default async function BolgeServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const regionService = getRegionServiceBySlug(slug);
    if (!regionService) notFound();

    const { region, service, title } = regionService;
    const serviceData = getServiceData(service.id);
    const nearbyServices = getNearbyRegionServices(region.slug, service.slug);
    const otherServices = getSameRegionOtherServices(region.slug, service.slug);

    const faqs = serviceData ? getServiceFaqs(serviceData, region.name) : [];
    const whyDifferentContent = serviceData?.whyDifferent?.replace(/{region}/g, region.name);

    const whatsappMessage = `${region.name}'dan yazıyorum, ${service.name.toLowerCase()} için fiyat ve teslim alma tarihi verir misiniz?`;
    const WHATSAPP_URL = `https://wa.me/905424025123?text=${encodeURIComponent(whatsappMessage)}`;

    const localBusinessSchema = {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Kurtköy Halı Yıkama',
        url: `${siteUrl}/bolge/${slug}`,
        telephone: '+905424025123',
        image: `${siteUrl}/images/hero_studio_light_gray.png`,
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Velibaba Mh. Aydos Cd. No:71',
            addressLocality: region.district,
            addressRegion: 'İstanbul',
            postalCode: region.postalCode || '34896',
            addressCountry: 'TR',
        },
        areaServed: {
            '@type': 'Place',
            name: `${region.name}, ${region.district}`,
        },
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
        },
    };

    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: title,
        serviceType: service.name,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Kurtköy Halı Yıkama',
            telephone: '+905424025123',
        },
        areaServed: region.name,
        description: serviceData?.fullDescription || `${region.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti.`,
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            reviewCount: '127',
            bestRating: '5',
            worstRating: '1',
        },
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Anasayfa',
                item: siteUrl,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Hizmetler',
                item: `${siteUrl}/hizmetler`,
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: title,
                item: `${siteUrl}/bolge/${slug}`,
            },
        ],
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    };

    return (
        <main className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            {faqs.length > 0 && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                />
            )}

            <StickySceneEntry />

            {/* Breadcrumb */}
            <div className="page-hero-bg pt-28 pb-0">
                <div className="max-w-7xl mx-auto px-4">
                    <nav className="flex items-center gap-2 text-xs text-white/40">
                        <Link href="/" className="hover:text-white transition-colors">Anasayfa</Link>
                        <span>/</span>
                        <Link href="/hizmetler" className="hover:text-white transition-colors">Hizmetler</Link>
                        <span>/</span>
                        <span className="text-white/70">{title}</span>
                    </nav>
                </div>
            </div>

            {/* Hero */}
            <section className="relative pt-8 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-start gap-12">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-6">
                                <MapPin className="w-5 h-5 text-brand-coral" />
                                <span className="text-brand-coral font-semibold text-sm uppercase tracking-wider">{region.name}, {region.district}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                                {title}
                            </h1>
                            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mb-8">
                                {region.description}
                            </p>
                            <SlotMessage variant="dark" className="mb-4" />
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-brand-coral text-white font-bold rounded-sm hover:bg-brand-coral/90 transition-all uppercase tracking-wide"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    FİYAT AL
                                </a>
                                <a
                                    href="tel:+905424025123"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 text-white font-bold rounded-sm border border-white/20 hover:bg-white/20 transition-all uppercase tracking-wide"
                                >
                                    <Phone className="w-5 h-5" />
                                    0542 402 51 23
                                </a>
                            </div>
                            <p className="text-white/40 text-xs mt-4">
                                Bölge yoğunluğuna göre dönemsel fiyat avantajı uygulanabilir.
                            </p>
                        </div>

                        <div className="w-full lg:w-96 space-y-4">
                            {serviceData && (
                                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                    <Image
                                        src={serviceData.image}
                                        alt={title}
                                        fill
                                        sizes="(min-width: 1024px) 384px, 100vw"
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white text-brand-navy font-bold px-3 py-1 rounded-full text-xs uppercase tracking-wider">
                                            {serviceData.badge}
                                        </span>
                                    </div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <p className="text-white font-bold text-sm">{serviceData.deliveryTime}</p>
                                    </div>
                                </div>
                            )}
                            {serviceData && (
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5">
                                    <ul className="grid grid-cols-2 gap-2">
                                        {serviceData.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-xs text-white/70">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-brand-sand shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Details */}
            {serviceData && (
                <section className="py-20 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-brand-navy mb-6">
                            {region.name} {service.name} Hizmeti Hakkında
                        </h2>
                        <p className="text-brand-navy/70 text-lg leading-relaxed mb-12">
                            {serviceData.fullDescription}
                        </p>

                        {whyDifferentContent && (
                            <div className="bg-brand-mist rounded-2xl p-8 md:p-10 mb-12 border border-brand-navy/5">
                                <h3 className="text-2xl font-bold text-brand-navy mb-4">
                                    {region.name} {service.name} Hizmeti Neden Farklıdır?
                                </h3>
                                <p className="text-brand-navy/80 text-lg leading-relaxed mb-6">
                                    {whyDifferentContent}
                                </p>
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-brand-coral font-bold hover:gap-3 transition-all"
                                >
                                    Hemen WhatsApp'tan Ulaşın
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        )}

                        {serviceData.pricingRange && (
                            <div className="bg-white border-2 border-brand-coral/20 rounded-2xl p-8 md:p-10 shadow-sm mb-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-brand-coral text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    SABİT FİYAT
                                </div>
                                <h3 className="text-2xl font-bold text-brand-navy mb-2">
                                    {region.name} {service.name} Fiyatları
                                </h3>
                                <p className="text-brand-navy/60 mb-6">
                                    Sürpriz ödemeler yok, {region.name} bölgesi için güncel fiyat tarifemiz:
                                </p>
                                <div className="flex items-end gap-2 mb-6">
                                    <span className="text-4xl font-bold text-brand-navy">{serviceData.pricingRange.min}₺</span>
                                    <span className="text-xl text-brand-navy/50 font-medium pb-1">- {serviceData.pricingRange.max}₺</span>
                                    <span className="text-sm font-bold text-brand-navy/40 uppercase ml-2 pb-2">/ {serviceData.pricingRange.unit}</span>
                                </div>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href={WHATSAPP_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-navy text-white font-bold rounded hover:bg-brand-navy/90 transition-all text-sm"
                                    >
                                        <MessageCircle className="w-4 h-4" />
                                        Fotoğraf Gönder, Net Fiyat Al
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            )}

            {/* Process Steps */}
            {serviceData?.process && serviceData.process.length > 0 && (
                <section className="py-20 bg-brand-mist">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">Uygulama Sürecimiz</h2>
                        <p className="text-brand-navy/60 mb-12 max-w-2xl">
                            {region.name} bölgesinden aldığımız {service.name.toLowerCase()} siparişlerinde uygulanan süreç:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {serviceData.process.map((step, index) => (
                                <div key={index} className="bg-white p-6 rounded-2xl border border-brand-navy/5 hover:shadow-lg transition-shadow">
                                    <div className="w-10 h-10 bg-brand-coral/10 rounded-xl flex items-center justify-center text-brand-coral font-bold text-lg mb-4">
                                        {index + 1}
                                    </div>
                                    <h3 className="text-lg font-bold text-brand-navy mb-2">{step.title}</h3>
                                    <p className="text-brand-navy/60 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Why Us in Region */}
            {region.advantages && region.advantages.length > 0 && (
                <section className="py-20 bg-white border-b border-brand-navy/5">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">
                            Neden {region.name} Bölgesinde Bizi Tercih Etmelisiniz?
                        </h2>
                        {region.distanceToHQ && (
                            <p className="text-brand-coral font-bold text-sm uppercase tracking-wider mb-8">
                                Tesisimize sadece {region.distanceToHQ} dakika mesafede!
                            </p>
                        )}
                        <div className="grid sm:grid-cols-3 gap-6 text-left">
                            {region.advantages.map((adv, idx) => (
                                <div key={idx} className="flex gap-4">
                                    <CheckCircle2 className="w-6 h-6 text-brand-coral shrink-0" />
                                    <p className="text-brand-navy/80 font-medium">{adv}</p>
                                </div>
                            ))}
                        </div>
                        {region.populationNote && (
                            <p className="text-brand-navy/40 text-sm mt-8">
                                {region.name} bölgesindeki {region.populationNote} için özel tasarlanmış {service.name.toLowerCase()} çözümleri.
                            </p>
                        )}
                    </div>
                </section>
            )}

            {/* CTA Mid Section */}
            <section className="py-16 bg-brand-navy">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        {region.name} Bölgesinden Fiyat Alın
                    </h2>
                    <p className="text-white/60 mb-6">
                        Bugünkü planlama dolmadan fotoğrafı gönderin — net fiyat ve teslim süresi bildirilir.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand-coral text-white font-bold rounded-sm hover:bg-brand-coral/90 transition-all uppercase tracking-wide"
                        >
                            <MessageCircle className="w-5 h-5" />
                            FİYAT AL
                        </a>
                        <a
                            href="tel:+905424025123"
                            className="inline-flex items-center justify-center gap-3 px-8 py-4 border-2 border-white/35 text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase tracking-wide"
                        >
                            <Phone className="w-5 h-5" />
                            0542 402 51 23
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            {faqs && faqs.length > 0 && (
                <section className="py-20 bg-brand-mist/50">
                    <div className="max-w-3xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4 text-center">Sıkça Sorulan Sorular</h2>
                        <p className="text-brand-navy/60 text-center mb-10">
                            {region.name} bölgesinden {service.name.toLowerCase()} hakkında en çok sorulanlar:
                        </p>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <details key={index} className="group bg-white rounded-xl border border-brand-navy/5 overflow-hidden open:border-brand-coral/20 transition-all duration-300 shadow-sm">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer font-bold text-brand-navy list-none marker:hidden">
                                        {faq.question}
                                        <span className="group-open:rotate-180 transition-transform duration-300">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-coral"><polyline points="6 9 12 15 18 9"></polyline></svg>
                                        </span>
                                    </summary>
                                    <div className="p-6 pt-0 text-brand-navy/70 leading-relaxed border-t border-brand-navy/5 group-open:border-brand-coral/10 mt-2">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-brand-navy/60 text-sm mb-4">Başka bir sorunuz mu var?</p>
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-coral text-white font-bold rounded-sm hover:bg-brand-coral/90 transition-all text-sm uppercase tracking-wide"
                            >
                                <MessageCircle className="w-5 h-5" />
                                WhatsApp'tan Ücretsiz Danışın
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* Other Services in Same Region */}
            {otherServices.length > 0 && (
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">
                            {region.name} Bölgesindeki Diğer Hizmetlerimiz
                        </h2>
                        <p className="text-brand-navy/60 mb-10">
                            {region.name} ve çevresinde sunduğumuz diğer profesyonel temizlik hizmetleri:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {otherServices.map((rs) => {
                                const otherServiceData = getServiceData(rs.service.id);
                                return (
                                    <Link
                                        key={rs.slug}
                                        href={`/bolge/${rs.slug}`}
                                        className="group bg-brand-mist rounded-2xl border border-brand-navy/5 hover:border-brand-coral/30 hover:shadow-lg transition-all overflow-hidden"
                                    >
                                        {otherServiceData && (
                                            <div className="relative aspect-[16/10] overflow-hidden">
                                                <Image
                                                    src={otherServiceData.image}
                                                    alt={rs.title}
                                                    fill
                                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5">
                                            <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-coral transition-colors mb-1">
                                                {rs.title}
                                            </h3>
                                            {otherServiceData && (
                                                <p className="text-brand-navy/50 text-sm mb-3 line-clamp-2">{otherServiceData.shortDescription}</p>
                                            )}
                                            <span className="inline-flex items-center gap-2 text-brand-coral text-sm font-semibold">
                                                Detayları Gör
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}

            {/* Nearby Regions */}
            {nearbyServices.length > 0 && (
                <section className="py-20 bg-brand-mist border-t border-brand-navy/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-brand-navy mb-4">
                            Yakın Bölgelerde {service.name}
                        </h2>
                        <p className="text-brand-navy/60 mb-10">
                            {region.name} yakınlarındaki bölgelerde de aynı profesyonel hizmeti sunuyoruz:
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {nearbyServices.map((rs) => (
                                <Link
                                    key={rs.slug}
                                    href={`/bolge/${rs.slug}`}
                                    className="group flex items-center justify-between p-5 bg-white rounded-xl border border-brand-navy/5 hover:border-brand-coral/30 hover:shadow-md transition-all"
                                >
                                    <div>
                                        <p className="font-bold text-brand-navy group-hover:text-brand-coral transition-colors">
                                            {rs.region.name}
                                        </p>
                                        <p className="text-xs text-brand-navy/40 mt-1">{service.name}</p>
                                    </div>
                                    <ArrowRight className="w-4 h-4 text-brand-navy/30 group-hover:text-brand-coral group-hover:translate-x-1 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <CTAInvite />
        </main>
    );
}
