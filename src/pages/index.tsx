import axios from 'axios';
import Head from 'next/head';
import type { GetServerSideProps } from 'next';
import React from 'react';

import RecursiveIconCard from '@/components/RecursiveIconCard';
import { Card } from '@/utils/card.interface';

interface PageList {
  pageList: Card[];
}

interface PageProps {
  cardList: PageList;
}

// Retrieve data server-side
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await axios({
      method: 'get',
      url: `${process.env.APP_URL}/api/readData`
    });

    const cardList = response.data;

    if (!cardList?.pageList) {
      throw new Error('pageList is missing from the response');
    }
    console.log('Data fetched:', cardList);
    return {
      props: {
        cardList
      }
    };
  } catch (error) {
    console.error('Failed to fetch data:', error);
    return {
      props: {
        cardList: { pageList: [] }
      }
    };
  }
};

export default class Home extends React.Component<PageProps> {
  static clientName = 'Voluable Voice';

  render() {
    const headerItems = this.props.cardList.pageList.find((item) => item.title === 'Header')?.children || [];
    const footerItems = this.props.cardList.pageList.find((item) => item.title === 'Footer')?.children || [];

    return (
      <>
        <Head>
          <title>{Home.clientName}</title>
        </Head>
        <main className='main'>
          <div className='center'>
            <h1>{Home.clientName} Visual Sitemap</h1>
          </div>
          <section className='header-section'>
            {headerItems.map((card, index) => {
              // Ensure each card or section can handle cases where there are no children
              if (card.children && card.children.length > 0) {
                return <RecursiveIconCard key={index} card={card} />;
              } else {
                // Render a card even if there are no children
                return (
                  <div key={index} className='card icon-card'>
                    <h3>{card.title}</h3>
                    <svg>
                      <use xlinkHref={`/icon-sprite.svg#icon-${card.icon}`}></use>
                    </svg>
                  </div>
                );
              }
            })}
          </section>
          <section className='footer-section'>
            {footerItems.map((card, index) => (
              <RecursiveIconCard key={index} card={card} />
            ))}
          </section>
        </main>
      </>
    );
  }
}
