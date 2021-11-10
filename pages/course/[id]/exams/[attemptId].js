import Layout from '../../../../components/layout/Layout';
import { wrapper } from '../../../../redux/store';
import Exam from '../../../../components/Exam';
import { getQuestionList } from '../../../../redux/actions/questionsAction';
const Index = () => {
  return <Exam />;
};

Index.getLayout = (page) => <Layout title="Exam name | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, query }) => {
      await store.dispatch(getQuestionList());
    }
);

export default Index;
