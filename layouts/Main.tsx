import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import css from 'styled-jsx/css';
import { Col, Layout, Row } from 'antd';

import '../assets/style.less';

import Meta from './Meta';
import { SITE_TITLE } from '../constants';
import { getRelativePath } from '../utils';

interface IProps {
  title?: string;
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<IProps> = ({
  children,
  title = SITE_TITLE,
}) => (
  <Layout>
    <Head>
      <title>{title}</title>
      <Meta />
    </Head>
    <Layout.Header className={`${className} nav-fixed`}>
      <img
        src={getRelativePath('/static/logo_BiiMe@3.png')}
        alt="logo"
        className={`${className} nav-logo`}
      />
      <div>
        <Link href="/store-list" as={getRelativePath('/store-list')}>
          <a className={`${className} nav-link`}>Store list</a>
        </Link>
      </div>
    </Layout.Header>
    <Layout.Content>
      <Row type="flex" justify="center">
        <Col xs={20} lg={12}>
          {children}
        </Col>
      </Row>
    </Layout.Content>
    {globalStyle}
    {styles}
  </Layout>
);

const { styles, className } = css.resolve`
  .nav-fixed {
    position: fixed;
    z-index: 2;
    width: 100%;
    background-color: rgb(22, 28, 53);
    height: auto;
    padding: 12px 36px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
  }

  .nav-logo {
    width: 4em;
  }

  .nav-link {
    color: white;
  }
 
  .nav-title {
    line-height: 2.5rem;
    display: inline-block;
    font-size: 15px;
    margin-left: 10px;
    transform: translateY(5px);
  }

`;

const globalStyle = (
  <style jsx={true} global={true}>{`
    h1 {
      font-weight: 400 !important;
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

export default MainLayout;
