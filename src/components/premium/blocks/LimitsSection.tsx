import React from 'react';
import { XCircle } from 'lucide-react';
import { Reveal, Stagger } from '@/components/premium/ui/Reveal';

const limits = [
    {
        icon: XCircle,
        title: "Merdiven Altı Kimyasallar",
        description: "Maliyet düşürmek için sağlığa zararlı, kalıntı bırakan kostik bazlı ucuz deterjanları asla kullanmıyoruz."
    },
    {
        icon: XCircle,
        title: "Sokakta Kurutma",
        description: "Halılarınızı sokak tozuna, egzoz dumanına ve güneşe maruz bırakmıyoruz. Sadece kapalı odalar."
    }
];

export const LimitsSection = () => {
    return (
        <section className="py-32 bg-brand-navy text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-sky/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <Reveal direction="up" className="text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">Ucuz Yol, Bizim Yolumuz Değil.</h2>
                    <p className="text-xl text-white/80 font-medium">Kaliteden ödün vermeden fiyat düşürmeye çalışmıyoruz.</p>
                    <p className="text-white/60 text-base font-normal mt-2">Çünkü evinize giren şey sadece temizlik değil, güven olmalı.</p>
                </Reveal>

                <Stagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {limits.map((limit, index) => (
                        <div key={index} className="bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="flex items-start gap-5 relative z-10">
                                <div className="p-3 bg-red-500/10 text-red-500 rounded-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <limit.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{limit.title}</h3>
                                    <p className="text-white/80 text-sm leading-relaxed font-medium">
                                        {limit.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Stagger>

                <Reveal direction="fade" delay={400} className="mt-24 text-center">
                    <p className="text-5xl md:text-7xl font-black text-brand-sky tracking-tighter drop-shadow-2xl">
                        3.000+ halıda aynı standart.
                    </p>
                </Reveal>
            </div>
        </section>
    );
};
