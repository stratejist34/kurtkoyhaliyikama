import React from 'react';
import { CheckCircle2, Award, Users, ShieldCheck } from 'lucide-react';

export default function KurumsalPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* Hero Section */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/microscopic_bacteria_bg.png')] opacity-10 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Kurumsal</h1>
                    <p className="text-brand-sand text-lg uppercase tracking-widest font-medium">Sadece Temizlik Değil, Bir Sağlık Kararı</p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-brand-navy leading-tight">
                                10 Yılı Aşkın Tecrübe ile <span className="text-brand-coral">Pendik&apos;in En Güvenilir</span> Halı Yıkama Merkezi
                            </h2>
                            <div className="space-y-4 text-brand-navy/70 leading-relaxed">
                                <p>
                                    Uzman kadrosuyla 10 yılı aşkın süredir Pendik mahallelerine halı yıkama hizmeti veriyoruz.
                                    <strong>Kurtköy Halı Yıkama</strong>, siz değerli müşterilerine karşı her zaman hoşgörülü ve verdiği hizmetlerle sektörde üst sıralara çıkmıştır.
                                </p>
                                <p>
                                    Bu başarımızdaki en büyük faktör müşterilerimizin isteklerini ön planda tutmak ve onlara en kaliteli hizmeti vermemizden kaynaklanmaktadır.
                                    Yılların verdiği tecrübeyle halı yıkama, koltuk yıkama, battaniye ve yerinde halı yıkama konusunda deneyimli bir hale gelmiştir.
                                </p>
                                <p>
                                    Firmamız uzun yıllardan beri uzman ekip ve kadrosuyla her zaman müşterilerini memnun etmiştir.
                                    Halılarınızın yanlış ortamda yanlış stillerde yıkanması hem sizin hem ailenizin sağlığı hem de halınız açısından olumsuz sonuçlar doğurur.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-brand-mist p-8 rounded-2xl border border-brand-navy/5 space-y-4">
                                <Award className="text-brand-sky w-10 h-10" />
                                <h3 className="font-bold text-brand-navy text-xl">Uzman Kadro</h3>
                                <p className="text-sm text-brand-navy/60">Alanında yetişmiş ve tecrübeli profesyonellerle çalışıyoruz.</p>
                            </div>
                            <div className="bg-brand-mist p-8 rounded-2xl border border-brand-navy/5 space-y-4">
                                <ShieldCheck className="text-brand-coral w-10 h-10" />
                                <h3 className="font-bold text-brand-navy text-xl">Garantili Yıkama</h3>
                                <p className="text-sm text-brand-navy/60">Halılarınız tüy, saçak ve renk kaymasına karşı garantimiz altındadır.</p>
                            </div>
                            <div className="bg-brand-mist p-8 rounded-2xl border border-brand-navy/5 space-y-4">
                                <Users className="text-brand-sky w-10 h-10" />
                                <h3 className="font-bold text-brand-navy text-xl">Müşteri Odaklı</h3>
                                <p className="text-sm text-brand-navy/60">Müşterilerimizin her türlü şikayetini dikkate alarak çözüme ulaştırıyoruz.</p>
                            </div>
                            <div className="bg-brand-mist p-8 rounded-2xl border border-brand-navy/5 space-y-4">
                                <CheckCircle2 className="text-brand-coral w-10 h-10" />
                                <h3 className="font-bold text-brand-navy text-xl">Sağlık Odaklı</h3>
                                <p className="text-sm text-brand-navy/60">Halılarınızı aileniz için cerrahi titizlikle temizliyoruz.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas Section */}
            <section className="py-20 bg-brand-navy text-white">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-12">Hizmet Bölgelerimiz</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                        {['Kurtköy', 'Uydukent', 'Yakacık', 'Velibaba', 'Çınardere', 'Yayalar'].map((area) => (
                            <div key={area} className="p-4 border border-white/10 rounded-xl hover:border-brand-sky hover:text-brand-sky transition-colors">
                                <span className="font-bold">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
