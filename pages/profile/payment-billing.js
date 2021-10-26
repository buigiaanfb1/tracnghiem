import PaymentBilling from '../../components/PaymentBilling';
import Layout from '../../components/layout/Layout';
import LayoutProfile from '../../components/layout/LayoutProfile';
import { getSession } from 'next-auth/client';
import { wrapper } from '../../redux/config';

const Index = () => {
  return (
    <LayoutProfile>
      <PaymentBilling />
    </LayoutProfile>
  );
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
);

export default Index;
