import Home from '../templates/Home';
import Layout from '../components/layout/Layout';

const Index = () => {
  return <Home />;
};

Index.getLayout = (page) => <Layout title="Home | Easy10">{page}</Layout>;

export default Index;
