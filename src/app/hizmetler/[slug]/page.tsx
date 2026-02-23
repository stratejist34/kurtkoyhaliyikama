import React from 'react';
import { services } from '@/data/services';
import { notFound } from 'next/navigation';
import ServiceDetailContent from './ServiceDetailContent';
import { Metadata } from 'next';

type Props = {
    params: Promise<{ slug: string }>;
};

const siteUrl = "https://kurtkoyhaliyikama.net";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) return {};

    return {
        title: `${service.title} | Kurtköy Halı Yıkama`,
        description: `${service.shortDescription} Profesyonel ekip, %100 hijyen garantisi ve ücretsiz servis. Hemen fiyat alın.`,
        alternates: {
            canonical: `/hizmetler/${slug}`,
        },
        openGraph: {
            title: `${service.title} | Kurtköy Halı Yıkama`,
            description: service.shortDescription,
            url: `${siteUrl}/hizmetler/${slug}`,
            images: [
                {
                    url: service.image,
                    width: 1200,
                    height: 630,
                    alt: service.title,
                },
            ],
        },
    };
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.title,
        "description": service.fullDescription,
        "provider": {
            "@type": "LocalBusiness",
            "name": "Kurtköy Halı Yıkama",
            "telephone": "+905424025123",
            "priceRange": "$$",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Velibaba Mh. Aydos Cd. No:71",
                "addressLocality": "Pendik",
                "addressRegion": "İstanbul",
                "addressCountry": "TR"
            }
        },
        "areaServed": [
            "Kurtköy", "Pendik", "Velibaba", "Kaynarca", "Tuzla"
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "127",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServiceDetailContent service={service} />
        </>
    );
}
