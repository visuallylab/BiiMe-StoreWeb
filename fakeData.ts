import { getRelativePath } from './utils';

export const discounts = [
  {
    cover: getRelativePath('/static/cover_comebuy.png'),
    storeName: 'Comebuy',
    discountText: '20% off on bubble tea',
    qrcode: getRelativePath('/static/qrcode_comebuy.png'),
  },
  {
    cover: getRelativePath('/static/cover_moleskine.jpeg'),
    storeName: 'Moleskine',
    discountText: '5% off on classic notebook',
    qrcode: getRelativePath('/static/qrcode_moleskine.png'),
  },
  {
    cover: getRelativePath('/static/cover_ikea.jpeg'),
    storeName: 'Ikea',
    discountText: '10% off on food',
    qrcode: getRelativePath('/static/qrcode_ikea.png'),
  },
  {
    cover: getRelativePath('/static/cover_starbucks.jpeg'),
    storeName: 'Starbucks',
    discountText: 'buy caffe and get one free',
    qrcode: getRelativePath('/static/qrcode_starbucks.png'),
  },
];

export const fakeUser = {
  did: '128901802382173721372173',
  name: 'Chihusan',
  certificationName: 'Course Certification',
  certificatedAt: '2019-03-26',
  expiredAt: '2020-04-05',
  issuerName: '',
  transactionHash: '******',
};

export const taipeiCard = {
  name: 'Taipei City Card',
  coverSrc: getRelativePath('/static/taipei_card.png'),
  description:
    '"Taipei City Card" integrates all kinds of issue cards of the government, and achieves a number of municipal convenience measures all-in-one card. Besides, it also provides various discounts such as free activities and venue discounts.',
};

export const tainanCard = {
  name: 'Tainan City Card',
  coverSrc: getRelativePath('/static/tainan_card.png'),
  description:
    '"Tainan City Card" provides various discounts such as free activities and venue discounts. Besides, it also integrates all kinds of issue cards of the government, and achieves a number of municipal convenience measures all-in-one card.',
};
