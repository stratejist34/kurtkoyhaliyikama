'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ParallaxProps {
    children: ReactNode;
    speed?: number;
    className?: string;
}

export function Parallax({ children, speed = 0.3, className = '' }: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        let ticking = false;

        function onScroll() {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                if (!node) return;
                const rect = node.getBoundingClientRect();
                const windowH = window.innerHeight;
                const visibleRatio = (windowH - rect.top) / (windowH + rect.height);
                const offset = (visibleRatio - 0.5) * speed * 100;
                node.style.transform = `translateY(${offset}px)`;
                ticking = false;
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, [speed]);

    return (
        <div ref={ref} className={className} style={{ willChange: 'transform' }}>
            {children}
        </div>
    );
}
