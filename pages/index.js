import Home from '../templates/Home';
import Layout from '../components/layout/Layout';
import { trendingCourses } from '../redux/actions/courseAction';
import { wrapper } from '../redux/store';

const Index = () => {
  return <Home />;
};

Index.getLayout = (page) => <Layout title="Home | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req }) => {
      await store.dispatch(trendingCourses(req));
    }
);
export default Index;
