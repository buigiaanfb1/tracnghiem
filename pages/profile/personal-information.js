import Layout from '../../components/layout/Layout';
import PersonalInformation from '../../components/PersonalInformation';
import LayoutProfile from '../../components/layout/LayoutProfile';
import { getSession } from 'next-auth/client';
import { wrapper } from '../../redux/store';

const Index = () => {
  return (
    <LayoutProfile>
      <PersonalInformation />
    </LayoutProfile>
  );
};

Index.getLayout = (page) => (
  <Layout title="Personal Information | Easy10">{page}</Layout>
);

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, params }) => {
      const session = await getSession({ req });

      if (!session) {
        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        };
      }
    }
);

export default Index;
