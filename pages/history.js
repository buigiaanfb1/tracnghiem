import Layout from '../components/layout/Layout';
import History from '../components/History';

const Index = () => {
  return <History />;
};

Index.getLayout = (page) => <Layout title="History | Easy10">{page}</Layout>;

export default Index;
