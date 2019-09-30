import App from 'next/app';
import React from 'react';
import withReduxStore from '../lib/with-redux-store';
import { Provider } from 'react-redux';
import Meta from '../components/common/meta';

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props
    return (
      <Provider store={reduxStore}>
        <Meta />
        <Component {...pageProps} />
      </Provider>
    )
  }
}

export default withReduxStore(MyApp);
