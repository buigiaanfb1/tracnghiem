import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import nprogress from 'nprogress';
import Router from 'next/router';

const Layout = ({ children, title = 'slogan 10 words' }) => {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.set(1.0);
  Router.onRouteChangeError = () => nprogress.done();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
