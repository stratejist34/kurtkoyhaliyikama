import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { blogPosts, getBlogPost } from '@/data/blog-posts';

type PageProps = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) return { title: 'Yazı Bulunamadı' };

    return {
        title: `${post.title} | Kurtköy Halı Yıkama Blog`,
        description: post.excerpt,
    };
}

const WHATSAPP_URL = 'https://wa.me/905424025123?text=Merhaba%2C%20bilgi%20almak%20istiyorum.';

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const post = getBlogPost(slug);

    if (!post) notFound();

    const relatedPosts = blogPosts
        .filter(p => p.slug !== post.slug && p.category === post.category)
        .slice(0, 3);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-6 transition-colors">
                        <ArrowLeft size={16} />
                        Blog
                    </Link>
                    <span className="inline-block bg-brand-sky/15 text-brand-sky text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
                        {post.categoryLabel}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-4 text-sm text-white/40">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.date).toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime} dk okuma
                        </span>
                    </div>
                </div>
            </section>

            {/* Feature Image */}
            <div className="relative -mt-1">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-2xl shadow-brand-navy/10 -mt-2">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            priority
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                </div>
            </div>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="blog-content">
                        <BlogContent content={post.content} />
                    </div>

                    {/* CTA Card */}
                    <div className="mt-12 bg-brand-mist rounded-xl p-8 border border-brand-navy/5">
                        <h3 className="text-xl font-bold text-brand-navy mb-2">Hemen fiyat alın</h3>
                        <p className="text-brand-navy/50 text-sm mb-6">
                            Halınızın fotoğrafını gönderin, dakikalar içinde net fiyat ve teslim süresi bilgisi verelim.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-coral text-white font-bold rounded-sm hover:bg-brand-coral/90 transition-all text-sm"
                            >
                                <MessageCircle size={18} />
                                WhatsApp&apos;tan Fiyat Alın
                            </a>
                            <a
                                href="tel:+905424025123"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-brand-navy/15 text-brand-navy font-bold rounded-sm hover:border-brand-navy/30 transition-all text-sm"
                            >
                                <Phone size={18} />
                                0542 402 51 23
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-12 bg-brand-mist border-t border-brand-navy/5">
                    <div className="max-w-7xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-brand-navy mb-8">İlgili Yazılar</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {relatedPosts.map((related) => (
                                <Link href={`/blog/${related.slug}`} key={related.slug} className="group">
                                    <article className="bg-white rounded-xl overflow-hidden border border-brand-navy/5 hover:shadow-lg transition-all h-full flex flex-col">
                                        <div className="relative h-40 overflow-hidden">
                                            <Image
                                                src={related.image}
                                                alt={related.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 100vw, 33vw"
                                            />
                                        </div>
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-coral transition-colors mb-2">
                                                {related.title}
                                            </h3>
                                            <p className="text-brand-navy/50 text-sm flex-1 line-clamp-2">{related.excerpt}</p>
                                            <span className="inline-flex items-center gap-1.5 text-brand-coral font-semibold text-sm mt-3 group-hover:gap-2.5 transition-all">
                                                Oku <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    );
}

function renderInlineMarkdown(text: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    const regex = /\*\*(.+?)\*\*/g;
    let lastIndex = 0;
    let match;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        parts.push(<strong key={match.index} className="text-brand-navy font-bold">{match[1]}</strong>);
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }

    return parts;
}

function BlogContent({ content }: { content: string }) {
    const paragraphs = content.split('\n\n');

    return (
        <>
            {paragraphs.map((para, i) => {
                const trimmed = para.trim();
                if (!trimmed) return null;

                if (trimmed.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold text-brand-navy mt-10 mb-4">{trimmed.replace('## ', '')}</h2>;
                }
                if (trimmed.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-bold text-brand-navy mt-8 mb-3">{trimmed.replace('### ', '')}</h3>;
                }
                if (trimmed.startsWith('- ') || trimmed.startsWith('1. ')) {
                    const items = trimmed.split('\n');
                    const isOrdered = trimmed.startsWith('1. ');

                    const listItems = items.map((item, j) => {
                        const cleaned = item.replace(/^[-]\s+/, '').replace(/^\d+\.\s+/, '');
                        return <li key={j} className="text-brand-navy/70 leading-relaxed">{renderInlineMarkdown(cleaned)}</li>;
                    });

                    return isOrdered
                        ? <ol key={i} className="list-decimal list-inside space-y-2 my-4 pl-2">{listItems}</ol>
                        : <ul key={i} className="list-disc list-inside space-y-2 my-4 pl-2">{listItems}</ul>;
                }

                return <p key={i} className="text-brand-navy/70 leading-relaxed my-4 text-[17px]">{renderInlineMarkdown(trimmed)}</p>;
            })}
        </>
    );
}
