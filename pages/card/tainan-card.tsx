import { NextContext } from 'next';
import axios from 'axios';
import { Tabs } from 'antd';

import CardLayout from '../../layouts/Card';

import Section from '../../components/Section';
import ClaimCard from '../../components/ClaimCard';
import Discounts from '../../components/Discounts';
import Profile, { TUser } from '../../components/Profile';

import { discounts, fakeUser, tainanCard } from '../../fakeData';

type TProps = {
  user: TUser;
};

function TaiPeiCard({ user }: TProps) {
  return (
    <CardLayout style={{ background: 'rgba(249, 121, 81, 0.42)' }}>
      <Section fullscreen first alignItems="flex-start">
        <Tabs defaultActiveKey="1" size="large">
          <Tabs.TabPane tab="Card" key="1">
            <ClaimCard card={tainanCard} />
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
  did: string;
};

TaiPeiCard.getInitialProps = async ({ query }: NextContext<TQueryString>) => {
  let user: TUser = { ...fakeUser };
  if (query.did) {
    try {
      const res = await axios.get<TUser>(`API${query.did}`);
      user = res.data;
    } catch (err) {
      console.error(err);
    }
  }
  return { user };
};

export default TaiPeiCard;
