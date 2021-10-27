import ForgotPassword from '../../templates/ForgotPassword';
import Head from 'next/head';
export default function Index() {
  return (
    <>
      <Head>
        <title>Forgot Password</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <ForgotPassword />
    </>
  );
}
