import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Navigation from '../Navigation';
import nprogress from 'nprogress';
import Router from 'next/router';
import { useStyles } from './styles';
import { useMediaQuery } from 'react-responsive';
import cls from 'classnames';
import HeaderMobile from '../HeaderMobile';

const Layout = ({ children, title = 'Easy10', path }) => {
  const classes = useStyles();
  Router.onRouteChangeStart = () => nprogress.start();
  Router.onRouteChangeComplete = () => nprogress.set(1.0);
  Router.onRouteChangeError = () => nprogress.done(1.0);

  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad((prev) => !prev);
  }, []);

  const isMobile = useMediaQuery({ query: '(max-width: 600px)' });
  if (!load)
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
        </Head>
        {children}
      </div>
    );
  else
    return (
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0,width=device-width"
          />
        </Head>
        <div className={classes.root}>
          {isMobile && <HeaderMobile />}
          <div
            className={cls(classes.containerNavigationBar, {
              [classes.containerNavigationBarOnHide]: isMobile,
            })}
          >
            <Navigation />
          </div>
          <div
            className={cls(classes.containerComponent, {
              [classes.containerComponentOnHide]: isMobile,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    );
};

export const getLayout = (page) => <Layout>{page}</Layout>;

export default Layout;
