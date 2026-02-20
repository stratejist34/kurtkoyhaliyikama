import { services } from './services';

export interface Region {
    slug: string;
    name: string;
    description: string;
    district: string;
    postalCode?: string;
    nearbyRegions: string[];
}

export const regions: Region[] = [
    {
        slug: 'kurtkoy',
        name: 'Kurtköy',
        description: 'Sabiha Gökçen Havalimanı\'na komşu, hızla gelişen Kurtköy bölgesinde yaşayan ailelere güvenilir ve hijyenik yıkama hizmeti sunuyoruz.',
        district: 'Pendik',
        postalCode: '34912',
        nearbyRegions: ['pendik', 'velibaba', 'kaynarca', 'tepeoren']
    },
    {
        slug: 'pendik',
        name: 'Pendik',
        description: 'Pendik merkez ve çevresinde ikamet eden müşterilerimize ücretsiz servis ile halı, koltuk, perde ve yorgan yıkama hizmeti veriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['kurtkoy', 'kaynarca', 'velibaba', 'guzelyali']
    },
    {
        slug: 'velibaba',
        name: 'Velibaba',
        description: 'Velibaba ve çevresindeki konut sitelerine hızlı erişim sağlayan konumumuz sayesinde halılarınız aynı hafta içinde tertemiz teslim edilir.',
        district: 'Pendik',
        postalCode: '34903',
        nearbyRegions: ['kurtkoy', 'pendik', 'kaynarca', 'guzelyali']
    },
    {
        slug: 'kaynarca',
        name: 'Kaynarca',
        description: 'Kaynarca\'nın yoğun yerleşim alanlarına düzenli servis güzergahımızla ulaşıyor, profesyonel yıkama hizmetimizi kapınıza getiriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['pendik', 'velibaba', 'kurtkoy', 'cinardere']
    },
    {
        slug: 'cinardere',
        name: 'Çınardere',
        description: 'Çınardere bölgesinde yaşayan aileler için güvenilir alım-teslim hizmetiyle profesyonel temizlik çözümleri sunuyoruz.',
        district: 'Pendik',
        postalCode: '34896',
        nearbyRegions: ['kaynarca', 'uydukent', 'pendik', 'kurtkoy']
    },
    {
        slug: 'uydukent',
        name: 'Uydukent',
        description: 'Uydukent ve çevresindeki site sakinlerine düzenli servis ile halı, koltuk ve perde yıkama hizmeti ulaştırıyoruz.',
        district: 'Pendik',
        postalCode: '34893',
        nearbyRegions: ['cinardere', 'kaynarca', 'pendik', 'kurtkoy']
    },
    {
        slug: 'tepeoren',
        name: 'Tepeören',
        description: 'Tepeören\'in villa ve müstakil ev bölgelerine özel ilgiyle hizmet veriyoruz. Büyük halılar ve özel dokuma ürünler için kapsamlı temizlik.',
        district: 'Pendik',
        postalCode: '34959',
        nearbyRegions: ['kurtkoy', 'akfirat', 'tuzla', 'pendik']
    },
    {
        slug: 'akfirat',
        name: 'Akfırat',
        description: 'Akfırat bölgesindeki villa sitelerine ve konut projelerine profesyonel halı ve ev tekstili yıkama hizmeti sağlıyoruz.',
        district: 'Tuzla',
        postalCode: '34959',
        nearbyRegions: ['tepeoren', 'tuzla', 'kurtkoy', 'yenisehir']
    },
    {
        slug: 'tuzla',
        name: 'Tuzla',
        description: 'Tuzla merkez ve sanayi bölgesi çevresindeki yerleşim yerlerine düzenli servis güzergahımızla hijyenik yıkama hizmeti sunuyoruz.',
        district: 'Tuzla',
        postalCode: '34940',
        nearbyRegions: ['akfirat', 'yenisehir', 'esenyali', 'tepeoren']
    },
    {
        slug: 'yenisehir',
        name: 'Yenişehir',
        description: 'Yenişehir\'in modern konut projelerine ve yerleşim alanlarına hızlı erişimle profesyonel temizlik hizmeti veriyoruz.',
        district: 'Pendik',
        postalCode: '34890',
        nearbyRegions: ['tuzla', 'akfirat', 'pendik', 'guzelyali']
    },
    {
        slug: 'esenyali',
        name: 'Esenyalı',
        description: 'Esenyalı ve sahil kesimindeki konutlara düzenli servis hatlarımızla ulaşarak halı, koltuk ve perde yıkama hizmeti sunuyoruz.',
        district: 'Pendik',
        postalCode: '34893',
        nearbyRegions: ['guzelyali', 'pendik', 'tuzla', 'kaynarca']
    },
    {
        slug: 'guzelyali',
        name: 'Güzelyalı',
        description: 'Güzelyalı sahil bölgesindeki ailelere ücretsiz servis ile profesyonel halı, koltuk, perde ve yorgan yıkama hizmeti götürüyoruz.',
        district: 'Pendik',
        postalCode: '34903',
        nearbyRegions: ['esenyali', 'pendik', 'velibaba', 'kaynarca']
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
