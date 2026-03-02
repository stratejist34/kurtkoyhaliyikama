import { services } from './services';

export interface Region {
    slug: string;
    name: string;
    description: string;
    district: string;
    postalCode?: string;
    nearbyRegions: string[];
    advantages?: string[];
    distanceToHQ?: string;
    populationNote?: string;
}

export const regions: Region[] = [
    {
        slug: 'kurtkoy',
        name: 'Kurtköy',
        description: 'Sabiha Gökçen Havalimanı\'na komşu, hızla gelişen Kurtköy bölgesinde yaşayan ailelere güvenilir ve hijyenik yıkama hizmeti sunuyoruz.',
        district: 'Pendik',
        postalCode: '34912',
        nearbyRegions: ['pendik', 'velibaba', 'kaynarca', 'tepeoren'],
        advantages: ['Her gün düzenli servis güzergahı', 'Sitelere özel toplu yıkama indirimi', 'Ekspres teslimat seçeneği'],
        distanceToHQ: '10',
        populationNote: 'yoğun konut projeleri ve siteler'
    },
    {
        slug: 'pendik',
        name: 'Pendik',
        description: 'Pendik merkez ve çevresinde ikamet eden müşterilerimize ücretsiz servis ile halı, koltuk, perde ve yorgan yıkama hizmeti veriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['kurtkoy', 'kaynarca', 'velibaba', 'guzelyali'],
        advantages: ['Pendik merkeze aynı gün alım garantisi', 'Ücretsiz servis ağı', 'Tüm mahallelere eksiksiz hizmet'],
        distanceToHQ: '15',
        populationNote: 'köklü mahalleler ve sahil kesimi'
    },
    {
        slug: 'velibaba',
        name: 'Velibaba',
        description: 'Velibaba ve çevresindeki konut sitelerine hızlı erişim sağlayan konumumuz sayesinde halılarınız aynı hafta içinde tertemiz teslim edilir.',
        district: 'Pendik',
        postalCode: '34903',
        nearbyRegions: ['kurtkoy', 'pendik', 'kaynarca', 'guzelyali'],
        advantages: ['Tesisimize en yakın lokasyon avantajı', 'Çok hızlı alım ve teslimat', 'Komşuluk indirimi'],
        distanceToHQ: '1',
        populationNote: 'merkezi konum ve yeni projeler'
    },
    {
        slug: 'kaynarca',
        name: 'Kaynarca',
        description: 'Kaynarca\'nın yoğun yerleşim alanlarına düzenli servis güzergahımızla ulaşıyor, profesyonel yıkama hizmetimizi kapınıza getiriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['pendik', 'velibaba', 'kurtkoy', 'cinardere'],
        advantages: ['Haftada 3 gün rutin servis', 'Kapsamlı yerinde yıkama ekibi', 'Hızlı randevu sistemi'],
        distanceToHQ: '12',
        populationNote: 'yoğun yerleşim ve transit noktası'
    },
    {
        slug: 'cinardere',
        name: 'Çınardere',
        description: 'Çınardere bölgesinde yaşayan aileler için güvenilir alım-teslim hizmetiyle profesyonel temizlik çözümleri sunuyoruz.',
        district: 'Pendik',
        postalCode: '34896',
        nearbyRegions: ['kaynarca', 'uydukent', 'pendik', 'kurtkoy'],
        advantages: ['10 dakikada adrese ulaşım imkanı', 'Esnek teslimat saatleri', 'Aile bütçesine uygun fiyatlar'],
        distanceToHQ: '5',
        populationNote: 'huzurlu aile yaşam alanları'
    },
    {
        slug: 'uydukent',
        name: 'Uydukent',
        description: 'Uydukent ve çevresindeki site sakinlerine düzenli servis ile halı, koltuk ve perde yıkama hizmeti ulaştırıyoruz.',
        district: 'Pendik',
        postalCode: '34893',
        nearbyRegions: ['cinardere', 'kaynarca', 'pendik', 'kurtkoy'],
        advantages: ['Site sakinlerine özel kampanya', 'Geniş halılar için uygun taşıma', 'Özenli teslimat'],
        distanceToHQ: '8',
        populationNote: 'geniş bloklar ve düzenli siteler'
    },
    {
        slug: 'tepeoren',
        name: 'Tepeören',
        description: 'Tepeören\'in villa ve müstakil ev bölgelerine özel ilgiyle hizmet veriyoruz. Büyük halılar ve özel dokuma ürünler için kapsamlı temizlik.',
        district: 'Pendik',
        postalCode: '34959',
        nearbyRegions: ['kurtkoy', 'akfirat', 'tuzla', 'pendik'],
        advantages: ['Büyük metrekareli halılara özel işlem', 'VIP yerinde koltuk yıkama', 'Hassas dokuma perdelere özel yıkama'],
        distanceToHQ: '20',
        populationNote: 'villa projeleri ve müstakil yaşam'
    },
    {
        slug: 'akfirat',
        name: 'Akfırat',
        description: 'Akfırat bölgesindeki villa sitelerine ve konut projelerine profesyonel halı ve ev tekstili yıkama hizmeti sağlıyoruz.',
        district: 'Tuzla',
        postalCode: '34959',
        nearbyRegions: ['tepeoren', 'tuzla', 'kurtkoy', 'yenisehir'],
        advantages: ['Premium halılara (el dokuma/ipek) özel sigortalı yıkama', 'Geniş araç filosu ile sorunsuz teslimat', 'Özel randevu saatleri planlama'],
        distanceToHQ: '22',
        populationNote: 'lüks konut ve doğa içi yaşam'
    },
    {
        slug: 'tuzla',
        name: 'Tuzla',
        description: 'Tuzla merkez ve sanayi bölgesi çevresindeki yerleşim yerlerine düzenli servis güzergahımızla hijyenik yıkama hizmeti sunuyoruz.',
        district: 'Tuzla',
        postalCode: '34940',
        nearbyRegions: ['akfirat', 'yenisehir', 'esenyali', 'tepeoren'],
        advantages: ['Geniş servis ağı ile her mahalleye ulaşım', 'İş yerleri ve ofisler için toplu yıkama', 'Hafta sonu dahil esnek alım'],
        distanceToHQ: '25',
        populationNote: 'gelişen sahil ve iş merkezleri'
    },
    {
        slug: 'yenisehir',
        name: 'Yenişehir',
        description: 'Yenişehir\'in modern konut projelerine ve yerleşim alanlarına hızlı erişimle profesyonel temizlik hizmeti veriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['tuzla', 'akfirat', 'pendik', 'guzelyali'],
        advantages: ['Modern sitelerin kurallarına tam uyumlu sessiz taşıma', 'Akşam saatlerinde esnek alım-teslim', 'Aynı gün fiyat garantisi'],
        distanceToHQ: '12',
        populationNote: 'modern konut projeleri'
    },
    {
        slug: 'esenyali',
        name: 'Esenyalı',
        description: 'Esenyalı ve sahil kesimindeki konutlara düzenli servis hatlarımızla ulaşarak halı, koltuk ve perde yıkama hizmeti sunuyoruz.',
        district: 'Pendik',
        postalCode: '34893',
        nearbyRegions: ['guzelyali', 'pendik', 'tuzla', 'kaynarca'],
        advantages: ['Bölgeye özel haftalık 3 gün garanti servis', 'Bütçe dostu sabit fiyat tarifesi', 'Zor lekeler için ekstra ücretsiz müdahale'],
        distanceToHQ: '16',
        populationNote: 'hareketli ve yoğun nüfuslu mahalleler'
    },
    {
        slug: 'guzelyali',
        name: 'Güzelyalı',
        description: 'Güzelyalı sahil bölgesindeki ailelere ücretsiz servis ile profesyonel halı, koltuk, perde ve yorgan yıkama hizmeti götürüyoruz.',
        district: 'Pendik',
        postalCode: '34903',
        nearbyRegions: ['esenyali', 'pendik', 'velibaba', 'kaynarca'],
        advantages: ['Sahil şeridine hızlı ve özel servis', 'Neme maruz kalmış halılar için derinlemesine koku giderme', 'Şeffaf süreç takibi'],
        distanceToHQ: '18',
        populationNote: 'sahil şeridi yerleşimleri'
    }
];

export interface RegionService {
    region: Region;
    service: { id: string; slug: string; name: string };
    title: string;
    slug: string;
}

const serviceTypes = [
    { id: 'hali-yikama', slug: 'hali-yikama', name: 'Halı Yıkama' },
    { id: 'koltuk-yikama', slug: 'koltuk-yikama', name: 'Koltuk Yıkama' },
    { id: 'stor-perde-yikama', slug: 'stor-perde-yikama', name: 'Stor Perde Yıkama' },
    { id: 'yorgan-battaniye-yikama', slug: 'yorgan-battaniye-yikama', name: 'Yorgan & Battaniye Yıkama' }
];

export function getRegionServices(): RegionService[] {
    return regions.flatMap(region =>
        serviceTypes.map(service => ({
            region,
            service,
            title: `${region.name} ${service.name}`,
            slug: `${region.slug}-${service.slug}`
        }))
    );
}

export function getRegionServiceBySlug(slug: string): RegionService | undefined {
    return getRegionServices().find(rs => rs.slug === slug);
}

export function getRegionBySlug(slug: string): Region | undefined {
    return regions.find(r => r.slug === slug);
}

export function getServiceData(serviceId: string) {
    return services.find(s => s.id === serviceId);
}

export function getNearbyRegionServices(regionSlug: string, serviceSlug: string): RegionService[] {
    const region = getRegionBySlug(regionSlug);
    if (!region) return [];

    return region.nearbyRegions
        .map(nearbySlug => getRegionServiceBySlug(`${nearbySlug}-${serviceSlug}`))
        .filter((rs): rs is RegionService => rs !== undefined);
}

export function getSameRegionOtherServices(regionSlug: string, currentServiceSlug: string): RegionService[] {
    return getRegionServices().filter(
        rs => rs.region.slug === regionSlug && rs.service.slug !== currentServiceSlug
    );
}
