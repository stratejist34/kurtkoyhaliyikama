import React from 'react';
import { Hero } from '@/components/premium/blocks/Hero';
import { CinematicServices } from '@/components/premium/blocks/CinematicServices';
import { ProcessSteps } from '@/components/premium/blocks/ProcessSteps';
import { InstantQuote } from '@/components/premium/blocks/InstantQuote';
import { FaqSection } from '@/components/premium/blocks/FaqSection';
import { CTAInvite } from '@/components/premium/blocks/CTAInvite';
import { StickySceneEntry } from '@/components/premium/blocks/StickySceneEntry';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1 — Hook: İlk izlenim + WA CTA */}
      <Hero />
      {/* 2 — Hizmet keşfi */}
      <CinematicServices />
      {/* 3 — Süreç: Kontrol hissi ver */}
      <ProcessSteps />
      {/* 4 — Fiyat + CTA: Güven sonrası dönüşüm */}
      <InstantQuote />
      {/* 5 — İtiraz kırma + FAQ Schema */}
      <FaqSection />
      {/* 6 — Son dönüşüm CTA */}
      <CTAInvite />
      <StickySceneEntry />
    </main>
  );
}
