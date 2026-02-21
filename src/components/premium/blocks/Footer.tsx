import React from 'react';
import Link from 'next/link';
import { Phone, MapPin, Mail, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import { regions } from '@/data/regions';

export const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#2D3F36] to-brand-navy text-white pt-20 pb-10 border-t border-white/8">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="mb-8">
                        <Link href="/" className="inline-block relative w-56 h-16">
                            <Image
                                src="/images/logo-light.webp"
                                alt="Kurtköy Halı Yıkama"
                                fill
                                className="object-contain"
                            />
                        </Link>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">
                        Halı yıkamayı bir temizlik değil, bir sağlık kararı olarak görüyoruz.
                        Cerrahi titizlik ve teknik hassasiyetle evinize hijyen getiriyoruz.
                    </p>
                    <p className="text-brand-sand font-medium text-sm border-l-2 border-brand-coral pl-3">
                        Kurtköy’de hijyen konusunda taviz vermeyen birkaç firmadan biriyiz.
                    </p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-coral transition-colors" aria-label="Instagram sayfamız">
                            <Instagram size={20} />
                        </a>
                        <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-brand-coral transition-colors" aria-label="Facebook sayfamız">
                            <Facebook size={20} />
                        </a>
                    </div>
                </div>

                {/* Services Column */}
                <div>
                    <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-white">Hizmetlerimiz</h3>
                    <ul className="space-y-4 text-sm text-white/70">
                        <li><Link href="/hizmetler/hali-yikama" className="py-2 hover:text-white transition-colors block">Halı Yıkama</Link></li>
                        <li><Link href="/hizmetler/koltuk-yikama" className="py-2 hover:text-white transition-colors block">Koltuk Yıkama</Link></li>
                        <li><Link href="/hizmetler/stor-perde-yikama" className="py-2 hover:text-white transition-colors block">Stor Perde Yıkama</Link></li>
                        <li><Link href="/hizmetler/yorgan-battaniye-yikama" className="py-2 hover:text-white transition-colors block">Yorgan & Battaniye Yıkama</Link></li>
                    </ul>
                </div>

                {/* Regions Column */}
                <div>
                    <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-white">Hizmet Bölgeleri</h3>
                    <ul className="grid grid-cols-2 gap-y-3 gap-x-4 text-[13px] text-white/45">
                        {regions.map((region) => (
                            <li key={region.slug}>
                                <Link
                                    href={`/bolge/${region.slug}-hali-yikama`}
                                    className="hover:text-white transition-colors"
                                >
                                    {region.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h3 className="font-bold mb-6 uppercase tracking-widest text-xs text-white">İletişim</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-brand-coral shrink-0 mt-1" />
                            <a
                                href="https://www.google.com/maps/dir//Dervi%C5%9Fo%C4%9Fullar%C4%B1+Hal%C4%B1+Y%C4%B1kama+Velibaba+Aydos+Cd.+No:71%2FA+34896+Pendik%2F%C4%B0stanbul/@40.9165692,29.2536815,14z/data=!4m5!4m4!1m0!1m2!1m1!1s0x14cadb2049c0df8b:0xe583c25c2a9c6814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-white/50 hover:text-white transition-colors"
                            >
                                Velibaba Mh. Aydos Cd. No:71 <br />
                                Pendik / İstanbul
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={20} className="text-brand-coral shrink-0" />
                            <a href="tel:+905424025123" className="text-base font-black text-white hover:text-brand-sky transition-colors tracking-wide">
                                0542 402 51 23
                            </a>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-brand-coral shrink-0" />
                            <a href="mailto:info@kurtkoyhaliyikama.net" className="text-sm text-white/50 hover:text-white transition-colors">
                                info@kurtkoyhaliyikama.net
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col gap-1">

                    <p className="text-[10px] text-white/25 uppercase tracking-[0.2em]">
                        © 2026 Kurtköy Profesyonel Halı Yıkama - Tüm Hakları Saklıdır.
                    </p>
                </div>
                <div className="flex gap-6 text-[11px] text-white/40 uppercase tracking-widest">
                    <Link href="/fiyat-listesi" className="py-2 hover:text-white transition-colors">Fiyat Listesi</Link>
                    <Link href="/blog" className="py-2 hover:text-white transition-colors">Blog</Link>
                    <Link href="/gizlilik" className="py-2 hover:text-white transition-colors">Gizlilik Politikası</Link>
                    <Link href="/kvkk" className="py-2 hover:text-white transition-colors">KVKK</Link>
                </div>
            </div>

            {/* Designer Credit */}
            <div className="max-w-7xl mx-auto px-4 pb-8 flex justify-center md:justify-end">
                <a
                    href="https://wa.me/905426084887?text=Merhaba%2C%20kurtkoyhaliyikama.net%20sitesini%20inceledim%20ve%20benzer%20bir%20premium%20dijital%20yap%C4%B1%20kurmak%20istiyorum."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-white/40 uppercase tracking-widest hover:text-white/80 transition-colors py-2"
                >
                    Dijital Mimari & Strateji: Emrah Gümüşsoy
                </a>
            </div>
        </footer>
    );
};
