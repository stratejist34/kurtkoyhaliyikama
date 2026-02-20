const items = [
    'KURTKÖY',
    'PENDİK',
    'TUZLA',
    'VELİBABA',
    'KAYNARCA',
    'ÇINARDERE',
    'UYDUKENT',
    'TEPEÖREN',
    'AKFIRAT',
    'YENİŞEHİR',
    'ESENYALI',
    'GÜZELYALI',
];

export const MarqueeBand = () => (
    <section aria-label="Hizmet bölgeleri" className="relative overflow-hidden border-y border-brand-navy/20 marquee-shell py-4 select-none">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-navy/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-brand-pine/70 to-transparent z-10" />

        <div className="marquee-track flex min-w-[200%] w-max items-center gap-8 whitespace-nowrap">
            {[...items, ...items].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-[11px] md:text-xs font-semibold text-white/88 tracking-[0.2em]">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-sky" />
                    {item}
                </span>
            ))}
        </div>
    </section>
);
