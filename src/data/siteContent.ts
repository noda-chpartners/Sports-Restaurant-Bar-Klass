export const site = {
  name: 'Sports Restaurant&Bar Klass',
  shortName: 'Klass',
  description:
    '相模大野駅から徒歩3分。Sports Restaurant&Bar Klassの人気メニュー、パーティー情報、イベント、ご利用案内をご紹介します。',
  phone: '042-765-4755',
  phoneHref: 'tel:0427654755',
  address: '神奈川県相模原市南区相模原大野6丁目13-2 OGB1F',
  station: '相模大野 徒歩3分',
  hours: [
    { label: '平日', value: '11:00–14:00 / 17:00–翌2:00' },
    { label: '土日祝', value: '11:00–14:00 / 17:00–翌2:00' },
  ],
  closed: 'なし',
  seats: '43席',
  privateParty: 'パーティー貸切など 45〜50名',
  instagram: 'https://www.instagram.com/klassbar/',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent('神奈川県相模原市南区相模原大野6丁目13-2 OGB1F'),
};

export const navigation = [
  { label: 'Klassについて', href: '#about' },
  { label: '人気メニュー', href: '#menu' },
  { label: 'パーティー', href: '#party' },
  { label: 'イベント', href: '#events' },
  { label: 'アクセス', href: '#access' },
];

export const popularMenus = [
  { rank: '01', name: 'ケージャンチキン', price: '1,100円' },
  { rank: '02', name: 'ビーフタコス', price: '700円' },
  { rank: '03', name: '牛タンガーリックバターステーキ', price: '1,500円' },
  { rank: '04', name: '牛タンハンバーグ', price: '1,500円' },
  { rank: '05', name: 'ハンバーガー', price: '1,200円' },
];

export const additionalMenu = {
  name: 'ジョニースガーリックチキン',
  price: '1,000円',
};

export const facts = [
  { label: '営業時間', value: '11:00–14:00 / 17:00–翌2:00' },
  { label: '定休日', value: 'なし' },
  { label: '席数', value: '43席' },
  { label: '貸切目安', value: '45〜50名' },
];
