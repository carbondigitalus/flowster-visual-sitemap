// NPM Modules
import Head from 'next/head';
import React from 'react';

// Custom Modules
import { Icon } from '@/components/icon';

interface PageProps {
  child?: any;
}
interface PageState {
  dataList: any[];
}

export default class Home extends React.Component<PageProps, PageState> {
  constructor(props: PageProps) {
    super(props);

    this.state = {
      dataList: []
    };
  }

  render() {
    return (
      <>
        <Head>
          <title>Google Salience Tool</title>
        </Head>
        <main className='main'>
          <div className='center'>
            <h1>Google Salience Tool</h1>
          </div>
          <div className='form-wrapper'></div>
          <div className='grid'>
            <Icon type='about' />
          </div>
        </main>
      </>
    );
  }
}
