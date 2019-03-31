import { getRelativePath } from './utils';

export const discounts = [
  {
    cover: getRelativePath('/static/cover_comebuy.png'),
    storeName: 'Comebuy',
    discountText: '20% off on bubble tea',
  },
  {
    cover: getRelativePath('/static/cover_moleskine.jpeg'),
    storeName: 'Moleskine',
    discountText: '5% off on classic notebook',
  },
  {
    cover: getRelativePath('/static/cover_ikea.jpeg'),
    storeName: 'Ikea',
    discountText: '10% off on food',
  },
  {
    cover: getRelativePath('/static/cover_starbucks.jpeg'),
    storeName: 'Starbucks',
    discountText: 'buy caffe and get one free',
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
  description: `description #
  quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis
  in sed lectus. Cras vehicula tincidunt massa, in gravida libero
  fermentum quis.`,
};

export const tainanCard = {
  name: 'Tainan City Card',
  coverSrc: getRelativePath('/static/tainan_card.png'),
  description: `description #
  quisque tempus vehicula enim. Duis ut dolor nec augue blandit mattis
  in sed lectus. Cras vehicula tincidunt massa, in gravida libero
  fermentum quis.`,
};
