import Layout from '../components/layout/Layout';
import User from '../templates/User';

const Index = () => {
  return <User />;
};

Index.getLayout = (page) => <Layout title="Profile | Easy10">{page}</Layout>;

export default Index;
