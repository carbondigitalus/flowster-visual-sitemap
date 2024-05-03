// NPM Modules
import type { AppProps } from 'next/app';
import React from 'react';

// Custom Modules
import './../styles/style.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
