export interface PriceItem {
    name: string;
    price: number;
    unit: string;
    category: 'hali' | 'yorgan' | 'diger';
    popular?: boolean;
}

export const priceList: PriceItem[] = [
    { name: 'Makina Halısı', price: 100, unit: 'm²', category: 'hali' },
    { name: 'Shaggy Halı', price: 125, unit: 'm²', category: 'hali' },
    { name: 'Nepal Halı', price: 150, unit: 'm²', category: 'hali' },
    { name: 'Pamuk Halı', price: 150, unit: 'm²', category: 'hali' },
    { name: 'Viskon Halı', price: 125, unit: 'm²', category: 'hali' },
    { name: 'El Dokuma Halı', price: 200, unit: 'm²', category: 'hali' },
    { name: 'Makina Yün Halı', price: 125, unit: 'm²', category: 'hali' },
    { name: 'Elyaf Yorgan Yıkama', price: 400, unit: 'adet', category: 'yorgan' },
    { name: 'Yün Yorgan Yıkama', price: 600, unit: 'adet', category: 'yorgan' },
    { name: 'Battaniye Yıkama', price: 400, unit: 'adet', category: 'yorgan' },
    { name: 'Stor Perde Yıkama', price: 125, unit: 'adet', category: 'diger' },
    { name: 'Koltuk Takımı Yıkama', price: 2000, unit: 'takım', category: 'diger', popular: true },
];
