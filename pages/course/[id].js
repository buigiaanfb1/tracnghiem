import Account from '../../components/Account';
import Layout from '../../components/layout/Layout';
import { getSession } from 'next-auth/client';
import { wrapper } from '../../redux/config';
import LayoutProfile from '../../components/layout/LayoutProfile';

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
      console.log(params.id);
    }
);

export default Index;
