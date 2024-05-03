// NPM Modules
import type { AppProps } from 'next/app';

// Custom Modules
import '@/styles/style.scss';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
