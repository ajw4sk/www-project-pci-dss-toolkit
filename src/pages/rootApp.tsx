import type { AppProps } from 'next/app';
import '../styles/globalStyles.css';

function RootApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default RootApp;
