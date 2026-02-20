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
        ]
    }
];
