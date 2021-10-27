import ResetPassword from '../../../templates/ResetPassword';
import Head from 'next/head';
export default function Index() {
  return (
    <>
      <Head>
        <title>Reset Password</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0,width=device-width" />
      </Head>
      <ResetPassword />
    </>
  );
}
