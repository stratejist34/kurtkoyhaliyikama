import React from 'react';
import { Hero } from '@/components/premium/blocks/Hero';
import { CinematicServices } from '@/components/premium/blocks/CinematicServices';
import { TensionSection } from '@/components/premium/blocks/TensionSection';
import { ProcessSteps } from '@/components/premium/blocks/ProcessSteps';
import { MarqueeBand } from '@/components/premium/blocks/MarqueeBand';
import { InstantQuote } from '@/components/premium/blocks/InstantQuote';
import { MainEvidence } from '@/components/premium/blocks/MainEvidence';
import { MasterVoice } from '@/components/premium/blocks/MasterVoice';
import { CTAInvite } from '@/components/premium/blocks/CTAInvite';
import { StickySceneEntry } from '@/components/premium/blocks/StickySceneEntry';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1 — Hook: İlk izlenim + güvenli karar */}
      <Hero />
      {/* 2 — Yetkinlik: Her dokuma özenle işlenir */}
      <CinematicServices />
      {/* 3 — Korku: Ertelemek riski artırır */}
      <TensionSection />
      {/* 4 — Süreç: Kontrol hissi ver */}
      <ProcessSteps />
      {/* 4b — Hizmet bölgeleri akan şerit */}
      <MarqueeBand />
      {/* 5 — Fiyat: Güven sonrası dönüşüm */}
      <InstantQuote />
      {/* 6 — Kanıt: Durulama suyu berraklığı */}
      <MainEvidence />
      {/* 7 — Duygusal kapanış */}
      <MasterVoice />
      {/* 8 — Son dönüşüm */}
      <CTAInvite />
      <StickySceneEntry />
    </main>
  );
}
