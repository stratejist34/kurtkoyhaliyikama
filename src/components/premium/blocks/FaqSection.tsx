'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Reveal } from '@/components/premium/ui/Reveal';

const faqs = [
    {
        question: "Halılarımın renkleri birbirine karışır mı?",
        answer: "Hayır. Her halı tesisimize geldiğinde önce uzman ekibimiz tarafından renk verme riski testine tabi tutulur. Riskli görülen (özellikle el dokuma, kök boyalı) halılar, diğerlerinden ayrılarak özel sabitleyicilerle ve tek tek yıkanır. Asla havuz sistemi kullanmıyoruz, bu yüzden çapraz bulaşma riski sıfırdır."
    },
    {
        question: "Lekelerin hepsi çıkar mı?",
        answer: "Size dürüst olacağız: Dünyadaki hiçbir halı yıkamacı %100 leke çıkarma garantisi veremez, veriyorsa halınıza zarar verecek kimyasallar (çamaşır suyu vb.) kullanıyordur. Bizim vaadimiz şudur: Halınızın lif yapısına ve boyasına zarar vermeden çıkabilecek en üst seviyedeki lekeleri, doğru enzim ve müdahale teknikleriyle çıkartırız."
    },
    {
        question: "Teslimat ne zaman yapılır?",
        answer: "Standart teslimat süremiz 3-4 iş günüdür. Bazı firmaların 'ertesi gün teslim' vaadini vermiyoruz çünkü biz halılarınızı aceleyle fırınlayarak değil, nem alma odalarında kemik gibi kuruyana kadar dinlendirerek kurutuyoruz. Bu, halınızın koku yapmaması ve küflenmemesi için kritik bir süreçtir."
    },
    {
        question: "Yorganlar makinede mi yıkanıyor?",
        answer: "Evet, kesinlikle. Tesisimizde yorgan ve battaniyeler için özel, tek kişilik sanayi tipi makineler bulunur. Her müşterinin yorganı tek başına yıkanır. Asla başkalarının eşyalarıyla aynı makineye atılmaz veya yerde yıkanmaz."
    },
    {
        question: "Neden fiyatlarınız piyasa ortalamasının üzerinde?",
        answer: "Çünkü sağlığınızdan ve kaliteden tasarruf etmiyoruz. Market şampuanı yerine sertifikalı enzimler kullanıyoruz. Kuyu suyu değil, filtrelenmiş şebeke suyu kullanıyoruz. Halılarınızı tozlu sokaklarda değil, kapalı hijyenik odalarda kurutuyoruz. 'Ucuz' yıkamanın bedelini halınızın ömrüyle veya sağlığınızla ödememeniz için standardımızı koruyoruz."
    }
];

export const FaqSection = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white border-t border-brand-navy/5">
            <div className="max-w-4xl mx-auto px-4">
                <Reveal>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-sky/10 text-brand-sky text-xs font-bold uppercase tracking-widest mb-4">
                            <HelpCircle size={14} />
                            Aklınızda Soru Kalmasın
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-brand-navy mb-4">
                            Sıkça Sorulan Sorular
                        </h2>
                        <p className="text-brand-navy/60 max-w-xl mx-auto text-lg">
                            Şeffaflık ilkemiz gereği, süreci ve sonuçları net bir şekilde paylaşıyoruz.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className={`rounded-2xl transition-all duration-300 border ${openIndex === index
                                        ? 'bg-brand-mist border-brand-navy/10 shadow-sm'
                                        : 'bg-white border-brand-navy/5 hover:border-brand-navy/10'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className={`text-lg font-bold pr-8 transition-colors ${openIndex === index ? 'text-brand-coral' : 'text-brand-navy'
                                        }`}>
                                        {faq.question}
                                    </span>
                                    <span className={`shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-brand-coral' : 'text-brand-navy/30'
                                        }`}>
                                        {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 pt-0 text-brand-navy/70 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
