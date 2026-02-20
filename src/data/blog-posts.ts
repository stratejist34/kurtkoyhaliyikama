export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    category: 'hali-yikama' | 'hizmetlerimiz';
    categoryLabel: string;
    date: string;
    readTime: number;
}

export const blogPosts: BlogPost[] = [
    {
        slug: 'kurtkoy-hali-yikama',
        title: 'Kurtköy Halı Yıkama',
        excerpt: 'Kurtköy ve çevresinde ücretsiz alım-teslim ile profesyonel halı yıkama hizmeti. Kapalı alanda kurutma, bitkisel şampuan ve 1 haftada teslimat.',
        content: `Kurtköy Halı Yıkama servisimizde, kullandığımız dezenfektanlarla sizlerin sağlığını önemsiyoruz. Ayrıca servisimizde en iyi şekilde hizmet verebilmek için son teknoloji cihazlarla donatılmıştır.

Velibaba Mahallesi'ndeki tesisimizde tam otomatik bant sistemi ile çalışıyoruz. Bu sistem sayesinde halılarınız çift yönlü fırçalarla hem ön hem arka yüzeyinden temizlenir. Yıkama sürecinde yalnızca %100 bitkisel şampuanlar kullanıyoruz.

## Neden Kurtköy Halı Yıkama?

- **Ücretsiz alım ve teslim**: Kurtköy, Uydukent, Tepeören ve çevre mahallelerden kapınızdan alıyoruz
- **Kapalı alan kurutma**: Nem çekme makineleriyle 8 saat içinde kurutma
- **Vibrasyonlu toz alma**: Halı liflerinin derinindeki kum, toz ve yabancı maddeler önce ayrıştırılır
- **Santrifüj**: Halı cinsine uygun devirde sıkma ile %95 oranında su uzaklaştırma

Halılarınızı teslim aldığımız andan itibaren hijyenik ve fiziki olarak sorumluluğu biz üstleniyoruz. Her adım kayıt altında, sürecin her aşamasını takip edebilirsiniz.

## Hizmet Bölgelerimiz

Kurtköy merkezin yanı sıra Yenişehir, Harmandere, Çamçeşme ve Şeyhli mahallelerine de düzenli servis sağlıyoruz. Mesafe fark etmeksizin alım ve teslim ücretsizdir.`,
        image: '/wp-content/uploads/2020/12/kurtkoy-hali-yikama.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-11-09',
        readTime: 3
    },
    {
        slug: 'yakacik-hali-yikama',
        title: 'Yakacık Halı Yıkama',
        excerpt: 'Yakacık ilçe sakinleri için profesyonel halı, koltuk, yorgan ve battaniye yıkama. Ücretsiz servisimizle kapınızdan alıp tertemiz teslim ediyoruz.',
        content: `Yakacık halı yıkama hizmetleri Yakacık ilçe sakinleri için halı yıkama servisimiz tarafından verilmektedir. Halı, koltuk, yorgan, battaniye ve halıflex yıkama hizmetlerimizi sizlerin mutluluğunu ve sağlığını düşünerek veriyoruz.

Halı yıkama hizmetimizi, kullandığımız şampuanlarla sizlerin sağlığını önemseyerek vermekteyiz. Ayrıca firmamız, sizlere en iyi şekilde hizmet verebilmek için son teknoloji cihazlarla donatılmıştır.

## Yakacık Bölgesinde Sunduğumuz Hizmetler

- **Halı Yıkama**: Tam otomatik bant sistemiyle, bitkisel şampuanla derinlemesine temizlik
- **Koltuk Yıkama**: Yerinde köpüklü yıkama teknolojisiyle, 4 saatte kullanıma hazır
- **Yorgan & Battaniye**: Elyaf ve yün yorganlarınız için özel yıkama programları
- **Stor Perde Yıkama**: Mekanizmaya zarar vermeden söküm ve aynı gün montaj

## Ücretsiz Alım-Teslim

Yakacık bölgesinden halılarınızı ücretsiz olarak alıyor, yıkama işlemi tamamlandıktan sonra adresinize teslim ediyoruz. Servisimiz Yakacık merkez ve çevre sokakları kapsamaktadır.`,
        image: '/wp-content/uploads/2020/04/hali-yikama-kurtkoy-3.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-12-13',
        readTime: 3
    },
    {
        slug: 'pendik-yayalar-hali-yikama',
        title: 'Pendik Yayalar Halı Yıkama',
        excerpt: 'Pendik Yayalar ve çevresinde halı yıkama, koltuk yıkama ve perde yıkama hizmetleri. Son teknoloji makinalarla hijyenik yıkama garantisi.',
        content: `Pendik yayalar halı yıkama olarak halı yıkama hizmet yelpazemiz her geçen gün artmaktadır. Pendik'te halı yıkama sektörüne, uzman çalışma arkadaşları ve son teknoloji yıkama makinaları ile yenilik getirmeye devam ediyoruz.

Hizmet verdiğimiz yerler arasına aldığımız Pendik yayalarda halı yıkatmak isteyen müşterilerimize bir telefon kadar uzağız.

## Yayalar Bölgesine Özel Avantajlar

- **Haftalık düzenli servis**: Yayalar bölgesine haftanın her günü alım-teslim
- **Aynı gün teslim seçeneği**: Acil ihtiyaçlarınız için ekspres yıkama
- **Toplu yıkamada indirim**: 3 ve üzeri halıda özel fiyat
- **Bitkisel deterjan kullanımı**: Çocuk ve evcil hayvan dostu temizlik

## İletişim

Pendik Yayalar bölgesinden halı yıkama hizmeti almak için bizi arayabilir veya WhatsApp üzerinden fotoğraf göndererek anında fiyat alabilirsiniz.`,
        image: '/wp-content/uploads/2020/12/pendik-hali-yikama.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-04-13',
        readTime: 3
    },
    {
        slug: 'velibaba-hali-yikama',
        title: 'Velibaba Halı Yıkama',
        excerpt: 'Velibaba Mahallesi\'nde bulunan tesisimizle halı, koltuk, battaniye ve halıflex yıkama hizmetleri. Komşunuz olan tesisimize halılarınızı kendiniz de getirebilirsiniz.',
        content: `Halı, koltuk, yorgan, battaniye ve halıflex yıkama hizmetlerimizi sizlerin mutluluğunu ve sağlığını düşünerek veriyoruz. Çünkü halı yıkama hizmeti baştan savma yapılamaz.

Halı yıkama hizmetimizi, kullandığımız şampuanlarla sizlerin sağlığını önemseyerek vermekteyiz. Ayrıca firmamız, sizlere en iyi şekilde hizmet verebilmek için son teknoloji cihazlarla donatılmıştır.

## Velibaba Tesisimiz

Velibaba Mahallesi Aydos Caddesi No:71 adresindeki tesisimiz, bölge sakinlerine en yakın profesyonel halı yıkama noktasıdır. Dilerseniz halılarınızı bizzat tesisimize getirebilir, yıkama sürecini yerinde takip edebilirsiniz.

## Velibaba ve Çevre Mahalleler

- Velibaba merkez
- Kurtköy
- Yenişehir
- Kavakpınar
- Güzelyalı

Tüm bu bölgelerden ücretsiz alım ve teslim yapıyoruz. Mesafe fark etmeksizin ek ücret yoktur.`,
        image: '/wp-content/uploads/2020/12/velibaba-hali-yikama-pendik.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-04-13',
        readTime: 3
    },
    {
        slug: 'cinardere-hali-yikama',
        title: 'Çınardere Halı Yıkama',
        excerpt: 'Pendik Çınardere bölgesinde halı, koltuk, yorgan ve battaniye yıkama hizmetleri. Ücretsiz servis ile kapınızdan alım ve teslim.',
        content: `Pendik Çınardere halı yıkama olarak değerli müşterilerimizin halı, koltuk, yorgan, battaniye ve halıflex yıkama hizmetlerimizi sizlerin mutluluğunu ve sağlığını düşünerek veriyoruz.

Çünkü halı yıkama hizmeti baştan savma yapılamaz. Halı yıkama hizmetimizi, kullandığımız şampuanlarla sizlerin sağlığını önemseyerek vermekteyiz.

## Çınardere Bölgesi Hizmet Detayları

Çınardere sakinleri için haftalık düzenli servis rotamız mevcuttur. Halılarınız telefonla veya WhatsApp ile randevu aldıktan sonra kapınızdan teslim alınır.

### Yıkama Süreci

1. **Vibrasyonlu toz alma** ile kum ve yabancı madde ayrıştırma
2. **Bitkisel şampuan** ile çift yönlü fırçalama
3. **Santrifüj** ile fazla suyun uzaklaştırılması
4. **Kapalı alan kurutma** ile 8 saatte tam kuruma
5. **Hav düzeltme** ve kalite kontrol
6. **Paketleme** ve adrese ücretsiz teslim

Çınardere'den Velibaba'daki tesisimize yaklaşık 10 dakikalık mesafedeyiz.`,
        image: '/wp-content/uploads/2020/04/hali-yikama-velibaba-2.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-04-13',
        readTime: 3
    },
    {
        slug: 'uydukent-hali-yikama',
        title: 'Uydukent Halı Yıkama',
        excerpt: 'Uydukent bölgesinde profesyonel halı yıkama hizmeti. Ücretsiz alım-teslim, bitkisel şampuan ve kapalı alan kurutma ile hijyenik temizlik.',
        content: `Uydukent bölgesi sakinleri için halı yıkama hizmetimiz, Velibaba'daki tesisimizden sağlanmaktadır. Halı, koltuk, yorgan ve battaniye yıkama hizmetlerimizden Uydukent'ten de yararlanabilirsiniz.

## Uydukent İçin Avantajlar

- **Yakın mesafe**: Tesisimize sadece 5 dakika uzaklıkta
- **Aynı gün teslim opsiyon**: Sabah alınan halılar akşama kadar hazır olabilir
- **Toplu yıkama indirimi**: Apartman ve site sakinlerine özel fiyatlar

## Neden Profesyonel Halı Yıkama?

Ev ortamında yapılan halı yıkama, halının liflerine işlemiş kir ve bakterileri tam olarak temizleyemez. Ayrıca yetersiz kurutma, küf ve koku problemlerine yol açar.

Profesyonel halı yıkamada vibrasyonlu toz alma ile başlayan süreç, bitkisel şampuanla çift yönlü fırçalama, santrifüj ve kapalı alan kurutma ile devam eder. Her adım halınızın ömrünü uzatırken, evinize gerçek hijyen getirir.

Uydukent'ten servis talep etmek için bizi arayın veya WhatsApp'tan fotoğraf gönderin.`,
        image: '/wp-content/uploads/2020/12/hali-yikama-kurutma.jpg',
        category: 'hali-yikama',
        categoryLabel: 'Halı Yıkama',
        date: '2024-04-13',
        readTime: 3
    },
    {
        slug: 'hali-yikama',
        title: 'Halı Yıkama',
        excerpt: 'Birden fazla aşaması olan hijyenik halı yıkama hizmetimiz, detaylara verdiğimiz önemle, sizin için anlamlı hale geliyor.',
        content: `Bize ulaşıp adresinizi vermeniz ile başlayan süreç, halılarınızı teslim aldıktan itibaren hem hijyenik hem de fiziki anlamda aldığımız sorumluluğun ilk aşamasını oluşturuyor.

Halılarınızı teslim aldığımızdan sonraki süreci gelin birlikte inceleyelim.

## Toz Alma

Ücretsiz servisimizle kapınızdan alınan halılarınızı, halı temizleme bölümüne almadan önce toz alma makinesinden geçiriyoruz. İçindeki kum, toz, kıl ve yabancı maddelerden arındırılır.

## Yıkama

%100 bitkisel halı şampuanı ile tam otomatik bant sistemli çift yönlü fırçalarla ön ve arkası dönüşümlü olarak makineden geçirilir.

## Santrifüj

Halının cinsine göre uygun devirde sıktırılarak üzerindeki fazla suyun %95 oranında atılması sağlanır.

## Havalandırma - Kurutma

Nem çekme özellikli makinelerle 8 saat gibi kısa bir sürede kurutulur.

## Hav Alma

Hav alma makinesinde havı alınıp yatımına taranarak kalite kontrolden geçirilir.

## Paketleme

Pırıl pırıl ve hijyenik hale gelen halılarınız paketlenerek ücretsiz servisimizle teslim edilir.`,
        image: '/images/hali-yikama-detay.avif',
        category: 'hizmetlerimiz',
        categoryLabel: 'Hizmetlerimiz',
        date: '2024-04-16',
        readTime: 4
    },
    {
        slug: 'koltuk-yikama',
        title: 'Koltuk Yıkama',
        excerpt: 'Köpüklü yıkama teknolojisi ile yerinde profesyonel koltuk temizliği. Kumaşa zarar vermeden derinlemesine hijyen, 4 saatte kullanıma hazır.',
        content: `Koltuk Yıkama hizmetimiz, diğer halı yıkama ve koltuk yıkamacılardan farklı olarak tam profesyonel çalışması ve uzman bir ekibe sahip olmasının yanında köpüklü yıkama teknolojisiyle hizmet vermektedir.

Makinemiz köpüklü yıkama sayesinde koltuk kumaşlarına ve yüzeylerine hiçbir zarar vermez. Diğer buhar makinelerin aksine buhar ölçüsü makinelerin aşırı buhar vermesi sonucu yüksek ısı koltuk kumaşlarının deforme olmasına neden olur.

## Köpüklü Yıkama Avantajları

- **Kumaşa zarar vermez**: Buhar makinelerinin aksine kumaş deformasyonu riski yoktur
- **Derinlemesine temizlik**: Köpük, kumaşın liflerine işleyerek lekeleri çözer
- **Hızlı kuruma**: 4 saat içinde koltuklarınız kullanıma hazır
- **Koku giderme**: Sigara, yemek ve evcil hayvan kokuları tamamen giderilir

## Hangi Koltuk Türlerini Yıkıyoruz?

- Kumaş koltuklar
- Kadife ve süet koltuklar
- Mikrofiber koltuklar
- Yataklı koltuklar
- Ofis koltukları
- Sandalye döşemeleri

Koltuk yıkama hizmetimiz yerinde uygulanır. Evinize gelen ekibimiz, koltuklarınızı yerinden oynatmadan temizler.`,
        image: '/images/makine-ile-koltuk-yikama.avif',
        category: 'hizmetlerimiz',
        categoryLabel: 'Hizmetlerimiz',
        date: '2024-04-16',
        readTime: 3
    },
    {
        slug: 'stor-perde-yikama',
        title: 'Stor Perde Yıkama',
        excerpt: 'Hassas stor ve zebra perde yıkama. Mekanizmaya zarar vermeden söküm, profesyonel temizlik ve aynı gün montaj hizmeti.',
        content: `Stor perde yıkama hizmeti veren firmamız Pendik, Yakacık genelinde stor perde yıkama alanında göstermiş olduğu performansı ve gün geçtikçe artan müşteri portföyü ile bir sır değerli müşterilerine stor perde yıkama hizmeti vermektedir.

Stor perde yıkama işlemi oldukça dikkat gerektiren bir konudur. Bu nedenle yıkama stor perde yıkama işlemi mutlaka uzman ekiplerce yapılması gerekmektedir. Hassas bir stor perde mekanizmasını söküp takmak bile başlı başına uzmanlık gerektirir.

## Stor Perde Yıkama Süreci

1. **Yerinde söküm**: Uzman ekibimiz perdeyi mekanizmaya zarar vermeden söker
2. **Toz alma**: Kuru temizlik ile toz ve partikül temizliği
3. **Hassas yıkama**: Perde tipine uygun deterjan ve sıcaklıkta yıkama
4. **Kurutma**: Kontrollü ortamda düzgün kurutma
5. **Montaj**: Aynı gün içinde yerine takılır

## Hangi Perde Türlerini Yıkıyoruz?

- Stor perdeler
- Zebra perdeler
- Jakar perdeler
- Tül perdeler
- Blackout perdeler

Perde yıkama hizmetimiz söküm ve montaj dahildir. Ek ücret yoktur.`,
        image: '/wp-content/uploads/2020/12/kurtkoy-stor-perde-yikama.jpg',
        category: 'hizmetlerimiz',
        categoryLabel: 'Hizmetlerimiz',
        date: '2024-04-16',
        readTime: 3
    },
    {
        slug: 'neden-ozel-sampuan',
        title: 'Neden Market Şampuanı Kullanmıyoruz?',
        excerpt: 'Ucuz halı şampuanları neden halınıza zarar verir? pH dengesi, enzim teknolojisi ve lif sağlığı arasındaki ilişkiyi açıklıyoruz.',
        content: `Halı yıkama sektöründe en büyük maliyet kalemlerinden biri şampuandır. Piyasadaki "ekonomik" yıkamacıların çoğu, maliyeti düşürmek için yüksek alkali içeren, bulaşık deterjanı türevi kimyasallar kullanır.
        
Biz neden bunu yapmıyoruz?

## pH Dengesi ve Lif Sağlığı

Yün ve doğal lifli halılar asidik veya nötr (pH 5.5 - 7.5) ortamı sever. Yüksek alkali (pH 11+) market şampuanları, kiri hızlı çözer ancak halının "canını yakar". Lifler sertleşir, renkler matlaşır ve halı zamanla keçeleşir.

Biz, **Era 111** gibi enzim bazlı, pH dengeli profesyonel şampuanlar kullanıyoruz. Bu şampuanlar kiri kimyasal yanma ile değil, biyolojik enzimlerle parçalar.

## Yapışkanlık Hissi (Kalıntı Sorunu)

Ucuz şampuanlar durulanması çok zor olan köpük yapıcı maddeler içerir. İyi durulanmayan halıda kalan bu kimyasallar, zamanla "yapışkan" bir yüzey oluşturur. Bu yüzey mıknatıs gibi tozu çeker. Sonuç: Halınız yıkandıktan 2 hafta sonra eskisinden daha kirli görünür.

Bizim kullandığımız şampuanlar "sıfır kalıntı" teknolojisine sahiptir ve durulama suyumuz berraklaşana kadar işleme devam ederiz.`,
        image: '/images/hali-yikama-detay.avif',
        category: 'hizmetlerimiz',
        categoryLabel: 'Uzmanlık',
        date: '2024-05-20',
        readTime: 4
    },
    {
        slug: 'kurutma-odasi-onemi',
        title: 'Kurutma Odası Neden Şart?',
        excerpt: 'Halılarınızı güneşte veya sokakta kurutmak neden tehlikeli? Kapalı nem alma odalarımızın sağlığınız için önemi.',
        content: `Eskiden halılar balkonlarda, damlarda güneş altında kurutulurdu. Ancak modern şehir hayatında ve profesyonel temizlikte bu yöntem artık kabul edilemez.

## Güneşin Zararlı Etkileri (UV Yanığı)

Islak halı güneşe maruz kaldığında, UV ışınları boya pigmentlerini çok daha hızlı parçalar. "Halılarımın rengi soldu" şikayetinin bir numaralı sebebi, güneşte kontrolsüz kurutmadır.

## Sokak Tozu ve Egzoz

Açık havada kuruyan halı, aslında tekrar kirlenir. Sokaktaki egzoz dumanı, polenler ve toz, ıslak halı yüzeyine yapışır. Yıkattığınızı sandığınız halı, aslında şehrin hava kirliliğini emmiş olarak evinize döner.

## Bizim Çözümümüz: Kontrollü Nem Alma Odası

Tesisimizde halılar, dış dünyadan izole edilmiş, nem oranı ve sıcaklığı bilgisayarla kontrol edilen özel odalarda kurutulur. 
- **Toz yok:** Filtreli hava sirkülasyonu.
- **Renk solması yok:** Güneş ışığı görmez.
- **Koku yok:** Hızlı ve tam kuruma sağlandığı için "ıslak köpek" kokusu (küf başlangıcı) oluşmaz.`,
        image: '/images/hali-kurutma.avif',
        category: 'hizmetlerimiz',
        categoryLabel: 'Teknoloji',
        date: '2024-05-22',
        readTime: 3
    },
    {
        slug: 'ucuz-yikama-zararlari',
        title: 'Ucuz Halı Yıkamanın Gizli Maliyeti',
        excerpt: 'Daha ucuza yıkatmak aslında neden daha pahalıya patlar? Halı yıkama sektöründeki fiyat farklarının gerçek sebepleri.',
        content: `Bir firmada halı yıkama m² fiyatı 30 TL iken diğerinde nasıl 20 TL olabilir? Aradaki 10 TL cebinizde mi kalıyor, yoksa halınızdan mı gidiyor?

## Buzdağının Görünmeyen Kısmı

Düşük fiyat verebilmek için bir yerlerden kısılması gerekir. İşte "ucuz" yıkamanın formülü:

1.  **Havuz Sistemi (Çapraz Bulaşma):** Halınız, başka müşterilerin halılarıyla aynı su havuzuna atılır. Başkasının halısındaki idrar veya bakteri, sizin halınıza geçer. Bizde ise her halı **tek tek** yıkanır.
2.  **Kuyu Suyu:** Şebeke suyu pahalı olduğu için kireçli ve pis kuyu suyu kullanılır. Halılarınız sertleşir. Biz **filtrelenmiş şebeke suyu** kullanıyoruz.
3.  **Çamaşır Suyu (Klor):** Halıların saçaklarını hızlı beyazlatmak için çamaşır suyu basılır. Bu, pamuk ipliklerini çürütür ve 6 ay sonra saçaklarınız kopmaya başlar.

## Matematik Basit

Kaliteli bir halının ömrü 15-20 yıldır. Yanlış yıkama ile bu ömrü 5 yıla indirirseniz, "tasarruf" ettiğiniz 100 TL size binlerce liralık yeni halı masrafı olarak geri dönecektir.

Bizim fiyatlarımız "Vanity Pricing" (gösteriş fiyatı) değil, "Value Pricing" (değer fiyatı)dır. Halınızın ömrünü korumak için gereken minimum maliyeti yansıtır.`,
        image: '/images/hali-Yikama-manset.avif',
        category: 'hizmetlerimiz',
        categoryLabel: 'Rehber',
        date: '2024-05-25',
        readTime: 5
    }
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post => post.category === category);
}
