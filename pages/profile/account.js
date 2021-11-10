import Account from '../../components/Account';
import Layout from '../../components/layout/Layout';
import LayoutProfile from '../../components/layout/LayoutProfile';
import { getSession } from 'next-auth/client';
import { wrapper } from '../../redux/store';

const Index = () => {
  return (
    <LayoutProfile>
      <Account />
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
