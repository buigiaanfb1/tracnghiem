import Account from '../../components/Account';
import Layout from '../../components/layout/Layout';
import LayoutProfile from '../../components/layout/LayoutProfile';

const Index = () => {
  return (
    <LayoutProfile>
      <Account />
    </LayoutProfile>
  );
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export default Index;
