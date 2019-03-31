import React from 'react';
import { NextContext } from 'next';
import { Tabs } from 'antd';

import CardLayout from '../../layouts/Card';

import Section from '../../components/Section';
import ClaimCard from '../../components/ClaimCard';
import Discounts from '../../components/Discounts';
import Profile from '../../components/Profile';

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
};

type TQueryString = {
  certificationName: CardCertificationName;
};

export default class extends React.Component<TProps> {
  static getInitialProps = ({ query }: NextContext<TQueryString>) => {
    switch (query.certificationName) {
      case CardCertificationName.Tainan: {
        return {
          style: { background: 'rgba(249, 121, 81, 0.42)' },
          card: tainanCard,
        };
      }

      case CardCertificationName.Taipei: {
        return {
          style: { background: 'rgba(31, 172, 227, 0.42)' },
          card: taipeiCard,
        };
      }
    }
  };

  state = {
    user: fakeUser,
  };

  componentDidMount() {
    const qs = parseQs(window.location.href);
    console.log(qs);
    this.setState({
      user: {
        ...fakeUser,
        ...qs,
      },
    });
  }

  render() {
    const { card, style } = this.props;
    return (
      <CardLayout title={`BiiMe - ${card.name}`} style={style}>
        <Section fullscreen first alignItems="flex-start">
          <Tabs defaultActiveKey="2" size="large">
            <Tabs.TabPane tab="Card" key="1">
              <ClaimCard card={card} />
              <Discounts discounts={discounts} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Profile" key="2">
              <Profile user={this.state.user} />
            </Tabs.TabPane>
          </Tabs>
        </Section>
      </CardLayout>
    );
  }
}
