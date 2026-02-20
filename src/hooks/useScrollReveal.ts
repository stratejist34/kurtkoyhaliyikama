'use client';

import { useEffect, useRef, RefObject } from 'react';

interface ScrollRevealOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
): RefObject<T | null> {
    const { threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = options;
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            node.classList.add('revealed');
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.classList.add('revealed');
                    if (once) observer.unobserve(node);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return ref;
}

export function useStaggerReveal<T extends HTMLElement>(
    options: ScrollRevealOptions = {}
): RefObject<T | null> {
    const { threshold = 0.1, rootMargin = '0px 0px -40px 0px', once = true } = options;
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) {
            node.classList.add('revealed');
            return;
        }

        const children = Array.from(node.children) as HTMLElement[];
        children.forEach((child, i) => {
            child.style.setProperty('--stagger-index', String(i));
        });

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    node.classList.add('revealed');
                    if (once) observer.unobserve(node);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return ref;
}
