import React from 'react';

export const metadata = {
    title: 'Gizlilik Politikası | Kurtköy Halı Yıkama',
    description: 'Kurtköy Halı Yıkama gizlilik politikası — kişisel verilerinizin korunması ve işlenmesi hakkında bilgilendirme.',
};

export default function GizlilikPage() {
    return (
        <main className="min-h-screen bg-white">
            <section className="relative pt-28 page-hero-bg page-hero-cut overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                    <p className="text-brand-sand text-xs uppercase tracking-[0.25em] font-bold mb-4">Yasal</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Gizlilik Politikası</h1>
                </div>
            </section>

            <section className="py-20">
                <div className="max-w-3xl mx-auto px-4">
                    <div className="prose prose-lg prose-brand-navy max-w-none space-y-8">

                        <p className="text-brand-navy/60 text-sm">Son güncelleme: 20 Şubat 2026</p>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">1. Veri Sorumlusu</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Bu web sitesi, <strong>Dervişoğulları Halı Yıkama</strong> (&quot;İşletme&quot;) tarafından işletilmektedir.
                            </p>
                            <ul className="space-y-1 text-brand-navy/70">
                                <li><strong>Adres:</strong> Velibaba Mh. Aydos Cd. No:71, Pendik / İstanbul</li>
                                <li><strong>Telefon:</strong> 0542 402 51 23</li>
                                <li><strong>E-posta:</strong> info@kurtkoyhaliyikama.net</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">2. Toplanan Veriler</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Web sitemizi ziyaret ettiğinizde aşağıdaki bilgiler otomatik olarak veya sizin sağlamanızla toplanabilir:
                            </p>
                            <ul className="space-y-2 text-brand-navy/70 list-disc list-inside">
                                <li>Telefon numarası (arama veya WhatsApp iletişimi sırasında)</li>
                                <li>Ad ve soyad (iletişim sırasında paylaşılması halinde)</li>
                                <li>Adres bilgisi (halı alma-teslim hizmeti için)</li>
                                <li>Halı fotoğrafları (fiyat teklifi amacıyla WhatsApp üzerinden gönderilmesi halinde)</li>
                                <li>IP adresi ve tarayıcı bilgileri (Google Analytics aracılığıyla)</li>
                                <li>Çerez verileri (site deneyimini iyileştirmek amacıyla)</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">3. Verilerin Kullanım Amaçları</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Toplanan kişisel veriler yalnızca aşağıdaki amaçlarla kullanılır:
                            </p>
                            <ul className="space-y-2 text-brand-navy/70 list-disc list-inside">
                                <li>Hizmet talebinizi almak ve size fiyat teklifi sunmak</li>
                                <li>Halı alma ve teslim hizmetini gerçekleştirmek</li>
                                <li>Yıkama sürecine ilişkin bilgilendirme yapmak</li>
                                <li>Hizmet kalitemizi iyileştirmek</li>
                                <li>Yasal yükümlülüklerimizi yerine getirmek</li>
                            </ul>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">4. Verilerin Paylaşımı</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Kişisel verileriniz üçüncü taraflarla <strong>paylaşılmaz, satılmaz veya kiralanmaz</strong>.
                                Yalnızca yasal zorunluluk halinde yetkili kamu kurum ve kuruluşlarıyla paylaşılabilir.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">5. Çerezler (Cookies)</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Web sitemiz, kullanıcı deneyimini iyileştirmek ve site trafiğini analiz etmek amacıyla çerezler kullanmaktadır.
                                Kullandığımız çerezler:
                            </p>
                            <ul className="space-y-2 text-brand-navy/70 list-disc list-inside">
                                <li><strong>Zorunlu çerezler:</strong> Sitenin düzgün çalışması için gereklidir.</li>
                                <li><strong>Analitik çerezler:</strong> Google Analytics aracılığıyla site kullanımını anlamamıza yardımcı olur.</li>
                            </ul>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Tarayıcı ayarlarınızdan çerezleri devre dışı bırakabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">6. Veri Güvenliği</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Kişisel verilerinizin güvenliğini sağlamak için teknik ve idari tedbirler alınmaktadır.
                                Web sitemiz SSL sertifikası ile korunmaktadır.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">7. Haklarınız</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında aşağıdaki haklara sahipsiniz:
                            </p>
                            <ul className="space-y-2 text-brand-navy/70 list-disc list-inside">
                                <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
                                <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
                                <li>Eksik veya yanlış işlenmişse düzeltilmesini isteme</li>
                                <li>Silinmesini veya yok edilmesini isteme</li>
                                <li>İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme</li>
                            </ul>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Bu haklarınızı kullanmak için <strong>info@kurtkoyhaliyikama.net</strong> adresine veya <strong>0542 402 51 23</strong> numarasına başvurabilirsiniz.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold text-brand-navy">8. Değişiklikler</h2>
                            <p className="text-brand-navy/70 leading-relaxed">
                                Bu gizlilik politikası zaman zaman güncellenebilir. Güncellemeler bu sayfada yayınlanır.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
