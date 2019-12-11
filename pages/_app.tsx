import React from 'react';
import App from 'next/app';

import IndexLayout from '../src/layouts';
import { StateProvider } from '../src/state';

class SMMDB extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return (
      <React.StrictMode>
        <StateProvider>
          <IndexLayout>
            <Component {...pageProps} />
          </IndexLayout>
        </StateProvider>
      </React.StrictMode>
    );
  }
}

export default SMMDB;
