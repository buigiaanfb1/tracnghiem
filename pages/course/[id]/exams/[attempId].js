import Account from '../../../../components/Account';
import Layout from '../../../../components/layout/Layout';
import { wrapper } from '../../../../redux/config';
import Exam from '../../../../components/Exam';

const Index = () => {
  return <Exam />;
};

Index.getLayout = (page) => <Layout title="Account | Easy10">{page}</Layout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      console.log(params);
    }
);

export default Index;
