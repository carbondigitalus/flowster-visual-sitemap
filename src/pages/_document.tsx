// NPM Modules
import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class Document extends React.Component {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
