// NPM Modules
import Head from 'next/head';
import React from 'react';

// Custom Modules
import IconExample from '../components/IconExample';

export default class Cards extends React.Component {
  render() {
    return (
      <>
        <Head>
          <title>Card Icon Options</title>
        </Head>
        <main className='main'>
          <div className='center'>
            <h1>Card Icon Options</h1>
          </div>
          <div className='form-wrapper'></div>
          <div className='grid'>
            <IconExample type='about' />
            <IconExample type='address' />
            <IconExample type='alert' />
            <IconExample type='article-left-sidebar' />
            <IconExample type='article-right-sidebar' />
            <IconExample type='article' />
            <IconExample type='bio' />
            <IconExample type='blog-archive-offset' />
            <IconExample type='blog-archive' />
            <IconExample type='calendar' />
            <IconExample type='card-payment' />
            <IconExample type='career-star' />
            <IconExample type='career' />
            <IconExample type='cart' />
            <IconExample type='catalog' />
            <IconExample type='chat' />
            <IconExample type='checkout-confirmation' />
            <IconExample type='checkout' />
            <IconExample type='comments' />
            <IconExample type='compare' />
            <IconExample type='contact-form' />
            <IconExample type='contacts' />
            <IconExample type='download-file' />
            <IconExample type='error' />
            <IconExample type='faq' />
            <IconExample type='features' />
            <IconExample type='feed' />
            <IconExample type='file-type-ai' />
            <IconExample type='file-type-doc' />
            <IconExample type='file-type-jpg' />
            <IconExample type='file-type-pdf' />
            <IconExample type='file-type-png' />
            <IconExample type='file-type-ppt' />
            <IconExample type='file-type-psd' />
            <IconExample type='file-type-sketch' />
            <IconExample type='file-type-svg' />
            <IconExample type='file-type-xls' />
            <IconExample type='files' />
            <IconExample type='gui' />
            <IconExample type='item' />
            <IconExample type='line-chart' />
            <IconExample type='login-form' />
            <IconExample type='main' />
            <IconExample type='modal' />
            <IconExample type='music-track-list' />
            <IconExample type='news-grid' />
            <IconExample type='news-list' />
            <IconExample type='no-image' />
            <IconExample type='order-details' />
            <IconExample type='order-history' />
            <IconExample type='page-404' />
            <IconExample type='page-500' />
            <IconExample type='page-deleted' />
            <IconExample type='page-empty' />
            <IconExample type='page-generic' />
            <IconExample type='page-landing' />
            <IconExample type='page-tech-details' />
            <IconExample type='photo-gallery' />
            <IconExample type='pie-chart' />
            <IconExample type='portfolio' />
            <IconExample type='pricing-tiers' />
            <IconExample type='project' />
            <IconExample type='register-form' />
            <IconExample type='search-results' />
            <IconExample type='services' />
            <IconExample type='sitemap' />
            <IconExample type='social-linkedin' />
            <IconExample type='success' />
            <IconExample type='team' />
            <IconExample type='timeline' />
            <IconExample type='upload-file' />
            <IconExample type='video-player' />
            <IconExample type='video' />
            <IconExample type='wishlist' />
          </div>
        </main>
      </>
    );
  }
}
