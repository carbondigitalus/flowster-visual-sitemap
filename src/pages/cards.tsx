// NPM Modules
import Head from 'next/head';
import React from 'react';

// Custom Modules
import { Icon } from '@/components/icon';

export default class Cards extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Google Salience Tool</title>
        </Head>
        <main className='main'>
          <div className='center'>
            <h1>Card Icon Options</h1>
          </div>
          <div className='form-wrapper'></div>
          <div className='grid'>
            <Icon type='about' />
            <Icon type='address' />
            <Icon type='alert' />
            <Icon type='article-left-sidebar' />
            <Icon type='article-right-sidebar' />
            <Icon type='article' />
            <Icon type='bio' />
            <Icon type='blog-archive-offset' />
            <Icon type='blog-archive' />
            <Icon type='calendar' />
            <Icon type='card-payment' />
            <Icon type='career-star' />
            <Icon type='career' />
            <Icon type='cart' />
            <Icon type='catalog' />
            <Icon type='chat' />
            <Icon type='checkout-confirmation' />
            <Icon type='checkout' />
            <Icon type='comments' />
            <Icon type='compare' />
            <Icon type='contact-form' />
            <Icon type='contacts' />
            <Icon type='download-file' />
            <Icon type='error' />
            <Icon type='faq' />
            <Icon type='features' />
            <Icon type='feed' />
            <Icon type='file-type-ai' />
            <Icon type='file-type-doc' />
            <Icon type='file-type-jpg' />
            <Icon type='file-type-pdf' />
            <Icon type='file-type-png' />
            <Icon type='file-type-ppt' />
            <Icon type='file-type-psd' />
            <Icon type='file-type-sketch' />
            <Icon type='file-type-svg' />
            <Icon type='file-type-xls' />
            <Icon type='files' />
            <Icon type='gui' />
            <Icon type='item' />
            <Icon type='line-chart' />
            <Icon type='login-form' />
            <Icon type='main' />
            <Icon type='modal' />
            <Icon type='music-track-list' />
            <Icon type='news-grid' />
            <Icon type='news-list' />
            <Icon type='no-image' />
            <Icon type='order-details' />
            <Icon type='order-history' />
            <Icon type='page-404' />
            <Icon type='page-500' />
            <Icon type='page-deleted' />
            <Icon type='page-empty' />
            <Icon type='page-generic' />
            <Icon type='page-landing' />
            <Icon type='page-tech-details' />
            <Icon type='photo-gallery' />
            <Icon type='pie-chart' />
            <Icon type='portfolio' />
            <Icon type='pricing-tiers' />
            <Icon type='project' />
            <Icon type='register-form' />
            <Icon type='search-results' />
            <Icon type='services' />
            <Icon type='sitemap' />
            <Icon type='social-linkedin' />
            <Icon type='success' />
            <Icon type='team' />
            <Icon type='timeline' />
            <Icon type='upload-file' />
            <Icon type='video-player' />
            <Icon type='video' />
            <Icon type='wishlist' />
          </div>
        </main>
      </>
    );
  }
}
