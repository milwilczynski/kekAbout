import React from 'react';
import { AppProps } from 'next/app';
import '@styles/global.scss';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { Head } from 'next/document';

function MyApp({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
