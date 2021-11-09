import Layout from '../../components/layout/Layout';
import { wrapper } from '../../redux/store';
import { courseBySlug } from '../../redux/actions/courseAction';
import IntroduceCourse from '../../components/IntroduceCourse';

const Index = () => {
  return <IntroduceCourse />;
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      await store.dispatch(courseBySlug(req, params.id));
    }
);

export default Index;
