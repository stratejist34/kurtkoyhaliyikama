'use client';

import { Clock } from 'lucide-react';

function getSlotMessage(): string {
    const hour = parseInt(
        new Intl.DateTimeFormat('tr-TR', {
            timeZone: 'Europe/Istanbul',
            hour: 'numeric',
            hour12: false,
        }).format(new Date()),
        10
    );

    if (hour >= 0 && hour < 8) return "Bugün planlama 08:00'de açılıyor.";
    if (hour >= 8 && hour < 14) return 'Şu an: Planlama devam ediyor.';
    if (hour >= 14 && hour < 18) return 'Şu an: Son planlama aralıkları.';
    return 'Şu an: Yarın planlaması açık.';
}

export const SlotMessage = ({
    variant = 'light',
    className = '',
}: {
    variant?: 'light' | 'dark';
    className?: string;
}) => {
    const msg = getSlotMessage();

    const base = 'inline-flex items-center gap-2 text-xs font-medium rounded-lg px-3 py-2';
    const styles =
        variant === 'dark'
            ? `${base} bg-white/10 border border-white/20 text-white/80`
            : `${base} bg-brand-navy/6 border border-brand-navy/12 text-brand-navy/65`;

    return (
        <span className={`${styles} ${className}`}>
            <Clock size={11} className="shrink-0 opacity-60" />
            {msg}
        </span>
    );
};
