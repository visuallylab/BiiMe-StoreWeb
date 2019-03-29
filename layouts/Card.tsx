import React from 'react';
import Head from 'next/head';
import { Col, Layout, Row } from 'antd';

import '../assets/style.less';
import '../assets/card.less';
import {
  SITE_TITLE,
  SITE_DESC,
  FAVICON_PATH,
  LARGE_ICON_PATH,
  SITE_URL,
} from '../constants';

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
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="language" content="en" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={SITE_DESC} />
      <link rel="icon" type="image/x-icon" href={FAVICON_PATH} />
      <link rel="apple-touch-icon" href={LARGE_ICON_PATH} />
      <meta property="og:url" content={SITE_URL} />
      <meta property="og:title" content={SITE_TITLE} />
      <meta property="og:description" content={SITE_DESC} />
      <meta property="og:image" content={LARGE_ICON_PATH} />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black" />
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
        src={require('../static/logo_BiiMe@3.png')}
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
    h1 {
      font-weight: 400;
      font-size: 2.5rem;
      letter-spacing: 0.1rem;
      margin-top: 12px;
    }
    p {
      font-size: 20px;
    }

    @media only screen and (max-width: 768px) {
      h1 {
        font-size: 1.5rem;
        letter-spacing: inherit;
      }
      p {
        font-weight: 300;
        font-size: 20px;
      }
    }
  `}</style>
);

export default CardLayout;
