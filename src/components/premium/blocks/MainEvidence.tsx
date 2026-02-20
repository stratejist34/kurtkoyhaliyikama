import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '@/components/premium/ui/Reveal';

export const MainEvidence = () => {
    return (
        <section className="py-24 bg-white border-t border-brand-navy/5 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <Reveal direction="left" className="lg:w-1/2 order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-[4/5] rounded-[16px] bg-white overflow-hidden border border-brand-navy/6 relative shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]">
                                <Image
                                    src="/wp-content/uploads/2020/12/pendik-hali-yikama.jpg"
                                    alt="Endüstriyel halı yıkama makinesi"
                                    fill
                                    sizes="(min-width: 1024px) 260px, 45vw"
                                    className="object-cover"
                                />
                            </div>
                            <div className="aspect-[4/5] rounded-[16px] bg-white overflow-hidden border border-brand-navy/6 translate-y-8 relative shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]">
                                <Image
                                    src="/images/paketli-hali-teslime-hazir.avif"
                                    alt="Paketlenmiş ve teslime hazır temiz halı"
                                    fill
                                    sizes="(min-width: 1024px) 260px, 45vw"
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </Reveal>

                    <Reveal direction="right" className="lg:w-1/2 order-1 lg:order-2">
                        <h2 className="text-brand-navy/40 text-sm font-bold uppercase tracking-[0.2em] mb-4">Kanıt: Söylemiyoruz, Gösteriyoruz</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-brand-navy mb-8 leading-tight">
                            Durulama suyunu görene kadar <br />
                            <span className="text-brand-coral">işimizi bitmiş saymıyoruz.</span>
                        </h3>

                        <ul className="space-y-6">
                            {[
                                'Vibrasyonlu toz alma sonrası çıkan atık kum miktarı.',
                                'Yıkama esnasında derinlemesine fırçalama anı.',
                                'Yıkama esnasında derinlemesine fırçalama anı.',
                                'Son durulama suyunun içilebilir berraklığa ulaşması.',
                                'Koşulsuz İade / Tekrar Yıkama Garantisi.'
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <CheckCircle2 className="text-brand-sky w-6 h-6 shrink-0 mt-1" />
                                    <p className="text-lg text-brand-navy/80">{item}</p>
                                </li>
                            ))}
                        </ul>

                        <p className="text-sm font-semibold text-brand-sky mt-6">
                            Kurtköy & Yenişehir bölgesindeki son 30 müşterimizin %94&apos;ü tekrar tercih etti.
                        </p>

                        <div className="mt-12 p-6 rounded-[16px] bg-white border border-brand-navy/6 italic text-brand-navy/60 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.03)]">
                            &ldquo;İsterseniz yıkama sürecini tesisimizde canlı izleyebilir, kullanılan şampuanları birlikte seçebiliriz.&rdquo;
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};
