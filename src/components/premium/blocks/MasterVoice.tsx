import React from 'react';
import { Reveal } from '@/components/premium/ui/Reveal';

export const MasterVoice = () => {
    return (
        <section className="py-20 bg-white flex items-center justify-center relative overflow-hidden">
            {/* Subtle diagonal texture */}
            <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)' }} />
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-brand-sand/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-brand-sand/15 rounded-full blur-[80px] pointer-events-none" />
            <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
                <h2 className="sr-only">Usta Görüşü</h2>
                <Reveal direction="up">
                    <div className="flex flex-col items-center gap-5">
                        <p className="font-[family-name:var(--font-manrope)] text-2xl md:text-3xl text-brand-navy font-semibold leading-snug">
                            &ldquo;Halıya dokunduğumuzda neye ihtiyacı olduğunu anlarız. Gerisi titizlik.&rdquo;
                        </p>
                        <div className="flex flex-col items-center gap-2 border-t border-brand-navy/10 pt-4 max-w-sm">
                            <p className="text-brand-navy/50 text-sm font-normal">
                                Bu işi doğru yapmak daha pahalıdır. Yanlış yapmak ise daha maliyetli.
                            </p>
                            <p className="text-brand-sky text-xs font-semibold tracking-widest uppercase">
                                3.000+ halı · aynı protokol
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
