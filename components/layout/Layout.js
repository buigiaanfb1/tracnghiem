import React from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import nprogress from 'nprogress';
import Router from 'next/router';

const Layout = ({ children, title = 'Easy10', path }) => {
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.set(1.0);
  Router.onRouteChangeError = () => nprogress.done(1.0);
  // const pathname = ['/login', '/signup'];

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      {/* {pathname.includes(path) ? null : <Navigation />} */}
      <Navigation />
      {children}
    </div>
  );
};

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
