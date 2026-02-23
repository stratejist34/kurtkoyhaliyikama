import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { getRegionServices } from '@/data/regions';
import { blogPosts } from '@/data/blog-posts';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = 'https://kurtkoyhaliyikama.net';
    const lastModified = new Date();

    // 1. Core Pages
    const staticPages = [
        '',
        '/hizmetler',
        '/blog',
        '/kurumsal',
        '/iletisim',
        '/fiyat-listesi',
        '/kvkk',
        '/gizlilik'
    ].map(route => ({
        url: `${siteUrl}${route}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // 2. Service Detail Pages
    const servicePages = services.map(service => ({
        url: `${siteUrl}/hizmetler/${service.slug}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // 3. Region Pages
    const regionPages = getRegionServices().map(rs => ({
        url: `${siteUrl}/bolge/${rs.slug}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
    }));

    // 4. Blog Posts
    const blogPages = blogPosts.map(post => ({
        url: `${siteUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }));

    return [
        ...staticPages,
        ...servicePages,
        ...regionPages,
        ...blogPages,
    ];
}
