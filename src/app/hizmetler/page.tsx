import React from 'react';
import { services } from '@/data/services';
import { regions } from '@/data/regions';
import HizmetlerContent from './HizmetlerContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hizmetlerimiz | Kurtköy Halı Yıkama',
    description: 'Halı yıkama, koltuk yıkama, stor perde ve yorgan yıkama hizmetlerimizde profesyonel çözümler. Ücretsiz servis ve %100 hijyen garantisi.',
    alternates: {
        canonical: '/hizmetler',
    },
};

export default function HizmetlerPage() {
    return <HizmetlerContent services={services} regions={regions} />;
}
