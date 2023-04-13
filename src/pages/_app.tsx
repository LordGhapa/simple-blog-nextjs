import type { AppProps } from 'next/app';
import { GlobalStyle } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Head>
          <title>Blog exemple</title>
          <meta property="og:title" content="Blog exemple" key="title" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
