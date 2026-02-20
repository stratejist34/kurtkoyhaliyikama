import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
    title: 'Blog | Kurtköy Halı Yıkama',
    description: 'Halı yıkama, koltuk yıkama, perde yıkama hakkında bilgi ve ipuçları. Kurtköy, Pendik ve çevre bölgelerden halı yıkama rehberleri.',
    keywords: 'halı yıkama blog, kurtköy halı yıkama, pendik halı yıkama, halı temizliği ipuçları',
};

export default function BlogPage() {
    const locationPosts = blogPosts.filter(p => p.category === 'hali-yikama');
    const servicePosts = blogPosts.filter(p => p.category === 'hizmetlerimiz');

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <p className="text-brand-sand text-sm uppercase tracking-widest font-semibold mb-4">Bilgi &amp; Rehber</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Blog</h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto">
                        Hizmet bölgelerimiz ve sunduğumuz hizmetler hakkında detaylı bilgiler.
                    </p>
                </div>
            </section>

            {/* Bölge Yazıları */}
            <section className="py-16 border-b border-brand-navy/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-10">
                        <span className="text-brand-sky text-xs uppercase tracking-widest font-semibold">Hizmet Bölgelerimiz</span>
                        <h2 className="text-3xl font-bold text-brand-navy mt-2">Bölge Rehberleri</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {locationPosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Hizmet Yazıları */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="mb-10">
                        <span className="text-brand-sky text-xs uppercase tracking-widest font-semibold">Detaylı Bilgi</span>
                        <h2 className="text-3xl font-bold text-brand-navy mt-2">Hizmetlerimiz</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {servicePosts.map((post) => (
                            <BlogCard key={post.slug} post={post} />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

function BlogCard({ post }: { post: typeof blogPosts[0] }) {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="bg-white rounded-xl overflow-hidden border border-brand-navy/5 hover:shadow-xl hover:shadow-brand-navy/5 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-52 overflow-hidden bg-brand-mist">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                        <span className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-semibold px-3 py-1.5 rounded-full">
                            {post.categoryLabel}
                        </span>
                    </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-4 text-xs text-brand-navy/40 mb-3">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" />
                            {post.readTime} dk okuma
                        </span>
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-coral transition-colors mb-2">
                        {post.title}
                    </h3>
                    <p className="text-brand-navy/50 text-sm leading-relaxed flex-1">
                        {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 text-brand-coral font-bold text-sm mt-4 group-hover:gap-3 transition-all">
                        Devamını Oku
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </article>
        </Link>
    );
}
