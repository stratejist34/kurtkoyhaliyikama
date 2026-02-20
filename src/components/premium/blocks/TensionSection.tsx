import Image from 'next/image';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { Reveal } from '@/components/premium/ui/Reveal';
import { Parallax } from '@/components/premium/ui/Parallax';

export const TensionSection = () => {
    return (
        <section className="py-24 bg-white text-brand-navy overflow-hidden border-t border-brand-navy/5">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                <Reveal direction="right" className="lg:w-[65%]">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-coral/10 text-brand-coral text-xs font-bold uppercase tracking-widest mb-6 border border-brand-coral/20">
                        <AlertTriangle size={14} />
                        Gerçeklerle Yüzleşin
                    </div>
                    <h2 className="font-[family-name:var(--font-manrope)] text-4xl md:text-5xl lg:text-7xl font-bold mb-8 leading-[1.05] tracking-tighter">
                        Temiz görünen <br />
                        bir halı, <span className="text-brand-navy/35 italic font-medium">aslında risk altındadır.</span>
                    </h2>
                    <div className="space-y-6 text-brand-navy/70 text-lg md:text-xl leading-relaxed max-w-2xl">
                        <p className="font-medium">
                            Gözle görülen lekeler buzdağının sadece görünen kısmıdır. Halı liflerinin derinliklerinde biriken deri döküntüleri, mite&apos;lar ve bakteriler sağlığınızı tehdit eder.
                        </p>
                        <p className="text-base md:text-lg text-brand-navy/70">
                            Sıradan yıkama yöntemleri kiri yüzeye çeker veya halının dibine hapseder. Bu huzursuzluğu, eşyalarınıza zarar vermeden, özenli ve detaylı bir yıkama ile çözüyoruz — halılar temiz, eviniz mahrem.
                        </p>
                        <div className="flex items-center gap-3 mt-6 p-3 rounded-lg bg-brand-sky/5 border border-brand-sky/10 w-fit">
                            <ShieldCheck className="text-brand-sky w-5 h-5" />
                            <p className="text-xs font-bold text-brand-navy/80">
                                Eşyalarınız ve mahremiyetiniz güvende.
                            </p>
                        </div>
                        <p className="text-sm font-semibold text-brand-coral/80 mt-4 tracking-wide">
                            Ertelemek riski artırır.
                        </p>
                    </div>
                </Reveal>

                <Reveal direction="scale" delay={200} className="lg:w-[35%] relative flex justify-center lg:justify-end">
                    <Parallax speed={0.15}>
                        <div className="w-[320px] h-[320px] md:w-[400px] md:h-[400px] rounded-[28px] bg-brand-navy overflow-hidden border-4 border-white/20 shadow-2xl flex items-center justify-center relative group">
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/bacteria_microscopic_v3.png"
                                    alt="Halı liflerindeki patojenler"
                                    fill
                                    sizes="(min-width: 1024px) 320px, 200px"
                                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity scale-110"
                                />
                                <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_40%,rgba(26,42,108,0.8)_90%)]" />
                            </div>

                            <div className="relative z-10 text-center p-6">
                                <p className="text-white/55 text-xs font-bold uppercase tracking-widest mb-2">Temiz görünen halıda</p>
                                <div className="text-2xl md:text-3xl font-black text-white tracking-tight">1M+ bakteri</div>
                                <p className="text-brand-sand text-[10px] font-semibold mt-1 uppercase tracking-widest">m² başına</p>
                            </div>
                        </div>
                    </Parallax>

                    <Reveal direction="up" delay={500} className="absolute -bottom-4 -left-6 z-20">
                        <div className="bg-white rounded-[20px] shadow-[0_4px_16px_rgba(0,0,0,0.06),0_1px_4px_rgba(0,0,0,0.04)] px-4 py-3 border border-brand-navy/8">
                            <p className="text-brand-navy font-black text-sm">Kökten temizlik.</p>
                            <p className="text-brand-navy/50 text-[11px] mt-0.5 font-medium">Yüzey değil, lif dibi.</p>
                        </div>
                    </Reveal>
                </Reveal>
            </div>
        </section>
    );
};
