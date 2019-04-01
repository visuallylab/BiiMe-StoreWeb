import React from 'react';
import Head from 'next/head';
import { Col, Layout, Row } from 'antd';

import '../assets/style.less';
import '../assets/card.less';

import Meta from './Meta';
import { SITE_TITLE } from '../constants';
import { getRelativePath } from '../utils';

type TProps = {
  title?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const CardLayout: React.FunctionComponent<TProps> = ({
  children,
  title = SITE_TITLE,
  style,
}) => (
  <Layout style={style}>
    <Head>
      <Meta title={title} />
    </Head>
    <Layout.Header
      style={{
        background: 'rgb(22, 28, 53)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <img
        src={getRelativePath('/static/logo_BiiMe@3.png')}
        alt="logo"
        style={{ height: '130%' }}
      />
    </Layout.Header>
    <Layout.Content>
      <Row type="flex" justify="center">
        <Col xs={20} lg={12}>
          {children}
        </Col>
      </Row>
    </Layout.Content>
    {globalStyles}
  </Layout>
);

const globalStyles = (
  <style jsx global>{`
    html,
    body {
      margin: 0;
      padding: 0;
    }

    h1 {
      font-weight: 400;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      margin-top: 12px;
    }
    p {
      font-size: 20px;
    }
  `}</style>
);

export default CardLayout;
