export interface ServiceFaq {
    question: string;
    answer: string;
}

export interface Service {
    id: string;
    slug: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    badge: string;
    deliveryTime: string;
    features: string[];
    process?: {
        title: string;
        description: string;
    }[];
    whatsappMessage: string;
    pricingRange?: { min: number; max: number; unit: string };
    faqTemplates?: { question: string; answer: string }[];
    whyDifferent?: string;
}

/** Replaces {region} with actual region name in FAQ templates */
export function getServiceFaqs(service: Service, regionName: string): ServiceFaq[] {
    if (!service.faqTemplates) return [];
    return service.faqTemplates.map(faq => ({
        question: faq.question.replace(/{region}/g, regionName),
        answer: faq.answer.replace(/{region}/g, regionName),
    }));
}

export const services: Service[] = [
    {
        id: 'hali-yikama',
        slug: 'hali-yikama',
        title: 'Halı Yıkama',
        shortDescription: 'Kapalı alanda kurutma, bitkisel şampuan, 3–5 günde teslim.',
        fullDescription: 'Halılarınız adresinizden ücretsiz olarak alınır ve tesisimize getirilir. Vibrasyonlu toz alma ile lif derinliklerindeki kum, toz ve yabancı maddeler ayrıştırılır. Ardından %100 bitkisel şampuanlarla tam otomatik bant sisteminde çift yönlü fırçalama uygulanır. Santrifüj ile fazla su uzaklaştırılır, kapalı alanda nem çekme makineleriyle kurutma sağlanır. Hav alma ve kalite kontrol sonrasında halılarınız hijyenik şekilde paketlenip adresinize teslim edilir.',
        image: '/images/hali-yikama-detay.avif',
        badge: 'Ücretsiz Alım-Teslim',
        deliveryTime: '3–5 Günde Teslim',
        features: [
            '%100 Bitkisel Şampuanlar',
            'Tam Otomatik Bant Sistemi',
            'Kapalı Alanda Kurutma',
            'Ücretsiz Alım & Teslim'
        ],
        process: [
            {
                title: 'Toz Alma',
                description: 'Halılarınız toz alma makinesinden geçirilerek lif derinliklerindeki kum, toz, kıl ve yabancı maddelerden arındırılır.'
            },
            {
                title: 'Yıkama',
                description: '%100 bitkisel halı şampuanı ile tam otomatik bant sisteminde çift yönlü fırçalarla ön ve arka yüzeyinden temizlenir.'
            },
            {
                title: 'Santrifüj',
                description: 'Halının cinsine göre uygun devirde sıkılarak üzerindeki fazla suyun %95 oranında uzaklaştırılması sağlanır.'
            },
            {
                title: 'Kurutma',
                description: 'Kapalı alanda nem çekme makineleriyle kurutulur. Sokak tozu ve egzoz dumanından uzakta hijyenik ortam.'
            },
            {
                title: 'Hav Alma & Kalite Kontrol',
                description: 'Hav alma makinesinde havı alınıp yatımına taranarak son kalite kontrolden geçirilir.'
            },
            {
                title: 'Paketleme & Teslim',
                description: 'Hijyenik şekilde paketlenen halılarınız ücretsiz servisimizle adresinize teslim edilir.'
            }
        ],
        whatsappMessage: 'Merhaba, halılarım için fiyat ve en yakın alım günü bilgisini alabilir miyim?',
        pricingRange: { min: 450, max: 600, unit: '6m²' },
        whyDifferent: 'Sadece yüzeysel bir yıkama yapmıyoruz. {region} bölgesinden alınan halılarınız tesisimize geldiğinde önce kapalı odalarda tozdan arındırılır. Ardından %100 bitkisel enzim bazlı şampuanlarla, halının dokusuna zarar vermeden derinlemesine fırçalanır. Kapalı ve nem kontrollü odalarda kurutularak, egzoz ve dış ortam kirlerinden korunur. Sonuç: Evinize gerçek hijyen ve ferahlık gelir.',
        faqTemplates: [
            {
                question: '{region} bölgesinden halı alımı ücretsiz mi?',
                answer: 'Evet, {region} ve çevresindeki tüm mahallelerden halı alım ve teslimat hizmetimiz tamamen ücretsizdir. Fiyatlarımıza servis ücreti dahildir.'
            },
            {
                question: 'Halılarım kaç günde teslim edilir?',
                answer: 'Normal hava şartlarında {region} bölgesinden alınan halılarınız 3 ila 5 gün içerisinde yıkanıp, kapalı kurutma odalarımızda tamamen kurutulmuş olarak teslim edilir.'
            },
            {
                question: 'Hangi şampuanları kullanıyorsunuz?',
                answer: 'İnsan ve evcil hayvan sağlığına zararı olmayan, %100 bitkisel ve enzim bazlı profesyonel halı yıkama şampuanları kullanıyoruz. Ağartıcı veya zararlı kimyasallar kesinlikle kullanılmaz.'
            },
            {
                question: 'Halılarım zarar görür mü?',
                answer: 'Hayır. Halılarınız cinsine (makine, el dokuma, ipek vb.) göre ayrılır ve her halı türüne özel fırça baskısı ve devir hızı kullanılarak yıkanır.'
            },
            {
                question: 'Ödemeyi nasıl yapabilirim?',
                answer: 'Ödemenizi halılarınız temizlenip {region} adresinize teslim edildiğinde, kapıda nakit veya kredi kartı/havale ile yapabilirsiniz.'
            }
        ]
    },
    {
        id: 'koltuk-yikama',
        slug: 'koltuk-yikama',
        title: 'Koltuk Yıkama',
        shortDescription: 'Yerinde uygulama, köpüklü teknoloji, 4 saatte kullanıma hazır.',
        fullDescription: 'Koltuk yıkama hizmetimiz adresinizde, yerinde uygulanır. Köpüklü yıkama teknolojimiz koltuk kumaşlarına ve yüzeylerine zarar vermeden lekelere derinden müdahale eder. İşlem sonrası koltuklarınız 4 saat içinde kuruyarak kullanıma hazır hale gelir. Bitkisel şampuanlar kullanıldığı için çocuklar ve evcil hayvanlar için güvenlidir.',
        image: '/images/makine-ile-koltuk-yikama.avif',
        badge: 'Yerinde Hizmet',
        deliveryTime: '4 Saatte Hazır',
        features: [
            '%100 Bitkisel Şampuanlar',
            'Köpüklü Yıkama Teknolojisi',
            'Deformasyon Riski Yok',
            '4 Saatte Kuruma'
        ],
        process: [
            {
                title: 'Ön İnceleme',
                description: 'Koltuk kumaşının türü ve leke durumu yerinde incelenir, uygun yıkama programı belirlenir.'
            },
            {
                title: 'Toz ve Kir Temizliği',
                description: 'Güçlü emişli vakum ile koltuk yüzeyindeki toz, kıl ve kuru kirler alınır.'
            },
            {
                title: 'Köpüklü Yıkama',
                description: 'Bitkisel şampuan ile köpüklü yıkama uygulanır. Kumaşa zarar vermeden derin temizlik sağlanır.'
            },
            {
                title: 'Leke Müdahalesi',
                description: 'İnatçı lekelere özel solüsyonlarla ayrıca müdahale edilir.'
            },
            {
                title: 'Kuruma',
                description: 'İşlem sonrası koltuklarınız yaklaşık 4 saat içinde kuruyarak kullanıma hazır hale gelir.'
            }
        ],
        whatsappMessage: 'Merhaba, koltuklarım için yerinde yıkama fiyatı öğrenebilir miyim? Fotoğraf gönderebilirim.',
        pricingRange: { min: 800, max: 1200, unit: 'Standart Takım' },
        whyDifferent: '{region} bölgesindeki adresinize tam donanımlı araçlarımızla geliyoruz. Koltuklarınızı ıslatıp çürütmüyoruz; profesyonel köpüklü yıkama teknolojisi ile suyun süngere fazlasıyla inmesini engelliyoruz. Bu sayede hem kumaş yapısı korunuyor hem de koltuklarınız sadece 4-6 saat içinde tamamen kuruyarak kullanıma hazır hale geliyor.',
        faqTemplates: [
            {
                question: '{region} bölgesine koltuk yıkama servisiniz var mı?',
                answer: 'Evet, {region} bölgesindeki tüm adreslere yerinde koltuk yıkama hizmetimiz mevcuttur. Randevu saatinde adresinizde oluyoruz.'
            },
            {
                question: 'Koltuk yıkama işlemi ne kadar sürer?',
                answer: 'Standart bir koltuk takımının yıkanması kir durumuna bağlı olarak yaklaşık 1.5 - 2 saat sürmektedir. İşlem evinizde/iş yerinizde yapılır.'
            },
            {
                question: 'Koltuklar yıkandıktan kaç saat sonra kurur?',
                answer: 'Köpüklü sistem ve güçlü vakumlama sayesinde koltuklarınız oda sıcaklığında 4 ila 6 saat içerisinde tamamen kurumaktadır.'
            },
            {
                question: 'Lekeler kesin olarak çıkar mı?',
                answer: 'Koltuk kumaşınıza zarar vermeyecek sınırlar içerisindeki tüm inatçı lekelere (çay, kahve, tükenmez kalem vb.) özel solüsyonlarla müdahale ediyoruz. Çoğu leke başarıyla çıkarılmaktadır.'
            },
            {
                question: 'Hangi koltuk kumaşlarını yıkıyorsunuz?',
                answer: 'Tay tüyü, keten, pamuklu, nubuk ve şönil dahil değişen tüm koltuk kumaşı türlerine uygun yıkama programlarımız vardır.'
            }
        ]
    },
    {
        id: 'stor-perde-yikama',
        slug: 'stor-perde-yikama',
        title: 'Stor Perde Yıkama',
        shortDescription: 'Mekanizmaya zarar vermeden söküm, hassas yıkama, aynı gün montaj.',
        fullDescription: 'Stor perde ve zebra perde yıkama işlemi dikkat ve uzmanlık gerektirir. Perdeleriniz mekanizmalarına zarar verilmeden dikkatli bir şekilde söküldükten sonra özel makinelerle temizlenir. İnsan sağlığına zararsız deterjanlarla yıkanan perdeleriniz aynı gün yerine monte edilir.',
        image: '/wp-content/uploads/2020/12/kurtkoy-stor-perde-yikama.jpg',
        badge: 'Aynı Gün Montaj',
        deliveryTime: 'Aynı Gün Montaj',
        features: [
            'Mekanizma Koruması',
            'Zebra Perde Uyumu',
            'Son Teknoloji Makineler',
            'İnsan Sağlığına Zararsız Deterjanlar'
        ],
        process: [
            {
                title: 'Söküm',
                description: 'Perdeleriniz mekanizmalarına zarar verilmeden dikkatli bir şekilde yerinden çıkartılır.'
            },
            {
                title: 'Hassas Yıkama',
                description: 'Özel makinelerde, perde kumaşına uygun programda insan sağlığına zararsız deterjanlarla yıkanır.'
            },
            {
                title: 'Kurutma',
                description: 'Perdelerin şeklini bozmadan kontrollü ortamda kurutulur.'
            },
            {
                title: 'Montaj',
                description: 'Temizlenen perdeleriniz aynı gün içinde yerine monte edilir.'
            }
        ],
        whatsappMessage: 'Merhaba, stor perdelerimin söküm-takım dahil yıkama fiyatını öğrenebilir miyim?',
        pricingRange: { min: 100, max: 150, unit: 'm²' },
        whyDifferent: 'Stor ve zebra perdelerin sökülüp takılması hassasiyet gerektirir. {region} adresinize gelen ekibimiz perdelerinizi zarar vermeden söker, tesisimizde ultrasonik temizlik standartlarında yıkar ve aynı gün içinde getirip montajını yapar. Kırışma, mekanizma bozulması veya potluk riski olmadan perdeleriniz ilk günkü canlılığına kavuşur.',
        faqTemplates: [
            {
                question: '{region} adresinden perdeleri siz mi söküyorsunuz?',
                answer: 'Evet, {region} bölgesindeki adresinizden perdelerinizi ücretsiz servisimizle uzman ekiplerimiz söküyor, yıkama sonrası tekrar montajını yapıp teslim ediyoruz.'
            },
            {
                question: 'Zebra ve stor perdelerde kırışma olur mu?',
                answer: 'Hayır, perdeleriniz formunu koruyacak özel sistemlerle düz bir şekilde yıkanır ve özel kurutma odalarında asılı şekilde kurutulur.'
            },
            {
                question: 'Stor perde yıkama kaç gün sürer?',
                answer: 'Stor ve zebra perdelerde genellikle aynı gün veya ertesi gün ekspres teslimat ve montaj yapabiliyoruz.'
            },
            {
                question: 'Mekanizmalar suda bozulur mu?',
                answer: 'Perdelerinizin tamamen kumaş kısımları yıkanmaktadır. Alüminyum kasa ve plastik zincir mekanizmaları özenle silinerek temizlenir, suda bekletilmez.'
            },
            {
                question: 'Fiyatlandırma nasıl yapılıyor?',
                answer: 'Stor perdelerinizde en az 3m² fiyatlandırılır. Eni ve boyu çarpılarak metrekare hesabı çıkarılır ve sürpriz bir ücret çıkmaz.'
            }
        ]
    },
    {
        id: 'yorgan-battaniye-yikama',
        slug: 'yorgan-battaniye-yikama',
        title: 'Yorgan & Battaniye Yıkama',
        shortDescription: 'Antialerjik yıkama, kapalı alanda kurutma, 3–5 günde teslim.',
        fullDescription: 'Yorgan ve battaniyeleriniz adresinizden alınarak tesisimizde antialerjik deterjanlarla yıkanır. Toz akarları, ter kalıntıları ve alerjenlere karşı derinlemesine temizlik uygulanır. Kapalı alanda kurutma ile nem ve koku bırakmadan hijyenik şekilde paketlenir ve 3–5 gün içinde adresinize teslim edilir.',
        image: '/images/yorgan-kurutma.avif',
        badge: 'Antialerjik',
        deliveryTime: '3–5 Günde Teslim',
        features: [
            'Antialerjik Deterjanlar',
            'Toz Akarı Temizliği',
            'Kapalı Alanda Kurutma',
            'Ücretsiz Alım & Teslim'
        ],
        process: [
            {
                title: 'Alım',
                description: 'Yorgan ve battaniyeleriniz adresinizden ücretsiz olarak alınır.'
            },
            {
                title: 'Ön Kontrol',
                description: 'Kumaş türü ve dolgu malzemesi incelenir, uygun yıkama programı belirlenir.'
            },
            {
                title: 'Antialerjik Yıkama',
                description: 'Antialerjik deterjanlarla toz akarları, ter kalıntıları ve alerjenler derinlemesine temizlenir.'
            },
            {
                title: 'Kurutma',
                description: 'Kapalı alanda kontrollü sıcaklıkta kurutulur, dolgu malzemesinin kabarıklığı korunur.'
            },
            {
                title: 'Paketleme & Teslim',
                description: 'Hijyenik şekilde paketlenerek 3–5 gün içinde adresinize teslim edilir.'
            }
        ],
        whatsappMessage: 'Merhaba, yorgan ve battaniyelerim için hijyenik yıkama randevusu alabilir miyim?',
        pricingRange: { min: 300, max: 450, unit: 'Çift Kişilik' },
        whyDifferent: '{region} bölgesinden alınan yorgan ve battaniyeleriniz endüstriyel boyuttaki özel yorgan yıkama makinelerinde tekli olarak yıkanır. Halılarla veya diğer ürünlerle asla aynı ortama girmez. İçerisindeki elyaf, yün veya pamuk dolgu malzemesi zarar görmeden kapalı odalarda kurutularak bakteri ve tozlardan %100 arındırılır.',
        faqTemplates: [
            {
                question: '{region} servisiniz yorganları evden alıyor mu?',
                answer: 'Evet, {region} sınırları içerisindeki tüm ev ve iş yerlerinden yorgan ile battaniyelerinizi ücretsiz alıp teslim ediyoruz.'
            },
            {
                question: 'Yün yorgan yıkıyor musunuz?',
                answer: 'Evet, yün yorganlarınız toplanma veya keçeleşme yapmaması için uygun sıcaklıkta, yünlü ürünlere özel şampuanlarla yıkanır.'
            },
            {
                question: 'Yorganlar halılarla birlikte mi yıkanıyor?',
                answer: 'Kesinlikle hayır. Yorgan ve battaniyeleriniz halılardan tamamen bağımsız, sadece bu işlem için üretilmiş sanayi tipi makinelerde yıkanır.'
            },
            {
                question: 'Kaz tüyü yorgan yıkama yapıyor musunuz?',
                answer: 'Kaz tüyü yorganlarınızın hassas yapısı göz önünde bulundurularak özel ısıda ve devirde deforme olmadan yıkanmasını sağlıyoruz.'
            },
            {
                question: 'Kurutma işlemini nasıl yapıyorsunuz?',
                answer: 'Yorganlarınız sıkma işleminden sonra, dışarıdaki toz ve egzozdan uzak, tamamen kapalı ve nem emici cihazların olduğu kurutma odalarımızda kurutulmaktadır.'
            }
        ]
    }
];
