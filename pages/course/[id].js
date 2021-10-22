import Account from '../../components/Account';
import Layout from '../../components/layout/Layout';
import { wrapper } from '../../redux/config';
import LayoutProfile from '../../components/layout/LayoutProfile';
import IntroduceCourse from '../../components/IntroduceCourse';

const Index = () => {
  return <IntroduceCourse />;
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      console.log(params.id);
    }
);

export default Index;
