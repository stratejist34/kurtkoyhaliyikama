'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone, ChevronDown, ChevronUp } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const WHATSAPP_URL =
    'https://wa.me/905424025123?text=Merhaba%2C%206m%C2%B2%20hal%C4%B1%20i%C3%A7in%20ortalama%20fiyat%20aral%C4%B1%C4%9F%C4%B1n%C4%B1%20g%C3%B6rd%C3%BCm.%20Foto%C4%9Fraf%20g%C3%B6nderiyorum.';

const popularRegions = [
    { name: 'Kurtköy', slug: 'kurtkoy' },
    { name: 'Pendik', slug: 'pendik' },
    { name: 'Tuzla', slug: 'tuzla' },
];

const otherRegions = [
    { name: 'Velibaba', slug: 'velibaba' },
    { name: 'Kaynarca', slug: 'kaynarca' },
    { name: 'Çınardere', slug: 'cinardere' },
    { name: 'Uydukent', slug: 'uydukent' },
    { name: 'Tepeören', slug: 'tepeoren' },
    { name: 'Akfırat', slug: 'akfirat' },
    { name: 'Yenişehir', slug: 'yenisehir' },
    { name: 'Esenyalı', slug: 'esenyali' },
    { name: 'Güzelyalı', slug: 'guzelyali' },
];

export const CTAInvite = () => {
    const leftRef = useScrollReveal<HTMLDivElement>();
    const rightRef = useScrollReveal<HTMLDivElement>();
    const [regionsExpanded, setRegionsExpanded] = useState(false);

    return (
        <section id="cta-invite" className="py-0 bg-brand-mist border-t border-brand-navy/5 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
                <div ref={leftRef} className="reveal-left relative lg:w-[45%] min-h-[300px] lg:min-h-[500px]">
                    <Image
                        src="/wp-content/uploads/2020/12/velibaba-haliyikama-kurutma.jpg"
                        alt="Kurtköy Halı Yıkama kurutma tesisi"
                        fill
                        sizes="(min-width: 1024px) 45vw, 100vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-mist/80 hidden lg:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-mist to-transparent lg:hidden" />
                </div>

                <div ref={rightRef} className="reveal-right lg:w-[55%] flex items-center justify-center px-6 py-16 lg:py-24 lg:pl-12">
                    <div className="max-w-lg text-center lg:text-left w-full">
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4 leading-tight">
                            Karar vermeden önce gelin görün.
                        </h2>
                        <p className="text-lg text-brand-navy/75 mb-8">
                            Tesisimize bekleriz; isterseniz yıkama sürecini canlı izleyebilirsiniz.
                        </p>

                        {/* Bölge Seçici */}
                        <div className="mb-8">
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-navy/40 mb-3">
                                Bölgenizi seçin
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {popularRegions.map((region) => (
                                    <Link
                                        key={region.slug}
                                        href={`/bolge/${region.slug}-hali-yikama`}
                                        className="px-4 py-2 rounded-full border border-brand-navy/20 text-brand-navy text-sm font-semibold hover:border-brand-navy hover:bg-brand-navy hover:text-white transition-all duration-200"
                                    >
                                        {region.name}
                                    </Link>
                                ))}
                                <button
                                    onClick={() => setRegionsExpanded(!regionsExpanded)}
                                    className="px-4 py-2 rounded-full border border-brand-navy/10 text-brand-navy/50 text-sm font-medium hover:border-brand-navy/30 hover:text-brand-navy transition-all duration-200 flex items-center gap-1"
                                    aria-expanded={regionsExpanded}
                                >
                                    {regionsExpanded ? (
                                        <><ChevronUp size={14} /> Daha az</>
                                    ) : (
                                        <><ChevronDown size={14} /> +{otherRegions.length} bölge daha</>
                                    )}
                                </button>
                            </div>

                            {/* Genişleyen bölgeler */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${regionsExpanded ? 'max-h-40 mt-2' : 'max-h-0'}`}
                            >
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {otherRegions.map((region) => (
                                        <Link
                                            key={region.slug}
                                            href={`/bolge/${region.slug}-hali-yikama`}
                                            className="px-3 py-1.5 rounded-full border border-brand-navy/10 text-brand-navy/60 text-xs font-medium hover:border-brand-navy/30 hover:text-brand-navy transition-all duration-200"
                                        >
                                            {region.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-sticky-conflict
                                onClick={() => trackEvent('whatsapp_yazanlar', { konum: 'son_cta' })}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 text-lg py-6 bg-brand-coral text-white border-none hover:bg-brand-coral/90 shadow-[0_10px_30px_rgba(204,95,80,0.4)] transition-all duration-300 hover:-translate-y-1 rounded-sm"
                            >
                                <MessageCircle size={22} />
                                Fotoğraf Gönder, Net Fiyat Al
                            </a>
                            <a
                                href="tel:+905424025123"
                                onClick={() => trackEvent('telefon_aramasi', { konum: 'son_cta' })}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 text-lg py-5 border border-brand-navy/20 text-brand-navy bg-transparent hover:bg-transparent hover:border-brand-navy hover:border-2 transition-all duration-150 rounded-sm"
                            >
                                <Phone size={22} />
                                HEMEN ARAYIN
                            </a>
                        </div>



                    </div>
                </div>
            </div>
        </section>
    );
};
