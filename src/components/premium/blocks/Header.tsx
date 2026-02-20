'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/premium/ui/Button';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

const WHATSAPP_URL = 'https://wa.me/905424025123?text=Merhaba%2C%20hal%C4%B1%20y%C4%B1kama%20i%C3%A7in%20fiyat%20almak%20istiyorum.';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Scroll handler for styling
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(() => {
                setIsScrolled(window.scrollY > 20);
                ticking = false;
            });
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Body scroll lock when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Anasayfa', href: '/' },
        { name: 'Hizmetlerimiz', href: '/hizmetler' },
        { name: 'Kurumsal', href: '/kurumsal' },
        { name: 'Blog', href: '/blog' },
        { name: 'Fiyat Listesi', href: '/fiyat-listesi' },
    ];

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 border-b ${isScrolled || isMobileMenuOpen
                    ? 'bg-white/95 backdrop-blur-xl shadow-lg py-3 border-brand-navy/8'
                    : 'bg-white/60 backdrop-blur-xl py-5 border-brand-navy/5'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className={`relative transition-all duration-300 ${isScrolled ? 'w-32 h-9 md:w-40 md:h-10' : 'w-40 h-11 md:w-52 md:h-12'}`}>
                            <Image
                                src="/images/logo-dark.webp"
                                alt="Kurtköy Halı Yıkama"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-[15px] font-semibold tracking-wide transition-colors hover:text-brand-sky ${pathname === link.href ? 'text-brand-sky font-bold' : 'text-brand-navy/80'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Actions & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <Link href="/iletisim" className="hidden lg:flex items-center gap-2 text-brand-navy/80 hover:text-brand-sky scene-transition group">
                            <div className="p-2 rounded-full bg-brand-navy/8 group-hover:bg-brand-sky/15 transition-colors">
                                <Phone size={18} className="group-hover:rotate-12 transition-transform" />
                            </div>
                            <span className="text-sm font-bold">İletişim</span>
                        </Link>

                        <Button
                            size="sm"
                            variant="primary"
                            onClick={() => {
                                trackEvent('whatsapp_yazanlar', { konum: 'header' });
                                window.open(WHATSAPP_URL, '_blank');
                            }}
                            className="gap-2 bg-brand-coral/85 hover:bg-brand-coral text-white border-none hidden xs:flex"
                        >
                            <MessageCircle size={18} />
                            <span className="font-bold">NET FİYAT ALIN</span>
                            {/* <span className="sr-only">Sürpriz maliyet, gizli ücret yok</span> */}
                        </Button>

                        {/* Mobile Menu Toggle — z-[210] to stay above the overlay */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-brand-navy hover:bg-brand-navy/5 rounded-lg transition-colors relative z-[210]"
                            aria-label="Menüyü Aç"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-[200] md:hidden transition-all duration-400 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
            >
                {/* Dark backdrop */}
                <div className="absolute inset-0 bg-gradient-to-b from-brand-navy via-[#1a3a2e] to-[#0f2820]" />
                {/* Subtle texture */}
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

                {/* Close button */}
                <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="absolute top-5 right-5 z-[210] w-11 h-11 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-colors"
                    aria-label="Menüyü Kapat"
                >
                    <X size={22} className="text-white" />
                </button>

                {/* Content */}
                <div className="relative z-10 px-8 pt-20 pb-10 flex flex-col h-full overflow-y-auto">
                    {/* Logo */}
                    <div className="mb-10">
                        <div className="relative w-36 h-9">
                            <Image
                                src="/images/logo-light.webp"
                                alt="Kurtköy Halı Yıkama"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col gap-1 flex-1">
                        {[...navLinks, { name: 'İletişim', href: '/iletisim' }].map((link, idx) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`text-xl font-semibold py-4 border-b border-white/8 transition-all duration-300 ${pathname === link.href
                                    ? 'text-brand-sky pl-3 border-brand-sky/30'
                                    : 'text-white/80 hover:text-white hover:pl-2'
                                    }`}
                                style={{ transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : '0ms' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Bottom CTAs */}
                    <div className="mt-auto pt-8 flex flex-col gap-3">
                        {/* Phone number display */}
                        <a
                            href="tel:05424025123"
                            onClick={() => {
                                trackEvent('telefon_aramasi', { konum: 'mobil_menu' });
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-white/8 backdrop-blur-sm border border-white/10 hover:bg-white/12 transition-colors"
                        >
                            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                                <Phone size={18} className="text-white" />
                            </div>
                            <div>
                                <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.15em]">Telefon</p>
                                <p className="text-white font-bold text-lg">0542 402 51 23</p>
                            </div>
                        </a>

                        {/* WhatsApp CTA */}
                        <button
                            onClick={() => {
                                trackEvent('whatsapp_yazanlar', { konum: 'mobil_menu' });
                                setIsMobileMenuOpen(false);
                                window.open(WHATSAPP_URL, '_blank');
                            }}
                            className="flex items-center justify-between p-4 rounded-2xl bg-brand-coral text-white font-bold text-lg hover:bg-brand-coral/90 transition-colors"
                        >
                            <span>Net Fiyat Alın</span>
                            <MessageCircle size={22} />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
