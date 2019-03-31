import { useState, useEffect } from 'react';
import { NextContext } from 'next';
import { Tabs } from 'antd';

import CardLayout from '../../layouts/Card';

import Section from '../../components/Section';
import ClaimCard from '../../components/ClaimCard';
import Discounts from '../../components/Discounts';
import Profile, { TUser } from '../../components/Profile';

import { parseQs } from '../../utils';
import { discounts, tainanCard, taipeiCard, fakeUser } from '../../fakeData';

enum CardCertificationName {
  Taipei = 'Taipei Card',
  Tainan = 'Tainan Card',
}

type TCard = {
  name: CardCertificationName;
  coverSrc: any;
  description: string;
};

type TProps = {
  style?: React.CSSProperties;
  card: TCard;
  userInject?: TUser;
};

export default function TaipeiOrTainanCard({
  card,
  style,
  userInject,
}: TProps) {
  const [user, setUser] = useState(fakeUser);

  useEffect(() => {
    const qs = parseQs(window.location.href);
    setUser({
      ...fakeUser,
      ...userInject,
      ...qs,
    });
  }, []);

  return (
    <CardLayout title={`BiiMe - ${card.name}`} style={style}>
      <Section fullscreen first alignItems="flex-start">
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Card" key="1">
            <ClaimCard card={card} />
            <Discounts discounts={discounts} />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Profile" key="2">
            <Profile user={user} />
          </Tabs.TabPane>
        </Tabs>
      </Section>
    </CardLayout>
  );
}

type TQueryString = {
  certificationName: CardCertificationName;
};

TaipeiOrTainanCard.getInitialProps = ({ query }: NextContext<TQueryString>) => {
  switch (query.certificationName) {
    case CardCertificationName.Tainan: {
      return {
        style: { background: 'rgba(249, 121, 81, 0.42)' },
        card: tainanCard,
        user: {
          issuerName: 'Tainan City Government',
        },
      };
    }

    case CardCertificationName.Taipei: {
      return {
        style: { background: 'rgba(31, 172, 227, 0.42)' },
        card: taipeiCard,
        user: {
          issuerName: 'Taipei City Government',
        },
      };
    }
  }
};
