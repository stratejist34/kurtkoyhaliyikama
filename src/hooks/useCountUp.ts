'use client';

import { useEffect, useRef, useCallback } from 'react';

interface CountUpOptions {
    end: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export function useCountUp({ end, duration = 1500, prefix = '', suffix = '', decimals = 0 }: CountUpOptions) {
    const spanRef = useRef<HTMLSpanElement>(null);
    const hasRun = useRef(false);

    const format = useCallback(
        (val: number) =>
            `${prefix}${val.toLocaleString('tr-TR', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
            })}${suffix}`,
        [prefix, suffix, decimals]
    );

    useEffect(() => {
        const node = spanRef.current;
        if (!node || hasRun.current) return;

        node.textContent = format(0);

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            hasRun.current = true;
            node.textContent = format(end);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasRun.current) {
                    hasRun.current = true;
                    observer.unobserve(node);
                    animate();
                }
            },
            { threshold: 0.5 }
        );

        function animate() {
            const startTime = performance.now();

            function tick(now: number) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                const current = eased * end;

                if (node) node.textContent = format(current);

                if (progress < 1) {
                    requestAnimationFrame(tick);
                }
            }

            requestAnimationFrame(tick);
        }

        observer.observe(node);
        return () => observer.disconnect();
    }, [end, duration, format]);

    return spanRef;
}
