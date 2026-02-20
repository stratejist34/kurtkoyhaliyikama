'use client';

import { useScrollReveal, useStaggerReveal } from '@/hooks/useScrollReveal';

type Direction = 'up' | 'left' | 'right' | 'scale' | 'fade';

const classMap: Record<Direction, string> = {
    up: 'reveal-up',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
    fade: 'reveal',
};

interface RevealProps {
    children: React.ReactNode;
    direction?: Direction;
    delay?: number;
    className?: string;
    threshold?: number;
}

export function Reveal({
    children,
    direction = 'up',
    delay = 0,
    className = '',
    threshold,
}: RevealProps) {
    const ref = useScrollReveal<HTMLDivElement>({ threshold });

    return (
        <div
            ref={ref}
            className={`${classMap[direction]} ${className}`}
            style={delay ? { animationDelay: `${delay}ms` } : undefined}
        >
            {children}
        </div>
    );
}

interface StaggerProps {
    children: React.ReactNode;
    className?: string;
}

export function Stagger({ children, className = '' }: StaggerProps) {
    const ref = useStaggerReveal<HTMLDivElement>();

    return (
        <div ref={ref} className={`stagger-children ${className}`}>
            {children}
        </div>
    );
}
