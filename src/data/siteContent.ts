export const site = {
  name: 'Sports Restaurant&Bar Klass',
  shortName: 'Klass',
  googleCalendarId:
    '99d92cc90cd972244b97add7f1b4873d0bfd374fbf6acf0b39532359f5308b31@group.calendar.google.com',
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
  { label: 'Klassについて', href: '#about', i18nKey: 'nav.about' },
  { label: '人気メニュー', href: '#menu', i18nKey: 'nav.menu' },
  { label: 'パーティー', href: '#party', i18nKey: 'nav.party' },
  { label: 'イベント', href: '#events', i18nKey: 'nav.events' },
  { label: 'アクセス', href: '#access', i18nKey: 'nav.access' },
];

export const popularMenus = [
  { rank: '01', name: 'ケイジャンチキン', price: '1,100円', nameKey: 'menu.item1.name', priceKey: 'menu.item1.price' },
  { rank: '02', name: 'ビーフタコス', price: '700円', nameKey: 'menu.item2.name', priceKey: 'menu.item2.price' },
  { rank: '03', name: '牛タンガーリックバターステーキ', price: '1,500円', nameKey: 'menu.item3.name', priceKey: 'menu.item3.price' },
  { rank: '04', name: '牛タンハンバーグ', price: '1,500円', nameKey: 'menu.item4.name', priceKey: 'menu.item4.price' },
  { rank: '05', name: 'ハンバーガー', price: '1,200円', nameKey: 'menu.item5.name', priceKey: 'menu.item5.price' },
];

export const additionalMenu = {
  name: 'ジョニースガーリックチキン',
  price: '1,000円',
  nameKey: 'menu.other.name',
  priceKey: 'menu.other.price',
};

export const facts = [
  { label: '営業時間', value: '11:00–14:00 / 17:00–翌2:00', labelKey: 'fact.hours.label', valueKey: 'fact.hours.value' },
  { label: '定休日', value: 'なし', labelKey: 'fact.closed.label', valueKey: 'fact.closed.value' },
  { label: '席数', value: '43席', labelKey: 'fact.seats.label', valueKey: 'fact.seats.value' },
  { label: '貸切目安', value: '45〜50名', labelKey: 'fact.private.label', valueKey: 'fact.private.value' },
];
