import Image from 'next/image';
import { Reveal, Stagger } from '@/components/premium/ui/Reveal';

export const RealityScene = () => {
    const protocol = [
        {
            id: '01',
            title: 'Fiyat Bilgisi',
            description: 'Halınızın fotoğrafını gönderin, boyut ve türe göre net fiyat iletilsin.',
        },
        {
            id: '02',
            title: 'Alım ve Yıkama',
            description: 'Halınız adresinizden ücretsiz alınır, türüne uygun programda yıkanır.',
        },
        {
            id: '03',
            title: 'Kurutma ve Teslim',
            description: 'Kapalı alanda kurutulur, 3–5 gün içinde adresinize teslim edilir.',
        },
    ];

    return (
        <section className="py-24 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-sky/10 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-center mb-12">
                    <Reveal direction="up">
                        <p className="text-brand-sky uppercase tracking-[0.18em] text-xs font-bold mb-4">Hizmet Güvencemiz</p>
                        <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
                            Alımdan teslime kadar <br />
                            her adımı bilirsiniz.
                        </h2>
                        <p className="mt-5 text-white/80 max-w-2xl">
                            Halınız elinizden çıktığı andan itibaren süreç hakkında bilgilendirilirsiniz.
                        </p>
                    </Reveal>

                    <Reveal direction="scale" delay={200}>
                        <div className="relative h-56 md:h-72 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                            <Image
                                src="/images/Kurtköy Halı Yıkama Servisi.webp"
                                alt="Kurtköy Halı Yıkama servis aracı"
                                fill
                                sizes="(min-width: 1024px) 35vw, 100vw"
                                className="object-contain p-4"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-navy/80 to-transparent p-4 pt-10">
                                <p className="text-white/90 text-xs font-bold tracking-wider uppercase text-center">
                                    Ücretsiz Alım & Teslim
                                </p>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {protocol.map((item) => (
                        <article
                            key={item.id}
                            className="rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors"
                        >
                            <p className="text-brand-sky text-sm font-black tracking-wider mb-4">{item.id}</p>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/75 text-sm leading-relaxed">{item.description}</p>
                        </article>
                    ))}
                </Stagger>

                <Reveal direction="fade" delay={300} className="mt-8 text-center">
                    <p className="text-sm text-white/70">
                        Amacımız net: ne olacağını baştan bilirsiniz.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
